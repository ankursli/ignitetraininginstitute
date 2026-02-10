import { useEffect, useRef } from 'react';
import Head from "next/head";
import Accordion from '@/components/ibdp/accordian';
import MarqueeBanner from '@/components/ibdp/MarqueeBanner';
import ReviewsSection from '@/components/ibdp/ReviewsSection';
import InfoCard from '@/components/subject-tutoring/infoCard';
import ChhoseApp from '@/components/subject-tutoring/choose-app';
import ACT from '@/components/subject-tutoring/ACT';
import Usps from "@/components/homeCopy/Usps";
import IgniteAchievements from '@/components/subject-tutoring/IgniteAchievements';
import LifeAtIgniteCarousel from '@/components/subject-tutoring/LifeAtIgniteCarousel';
import FAQSection from '@/components/subject-tutoring/FaqSection';
import StudentAchievements from '@/components/subject-tutoring/StudentAchivement';
// import Hero from '@/components/home/Hero';

// 1. ACCEPT the headerHeight prop
const SubjectTutoring = ({ headerHeight }) => {
  const scrollRef = useRef(null);
  const scrollInstanceRef = useRef(null);

  useEffect(() => {
    let scroll;

    const initScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      if (!scrollRef.current) return;

      scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.1,
        // optional:
        getDirection: true,
        getSpeed: true,
        multiplier: 1,
      });

      scrollInstanceRef.current = scroll;
    };

    if (typeof window !== "undefined") {
      initScroll();
    }

    return () => {
      scrollInstanceRef.current?.destroy();
      scrollInstanceRef.current = null;
    };
  }, []);

  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/assets/subject-tutoring-m.webp"
          as="image"
          type="image/webp"
          media="(max-width: 768px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/assets/subject-tutoring.webp"
          as="image"
          type="image/webp"
          media="(min-width: 769px)"
          fetchPriority="high"
        />
      </Head>
    // 2. APPLY the style for paddingTop to the scroll container
      <div
        ref={scrollRef}
        className="overflow-hidden innerpage page-content-padding"
        data-scroll-container
      >

        <section className="hero-section" data-scroll-section>
          <div className="hero-container">
            {/* LCP Image moved here for immediate painting (SSR) */}
            <picture className="hero-bg">
              <source media="(max-width: 768px)" srcSet="/assets/subject-tutoring-m.webp" />
              <img
                src="/assets/subject-tutoring.webp"
                alt="Subject Tutoring Background"
                fetchPriority="high"
                decoding="sync"
                width="1200"
                height="800"
                className="hero-img"
                style={{ opacity: 1, visibility: 'visible' }}
              />
            </picture>

            {/* Interactive Content */}
            <InfoCard />
          </div>

          <style jsx>{`
            .hero-container {
              position: relative;
              max-width: 90vw;
              margin-inline: auto;
              margin-block: 0;
              min-height: 750px;
              border-radius: 1.5rem;
              overflow: hidden;
              isolation: isolate; /* Creates stacking context */
            }
            .hero-bg {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: -1;
            }
            .hero-img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              object-position: center;
            }
            @media (max-width: 1100px) {
              .hero-container {
                max-width: 95vw;
              }
            }
          `}</style>
        </section>

        {/* <section data-scroll-section>
        <StudentAchievements />
      </section> */}


        <section data-scroll-section>
          <MarqueeBanner />
        </section>

        <section data-scroll-section>
          <ChhoseApp />
        </section>

        <section data-scroll-section>
          <ACT />
        </section>

        <section data-scroll-section>
          <ReviewsSection />
        </section>

        <section data-scroll-section>
          <IgniteAchievements />
        </section>

        <section data-scroll-section>
          <Usps />
        </section>

        {/* <section data-scroll-section>
        <LifeAtIgniteCarousel />
      </section> */}

        <section data-scroll-section>
          <FAQSection />
        </section>

        <section data-scroll-section>
          <Accordion />
        </section>
      </div>
    </>
  );
};

export default SubjectTutoring;