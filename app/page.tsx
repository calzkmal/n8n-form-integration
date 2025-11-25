'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Home() {
    const [year, setYear] = useState('')

    useEffect(() => {
        setYear(new Date().getFullYear().toString())

        // Parallax scroll effect
        const handleScroll = () => {
            const scrolled = window.scrollY
            const parallaxShapes = document.querySelectorAll('.parallax-shape')

            parallaxShapes.forEach((shape, index) => {
                const speed = (index + 1) * 0.5
                const yPos = -(scrolled * speed)
                    ; (shape as HTMLElement).style.transform = `translateY(${yPos}px)`
            })
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <Navbar />
            <div className="parallax-container" style={{ paddingTop: '80px', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                {/* Parallax Background */}
                <div className="parallax-bg">
                    <div className="parallax-shape"></div>
                    <div className="parallax-shape"></div>
                    <div className="parallax-shape"></div>
                </div>

                {/* Hero Section */}
                <section className="hero-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
                    <div className="hero-content">
                        <div className="hero-badge">
                            <span className="status-dot active"></span>
                            <span>Sentomate</span>
                        </div>

                        <h1 className="hero-title">
                            Where the magic happens ✨
                        </h1>

                        <p className="hero-subtitle">
                            Sentomate is a modern, responsive dashboard for managing n8n workflows and automations.
                            Select a tool below to get started.
                        </p>

                        <div className="hero-grid">
                            {/* Form Submission Card */}
                            <Link href="/form-submission" style={{ textDecoration: 'none' }}>
                                <div className="glass-card" style={{
                                    padding: '2rem',
                                    height: '100%',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    textAlign: 'left'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-5px)'
                                        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)'
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)'
                                        e.currentTarget.style.boxShadow = 'none'
                                    }}
                                >
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '12px',
                                        background: 'linear-gradient(135deg, var(--primary-500), var(--accent-light))',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '1.5rem',
                                        fontSize: '1.5rem'
                                    }}>
                                        📝
                                    </div>
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        fontWeight: 600,
                                        marginBottom: '0.75rem',
                                        color: 'var(--text-primary)'
                                    }}>Form Submission</h3>
                                    <p style={{
                                        color: 'var(--text-secondary)',
                                        lineHeight: 1.6,
                                        margin: 0
                                    }}>
                                        Submit data directly to your n8n workflows. Test webhooks and data processing in real-time.
                                    </p>
                                </div>
                            </Link>

                            {/* News Scraper Card */}
                            <Link href="/news-scraper" style={{ textDecoration: 'none' }}>
                                <div className="glass-card" style={{
                                    padding: '2rem',
                                    height: '100%',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    textAlign: 'left'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-5px)'
                                        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)'
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)'
                                        e.currentTarget.style.boxShadow = 'none'
                                    }}
                                >
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '12px',
                                        background: 'linear-gradient(135deg, #10b981, #34d399)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '1.5rem',
                                        fontSize: '1.5rem'
                                    }}>
                                        📰
                                    </div>
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        fontWeight: 600,
                                        marginBottom: '0.75rem',
                                        color: 'var(--text-primary)'
                                    }}>News Scraper</h3>
                                    <p style={{
                                        color: 'var(--text-secondary)',
                                        lineHeight: 1.6,
                                        margin: 0
                                    }}>
                                        Configure and control your news scraper bot. Select countries, categories, or search for specific topics.
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    )
}
