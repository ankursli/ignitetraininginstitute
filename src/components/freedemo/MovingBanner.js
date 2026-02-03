import React from "react";

const MovingBanner = () => {
    return (
        <section>
            <div
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className="fade-in-section bannerScroll"
                style={{ animationDelay: "0.4s", margin: "30px 0px" }}
            >
                <b>
                    EXPERT GUIDENCE &nbsp;
                    <b className="dot">●</b> &nbsp; EXPERT GUIDANCE &nbsp;
                    <b className="dot">●</b> &nbsp; FREE STUDY RESOURCES &nbsp;
                    <b className="dot">●</b> &nbsp; PROGRESS TRACKING &nbsp;
                    <b className="dot">●</b> &nbsp; REAL RESULTS &nbsp;
                    <b className="dot">●</b> &nbsp; GRADE IMPROVEMENT
                </b>
            </div>

        </section>
    );
};

export default MovingBanner;
