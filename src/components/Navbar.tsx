'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Navbar() {
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link className="navbar-logo" href="/" onClick={closeMobileMenu}>
                        Sentomate
                    </Link>

                    {/* Desktop Menu */}
                    <div className="desktop-only">
                        <Link className="navbar-link" href="/form-submission" onClick={closeMobileMenu}>
                            Form Submission
                        </Link>

                        <Link className="navbar-link" href="/news-scraper" onClick={closeMobileMenu}>
                            News Scraper
                        </Link>
                    </div>

                    {/* Mobile Burger Button */}
                    <button className={`burger-button mobile-only ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu} aria-label="Toggle menu">
                        <span className="burger-line"></span>
                        <span className="burger-line"></span>
                        <span className="burger-line"></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
                <Link href="/form-submission" onClick={closeMobileMenu} className={`mobile-menu-link ${pathname === '/form-submission' ? 'active' : ''}`}>
                    Form Submission
                </Link>
                <Link href="/news-scraper" onClick={closeMobileMenu} className={`mobile-menu-link ${pathname === '/news-scraper' ? 'active' : ''}`}>
                    News Scraper
                </Link>
            </div>
        </>
    )
}
