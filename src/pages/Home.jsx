import React from 'react'
import { motion } from 'framer-motion'
import HomeServicesCarousel from '../components/HomeServicesCarousel.jsx'
import HomeAboutPreview from '../components/HomeAboutPreview.jsx'
import ContactPreview from '../components/ContactPreview.jsx'

const Home = () => {
    return (
        <>
            <section id="home" className="hero-section">
                <motion.p
                    className="hero-kicker"
                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1.2 }}
                >
                    DIGITAL EXCELLENCE. REDEFINED.
                </motion.p>

                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 30, filter: 'blur(15px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                >
                    Senior React Architect & <br /> Web Implementation Partner
                </motion.h1>

                <motion.p
                    className="hero-subtext"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                >
                    Bridging the gap between generic templates and high-standard brand execution with scalable React and modern front-end systems.
                </motion.p>
            </section>

            <HomeAboutPreview />
            <HomeServicesCarousel />
            <ContactPreview />
        </>
    )
}

export default Home