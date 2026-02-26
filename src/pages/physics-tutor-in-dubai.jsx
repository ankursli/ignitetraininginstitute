import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import LazySection from "@/components/LazySection";
import Head from "next/head";
// 1. Import the reusable schema component
import JsonLd from "@/components/JsonLd";
import SEO from "@/components/SEO";
// Assuming shared components are kept in their original path
const MarqueeBanner = dynamic(() => import('@/components/ibdp/MarqueeBanner'));
const ReviewsSection = dynamic(() => import('@/components/english-tutoring/ReviewsSection'));
// import Hero from '@/components/home/Hero';

// Updated imports to new duplicated components (assuming a new folder for components)
const Accordion = dynamic(() => import('@/components/physics-tutoring/accordian'));
import PhysicsTutorsInfoCard from '@/components/physics-tutoring/infoCard';
const PhysicsTutorsChooseApp = dynamic(() => import('@/components/physics-tutoring/choose-app'));
const PhysicsTutorsACT = dynamic(() => import('@/components/physics-tutoring/ACT'));
const PhysicsTutorsUsps = dynamic(() => import('@/components/physics-tutoring/Usps'));
const Trainers = dynamic(() => import('@/components/physics-tutoring/Trainers'));
const PhysicsTutorsIgniteAchievements = dynamic(() => import('@/components/physics-tutoring/IgniteAchievements'));
const PhysicsTutorsLifeAtIgniteCarousel = dynamic(() => import('@/components/physics-tutoring/LifeAtIgniteCarousel'));
const PhysicsTutorsFAQSection = dynamic(() => import('@/components/physics-tutoring/FaqSection'));
const PhysicsTutorsStudentAchievements = dynamic(() => import('@/components/physics-tutoring/StudentAchivement'));

//comment
// Renamed main component: SubjectTutoring -> PhysicsTutorsInDubai
const PhysicsTutorsInDubai = ({ headerHeight }) => {

    // ----------------------------------------------------
    // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
    // ----------------------------------------------------
    const physicsTutorsSchema = [
        {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Ignite Training Institute - Physics Tutors In Dubai",
            "url": "https://ignitetraininginstitute.com/physics-tutor-in-dubai/",
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
                    "name": "Which Physics curricula does Ignite offer tutoring for?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ignite provides Physics tutoring for IB (SL/HL), IGCSE, A-Levels, and AP Physics (1, 2, and C), covering each board’s structure and exam format."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do tutors help with both theoretical concepts and numerical problems?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, sessions include in-depth concept explanation along with regular practice on formulas, calculations, and application-based questions."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I get help with IB Internal Assessments or lab report guidance?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolutely. Tutors guide students through their IB Physics IAs, lab design, data analysis, and evaluation, ensuring alignment with IB criteria."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does Ignite help students prepare for Physics exams?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Tutoring includes past paper practice, time-bound mock tests, problem-solving strategies, and feedback on commonly tested topics and errors."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is a Physics demo class available before enrolling?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, students can schedule a free demo session to meet a tutor, review their learning needs, and experience the teaching approach first-hand."
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
                "name": "Physics Tutor In Dubai",
                "item": "https://ignitetraininginstitute.com/physics-tutor-in-dubai/"
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
                title="Physics Tutors In Dubai For IB, IGCSE, A-Level, & AP"
                description="Excel with the best Physics tutors in Dubai, specializing in IB, IGCSE, A-Level, & AP. Build strong concepts & achieve top exam results"
                url="https://ignitetraininginstitute.com/physics-tutor-in-dubai" />
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
            <JsonLd schema={physicsTutorsSchema} />

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
                                alt="Physics Tutors Background"
                                fetchPriority="high"
                                decoding="sync"
                                width="1200"
                                height="800"
                                className="hero-img"
                                style={{ opacity: 1, visibility: 'visible' }}
                            />
                        </picture>

                        {/* Interactive Content */}
                        <PhysicsTutorsInfoCard />
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
                    <PhysicsTutorsStudentAchievements />
                </section> */}

                <LazySection>
                    <section data-scroll-section>
                        <MarqueeBanner />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <PhysicsTutorsChooseApp />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <PhysicsTutorsACT />
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
                        <PhysicsTutorsIgniteAchievements />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <PhysicsTutorsUsps />
                    </section>
                </LazySection>

                {/* <section data-scroll-section>
                    <PhysicsTutorsLifeAtIgniteCarousel />
                </section> */}

                <LazySection>
                    <section data-scroll-section>
                        <PhysicsTutorsFAQSection />
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

export default PhysicsTutorsInDubai;