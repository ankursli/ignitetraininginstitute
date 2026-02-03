import React, { useEffect, useRef } from 'react';
// 1. Import the reusable schema component
import JsonLd from "@/components/JsonLd";
import SEO from "@/components/SEO";
// Assuming shared components are kept in their original path
import MarqueeBanner from '@/components/ibdp/MarqueeBanner';
import ReviewsSection from '@/components/english-tutoring/ReviewsSection';
// import Hero from '@/components/home/Hero';

// Updated imports to new duplicated components (assuming a new folder for components)
import Accordion from '@/components/physics-tutoring/accordian';
import PhysicsTutorsInfoCard from '@/components/physics-tutoring/infoCard';
import PhysicsTutorsChooseApp from '@/components/physics-tutoring/choose-app';
import PhysicsTutorsACT from '@/components/physics-tutoring/ACT';
import PhysicsTutorsUsps from "@/components/physics-tutoring/Usps";
import Trainers from "@/components/physics-tutoring/Trainers";
import PhysicsTutorsIgniteAchievements from '@/components/physics-tutoring/IgniteAchievements';
import PhysicsTutorsLifeAtIgniteCarousel from '@/components/physics-tutoring/LifeAtIgniteCarousel';
import PhysicsTutorsFAQSection from '@/components/physics-tutoring/FaqSection';
import PhysicsTutorsStudentAchievements from '@/components/physics-tutoring/StudentAchivement';

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
                description="Excel with the best Physics tutors in Dubai, specializing in IB, IGCSE, A-Level, & AP. Build strong concepts & achieve top exam results" />
            {/* 2. RENDER THE SCHEMA COMPONENT, passing the combined array */}
            <JsonLd schema={physicsTutorsSchema} />

            <div
                ref={scrollRef}
                data-scroll-container
                style={{ paddingTop: `${headerHeight}px` }}
                className=" innerpage"
            >
                <section data-scroll-section>
                    <PhysicsTutorsInfoCard />
                </section>

                {/* <section data-scroll-section>
                    <PhysicsTutorsStudentAchievements />
                </section> */}

                <section data-scroll-section>
                    <MarqueeBanner />
                </section>

                <section data-scroll-section>
                    <PhysicsTutorsChooseApp />
                </section>

                <section data-scroll-section>
                    <PhysicsTutorsACT />
                </section>

                <section data-scroll-section>
                    <ReviewsSection />
                </section>

                <section data-scroll-section>
                    <Trainers />
                </section>

                <section data-scroll-section>
                    <PhysicsTutorsIgniteAchievements />
                </section>

                <section data-scroll-section>
                    <PhysicsTutorsUsps />
                </section>

                {/* <section data-scroll-section>
                    <PhysicsTutorsLifeAtIgniteCarousel />
                </section> */}

                <section data-scroll-section>
                    <PhysicsTutorsFAQSection />
                </section>

                <section data-scroll-section>
                    <Accordion />
                </section>
            </div>
        </>
    );
};

export default PhysicsTutorsInDubai;