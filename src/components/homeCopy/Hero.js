import React from "react";
import Head from "next/head";
import Image from '@/components/CustomImageWrapper';
import styles from '@/styles/home-copy/Hero.module.css';

const Hero = () => {
    return (
        <>
            <Head>
                {/* Preload the poster image with high priority */}
                <link rel="preload" as="image" href="/images/video-cover.webp" fetchPriority="high" />

                {/* Preload the video for faster LCP */}
                <link rel="preload" as="video" href="/videos/hero-banner-video2.mp4" />
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
                                    <video
                                        className={styles.heroVideo}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        preload="auto"
                                        poster="/images/video-cover.webp"
                                        fetchpriority="high"
                                    >
                                        <source src="/videos/hero-banner-video2.mp4" type="video/mp4" />
                                    </video>
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