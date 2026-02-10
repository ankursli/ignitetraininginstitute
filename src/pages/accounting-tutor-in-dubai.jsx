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
import Accordion from '@/components/accounting-tutoring/accordian';
import AccountingTutorsInfoCard from '@/components/accounting-tutoring/infoCard';
import AccountingTutorsChooseApp from '@/components/accounting-tutoring/choose-app';
import AccountingTutorsACT from '@/components/accounting-tutoring/ACT';
import AccountingTutorsUsps from "@/components/accounting-tutoring/Usps";
import Trainers from "@/components/accounting-tutoring/Trainers";
import AccountingTutorsIgniteAchievements from '@/components/accounting-tutoring/IgniteAchievements';
import AccountingTutorsLifeAtIgniteCarousel from '@/components/accounting-tutoring/LifeAtIgniteCarousel';
import AccountingTutorsFAQSection from '@/components/accounting-tutoring/FaqSection';
import AccountingTutorsStudentAchievements from '@/components/accounting-tutoring/StudentAchivement';

//comment
// Renamed main component: SubjectTutoring -> AccountingTutorsInDubai
const AccountingTutorsInDubai = ({ headerHeight }) => {

    // ----------------------------------------------------
    // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
    // ----------------------------------------------------
    const accountingTutorsSchema = [
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
                "name": "Accounting Tutors In Dubai",
                "item": "https://ignitetraininginstitute.com/accounting-tutor-in-dubai/"
            }]
        },
        {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Ignite Training Institute - Accounting Tutors In Dubai",
            "url": "https://ignitetraininginstitute.com/accounting-tutor-in-dubai/",
            "logo": "https://ignitetraininginstitute.com/wp-content/uploads/2023/02/ignitefinallogos_1.svg",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "63",
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
                    "name": "What curricula does Ignite offer Accounting tutoring for?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ignite provides Accounting tutoring for IGCSE, AS & A-Levels (Cambridge & Edexcel), and introductory university-level courses."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What topics are covered in Accounting tutoring sessions?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Tutoring includes financial statements, double-entry bookkeeping, ratios, adjustments, ledgers, trial balance, and accounting principles."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is support available for both theory and numerical questions?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, sessions focus on building both conceptual understanding and calculation accuracy to handle structured and application-based questions."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you offer past paper practice and exam preparation?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolutely. Students work on past papers, mock tests, and receive feedback on time management, presentation, and examiner expectations."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I book a free demo class before joining?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, Ignite offers a free demo session so students can assess the teaching approach and get paired with the right Accounting tutor."
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
                title="Accounting Tutors In Dubai - IGCSE & A-Level Support"
                description="Learn with accounting tutors in Dubai, specializing in IGCSE & A-Level. Benefit from personalized support, structured learning plans, & study resources"
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
            <JsonLd schema={accountingTutorsSchema} />

            <div
                ref={scrollRef}
                data-scroll-container
                style={{ paddingTop: `${headerHeight}px` }}
                className=" innerpage"
            >
                <section className="hero-section" data-scroll-section>
                    <div className="hero-container">
                        {/* LCP Image moved here for immediate painting (SSR) */}
                        <picture className="hero-bg">
                            <source media="(max-width: 768px)" srcSet="/assets/subject-tutoring-m.webp" />
                            <img
                                src="/assets/subject-tutoring.webp"
                                alt="Accounting Tutors Background"
                                fetchPriority="high"
                                decoding="sync"
                                width="1200"
                                height="800"
                                className="hero-img"
                                style={{ opacity: 1, visibility: 'visible' }}
                            />
                        </picture>

                        {/* Interactive Content */}
                        <AccountingTutorsInfoCard />
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
                    <AccountingTutorsStudentAchievements />
                </section> */}

                <LazySection>
                    <section data-scroll-section>
                        <MarqueeBanner />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <AccountingTutorsChooseApp />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <AccountingTutorsACT />
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
                        <AccountingTutorsIgniteAchievements />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <AccountingTutorsUsps />
                    </section>
                </LazySection>

                {/* <section data-scroll-section>
                    <AccountingTutorsLifeAtIgniteCarousel />
                </section> */}

                <LazySection>
                    <section data-scroll-section>
                        <AccountingTutorsFAQSection />
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

export default AccountingTutorsInDubai;