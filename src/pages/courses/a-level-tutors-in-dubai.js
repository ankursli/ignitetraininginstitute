import React, { useEffect, useRef } from 'react';
// 1. Import the reusable schema component
import JsonLd from "@/components/JsonLd";
import SEO from "@/components/SEO";
// import MovingBanner from '@/components/home/MovingBanner';
// import Testimonial from '@/components/home/Testimonial';
import Accordion from '@/components/a-level/accordian';
import Blog from "@/components/a-level/Blog";
import CourseCard from '@/components/a-level/CourseCard';
import FAQSection from '@/components/a-level/FaqSection';
import IgniteAchievements from '@/components/a-level/IgniteAchievements';
import InfoCard from '@/components/a-level/InfoCard';
import IgniteAboutCard from "@/components/a-level/IgniteAboutCard";
import Trainers from "@/components/a-level/Trainers";
import WhatWeOfferSection from '@/components/a-level/WhatWeOfferSection';
import LifeAtIgniteCarousel from '@/components/a-level/LifeAtIgniteCarousel';
import MarqueeBanner from '@/components/a-level/MarqueeBanner';
import ReviewsSection from '@/components/a-level/ReviewsSection';
import StudentAchievements from '@/components/a-level/StudentAchivement';
import SubjectsCard from '@/components/a-level/SubjectCard';
import UspsSection from '@/components/a-level/UspsSection';
import UniImagesCard from '@/components/a-level/universityCrad';

// 1. ACCEPT the headerHeight prop
const ALEVEL = ({ headerHeight }) => {

  // ----------------------------------------------------
  // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
  // ----------------------------------------------------
  const aLevelSchema = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What A Level subjects does Ignite offer tutoring for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ignite provides expert tutoring across a wide range of A Level subjects, including Mathematics, Physics, Chemistry, Biology, Economics, Business Studies, and English, covering both AS and A2 levels."
          }
        },
        {
          "@type": "Question",
          "name": "Which exam boards are covered in the A Level tutoring?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our tutoring aligns with major exam boards such as Edexcel, Cambridge International (CAIE), and Oxford International AQA to ensure students are prepared for their specific syllabus and exam requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Are both one-on-one & group tutoring sessions available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Ignite offers both one-on-one and small-group A Level tutoring to suit different learning styles, individual sessions for targeted support, and group classes for collaborative learning."
          }
        },
        {
          "@type": "Question",
          "name": "How does Ignite ensure exam readiness for A Level students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our A Level programme includes regular past paper practice, detailed feedback, timed mock exams, and tailored exam strategies to boost confidence and performance in final assessments."
          }
        },
        {
          "@type": "Question",
          "name": "Can I book a demo class before enrolment for A Level?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Ignite offers a free demo session so students and parents can evaluate the tutoring approach, meet the tutor, and determine whether it matches their academic goals before enrolling."
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
        "name": "Courses",
        "item": "https://ignitetraininginstitute.com/courses/"
      }, {
        "@type": "ListItem",
        "position": 3,
        "name": "A-Level Tutors",
        "item": "https://ignitetraininginstitute.com/courses/a-level-tutors/"
      }]
    },
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "EducationalOrganization",
          "name": "Ignite Training Institute",
          "url": "https://ignitetraininginstitute.com/courses/a-level-tutors-in-dubai/",
          "logo": "https://ignitetraininginstitute.com/wp-content/uploads/2023/02/ignitefinallogos_1.svg",
          "telephone": "+971588589958",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Al Moosa Tower 1 - 1503 - Sheikh Zayed Rd - near Emirates Towers Metro (Sea Side - Trade Centre - Trade Centre 1)",
            "addressLocality": "Dubai",
            "addressCountry": "United Arab Emirates"
          },
          "sameAs": [
            "https://www.facebook.com/ignitetraininginstitute",
            "https://www.instagram.com/ignitetraininginstitute/",
            "https://ae.linkedin.com/company/ignite-training-institute"
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "79",
            "bestRating": "5",
            "worstRating": "1"
          }
        },
        {
          "@type": "Service",
          "serviceType": "A-Level Tutoring",
          "name": "A-Level Tutors in Dubai - Ignite Training Institute",
          "description": "Ignite Training Institute offers expert tutoring support for A-Level students in Dubai. Our tutors help students excel in subjects such as Mathematics, Sciences, English, Economics, and more with personalized learning strategies.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Ignite Training Institute",
            "url": "https://ignitetraininginstitute.com/courses/a-level-tutors-in-dubai/"
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
        title="UAE's Leading A-Level, AS-Level Tutors For All Subjects"
        description="Learn from the best A-Level tutors In UAE with assured grade improvement. Choose a personalized tutoring plan with subjects of your choice."
      />
      {/* 2. RENDER THE SCHEMA COMPONENT, passing the combined array */}
      <JsonLd schema={aLevelSchema} />

      {/* 3. APPLY the style for paddingTop */}
      <div
        ref={scrollRef}
        className='overflow-hidden innerpage'
        data-scroll-container
        style={{ paddingTop: `${headerHeight}px` }} // <--- THE FIX
      >
        <section data-scroll-section>
          <InfoCard />
        </section>

        <section data-scroll-section>
          <IgniteAboutCard />
        </section>

        <section data-scroll-section>
          <UniImagesCard />
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

export default ALEVEL;