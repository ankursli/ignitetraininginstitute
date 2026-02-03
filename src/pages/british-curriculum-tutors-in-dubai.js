import React, { useEffect, useRef } from 'react';
// 1. Import the reusable schema component
import JsonLd from "@/components/JsonLd";
// import MovingBanner from '@/components/home/MovingBanner';
// import Testimonial from '@/components/home/Testimonial';
import Accordion from '@/components/bc/accordian';
import Blog from "@/components/bc/Blog";
import CourseCard from '@/components/bc/CourseCard';
import IBCurriculumStages from '@/components/bc/Curriculum.jsx';
import FAQSection from '@/components/bc/FaqSection';
import IgniteAchievements from '@/components/bc/IgniteAchievements';
import InfoCard from '@/components/bc/InfoCard';
import IgniteAboutCard from "@/components/bc/IgniteAboutCard";
import Trainers from "@/components/bc/Trainers";
import WhatWeOfferSection from '@/components/bc/WhatWeOfferSection';
import LifeAtIgniteCarousel from '@/components/bc/LifeAtIgniteCarousel';
import MarqueeBanner from '@/components/bc/MarqueeBanner';
import ReviewsSection from '@/components/bc/ReviewsSection';
import StudentAchievements from '@/components/bc/StudentAchivement';
import SubjectsCard from '@/components/bc/SubjectCard';
import UniImagesCard from '@/components/bc/universityCrad';
import UspsSection from '@/components/bc/UspsSection';
import { University } from 'lucide-react';
import SEO from "@/components/SEO";


// 1. ACCEPT the headerHeight prop
const BC = ({ headerHeight }) => {

  // ----------------------------------------------------
  // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
  // ----------------------------------------------------
  const bcSchema = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What levels of the British curriculum does Ignite support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ignite offers tutoring for IGCSE, GCSE, AS, and A Levels across a wide range of subjects, supporting students from early secondary years through final board exams."
          }
        },
        {
          "@type": "Question",
          "name": "Which exam boards does Ignite’s British curriculum tutoring cover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tutoring is available for major British curriculum boards, including Edexcel, Cambridge (CAIE), and Oxford International AQA, with teaching aligned to each board's requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Are subjects like Math, Science, and English included in the tutoring?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Ignite provides expert tutoring in all core and elective subjects including, Math, Physics, Chemistry, Biology, English Language and Literature, Business Studies, Economics, and more."
          }
        },
        {
          "@type": "Question",
          "name": "Is the tutoring offered online, in person, or both?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ignite offers flexible tutoring options with both in-person and online classes available, allowing students to choose what suits their schedule and learning style best."
          }
        },
        {
          "@type": "Question",
          "name": "Can students take a demo class before enrolling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Ignite offers a free demo class so students and parents can experience the teaching style and personalized support before committing to a full course."
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
        "name": "British Curriculum Tutors",
        "item": "https://ignitetraininginstitute.com/british-curriculum-tutors/"
      }]
    },
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "EducationalOrganization",
          "name": "Ignite Training Institute",
          "url": "https://ignitetraininginstitute.com/british-curriculum-tutors-in-dubai/",
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
          "serviceType": "British Curriculum Tutoring",
          "name": "British Curriculum Tutors in Dubai - Ignite Training Institute",
          "description": "Ignite Training Institute offers expert tutoring support for British Curriculum students in Dubai. Our tutors specialize in IGCSE and A-Level programs, helping students excel in subjects such as Mathematics, Sciences, English, Economics, and more with personalized learning strategies.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Ignite Training Institute",
            "url": "https://ignitetraininginstitute.com/british-curriculum-tutors-in-dubai/"
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
        title="British Curriculum Tutors For IGCSE/GCSE & AS & A-Levels"
        description="Seek full guidance for the British Curriculum in the UAE. Learn from expert A-Level & IGCSE tutors to strengthen academics & boost performance"
      />
      {/* 2. RENDER THE SCHEMA COMPONENT, passing the combined array */}
      <JsonLd schema={bcSchema} />

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

        <section data-scroll-section>
          <UniImagesCard />
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

        {/* what we offer Start */}
        <WhatWeOfferSection />


        {/* What We Offer End */}

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

export default BC;