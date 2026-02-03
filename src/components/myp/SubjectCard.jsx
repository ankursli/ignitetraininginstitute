import React, { useState, useEffect } from "react";

export default function SubjectsCard() {
  const subjects = [
    "IB MYP Maths - Standard & Extended",
    "IB MYP Physics",
    "IB MYP Chemistry",
    "IB MYP Biology",
    "IB MYP Computer Science",
    "IB MYP Business Management",
    "IB MYP Economics",
    "IB MYP English Language & Literature",
    "IB MYP French",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 1100);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Auto scroll effect - always moves forward
  useEffect(() => {
    if (!isAutoScrolling || isPaused) return;

    const autoScrollInterval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1); // Always increment, no reset needed
        setIsTransitioning(false);
      }, 300);
    }, 3000);

    return () => clearInterval(autoScrollInterval);
  }, [isAutoScrolling, isPaused]);

  const handlePrevious = () => {
    setIsAutoScrolling(false);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => prev - 1);
      setIsTransitioning(false);
    }, 300);
    setTimeout(() => setIsAutoScrolling(true), 1500);
  };

  const handleNext = () => {
    setIsAutoScrolling(false);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
      setIsTransitioning(false);
    }, 300);
    setTimeout(() => setIsAutoScrolling(true), 1500);
  };

  const handleSubjectClick = (actualIndex) => {
    const currentActualIndex = ((currentIndex % subjects.length) + subjects.length) % subjects.length;
    if (actualIndex === currentActualIndex) return;

    setIsAutoScrolling(false);
    setIsTransitioning(true);
    setTimeout(() => {
      // Calculate the closest direction to reach the target
      let diff = actualIndex - currentActualIndex;
      if (diff > subjects.length / 2) {
        diff -= subjects.length;
      } else if (diff < -subjects.length / 2) {
        diff += subjects.length;
      }
      setCurrentIndex(prev => prev + diff);
      setIsTransitioning(false);
    }, 300);
    setTimeout(() => setIsAutoScrolling(true), 1500);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // Create infinite scroll items with seamless looping
  const createInfiniteItems = () => {
    const items = [];
    const visibleRange = 7; // Show 7 items on each side of center

    for (let i = -visibleRange; i <= visibleRange; i++) {
      const actualIndex = ((currentIndex + i) % subjects.length + subjects.length) % subjects.length;
      const subject = subjects[actualIndex];

      let opacity;
      let scale = 1;

      if (i === 0) {
        opacity = 1;
        scale = 1.08;
      } else if (Math.abs(i) === 1) {
        opacity = 0.6;
        scale = 1;
      } else if (Math.abs(i) === 2) {
        opacity = 0.3;
        scale = 0.95;
      } else {
        opacity = 0.15;
        scale = 0.9;
      }

      items.push({
        key: `${actualIndex}-${currentIndex + i}`,
        actualIndex: actualIndex,
        subject: subject,
        position: i,
        isCenter: i === 0,
        opacity: opacity,
        scale: scale
      });
    }

    return items;
  };

  const visibleItems = createInfiniteItems();

  return (
    <div className={`fade-in-section subjectSection ${isVisible ? 'fade-in' : ''}`} style={{ marginTop: isMobile ? "10px" : "0px", marginBottom: isMobile ? "50px" : "0" }}
      data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat
    >
      <div className="subjectSectionInner">
        {/* Background decorative rectangles */}
        <div className="testimonialRect rect-1" style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '20px' }} />
        <div className="testimonialRect rect-2" style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '20px' }} />
        <div className="testimonialRect rect-3" style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '20px' }} />
        <div className="testimonialRect rect-4" style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '20px' }} />

        {/* LEFT COLUMN */}
        <div className="subjectLeft">
          <span className="subjectHeader">
            <h2 className="SubHeading" style={{ marginBottom: '0px' }}>SUBJECTS WE SUPPORT</h2>
          </span>
          <h3 className="subjectTitle">
            Tutoring That Makes Every IB MYP Subject Clear
          </h3>
        </div>

        {/* RIGHT COLUMN - Fixed Container */}
        <div className="subjectRight" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {/* Navigation Buttons */}
          <button
            className="navButton upButton mt-4"
            onClick={handlePrevious}
            aria-label="Previous subject"
          >
            <img src="/assets/up.webp" alt="ib myp tutor in dubai" width={isMobile ? 40 : 50} height={isMobile ? 40 : 50} />
          </button>

          <button
            className="navButton downButton"
            onClick={handleNext}
            aria-label="Next subject"
          >
            <img src="/assets/down.webp" alt="ib myp tutor in dubai" width={isMobile ? 40 : 50} height={isMobile ? 40 : 50} />
          </button>

          {/* Fixed Container for Infinite Scroll */}
          <div className="fixedScrollContainer">
            <div className="scrollingContent">
              {visibleItems.map(({ key, actualIndex, subject, position, isCenter, opacity, scale }) => (
                <div
                  key={key}
                  className={`scrollItem ${isCenter ? 'center-item' : ''} ${isTransitioning ? 'transitioning' : ''}`}
                  onClick={() => handleSubjectClick(actualIndex)}
                  style={{
                    opacity: opacity,
                    transform: `translateY(${position * (isMobile ? 50 : 60)}px) scale(${scale})`,
                    zIndex: isCenter ? 10 : Math.max(1, 5 - Math.abs(position))
                  }}
                >
                  <h3 className={`subjectBubble ${isCenter ? 'highlighted' : ''}`}>
                    {subject}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .subjectSection {
          width: 100%;
          padding: 0 0;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .subjectSection.fade-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .subjectSectionInner {
          background: linear-gradient(135deg, #1F3C68, #265A90);
          background-size: cover;
          background-position: center;
          padding: 150px 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 90vw;
          margin: 0 auto;
          border-radius: 40px;
          position: relative;
          overflow: hidden;
          min-height: 350px;
        }

        .testimonialRect {
          position: absolute;
          pointer-events: none;
          z-index: 1;
        }
        
        .rect-1 {
          top: 3%;
          left: -8%;
          width: 30vw;
          height: 10vh;
        }

        .rect-2 {
          top: 78%;
          left: -5%;
          width: 16vw;
          height: 10vh;
        }

        .rect-3 {
          bottom: 20%;
          right: -9%;
          width: 13vw;
          height: 10vh;
        }
        .rect-4 {
          top: 4%;
          right: -9%;
          width: 20vw;
          height: 10vh;
        }

        .subjectLeft {
          min-width: 320px;
          max-width: 35%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          margin-left: 40px;
          gap: 18px;
          padding-left: 30px;
          position: relative;
          z-index: 2;
        }

        .subjectHeader {
          font-size: 1.3vw;
          color: white;
          letter-spacing: 2px;
          opacity: 0.9;
          font-weight: 600;
          text-transform: uppercase;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 480px;
        }

        .subjectTitle {
          color: white;
          font-size: 29px;
          font-weight: 700;
          line-height: 1.2;
          text-transform: uppercase;
          max-width: 500px;
          margin: 0;
        }

        .subjectRight {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
          flex: 1;
          min-width: 500px;
          max-width: 65%;
          padding-top: 23px;
        }

        /* Fixed Container for Infinite Scroll */
        .fixedScrollContainer {
          position: relative;
          width: 100%;
          max-width: 700px;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .scrollingContent {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .scrollItem {
          position: absolute;
          width: 100%;
          display: flex;
          justify-content: center;
          cursor: pointer;
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform, opacity;
        }

        .scrollItem.transitioning {
          transition: all 0.6s cubic-bezier(0.4, 0.0, 0.2, 1);
        }

        .subjectBubble {
          color: white;
          font-size: 1.2vw;
          font-weight: 500;
          padding: 17px 40px;
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          user-select: none;
          text-align: center;
          letter-spacing: 0.02em;
          background: transparent;
          white-space: nowrap;
          border-radius: 40px;
          border: 2px solid transparent;
          min-width: 200px;
          max-width: 650px;
          cursor: pointer;
        }

        .subjectBubble:hover:not(.highlighted) {
          background-color: rgba(255, 255, 255, 0.2);
          box-shadow: 2px 2px 5px 0 rgba(31, 60, 104, 0.3);
          transform: scale(1.02);
        }

        .subjectBubble.highlighted {
          background: linear-gradient(90deg, #d0e8ff, #a8cfff) !important;
          color: #0d2344 !important;
          font-weight: 700 !important;
          box-shadow: 0 4px 12px rgba(0,0,0,0.25) !important;
          border: 2px solid #a8cfff !important;
        }

        .navButton {
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          position: absolute;
          z-index: 20;
          font-size: 20px;
        }

        .upButton {
          top: -60px;
          left: 50%;
          transform: translateX(-50%);
        }

        .downButton {
          bottom: -60px;
          left: 50%;
          transform: translateX(-50%);
        }

        .navButton:hover {
          background: rgba(255, 255, 255, 0.3);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateX(-50%) scale(1.05);
        }

        .navButton:active {
          transform: translateX(-50%) scale(0.95);
        }

        @media (max-width: 1280px) {
          .subjectBubble {
            padding: 12px 45px;
          }
          
          .navButton {
            width: 45px;
            height: 45px;
            font-size: 18px;
          }
        }

        @media (max-width: 1199px) {
          .subjectLeft span {
            font-size: 0.9rem !important;
          }

          .subjectTitle {
            width: 358px;
            font-size: 1.2rem !important;
            line-height: 1.4;
          }

          .subjectSectionInner {
            padding: 65px 30px;
          }

          .subjectLeft {
            gap: 5px;
          }

          .subjectBubble {
            padding: 14px 30px;
            font-size: 18px !important;
          }

          .fixedScrollContainer {
            height: 250px;
          }
        }

        @media (max-width: 1100px) {
          .subjectSectionInner {
            flex-direction: column;
            align-items: center;
            gap: 32px;
            padding: 41px 0px 85px 0px;
          }
          
          .subjectLeft {
            margin-left: 0;
            width: 100%;
            align-items: center;
            text-align: center;
            gap: 15px;
            padding: 0 !important;
          }

          .subjectHeader {
            justify-content: center !important;
          }

          .subjectRight {
            width: 100%;
            padding: 60px 0 !important;
            position: relative;
            min-width: auto;
            max-width: 100%;
          }

          .fixedScrollContainer {
            height: 280px;
            max-width: 600px;
          }

          .subjectBubble {
            text-align: center;
            font-size: 14px !important;
            padding: 14px 30px;
          }

          .navButton {
            width: 40px;
            height: 40px;
            font-size: 16px;
          }

          .upButton {
            top: -50px;
          }

          .downButton {
            bottom: -50px;
          }
        }

        @media (max-width: 767px) {
          .subjectBubble {
            padding: 10px 15px 14px 15px !important;
            font-size: 13px !important;
          }
          
          .fixedScrollContainer {
            height: 250px;
          }
          
          .rect-1 {
            top: 3%;
            left: -8%;
            width: 30vw;
            height: 7vh;
          }
          
          .rect-2 {
            display: none;
          }
          .rect-4 {
            display: none;
          }

          .rect-3 {
            bottom: 3%;
            right: -9%;
            width: 31vw;
            height: 7vh;
          }

          .navButton {
            width: 35px;
            height: 35px;
            font-size: 14px;
            margin-top: 34px !important;
          }

          .subjectRight {
            padding: 40px 0 3px 0 !important;
          }

          .upButton {
            top: -40px;
          }

          .downButton {
            bottom: -40px;
          }
        }

        @media (max-width: 575px) {
        .subjectSection {
          padding: 0px 0 ;
margin:0 !important;
        }
        .subjectLeft {
            min-width: 100%;
            gap: 0;
          }
           
            .subjectSection .subjectLeft span{
            line-height: 1.6;
            margin-bottom: 0;
            }
            .subjectTitle{
            padding-top:20px;
            }
          .subjectLeft {
            min-width: 100%;
          }

          .subjectBubble {
            padding: 12px 20px !important;
            white-space: normal;
            text-align: center;
            font-size: 12px !important;
          }
        }

        @media (max-width: 420px) {
          .subjectBubble {
            padding: 10px 20px !important;
            font-size: 12px !important;
          }
          .subjectTitle {
            width: auto;
            font-size: 18px !important;
            line-height: 1.4;
            padding: 0px 10px;
            margin-top: 18px;
          }
        }
      `}</style>
    </div>
  );
}