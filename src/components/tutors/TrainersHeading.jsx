import React from 'react';

/**
 * Renders the heading for the Trainers/Tutors section.
 * @param {string} subheading The smaller, top heading (default: "OUR TUTORS").
 * @param {object|string} title The main heading (default: "Individual Learning Backed By Experience & Trust").
 */
export default function TrainersHeading({
    subheading = "OUR TUTORS",
    title = (
        <>
            Individual Learning Backed By <span className="trainersHighlight">Experience & Trust</span>
        </>
    )
}) {
    return (
        <div className="trainersHeaderWrapper">
            <div
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className="fade-in-section"
                style={{ animationDelay: "0.1s" }}
            >
                <span className="SubHeading trainersSubheading">{subheading}</span>
            </div>

            <h2
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className="fade-in-section trainersTitle"
                style={{ animationDelay: "0.2s" }}
            >
                {title}
            </h2>
            <style jsx>{`
                /* CSS for the heading component, extracted from the original file */
                .trainersHeaderWrapper {
                    text-align: center;
                    margin-bottom: 40px; /* Add margin to separate heading from content */
                }
                .trainersTitle { 
                    font-size: 2.2vw;
                    font-weight: 700;
                    max-width: 60%;
                    margin: 40px auto;
                    line-height: 1.1;
                    text-transform: uppercase;
                    color: var(--blue-color);
                }
                .trainersSubheading {
                    font-size: 1.8vw;
                }
                .trainersHighlight {
                    background: linear-gradient(
                        to left,
                        var(--green-color),
                        var(--lightgreen-color)
                    );
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                @media (max-width: 1100px) {
                    .trainersSubheading {
                        font-size: 1.4rem;
                    }
                    .trainersTitle {
                        font-size: 2rem;
                    }
                }
                @media (max-width: 700px) {
                    .trainersSubheading {
                        font-size: 1.2rem;
                    }
                    .trainersTitle {
                        font-size: 1.4rem;
                        max-width: 100%;
                        margin: 20px 0;
                    }
                }
            `}</style>
        </div>
    );
}