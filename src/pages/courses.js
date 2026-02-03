import AboutBanner from "@/components/aboutus/Banner";
import IgniteAboutCard from "@/components/aboutus/IgniteAboutCard";
import WhyChooseUs from "@/components/aboutus/WhyChooseUs";
import Timeline from "@/components/aboutus/Timeline";
import MeetOurFounders from "@/components/aboutus/MeetOurFounders";
import { useEffect, useRef, useState } from "react";
import TutoringHeroSection from "@/components/aboutus/BottomSub";
import MarqueeBanner from "@/components/act/MarqueeBanner";
import TutoringCourses from "@/components/maincourse/Banner";
// import Test from "@/components/maincourse/StandardsedTest";
import Test from "@/components/maincourse/Test";
import CallToAction from "@/components/maincourse/CallToAction";
import TrainersMessage from "@/components/maincourse/videoTrainer";
import Testimonial from "@/components/ibdp/ReviewsSection";
import Learning from "@/components/maincourse/Learning";
import MainBanner from "@/components/maincourse/MainBanner";
import LifeAtIgniteCarousel from "@/components/maincourse/LifeAtIgniteCarousel";
import SEO from "@/components/SEO";

// 1. ACCEPT the headerHeight prop
const About = ({ headerHeight }) => {
    const scrollRef = useRef(null);
    const scrollInstanceRef = useRef(null);
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
                title="Top Courses In UAE For IB, IGCSE, A Levels, & AP Tutoring"
                description="Learn with certified tutors for IB, IGCSE, A-Levels, AP, ACT & UCAT. Get expert coaching with personalized support & proven strategies. Enroll today"
            />
            <div
                ref={scrollRef}
                className=" innerpage"
                data-scroll-container
                style={{ paddingTop: `${headerHeight}px` }} // <--- THE STICKY HEADER FIX
            >
                <section data-scroll-section>
                    <MainBanner />
                </section>
                <section data-scroll-section>
                    <TutoringCourses />
                </section>
                <section data-scroll-section className="padding-0">
                    <Test
                        setActive={setActive}
                        isMobileSwiper={isMobileSwiper}
                        active={active}
                    />


                </section>
                <section data-scroll-section>
                    <Learning />
                </section>
                {/* <section data-scroll-section>
                <MarqueeBanner />
            </section> */}
                {/* <section data-scroll-section>
                <TrainersMessage />
            </section> */}

                <section data-scroll-section>
                    <Testimonial />
                </section>
                {/* <section data-scroll-section>
                <LifeAtIgniteCarousel />
            </section> */}
                <section data-scroll-section>
                    <CallToAction />
                </section>
            </div>
        </>
    );
};

export default About;