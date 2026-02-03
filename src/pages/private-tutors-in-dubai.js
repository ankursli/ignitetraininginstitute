import React, { useEffect, useRef } from 'react';
// 1. Import the reusable schema component
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
// Assuming shared components are kept in their original path
import MarqueeBanner from '@/components/private-tutors-dubai/MarqueeBanner';
import ReviewsSection from '@/components/private-tutors-dubai/ReviewsSection';
import StudentAchievements from '@/components/private-tutors-dubai/StudentAchivement';
import CurriculumTestsComponent from '@/components/private-tutors-dubai/curriculum';
import InfoCard from '@/components/private-tutors-dubai/infoCard';
import OurTrainers from '@/components/private-tutors-dubai/ourTrainers';
import SubjectsCard1 from '@/components/private-tutors-dubai/SubjectCard1';
import IgniteAchievements from '@/components/private-tutors-dubai/igniteAchivement';
import Blog from "@/components/private-tutors-dubai/Blog";
import UpsSection from '@/components/private-tutors-dubai/UspsSection';
import Accordion from '@/components/private-tutors-dubai/accordian';
import FAQSection from '@/components/private-tutors-dubai/FaqSection';
import LifeAtIgniteCarousel from '@/components/private-tutors-dubai/LifeAtIgniteCarousel';


// 1. ACCEPT the headerHeight prop
const PrivateTutorsDubai = ({ headerHeight }) => {

  // ----------------------------------------------------
  // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
  // ----------------------------------------------------
  const privateTutorsSchema = [
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
        "name": "Private Tutors In Dubai",
        "item": "https://ignitetraininginstitute.com/private-tutors-in-dubai/"
      }]
    },
    {
      "@context": "http://schema.org",
      "@type": "Organization",
      "name": "Ignite Training Institute - Private Tutor In Dubai",
      "url": "https://ignitetraininginstitute.com/private-tutors-in-dubai/",
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
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What Qualifications Do Your Private Tutors Possess?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At Ignite Training Institute, our private tutors are highly qualified professionals with advanced degrees and subject-matter expertise. They bring years of teaching experience and a strong track record of helping students."
          }
        },
        {
          "@type": "Question",
          "name": "How Are The One-On-One Tutoring Sessions Conducted?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tutoring is available both in-person and online, allowing students to choose the mode that best suits their schedule and preferences."
          }
        },
        {
          "@type": "Question",
          "name": "Can I Customize My Tutoring Schedule Based on My Availability?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Ignite offers flexible scheduling options to accommodate each student’s routine. We work around your availability to ensure consistent and stress-free learning."
          }
        },
        {
          "@type": "Question",
          "name": "What Is The Teaching Approach Of Ignite's Individual Tutoring Sessions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We follow a personalized teaching approach tailored to each student’s learning style, with progress tracked through regular assessments and feedback."
          }
        },
        {
          "@type": "Question",
          "name": "How Can I Enroll In Tutoring Sessions At Ignite?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Getting started is simple. Schedule your free demo class today, and our team will personally reach out to you within the next 24 hours to guide you through the next steps."
          }
        }
      ]
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
        title="Best Private Tutors In Dubai, UAE - IB, IGCSE, A-Levels, & AP"
        description="Achieve academic excellence with Ignite’s private tutors in Dubai, UAE, offering support for IB, IGCSE, A-Level, AP, & Homeschooling (private candidates)"
      />
      {/* 2. RENDER THE SCHEMA COMPONENT, passing the combined array */}
      <JsonLd schema={privateTutorsSchema} />

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

export default PrivateTutorsDubai;