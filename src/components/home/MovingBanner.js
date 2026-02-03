import React from "react";

const MovingBanner = () => {
  return (
    <section>
      <div
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat="true"
        className="fade-in-section bannerScroll"
        style={{ animationDelay: "0.4s" }}
      >
        <b>
          WHERE GRADE IMPROVEMENT BEGINS &nbsp;
          <b className="dot">●</b> &nbsp; WHERE GRADE IMPROVEMENT BEGINS &nbsp;
          <b className="dot">●</b> &nbsp; WHERE GRADE IMPROVEMENT BEGINS &nbsp;
          <b className="dot">●</b> &nbsp; WHERE GRADE IMPROVEMENT BEGINS &nbsp;
          <b className="dot">●</b> &nbsp; WHERE GRADE IMPROVEMENT BEGINS &nbsp;
          <b className="dot">●</b> &nbsp; WHERE GRADE IMPROVEMENT BEGINS
        </b>
      </div>

    </section>
  );
};

export default MovingBanner;
