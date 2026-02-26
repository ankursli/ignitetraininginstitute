import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import LazySection from '@/components/LazySection';
// 1. Import the reusable schema component
import JsonLd from "@/components/JsonLd";
import SEO from "@/components/SEO";
const Accordion = dynamic(() => import('@/components/ap/accrodian'));
const Blog = dynamic(() => import('@/components/ap/Blog'));
const APBenefits = dynamic(() => import('@/components/ap/chooseApp'));
const CourseCard = dynamic(() => import('@/components/ap/CourseCard'));
const FAQSection = dynamic(() => import('@/components/ap/FaqSection'));
const IgniteAchievements = dynamic(() => import('@/components/ap/IgniteAchievements'));
import InfoCard from '@/components/ap/InfoCard';
const IgniteAboutCard = dynamic(() => import('@/components/ap/IgniteAboutCard'));
const Trainers = dynamic(() => import('@/components/ap/Trainers'));
const WhatWeOfferSection = dynamic(() => import('@/components/ap/WhatWeOfferSection'));
const LifeAtIgniteCarousel = dynamic(() => import('@/components/ap/LifeAtIgniteCarousel'));
const MarqueeBanner = dynamic(() => import('@/components/ap/MarqueeBanner'));
const ReviewsSection = dynamic(() => import('@/components/ap/ReviewsSection'));
const StudentAchievements = dynamic(() => import('@/components/ap/StudentAchivement'));
const SubjectsCard1 = dynamic(() => import('@/components/ap/SubjectCard1'));
const UspsSection = dynamic(() => import('@/components/ap/UspsSection'));

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
        url="https://ignitetraininginstitute.com/advanced-placements-tutors-in-dubai"
      />
      <Head>
        <link
          rel="preload"
          href="/assets/homeschooling-bg.webp"
          as="image"
          type="image/webp"
          media="(max-width: 768px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/assets/ap_bg_main.webp"
          as="image"
          type="image/webp"
          media="(min-width: 769px)"
          fetchPriority="high"
        />
      </Head>
      {/* 2. RENDER THE SCHEMA COMPONENT, passing the combined array */}
      <JsonLd schema={apSchema} />

      {/* 3. APPLY the style for paddingTop to the scroll container */}
      <div
        ref={scrollRef}
        className='overflow-hidden innerpage page-content-padding'
        data-scroll-container
      >
        <section data-scroll-section className="hero-section">
          <div className="hero-container">
            {/* LCP Image moved here for immediate painting (SSR) */}
            <picture className="hero-bg">
              <source media="(max-width: 768px)" srcSet="/assets/homeschooling-bg.webp" />
              <img
                src="/assets/ap_bg_main.webp"
                alt="Advanced Placements Background"
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
              object-position: center;
            }
            @media (max-width: 1100px) {
              .hero-container {
                max-width: 95vw;
              }
            }
          `}</style>
        </section>

        <LazySection>
          <section data-scroll-section>
            <IgniteAboutCard />
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

        {/* <section data-scroll-section>
            <SubjectsCard />
          </section> */}
        <LazySection>
          <section data-scroll-section>
            <SubjectsCard1 />
          </section>
        </LazySection>
        <LazySection>
          <section data-scroll-section>
            <APBenefits />
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
    </>
  );
};

export default ap;