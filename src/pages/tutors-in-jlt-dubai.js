import React, { useEffect, useRef } from 'react';
// 1. Import the reusable schema component
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
// Assuming shared components are kept in their original path
import MarqueeBanner from '@/components/tutors-jlt-dubai/MarqueeBanner';
import ReviewsSection from '@/components/tutors-jlt-dubai/ReviewsSection';
import StudentAchievements from '@/components/tutors-jlt-dubai/StudentAchivement';
import CurriculumTestsComponent from '@/components/tutors-jlt-dubai/curriculum';
import InfoCard from '@/components/tutors-jlt-dubai/infoCard';
import OurTrainers from '@/components/tutors-jlt-dubai/ourTrainers';
import SubjectsCard1 from '@/components/tutors-jlt-dubai/SubjectCard1';
import IgniteAchievements from '@/components/tutors-jlt-dubai/igniteAchivement';
import Blog from "@/components/tutors-jlt-dubai/Blog";
import UpsSection from '@/components/tutors-jlt-dubai/UspsSection';
import Accordion from '@/components/tutors-jlt-dubai/accordian';
import FAQSection from '@/components/tutors-jlt-dubai/FaqSection';
import LifeAtIgniteCarousel from '@/components/tutors-jlt-dubai/LifeAtIgniteCarousel';


// 1. ACCEPT the headerHeight prop
const Tutors = ({ headerHeight }) => {
  // ----------------------------------------------------
  // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
  // ----------------------------------------------------
  const jltTutorsSchema = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What subjects do Ignite tutors in JLT Dubai offer support for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ignite offers tutoring in a wide range of subjects, including Maths, English, Physics, Chemistry, Biology, Economics, Business, Computer Science, and more across international curricula."
          }
        },
        {
          "@type": "Question",
          "name": "Which curricula are supported at the JLT Dubai center?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tutors at the JLT center specialize in IB (PYP, MYP, DP), British Curriculum (IGCSE/GCSE & A-Levels), American Curriculum, AP, and ACT prep."
          }
        },
        {
          "@type": "Question",
          "name": "Are both group and one-on-one sessions available in JLT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, students can choose between personalized one-on-one sessions or small-group classes depending on their academic needs and preferences."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer in-person classes only, or online as well?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ignite’s JLT branch offers both in-person tutoring at the center and flexible online learning options for students across Dubai and beyond."
          }
        },
        {
          "@type": "Question",
          "name": "How can I book a tutoring session at the JLT center?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can schedule a free demo class through the website or by contacting the JLT branch directly. This helps you understand the teaching style before enrolling."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ignitetraininginstitute.com/"
      }, {
        "@type": "ListItem",
        "position": 2,
        "name": "Tutors In Dubai",
        "item": "https://ignitetraininginstitute.com/tutors-in-jlt-dubai/"
      }]
    },
    {
      "@context": "http://schema.org",
      "@type": "Organization",
      "name": "Ignite Training Institute - Tutor In Dubai",
      "url": "https://ignitetraininginstitute.com/tutors-in-jlt-dubai/",
      "logo": "https://ignitetraininginstitute.com/wp-content/uploads/2023/02/ignitefinallogos_1.svg",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "79",
        "bestRating": "5",
        "author": {
          "@type": "Organization",
          "name": "Google",
          "sameAs": "https://www.google.com/"
        },
        "url": "https://www.google.com/maps/place/Ignite+Training+Institute/@25.2166721,55.2777655,15z/data=!4m6!3m5!1s0x3e5f43b8f8e29eb3:0x44b31b9a92cc00dc!8m2!3d25.2166721!4d55.2777655!16s%2Fg%2F11gng101r0"
      }
    }
  ];
  // ----------------------------------------------------
  // 👆 END OF SCHEMA DEFINITION
  // ----------------------------------------------------

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
      <SEO
        title="Best Tutors In JLT, Dubai - IB, IGCSE, A-Levels, AP Support"
        description="Enhance your learning with expert tutors in JLT Dubai for IB, IGCSE, A-Levels, & AP. Get dedicated support tailored to help students achieve their goals"
      />
      {/* 2. RENDER THE SCHEMA COMPONENT, passing the combined array */}
      <JsonLd schema={jltTutorsSchema} />

      {/* 2. APPLY the style for paddingTop to the scroll container */}
      <div
        ref={scrollRef}
        className='overflow-hidden innerpage'
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
          <CurriculumTestsComponent />
        </section>

        <section data-scroll-section>
          <SubjectsCard1 />
        </section>

        <section data-scroll-section>
          <ReviewsSection />
        </section>

        <section data-scroll-section>
          <MarqueeBanner />
        </section>

        <section data-scroll-section>
          <OurTrainers />
        </section>
        <section data-scroll-section>
          <IgniteAchievements />
        </section>

        <section data-scroll-section>
          <UpsSection />
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

export default Tutors;