// import MovingBanner from '@/components/home/MovingBanner';
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
      <div
        // Removed: ref={scrollRef}
        className='overflow-hidden innerpage'
        // Removed: data-scroll-container
        style={{ paddingTop: `${headerHeight}px` }}
      >
        <section data-scroll-section>
          <InfoCard />
        </section>

        <section data-scroll-section>
          <IgniteAboutCard />
        </section>

        {/* <section data-scroll-section>
        <StudentAchievements />
      </section> */}

        <section data-scroll-section>
          <CourseCard />
        </section>

        <section data-scroll-section>
          <SubjectsCard />
        </section>

        <section data-scroll-section>
          <ReviewsSection />
        </section>

        <section data-scroll-section>
          <Trainers />
        </section>

        {/* what we offer Start */}
        <WhatWeOfferSection />


        {/* What We Offer End */}

        <section data-scroll-section>
          <IgniteAchievements />
        </section>

        <section data-scroll-section>
          <MarqueeBanner />
        </section>

        <section data-scroll-section>
          <UspsSection />
        </section>

        {/* <section data-scroll-section>
        <LifeAtIgniteCarousel />
      </section> */}

        <section data-scroll-section>
          <FAQSection />
        </section>

        <section data-scroll-section>
          <Blog />
        </section>
        <section data-scroll-section>
          <Accordion />
        </section>
      </div>
    </>
  );
};

export default IBDP;