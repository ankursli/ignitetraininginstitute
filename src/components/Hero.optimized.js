import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '../styles/Hero.module.css';

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (videoRef.current) {
        const source = document.createElement('source');
        source.src = '/videos/hero-banner-video2.mp4';
        source.type = 'video/mp4';
        videoRef.current.appendChild(source);
        videoRef.current.load();
      }
    }, 4000); // Increased to 4s to give mobile LCP more breathing room
    return () => clearTimeout(timeout);
  }, []);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
    videoRef.current?.play().catch(() => {});
  };

  return (
    <section className={styles.hero}>
      {/* NEXT.JS OPTIMIZED IMAGE */}
      <Image
        src="/images/hero-poster.webp"
        alt="Ignite Training Institute - Best Tutors in UAE"
        fill
        priority // This triggers the high-priority preload automatically
        quality={75} // Lowering quality slightly for faster mobile loading
        sizes="(max-width: 768px) 100vw, 100vw"
        className={styles.heroPoster}
        style={{ objectFit: 'cover' }}
      />

      <video
        ref={videoRef}
        className={styles.heroVideo}
        muted
        loop
        playsInline
        onLoadedData={handleVideoLoad}
        preload="none"
        style={{ opacity: videoLoaded ? 1 : 0, zIndex: 2 }}
      />

      <div className={styles.heroOverlay}>
        <div className="container">
          <h1 className={styles.heroTitle}>BEST TUTORS IN UAE</h1>
          <p className={styles.heroSubtitle}>
            EMPOWER YOUR ACADEMIC GOALS WITH IGNITE&apos;S TUTORS
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
