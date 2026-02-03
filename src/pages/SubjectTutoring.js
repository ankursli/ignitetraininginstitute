import { useEffect, useRef } from 'react';
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
    // 2. APPLY the style for paddingTop to the scroll container
    <div
      ref={scrollRef}

      data-scroll-container
      style={{ paddingTop: `${headerHeight}px` }} // <--- THE STICKY HEADER FIX
    >

      <section data-scroll-section>
        <InfoCard />
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
  );
};

export default SubjectTutoring;