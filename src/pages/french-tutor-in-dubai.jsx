import React, { useEffect, useRef } from 'react';
// 1. Import the reusable schema component
import JsonLd from "@/components/JsonLd";
import SEO from "@/components/SEO";
// Assuming shared components are kept in their original path
import MarqueeBanner from '@/components/ibdp/MarqueeBanner';
import ReviewsSection from '@/components/english-tutoring/ReviewsSection';
// import Hero from '@/components/home/Hero';

// Updated imports to new duplicated components (assuming a new folder for components)
import Accordion from '@/components/french-tutoring/accordian';
import FrenchTutorsInfoCard from '@/components/french-tutoring/infoCard';
import FrenchTutorsChooseApp from '@/components/french-tutoring/choose-app';
import FrenchTutorsACT from '@/components/french-tutoring/ACT';
import FrenchTutorsUsps from "@/components/french-tutoring/Usps";
import Trainers from "@/components/french-tutoring/Trainers";
import FrenchTutorsIgniteAchievements from '@/components/french-tutoring/IgniteAchievements';
import FrenchTutorsLifeAtIgniteCarousel from '@/components/french-tutoring/LifeAtIgniteCarousel';
import FrenchTutorsFAQSection from '@/components/french-tutoring/FaqSection';
import FrenchTutorsStudentAchievements from '@/components/french-tutoring/StudentAchivement';

//comment
// Renamed main component: SubjectTutoring -> FrenchTutorsInDubai
const FrenchTutorsInDubai = ({ headerHeight }) => {

    // ----------------------------------------------------
    // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
    // ----------------------------------------------------
    const frenchTutorsSchema = [
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
                "name": "French Tutors In Dubai",
                "item": "https://ignitetraininginstitute.com/french-tutor-in-dubai/"
            }]
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Does Ignite offer French tutoring for different curricula?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, Ignite provides French tutoring tailored to major international curricula, including IB (SL/HL), IGCSE, A-Levels, and AP French. Tutors are well-versed with each board’s requirements, ensuring focused academic support."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What areas of the French language are covered in tutoring sessions?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Tutoring sessions cover all key skills like reading, writing, listening, and speaking. Emphasis is placed on grammar, vocabulary, comprehension, and cultural context based on each curriculum’s exam format."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is support available for internal assessments & oral exams in IB French?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolutely. Ignite’s IB French tutors provide guidance for internal assessments (IA), oral presentations, and writing tasks, helping students meet the IB language criteria with clarity and confidence."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can students get help with past papers & exam strategies?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, students practice with past papers and receive targeted coaching on exam strategies, timed responses, and common question types for IGCSE, A-Levels, and AP French exams."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do I start French tutoring at Ignite?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You can begin by booking a free demo class. This allows you to assess our teaching style and get paired with a French tutor suited to your academic needs and curriculum."
                    }
                }
            ]
        },
        {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Ignite Training Institute - French Tutors In Dubai",
            "url": "https://ignitetraininginstitute.com/french-tutor-in-dubai/",
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
            <SEO
                title="Best French Tutors In Dubai - IB, IGCSE, & A-Level Support"
                description="Unlock efficiency in the French language with Ignite's French tutors in Dubai. We specialize - IB, IGCSE, & A-Levels & offer advanced support"
            />
            {/* 2. RENDER THE SCHEMA COMPONENT, passing the combined array */}
            <JsonLd schema={frenchTutorsSchema} />

            <div
                ref={scrollRef}
                data-scroll-container
                style={{ paddingTop: `${headerHeight}px` }}
                className=" innerpage"
            >
                <section data-scroll-section>
                    <FrenchTutorsInfoCard />
                </section>

                {/* <section data-scroll-section>
                    <FrenchTutorsStudentAchievements />
                </section> */}

                <section data-scroll-section>
                    <MarqueeBanner />
                </section>

                <section data-scroll-section>
                    <FrenchTutorsChooseApp />
                </section>

                <section data-scroll-section>
                    <FrenchTutorsACT />
                </section>

                <section data-scroll-section>
                    <ReviewsSection />
                </section>

                <section data-scroll-section>
                    <Trainers />
                </section>

                <section data-scroll-section>
                    <FrenchTutorsIgniteAchievements />
                </section>

                <section data-scroll-section>
                    <FrenchTutorsUsps />
                </section>

                {/* <section data-scroll-section>
                    <FrenchTutorsLifeAtIgniteCarousel />
                </section> */}

                <section data-scroll-section>
                    <FrenchTutorsFAQSection />
                </section>

                <section data-scroll-section>
                    <Accordion />
                </section>
            </div>
        </>
    );
};

export default FrenchTutorsInDubai;