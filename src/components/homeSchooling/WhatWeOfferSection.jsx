import React from 'react';
import styles from "@/styles/freedemo/freedemo.module.css";

const WhatWeOfferSection = () => {
    return (
        <>
            <section className={styles['freedemo-curriculm-section']} data-scroll-section>
                <div className={styles.container}>
                    <div className="text-center mb-md-5 mb-4 fade-in-section"
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat
                        style={{ animationDelay: "0.2s" }}>
                        <div className="testHeadings">
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.1s" }}
                            >
                                <h2 className="SubHeading testSubheading">WHAT MORE DO WE OFFER?</h2>
                            </div>
                            <h3
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section testTitle"
                                style={{ animationDelay: "0.2s", fontSize: "2rem" }}
                            >
                                Comprehensive Guidance For Every Academic <span className="highlight">Milestone</span>
                            </h3>
                        </div>
                    </div>
                </div>

                <div className={`${styles.container} ${styles['what-we-offer']}`}>
                    {/* Step 01 */}
                    <div className={`${styles.step} fade-in-section`}
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat="true"
                        style={{ animationDelay: "0.1s" }}
                    >
                        <div className={styles['icon-wrap']} data-step="01">
                            <img src="/images/idealcur.webp" alt="Ideal Curriculum" width={134} height={134} />
                        </div>
                        <h3 className={`${styles['step-title']} mb-0`}>IDEAL CURRICULUM</h3>
                        <div className={styles['step-desc']}>Choose IGCSE, A-Levels, or AP to match your academic pathway.</div>
                    </div>

                    {/* Step 02 */}
                    <div className={`${styles.step} fade-in-section`}
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat="true"
                        style={{ animationDelay: "0.2s" }}
                    >
                        <div className={styles['icon-wrap']} data-step="02">
                            <img src="/images/subject.webp" alt="Subject Choices" width={134} height={134} />
                        </div>
                        <h3 className={`${styles['step-title']} mb-0`}>SUBJECT CHOICES</h3>
                        <div className={styles['step-desc']}>Select subjects that fit your aspirations & university goals.</div>
                    </div>

                    {/* Step 03 */}
                    <div className={`${styles.step} fade-in-section`}
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat="true"
                        style={{ animationDelay: "0.3s" }}
                    >
                        <div className={styles['icon-wrap']} data-step="03">
                            <img src="/images/school.webp" alt="Registration Support" width={134} height={134} />
                        </div>
                        <h3 className={`${styles['step-title']} mb-0`}>REGISTRATION SUPPORT</h3>
                        <div className={styles['step-desc']}>Get complete registration guidance for IGCSE, A-Levels, & AP exams.</div>
                    </div>

                    {/* Step 04 */}
                    <div className={`${styles.step} fade-in-section`}
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat="true"
                        style={{ animationDelay: "0.4s" }}
                    >
                        <div className={styles['icon-wrap']} data-step="04">
                            <img src="/images/universitypath.webp" alt="University Pathways" width={134} height={134} />
                        </div>
                        <h3 className={`${styles['step-title']} mb-0`}>UNIVERSITY PATHWAYS</h3>
                        <div className={styles['step-desc']}>Plan a clear route from homeschooling to top global schools.</div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                @media (max-width: 575px) {
                    :global(.SubHeading) { 
                        margin: 0 !important;
                    }
                }
            `}</style>
        </>
    );
};

export default WhatWeOfferSection;