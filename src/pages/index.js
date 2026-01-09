import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import SEO from "@/components/SEO";
import SEOHead from "@/components/SEOHead";
import Hero from "@/components/homeCopy/Hero";

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
    const [isMobile, setIsMobile] = useState(false);
    const [active, setActive] = useState(1);

    useEffect(() => {
        // This only runs on the client after the first paint
        const checkMobile = () => setIsMobile(window.innerWidth <= 991);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <>
            <SEOHead
                title="Ignite Training Institute - Tutors In UAE For Exam Success"
                description="As Dubai's leading coaching institute, we empower students to embark on their academic journey by offering expert tutoring for IB, IGCSE, A Levels & AP"
            />
            <SEO
                title="Ignite Training Institute - Tutors In UAE For Exam Success"
                description="As Dubai's leading coaching institute, we empower students to embark on their academic journey by offering expert tutoring for IB, IGCSE, A Levels & AP"
            />
            
            <div 
                className="homeCopy"
                style={{ "--header-height": `${headerHeight}px` }}
            >
                {/* Hero is loaded immediately without waiting for isMobile state */}
                <div className="hero-container">
                    <Hero />
                </div>

                <Course />
                <section data-scroll-section>
                    <MarqueeBanner />
                </section>
                <About />
                
                {/* We pass isMobile here to trigger the Swiper version of the Test component */}
                <Test 
                    isMobileSwiper={isMobile} 
                    active={active} 
                    setActive={setActive} 
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
