import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Head from "next/head";
import LazySection from "@/components/LazySection";
// 1. Import the reusable schema component
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
// Assuming shared components are kept in their original path
const MarqueeBanner = dynamic(() => import('@/components/private-tutors-dubai/MarqueeBanner'));
const ReviewsSection = dynamic(() => import('@/components/private-tutors-dubai/ReviewsSection'));
const StudentAchievements = dynamic(() => import('@/components/private-tutors-dubai/StudentAchivement'));
const CurriculumTestsComponent = dynamic(() => import('@/components/private-tutors-dubai/curriculum'));
import InfoCard from '@/components/private-tutors-dubai/infoCard';
const OurTrainers = dynamic(() => import('@/components/private-tutors-dubai/ourTrainers'));
const SubjectsCard1 = dynamic(() => import('@/components/private-tutors-dubai/SubjectCard1'));
const IgniteAchievements = dynamic(() => import('@/components/private-tutors-dubai/igniteAchivement'));
const Blog = dynamic(() => import('@/components/private-tutors-dubai/Blog'));
const UpsSection = dynamic(() => import('@/components/private-tutors-dubai/UspsSection'));
const Accordion = dynamic(() => import('@/components/private-tutors-dubai/accordian'));
const FAQSection = dynamic(() => import('@/components/private-tutors-dubai/FaqSection'));
const LifeAtIgniteCarousel = dynamic(() => import('@/components/private-tutors-dubai/LifeAtIgniteCarousel'));


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
        url="https://ignitetraininginstitute.com/private-tutors-in-dubai"
      />
      <Head>
        <link
          rel="preload"
          href="/assets/motutors.webp"
          as="image"
          type="image/webp"
          media="(max-width: 768px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/assets/tutors.webp"
          as="image"
          type="image/webp"
          media="(min-width: 769px)"
          fetchPriority="high"
        />
      </Head>
      {/* 2. RENDER THE SCHEMA COMPONENT, passing the combined array */}
      <JsonLd schema={privateTutorsSchema} />

      {/* 2. APPLY the style for paddingTop to the scroll container */}
      <div
        ref={scrollRef}
        className='overflow-hidden innerpage page-content-padding'
        data-scroll-container
      >
        <section data-scroll-section className="hero-section">
          <div className="hero-container">
            {/* LCP Image moved here for immediate painting (SSR) */}
            <picture className="hero-bg">
              <source media="(max-width: 768px)" srcSet="/assets/motutors.webp" />
              <img
                src="/assets/tutors.webp"
                alt="Private Tutors in Dubai"
                fetchPriority="high"
                width="1200"
                height="800"
                className="hero-img"
                style={{ opacity: 1, visibility: 'visible' }}
              />
            </picture>

            <InfoCard />
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
              object-position: center 35%; 
            }
            @media (max-width: 1100px) {
              .hero-container {
                max-width: 95vw;
              }
            }
          `}</style>
        </section>

        {/* <section data-scroll-section>
          <StudentAchievements />
        </section> */}

        <LazySection>
          <section data-scroll-section>
            <CurriculumTestsComponent />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <SubjectsCard1 />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <ReviewsSection />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <MarqueeBanner />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <OurTrainers />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <IgniteAchievements />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <UpsSection />
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
    </>
  );
};

export default PrivateTutorsDubai;