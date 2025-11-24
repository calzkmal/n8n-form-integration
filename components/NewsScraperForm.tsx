'use client'

import { useState, FormEvent } from 'react'

interface NewsScraperFormData {
    country: string
    category: string
    sources: string
    q: string
}

interface ResponseData {
    success?: boolean
    message?: string
    data?: any
    error?: string
    details?: string
}

export default function NewsScraperForm() {
    const [formData, setFormData] = useState<NewsScraperFormData>({
        country: '',
        category: '',
        sources: '',
        q: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [response, setResponse] = useState<ResponseData | null>(null)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setResponse(null)

        try {
            const res = await fetch('/api/news-scraper', {
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
                setFormData({ country: '', category: '', sources: '', q: '' })
            }
        } catch (error) {
            setResponse({
                error: 'Failed to submit request',
                details: error instanceof Error ? error.message : 'Unknown error',
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    return (
        <div className="glass-card" style={{ padding: '2rem' }}>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="country" className="form-label">
                        Country (2-letter code)
                    </label>
                    <select
                        id="country"
                        name="country"
                        className="form-input"
                        value={formData.country}
                        onChange={handleChange}
                        disabled={isSubmitting || !!formData.sources}
                    >
                        <option value="">Select country (optional)</option>
                        <option value="us">United States (us)</option>
                        <option value="gb">United Kingdom (gb)</option>
                        <option value="ca">Canada (ca)</option>
                        <option value="au">Australia (au)</option>
                        <option value="de">Germany (de)</option>
                        <option value="fr">France (fr)</option>
                        <option value="jp">Japan (jp)</option>
                        <option value="in">India (in)</option>
                    </select>
                    <small style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block' }}>
                        Note: Cannot be used with sources parameter
                    </small>
                </div>

                <div className="form-group">
                    <label htmlFor="category" className="form-label">
                        Category
                    </label>
                    <select
                        id="category"
                        name="category"
                        className="form-input"
                        value={formData.category}
                        onChange={handleChange}
                        disabled={isSubmitting || !!formData.sources}
                    >
                        <option value="">Select category (optional)</option>
                        <option value="business">Business</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="general">General</option>
                        <option value="health">Health</option>
                        <option value="science">Science</option>
                        <option value="sports">Sports</option>
                        <option value="technology">Technology</option>
                    </select>
                    <small style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block' }}>
                        Note: Cannot be used with sources parameter
                    </small>
                </div>

                <div className="form-group">
                    <label htmlFor="sources" className="form-label">
                        Sources
                    </label>
                    <input
                        type="text"
                        id="sources"
                        name="sources"
                        className="form-input"
                        value={formData.sources}
                        onChange={handleChange}
                        placeholder="e.g., bbc-news,cnn,techcrunch"
                        disabled={isSubmitting || !!formData.country || !!formData.category}
                    />
                    <small style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block' }}>
                        Comma-separated source identifiers. Cannot be used with country/category
                    </small>
                </div>

                <div className="form-group">
                    <label htmlFor="q" className="form-label">
                        Search Keywords
                    </label>
                    <input
                        type="text"
                        id="q"
                        name="q"
                        className="form-input"
                        value={formData.q}
                        onChange={handleChange}
                        placeholder="Enter keywords or phrase"
                        disabled={isSubmitting}
                    />
                    <small style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block' }}>
                        Optional: Search for specific keywords or phrases
                    </small>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                    style={{ width: '100%' }}
                >
                    {isSubmitting && <span className="spinner" />}
                    {isSubmitting ? 'Scraping...' : 'Start News Scraper'}
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
