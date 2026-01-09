import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import SEO from "@/components/SEO";
import SEOHead from "@/components/SEOHead";
import Hero from "@/components/homeCopy/Hero";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/scrollbar";

// Dynamic imports
const Course = dynamic(() => import("@/components/homeCopy/Course"), { loading: () => null });
const MarqueeBanner = dynamic(() => import("@/components/homeCopy/MarqueeBanner"), { loading: () => null });
const About = dynamic(() => import("@/components/homeCopy/About"), { loading: () => null });
const Test = dynamic(() => import("@/components/homeCopy/Test"), { loading: () => null });
const Subjects = dynamic(() => import("@/components/homeCopy/Subjects"), { loading: () => null });
const Usps = dynamic(() => import("@/components/homeCopy/Usps"), { loading: () => null });
const Trainers = dynamic(() => import("@/components/homeCopy/Trainers"), { loading: () => null });
const Testimonial = dynamic(() => import("@/components/homeCopy/Testimonial"), { loading: () => null });
const Blog = dynamic(() => import("@/components/homeCopy/Blog"), { loading: () => null });

const HomeCopy = ({ headerHeight }) => {
    const [active, setActive] = useState(1);
    const [isMobile, setIsMobile] = useState(false);
    const [isMobileSwiper, setIsMobileSwiper] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 991;
            setIsMobile(mobile);
            setIsMobileSwiper(mobile);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <SEOHead
                title="Ignite Training Institute - Tutors In UAE For Exam Success"
                description="As Dubai's leading coaching institute, we empower students to embark on their academic journey by offering expert tutoring for IB, IGCSE, A Levels & AP"
            /* CRITICAL CHANGE: preloadImages prop REMOVED. 
               We now rely on Hero.js <Head> for responsive preloading. 
            */
            />
            <SEO
                title="Ignite Training Institute - Tutors In UAE For Exam Success"
                description="As Dubai's leading coaching institute, we empower students to embark on their academic journey by offering expert tutoring for IB, IGCSE, A Levels & AP"
            />
            <div className="homeCopy" style={{ paddingTop: `${headerHeight}px` }}>
                <div className={isMobile ? "hero-section-mobile" : "hero-section-desktop"}>
                    <Hero />
                </div>

                <Course />
                <section data-scroll-section>
                    <MarqueeBanner />
                </section>
                <About />
                <Test
                    setActive={setActive}
                    isMobileSwiper={isMobileSwiper}
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