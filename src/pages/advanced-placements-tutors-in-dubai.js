import React, { useEffect, useRef } from 'react';
// 1. Import the reusable schema component
import JsonLd from "@/components/JsonLd";
import SEO from "@/components/SEO";
import Accordion from '@/components/ap/accrodian';
import Blog from "@/components/ap/Blog";
import APBenefits from '@/components/ap/chooseApp';
import CourseCard from '@/components/ap/CourseCard';
import FAQSection from '@/components/ap/FaqSection';
import IgniteAchievements from '@/components/ap/IgniteAchievements';
import InfoCard from '@/components/ap/InfoCard';
import IgniteAboutCard from "@/components/ap/IgniteAboutCard";
import Trainers from "@/components/ap/Trainers";
import WhatWeOfferSection from '@/components/ap/WhatWeOfferSection';
import LifeAtIgniteCarousel from '@/components/ap/LifeAtIgniteCarousel';
import MarqueeBanner from '@/components/ap/MarqueeBanner';
import ReviewsSection from '@/components/ap/ReviewsSection';
import StudentAchievements from '@/components/ap/StudentAchivement';
import SubjectsCard1 from '@/components/ap/SubjectCard1';
import UspsSection from '@/components/ap/UspsSection';

// 1. ACCEPT the headerHeight prop
const ap = ({ headerHeight }) => {

  // ----------------------------------------------------
  // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
  // ----------------------------------------------------
  const apSchema = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which AP subjects does Ignite offer tutoring for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ignite provides expert tutoring support for a wide range of AP subjects, including Calculus (AB & BC), Biology, Chemistry, Physics, English Literature, and more, all taught by experienced AP-certified educators."
          }
        },
        {
          "@type": "Question",
          "name": "How is tutoring tailored for each AP subject?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Each AP tutoring program is customized with subject-specific content, practice exams, past paper solving, and tailored strategies to match the AP curriculum and exam structure for that subject."
          }
        },
        {
          "@type": "Question",
          "name": "Is online AP tutoring available in addition to in-person classes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Ignite offers flexible AP tutoring options both online and in person, so students can choose the format that best fits their schedule and learning preferences within the UAE."
          }
        },
        {
          "@type": "Question",
          "name": "How does Ignite prepare students for AP exams?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tutoring includes regular past paper practice, timed mock exams, detailed feedback, and targeted strategies, helping students master multiple-choice and free-response questions to boost their AP scores."
          }
        },
        {
          "@type": "Question",
          "name": "Can I try the tutoring program before enrolling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Ignite offers a free demo class so students and parents can assess tutor compatibility, teaching methods, and academic fit before committing to the full program."
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
        "name": "AP Tutors",
        "item": "https://ignitetraininginstitute.com/advanced-placements-tutors/"
      }]
    },
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "EducationalOrganization",
          "name": "Ignite Training Institute",
          "url": "https://ignitetraininginstitute.com/advanced-placements-tutors-in-dubai/",
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
          "serviceType": "Advanced Placement Tutoring",
          "name": "AP Tutors in Dubai - Ignite Training Institute",
          "description": "Ignite Training Institute offers expert Advanced Placement (AP) tutoring in Dubai. Our tutors provide personalized guidance, exam strategies, and subject-specific coaching to help students achieve top AP scores.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Ignite Training Institute",
            "url": "https://ignitetraininginstitute.com/advanced-placements-tutors-in-dubai/"
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
        title="AP Tutors In Dubai | Best AP Prep Classes In UAE"
        description="Experience result-driven AP tutoring with programs tailored to match each student’s learning needs. Get practice tests, tailored strategies, & resources"
      />
      {/* 2. RENDER THE SCHEMA COMPONENT, passing the combined array */}
      <JsonLd schema={apSchema} />

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
          <IgniteAboutCard />
        </section>

        {/* <section data-scroll-section>
            <StudentAchievements />
          </section> */}

        <section data-scroll-section>
          <CourseCard />
        </section>

        {/* <section data-scroll-section>
            <SubjectsCard />
          </section> */}
        <section data-scroll-section>
          <SubjectsCard1 />
        </section>
        <section data-scroll-section>
          <APBenefits />
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

export default ap;