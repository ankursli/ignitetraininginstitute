import React, { useEffect, useRef } from 'react';
// 1. Import the reusable schema component
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
// Assuming shared components are kept in their original path
import MarqueeBanner from '@/components/tutors/MarqueeBanner';
import ReviewsSection from '@/components/tutors/ReviewsSection';
import StudentAchievements from '@/components/tutors/StudentAchivement';
import CurriculumTestsComponent from '@/components/tutors/curriculum';
import InfoCard from '@/components/tutors/infoCard';
import OurTrainers from '@/components/tutors/ourTrainers';
import SubjectsCard1 from '@/components/tutors/SubjectCard1';
import IgniteAchievements from '@/components/tutors/igniteAchivement';
import Blog from "@/components/tutors/Blog";
import UpsSection from '@/components/tutors/UspsSection';
import Accordion from '@/components/tutors/accordian';
import FAQSection from '@/components/tutors/FaqSection';
import LifeAtIgniteCarousel from '@/components/tutors/LifeAtIgniteCarousel';

// 1. ACCEPT the headerHeight prop
const Tutors = ({ headerHeight }) => {

  // ----------------------------------------------------
  // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
  // ----------------------------------------------------
  const tutorsSchema = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What Qualifications Do Your Tutors Possess?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our mentors at Ignite Training Institute are accomplished experts, holding advanced degrees and possessing extensive proficiency in the realm."
          }
        },
        {
          "@type": "Question",
          "name": "How Are The Tutoring Sessions Conducted?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Flexible learning options are available, offering both in-person and online tutoring sessions. Students can select their preferred mode of instruction to suit their individual choices."
          }
        },
        {
          "@type": "Question",
          "name": "Do You Offer Group Tutoring For Accounting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Catering to a range of learning preferences and needs, we offer both individualized one-on-one sessions and dynamic group tutoring choices."
          }
        },
        {
          "@type": "Question",
          "name": "What Is The Teaching Approach Of Ignite's Tutors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our tutors use a customized approach tailored to each student’s pace and style, with progress tracked through regular assignments, quizzes, and feedback mechanisms."
          }
        },
        {
          "@type": "Question",
          "name": "How Can I Enroll In Tutoring Sessions With Ignite?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Getting started is simple. Schedule your free demo class today, and our team will personally reach out to you within the next 24 hours."
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
        "item": "https://ignitetraininginstitute.com/tutors-in-dubai/"
      }]
    },
    {
      "@context": "http://schema.org",
      "@type": "Organization",
      "name": "Ignite Training Institute - Tutor In Dubai",
      "url": "https://ignitetraininginstitute.com/tutors-in-dubai/",
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
        title="Tutors In Dubai - IB, IGCSE, A-Levels, AP, & More"
        description="Gain academic efficiency with the tutors in Dubai - IB, IGCSE, A-Levels, AP, & more, Our expert tutors offer tailored support for curriculums"
      />
      {/* 2. RENDER THE SCHEMA COMPONENT, passing the combined array */}
      <JsonLd schema={tutorsSchema} />

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