import React, { useEffect, useRef } from 'react';
// 1. Import the reusable schema component
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
// Assuming shared components are kept in their original path
import MarqueeBanner from '@/components/ibdp/MarqueeBanner';
import ReviewsSection from '@/components/english-tutoring/ReviewsSection';
// import Hero from '@/components/home/Hero';

// Updated imports to new duplicated components (assuming a new folder for components)
import Accordion from '@/components/english-tutoring/accordian';
import EnglishTutorsInfoCard from '@/components/english-tutoring/infoCard';
import EnglishTutorsChooseApp from '@/components/english-tutoring/choose-app';
import EnglishTutorsACT from '@/components/english-tutoring/ACT';
import EnglishTutorsUsps from "@/components/english-tutoring/Usps";
import Trainers from "@/components/english-tutoring/Trainers";
import EnglishTutorsIgniteAchievements from '@/components/english-tutoring/IgniteAchievements';
import EnglishTutorsLifeAtIgniteCarousel from '@/components/english-tutoring/LifeAtIgniteCarousel';
import EnglishTutorsFAQSection from '@/components/english-tutoring/FaqSection';
import EnglishTutorsStudentAchievements from '@/components/english-tutoring/StudentAchivement';

//comment
// Renamed main component: SubjectTutoring -> EnglishTutorsInDubai
const EnglishTutorsInDubai = ({ headerHeight }) => {

    // ----------------------------------------------------
    // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
    // ----------------------------------------------------
    const englishTutorsSchema = [
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What qualifications do Ignite’s English tutors hold?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Our English tutors at Ignite are seasoned professionals with advanced degrees in English and extensive teaching experience across IGCSE, A-Level, IB, AP, ACT, and university preparation programs."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are tutoring sessions available online & in person?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolutely, Ignite offers both online and in-person English tutoring sessions in Dubai, catering to students’ preferred learning environments and schedules."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you offer one-on-one support as well as group tutoring?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, we offer both personalized one-on-one tutoring and small group English classes, allowing students to choose the format that best matches their learning style and goals."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How is student progress monitored during tutoring?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We track progress through regular assignments, quizzes, and feedback sessions to ensure steady improvement and identify areas that require further focus."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How can I book an English tutoring session at Ignite?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Schedule a free demo class to experience our teaching approach firsthand. After your request, we’ll match you with an expert English tutor based on your academic level and learning goals."
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
                "name": "English Tutors In Dubai",
                "item": "https://ignitetraininginstitute.com/english-tutor-in-dubai/"
            }]
        },
        {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Ignite Training Institute - English Tutors In Dubai",
            "url": "https://ignitetraininginstitute.com/english-tutor-in-dubai/",
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
            <SEO title="Best English Tutors In Dubai - IB, IGCSE, A-Level, & AP" description="Acquire language efficiency with top-rated English tutors in Dubai for IB, IGCSE, A-Level, & AP exam prep. Learn with 1K+ advanced resources" />
            {/* 2. RENDER THE SCHEMA COMPONENT, passing the combined array */}
            <JsonLd schema={englishTutorsSchema} />

            <div
                ref={scrollRef}
                data-scroll-container
                style={{ paddingTop: `${headerHeight}px` }}
                className=" innerpage"
            >
                <section data-scroll-section>
                    <EnglishTutorsInfoCard />
                </section>

                {/* <section data-scroll-section>
                    <EnglishTutorsStudentAchievements />
                </section> */}

                <section data-scroll-section>
                    <MarqueeBanner />
                </section>

                <section data-scroll-section>
                    <EnglishTutorsChooseApp />
                </section>

                <section data-scroll-section>
                    <EnglishTutorsACT />
                </section>

                <section data-scroll-section>
                    <ReviewsSection />
                </section>

                <section data-scroll-section>
                    <Trainers />
                </section>

                <section data-scroll-section>
                    <EnglishTutorsIgniteAchievements />
                </section>

                <section data-scroll-section>
                    <EnglishTutorsUsps />
                </section>

                {/* <section data-scroll-section>
                    <EnglishTutorsLifeAtIgniteCarousel />
                </section> */}

                <section data-scroll-section>
                    <EnglishTutorsFAQSection />
                </section>

                <section data-scroll-section>
                    <Accordion />
                </section>
            </div>
        </>
    );
};

export default EnglishTutorsInDubai;