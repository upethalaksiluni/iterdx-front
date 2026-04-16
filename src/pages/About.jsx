import React from 'react'
import { motion } from 'framer-motion'

const leftReveal = {
    initial: { opacity: 0, x: -70, y: 12, filter: 'blur(10px)' },
    whileInView: { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
}

const rightReveal = {
    initial: { opacity: 0, x: 70, y: 12, filter: 'blur(10px)' },
    whileInView: { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
}

const imageLeft = {
    initial: { opacity: 0, x: -90, scale: 0.95, filter: 'blur(12px)' },
    whileInView: { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' },
    viewport: { once: true, amount: 0.18 },
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
}

const imageRight = {
    initial: { opacity: 0, x: 90, scale: 0.95, filter: 'blur(12px)' },
    whileInView: { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' },
    viewport: { once: true, amount: 0.18 },
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
}

const aboutTopImage =
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80'
const aboutMiddleImage =
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80'
const aboutBottomImage =
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80'

const About = () => {
    return (
        <section className="about-page">
            <div className="about-block top">
                <div className="about-shell">
                    <div className="about-grid about-grid-top">
                        <motion.div className="about-copy top-copy" {...leftReveal}>
                            <h1 className="about-main-title">About IterDX</h1>
                            <p className="about-paragraph">
                                IterDX is a strategic digital consultancy and product implementation partner.
                                We help organizations move from fragmented legacy operations to stable,
                                high-performance digital environments built for speed, control, and growth.
                            </p>
                        </motion.div>

                        <motion.div className="about-image-box top" {...imageRight}>
                            <img src={aboutTopImage} alt="IterDX strategy workshop" className="about-image" />
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="about-block middle">
                <div className="about-shell">
                    <div className="about-grid reverse">
                        <motion.div className="about-image-box middle" {...imageLeft}>
                            <img src={aboutMiddleImage} alt="IterDX consulting session" className="about-image" />
                        </motion.div>

                        <motion.div className="about-copy wide" {...rightReveal}>
                            <h2 className="about-heading">Why IterDX: Navigating the Shift</h2>
                            <p className="about-paragraph">
                                We work with businesses that know change is necessary but need a clear way
                                forward. Our role is to simplify digital transformation into practical,
                                structured action through automation, security, reporting, and system design.
                            </p>
                            <p className="about-paragraph">
                                Instead of generic advice, we create implementation-ready frameworks that help
                                teams reduce waste, improve decision-making, and operate with more certainty.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="about-block bottom">
                <div className="about-shell">
                    <div className="about-grid">
                        <motion.div className="about-copy" {...leftReveal}>
                            <h2 className="about-heading">Who We Are: Building the Future</h2>
                            <p className="about-paragraph">
                                We combine consultancy thinking with hands-on product execution. That means we
                                do not stop at recommendations. We design, refine, and implement the systems
                                that power better operations.
                            </p>
                            <p className="about-paragraph">
                                From front-end experience to digital infrastructure, our work is shaped around
                                long-term resilience, stronger business foundations, and scalable growth.
                            </p>
                        </motion.div>

                        <motion.div className="about-image-box bottom" {...imageRight}>
                            <img src={aboutBottomImage} alt="IterDX engineering collaboration" className="about-image" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default About