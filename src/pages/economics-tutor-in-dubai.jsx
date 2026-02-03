import React, { useEffect, useRef } from 'react';
// 1. Import the reusable schema component
import JsonLd from "@/components/JsonLd";
import SEO from "@/components/SEO";
// Assuming shared components are kept in their original path
import MarqueeBanner from '@/components/ibdp/MarqueeBanner';
import ReviewsSection from '@/components/english-tutoring/ReviewsSection';
// import Hero from '@/components/home/Hero';

// Updated imports to new duplicated components (assuming a new folder for components)
import Accordion from '@/components/economics-tutoring/accordian';
import EconomicsTutorsInfoCard from '@/components/economics-tutoring/infoCard';
import EconomicsTutorsChooseApp from '@/components/economics-tutoring/choose-app';
import EconomicsTutorsACT from '@/components/economics-tutoring/ACT';
import EconomicsTutorsUsps from "@/components/economics-tutoring/Usps";
import Trainers from "@/components/economics-tutoring/Trainers";
import EconomicsTutorsIgniteAchievements from '@/components/economics-tutoring/IgniteAchievements';
import EconomicsTutorsLifeAtIgniteCarousel from '@/components/economics-tutoring/LifeAtIgniteCarousel';
import EconomicsTutorsFAQSection from '@/components/economics-tutoring/FaqSection';
import EconomicsTutorsStudentAchievements from '@/components/economics-tutoring/StudentAchivement';

//comment
// Renamed main component: SubjectTutoring -> EconomicsTutorsInDubai
const EconomicsTutorsInDubai = ({ headerHeight }) => {

    // ----------------------------------------------------
    // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
    // ----------------------------------------------------
    const economicsTutorsSchema = [
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
                "name": "Economics Tutors In Dubai",
                "item": "https://ignitetraininginstitute.com/economics-tutor-in-dubai/"
            }]
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What curricula does Ignite offer Economics tutoring for?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ignite provides Economics tutoring for IB (SL/HL), IGCSE, A-Levels, and AP, aligned with the requirements of each exam board."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What topics are covered in Economics tutoring sessions?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Tutoring covers microeconomics, macroeconomics, international trade, market structures, and development economics as per the student’s curriculum."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do tutors help with essays and data response questions?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, students get structured support in essay writing, case studies, and data response techniques tailored to their exam format."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are past papers and exam strategies part of the tutoring?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolutely. Tutors use past papers, timed practice, and examiner-style feedback to prepare students for real exam conditions."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I attend a trial class before starting?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, Ignite offers a free demo session so students can experience the teaching approach before enrolling."
                    }
                }
            ]
        },
        {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Ignite Training Institute - Economics Tutors In Dubai",
            "url": "https://ignitetraininginstitute.com/economics-tutor-in-dubai/",
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
                title="Economics Tutors In Dubai For IB, IGCSE, A-Level, & AP"
                description="Boost your exam grades with the best Economics tutors in Dubai, specializing in IB, IGCSE, A-Levels, & AP. Get expert guidance now"
            />
            {/* 2. RENDER THE SCHEMA COMPONENT, passing the combined array */}
            <JsonLd schema={economicsTutorsSchema} />

            <div
                ref={scrollRef}
                data-scroll-container
                style={{ paddingTop: `${headerHeight}px` }}
                className=" innerpage"
            >
                <section data-scroll-section>
                    <EconomicsTutorsInfoCard />
                </section>

                {/* <section data-scroll-section>
                    <EconomicsTutorsStudentAchievements />
                </section> */}

                <section data-scroll-section>
                    <MarqueeBanner />
                </section>

                <section data-scroll-section>
                    <EconomicsTutorsChooseApp />
                </section>

                <section data-scroll-section>
                    <EconomicsTutorsACT />
                </section>

                <section data-scroll-section>
                    <ReviewsSection />
                </section>

                <section data-scroll-section>
                    <Trainers />
                </section>

                <section data-scroll-section>
                    <EconomicsTutorsIgniteAchievements />
                </section>

                <section data-scroll-section>
                    <EconomicsTutorsUsps />
                </section>

                {/* <section data-scroll-section>
                    <EconomicsTutorsLifeAtIgniteCarousel />
                </section> */}

                <section data-scroll-section>
                    <EconomicsTutorsFAQSection />
                </section>

                <section data-scroll-section>
                    <Accordion />
                </section>
            </div>
        </>
    );
};

export default EconomicsTutorsInDubai;