'use client'

import { useEffect, useState } from 'react'
import NewsScraperForm from '@/components/NewsScraperForm'
import Navbar from '@/components/Navbar'
import WorkflowStatusBadge from '@/components/WorkflowStatusBadge'

import Footer from '@/components/Footer'

export default function NewsScraperPage() {
    const [year, setYear] = useState('')

    useEffect(() => {
        setYear(new Date().getFullYear().toString())
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
                <section className="hero-section">
                    <div className="hero-content">
                        <WorkflowStatusBadge />

                        <h1 className="hero-title">
                            News API Scraper
                        </h1>

                        <p className="hero-subtitle">
                            Configure and control your news scraper bot with custom parameters.
                            Select country, category, sources, or search by keywords.
                        </p>
                    </div>
                </section>

                {/* Main Content */}
                <section className="main-content">
                    <div className="content-wrapper">
                        <h2 className="section-title scroll-reveal">Configure Scraper</h2>
                        <div className="scroll-reveal">
                            <NewsScraperForm />
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    )
}
