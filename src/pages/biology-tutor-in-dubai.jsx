import React, { useEffect, useRef } from 'react';
// 1. Import the reusable schema component
import JsonLd from "@/components/JsonLd";
import SEO from "@/components/SEO";
// Assuming shared components are kept in their original path
import MarqueeBanner from '@/components/ibdp/MarqueeBanner';
import ReviewsSection from '@/components/english-tutoring/ReviewsSection';
// import Hero from '@/components/home/Hero';

// Updated imports to new duplicated components (assuming a new folder for components)
import Accordion from '@/components/biology-tutoring/accordian';
import BiologyTutorsInfoCard from '@/components/biology-tutoring/infoCard';
import BiologyTutorsChooseApp from '@/components/biology-tutoring/choose-app';
import BiologyTutorsACT from '@/components/biology-tutoring/ACT';
import BiologyTutorsUsps from "@/components/biology-tutoring/Usps";
import Trainers from "@/components/biology-tutoring/Trainers";
import BiologyTutorsIgniteAchievements from '@/components/biology-tutoring/IgniteAchievements';
import BiologyTutorsLifeAtIgniteCarousel from '@/components/biology-tutoring/LifeAtIgniteCarousel';
import BiologyTutorsFAQSection from '@/components/biology-tutoring/FaqSection';
import BiologyTutorsStudentAchievements from '@/components/biology-tutoring/StudentAchivement';

//comment
// Renamed main component: SubjectTutoring -> BiologyTutorsInDubai
const BiologyTutorsInDubai = ({ headerHeight }) => {

    // ----------------------------------------------------
    // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
    // ----------------------------------------------------
    const biologyTutorsSchema = [
        {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Ignite Training Institute - Biology Tutors In Dubai",
            "url": "https://ignitetraininginstitute.com/biology-tutor-in-dubai/",
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
                "name": "Biology",
                "item": "https://ignitetraininginstitute.com/biology-tutor-in-dubai/"
            }]
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Which curricula does Ignite support for Biology tutoring?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ignite offers Biology tutoring for IB (SL/HL), IGCSE, A-Levels, and AP, aligned with the requirements of major exam boards."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What topics are covered in Biology tutoring sessions?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Tutoring includes cell biology, genetics, ecology, human physiology, molecular biology, and other core and optional topics based on the syllabus."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do tutors help with lab work & internal assessments?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, Ignite supports students with IB IAs, lab report guidance, and scientific writing, helping them meet curriculum-specific criteria."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are past papers & exam techniques part of the program?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolutely. Sessions include past paper practice, command term training, and exam strategy development to improve accuracy and timing."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I attend a Biology demo class before enrolling?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, Ignite offers a free demo session so students can experience the teaching style and meet the tutor before committing."
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
                title="Biology Tutors In Dubai For IB, IGCSE, A-Level, & AP"
                description="Get expert Biology tutoring in Dubai from highly qualified tutors specializing in IB, IGCSE, A-Levels, & AP. Achieve confidence & academic excellence"
            />
            {/* 2. RENDER THE SCHEMA COMPONENT, passing the combined array */}
            <JsonLd schema={biologyTutorsSchema} />

            <div
                ref={scrollRef}
                data-scroll-container
                style={{ paddingTop: `${headerHeight}px` }}
                className=" innerpage"
            >
                <section data-scroll-section>
                    <BiologyTutorsInfoCard />
                </section>

                {/* <section data-scroll-section>
                    <BiologyTutorsStudentAchievements />
                </section> */}

                <section data-scroll-section>
                    <MarqueeBanner />
                </section>

                <section data-scroll-section>
                    <BiologyTutorsChooseApp />
                </section>

                <section data-scroll-section>
                    <BiologyTutorsACT />
                </section>

                <section data-scroll-section>
                    <ReviewsSection />
                </section>

                <section data-scroll-section>
                    <Trainers />
                </section>

                {/* <section data-scroll-section>
                    <BiologyTutorsIgniteAchievements />
                </section> */}

                <section data-scroll-section>
                    <BiologyTutorsUsps />
                </section>

                {/* <section data-scroll-section>
                    <BiologyTutorsLifeAtIgniteCarousel />
                </section> */}

                <section data-scroll-section>
                    <BiologyTutorsFAQSection />
                </section>

                <section data-scroll-section>
                    <Accordion />
                </section>
            </div>
        </>
    );
};

export default BiologyTutorsInDubai;