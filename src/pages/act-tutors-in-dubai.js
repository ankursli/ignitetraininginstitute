import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import LazySection from '@/components/LazySection';
// 1. Import the reusable schema component
import JsonLd from "@/components/JsonLd";
import SEO from "@/components/SEO";
const Accordion = dynamic(() => import('@/components/act/accrodian'));
const Blog = dynamic(() => import('@/components/act/Blog'));
const CourseCard = dynamic(() => import('@/components/act/CourseCard'));
const FAQSection = dynamic(() => import('@/components/act/FaqSection'));
const IgniteAchievements = dynamic(() => import('@/components/act/IgniteAchievements'));
import InfoCard from '@/components/act/InfoCard';
const IgniteAboutCard = dynamic(() => import('@/components/act/IgniteAboutCard'));
const LifeAtIgniteCarousel = dynamic(() => import('@/components/act/LifeAtIgniteCarousel'));
const MarqueeBanner = dynamic(() => import('@/components/act/MarqueeBanner'));
const ReviewsSection = dynamic(() => import('@/components/act/ReviewsSection'));
const StudentAchievements = dynamic(() => import('@/components/act/StudentAchivement'));
const SubjectsCard = dynamic(() => import('@/components/act/SubjectCard'));
const SubjectsCard1 = dynamic(() => import('@/components/act/SubjectCard1'));
const UspsSection = dynamic(() => import('@/components/act/UspsSection'));
import Head from 'next/head';

// 1. ACCEPT the headerHeight prop
const act = ({ headerHeight }) => {

  // ----------------------------------------------------
  // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
  // ----------------------------------------------------
  const actSchema = [
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
        "name": "ACT Tutors",
        "item": "https://ignitetraininginstitute.com/act-tutors/"
      }]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which ACT subjects does Ignite offer tutoring for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ignite provides expert tutoring in all ACT components: English, Math, Reading, Science, and the optional Writing section, covering content review, strategies, and exam-specific practice."
          }
        },
        {
          "@type": "Question",
          "name": "Is the ACT tutoring aligned with official ACT exam formats?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our ACT tutoring is fully aligned with official ACT standards, featuring timed practice tests, detailed answer explanations, and training in tackling different question types under exam conditions."
          }
        },
        {
          "@type": "Question",
          "name": "Are tutoring sessions available in person and online?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! Ignite offers flexible tutoring formats, including in-person sessions in Dubai and nationwide UAE locations, as well as live online classes for remote learners."
          }
        },
        {
          "@type": "Question",
          "name": "How does Ignite help students improve their ACT scores?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students benefit from targeted content review, past paper solving, mock exams, time management drills, and personalized feedback, helping them master all ACT sections for improved scores."
          }
        },
        {
          "@type": "Question",
          "name": "How Can Ignite Support You As The Best ACT Tutors In Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ignite Training Institute can support you as the best ACT tutors in Dubai through our comprehensive & ACT-specific tutoring strategies. Our ACT tutoring program is designed to help students achieve their full potential & excel in their academic & professional pursuits."
          }
        },
        {
          "@type": "Question",
          "name": "Can I try a session before enrolling in full ACT prep?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Ignite offers a free demo class so students and parents can evaluate our teaching methods, meet an instructor, and see if our ACT prep aligns with their goals before enrolling."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "EducationalOrganization",
          "name": "Ignite Training Institute",
          "url": "https://ignitetraininginstitute.com/act-tutors-in-dubai/",
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
          "serviceType": "ACT Tutoring",
          "name": "ACT Tutors in Dubai - Ignite Training Institute",
          "description": "Ignite Training Institute offers expert ACT tutoring in Dubai. Our tutors help students improve their ACT scores through personalized strategies, practice tests, and focused guidance tailored to each student's strengths and weaknesses.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Ignite Training Institute",
            "url": "https://ignitetraininginstitute.com/act-tutors-in-dubai/"
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
      <Head>
        <link rel="stylesheet" href="/styles/home/MovingBanner.css" />
        <link rel="stylesheet" href="/styles/home/Subjects.css" />
        <link
          rel="preload"
          href="/assets/mobileact.webp"
          as="image"
          type="image/webp"
          media="(max-width: 768px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/assets/act_bg_main.webp"
          as="image"
          type="image/webp"
          media="(min-width: 769px)"
          fetchPriority="high"
        />
      </Head>
      <SEO
        title="ACT Subject Tests Prep With Focused Courses & Tutors In UAE"
        description="Ignite Training Institute can support you as the best ACT tutors in Dubai through our comprehensive guidance & ACT-specific tutoring strategies"
        url="https://ignitetraininginstitute.com/act-tutors-in-dubai"
      />
      {/* 2. RENDER THE SCHEMA COMPONENT, passing the combined array */}
      <JsonLd schema={actSchema} />

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
              <source media="(max-width: 768px)" srcSet="/assets/mobileact.webp" />
              <img
                src="/assets/act_bg_main.webp"
                alt="ACT Tutors Background"
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

        <LazySection>
          <section data-scroll-section>
            <SubjectsCard />
          </section>
        </LazySection>
        <LazySection>
          <section data-scroll-section>
            <SubjectsCard1 />
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
            <ReviewsSection />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <FAQSection />
          </section>
        </LazySection>
        <LazySection>
          <section data-scroll-section>
            <MarqueeBanner />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section className='actblogs'>
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

export default act;