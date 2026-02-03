import React from "react";


const subjectRows = [
  ["English", "French"],
  ["Spanish", "Computer", "Economics"],
  ["Biology", "Chemistry"],
  ["Physics", "Maths", "Accounting"],
  ["Business Studies"],
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
      <div className="container">
        <div className="subjectSectionInner blue">
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
          <div className="col-4 subjectLeft">
            <span
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section SubHeading"
              style={{ animationDelay: "0.1s" }}
            >
              SUBJECT TUTORING
            </span>
            <h1
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section subjectTitle"
              style={{ animationDelay: "0.2s" }}
            >
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUR{" "}
              <span className="subjectHighlight">ADIPISCING</span>
            </h1>
            <p
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section subjectDesc"
              style={{ animationDelay: "0.3s" }}
            >
              Choosing us means partnering with experienced coaches who are
              dedicated to unlocking your potential.
            </p>
          </div>
          <div className="col-8 pe-5 subjectRight">
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
                    <div key={subj} className="subjectBubble">
                      {subj}
                    </div>
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
