'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/src/components/Navbar'
import Footer from '@/src/components/Footer'
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
            <div className="parallax-container">
                {/* Parallax Background */}
                <div className="parallax-bg">
                    <div className="parallax-shape"></div>
                    <div className="parallax-shape"></div>
                    <div className="parallax-shape"></div>
                </div>

                {/* Hero Section */}
                <section className="hero-section">
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
                            <Link className="link" href="/form-submission">
                                <div className="glass-card">
                                    <div className="card-icon primary">
                                        📝
                                    </div>
                                    <h3 className="card-title">
                                        Form Submission
                                    </h3>
                                    <p className="card-text">
                                        Submit data directly to your n8n workflows. Test webhooks and data processing in real-time.
                                    </p>
                                </div>
                            </Link>

                            {/* News Scraper Card */}
                            <Link className="link" href="/news-scraper">
                                <div className="glass-card">
                                    <div className="card-icon secondary">
                                        📰
                                    </div>
                                    <h3 className="card-title">
                                        News Scraper
                                    </h3>
                                    <p className="card-text">
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
