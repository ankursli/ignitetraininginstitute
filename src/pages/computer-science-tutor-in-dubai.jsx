import React, { useEffect, useRef } from 'react';
// 1. Import the reusable schema component
import JsonLd from "@/components/JsonLd";
import SEO from "@/components/SEO";
// Assuming shared components are kept in their original path
import MarqueeBanner from '@/components/ibdp/MarqueeBanner';
import ReviewsSection from '@/components/english-tutoring/ReviewsSection';
// import Hero from '@/components/home/Hero';

// Updated imports to new duplicated components (assuming a new folder for components)
import Accordion from '@/components/computer-tutoring/accordian';
import ComputerTutorsInfoCard from '@/components/computer-tutoring/infoCard';
import ComputerTutorsChooseApp from '@/components/computer-tutoring/choose-app';
import ComputerTutorsACT from '@/components/computer-tutoring/ACT';
import ComputerTutorsUsps from "@/components/computer-tutoring/Usps";
import Trainers from "@/components/computer-tutoring/Trainers";
import ComputerTutorsIgniteAchievements from '@/components/computer-tutoring/IgniteAchievements';
import ComputerTutorsLifeAtIgniteCarousel from '@/components/computer-tutoring/LifeAtIgniteCarousel';
import ComputerTutorsFAQSection from '@/components/computer-tutoring/FaqSection';
import ComputerTutorsStudentAchievements from '@/components/computer-tutoring/StudentAchivement';

//comment
// Renamed main component: SubjectTutoring -> ComputerTutorsInDubai
const ComputerTutorsInDubai = ({ headerHeight }) => {

    // ----------------------------------------------------
    // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
    // ----------------------------------------------------
    const computerTutorsSchema = [
        {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Ignite Training Institute - Computer Science Tutors In Dubai",
            "url": "https://ignitetraininginstitute.com/computer-science-tutor-in-dubai/",
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
                "name": "Computer Science Tutors In Dubai",
                "item": "https://ignitetraininginstitute.com/computer-science-tutor-in-dubai/"
            }]
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What curricula does Ignite support for Computer Science tutoring?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ignite offers Computer Science tutoring for IB, IGCSE, A-Levels, and AP, covering both theoretical concepts and practical applications."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which topics are covered in Computer Science tutoring?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Tutoring covers programming, algorithms, data structures, databases, system architecture, and curriculum-specific theory."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you offer support for internal assessments and coding projects?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, students receive guidance for IB IAs, coursework, and hands-on coding assignments in Python, Java, or other required languages."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are tutoring sessions available both online and in person?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, Ignite offers flexible learning formats with both online and in-person sessions available across Dubai and the UAE."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I try a class before enrolling in the full program?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolutely. Ignite offers a free demo class to help students and parents evaluate the tutor fit and teaching approach."
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
                title="Computer Science Tutors In Dubai - IB, IGCSE, A-Level, & AP"
                description="Upgrade your grades with the best Computer Science tutors in Dubai. We specialize in IB, IGCSE, A-Levels, & AP, offering thorough preparation"
            />
            {/* 2. RENDER THE SCHEMA COMPONENT, passing the combined array */}
            <JsonLd schema={computerTutorsSchema} />

            <div
                ref={scrollRef}
                data-scroll-container
                style={{ paddingTop: `${headerHeight}px` }}
                className=" innerpage"
            >
                <section data-scroll-section>
                    <ComputerTutorsInfoCard />
                </section>

                {/* <section data-scroll-section>
                    <ComputerTutorsStudentAchievements />
                </section> */}

                <section data-scroll-section>
                    <MarqueeBanner />
                </section>

                <section data-scroll-section>
                    <ComputerTutorsChooseApp />
                </section>

                <section data-scroll-section>
                    <ComputerTutorsACT />
                </section>

                <section data-scroll-section>
                    <ReviewsSection />
                </section>

                <section data-scroll-section>
                    <Trainers />
                </section>

                <section data-scroll-section>
                    <ComputerTutorsIgniteAchievements />
                </section>

                <section data-scroll-section>
                    <ComputerTutorsUsps />
                </section>

                {/* <section data-scroll-section>
                    <ComputerTutorsLifeAtIgniteCarousel />
                </section> */}

                <section data-scroll-section>
                    <ComputerTutorsFAQSection />
                </section>

                <section data-scroll-section>
                    <Accordion />
                </section>
            </div>
        </>
    );
};

export default ComputerTutorsInDubai;