import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
import InfoCard from '@/components/freedemo/InfoCard';
import SubjectsCard from '@/components/freedemo/SubjectCard';
import MarqueeBanner from '@/components/freedemo/MarqueeBanner';
import Testimonial from "@/components/freedemo/Testimonial";
// import TrainersMessage from "@/components/freedemo/videoTrainer";
import CallToAction from "@/components/freedemo/CallToAction";
import SEO from "@/components/SEO";

import styles from "@/styles/freedemo/freedemo.module.css";
import achievementStyles from "@/styles/freedemo/Acheivements.module.css";

const achievements = [
    {
        id: 1,
        logo: "/images/achievements-1.webp",
        score: "98%",
        name: "TANIYA SHARMA",
        description: "LOREM IPSUM DOLOR SIT",
    },
    {
        id: 2,
        logo: "/images/achievements-2.webp",
        score: "98%",
        name: "TANIYA SHARMA",
        description: "LOREM IPSUM DOLOR SIT",
    },
    {
        id: 3,
        logo: "/images/achievements-3.webp",
        score: "98%",
        name: "TANIYA SHARMA",
        description: "LOREM IPSUM DOLOR SIT",
    },
];

const BookIcon = () => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M4 4.5A2.5 2.5 0 0 1 6.5 7H20V19.5A2.5 2.5 0 0 1 17.5 22H6.5A2.5 2.5 0 0 1 4 19.5V4.5Z" />
    </svg>
);

const CurriculumCard = ({ defaultClass, full, children }) => {
    const [isHovered, setIsHovered] = useState(false);
    let colorClassKey = isHovered ? defaultClass.replace('light', 'dark') : defaultClass;

    // Combining classes from the CSS module
    const classes = `${styles['fd-curr']} ${styles[colorClassKey]} ${full ? styles['full'] : ''}`;

    return (
        <h3
            className={classes}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
        </h3>
    );
};

const FreeDemo = ({ headerHeight }) => {
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
        <>
            <SEO
                title="Free Demo Class At Ignite Training Institute | Join Today"
                description="Experience Ignite’s expert tutoring with a free demo class. Explore IB, IGCSE, A-Levels, AP & more with certified trainers in Dubai, UAE"
            />
            <div
                // Removed: ref={scrollRef}
                className='overflow-hidden innerpage'
                // Removed: data-scroll-container
                style={{ paddingTop: `${headerHeight}px` }}
            >
                <section data-scroll-section>
                    <InfoCard />
                </section>

                <section className={achievementStyles.achievementsSection} >
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
                                    <h2 className="SubHeading testSubheading">CURRICULUMS & STANDARDISED TESTS</h2>
                                </div>
                                <h3
                                    data-scroll
                                    data-scroll-class="is-inview"
                                    data-scroll-repeat="true"
                                    className="fade-in-section testTitle"
                                    style={{ animationDelay: "0.2s", fontSize: "2rem" }}
                                >
                                    Curriculum-Focused <br /> Tutoring & Exam Prep<span className="highlight"> Expertise</span>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.container} ${styles['freedemo-curriculm']} fade-in-section`}
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat>
                        <div className={styles.column}>
                            <div className={styles.title}>CURRICULUMS</div>
                            <div className={styles.cards}>
                                <a href="/ib-curriculum-tutors-in-dubai">
                                    <CurriculumCard defaultClass="light-green">
                                        <span className={styles.check}>✔</span> IB (MYP & IBDP)
                                    </CurriculumCard>
                                </a>
                                <a href="/courses/igcse-tutors-in-dubai">
                                    <CurriculumCard defaultClass="light-green">
                                        <span className={styles.check}>✔</span> IGCSE
                                    </CurriculumCard>
                                </a>
                                <a href="/courses/a-level-tutors-in-dubai" className={styles.full}>
                                    <CurriculumCard defaultClass="light-green" full>
                                        <span className={styles.check}>✔</span> A Levels
                                    </CurriculumCard>
                                </a>
                                <a href="/courses/homeschooling-tutors-in-dubai" className={styles.full}>
                                    <CurriculumCard defaultClass="light-green" full>
                                        <span className={styles.check}>✔</span> Private Candidate (Homeschooling)
                                    </CurriculumCard>
                                </a>
                            </div>
                        </div>
                        <div className={styles.column}>
                            <div className={`${styles.title} ${styles.tests}`}>STANDARDISED TESTS</div>
                            <div className={styles.cards}>
                                <a href="/act-tutors-in-dubai">
                                    <CurriculumCard defaultClass="light-blue">
                                        <span className={styles.check}>✔</span> ACT
                                    </CurriculumCard>
                                </a>
                                <a href="/advanced-placements-tutors-in-dubai">
                                    <CurriculumCard defaultClass="light-blue">
                                        <span className={styles.check}>✔</span> AP
                                    </CurriculumCard>
                                </a>
                                <a href="#" className={styles.full}>
                                    <CurriculumCard defaultClass="light-blue" full>
                                        <span className={styles.check}>✔</span> UCAT
                                    </CurriculumCard>
                                </a>
                            </div>
                        </div>
                    </div>
                </section >

                <section data-scroll-section>
                    <SubjectsCard />
                </section>

                <section className={achievementStyles.achievementsSection}>
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
                                    Comprehensive Guidance For Every Academic <span className="highlight"> Milestone</span>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.container} ${styles['what-we-offer']}`}>
                        <div className={`${styles.step} fade-in-section`}
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-repeat="true"
                            style={{ animationDelay: "0.1s" }}
                        >
                            <div className={styles['icon-wrap']} data-step="01">
                                <img src="/images/school.webp" alt="School Options" width={134} height={134} />
                            </div>
                            <h3 className={`${styles['step-title']} mb-0`}>SCHOOL OPTIONS</h3>
                            <div className={styles['step-desc']}>Discover schools that align with your core strengths & goals.</div>
                        </div>

                        <div className={`${styles.step} fade-in-section`}
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-repeat="true"
                            style={{ animationDelay: "0.2s" }}
                        >
                            <div className={styles['icon-wrap']} data-step="02">
                                <img src="/images/idealcur.webp" alt="Ideal Curriculum" width={134} height={134} />
                            </div>
                            <h3 className={`${styles['step-title']} mb-0`}>IDEAL CURRICULUM</h3>
                            <div className={styles['step-desc']}>Choose the right-fit curriculum for lasting academic success.</div>
                        </div>

                        <div className={`${styles.step} fade-in-section`}
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-repeat="true"
                            style={{ animationDelay: "0.3s" }}
                        >
                            <div className={styles['icon-wrap']} data-step="03">
                                <img src="/images/subject.webp" alt="Subject Choices" width={134} height={134} />
                            </div>
                            <h3 className={`${styles['step-title']} mb-0`}>SUBJECT CHOICES</h3>
                            <div className={styles['step-desc']}>Choose subjects that match your career & higher education goals.</div>
                        </div>

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
                            <div className={styles['step-desc']}>Map a clear, strategic path to top international universities.</div>
                        </div>
                    </div>
                </section>

                <section data-scroll-section>
                    <MarqueeBanner />
                </section>

                <Testimonial />

                {/* <section data-scroll-section>
                    <TrainersMessage />
                </section> */}

                <section data-scroll-section>
                    <CallToAction />
                </section>
            </div >
        </>
    );
};

export default FreeDemo;