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
import Accordion from '@/components/business-tutoring/accordian';
import BusinessTutorsInfoCard from '@/components/business-tutoring/infoCard';
import BusinessTutorsChooseApp from '@/components/business-tutoring/choose-app';
import BusinessTutorsACT from '@/components/business-tutoring/ACT';
import BusinessTutorsUsps from "@/components/business-tutoring/Usps";
import Trainers from "@/components/business-tutoring/Trainers";
import BusinessTutorsIgniteAchievements from '@/components/business-tutoring/IgniteAchievements';
import BusinessTutorsLifeAtIgniteCarousel from '@/components/business-tutoring/LifeAtIgniteCarousel';
import BusinessTutorsFAQSection from '@/components/business-tutoring/FaqSection';
import BusinessTutorsStudentAchievements from '@/components/business-tutoring/StudentAchivement';

//comment
// Renamed main component: SubjectTutoring -> BusinessTutorsInDubai
const BusinessTutorsInDubai = ({ headerHeight }) => {

    // ----------------------------------------------------
    // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
    // ----------------------------------------------------
    const businessTutorsSchema = [
        {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Ignite Training Institute - Business Studies Tutors In Dubai",
            "url": "https://ignitetraininginstitute.com/business-studies-tutor-in-dubai//",
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
                    "name": "Which curricula does Ignite support for Business Studies tutoring?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ignite offers Business Studies tutoring for IB (SL/HL), IGCSE, A-Levels, and AP Business, tailored to each board’s syllabus and assessment style."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What key topics are covered in Business Studies sessions?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Tutoring covers business organization, marketing, finance, operations, HR management, case study analysis, and exam-specific application of concepts."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do tutors help with essay writing and structured answers?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, students receive guidance on structuring answers, using business terminology effectively, and writing analytical essays for exams like IB Paper 1 and A-Level case-based questions."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is exam preparation part of the tutoring program?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolutely. Students practice with past papers, timed responses, and exam strategy sessions to improve clarity, speed, and scoring techniques."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I attend a demo session before enrolling?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, Ignite offers a free demo class so students can experience our tutoring style and get matched with a tutor suited to their curriculum and academic needs."
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
                "name": "Business Studies Tutors In Dubai",
                "item": "https://ignitetraininginstitute.com/business-studies-tutor-in-dubai/"
            }]
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
                title="Business Studies Tutors In Dubai - IB, IGCSE, & A-Level"
                description="Unlock exam success with Business Studies tutors in Dubai, catering to IB, IGCSE, & A-Level. Get personalized guidance to strengthen your concepts"
                url="https://ignitetraininginstitute.com/business-studies-tutor-in-dubai"
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
            <JsonLd schema={businessTutorsSchema} />

            <div
                ref={scrollRef}
                className="overflow-hidden innerpage page-content-padding"
                data-scroll-container
            >
                <section className="hero-section" data-scroll-section>
                    <div className="hero-container">
                        {/* LCP Image moved here for immediate painting (SSR) */}
                        <picture className="hero-bg">
                            <source media="(max-width: 768px)" srcSet="/assets/subject-tutoring-m.webp" />
                            <img
                                src="/assets/subject-tutoring.webp"
                                alt="Business Tutors Background"
                                fetchPriority="high"
                                decoding="sync"
                                width="1200"
                                height="800"
                                className="hero-img"
                                style={{ opacity: 1, visibility: 'visible' }}
                            />
                        </picture>

                        {/* Interactive Content */}
                        <BusinessTutorsInfoCard />
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
                    <BusinessTutorsStudentAchievements />
                </section> */}

                <LazySection>
                    <section data-scroll-section>
                        <MarqueeBanner />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <BusinessTutorsChooseApp />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <BusinessTutorsACT />
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
                        <BusinessTutorsIgniteAchievements />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <BusinessTutorsUsps />
                    </section>
                </LazySection>
                {/* <section data-scroll-section>
                    <BusinessTutorsLifeAtIgniteCarousel />
                </section> */}

                <LazySection>
                    <section data-scroll-section>
                        <BusinessTutorsFAQSection />
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

export default BusinessTutorsInDubai;