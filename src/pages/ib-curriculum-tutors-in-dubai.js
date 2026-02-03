import React, { useEffect, useRef } from 'react';
// 1. Import the reusable schema component
import JsonLd from "@/components/JsonLd";
// import MovingBanner from '@/components/home/MovingBanner';
// import Testimonial from '@/components/home/Testimonial';
import Accordion from '@/components/ibc/accordian';
import Blog from "@/components/ibc/Blog";
import CourseCard from '@/components/ibc/CourseCard';
import IBCurriculumStages from '@/components/ibc/Curriculum.jsx';
import FAQSection from '@/components/ibc/FaqSection';
import IgniteAchievements from '@/components/ibc/IgniteAchievements';
import InfoCard from '@/components/ibc/InfoCard';
import IgniteAboutCard from "@/components/ibc/IgniteAboutCard";
import Trainers from "@/components/ibc/Trainers";
import WhatWeOfferSection from '@/components/ibc/WhatWeOfferSection';
import LifeAtIgniteCarousel from '@/components/ibc/LifeAtIgniteCarousel';
import MarqueeBanner from '@/components/ibc/MarqueeBanner';
import ReviewsSection from '@/components/ibc/ReviewsSection';
import StudentAchievements from '@/components/ibc/StudentAchivement';
import SubjectsCard from '@/components/ibc/SubjectCard';
import UniImagesCard from '@/components/ibc/universityCrad';
import UspsSection from '@/components/ibc/UspsSection';
import { University } from 'lucide-react';
import SEO from "@/components/SEO";

// 1. ACCEPT the headerHeight prop
const IBC = ({ headerHeight }) => {

  // ----------------------------------------------------
  // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
  // ----------------------------------------------------
  // Combine all three schema blocks into a single array object
  const ibcSchema = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What subjects does Ignite offer tutoring for in the IB?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ignite provides expert tutoring across all IB subjects, including Mathematics AA & AI, Sciences (Physics, Chemistry, Biology), English, Economics, Business Management, & more, covering both HL & SL levels."
          }
        },
        {
          "@type": "Question",
          "name": "Is the tutoring aligned with the IB exam board requirements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, IB tutoring at Ignite is fully aligned with the latest IB curriculum standards & assessment criteria, including guidance on IAs, EEs, & TOK components."
          }
        },
        {
          "@type": "Question",
          "name": "Can I try a session before enrolling in a full course?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Ignite offers a free demo class so that students & parents can experience the teaching style before making a decision."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer one-on-one or group tutoring options?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ignite offers both one-on-one & small group tutoring (SGT) formats to suit different learning preferences for IB curriculum, ensuring personalized attention and academic support."
          }
        },
        {
          "@type": "Question",
          "name": "Is online IB tutoring available for students outside Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Ignite provides flexible online IB tutoring for students in the UAE and beyond, with live interactive sessions, past paper practice, and exam-focused guidance."
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
        "name": "IB Tutors",
        "item": "https://ignitetraininginstitute.com/ib-curriculum-tutors/"
      }]
    },
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "EducationalOrganization",
          "name": "Ignite Training Institute",
          "url": "https://ignitetraininginstitute.com/ib-curriculum-tutors-in-dubai/",
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
          "serviceType": "IB Tutoring",
          "name": "IB Curriculum Tutors in Dubai - Ignite Training Institute",
          "description": "Ignite Training Institute offers expert tutoring support for IB students in Dubai. Our tutors specialize in MYP and IBDP, helping students excel in subjects such as Mathematics, Sciences, English, Economics, and more with personalized learning strategies.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Ignite Training Institute",
            "url": "https://ignitetraininginstitute.com/ib-curriculum-tutors-in-dubai//"
          }
        }
      ]
    }
  ];

  // ----------------------------------------------------
  // 👇 EXISTING COMPONENT LOGIC (Locomotive Scroll)
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
        title="IB Tutors In Dubai For Exam Success I IB Coaching In UAE"
        description="Get dedicated learning support for IB coaching in Dubai. Our expert IB tutors in the UAE are equipped with the right approach, strategies & resources"
      />
      {/* 2. RENDER THE SCHEMA COMPONENT, passing the combined array */}
      {/* The JsonLd component will correctly stringify and inject this valid JSON-LD array */}
      <JsonLd schema={ibcSchema} />

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
          <IBCurriculumStages />
        </section>

        <section data-scroll-section>
          <SubjectsCard />
        </section>
        <section data-scroll-section>
          <MarqueeBanner />
        </section>

        <section data-scroll-section>
          <ReviewsSection />
        </section>

        <section data-scroll-section>
          <Trainers />
        </section>

        <WhatWeOfferSection />

        <section data-scroll-section>
          <IgniteAchievements />
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

export default IBC;