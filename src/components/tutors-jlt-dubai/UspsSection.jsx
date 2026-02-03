"use client";
import React, { useEffect, useState } from "react";

function USPItem({ number, icon, title, desc }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 1100);
      setIsMediumScreen(width >= 1536 && width <= 1919);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return (
    <div
      className="text-start fade-in-section"
      data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat
      style={{ animationDelay: `${0.2 + number * 0.05}s`, padding: "0 10px" }}
    >
      <div className="d-flex align-items-start">
        <div
          className="bg-teal rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0"
          style={{
            width: "64px",
            height: "64px",
            position: "relative",
            zIndex: 2,
            marginLeft: "20px",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mixBlendMode: "multiply",
            }}
          >
            {React.cloneElement(icon, {
              style: {
                width: isMediumScreen ? "100px" : isMobile ? "70px" : "150px",
                height: isMediumScreen ? "100px" : isMobile ? "70px" : "150px",
                objectFit: "contain",
                mixBlendMode: "multiply",
                marginRight: isMediumScreen ? "0" : isMobile ? "45px" : "0",
              },
            })}
          </div>
        </div>
      </div>
      <h3
        className="fw-bold text-uppercase position-relative"
        style={{
          fontSize: isMediumScreen ? "16.1px" : isMobile ? "13px" : "19px",
          lineHeight: "100%",
          background: "linear-gradient(135deg, #161664, #3F88BA)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
          zIndex: 1,
          marginTop: isMediumScreen ? "21px" : isMobile ? "0" : "50px",
          borderTop: "1px solid rgba(0, 164, 145, 0.2)",
          letterSpacing: "2px",
          paddingTop: "10px",
        }}
      >
        {title}
      </h3>

      <p
        className="text-muted mt-2"
        style={{
          fontSize: isMediumScreen ? "15px" : isMobile ? "10px" : "20px",
          lineHeight: "1.2",
          color: "#233467"
        }}
      >
        {desc}
      </p>
    </div>
  );
}

