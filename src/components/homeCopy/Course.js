// components/home/Course.js
import React, { useState } from "react";
import Image from "next/image";
// Import the Course module styles
import styles from '@/styles/home-copy/Course.module.css';

const courseData = [
    {
        number: "01.",
        title: "IBDP",
        label: "IBDP",
        subtitle: "International Baccalaureate Diploma Programme",
        details: ["Total Courses: 4", "|", "Online & In-Person"],
        img: "/images/course-bg1.webp",
        link: "/courses/ibdp-tutors-in-dubai",
    },
    {
        number: "02.",
        title: "IB MYP",
        label: "IB MYP",
        subtitle: "Middle Years Programme",
        details: ["Total Courses: 2", "|", "Online & In-Person"],
        img: "/images/course-bg2.webp",
        link: "/courses/myp-tutors-in-dubai",
    },
    {
        number: "03.",
        title: "A Levels",
        label: "A Levels",
        subtitle: "Advanced Levels",
        details: ["Total Courses: 3", "|", "Online & In-Person"],
        img: "/images/course-bg3.webp",
        link: "/courses/a-level-tutors-in-dubai",
    },
    {
        number: "04.",
        title: "IGCSE",
        label: "IGCSE",
        subtitle: "International General Certificate Of Secondary Education",
        details: ["Total Courses: 3", "|", "Online & In-Person"],
        img: "/images/course-bg4.webp",
        link: "/courses/igcse-tutors-in-dubai",
    },
    {
        number: "05.",
        title: "Homeschooling",
        label: "Homeschooling",
        subtitle: "Private Candidacy",
        details: ["Total Courses: 2", "|", "Online & In-Person"],
        img: "/images/course-bg5.webp",
        link: "/courses/homeschooling-tutors-in-dubai",
    },
];

const Course = () => {
    const [hovered, setHovered] = useState(3);

    return (
        // Apply local module class
        <section className={styles.courseSection}>
            <div className="container">
                {/* Apply local module class */}
                <div className={styles.courseHeadings}>
                    <div
                        data-scroll
                        data-scroll-class="is-inview"

                        className="fade-in-section"
                        style={{ animationDelay: "0.1s" }}
                    >
                        {/* Global Class used as string */}
                        <h2 className="SubHeading">TUTORING PROGRAMS</h2>
                    </div>
                    <div
                        data-scroll
                        data-scroll-class="is-inview"

                        className="fade-in-section"
                        style={{ animationDelay: "0.25s" }}
                    >
                        {/* Apply local module class. Global class used as string */}
                        <h3 className={styles.courseTitle}>
                            Become Exam-Ready With Targeted Prep <span className="highlight">Courses</span>
                        </h3>
                    </div>
                    <div
                        data-scroll
                        data-scroll-class="is-inview"

                        className="fade-in-section"
                        style={{ animationDelay: "0.4s" }}
                    >
                        {/* Global element, styles applied via :global(p) in module */}
                        <p>
                            Whether you're aiming for top scores or a strong foundation, Ignite’s courses give you the edge to succeed.
                        </p>
                    </div>
                </div>

                <div
                    data-scroll
                    data-scroll-class="is-inview"

                    className={styles.courseInner}
                    style={{ animationDelay: "0.4s" }}
                >
                    {courseData.map((card, idx) => {
                        const isActive = hovered === idx;
                        return (
                            <div
                                data-scroll
                                data-scroll-class="is-inview"

                                // Apply local module classes
                                className={isActive ? styles.mainCard : styles.sideCard}
                                style={{ animationDelay: `${0.3 + idx * 0.25}s`, background: "none" }}
                                key={idx}
                                onMouseEnter={() => setHovered(idx)}
                            >
                                {/* Apply local module class */}
                                <span className={styles.cardNumber}>{card.number}</span>
                                {/* Apply local module class */}
                                <h3 className={styles.cardTitle}>{card.title}</h3>
                                {/* Apply local module class */}
                                {/* <div
                                    className={styles.cardBg}
                                    style={{ backgroundImage: `url('${card.img}')` }}
                                /> */}
                                <div className={styles.cardBg}>
                                    <Image
                                        src={card.img}
                                        alt={`${card.title} course background`}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        priority
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                                <div
                                    // Combine local module classes
                                    className={
                                        (isActive ? styles.mainCardContent : styles.sideCardContent) +
                                        " " +
                                        (isActive ? styles.activeOverlay : styles.inactiveOverlay)
                                    }
                                >
                                    <div>
                                        {/* Apply local module class */}
                                        <div className={styles.mainCardLabel}>{card.label}</div>
                                        {/* Apply local module class */}
                                        <h3 className={styles.mainCardTitle}>{card.subtitle}</h3>
                                    </div>
                                    {/* Apply local module class */}
                                    <div className={styles.mainCardDetails}>
                                        {card.details.map((d, i) => (
                                            <span key={i}>{d}</span>
                                        ))}
                                    </div>
                                    <a href={card.link} className="nodecoration">
                                        {/* Global Class used as string, local module class used with styles */}
                                        <button className={`buttonSkyBlue ${styles.mainCardBtn}`}>
                                            VIEW COURSE{" "}
                                            <Image
                                                src="/images/right-arrow-blue.webp"
                                                width={40}
                                                height={40}
                                                quality={100}
                                                loading="lazy"
                                                alt="right arrow"
                                            />
                                        </button>
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Course;