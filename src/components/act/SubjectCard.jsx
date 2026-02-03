"use client";

import { useEffect, useState } from "react";

export default function SubjectsCard() {
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
  const sections = [
    { name: "English", questions: 75, time: "45 Minutes", score: "0-36" },
    { name: "Maths", questions: 60, time: "60 Minutes", score: "0-36" },
    { name: "Reading", questions: 40, time: "35 Minutes", score: "0-36" },
    { name: "Science", questions: 40, time: "35 Minutes", score: "0-36" },
    { name: "Writing", questions: 1, time: "40 Minutes", score: "0-36" },
  ];

  return (
    <div
      className="custom-container fade-in-section"
      data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat
    >
      <div
        className="container text-center fade-in-section"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat
        style={{ maxWidth: "1140px", animationDelay: "0.15s" }}
      >
        <div
          className="curriculumSubSection"
        >
          <h2 className="SubHeading testSubheading">
            ACT TEST OVERVIEW
          </h2>
          <div className="testHeadings">
            <h3
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section testTitle"
              style={{ animationDelay: "0.2s", fontSize: "2rem" }}
            >
              Here’s What To Expect  <br /> When You Take The
              <span className="highlight">  ACT Test  </span>
            </h3>
          </div>
        </div>
      </div>
      {/* <div className="text-center container mb-5 fade-in-section">
        <div className="testHeadings">
          <div
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section"
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="SubHeading testSubheading">ACT TEST OVERVIEW
            </h2>
          </div>
          <h3
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section testTitle"
            style={{ animationDelay: "0.2s" }}
          >
            Here’s What To Expect  <br /> When You Take The
            <span className="highlight">  ACT Test  </span>
          </h3>
        </div>
      </div> */}


      <div className="table-container">
        <table
          style={{
            width: "100%",
            textAlign: "left",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr style={{
              background: "linear-gradient(135deg, #B4D3E7 0%, #93B3D6 100%)",
              height: "60px"
            }}>
              <th style={{
                padding: isMediumScreen ? "0.8rem" : "1rem",
                background: "linear-gradient(90deg,#161664, #3F88BA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "0.05em",
                fontSize: isMediumScreen ? "1.3rem" : isMobile ? "15px" : "1.81rem",
                fontWeight: "700",
                borderRight: "1px solid rgba(63, 136, 186, 0.3)",
                textTransform: "uppercase"
              }}>
                ACT SECTION
              </th>
              <th style={{
                padding: isMediumScreen ? "0.8rem" : "1rem",
                background: "linear-gradient(90deg,#161664, #3F88BA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "0.05em",
                fontSize: isMediumScreen ? "1.3rem" : isMobile ? "15px" : "1.81rem",
                fontWeight: "700",
                borderRight: "1px solid rgba(63, 136, 186, 0.3)",
                textTransform: "uppercase"
              }}>
                NO. OF QUESTIONS
              </th>
              <th style={{
                padding: isMediumScreen ? "0.8rem" : "1rem",
                background: "linear-gradient(90deg,#161664, #3F88BA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "0.05em",
                fontSize: isMediumScreen ? "1.3rem" : isMobile ? "15px" : "1.81rem",
                fontWeight: "700",
                borderRight: "1px solid rgba(63, 136, 186, 0.3)",
                textTransform: "uppercase"
              }}>
                TIMES ALLOTED
              </th>
              <th style={{
                padding: isMediumScreen ? "0.8rem" : "1rem",
                background: "linear-gradient(90deg,#161664, #3F88BA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "0.05em",
                fontSize: isMediumScreen ? "1.3rem" : isMobile ? "15px" : "1.81rem",
                fontWeight: "700",
                textTransform: "uppercase"
              }}>
                SCORE
              </th>
            </tr>
          </thead>
          <tbody>
            {sections.map((sec, index) => (
              <tr
                key={sec.name}
                style={{
                  background: index % 2 === 0
                    ? "#FFFFFF"
                    : "linear-gradient(135deg, #F8FBFF 0%, #EDF4FF 100%)",
                  color: "#0d2344",
                  fontWeight: "600",
                  height: "55px",
                  transition: "all 0.2s ease"
                }}
              >
                <td style={{
                  padding: isMediumScreen ? "1rem" : isMobile ? "1.3rem" : "1.7rem",
                  borderRight: "1px solid rgba(63, 136, 186, 0.2)",
                  fontSize: isMediumScreen ? "1.3rem" : isMobile ? "1.3rem" : "1.6rem",
                  fontWeight: "600",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  backgroundImage: "linear-gradient(90deg, #161664, #3F88BA)"
                }}>
                  {sec.name}
                </td>
                <td style={{
                  padding: isMediumScreen ? "1rem" : isMobile ? "1.3rem" : "1.7rem",
                  borderRight: "1px solid rgba(63, 136, 186, 0.2)",
                  fontSize: isMediumScreen ? "1.3rem" : isMobile ? "1.3rem" : "1.6rem",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  backgroundImage: "linear-gradient(90deg, #161664, #3F88BA)",
                  fontWeight: "600"
                }}>
                  {sec.questions}
                </td>
                <td style={{
                  padding: isMediumScreen ? "1rem" : isMobile ? "1.3rem" : "1.7rem",
                  borderRight: "1px solid rgba(63, 136, 186, 0.2)",
                  fontSize: isMediumScreen ? "1.3rem" : isMobile ? "1.3rem" : "1.6rem",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  backgroundImage: "linear-gradient(90deg, #161664, #3F88BA)",
                  fontWeight: "600"
                }}>
                  {sec.time}
                </td>
                <td style={{
                  padding: isMediumScreen ? "1rem" : isMobile ? "1.3rem" : "1.7rem",
                  fontSize: isMediumScreen ? "1.3rem" : isMobile ? "1.3rem" : "1.6rem",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  backgroundImage: "linear-gradient(90deg, #161664, #3F88BA)",
                  fontWeight: "600"
                }}>
                  {sec.score}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Animation & Mobile Scrollbar Styles */}
      <style jsx>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
          .custom-container {
  max-width: 85vw;
  margin-block: 0;
  margin-left: 0;
  background: white;
  margin-right: auto;
  margin-left: auto; /* for mx-auto */
}

/* Mobile styles */
@media (max-width: 768px) {
  .custom-container {
    max-width: 100%;
    margin-block: 48px;
    margin-left: 20px !important;
  }
}

        .fade-in-section.is-inview {
          opacity: 1;
          transform: translateY(0);
        }
         .table-container {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
              border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    border-top: 2px solid #3F88BA;
    border-left: 2px solid #3F88BA;
    border-bottom: 2px solid #3F88BA;
    border-right: 2px solid #3F88BA;
        }
        
        /* Hide scrollbar on mobile */
        @media (max-width: 768px) {
          .table-container {
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE 10+ */
                overflow: auto;
    border: 2px solid #3F88BA;
    box-shadow: 0 8px 20px rgba(63, 136, 186, 0.15);
    background: white;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top: 2px solid #3F88BA;
    border-left: 2px solid #3F88BA;
    border-bottom: 2px solid #3F88BA;
    border-right: none;
          }
          
          .table-container::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          table th, table td {
            padding: 0.75rem 0.5rem !important;
            font-size: 0.9rem !important;
          }
          
          .act-heading {
            font-size: 1rem !important;
          }
        }
        @media (max-width: 575px) {
          .custom-container{
            margin-top:0;
            margin-bottom:0;
          }
        }
        @media (max-width: 480px) {
          table th, table td {
            padding: 0.6rem 0.4rem !important;
            font-size: 1rem!important;
          }
               .act-heading {
            font-size: 0.9rem !important;
          }
        }
          .table-container {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  /* Mobile specific styling to show 3 columns at a time */
  @media (max-width: 1100px) {
    .table-container {
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* IE 10+ */
    }
    
    .table-container::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera */
    }

    /* Set table width to show exactly 3 columns at a time */
    table {
      min-width: 133.33vw; /* This ensures 3 columns show at a time (100vw / 3 * 4 columns) */
    }
    
    table th,
    table td {
      width: 25%; /* Each column takes 25% of table width */
      min-width: 33.33vw; /* Each column is 1/3 of viewport width */
      white-space: nowrap;
      padding: 1.2rem 0.8rem !important;
      font-size: 1.3rem !important;
    }
    
    /* Heading font size specifically for mobile */
    table th {
      font-size: 15px !important;
      line-height: 1.2;
      padding: 1rem 0.8rem !important;
    }
  }
      `}</style>
    </div>
  );
}