import React, { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from "next/head";
import JsonLd from "@/components/JsonLd";
import SEO from "@/components/SEO";
import LazySection from "@/components/LazySection"
// import MovingBanner from '@/components/home/MovingBanner';
// import Testimonial from '@/components/home/Testimonial';
const Accordion = dynamic(() => import('@/components/a-level/accordian'));
const Blog = dynamic(() => import('@/components/a-level/Blog'));
const CourseCard = dynamic(() => import('@/components/a-level/CourseCard'));
const FAQSection = dynamic(() => import('@/components/a-level/FaqSection'));
const IgniteAchievements = dynamic(() => import('@/components/a-level/IgniteAchievements'));
import InfoCard from '@/components/a-level-copy/InfoCard';
const IgniteAboutCard = dynamic(() => import('@/components/a-level/IgniteAboutCard'));
const Trainers = dynamic(() => import('@/components/a-level/Trainers'));
const WhatWeOfferSection = dynamic(() => import('@/components/a-level/WhatWeOfferSection'));
const LifeAtIgniteCarousel = dynamic(() => import('@/components/a-level/LifeAtIgniteCarousel'));
const MarqueeBanner = dynamic(() => import('@/components/a-level/MarqueeBanner'));
const ReviewsSection = dynamic(() => import('@/components/a-level/ReviewsSection'));
const StudentAchievements = dynamic(() => import('@/components/a-level/StudentAchivement'));
const SubjectsCard = dynamic(() => import('@/components/a-level/SubjectCard'));
const UspsSection = dynamic(() => import('@/components/a-level/UspsSection'));
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
        description="Learn from the best A-Level tutors In UAE with assured grade improvement. Choose a personalized tutoring plan with subjects of your choice"
        url="https://ignitetraininginstitute.com/courses/a-level-tutors-in-dubai"
      />

      <Head>
        <meta name="robots" content="noindex" />
        <link
          rel="preload"
          href="/assets/alevel_bg_main.webp"
          as="image"
          type="image/webp"
          media="(max-width: 768px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/assets/alevel_bg_main.webp"
          as="image"
          type="image/webp"
          media="(min-width: 769px)"
          fetchPriority="high"
        />
      </Head>


      {/* 2. RENDER THE SCHEMA COMPONENT, passing the combined array */}
      <JsonLd schema={aLevelSchema} />

      {/* 3. APPLY the style for paddingTop */}
      <div
        ref={scrollRef}
        className='overflow-hidden innerpage page-content-padding'
        data-scroll-container
      >
        <section data-scroll-section className="hero-section">
          <div className="hero-container">
            {/* LCP Image moved here for immediate painting (SSR) */}
            <picture className="hero-bg">
              <source media="(max-width: 768px)" srcSet="/assets/alevel.webp" />
              <img
                src="/assets/alevel_bg_main.webp"
                alt="A Level Tutors Background"
                fetchPriority="high"
                width="1200"
                height="800"
                className="hero-img"
                style={{ opacity: 1, visibility: 'visible' }}
              />
            </picture>

            <InfoCard />
          </div>
        </section>

        <LazySection>
          <section data-scroll-section>
            <IgniteAboutCard />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <UniImagesCard />
          </section>
        </LazySection>

        {/* <section data-scroll-section>
            <StudentAchievements />
          </section> */}

        <LazySection>
          <section data-scroll-section>
            <CourseCard />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <SubjectsCard />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <ReviewsSection />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <Trainers />
          </section>
        </LazySection>

        {/* what we offer Start */}
        <LazySection>
          <WhatWeOfferSection />
        </LazySection>


        {/* What We Offer End */}

        <LazySection>
          <section data-scroll-section>
            <IgniteAchievements />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <MarqueeBanner />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <UspsSection />
          </section>
        </LazySection>

        {/* <section data-scroll-section>
            <LifeAtIgniteCarousel />
          </section> */}

        <LazySection>
          <section data-scroll-section>
            <FAQSection />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <Blog />
          </section>
        </LazySection>
        <LazySection>
          <section data-scroll-section>
            <Accordion />
          </section>
        </LazySection>
      </div>
      <style jsx>{`
            .hero-container {
              position: relative;
              max-width: 90vw;
              margin-inline: auto;
              margin-block: 0;
              min-height: 750px;
              border-radius: 1.5rem;
              overflow: hidden;
              isolation: isolate;
            }
            .hero-bg {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: -1;
            }
            .hero-img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              object-position: center;
            }
            @media (max-width: 768px) {
              .hero-container {
                max-width: 95vw;
                min-height: 650px;
              }
            }
      `}</style>
    </>
  );
};

export default ALEVEL;