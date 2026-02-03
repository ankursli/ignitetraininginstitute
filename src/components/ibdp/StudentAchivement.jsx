"use client";
import React, { useState, useRef, useEffect } from "react";
import { BookOpen } from "lucide-react";

const achievements = [
  {
    id: 1,
    logo: "/assets/un1.webp",
    percentage: "98%",
    studentName: "TANIYA SHARMA",
    course: "LOREM IPSUM DOLOR SIT",
    width: 500,
    height: 500,
  },
  {
    id: 2,
    logo: "/assets/un2.webp",
    percentage: "98%",
    studentName: "TANIYA SHARMA",
    course: "LOREM IPSUM DOLOR SIT",
    width: 500,
    height: 500,
  },
  {
    id: 3,
    logo: "/assets/un3.webp",
    percentage: "98%",
    studentName: "TANIYA SHARMA",
    course: "LOREM IPSUM DOLOR SIT",
    width: 1600,
    height: 900,
  },
];

export default function StudentAchievements() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setIsMobile(true);
        setVisibleCards(1);
      } else if (width < 1367) {
        setIsMobile(false);
        setVisibleCards(2);
      } else if (width < 1368) {
        setIsMobile(false);
        setVisibleCards(3);
      } else {
        setIsMobile(false);
        setVisibleCards(3);
      }
    };

    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const handlePrev = () => {
    setCurrentIndex(prev =>
      prev === 0 ? achievements.length - visibleCards : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(prev =>
      prev >= achievements.length - visibleCards ? 0 : prev + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const getVisibleAchievements = () => {
    let cards = [];
    for (let i = 0; i < visibleCards; i++) {
      const index = (currentIndex + i) % achievements.length;
      cards.push(achievements[index]);
    }
    return cards;
  };

  return (
    <div
      className="w-100 fade-in-section zoom-responsive"
      data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat
      style={{ animationDelay: "0.1s", maxWidth: "90vw", margin: "95px auto 70px auto" }}
    >
      <div className="container px-4">
        {/* Header Section */}
        <div
          className="text-center mb-5 fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
          style={{ animationDelay: "0.15s" }}
        >
          {/* Gradient subtitle with lines */}
          <div
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="SubHeading testSubheading">Student Achivements
            </div>
          </div>

          {/* Main title */}
          <h2
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section testTitle"
            style={{ animationDelay: "0.2s" }}
          >
            LOREM IPSUM DOLOR SIT AMET,
            <span className="highlight"> CONSECTETUR </span>ADIPISCING
          </h2>
        </div>

        {/* Slider Section */}
        <div
          className="position-relative fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
          style={{ animationDelay: "0.35s" }}
        >
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="btn position-absolute d-flex align-items-center justify-content-center border-0 fade-in-section arrow-button"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{
              width: isMobile ? "36px" : "48px",
              height: isMobile ? "36px" : "48px",
              left: isMobile ? "-30px" : "-45px",
              top: "37%",
              transform: "translateY(-50%)",
              zIndex: 10,
              color: "white",
              animationDelay: "0.4s"
            }}
          >
            <img
              src="/assets/lar.webp"
              alt="ibdp tutor in dubai"
              width={isMobile ? 32 : 40}
              height={isMobile ? 32 : 40}
              className="arrow-img"
            />
          </button>

          {/* Cards Container */}
          <div
            ref={sliderRef}
            className="d-flex gap-4 justify-content-center cards-container"
            style={{
              width: "100%",
              cursor: isDragging ? "grabbing" : "grab",
              scrollBehavior: "smooth",
              overflowX: "hidden",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          >
            {/* Show cards based on visibleCards */}
            {getVisibleAchievements().map((achievement, index) => (
              <div
                key={`${achievement.id}-${currentIndex}`}
                className="rounded-4 text-center position-relative flex-shrink-0 achievement-card"
                style={{
                  minWidth: isMobile ? "240px" : "380px",
                  height: isMobile ? "360px" : "520px",
                  backgroundColor: "#FFFFFF",
                  transition: "all 0.3s ease",
                  overflow: "hidden",
                }}
              >
                {/* Logo Background Area */}
                <div
                  className="position-relative d-flex align-items-center justify-content-center logo-bg"
                  style={{
                    height: isMobile ? "256px" : "390px",
                    width: "100%",
                    backgroundImage: "url('/assets/Subtract1.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "1.5rem",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="logo-container"
                    style={{
                      position: "relative",
                      width: isMobile ? "200px" : "320px",
                      height: isMobile ? "200px" : "290px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <img
                      src={achievement.logo}
                      alt="ibdp tutor in dubai"
                      className="logo-img"
                      width={achievement.width}
                      height={achievement.height}
                      style={{
                        width: isMobile ? "90%" : "100%",
                        height: isMobile ? "90%" : "100%",
                        objectFit: "contain",
                        padding: "8px",
                        marginBottom: isMobile ? "24px" : "24px",
                        mixBlendMode: "multiply",
                      }}
                    />
                  </div>

                  {/* Percentage positioned in the cutout */}
                  <div
                    className="position-absolute fw-bold d-flex align-items-center percentage-text"
                    style={{
                      bottom: isMobile ? "-18px" : "0px",
                      right: isMobile ? "24px" : "0px",
                      marginBottom: isMobile ? "8px" : "16px",
                      height: "70px",
                      fontSize: isMobile ? "32px" : "68px",
                      fontWeight: "800",
                      paddingLeft: "6px",
                      paddingRight: "6px",
                      background: "linear-gradient(90deg,#161664, #3F88BA)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      zIndex: 3
                    }}
                  >
                    {achievement.percentage}
                  </div>
                </div>

                {/* Content Area */}
                <div
                  className="p-3 card-content"
                  style={{
                    height: "140px",
                  }}
                >
                  <div className="mb-2">
                    <h4
                      className="fw-bold mb-0 text-start student-name"
                      style={{
                        background: "linear-gradient(90deg, #00A491, #003E37)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        fontSize: isMobile ? "20px" : "32px",
                        letterSpacing: "0.4px",
                        textAlign: "left"
                      }}
                    >
                      {achievement.studentName}
                    </h4>
                  </div>

                  {/* Course with border */}
                  <div className="pt-2 border-top border-bottom pb-2 border-secondary course-section">
                    <div className="d-flex align-items-center gap-2">
                      <BookOpen size={isMobile ? 16 : 18} className="course-icon" />
                      <span
                        className="fw-semibold course-text"
                        style={{
                          fontSize: isMobile ? "14px" : "20px",
                          letterSpacing: "0.4px",
                          background: "linear-gradient(90deg,#161664, #3F88BA)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {achievement.course}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="btn position-absolute d-flex align-items-center justify-content-center border-0 fade-in-section arrow-button"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{
              width: isMobile ? "36px" : "48px",
              height: isMobile ? "36px" : "48px",
              right: isMobile ? "-30px" : "-45px",
              top: "37%",
              transform: "translateY(-50%)",
              zIndex: 10,
              color: "white",
              animationDelay: "1.1s"
            }}
          >
            <img
              src="/assets/rar.webp"
              alt="ibdp tutor in dubai"
              width={isMobile ? 32 : 40}
              height={isMobile ? 32 : 40}
              className="arrow-img"
            />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="d-flex justify-content-center mt-4 gap-2 d-md-none nav-dots">
          {Array.from({ length: achievements.length - visibleCards + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="border-0 nav-dot"
              style={{
                width: currentIndex === index ? "20px" : "8px",
                height: "2px",
                borderRadius: "999px",
                backgroundColor: currentIndex === index ? "gray" : "#d1d5db",
                transition: "all 0.3s ease",
                transform: currentIndex === index ? "scale(1.2)" : "scale(1)"
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-in-section.is-inview {
          opacity: 1;
          transform: translateY(0);
        }

        /* Media query to detect 125% zoom and reduce sizes by 25% */
        @media screen and (-webkit-device-pixel-ratio: 1.25), 
               screen and (min-resolution: 120dpi) {
          .zoom-responsive {
            transform: scale(0.8);
            transform-origin: center top;
          }
          
          .achievement-card {
            min-width: ${isMobile ? "192px" : "304px"} !important;
            height: ${isMobile ? "288px" : "416px"} !important;
          }
          
          .logo-bg {
            height: ${isMobile ? "205px" : "312px"} !important;
          }
          
          .logo-container {
            width: ${isMobile ? "160px" : "256px"} !important;
            height: ${isMobile ? "160px" : "232px"} !important;
          }
          
          .percentage-text {
            font-size: ${isMobile ? "26px" : "54px"} !important;
            height: 56px !important;
            bottom: ${isMobile ? "-14px" : "0px"} !important;
            right: ${isMobile ? "19px" : "0px"} !important;
            margin-bottom: ${isMobile ? "6px" : "13px"} !important;
          }
          
          .card-content {
            height: 112px !important;
          }
          
          .student-name {
            font-size: ${isMobile ? "16px" : "26px"} !important;
            letter-spacing: 0.32px !important;
          }
          
          .course-text {
            font-size: ${isMobile ? "11px" : "16px"} !important;
            letter-spacing: 0.32px !important;
          }
          
          .arrow-button {
            width: ${isMobile ? "29px" : "38px"} !important;
            height: ${isMobile ? "29px" : "38px"} !important;
          }
          
          .arrow-button:first-of-type {
            left: ${isMobile ? "-24px" : "-36px"} !important;
          }
          
          .arrow-button:last-of-type {
            right: ${isMobile ? "-24px" : "-36px"} !important;
          }
          
          .arrow-img {
            width: ${isMobile ? "26px" : "32px"} !important;
            height: ${isMobile ? "26px" : "32px"} !important;
          }
          
          .nav-dot {
            height: 1.6px !important;
          }
          
          .nav-dot:not([style*="width: 8px"]) {
            width: 16px !important;
          }
          
          .nav-dot[style*="width: 8px"] {
            width: 6px !important;
          }
        }
      `}</style>
    </div>
  );
}