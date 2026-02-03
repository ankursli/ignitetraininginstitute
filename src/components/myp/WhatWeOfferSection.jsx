import React from 'react';

const WhatWeOfferSection = () => {
    return (
        <>
            <section className="what-we-offer-section" data-scroll-section>
                <div className="container">
                    <div className="achievementsHeadings">
                        <div
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-repeat="true"
                            className="fade-in-section"
                            style={{ animationDelay: "0.1s" }}
                        >
                            <h2 className="SubHeading">WHAT MORE DO WE OFFER?</h2>
                        </div>
                        <div
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-repeat="true"
                            className="fade-in-section"
                            style={{ animationDelay: "0.25s" }}
                        >
                            <h3 className="achievementsTitle">
                                Comprehensive Guidance For Every IB MYP <span className="highlight">Milestone</span>
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Container for the steps */}
                <div className="container what-we-offer">
                    <div className="step fade-in-section"
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat="true"
                        style={{ animationDelay: "0.1s" }}
                    >
                        <div className="icon-wrap" data-step="01">
                            <img src="/images/school.webp" alt="School Options" />
                        </div>
                        <h3 className="step-title mb-0">SCHOOL OPTIONS</h3>
                        <div className="step-desc">Identify schools that align with your learning style & goals.</div>
                    </div>

                    <div className="step fade-in-section"
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat="true"
                        style={{ animationDelay: "0.1s" }}
                    >
                        <div className="icon-wrap" data-step="02">
                            <img src="/images/idealcur.webp" alt="Ideal Curriculum" />
                        </div>
                        <h3 className="step-title mb-0">IDEAL CURRICULUM</h3>
                        <div className="step-desc">Choose a pathway that supports your long-lasting success.</div>
                    </div>

                    <div className="step fade-in-section"
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat="true"
                        style={{ animationDelay: "0.1s" }}
                    >
                        <div className="icon-wrap" data-step="03">
                            <img src="/images/subject.webp" alt="Subject Choices" />
                        </div>
                        <h3 className="step-title mb-0">SUBJECT CHOICES</h3>
                        <div className="step-desc">Make subject choices with us that shape your future direction.</div>
                    </div>

                    <div className="step fade-in-section"
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat="true"
                        style={{ animationDelay: "0.1s" }}
                    >
                        <div className="icon-wrap" data-step="04">
                            <img src="/images/universitypath.webp" alt="University Pathways" />
                        </div>
                        <h3 className="step-title mb-0">UNIVERSITY PATHWAYS</h3>
                        <div className="step-desc">Map your academic journey to your dream global institution.</div>
                    </div>
                </div>
            </section>
            <style jsx>{`
            @media (max-width: 575px) {
                .what-we-offer-section .SubHeading { 
                    margin: 0;
                }
            }
                                .what-we-offer {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 30px;
                max-width: 1500px;
                margin: auto;
                text-align: center;
                }

                .what-we-offer .step {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 20px;
                }

                .what-we-offer .icon-wrap {
                position: relative;
                display: inline-block;
                }

                .what-we-offer .icon-wrap img {
                max-width: 100px;
                }

                /* Number comes from data-step */
                .what-we-offer .icon-wrap::after {
                content: attr(data-step);
                position: absolute;
                font-size: 70px;
                font-weight: bold;
                color: rgba(0, 163, 144, 0.15);
                bottom: 20px;
                right: -20px;
                transform: translate(50%, 50%);
                z-index: -1;
                /* keeps it behind the icon */
                }

                .what-we-offer .step-title {
                font-weight: bold;
                font-size: 18px;
                margin-top: 20px;
                color: #152f63;
                }

                .what-we-offer .step-desc {
                margin-top: 10px;
                font-size: 15px;
                color: #808c9c;
                }

                /* Responsive */
                @media (max-width: 900px) {
                .what-we-offer {
                    grid-template-columns: 1fr 1fr;
                }
                }

                @media (max-width: 600px) {
                .what-we-offer {
                    grid-template-columns: 1fr;
                }

                .what-we-offer .icon-wrap img {
                    max-width: 60px;
                }

                .what-we-offer .step {
                    padding: 0;
                }

                .what-we-offer .icon-wrap::after {
                    bottom: 10px;
                    right: -10px;
                    font-size: 40px;
                }

                .what-we-offer .step-desc {
                    margin-top: 0;
                    font-size: 15px;

                    line-height: 1.2;
                }
                }
        `}</style>
        </>
    );
};

export default WhatWeOfferSection;