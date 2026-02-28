import React, { useEffect, useRef } from 'react';
import LazySection from "@/components/LazySection";
import Head from "next/head";
// 1. Import the reusable schema component
import JsonLd from "@/components/JsonLd";
import SEO from "@/components/SEO";
// Assuming shared components are kept in their original path
import MarqueeBanner from '@/components/ibdp/MarqueeBanner';
import ReviewsSection from '@/components/english-tutoring/ReviewsSection';
// import Hero from '@/components/home/Hero';

// Updated imports to new duplicated components (assuming a new folder for components)
import Accordion from '@/components/spanish-tutoring/accordian';
import SpanishTutorsInfoCard from '@/components/spanish-tutoring/infoCard';
import SpanishTutorsChooseApp from '@/components/spanish-tutoring/choose-app';
import SpanishTutorsACT from '@/components/spanish-tutoring/ACT';
import SpanishTutorsUsps from "@/components/spanish-tutoring/Usps";
import Trainers from "@/components/spanish-tutoring/Trainers";
import SpanishTutorsIgniteAchievements from '@/components/spanish-tutoring/IgniteAchievements';
import SpanishTutorsLifeAtIgniteCarousel from '@/components/spanish-tutoring/LifeAtIgniteCarousel';
import SpanishTutorsFAQSection from '@/components/spanish-tutoring/FaqSection';
import SpanishTutorsStudentAchievements from '@/components/spanish-tutoring/StudentAchivement';

//comment
// Renamed main component: SubjectTutoring -> SpanishTutorsInDubai
const SpanishTutorsInDubai = ({ headerHeight }) => {

    // ----------------------------------------------------
    // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
    // ----------------------------------------------------
    const spanishTutorsSchema = [
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What curricula does Ignite support for Spanish tutoring?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, Ignite offers specialized Spanish tutoring for students following the IB (SL/HL), IGCSE, A-Levels, and AP Spanish courses. Each program is aligned with the specific assessment objectives and exam formats of the chosen curriculum."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What language skills are covered in Spanish tutoring?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Tutoring sessions cover reading, writing, listening, and speaking skills. Students work on grammar, vocabulary, comprehension, and cultural awareness, with customized support for both exam and coursework requirements."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can Ignite help with IB internal assessments & AP free-response practice?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, tutors provide guidance for IB IAs, orals, and AP free-response practice to help students improve performance in coursework and exams."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are past papers & mocks part of the Spanish tutoring program?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Students practice with past papers and mock exams to build accuracy, fluency, and exam confidence across all curricula."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do I start Spanish tutoring at Ignite?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You can schedule a free demo session to experience our teaching style and find the right Spanish tutor for your needs."
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
                "name": "Spanish Tutors In Dubai",
                "item": "https://ignitetraininginstitute.com/spanish-tutor-in-dubai/"
            }]
        },
        {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Ignite Training Institute - Spanish Tutors In Dubai",
            "url": "https://ignitetraininginstitute.com/spanish-tutor-in-dubai/",
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
        }
    ];
    // ----------------------------------------------------
    // 👆 END OF SCHEMA DEFINITION
    // ----------------------------------------------------

    // Relying on global LocomotiveScrollProvider from _app.js

    return (
        <>
            <SEO
                title="Best Spanish Tutors In Dubai - IB, IGCSE, A-Level Support"
                description="We provide expert Spanish coaching in Dubai for IB, IGCSE, & A-Levels, helping students master the language & achieve top exam results"
                url="https://ignitetraininginstitute.com/spanish-tutor-in-dubai"
            />
            <Head>
                <link
                    rel="preload"
                    href="/assets/subject-tutoring-m.webp"
                    as="image"
                    type="image/webp"
                    media="(max-width: 768px)"
                    fetchPriority="high"
                />
                <link
                    rel="preload"
                    href="/assets/subject-tutoring.webp"
                    as="image"
                    type="image/webp"
                    media="(min-width: 769px)"
                    fetchPriority="high"
                />
            </Head>
            {/* 2. RENDER THE SCHEMA COMPONENT, passing the combined array */}
            <JsonLd schema={spanishTutorsSchema} />

            <div
                className="innerpage page-content-padding"
                style={{ paddingTop: `${headerHeight}px` }}
            >
                <section className="hero-section" data-scroll-section>
                    <div className="hero-container">
                        {/* LCP Image moved here for immediate painting (SSR) */}
                        <picture className="hero-bg">
                            <source media="(max-width: 768px)" srcSet="/assets/subject-tutoring-m.webp" />
                            <img
                                src="/assets/subject-tutoring.webp"
                                alt="Spanish Tutors Background"
                                fetchPriority="high"
                                decoding="sync"
                                width="1200"
                                height="800"
                                className="hero-img"
                                style={{ opacity: 1, visibility: 'visible' }}
                            />
                        </picture>

                        {/* Interactive Content */}
                        <SpanishTutorsInfoCard />
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
              isolation: isolate; /* Creates stacking context */
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

                {/* <section data-scroll-section>
                    <SpanishTutorsStudentAchievements />
                </section> */}

                <LazySection>
                    <section data-scroll-section>
                        <MarqueeBanner />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <SpanishTutorsChooseApp />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <SpanishTutorsACT />
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

                <LazySection>
                    <section data-scroll-section>
                        <SpanishTutorsIgniteAchievements />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <SpanishTutorsUsps />
                    </section>
                </LazySection>

                {/* <section data-scroll-section>
                    <SpanishTutorsLifeAtIgniteCarousel />
                </section> */}

                <LazySection>
                    <section data-scroll-section>
                        <SpanishTutorsFAQSection />
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

export default SpanishTutorsInDubai;