function UpsSection() {
  const [isMobileHeader, setIsMobileHeader] = useState(false);

  useEffect(() => {
    const checkHeaderDevice = () => {
      // Using a standard mobile breakpoint (e.g., 576px) for the header text.
      setIsMobileHeader(window.innerWidth < 576);
    };

    checkHeaderDevice();
    window.addEventListener('resize', checkHeaderDevice);

    return () => window.removeEventListener('resize', checkHeaderDevice);
  }, []);
  const uspItems = [
    {
      number: "01",
      icon: <img src="/assets/01.webp" alt="tutors in jlt dubai" width={205} height={134} />,
      title: "Experienced Tutors",
      desc: "Curriculum-focused experts delivering complete academic support.",
    },
    {
      number: "02",
      icon: <img src="/assets/02.webp" alt="tutors in jlt dubai" width={221} height={134} />,
      title: "Individual Attention",
      desc: "Small group training (SGT) tailored to each student’s unique needs.",
    },
    {
      number: "03",
      icon: <img src="/assets/03.webp" alt="tutors in jlt dubai" width={221} height={134} />,
      title: "Grade Improvement",
      desc: "Achieve stronger results with regular test-based review techniques.",
    },
    {
      number: "04",
      icon: <img src="/assets/04.webp" alt="tutors in jlt dubai" width={226} height={134} />,
      title: "Examination Prep",
      desc: "Comprehensive guidance across all key international curricula.",
    },
    {
      number: "05",
      icon: <img src="/assets/05.webp" alt="tutors in jlt dubai" width={222} height={134} />,
      title: "Strong Foundation",
      desc: "Conceptual clarity to master all subject fundamentals with ease.",
    },
    {
      number: "06",
      icon: <img src="/assets/06.webp" alt="tutors in jlt dubai" width={229} height={134} />,
      title: "Stimulating Environment",
      desc: "Goal-focused mentorship in an active, encouraging setting.",
    },
    {
      number: "07",
      icon: <img src="/assets/07.webp" alt="tutors in jlt dubai" width={214} height={134} />,
      title: "Structured Learning",
      desc: "Real-world context through guided, problem-based modules.",
    },
    {
      number: "08",
      icon: <img src="/assets/08.webp" alt="tutors in jlt dubai" width={221} height={134} />,
      title: "Progress Tracking",
      desc: "Track academic growth through regular mocks & assessments.",
    },
  ];

  return (
    <div
      data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat
      className="usps px-2 fade-in-section"
      style={{ animationDelay: "0.1s" }}
    >
      <div className="container">
        {/* Header Section */}
        <div
          className="text-center mb-5 fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
          style={{ animationDelay: "0.15s" }}
        >
          <div className="testHeadings">
            <div
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section"
              style={{ animationDelay: "0.1s" }}
            >
              <h2 className="SubHeading testSubheading">OUR PROMISE</h2>
            </div>
            <h3
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section testTitle text-uppercase"
              style={{ animationDelay: "0.2s" }}
            >
              What Do Students Get From {isMobileHeader ? ' ' : <br />}<span className="highlight"> Tutoring's</span> Support In JLT?

            </h3>
          </div>
        </div>

        {/* USP Grid */}
        <div className="custom-grid">
          {uspItems.map((item, index) => (
            <div key={item.number} className="grid-item">
              <USPItem {...item} number={index} />
            </div>
          ))}
        </div>


        {/* CTA Button */}
        <div
          className="text-center fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
          style={{ animationDelay: "0.7s" }}
        >
          <a
            href="/about-us/"
            style={{ textDecoration: "none" }}
          >
            <button
              className="btn cust-text fw-bold d-flex align-items-center mx-auto rounded-pill"
              style={{
                background: "linear-gradient(90deg,#161664, #3F88BA)",
                color: "white",
                padding: "12px 14px 12px 20px",
                border: "none",
                transition: "opacity 0.3s ease",
                letterSpacing: "3px",
                fontSize: "clamp(0.9rem, 1.1vw, 1.1rem)",
              }}
              onMouseEnter={(e) => (e.target.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.target.style.opacity = "1")}
            >
              KNOW MORE ABOUT IGNITE
              <div
                className="custom-height rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  background: "linear-gradient(90deg, #E7F6FF, #A3CAF5)",
                  animationDelay: "0.75s",
                  marginLeft: "2.1rem",
                }}
              >
                <img src="/assets/arrowright.webp" alt="tutors in jlt dubai" width={16} height={14} />
              </div>
            </button>
          </a>
        </div>
      </div>

      <style jsx>{`
      .usps{
      padding: 0 0 ;
      }
        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        .fade-in-section.is-inview {
          opacity: 1;
          transform: translateY(0);
        }
          .custom-grid {
  display: grid;
  gap: 1.5rem; /* same as g-4 (24px gap) */
  margin-bottom:3.5rem;
  grid-template-columns: repeat(2, 1fr); /* 2 columns by default (col-6) */
}

@media (min-width: 768px) {
  .custom-grid {
    grid-template-columns: repeat(4, 1fr); /* 4 columns on md and up (col-md-3) */
      margin-bottom:2rem;
  }
}
    .divider {
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(0, 164, 145, 0.5) 0%,   /* opacity 0.5 */
    rgba(0, 62, 55, 0.5) 100%    /* opacity 0.5 */
  );
}

        @media (max-width: 768px) {
          .testTitle {
            font-size: 16px !important;
          }
        }
@media (max-width: 575px) {
.testTitle {
            font-size: 20.4px !important;
          }
          .custom-grid {
          margin-bottom:2rem;
  gap: .5rem;
}
  .cust-text {
    background: linear-gradient(90deg, #161664, #3F88BA) !important;
    color: white !important;
    padding: 8px 8px 8px 13px !important;
    border: none !important;
    -webkit-transition: opacity .3s ease !important;
    -moz-transition: opacity.3s ease!important;
    -o-transition: opacity.3s ease!important;
    transition: opacity .3s ease !important;
    letter-spacing: 1px !important;
    font-size: 1rem !important;
    margin-top: -17px !important;
    font-weight:600 !important;
  }

  .custom-height {
    width: 30px !important;
    height: 30px !important;
    background: linear-gradient(90deg, #E7F6FF, #A3CAF5) !important;
    animation-delay: 0.75s !important;
    margin-left: 1rem !important;
  }
    .testTitle{
          font-size:20.4px !important;
        }
        .usps>div>div.mb-5{
          margin-bottom:0 !important;
        }
}
  @media screen and (min-width: 1536px) and (max-width: 1919px) {
  .custom-grid {
    gap: .5rem;
    margin-bottom:3.5rem;
  }

  .cust-text {
    background: linear-gradient(90deg, #161664, #3F88BA) !important;
    color: white !important;
padding: 10px 8px 10px 15px !important;
    border: none !important;
    -webkit-transition: opacity .3s ease !important;
    -moz-transition: opacity .3s ease !important;
    -o-transition: opacity .3s ease !important;
    transition: opacity .3s ease !important;
    letter-spacing: 1px !important;
    font-size: clamp(0.7rem, 0.9rem, 1.1rem) !important;
    margin-top: -17px !important;
    font-weight: 600 !important;
  }

  .custom-height {
        width: 30px !important;
        height: 30px !important;
    background: linear-gradient(90deg, #E7F6FF, #A3CAF5) !important;
    animation-delay: 0.75s !important;
    margin-left: 1rem !important;
  }
}


      `}</style>
    </div>
  );
}

export default UpsSection;