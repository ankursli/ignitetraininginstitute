import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from '@/components/CustomImageWrapper';
import styles from '@/styles/home-copy/Hero.module.css';

const Hero = () => {
    const videoRef = useRef(null);
    const [videoLoaded, setVideoLoaded] = useState(false);


    useEffect(() => {
        const loadVideo = () => {
            if (videoRef.current && !videoLoaded) {
                const source = document.createElement('source');
                source.src = '/videos/hero-banner-video2.mp4';
                source.type = 'video/mp4';
                videoRef.current.appendChild(source);
                videoRef.current.load();
                setVideoLoaded(true);
            }
        };

        if ('requestIdleCallback' in window) {
            requestIdleCallback(loadVideo, { timeout: 2000 });
        } else {
            setTimeout(loadVideo, 1000);
        }

        const handleInteraction = () => {
            loadVideo();
            document.removeEventListener('scroll', handleInteraction);
            document.removeEventListener('touchstart', handleInteraction);
            document.removeEventListener('mousedown', handleInteraction);
        };

        document.addEventListener('scroll', handleInteraction, { passive: true, once: true });
        document.addEventListener('touchstart', handleInteraction, { passive: true, once: true });
        document.addEventListener('mousedown', handleInteraction, { passive: true, once: true });

        return () => {
            document.removeEventListener('scroll', handleInteraction);
            document.removeEventListener('touchstart', handleInteraction);
            document.removeEventListener('mousedown', handleInteraction);
        };
    }, [videoLoaded]);

    return (
        <>
            <Head>
                <link rel="preload" as="image" href="/images/video-cover.webp" fetchPriority="high" />
            </Head>

            <div className={styles.heroSectionWrapper}>
                <section className={`${styles.hero} ${styles.homeherosection}`}>
                    <div className="container">
                        <div className={`row ${styles.heroMain}`}>
                            <div className={`col-12 col-lg-7 col-xl-7 pe-lg-5 ${styles.heroLeft}`}>
                                <div className={`${styles.heroMainHeading}`}>
                                    <h1 className={styles.SubHeading}>BEST TUTORS IN UAE</h1>
                                </div>

                                <h2 className={styles.heroTitle}>
                                    <span className={styles.heroTitleDesktop}>
                                        Ignite Your Path To Top <span className="highlight">Academic</span> Performance
                                    </span>
                                    <span className={styles.heroTitleMobile}>
                                        Empower Your Academic Goals With <span className="highlight">Ignite's</span> Tutors
                                    </span>
                                </h2>

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

                            <div className={`col-12 col-lg-5 col-xl-5 ${styles.heroRight}`}>
                                <div className={styles.videoContainer}>
                                    <video
                                        ref={videoRef}
                                        className={styles.heroVideo}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        preload="metadata"
                                        poster="/images/video-cover.webp"
                                        fetchPriority="high"
                                    ></video>
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
                </section>
            </div>
        </>
    );
};

export default Hero;