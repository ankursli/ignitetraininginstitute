import React from "react";

// Mapping the UI subject names to the provided URLs
const subjectLinks = {
    "English": "/english-tutor-in-dubai",
    "French": "/french-tutor-in-dubai",
    "Spanish": "/spanish-tutor-in-dubai",
    "Computer Science": "/computer-science-tutor-in-dubai",
    "Economics": "/economics-tutor-in-dubai",
    "Biology": "/biology-tutor-in-dubai",
    "Chemistry": "/chemistry-tutor-in-dubai",
    "Physics": "/physics-tutor-in-dubai",
    "Maths": "/maths-tutor-in-dubai",
    "Business Studies": "/business-studies-tutor-in-dubai",
    "Accounting": "/accounting-tutor-in-dubai",
    "Psychology": "/psychology-tutor-in-dubai"
};

const subjectRows = [
    ["English", "French", "Spanish"],
    ["Computer Science", "Economics", "Biology"],
    ["Chemistry", "Physics", "Maths"],
    ["Business Studies", "Accounting", "Psychology"],
];

export default function Subjects({ }) {
    return (
        <section
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section subjectSection"
            style={{ animationDelay: "0.2s" }}
        >
            <div className="container justify-content-center">
                <div className="subjectSectionInner">
                    <img
                        data-scroll
                        data-scroll-class="is-clipped"
                        data-scroll-repeat="true"
                        data-scroll-offset="-10%"
                        src="/images/rectangle-bg4.webp"
                        alt="bg-shape"
                        className="bgRect"
                    />
                    <img
                        data-scroll
                        data-scroll-class="is-clipped"
                        data-scroll-repeat="true"
                        data-scroll-offset="-10%"
                        src="/images/rectangle-bg5.webp"
                        alt="bg-shape"
                        className="bgRect"
                    />
                    <img
                        data-scroll
                        data-scroll-class="is-clipped"
                        data-scroll-offset="-10%"
                        src="/images/rectangle-bg4.webp"
                        alt="bg-shape"
                        className="bgRect"
                    />
                    <div className="col-12 pe-5 subjectRight">
                        <div className="subjectBubblesGrid">
                            {subjectRows.map((row, rowIdx) => (
                                <div
                                    key={rowIdx}
                                    data-scroll
                                    data-scroll-class="is-inview"
                                    data-scroll-repeat="true"
                                    className={`fade-in-section subjectBubbleRow`}
                                    style={{ animationDelay: `${0.4 + rowIdx * 0.12}s` }}
                                >
                                    {row.map((subj) => (
                                        <a key={subj} href={subjectLinks[subj] || "#"}>
                                            <h3 className="subjectBubble">
                                                {subj}
                                            </h3>
                                        </a>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}