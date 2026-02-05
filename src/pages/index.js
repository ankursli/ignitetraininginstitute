import React, { useState, useEffect } from "react";

import SEO from "@/components/SEO";
import SEOHead from "@/components/SEOHead";
import Hero from "@/components/homeCopy/Hero";


// Dynamic imports
// Dynamic imports switched to static for SSR (kept static for LCP/ATF components)
import Course from "@/components/homeCopy/Course";
// Dynamic imports moved below

// Dynamic imports for below-the-fold components
import dynamic from "next/dynamic";
const MarqueeBanner = dynamic(() => import("@/components/homeCopy/MarqueeBanner"));
const About = dynamic(() => import("@/components/homeCopy/About"));
const Test = dynamic(() => import("@/components/homeCopy/Test"));
const Subjects = dynamic(() => import("@/components/homeCopy/Subjects"));
const Usps = dynamic(() => import("@/components/homeCopy/Usps"));
const Trainers = dynamic(() => import("@/components/homeCopy/Trainers"));
const Testimonial = dynamic(() => import("@/components/homeCopy/Testimonial"));
const Blog = dynamic(() => import("@/components/homeCopy/Blog"));

const HomeCopy = ({ headerHeight }) => {
    const [active, setActive] = useState(1);

    return (
        <>
            <SEO
                title="Ignite Training Institute - Tutors In UAE For Exam Success"
                description="As Dubai's leading coaching institute, we empower students to embark on their academic journey by offering expert tutoring for IB, IGCSE, A Levels & AP"
                preloadImages={[
                    {
                        src: "/images/banner-bg-mobile.webp",
                        type: "image/webp",
                        media: "(max-width: 767px)"
                    },
                    {
                        src: "/images/banner-bg.webp",
                        type: "image/webp",
                        media: "(min-width: 768px)"
                    }
                ]}
            />
            <div className="homeCopy" style={{ paddingTop: `${headerHeight}px` }}>
                <Hero />

                <Course />
                <section data-scroll-section>
                    <MarqueeBanner />
                </section>
                <About />
                <Test
                    setActive={setActive}
                    active={active}
                />
                <Subjects />
                <section data-scroll-section>
                    <Usps />
                </section>
                <section data-scroll-section>
                    <Trainers />
                </section>
                <Testimonial />
                <Blog />
            </div>
        </>
    );
};

export default HomeCopy;