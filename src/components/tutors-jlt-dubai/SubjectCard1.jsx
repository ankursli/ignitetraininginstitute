import React, { useEffect, useState } from "react";

const subjectRows = [
  [
    { name: "Maths", url: "/maths-tutor-in-dubai/" },
  ],
  [
    { name: "Physics", url: "/physics-tutor-in-dubai/" },
    { name: "Chemistry", url: "/chemistry-tutor-in-dubai/" },
  ],
  [
    { name: "Biology", url: "/biology-tutor-in-dubai/" },
    { name: "Computer Science", url: "/computer-science-tutor-in-dubai/" },
    { name: "French", url: "/french-tutor-in-dubai/" },
  ],
  [
    { name: "Economics", url: "/economics-tutor-in-dubai/" },
    { name: "English", url: "/english-tutor-in-dubai/" },
    { name: "Spanish", url: "/spanish-tutor-in-dubai/" },
  ],
  [
    { name: "Accounting", url: "/accounting-tutor-in-dubai/" },
    { name: "Business Studies", url: "/business-studies-tutor-in-dubai/" },
  ],
  [
    { name: "Psychology", url: "/psychology-tutor-in-dubai/" },
  ],
];

export default function SubjectsCard1({ }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 1100);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);
  return (
    <section
      data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat="true"
      className="fade-in-section subjects-card1-section"
      style={{ animationDelay: "0.2s" }}
    >
      <div className="text-center mb-md-5 mb-4 fade-in-section"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat
        style={{ animationDelay: "0.2s" }}>


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
              <h2 className="SubHeading testSubheading">SUBJECTS WE SUPPORT</h2>
            </div>
            <h3
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section testTitle"
              style={{ animationDelay: "0.2s", fontSize: "2rem" }}
            >
              Tutoring In JLT Dubai That Makes  {isMobile ? "" : <br />} Every <span className="highlight"> Subject</span> Clear
            </h3>
          </div>
        </div>
      </div>
      <div className="container fade-in-section"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat>
        <div className="subjects-card1-inner">
          <img
            data-scroll
            data-scroll-class="is-clipped"
            data-scroll-repeat="true"
            data-scroll-offset="-10%"
            src="/images/rectangle-bg4.webp"
            alt="bg-shape"
            className="subjects-card1-bg-rect"
          />
          <img
            src="/assets/lb.webp"
            alt="bg-shape"
            className="subjects-card1-bg-rect"
          />
          <img
            data-scroll
            data-scroll-class="is-clipped"
            data-scroll-offset="-10%"
            src={isMobile ? "/assets/lb.webp" : "/assets/rm.webp"}
            alt="bg-shape"
            className="subjects-card1-bg-rect"
          />
          <div className="subjects-card1-right">
            <div className="subjects-card1-bubbles-grid">
              {subjectRows.map((row, rowIdx) => (
                <h3
                  key={rowIdx}
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat="true"
                  className="fade-in-section subjects-card1-bubble-row"
                  style={{ animationDelay: `${0.4 + rowIdx * 0.12}s` }}
                >
                  {row.map((subj) => (
                    <a
                      key={subj.name}
                      href={subj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="subjects-card1-bubble"
                    >
                      {subj.name}
                    </a>
                  ))}
                </h3>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        /* Subject Section  */
        .subjects-card1-section {
          width: 100%;
          padding: 0 0 0px 0;
        }

        .subjects-card1-section .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .subjects-card1-section .subjects-card1-inner {
          background: linear-gradient(90deg, #00A491 0%, #003E37 127.82%);
          background-size: cover;
          background-position: center;
          padding: 85px 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          border-radius: 40px;
          position: relative;
          overflow: hidden;
        }

        .subjects-card1-section .subjects-card1-bg-rect {
          position: absolute;
          width: auto;
          height: 70px;
          object-fit: contain;
          z-index: 0;
        }

        .subjects-card1-section .subjects-card1-bg-rect:nth-child(1) {
          width: 350px;
          top: 10%;
          left: 0;
        }

        .subjects-card1-section .subjects-card1-bg-rect:nth-child(2) {
          bottom: 13%;
          left: -1px;
        }

        .subjects-card1-section .subjects-card1-bg-rect:nth-child(3) {
          width: 257px;
          -o-object-fit: fill;
          object-fit: fill;
          -o-object-position: left;
          object-position: left;
          -webkit-border-radius: 0 20px 20px 0;
          -moz-border-radius: 0 20px 20px 0;
          border-radius: 0 20px 20px 0;
          bottom: 43%;
          right: -14px;
        }

        .subjects-card1-section .subjects-card1-right {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1;
          width: 100%;
        }

        .subjects-card1-section .subjects-card1-bubbles-grid {
          display: flex;
          flex-direction: column;
          gap: 15px;
          align-items: center;
          justify-content: center;
          width: 100%;
          position: relative;
          z-index: 1;
        }

        .subjects-card1-section .subjects-card1-bubble-row {
          display: flex;
          gap: 30px;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1;
          width: 100%;
          flex-wrap: nowrap;
        }

        .subjects-card1-section .subjects-card1-bubble {
          position: relative;
          border-radius: 40px;
          color: var(--green-text);
          font-size: 1.4vw;
          font-weight: 400;
          padding: 17px 55px;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: none;
          margin-bottom: 0;
          user-select: none;
          min-width: 120px;
          text-align: center;
          letter-spacing: 0.02em;
          outline: none;
          z-index: 1;
          flex-shrink: 1;
          background: transparent;
          border: 1px solid transparent;
        }

        /* Gradient border using pseudo-element */
        .subjects-card1-section .subjects-card1-bubble::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 40px;
          padding: 2px;
          background: linear-gradient(275.93deg, #EDFFF4 18.79%, #A6EAC7 114.24%);
          -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          z-index: -1;
        }

        .subjects-card1-section .subjects-card1-bubble:hover {
          color: var(--white-color);
          background-color: #ffffff4d;
          box-shadow: 2px 2px 5px 0 var(--blue-text);
        }

        @media (max-width: 1280px) {
          .subjects-card1-section .subjects-card1-bubble {
            padding: 12px 45px;
          }
        }

        @media (max-width: 1199px) {
          .subjects-card1-section .subjects-card1-inner {
            padding: 140px 30px;
          }

          .subjects-card1-section .subjects-card1-bubbles-grid {
            gap: 10px;
          }

          .subjects-card1-section .subjects-card1-bubble-row {
            gap: 10px;
          }

          .subjects-card1-section .subjects-card1-bubble {
            padding: 14px 30px;
          }
        }

        @media (max-width: 1100px) {
          .subjects-card1-section .subjects-card1-inner {
            flex-direction: column;
            align-items: center;
            gap: 32px;
            padding: 47px 20px;
          }

          .subjects-card1-section .subjects-card1-bubble {
            font-size: 1rem;
          }

          .subjects-card1-section .subjects-card1-bg-rect:nth-child(1) {
            width: 100%;
            top: 40px;
            left: 0;
            display: none;
          }

          .subjects-card1-section .subjects-card1-bubbles-grid {
            gap: 14px;
          }

          .subjects-card1-section .subjects-card1-bubble-row {
            gap: 12px;
          }
        }

        /* Unified mobile styles for consistent appearance across all mobile devices */
        @media (max-width: 767px) {
          .subjects-card1-section .container {
            max-width: 95vw;
            padding: 0 10px;
          }

          .subjects-card1-section .subjects-card1-inner {
            padding: 40px 15px;
            border-radius: 25px;
          }

          .subjects-card1-section .subjects-card1-bubbles-grid {
            gap: 12px;
            width: 100%;
          }

          .subjects-card1-section .subjects-card1-bubble-row {
            gap: 8px;
            justify-content: center;
            flex-wrap: nowrap;
          }

          .subjects-card1-section .subjects-card1-bubble {
            padding: 10px 16px;
            font-size: 20px;
            min-width: auto;
            border-radius: 25px;
            white-space: nowrap;
            flex-shrink: 1;
          }

          .subjects-card1-section .subjects-card1-bg-rect:nth-child(1) {
            display: none;
          }

          .subjects-card1-section .subjects-card1-bg-rect:nth-child(2) {
            top: 15%;
            left: 0;
            width: 80px;
            height: 45px;
            object-fit: cover;
            border-radius: 0 15px 15px 0;
          }

          .subjects-card1-section .subjects-card1-bg-rect:nth-child(3) {
            bottom: 15%;
            right: -8px;
            width: 65px;
            height: 45px;
            transform: rotate(180deg);
            border-radius: 0 15px 15px 0;
          }
        }

        /* Extra small devices - consistent across iPhone 12 (390px) and Galaxy S8+ (360px) */
         @media (max-width: 575px) {
          .subjects-card1-section{
            padding: 0 0;
            
          } 
            .subjects-card1-section .subjects-card1-bubble-row{
            flex-wrap: wrap;
            }
            .subjects-card1-section .subjects-card1-bubble{
              padding: 0.5rem 1rem;;
              font-size: 1rem;
            }
        }
        @media (max-width: 414px) {
          .subjects-card1-section .subjects-card1-inner {
            padding: 35px 12px;
          }

          .subjects-card1-section .subjects-card1-bubbles-grid {
            gap: 10px;
            padding-block: 20px
          }

          .subjects-card1-section .subjects-card1-bubble-row {
            gap: 6px;
          }

          .subjects-card1-section .subjects-card1-bubble {
            padding: 8px 12px;
            font-size: 17px;
            border-radius: 20px;
          }

          .subjects-card1-section .subjects-card1-bg-rect:nth-child(2) {
            width: 70px;
            height: 55px;
          }

          .subjects-card1-section .subjects-card1-bg-rect:nth-child(3) {
           width: 70px;
        height: 55px;
          }
        }

        /* Very small devices */
        @media (max-width: 360px) {
          .subjects-card1-section .subjects-card1-inner {
            padding: 30px 10px;
          }

          .subjects-card1-section .subjects-card1-bubble {
            padding: 6px 10px;
            font-size: 16px;
            border-radius: 18px;
          }

          .subjects-card1-section .subjects-card1-bubble-row {
            gap: 15px;
          }

          .subjects-card1-section .subjects-card1-bg-rect:nth-child(2) {
            width: 60px;
            height: 45px;
          }

          .subjects-card1-section .subjects-card1-bg-rect:nth-child(3) {
            width: 50px;
            height: 45px;
          }
        }
      `}</style>
    </section>
  );
}