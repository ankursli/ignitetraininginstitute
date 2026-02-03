import React, { useEffect, useRef } from 'react';
// 1. Import the reusable schema component
import JsonLd from "@/components/JsonLd";
import SEO from "@/components/SEO";
// Assuming shared components are kept in their original path
import MarqueeBanner from '@/components/ibdp/MarqueeBanner';
import ReviewsSection from '@/components/english-tutoring/ReviewsSection';
// import Hero from '@/components/home/Hero';

// Updated imports to new duplicated components (assuming a new folder for components)
import Accordion from '@/components/maths-tutoring/accordian';
import MathsTutorsInfoCard from '@/components/maths-tutoring/infoCard';
import MathsTutorsChooseApp from '@/components/maths-tutoring/choose-app';
import MathsTutorsACT from '@/components/maths-tutoring/ACT';
import MathsTutorsUsps from "@/components/maths-tutoring/Usps";
import Trainers from "@/components/maths-tutoring/Trainers";
import MathsTutorsIgniteAchievements from '@/components/maths-tutoring/IgniteAchievements';
import MathsTutorsLifeAtIgniteCarousel from '@/components/maths-tutoring/LifeAtIgniteCarousel';
import MathsTutorsFAQSection from '@/components/maths-tutoring/FaqSection';
import MathsTutorsStudentAchievements from '@/components/maths-tutoring/StudentAchivement';

//comment
// Renamed main component: SubjectTutoring -> MathsTutorsInDubai
const MathsTutorsInDubai = ({ headerHeight }) => {

    // ----------------------------------------------------
    // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
    // ----------------------------------------------------
    const mathsTutorsSchema = [
        {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Ignite Training Institute - Maths Tutors In Dubai",
            "url": "https://ignitetraininginstitute.com/maths-tutor-in-dubai/",
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
                "name": "Maths Tutor In Dubai",
                "item": "https://ignitetraininginstitute.com/maths-tutor-in-dubai/"
            }]
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What levels of Maths tutoring does Ignite offer?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ignite provides expert Maths tutoring for IB (AA & AI, SL/HL), IGCSE (Core & Extended), A-Levels (Pure, Mechanics, Stats), and AP Calculus AB/BC and Statistics."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do tutors focus on concept clarity or exam techniques?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Both. Sessions are designed to build strong foundational understanding while also teaching students how to approach past paper questions, apply formulas, and manage time effectively."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can Ignite help if I’m struggling with specific Maths topics?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolutely. Tutors offer targeted support on challenging areas such as calculus, algebra, vectors, or probability through customized lessons and one-on-one doubt solving."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are mock tests & exam-focused practice part of the tutoring?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, students regularly attempt past papers, timed mock exams, and receive feedback on their problem-solving accuracy, speed, and presentation."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is there a way to try a class before committing?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Ignite offers a free demo class so students can experience the tutor’s approach and ensure it aligns with their academic goals before enrolling."
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
                title="Maths Tutors In Dubai - IB, IGCSE, A-Levels, & AP Support"
                description="Excel in Mathematics with expert Maths tutors in Dubai, specializing in IB, IGCSE, A-Levels & AP. Build strong concepts & achieve top exam results" />
            {/* 2. RENDER THE SCHEMA COMPONENT, passing the combined array */}
            <JsonLd schema={mathsTutorsSchema} />

            <div
                ref={scrollRef}
                data-scroll-container
                style={{ paddingTop: `${headerHeight}px` }}
                className=" innerpage"
            >
                <section data-scroll-section>
                    <MathsTutorsInfoCard />
                </section>

                {/* <section data-scroll-section>
                    <MathsTutorsStudentAchievements />
                </section> */}

                <section data-scroll-section>
                    <MarqueeBanner />
                </section>

                <section data-scroll-section>
                    <MathsTutorsChooseApp />
                </section>

                <section data-scroll-section>
                    <MathsTutorsACT />
                </section>

                <section data-scroll-section>
                    <ReviewsSection />
                </section>

                <section data-scroll-section>
                    <Trainers />
                </section>

                <section data-scroll-section>
                    <MathsTutorsIgniteAchievements />
                </section>

                <section data-scroll-section>
                    <MathsTutorsUsps />
                </section>

                {/* <section data-scroll-section>
                    <MathsTutorsLifeAtIgniteCarousel />
                </section> */}

                <section data-scroll-section>
                    <MathsTutorsFAQSection />
                </section>

                <section data-scroll-section>
                    <Accordion />
                </section>
            </div>
        </>
    );
};

export default MathsTutorsInDubai;