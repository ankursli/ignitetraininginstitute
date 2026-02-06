import React, { useRef, useEffect } from 'react';
import Head from "next/head";
import JsonLd from "@/components/JsonLd";
import SEO from "@/components/SEO";
import LazySection from "@/components/LazySection";
// import MovingBanner from '@/components/home/MovingBanner';
// import Testimonial from '@/components/home/Testimonial';
import Accordion from '@/components/igcse/accordian';
import Blog from "@/components/igcse/Blog";
import CourseCard from '@/components/igcse/CourseCard';
import FAQSection from '@/components/igcse/FaqSection';
import IgniteAchievements from '@/components/igcse/IgniteAchievements';
import InfoCard from '@/components/igcse/InfoCard';
import IgniteAboutCard from "@/components/igcse/IgniteAboutCard";
import Trainers from '@/components/igcse/Trainers';
import WhatWeOfferSection from '@/components/igcse/WhatWeOfferSection';
import LifeAtIgniteCarousel from '@/components/igcse/LifeAtIgniteCarousel';
import MarqueeBanner from '@/components/igcse/MarqueeBanner';
import ReviewsSection from '@/components/igcse/ReviewsSection';
import StudentAchievements from '@/components/igcse/StudentAchivement';
import SubjectsCard from '@/components/igcse/SubjectCard';
import UspsSection from '@/components/igcse/UspsSection';
import UniImagesCard from '@/components/igcse/universityCrad';


// 1. ACCEPT the headerHeight prop
const IGCSE = ({ headerHeight }) => {

  // ----------------------------------------------------
  // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
  // ----------------------------------------------------
  const igcseSchema = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which IGCSE subjects does Ignite provide tutoring for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ignite offers tutoring in a full suite of IGCSE subjects, including Math (Core & Extended), Combined and Triple Sciences, Further Math, English Language & Literature, Business Studies, Economics, Statistics, and Environmental Management (EVM)."
          }
        },
        {
          "@type": "Question",
          "name": "What exam boards do you support for IGCSE tutoring?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our IGCSE tutoring is aligned with Edexcel, Cambridge (CAIE), and Oxford International AQA syllabi, with subject-specific resources and mock exams tailored to each board."
          }
        },
        {
          "@type": "Question",
          "name": "Are there one-on-one & group class options available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely, Ignite offers both one-on-one bespoke tutoring and small group training (3–6 students), ensuring students receive focused attention or collaborative learning as preferred."
          }
        },
        {
          "@type": "Question",
          "name": "How does Ignite support students in their IGCSE exam preparation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We empower students through past paper solving, unit tests, mock exams under exam-like conditions, in-depth paper reviews, and targeted revision sessions."
          }
        },
        {
          "@type": "Question",
          "name": "Can I try out the tutoring services before committing to a full course?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Ignite offers a free demo class and study resources, allowing students and parents to evaluate the quality of tutoring and learning environment before enrolling."
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
        "name": "IGCSE Tutors",
        "item": "https://ignitetraininginstitute.com/courses/igcse-tutors/"
      }]
    },
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "EducationalOrganization",
          "name": "Ignite Training Institute",
          "url": "https://ignitetraininginstitute.com/courses/igcse-tutors-in-dubai/",
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
          "serviceType": "IGCSE Tutoring",
          "name": "IGCSE Tutors in Dubai - Ignite Training Institute",
          "description": "Ignite Training Institute offers expert tutoring support for IGCSE students in Dubai. Our tutors help students excel in subjects such as Mathematics, Sciences, English, and more with personalized learning strategies.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Ignite Training Institute",
            "url": "https://ignitetraininginstitute.com/courses/igcse-tutors-in-dubai/"
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
        title="IGCSE Tutors In Dubai, UAE | Expert Coaching & Guidance"
        description="Achieve success with top IGCSE tutors in UAE. Get full prep support for IGCSE with syllabus coverage, past paper practice & exam strategies"
      />

      {/* <Head>
        <link
          rel="preload"
          href="/assets/igcse.webp"
          as="image"
          type="image/webp"
          media="(max-width: 768px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/assets/igcse_bg_main.webp"
          as="image"
          type="image/webp"
          media="(min-width: 769px)"
          fetchPriority="high"
        />
      </Head> */}
      {/* 2. RENDER THE SCHEMA COMPONENT, passing the combined array */}
      <JsonLd schema={igcseSchema} />

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
              <source media="(max-width: 768px)" srcSet="/assets/igcse.webp" />
              <img
                src="/assets/myp_bg_main.webp"
                alt="IGCSE Tutors Background"
                fetchPriority="high"
                decoding="sync"
                width="1200"
                height="800"
                className="hero-img"
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

export default IGCSE;