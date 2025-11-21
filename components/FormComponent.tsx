'use client'

import { useState, FormEvent } from 'react'

interface FormData {
    name: string
    email: string
    message: string
}

interface ResponseData {
    success?: boolean
    message?: string
    data?: any
    error?: string
    details?: string
}

export default function FormComponent() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [response, setResponse] = useState<ResponseData | null>(null)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setResponse(null)

        try {
            const res = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await res.json()
            setResponse(data)

            // Reset form on success
            if (data.success) {
                setFormData({ name: '', email: '', message: '' })
            }
        } catch (error) {
            setResponse({
                error: 'Failed to submit form',
                details: error instanceof Error ? error.message : 'Unknown error',
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    return (
        <div className="glass-card" style={{ padding: '2rem' }}>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-input"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        disabled={isSubmitting}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        disabled={isSubmitting}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message" className="form-label">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className="form-textarea"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your message"
                        required
                        disabled={isSubmitting}
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                    style={{ width: '100%' }}
                >
                    {isSubmitting && <span className="spinner" />}
                    {isSubmitting ? 'Sending...' : 'Send to n8n'}
                </button>
            </form>

            {response && (
                <div className={`response-box ${response.error ? 'error' : 'success'}`}>
                    <div className="response-title">
                        {response.error ? 'Error' : 'Success'}
                    </div>
                    <div className="response-content">
                        {response.error ? (
                            <>
                                <div>{response.error}</div>
                                {response.details && <div style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>{response.details}</div>}
                            </>
                        ) : (
                            <>
                                <div>
                                    {response.data?.message || response.message}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
