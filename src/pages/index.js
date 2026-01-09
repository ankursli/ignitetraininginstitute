import React from "react";
import dynamic from "next/dynamic";
import SEO from "@/components/SEO";
import SEOHead from "@/components/SEOHead";
import Hero from "@/components/homeCopy/Hero";
import styles from "../styles/Hero.module.css"; // We will use this for the padding

// Dynamic imports - Kept as they help with TBT
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
    // REMOVED: isMobile state. Use CSS Media Queries instead for 0ms delay.

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
            
            {/* CRITICAL FIX: We move the dynamic padding to a CSS variable 
               or a standard class to avoid JS execution delays.
            */}
            <div 
                className="homeCopy"
                style={{ "--header-height": `${headerHeight}px` }}
            >
                {/* Wrap Hero in a standard div. 
                   Use CSS (shown below) to handle mobile vs desktop styles.
                */}
                <div className="hero-container">
                    <Hero />
                </div>

                <Course />
                <section data-scroll-section>
                    <MarqueeBanner />
                </section>
                <About />
                <Test />
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
