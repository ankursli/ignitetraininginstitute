import React, { useState, useEffect } from "react";

// import SEO from "@/components/SEO";
// import SEOHead from "@/components/SEOHead";
// import Hero from "@/components/homeCopy/Hero";
// import Course from "@/components/homeCopy/Course";
// import dynamic from "next/dynamic";

// const MarqueeBanner = dynamic(() => import("@/components/homeCopy/MarqueeBanner"));
// const About = dynamic(() => import("@/components/homeCopy/About"));
// const Test = dynamic(() => import("@/components/homeCopy/Test"));
// const Subjects = dynamic(() => import("@/components/homeCopy/Subjects"));
// const Usps = dynamic(() => import("@/components/homeCopy/Usps"));
// const Trainers = dynamic(() => import("@/components/homeCopy/Trainers"));
// const Testimonial = dynamic(() => import("@/components/homeCopy/Testimonial"));
// const Blog = dynamic(() => import("@/components/homeCopy/Blog"));

const HomeCopy = ({ headerHeight }) => {
    // const [active, setActive] = useState(1);

    return (
        <div style={{ paddingTop: `${headerHeight}px`, minHeight: '100vh', padding: '20px' }}>
            <h1>Baseline LCP Test</h1>
            <p>This is a minimal page to test global bottleneck.</p>
        </div>
    );
};

export default HomeCopy;