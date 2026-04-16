import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.png'

const Navbar = () => {
    const location = useLocation()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const tabs = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' }
    ]

    const activeIndex = tabs.findIndex((tab) => tab.path === location.pathname)

    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [location.pathname])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMobileMenuOpen(false)
            }
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <nav className={`navbar-wrapper ${isMobileMenuOpen ? 'is-mobile-open' : ''}`}>
            <div className="logo-container">
                <Link to="/" className="brand-link">
                    <img src={logo} alt="IterDX Global" className="logo-img" />
                    <span className="brand-text">ITERDX GLOBAL</span>
                </Link>
            </div>

            <button
                type="button"
                className={`nav-toggle ${isMobileMenuOpen ? 'is-open' : ''}`}
                aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
                <span className="nav-toggle__line" />
                <span className="nav-toggle__line" />
                <span className="nav-toggle__line" />
            </button>

            <div className={`nav-pill-container ${isMobileMenuOpen ? 'is-open' : ''}`}>
                <div className="nav-pill">
                    {activeIndex !== -1 && (
                        <motion.div
                            className="active-pill-bg"
                            initial={false}
                            animate={{ x: `calc(${activeIndex} * var(--pill-item-width))` }}
                            transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                        />
                    )}

                    {tabs.map((tab) => (
                        <Link
                            key={tab.name}
                            to={tab.path}
                            className={`nav-item ${location.pathname === tab.path ? 'is-active' : ''}`}
                        >
                            <span>{tab.name}</span>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="inquiry-btn-container">
                <Link className="inquiry-btn" to="/contact">
                    Inquiry
                </Link>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="nav-mobile-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar