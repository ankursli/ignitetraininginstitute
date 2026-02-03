import React, { useEffect, useRef } from "react";
// 1. Import the reusable JsonLd component
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
import AboutBanner from "@/components/aboutus/Banner";
import IgniteAboutCard from "@/components/aboutus/IgniteAboutCard";
import WhyChooseUs from "@/components/aboutus/WhyChooseUs";
import Timeline from "@/components/aboutus/Timeline";
import MeetOurFounders from "@/components/aboutus/MeetOurFounders";
import TutoringHeroSection from "@/components/aboutus/BottomSub";
import MarqueeBanner from "@/components/aboutus/MarqueeBanner";
import LifeAtIgniteCarousel from "@/components/aboutus/LifeAtIgniteCarousel";

// 1. ACCEPT the headerHeight prop
const About = ({ headerHeight }) => {

  // ----------------------------------------------------
  // 👇 JSON-LD SCHEMA DEFINITION FOR THIS PAGE
  // ----------------------------------------------------
  const educationalOrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Ignite Training Institute",
    "url": "https://ignitetraininginstitute.com/",
    "logo": "https://ignitetraininginstitute.com/wp-content/uploads/2023/02/ignitefinallogos_1.svg",
    "description": "Ignite Training Institute offers expert tutoring in Dubai for IB, IGCSE, A-Levels, AP, SAT, ACT, MYP, and homeschooling programs. With qualified tutors and personalized learning, Ignite supports students in achieving academic success.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Al Moosa Tower 1 - 1503 - Sheikh Zayed Rd - near Emirates Towers Metro (Sea Side - Trade Centre - Trade Centre 1",
      "addressLocality": "Dubai",
      "addressCountry": "United Arab Emirates"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971588589958",
      "contactType": "customer service",
      "areaServed": "AE",
      "availableLanguage": ["English", "Arabic"]
    },
    "sameAs": [
      "https://www.instagram.com/ignitetraininginstitute/",
      "https://ae.linkedin.com/company/ignite-training-institute",
      "https://www.facebook.com/ignitetraininginstitute"
    ]
  };

  // ----------------------------------------------------
  // 👇 EXISTING COMPONENT LOGIC (Locomotive Scroll)
  // ----------------------------------------------------
  const scrollRef = useRef(null);
  const scrollInstanceRef = useRef(null);

  useEffect(() => {
    let scroll;

    const initScroll = async () => {
      // Dynamically import Locomotive Scroll
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      if (!scrollRef.current) return;

      scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.1,
        getDirection: true,
        getSpeed: true,
        multiplier: 1,
      });

      scrollInstanceRef.current = scroll;
    };

    if (typeof window !== "undefined") {
      initScroll();
    }

    // Cleanup function
    return () => {
      scrollInstanceRef.current?.destroy();
      scrollInstanceRef.current = null;
    };
  }, []);

  return (
    <>
      <SEO title="About Us - Best Training Institute In The UAE"
        description="Ignite Training Institute is the leading training center in the UAE, providing guidance in IB, IGCSE, A-Level, & AP to help students excel academically" />
      {/* 2. RENDER the JsonLd component and pass the schema data */}
      <JsonLd schema={educationalOrganizationSchema} />

      {/* 3. APPLY the style for paddingTop to the scroll container */}
      <div
        ref={scrollRef}
        className=" innerpage"
        data-scroll-container
        style={{ paddingTop: `${headerHeight}px` }} // <--- THE STICKY HEADER FIX
      >
        <section data-scroll-section>
          <AboutBanner />
        </section>
        <section data-scroll-section>
          <IgniteAboutCard />
        </section>
        <section data-scroll-section>
          <WhyChooseUs />
        </section>
        <section data-scroll-section>
          <Timeline />
        </section>
        <section data-scroll-section>
          <MeetOurFounders />
        </section>
        <section data-scroll-section>
          <MarqueeBanner />
        </section>
        {/* <section data-scroll-section>
          <LifeAtIgniteCarousel />
        </section> */}
        <section data-scroll-section>
          <TutoringHeroSection />
        </section>
      </div>
    </>
  );
};

export default About;