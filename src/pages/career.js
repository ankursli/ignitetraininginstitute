import CareersBanner from '@/components/career/Banner';
import CareerForm from '@/components/career/CareerForm';
import IgniteCareerCard from '@/components/career/IgniteCareerCard';
import { useEffect, useRef } from 'react';
import SEO from "@/components/SEO";
// 1. ACCEPT the headerHeight prop
const act = ({ headerHeight }) => {
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
      <SEO title="Career - Ignite Training Institute l Tutor Jobs In Dubai, UAE"
        description="Join Ignite’s team of expert tutors in Dubai. Explore tutoring jobs, growth opportunities & benefits while helping students achieve academic success" />
      {/* 2. RENDER THE SCHEMA COMPONENT, passing the combined array */}

      <div
        ref={scrollRef}
        className='overflow-hidden innerpage'
        data-scroll-container
        style={{ paddingTop: `${headerHeight}px` }} // <--- THE STICKY HEADER FIX
      >
        <section data-scroll-section>
          <CareersBanner />
        </section>
        <section data-scroll-section>
          <IgniteCareerCard />
        </section>
        <section data-scroll-section>
          <CareerForm />
        </section>
      </div>
    </>
  );
};

export default act;