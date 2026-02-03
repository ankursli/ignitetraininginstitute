// components/home/Course.js
import React, { useState } from "react";
import Image from "next/image";


const courseData = [
    {
        number: "01.",
        title: "IBDP",
        label: "IB Diploma Programme",
        subtitle: "INTERNATIONAL BACCALAUREATE",
        details: ["Total Courses: 7", "|", "Online & In-Person"],
        img: "/images/course-bg1.webp",
    },
    {
        number: "02.",
        title: "IB",
        label: "IB",
        subtitle: "INTERNATIONAL BACCALAUREATE",
        details: ["Total Courses: 7", "|", "Online & In-Person"],
        img: "/images/course-bg2.webp",
    },
    {
        number: "03.",
        title: "MYP",
        label: "MYP",
        subtitle: "MIDDLE YEARS PROGRAMME",
        details: ["Total Courses: 5", "|", "Online & In-Person"],
        img: "/images/course-bg3.webp",
    },
    {
        number: "04.",
        title: "IGCSE",
        label: "IGCSE",
        subtitle: "INTERNATIONAL GCSE",
        details: ["Total Courses: 8", "|", "Online & In-Person"],
        img: "/images/course-bg4.webp",
    },
    {
        number: "05.",
        title: "A-LEVELS",
        label: "A-LEVELS",
        subtitle: "ADVANCED LEVELS",
        details: ["Total Courses: 6", "|", "Online & In-Person"],
        img: "/images/course-bg5.webp",
    },
];

const Course = () => {
    const [hovered, setHovered] = useState(1);

    return (
        <section className="courseSection">
            <div className="container">
                <div className="courseHeadings">
                    <div
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat="true"
                        className="fade-in-section"
                        style={{ animationDelay: "0.1s" }}
                    >
                        <h3 className="SubHeading">TUTORING COURSES</h3>
                    </div>
                    <div
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat="true"
                        className="fade-in-section"
                        style={{ animationDelay: "0.25s" }}
                    >
                        <h1 className="courseTitle">
                            Lorem ipsum dolor sit amet, consectetur <span className="highlight">adipiscing</span>
                        </h1>
                    </div>
                    <div
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat="true"
                        className="fade-in-section"
                        style={{ animationDelay: "0.4s" }}
                    >
                        <p>
                            Choosing us means partnering with experienced coaches who are
                            dedicated to unlocking your potential.
                        </p>
                    </div>
                </div>

                <div
                    data-scroll
                    data-scroll-class="is-inview"
                    data-scroll-repeat="true"
                    className="fade-in-section courseInner"
                    style={{ animationDelay: "0.4s" }}
                >
                    {courseData.map((card, idx) => {
                        const isActive = hovered === idx;
                        return (
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className={isActive ? "mainCard" : "sideCard"}
                                style={{ animationDelay: `${0.3 + idx * 0.25}s`, background: "none" }}
                                key={idx}
                                onMouseEnter={() => setHovered(idx)}
                            >
                                <span className="cardNumber">{card.number}</span>
                                <span className="cardTitle">{card.title}</span>
                                <div
                                    className="cardBg"
                                    style={{ backgroundImage: `url('${card.img}')` }}
                                />
                                <div
                                    className={
                                        (isActive ? "mainCardContent" : "sideCardContent") +
                                        " " +
                                        (isActive ? "activeOverlay" : "inactiveOverlay")
                                    }
                                >
                                    <div>
                                        <div className="mainCardLabel">{card.label}</div>
                                        <div className="mainCardTitle">{card.subtitle}</div>
                                    </div>
                                    <div className="mainCardDetails">
                                        {card.details.map((d, i) => (
                                            <span key={i}>{d}</span>
                                        ))}
                                    </div>
                                    <button className="buttonSkyBlue mainCardBtn">
                                        VIEW COURSE{" "}
                                        <Image
                                            src="/images/right-arrow-blue.webp"
                                            width={40}
                                            height={40}
                                            quality={100}
                                        />
                                    </button>
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
