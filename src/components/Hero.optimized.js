import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '../styles/Hero.module.css';

const Hero = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {

        if ('requestIdleCallback' in window) {
            requestIdleCallback(() => {
                loadVideo();
            });
        } else {
            setTimeout(loadVideo, 1000);
        }
    }, []);

    const loadVideo = () => {
        if (videoRef.current) {
            // Load video source dynamically
            const source = document.createElement('source');
            source.src = '/videos/hero-banner-video2.mp4';
            source.type = 'video/mp4';
            videoRef.current.appendChild(source);
            videoRef.current.load();
        }
    };

    const handleVideoLoad = () => {
        setVideoLoaded(true);
        if (videoRef.current) {
            videoRef.current.play().catch(err => {
                console.log('Video autoplay prevented:', err);
            });
        }
    };

    return (
        <section className={styles.hero}>
            <div className={styles.videoContainer}>
                {/* CRITICAL: Use poster image as LCP element */}
                <Image
                    src="/images/hero-poster.webp"
                    alt="Ignite Training Institute - Best Tutors in UAE"
                    fill
                    priority
                    fetchPriority="high"
                    quality={90}
                    sizes="100vw"
                    className={styles.heroPoster}
                    style={{
                        objectFit: 'cover',
                        opacity: videoLoaded ? 0 : 1,
                        transition: 'opacity 0.5s ease-in-out',
                    }}
                />

                {/* Video loads lazily after poster image */}
                <video
                    ref={videoRef}
                    className={styles.heroVideo}
                    muted
                    loop
                    playsInline
                    poster="/images/hero-poster.webp"
                    onLoadedData={handleVideoLoad}
                    style={{
                        opacity: videoLoaded ? 1 : 0,
                        transition: 'opacity 0.5s ease-in-out',
                    }}
                    preload="none"
                >
                    {/* Source added dynamically via JavaScript */}
                </video>
            </div>

            <div className={styles.heroContent}>
                <div className="container">
                    <h1 className={styles.heroTitle}>
                        BEST TUTORS IN UAE
                    </h1>
                    <p className={styles.heroSubtitle}>
                        EMPOWER YOUR ACADEMIC GOALS WITH IGNITE'S TUTORS
                    </p>
                    <a href="/join-free-demo-class" className={styles.heroButton}>
                        Get a Free Demo
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
