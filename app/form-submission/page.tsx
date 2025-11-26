'use client'

import { useEffect, useState } from 'react'
import FormComponent from '@/src/components/MessageForm'
import Navbar from '@/src/components/Navbar'
import WorkflowStatusBadge from '@/src/components/WorkflowStatusBadge'

import Footer from '@/src/components/Footer'

export default function FormPage() {
    const [year, setYear] = useState('')

    useEffect(() => {
        // Set year on client side to avoid hydration mismatch
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
                        <WorkflowStatusBadge />

                        <h1 className="hero-title">
                            Sample Form Submission
                        </h1>

                        <p className="hero-subtitle">
                            Simple form to test data input through webhook, that allows dashboard integration.
                            Provides real-time responses.
                        </p>
                    </div>
                </section>

                {/* Main Content */}
                <section className="main-content">
                    <div className="content-wrapper">
                        <h2 className="section-title scroll-reveal">Send a Message</h2>
                        <div className="scroll-reveal">
                            <FormComponent />
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    )
}
