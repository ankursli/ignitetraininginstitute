import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from '@/components/CustomImageWrapper';
import styles from '@/styles/home-copy/Hero.module.css';

const Hero = () => {
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        // Check if desktop on mount
        const checkDevice = () => {
            setIsMobile(window.innerWidth < 992);
        };

        checkDevice();
        window.addEventListener('resize', checkDevice);

        return () => window.removeEventListener('resize', checkDevice);
    }, []);

    return (
        <>
            <Head>
                {/* Preload poster image for mobile (LCP element) */}
                <link
                    rel="preload"
                    as="image"
                    href="/images/video-cover.webp"
                    fetchPriority="high"
                />

                {/* Preconnect to Bunny CDN for faster video loading */}
                <link rel="preconnect" href="https://ignitetraininginstitute.b-cdn.net" />
                <link rel="dns-prefetch" href="https://ignitetraininginstitute.b-cdn.net" />

                {/* Preload video only for desktop */}
                {!isMobile && (
                    <link
                        rel="preload"
                        as="video"
                        href="https://ignitetraininginstitute.b-cdn.net/hero-banner-video2.mp4"
                    />
                )}
            </Head>

            <section className={`${styles.hero} ${styles.homeherosection}`}>
                <div className="container">
                    <div>
                        <div className={`row ${styles.heroMain}`}>
                            <div className={`col-12 col-lg-7 col-xl-7 pe-lg-5 ${styles.heroLeft}`}>
                                <div className={`${styles.heroMainHeading}`}>
                                    <h2 className={styles.SubHeading}>BEST TUTORS IN UAE</h2>
                                </div>

                                <div className="d-lg-none">
                                    <h1 className={`${styles.heroTitleMobile} pt-3 pb-3`}>
                                        Empower Your Academic Goals With <span className="highlight">Ignite's</span> Tutors
                                    </h1>
                                </div>
                                <div className="d-none d-lg-block">
                                    <h1 className={styles.heroTitleDesktop}>
                                        Ignite Your Path To Top <span className="highlight">Academic</span> Performance
                                    </h1>
                                </div>

                                <div>
                                    <div className={styles.heroParagraph}>
                                        <h3>Improve Your Grades Today!</h3>
                                        <b>
                                            We support students in progressing across IBDP, IB MYP, IGCSE, A-Levels, AP, & more through our curriculum-specific approach & expert tutors in Dubai, guiding them toward a stronger understanding & lasting growth.
                                        </b>
                                        <strong>
                                            Ignite's experienced tutors in Dubai help students thrive in IBDP, IB MYP, IGCSE, A-Levels, AP, & more with personalized support & structured programs.
                                        </strong>
                                    </div>
                                </div>
                            </div>

                            <div className={`col-12 col-lg-5 col-xl-5 ${styles.heroRight}`}>
                                <div className={styles.videoContainer}>
                                    {/* Show image on mobile for better LCP, video on desktop */}
                                    {isMobile ? (
                                        <Image
                                            src="/images/video-cover.webp"
                                            alt="Ignite Tutoring Hero"
                                            width={800}
                                            height={600}
                                            priority
                                            fetchPriority="high"
                                            className={styles.heroVideo}
                                        />
                                    ) : (
                                        <video
                                            className={styles.heroVideo}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            preload="auto"
                                            poster="/images/video-cover.webp"
                                        >
                                            <source
                                                src="https://ignitetraininginstitute.b-cdn.net/hero-banner-video2.mp4"
                                                type="video/mp4"
                                            />
                                        </video>
                                    )}
                                </div>

                                <div className={styles.buttonGroup}>
                                    <a href="/join-free-demo-class/" className="buttonBlue">
                                        Get A Free Demo{" "}
                                        <Image
                                            src="/images/right-arrow-skyblue.webp"
                                            width={40}
                                            height={40}
                                            alt="Right arrow"
                                            priority
                                        />
                                    </a>
                                    <a href="/courses/" className="buttonSkyBlue">
                                        Explore Classes{" "}
                                        <Image
                                            src="/images/right-arrow-blue.webp"
                                            width={40}
                                            height={40}
                                            alt="Right arrow"
                                            priority
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;