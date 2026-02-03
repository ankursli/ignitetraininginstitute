import React, { useEffect, useRef } from 'react';
// 1. Import the reusable schema component
import JsonLd from "@/components/JsonLd";
import SEO from "@/components/SEO";
import Advantages from '@/components/homeSchooling/Advantages';
import Curriculum from '@/components/homeSchooling/Curriculum';
import CourseCard from '@/components/homeSchooling/CourseCard';
import FAQSection from '@/components/homeSchooling/FaqSection';
import InfoCard from '@/components/homeSchooling/InfoCard';
import LifeAtIgniteCarousel from '@/components/homeSchooling/LifeAtIgniteCarousel';
import MarqueeBanner from '@/components/homeSchooling/MarqueeBanner';
import HomeschoolingMindset from '@/components/homeSchooling/mindset';
import WhatWeOfferSection from '@/components/homeSchooling/WhatWeOfferSection';
import Accordion from '@/components/homeSchooling/accrodian';
import Blog from "@/components/homeSchooling/Blog";
import ReviewsSection from '@/components/homeSchooling/ReviewsSection';
import StudentAchievements from '@/components/ibdp/StudentAchivement';


// 1. ACCEPT the headerHeight prop
const HomeSchooling = ({ headerHeight }) => {

  // ----------------------------------------------------
  // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
  // ----------------------------------------------------
  const homeschoolingSchema = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What levels & curricula does Ignite support for homeschooling students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ignite offers homeschooling support for British Curriculum (IGCSE, A-Levels) & AP courses from primary to pre-university levels."
          }
        },
        {
          "@type": "Question",
          "name": "Is the homeschooling program fully flexible with individual schedules?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, sessions are designed to match the student’s pace, academic goals, & daily schedule, offering full flexibility in subject selection & timing."
          }
        },
        {
          "@type": "Question",
          "name": "Do homeschooled students receive exam & assessment support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Students receive targeted prep for board exams, past paper practice, & support with assessments required by their chosen curriculum or exam board."
          }
        },
        {
          "@type": "Question",
          "name": "Can Ignite help with selecting & planning a complete homeschool curriculum?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our academic advisors assist with curriculum planning, subject selection, exam registration guidance, & personalized learning roadmaps."
          }
        },
        {
          "@type": "Question",
          "name": "Is a free demo class available for homeschooling tutoring?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Ignite Training Institute offers a free demo session so parents & students can experience the teaching style & approach before enrolling."
          }
        },
        {
          "@type": "Question",
          "name": "Is private candidacy accepted by private universities in the UAE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, private candidacy is generally accepted by private universities in the UAE, as long as students meet the required curriculum standards and hold recognized qualifications."
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
        "name": "Homeschooling Tutors",
        "item": "https://ignitetraininginstitute.com/courses/homeschooling-tutors/"
      }]
    },
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "EducationalOrganization",
          "name": "Ignite Training Institute",
          "url": "https://ignitetraininginstitute.com/courses/homeschooling-tutors-in-dubai/",
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
            "https://ae.linkedin.com/company/ignitetraininginstitute"
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
          "serviceType": "Homeschooling Tutoring",
          "name": "Homeschooling Tutors in Dubai - Ignite Training Institute",
          "description": "Ignite Training Institute offers expert homeschooling support (private candidacy) in Dubai. Our tutors help students across various curricula achieve academic excellence through personalized learning strategies tailored to individual needs.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Ignite Training Institute",
            "url": "https://ignitetraininginstitute.com/courses/homeschooling-tutors-in-dubai/"
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
        title="Homeschooling In Dubai | Support For Private Candidates"
        description="Join homeschooling in Dubai, UAE for IGCSE, A-Levels & AP as private candidates. Get personalized learning support to excel academically & beyond"
      />
      {/* 2. RENDER THE SCHEMA COMPONENT, passing the combined array */}
      <JsonLd schema={homeschoolingSchema} />

      {/* 3. APPLY the style for paddingTop to the scroll container */}
      <div
        ref={scrollRef}
        className='overflow-hidden innerpage'
        data-scroll-container
        style={{ paddingTop: `${headerHeight}px` }} // <--- THE STICKY HEADER FIX
      >
        <section data-scroll-section>
          <InfoCard />
        </section>


        <section data-scroll-section>
          <Curriculum />
        </section>

        <section data-scroll-section>
          <CourseCard />
        </section>

        <section data-scroll-section>
          <Advantages />
        </section>
        <section data-scroll-section>
          <MarqueeBanner />
        </section>

        <section data-scroll-section>
          <HomeschoolingMindset />
        </section>
        <section data-scroll-section>
          <ReviewsSection />
        </section>

        <WhatWeOfferSection />


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

export default HomeSchooling;