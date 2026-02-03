import React, { useEffect, useRef } from 'react';
// 1. Import the reusable schema component
import JsonLd from "@/components/JsonLd";
import SEO from "@/components/SEO";
// Assuming shared components are kept in their original path
import MarqueeBanner from '@/components/ibdp/MarqueeBanner';
import ReviewsSection from '@/components/english-tutoring/ReviewsSection';
// import Hero from '@/components/home/Hero';

// Updated imports to new duplicated components (assuming a new folder for components)
import Accordion from '@/components/psychology-tutoring/accordian';
import PsychologyTutorsInfoCard from '@/components/psychology-tutoring/infoCard';
import PsychologyTutorsChooseApp from '@/components/psychology-tutoring/choose-app';
import PsychologyTutorsACT from '@/components/psychology-tutoring/ACT';
import PsychologyTutorsUsps from "@/components/psychology-tutoring/Usps";
import PsychologyTutorsIgniteAchievements from '@/components/psychology-tutoring/IgniteAchievements';
import PsychologyTutorsLifeAtIgniteCarousel from '@/components/psychology-tutoring/LifeAtIgniteCarousel';
import PsychologyTutorsFAQSection from '@/components/psychology-tutoring/FaqSection';
import PsychologyTutorsStudentAchievements from '@/components/psychology-tutoring/StudentAchivement';

//comment
// Renamed main component: SubjectTutoring -> PsychologyTutorsInDubai
const PsychologyTutorsInDubai = ({ headerHeight }) => {

    // ----------------------------------------------------
    // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
    // ----------------------------------------------------
    const psychologyTutorsSchema = [
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
                "name": "Psychology Tutors In Dubai",
                "item": "https://ignitetraininginstitute.com/psychology-tutor-in-dubai/"
            }]
        },
        {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Ignite Training Institute - Psychology Tutors In Dubai",
            "url": "https://ignitetraininginstitute.com/psychology-tutor-in-dubai/",
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
                    "name": "Which curricula does Ignite support for Psychology tutoring?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ignite provides Psychology tutoring for IGCSE, A-Levels, & AP Psychology, with lessons customized to fit each curriculum’s syllabus and exam requirements."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What key topics are covered in Psychology sessions?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Tutoring includes cognitive, biological, & sociocultural approaches to psychology, research methods, abnormal psychology, developmental psychology, & exam-specific application of theories & studies."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do tutors help with essay writing & structured answers?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, students receive guidance on planning & writing essays, applying psychological theories and studies effectively, and developing well-structured analytical responses for exams such as IB Paper 1/2 & A-Level essays."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is exam preparation part of the tutoring program?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolutely. Students practice with past papers, timed writing, & strategy sessions focused on clarity, evaluation, & critical analysis to strengthen exam performance."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I attend a demo session before enrolling?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, Ignite offers a free demo class where students can experience our teaching approach and connect with a tutor who best matches their academic needs."
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
                title="Psychology Tutors In Dubai - IGCSE, A-Level, & AP Support"
                description="Find expert Psychology tutors in Dubai for IGCSE, A-Level, & AP. We offer personalized tutoring, exam preparation support to help students excel"
            />
            {/* 2. RENDER THE SCHEMA COMPONENT, passing the combined array */}
            <JsonLd schema={psychologyTutorsSchema} />

            <div
                ref={scrollRef}
                data-scroll-container
                style={{ paddingTop: `${headerHeight}px` }}
                className=" innerpage"
            >
                <section data-scroll-section>
                    <PsychologyTutorsInfoCard />
                </section>

                {/* <section data-scroll-section>
                    <PsychologyTutorsStudentAchievements />
                </section> */}

                <section data-scroll-section>
                    <MarqueeBanner />
                </section>

                <section data-scroll-section>
                    <PsychologyTutorsChooseApp />
                </section>

                <section data-scroll-section>
                    <PsychologyTutorsACT />
                </section>

                <section data-scroll-section>
                    <ReviewsSection />
                </section>

                <section data-scroll-section>
                    <PsychologyTutorsIgniteAchievements />
                </section>

                <section data-scroll-section>
                    <PsychologyTutorsUsps />
                </section>

                {/* <section data-scroll-section>
                    <PsychologyTutorsLifeAtIgniteCarousel />
                </section> */}

                <section data-scroll-section>
                    <PsychologyTutorsFAQSection />
                </section>

                <section data-scroll-section>
                    <Accordion />
                </section>
            </div>
        </>
    );
};

export default PsychologyTutorsInDubai;