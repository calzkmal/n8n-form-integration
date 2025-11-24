'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const pathname = usePathname()

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            background: 'hsla(240, 12%, 10%, 0.8)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '1rem 2rem',
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <Link href="/" style={{ textDecoration: 'none' }}>
                    <div style={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        background: 'linear-gradient(135deg, var(--primary-200), var(--accent-light))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        cursor: 'pointer',
                    }}>
                        Home
                    </div>
                </Link>

                <div style={{
                    display: 'flex',
                    gap: '1.5rem',
                }}>
                    <Link
                        href="/form-submission"
                        style={{
                            color: pathname === '/form-submission' ? 'var(--primary-300)' : 'var(--text-secondary)',
                            textDecoration: 'none',
                            fontSize: '0.95rem',
                            fontWeight: 500,
                            transition: 'color var(--transition-base)',
                            padding: '0.5rem 1rem',
                            borderRadius: 'var(--radius-md)',
                            background: pathname === '/form-submission' ? 'hsla(var(--primary-hue), var(--primary-sat), var(--primary-light), 0.1)' : 'transparent',
                        }}
                    >
                        Form Submission
                    </Link>
                    <Link
                        href="/news-scraper"
                        style={{
                            color: pathname === '/news-scraper' ? 'var(--primary-300)' : 'var(--text-secondary)',
                            textDecoration: 'none',
                            fontSize: '0.95rem',
                            fontWeight: 500,
                            transition: 'color var(--transition-base)',
                            padding: '0.5rem 1rem',
                            borderRadius: 'var(--radius-md)',
                            background: pathname === '/news-scraper' ? 'hsla(var(--primary-hue), var(--primary-sat), var(--primary-light), 0.1)' : 'transparent',
                        }}
                    >
                        News Scraper
                    </Link>
                </div>
            </div>
        </nav>
    )
}
