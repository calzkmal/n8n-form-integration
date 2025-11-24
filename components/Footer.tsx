'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Footer() {
    const [year, setYear] = useState('')

    useEffect(() => {
        setYear(new Date().getFullYear().toString())
    }, [])

    return (
        <footer className="footer" style={{ marginTop: 'auto' }}>
            <div className="footer-content" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '2rem',
                padding: '2rem 0',
                borderBottom: '1px solid var(--border-subtle)',
                marginBottom: '1.5rem'
            }}>
                {/* Brand Section */}
                <div className="footer-section">
                    <div className="footer-logo" style={{ marginBottom: '1rem' }}>Sentomate</div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                        Sentomate is a modern, responsive dashboard for managing n8n workflows and automations.
                        Built on Next.js using Claude, Gemini, and styled with vanilla CSS.
                    </p>
                </div>

                {/* Socials & Contact */}
                <div className="footer-section">
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: 600 }}>Connect</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <a href="https://github.com/calzkmal" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.2s' }} className="footer-link">
                            <span>GitHub</span>
                        </a>
                        <a href="https://linkedin.com/in/calzkmal" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.2s' }} className="footer-link">
                            <span>LinkedIn</span>
                        </a>
                        <a href="mailto:calzkmal@gmail.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.2s' }} className="footer-link">
                            <span>Contact</span>
                        </a>
                    </div>
                </div>

                {/* Documentation */}
                <div className="footer-section">
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: 600 }}>Documentation</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <a href="https://n8n.io/docs" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link">
                            n8n Documentation
                        </a>
                        <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link">
                            Next.js Documentation
                        </a>
                        <a href="https://newsapi.org/docs" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link">
                            News API Docs
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom" style={{ textAlign: 'center', color: 'var(--text-tertiary)', fontSize: '0.875rem' }}>
                <p>&copy; {year || '2025'} Sentomate. All rights reserved.</p>
            </div>
        </footer>
    )
}
