import React, { useEffect, useRef } from 'react';
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
// import MovingBanner from '@/components/home/MovingBanner';
// import Testimonial from '@/components/home/Testimonial';
import Accordion from '@/components/myp/accordian';
import Blog from "@/components/myp/Blog";
import CourseCard from '@/components/myp/CourseCard';
import FAQSection from '@/components/myp/FaqSection';
import IgniteAchievements from '@/components/myp/IgniteAchievements';
import InfoCard from '@/components/myp/InfoCard';
import IgniteAboutCard from "@/components/myp/IgniteAboutCard";
import WhatWeOfferSection from '@/components/ibdp/WhatWeOfferSection';
import Trainers from "@/components/myp/Trainers";
import LifeAtIgniteCarousel from '@/components/myp/LifeAtIgniteCarousel';
import MarqueeBanner from '@/components/myp/MarqueeBanner';
import ReviewsSection from '@/components/myp/ReviewsSection';
import StudentAchievements from '@/components/myp/StudentAchivement';
import SubjectsCard from '@/components/myp/SubjectCard';
import UspsSection from '@/components/myp/UspsSection';


// 1. ACCEPT the headerHeight prop
// NOTE: Component is named IBDP, but the logic and schema provided are for MYP.
const IBDP = ({ headerHeight }) => {

  // ----------------------------------------------------
  // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
  // ----------------------------------------------------
  const mypSchema = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What subjects are covered in IB MYP tutoring at Ignite?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ignite offers comprehensive MYP tutoring support across all subject groups, including Mathematics, Sciences, English, Individuals & Societies, Design, & more, following the IB MYP framework."
          }
        },
        {
          "@type": "Question",
          "name": "How is the tutoring aligned with the IB MYP curriculum?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All sessions are designed in line with IB MYP objectives & assessment criteria. Tutors help students improve both subject knowledge & ATL (Approaches to Learning) skills."
          }
        },
        {
          "@type": "Question",
          "name": "Is the tutoring personalized for each student’s needs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Ignite provides tailored MYP tutoring based on the student’s academic level, school requirements, & individual learning pace, ensuring effective progress & understanding."
          }
        },
        {
          "@type": "Question",
          "name": "Does Ignite help with IB MYP assessments & personal projects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Tutors assist with preparation for both formative & summative assessments, & also offer guidance on research, planning, & execution of the MYP Personal Project."
          }
        },
        {
          "@type": "Question",
          "name": "Can students attend a demo class before enrolling for classes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, students can book a free demo class to experience Ignite’s teaching style and interact with an MYP subject specialist before enrolling."
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
        "name": "MYP Tutors",
        "item": "https://ignitetraininginstitute.com/courses/myp-tutors/"
      }]
    },
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "EducationalOrganization",
          "name": "Ignite Training Institute",
          "url": "https://ignitetraininginstitute.com/courses/myp-tutors-in-dubai/",
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
          "serviceType": "MYP Tutoring",
          "name": "MYP Tutors in Dubai - Ignite Training Institute",
          "description": "Ignite Training Institute offers expert tutoring support for MYP students in Dubai. Our tutors specialize in MYP programs, helping students excel in subjects such as Mathematics, Sciences, English, Economics, and more with personalized learning strategies.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Ignite Training Institute",
            "url": "https://ignitetraininginstitute.com/courses/myp-tutors-in-dubai/"
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

      <JsonLd schema={mypSchema} />
      <SEO
        title="One-On-One Interactive Tutoring Classes For IB MYP In UAE"
        description="Improve grades with top IB MYP tutors in the UAE. Get subject-specific support, interactive lessons & tailored study plans from certified MYP trainers"
      />
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