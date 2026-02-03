import React, { useEffect, useRef } from 'react';
// 1. Import the reusable schema component
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
// Assuming shared components are kept in their original path
import MarqueeBanner from '@/components/ibdp/MarqueeBanner';
import ReviewsSection from '@/components/english-tutoring/ReviewsSection';
// import Hero from '@/components/home/Hero';

// Updated imports to new duplicated components (assuming a new folder for components)
import Accordion from '@/components/chemistry-tutoring/accordian';
import ChemistryTutorsInfoCard from '@/components/chemistry-tutoring/infoCard';
import ChemistryTutorsChooseApp from '@/components/chemistry-tutoring/choose-app';
import ChemistryTutorsACT from '@/components/chemistry-tutoring/ACT';
import ChemistryTutorsUsps from "@/components/chemistry-tutoring/Usps";
import Trainers from "@/components/chemistry-tutoring/Trainers";
import ChemistryTutorsIgniteAchievements from '@/components/chemistry-tutoring/IgniteAchievements';
import ChemistryTutorsLifeAtIgniteCarousel from '@/components/chemistry-tutoring/LifeAtIgniteCarousel';
import ChemistryTutorsFAQSection from '@/components/chemistry-tutoring/FaqSection';
import ChemistryTutorsStudentAchievements from '@/components/chemistry-tutoring/StudentAchivement';

//comment
// Renamed main component: SubjectTutoring -> ChemistryTutorsInDubai
const ChemistryTutorsInDubai = ({ headerHeight }) => {

    // ----------------------------------------------------
    // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
    // ----------------------------------------------------
    const chemistryTutorsSchema = [
        {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Ignite Training Institute - Chemistry Tutors In Dubai",
            "url": "https://ignitetraininginstitute.com/chemistry-tutor-in-dubai/",
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
                "name": "Chemistry Tutor In Dubai",
                "item": "https://ignitetraininginstitute.com/chemistry-tutor-in-dubai/"
            }]
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What Chemistry curricula does Ignite support?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ignite offers Chemistry tutoring for IB (SL/HL), IGCSE, A-Levels, and AP Chemistry, following the exact requirements of each syllabus."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do tutors cover both theory and numerical problem-solving?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, tutoring sessions include detailed explanation of theory concepts along with structured practice in calculations, equations, and problem-solving."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I get help with lab work, IAs, or practicals?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolutely. Ignite provides support for IB internal assessments, lab report writing, and understanding experimental techniques based on curriculum expectations."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are exam techniques and past paper practice part of the program?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, students regularly solve past papers, timed mock questions, and receive guidance on command terms, structured responses, and marking criteria."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is a demo session available for Chemistry tutoring?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, students can book a free demo class to understand the teaching approach and get matched with the right Chemistry tutor."
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
                title="Chemistry Tutors In Dubai - IB, IGCSE, A-Level, & AP"
                description="Learn with Chemistry tutors in Dubai, offering expertise in IB, IGCSE, A-Level, & AP. Elevate your exam performance with 1K+ curated study resources" />
            {/* 2. RENDER THE SCHEMA COMPONENT, passing the combined array */}
            <JsonLd schema={chemistryTutorsSchema} />

            <div
                ref={scrollRef}
                data-scroll-container
                style={{ paddingTop: `${headerHeight}px` }}
                className=" innerpage"
            >
                <section data-scroll-section>
                    <ChemistryTutorsInfoCard />
                </section>

                {/* <section data-scroll-section>
                    <ChemistryTutorsStudentAchievements />
                </section> */}

                <section data-scroll-section>
                    <MarqueeBanner />
                </section>

                <section data-scroll-section>
                    <ChemistryTutorsChooseApp />
                </section>

                <section data-scroll-section>
                    <ChemistryTutorsACT />
                </section>

                <section data-scroll-section>
                    <ReviewsSection />
                </section>

                <section data-scroll-section>
                    <Trainers />
                </section>

                <section data-scroll-section>
                    <ChemistryTutorsIgniteAchievements />
                </section>

                <section data-scroll-section>
                    <ChemistryTutorsUsps />
                </section>

                {/* <section data-scroll-section>
                    <ChemistryTutorsLifeAtIgniteCarousel />
                </section> */}

                <section data-scroll-section>
                    <ChemistryTutorsFAQSection />
                </section>

                <section data-scroll-section>
                    <Accordion />
                </section>
            </div>
        </>
    );
};

export default ChemistryTutorsInDubai;