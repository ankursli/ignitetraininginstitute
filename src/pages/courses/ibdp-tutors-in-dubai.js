// import MovingBanner from '@/components/home/MovingBanner';
import LazySection from "@/components/LazySection";
import Head from "next/head";
// import Testimonial from '@/components/home/Testimonial';
import Accordion from '@/components/ibdp/accordian';
import Blog from "@/components/ibdp/Blog";
import CourseCard from '@/components/ibdp/CourseCard';
//import OurTrainers from '@/components/tutors-jlt-dubai/ourTrainers';
import FAQSection from '@/components/ibdp/FaqSection';
import IgniteAchievements from '@/components/ibdp/IgniteAchievements';
import InfoCard from '@/components/ibdp/InfoCard';
import IgniteAboutCard from "@/components/ibdp/IgniteAboutCard";
import WhatWeOfferSection from '@/components/ibdp/WhatWeOfferSection';
import Trainers from "@/components/ibdp/Trainers";
// import LifeAtIgniteCarousel from '@/components/ibdp/LifeAtIgniteCarousel';
import MarqueeBanner from '@/components/ibdp/MarqueeBanner';
import ReviewsSection from '@/components/ibdp/ReviewsSection';
// import StudentAchievements from '@/components/ibdp/StudentAchivement';
import SubjectsCard from '@/components/ibdp/SubjectCard';
import UspsSection from '@/components/ibdp/UspsSection';
// Removed: { useEffect, useRef }
import SEO from "@/components/SEO";

// The local Locomotive Scroll initialization logic has been entirely removed.
const IBDP = ({ headerHeight }) => {

  return (
    <>
      <SEO
        title="IBDP Tutors In Dubai, UAE | IB Diploma Coaching Support"
        description="Ace your training & exam preparation with IBDP tutors in Dubai. Our specialized IB Diploma trainers help you achieve top scores with the right guidance"
      />
      <Head>
        <link
          rel="preload"
          href="/assets/ib-bg.webp"
          as="image"
          type="image/webp"
          media="(max-width: 768px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/assets/ibdp_bg_main.webp"
          as="image"
          type="image/webp"
          media="(min-width: 769px)"
          fetchPriority="high"
        />
      </Head>
      <div
        // Removed: ref={scrollRef}
        className='overflow-hidden innerpage page-content-padding'
      // Removed: data-scroll-container
      >
        <section className="hero-section">
          <div className="hero-container">
            {/* LCP Image moved here for immediate painting (SSR) */}
            <picture className="hero-bg">
              <source media="(max-width: 768px)" srcSet="/assets/ib-bg.webp" />
              <img
                src="/assets/ibdp_bg_main.webp"
                alt="IBDP Tutors Background"
                fetchPriority="high"
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

        <LazySection>
          <section data-scroll-section>
            <IgniteAboutCard />
          </section>
        </LazySection>

        {/* <section data-scroll-section>
        <StudentAchievements />
      </section> */}

        <LazySection>
          <section data-scroll-section>
            <CourseCard />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <SubjectsCard />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <ReviewsSection />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <Trainers />
          </section>
        </LazySection>

        {/* what we offer Start */}
        <LazySection>
          <WhatWeOfferSection />
        </LazySection>


        {/* What We Offer End */}

        <LazySection>
          <section data-scroll-section>
            <IgniteAchievements />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <MarqueeBanner />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <UspsSection />
          </section>
        </LazySection>

        {/* <section data-scroll-section>
        <LifeAtIgniteCarousel />
      </section> */}

        <LazySection>
          <section data-scroll-section>
            <FAQSection />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <Blog />
          </section>
        </LazySection>
        <LazySection>
          <section data-scroll-section>
            <Accordion />
          </section>
        </LazySection>
      </div>
    </>
  );
};

export default IBDP;