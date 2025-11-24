'use client'

import { useEffect, useState } from 'react'
import FormComponent from '@/components/FormComponent'

export default function Home() {
    const [year, setYear] = useState('')
    const [isWorkflowActive, setIsWorkflowActive] = useState<boolean | null>(null)

    // Check workflow status
    const checkWorkflowStatus = async () => {
        try {
            const response = await fetch('/api/check-workflow')
            const statusData = await response.json()
            setIsWorkflowActive(statusData.isActive)
        } catch (error) {
            console.error('Failed to check workflow status:', error)
            setIsWorkflowActive(false)
        }
    }

    useEffect(() => {
        // Set year on client side to avoid hydration mismatch
        setYear(new Date().getFullYear().toString())

        // Check workflow status once on mount
        checkWorkflowStatus()

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

        // Scroll reveal animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed')
                }
            })
        }, observerOptions)

        const revealElements = document.querySelectorAll('.scroll-reveal')
        revealElements.forEach(el => observer.observe(el))

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
            observer.disconnect()
        }
    }, [])

    return (
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
                        <span className={`status-dot ${isWorkflowActive === null ? 'checking' : isWorkflowActive ? 'active' : 'inactive'}`}></span>
                        <span>
                            {isWorkflowActive === null
                                ? 'Checking workflow status...'
                                : isWorkflowActive
                                    ? 'Workflow Active'
                                    : 'Workflow Inactive'}
                        </span>
                    </div>

                    <h1 className="hero-title">
                        Seamless n8n Integration
                    </h1>

                    <p className="hero-subtitle">
                        Simple form to test data input through webhook, that allows dashboard integration.
                        Real-time responses (Automated using AI).
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="main-content">
                <div className="content-wrapper">
                    <h2 className="section-title scroll-reveal">Send Your Data</h2>
                    <div className="scroll-reveal">
                        <FormComponent />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="footer-logo">n8n Form</div>
                        <p>
                            A modern, beautiful form interface for testing n8n workflow integration.
                            Built using Next.js and Antigravity.
                        </p>
                        <div className="footer-social">
                            <a href="https://github.com/calzkmal" className="social-icon" aria-label="GitHub">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a href="https://linkedin.com/in/calzkmal/" className="social-icon" aria-label="LinkedIn">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3>Resources</h3>
                        <div className="footer-links">
                            <a href="https://n8n.io" target="_blank" rel="noopener noreferrer">n8n Documentation</a>
                            <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">Next.js Docs</a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3>Contact</h3>
                        <div className="footer-links">
                            <a href="mailto:support@example.com">calzkmal@gmail.com</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {year || '2025'}. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}
