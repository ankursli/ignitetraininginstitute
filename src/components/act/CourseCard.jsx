"use client";
import React, { useState } from "react";
import { Plus, Minus, ChevronDown, ChevronUp } from "lucide-react";

function CourseCard() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    // FIX: Removed setActiveIndex(index); to prevent the card from opening on hover/scroll.
    // The card now only opens on click.
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    // FIX: Removed setActiveIndex(null); to prevent the card from closing when the mouse scrolls off the element.
  };

  const accordionItems = [
    {
      title: "Bespoke One-On-One Tutoring For ACT",
      bg: "linear-gradient(269.48deg,rgba(231, 246, 255, 0.3) 2.74%,rgba(163, 202, 245, 0.3) 93.4%)",
      mobileBg: "linear-gradient(135deg, #E3F2FD, #BBDEFB)",
      highlights: [
        "In-depth preparation for ACT Math, English, and Science sections",
        "Customized lesson plans and flexible scheduling options",
        "One-on-one attention and personalized learning pace",
        "Ongoing progress tracking with expert feedback and reviews",
        "Access to exclusive, in-house study materials and resources",
        "Regular unit tests and mock exams for real-time performance review"
      ],
      description:
        "A focused 6-week program designed to strengthen core competencies in specific ACT subjects. This course begins with a personalized diagnostic test to evaluate each student’s current skill set and learning needs, ensuring a tailored approach to mastering key concepts."
    },
    {
      title: "ACT Group Learning Program",
      bg: "linear-gradient(269.48deg,rgba(231, 246, 255, 0.5) 2.74%,rgba(163, 202, 245, 0.3) 93.4%)",
      mobileBg: "linear-gradient(135deg, #E3F2FD, #BBDEFB)",
      highlights: [
        "Full ACT syllabus coverage led by expert tutors",
        "Structured weekly sessions for learning and testing",
        "Personalized attention within a small group dynamic",
        "Access to in-house developed ACT study resources",
        "Intensive mock test series for real-exam simulation",
        "Progress tracking through regular review and feedback"
      ],
      description:
        "A results-driven 10-week program designed to provide complete support for ACT readiness in a collaborative group setting. The first 6 weeks focus on building a strong subject foundation, followed by 4 weeks of intensive practice with ACT-style questions, mock exams, essay writing, and live review sessions."
    }
  ];


  return (
    <>
      <div className="px-3 fade-in-section desktop-version"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat="true"
      >
        <div className="container" style={{ maxWidth: "74.166vw", animationDelay: "0.5s" }}
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat="true"
        >
          {/* Header Section */}
          <div className="text-center mb-5 fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"

          >
            <div className="testHeadings">
              <div
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className="fade-in-section"

              >
                <h2 className="SubHeading testSubheading">courses
                </h2>
              </div>
              <h3
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className="fade-in-section testTitle"
                style={{ fontSize: "2rem" }}
              >
                Learning Starts Here With <br /><span className="highlight"> Tailored </span> IBDP Courses
              </h3>
            </div>
          </div>

          {/* Desktop Accordion */}
          <div
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section"
            style={{
              borderRadius: "30px",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              background: "linear-gradient(180deg, #E7F6FF 0%, #A3CAF5 100%)",
            }}
          >
            {accordionItems.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: hoveredIndex === index ? 'translateY(-2px) scale(1.02)' : 'translateY(0) scale(1)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  zIndex: hoveredIndex === index ? 10 : 1,
                  position: 'relative',
                }}
              >
                {/* Header */}
                <div
                  className="d-flex justify-content-between align-items-center px-4 py-3"
                  style={{
                    background: activeIndex === index
                      ? "linear-gradient(90deg, #EDFFF4, #A6EAC7)"
                      : hoveredIndex === index
                        ? "linear-gradient(90deg, rgba(237, 255, 244, 0.8), rgba(166, 234, 199, 0.8))"
                        : item.bg,
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    userSelect: "none",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: hoveredIndex === index ? "0 8px 32px rgba(0, 0, 0, 0.12)" : "none",
                  }}
                  // The click handler is now the primary control for opening/closing the content
                  onClick={() => toggleAccordion(index)}
                >
                  <h3
                    className="gradient-text mb-0 py-3 text-uppercase"
                    style={{
                      transform: hoveredIndex === index ? 'translateX(10px)' : 'translateX(0)',
                      transition: 'transform 0.3s ease-out',
                    }}
                  >
                    {item.title}
                  </h3>
                  <span
                    style={{
                      color: "#3F88BA",
                      transform: hoveredIndex === index ? 'rotate(180deg) scale(1.1)' : 'rotate(0deg) scale(1)',
                      transition: 'all 0.3s ease-out',
                      marginRight: "25px",
                    }}
                  >
                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </div>

                {/* Content - NOW ALWAYS RENDERED, HEIGHT CONTROLLED BY CSS */}
                <div
                  className="accordion-content-desktop"
                  style={{
                    background: "linear-gradient(90deg, #EDFFF4, #A6EAC7)",
                    color: "#374151",
                    fontSize: "0.95rem",
                    overflow: "hidden",
                    // Smooth transition properties
                    maxHeight: activeIndex === index ? "1000px" : "0", // Large max-height for open state
                    opacity: activeIndex === index ? 1 : 0,
                    transition: "max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease-in-out",
                  }}
                >
                  {/* Inner content wrapper with original padding */}
                  <div className="px-4 pb-4">
                    <div className="row g-4">
                      {/* Left Text */}
                      <div className="col-md-6 ps-4">
                        <p className="desc" style={{ lineHeight: "1.3", marginLeft: "25px", paddingLeft: "0" }}>
                          {item.description}
                        </p>
                        <h5 className="fw-bold fontSizeK mb-3" style={{
                          fontSize: "25px",
                          color: "#2D5AA0",
                          background: "linear-gradient(285.71deg, #3F88BA -4.32%, #161664 106.53%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          fontWeight: 600,
                          backgroundClip: "text",
                          marginLeft: "25px",
                          marginTop: "30px"
                        }}>
                          KEY HIGHLIGHTS
                        </h5>
                        <ul className="list-unstyled" style={{ fontSize: "0.9rem", color: "#374151", paddingLeft: "0" }}>
                          {item.highlights.map((point, i) => (
                            <li
                              key={i}
                              style={{
                                fontSize: "22px",
                                fontWeight: "500",
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "20px",
                                marginLeft: "0",
                                paddingLeft: "0",
                                marginLeft: "25px"
                              }}
                              className="fontSizeL"
                            >
                              {/* Custom Gradient Bullet */}
                              <span
                                style={{
                                  width: "10px",
                                  height: "10px",
                                  borderRadius: "50%",
                                  background: "linear-gradient(285.71deg, #3F88BA -4.32%, #161664 106.53%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
                                  flexShrink: 0,
                                  marginTop: "15px",
                                }}
                              ></span>

                              {/* Gradient Text */}
                              <span
                                style={{
                                  letterSpacing: "1px",
                                  background: "linear-gradient(285.71deg, #3F88BA -4.32%, #161664 106.53%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
                                  WebkitBackgroundClip: "text",
                                  WebkitTextFillColor: "transparent",
                                  backgroundClip: "text",
                                  marginBlock: "10px",
                                }}
                              >
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right Image */}
                      <div
                        className="col-md-6 d-flex justify-content-center align-items-center"
                      >
                        <img
                          src="/assets/corsebg.webp"
                          alt="ibdp tutor in dubai"
                          className="img-fluid image1"
                          width={1500}
                          height={1000}
                          style={{
                            height: "400px",
                            width: "500px",
                            objectFit: "cover",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                            transform: hoveredIndex === index ? 'scale(1.02)' : 'scale(1)',
                            transition: 'transform 0.4s ease-out',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="mobile-version py-4 px-3 fade-in-section"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat="true"
      >
        <div className="">
          {/* Mobile Header */}
          <div className="text-center mb-4">
            <div
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="SubHeading testSubheading">courses
              </div>
            </div>

            <h2
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section testTitle"
              style={{ animationDelay: "0.2s" }}
            >
              Learning Starts Here With <span className="highlight"> Tailored </span> ACT Courses
            </h2>
          </div>

          {/* Mobile Cards */}
          <div className="mobile-accordion">
            {accordionItems.map((item, index) => (
              <div key={index} className="mb-3">
                {/* Mobile Card Header */}
                {/* Always render the header */}
                <div
                  className="mobile-card-header d-flex justify-content-between align-items-center p-4"
                  style={{
                    backgroundImage: `
      linear-gradient(135deg, rgba(227, 242, 253, 0.9), rgba(187, 222, 251, 0.9)),
      url("/assets/corsebg.webp")
    `,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "20px",
                    cursor: "pointer",
                    minHeight: "80px",
                    color: "#2D5AA0",
                    position: "relative",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    transform: hoveredIndex === index ? 'translateY(-4px) scale(1.02)' : 'translateY(0) scale(1)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  onClick={() => toggleAccordion(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Left content (index + title) */}
                  <div className="d-flex flex-column gap-1">
                    <span
                      style={{
                        fontSize: "2rem",
                        fontWeight: 700,
                        opacity: "0.7",
                        borderBottom: "1px solid rgba(22, 22, 100, 0.5)",
                        width: "50px",
                        background: "linear-gradient(90deg, #161664, #3F88BA)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)",
                        transition: "transform 0.3s ease-out",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}.
                    </span>

                    <h3
                      style={{
                        letterSpacing: "1px",
                        fontWeight: 700,
                        background: "linear-gradient(90deg, #161664, #3F88BA)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        transform: hoveredIndex === index ? 'translateX(8px)' : 'translateX(0)',
                        transition: 'transform 0.3s ease-out',
                        marginBottom: 0,
                        fontSize: "18px",
                        lineHeight: '27px'
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Right side: Chevron always sticks to right */}
                  <span
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: "30px",
                      height: "30px",
                      flexShrink: 0,
                      transform: activeIndex === index ? "rotate(180deg) scale(1.1)" : "rotate(0deg) scale(1)",
                      transition: "all 0.3s ease-out",
                    }}
                  >
                    <ChevronDown size={24} />
                  </span>
                </div>


                {/* Mobile Expanded Content - NOW ALWAYS RENDERED, HEIGHT CONTROLLED BY CSS */}
                <div
                  className="mobile-expanded-content"
                  style={{
                    overflow: "hidden",
                    // Smooth transition properties
                    maxHeight: activeIndex === index ? "1200px" : "0", // Large max-height for open state
                    transition: "max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    marginTop: activeIndex === index ? "12px" : "0", // Add conditional margin-top
                  }}
                >
                  {/* Single unified container with two sections */}
                  <div
                    style={{
                      borderRadius: "20px",
                      overflow: "hidden",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      opacity: activeIndex === index ? 1 : 0, // Fade in the content itself
                      transition: "opacity 0.4s ease-in-out 0.1s", // Delay opacity to start after height transition begins
                    }}
                  >
                    {/* Top Dark Green Section with Image Background AND Title */}
                    <div
                      style={{
                        background: "linear-gradient(135deg, #4A5D23, #2E3A16)",
                        padding: "1.5rem",
                        color: "#ffffff",
                        backgroundImage: "url('/assets/corsebg.webp')",
                        backgroundSize: "cover",
                        backgroundPosition: "center right",
                        backgroundBlendMode: "multiply",
                        position: "relative",
                        borderBottom: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      <div style={{
                        position: "relative",
                        zIndex: 2,
                      }}>
                        <h3
                          className="fw-bold mb-3 d-flex justify-content-between align-items-center"
                          style={{
                            fontSize: "25px",
                            color: "#ffffff",
                            opacity: "0.5",
                            letterSpacing: "1px",
                            lineHeight: "1.3",
                            textTransform: "uppercase",
                          }}
                        >
                          <span>0{index + 1}.</span>
                          <span
                            onClick={() => toggleAccordion(index)}
                            style={{
                              cursor: "pointer",
                              transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                              transition: 'transform 0.3s ease-out',
                            }}
                          >
                            {activeIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                          </span>
                        </h3>

                        {/* Title inside dark section */}
                        <h3 className="fw-bold mb-3" style={{
                          fontSize: "1.1rem",
                          color: "#ffffff",
                          letterSpacing: "1px",
                          lineHeight: "1.3",
                          textTransform: "uppercase",
                        }}>
                          {item?.title}
                        </h3>

                        {/* Divider line */}
                        <hr style={{
                          border: "none",
                          height: "1px",
                          background: "#FFFFFF",
                          margin: "1rem 0",
                        }} />

                        <p style={{
                          marginBottom: "0",
                          lineHeight: "1.5",
                          fontSize: "0.95rem",
                          color: "#ffffff",
                          fontWeight: "400",
                        }}>
                          {item?.description}
                        </p>
                      </div>

                      {/* Overlay for better text readability */}
                      <div style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: "linear-gradient(65.39deg, #000000 5.24%, rgba(166, 234, 199, 0.3) 151.85%)",
                        zIndex: 1,
                      }}></div>
                    </div>
                    <div
                      style={{
                        background: "#E8F5E8",
                        padding: "1.5rem",
                        color: "#374151",
                      }}
                    >
                      <h5 className="fw-bold mb-3" style={{
                        fontSize: "23px",
                        color: "#2D5AA0",
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                      }}>
                        KEY HIGHLIGHTS
                      </h5>

                      <ul className="list-unstyled" style={{ fontSize: "0.9rem", marginBottom: "0" }}>
                        {item.highlights.slice(0, 4).map((point, i) => (
                          <li
                            key={i}
                            className="d-flex align-items-start mb-2"
                            style={{
                              lineHeight: "1.4",
                            }}
                          >
                            <span
                              style={{
                                width: "6px",
                                height: "6px",
                                background: "#2D5AA0",
                                borderRadius: "50%",
                                marginTop: "7px",
                                marginRight: "10px",
                                flexShrink: 0,
                              }}
                            ></span>
                            <span style={{
                              background: "linear-gradient(135deg, #161664,#3F88BA)",
                              fontWeight: "600",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                            }}>
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* --- KEEPING ONLY THE NECESSARY FADE-IN FOR HEADERS --- */
        // .fade-in-section {
        //   opacity: 0;
        //   transform: translateY(20px);
        //   transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        //   animation: fadeIn 0.5s ease-out forwards;
        // }
              @media (min-width: 1200px) and (max-width: 1919px) {
              .gradient-text{
                    font-size:25px !important;
              }
                      .desc{
                font-size:21px !important;
                line-height:1.3 !important;
                vertical-align: middle;      
              }
              .fontSizeK{
              font-size:21px !important;
              }
              .fontSizeL{
              font-size:18px !important;
              }
            }
        .desc{
          font-size:25px;
          line-height:1.3 !important;
          vertical-align: middle;      
        }
        
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* --- REMOVED: slideDown, expandCard, slideInLeft/Right/Up, fadeInUp, expandWidth KEYFRAMES --- */
        /* They are replaced by CSS transitions on max-height */

        .image1{
          border-radius:30px !important;
        }
        .gradient-text {
          background: linear-gradient(285.71deg, #3F88BA -4.32%, #161664 106.53%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          font-weight:600;
          font-size:30px;
          line-height:1.2;
          margin-left:25px;
        }

        /* Desktop Version */
        .desktop-version {
          display: block;
        }
        
        .mobile-version {
          display: none;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .desktop-version {
            display: none;
          }
          
          .mobile-version {
            display: block;
          }
          
          .mobile-card-header {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .mobile-card-header:hover {
            transform: translateY(-4px) scale(1.02);
            box-shadow: 0 8px 24px rgba(0,0,0,0.15);
          }
          
          /* --- REMOVED: .mobile-expanded-content animation rule, replaced by inline style transition --- */
        }

        /* Responsive adjustments */
        @media (max-width: 576px) {
          .mobile-card-header {
            padding: 1rem !important;
            min-height: 70px !important;
          }
          .mobile-version {
            padding-top:0 !important;
            padding-bottom:0 !important;
          }
          .mobile-card-header span:first-child {
            font-size: 1.5rem !important;
          }
          
          .mobile-card-header span:nth-child(2) {
            font-size: 18px !important;
          }
        }
      `}</style>
    </>
  );
}

export default CourseCard;