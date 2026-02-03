// components/home/Hero.js

import React, { useRef, useEffect } from "react";
import Image from "next/image";



const Hero = () => {
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
        <div ref={scrollRef} data-scroll-container>
            <section className="hero revealClipRightToLeft" data-scroll-section>
                <div className="container">
                    <div data-scroll data-scroll-class="is-inview" data-scroll-repeat="true" className="fade-in-section">
                        <div className="row heroMain">
                            <div className="col-12 col-lg-6 col-xl-7 pe-lg-5 heroLeft">
                                <div
                                    data-scroll
                                    data-scroll-class="is-inview"
                                    data-scroll-repeat="true"
                                    className="fade-in-section heroMainHeading"
                                    style={{ animationDelay: "0.4s" }}
                                >
                                    <h3 className="SubHeading">Welcome to Ignite</h3>
                                </div>
                                <div
                                    data-scroll
                                    data-scroll-class="is-inview"
                                    data-scroll-repeat="true"
                                    className="fade-in-section"
                                    style={{ animationDelay: "0.6s" }}
                                >
                                    <h1 className="heroTitle">
                                        Lorem ipsum dolor sit amet, <span className="highlight">consectetur</span> adipiscing
                                    </h1>
                                </div>
                                <div
                                    data-scroll
                                    data-scroll-class="is-inview"
                                    data-scroll-repeat="true"
                                    className="fade-in-section"
                                    style={{ animationDelay: "0.8s" }}
                                >
                                    <p className="heroParagraph">
                                        <span>Lorem ipsum dolor sit amet</span>
                                        <b>
                                            Achieve academic excellence in IBDP, MYP, I/GCSE, A-Levels & AP
                                            with Ignite's expert tutors in Dubai. Our curriculum-focused
                                            programs are designed to boost your grades and confidence!
                                        </b>
                                        <strong>
                                            Achieve academic excellence in IBDP, MYP, I/GCSE, A-Levels & AP
                                            with Ignite's expert tutors in Dubai.
                                        </strong>
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-5 heroRight">
                                <div className="videoContainer">
                                    <video
                                        className="heroVideo"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        poster="/images/banner-image-right.webp"
                                    >
                                        <source src="/videos/hero-banner-video.mp4" type="video/mp4" />
                                        {/* Fallback image if video doesn't load */}
                                        <Image
                                            src="/images/banner-image-right.webp"
                                            alt="Education Platform"
                                            className="heroImage"
                                            width={500}
                                            height={500}
                                            quality={100}
                                        />
                                    </video>
                                </div>
                                <div className="buttonGroup">
                                    <button type="button" className="buttonBlue">
                                        Get A Free Demo{" "}
                                        <Image
                                            src="/images/right-arrow-skyblue.webp"
                                            width={40}
                                            height={40}
                                            quality={100}
                                        />
                                    </button>
                                    <button type="button" className="buttonSkyBlue">
                                        Explore Classes{" "}
                                        <Image
                                            src="/images/right-arrow-blue.webp"
                                            width={40}
                                            height={40}
                                            quality={100}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Hero;
