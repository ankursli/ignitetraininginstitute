import React, { useEffect, useState } from "react";

export default function Timeline() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeYear, setActiveYear] = useState(2020);

  // Timeline data
  const timelineData = [
    {
      year: 2015,
      description:
        "Ignite was established with a mission to redefine tutoring through personalized academic support. This foundational year set the stage for a student-first approach, rooted in excellence, empathy, & progress.",
    },
    {
      year: 2018,
      description:
        "Within just three years, we completed 8000+ hours of impactful tutoring across subjects & levels. This achievement reflected the growing trust of families in UAE & our unwavering commitment to student success.",
    },
    {
      year: 2020,
      description:
        "With the opening of our learning center in JLT, Dubai, we brought our vision physically closer to students. These centers became dynamic hubs for academic growth, mentorship, & consistent support.",
    },
    {
      year: 2021,
      description:
        "We launched our Homeschooling (Private Candidacy Programme), giving students greater flexibility, expert guidance, & the freedom to learn on their terms. This initiative opened new pathways for academic success.",
    },
    {
      year: 2022,
      description:
        "We expanded our support through University Pathways guidance & Academic Consultations, helping students make informed academic choices, plan effectively with clarity, & prepare confidently for their future.",
    },
    {
      year: 2025,
      description:
        "Our growing team of trainers has empowered more students than ever, enabling more diverse learning support. With over 100,000+ teaching hours delivered, we remain committed to shaping the students' academic progress.",
    },
  ];

  // 1. Effect for mobile view detection
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 2. 🔄 New Effect for Automatic Year Cycling (5 seconds)
  useEffect(() => {
    // Find the index of the currently active year
    const currentIndex = timelineData.findIndex(item => item.year === activeYear);

    // Calculate the index for the next year (wraps around using modulo)
    const nextIndex = (currentIndex + 1) % timelineData.length;
    const nextYear = timelineData[nextIndex].year;

    // Set a timer to update the active year after 5000 milliseconds (5 seconds)
    const timer = setTimeout(() => {
      setActiveYear(nextYear);
    }, 5000); // 5000ms = 5 seconds

    // Cleanup function: clears the timeout when the component unmounts or activeYear changes
    return () => clearTimeout(timer);
  }, [activeYear, timelineData]); // Reruns the effect whenever activeYear changes

  const handleYearClick = (year) => {
    setActiveYear(year);
  };

  const getCurrentData = () => {
    return timelineData.find(item => item.year === activeYear) || timelineData[1];
  };

  return (
    <section className="timeline-section">
      <div className="container">
        {/* Header */}
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
            <h2 className="SubHeading testSubheading">Our Timeline
            </h2>
          </div>

          <h3
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section testTitle"
            style={{ animationDelay: "0.2s" }}
          >
            With Every Step Forward, We've Grown With
            <span className="highlight"> Our Students</span>
          </h3>
        </div>

        {/* Timeline Content */}
        <div className="timeline-content fade-in-section"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat>
          {/* Background Years - Hidden on mobile */}
          <div className="background-years d-none d-md-block">
            <span className="bg-year left">{activeYear - 1}</span>
            <span className="bg-year right">{activeYear + 1}</span>
          </div>

          {/* Mobile Timeline - Vertical Layout */}
          <div className="mobile-timeline d-md-none">
            {timelineData.map((item, index) => (
              <div
                key={item.year}
                className={`timeline-item ${index === 0 ? 'first' : ''} ${item.year === activeYear ? 'active' : ''} ${index === timelineData.length - 1 ? 'last' : ''}`}
                onClick={() => handleYearClick(item.year)}
              >
                <h3 className={`year-marker ${item.year === activeYear ? 'main' : ''}`}>
                  {item.year}
                </h3>
                {item.year === activeYear && (
                  <p className="timeline-description">
                    {item.description}
                  </p>
                )}
              </div>
            ))}

            {/* Timeline Line */}
            <div className="timeline-vertical-line"></div>
          </div>

          {/* Desktop Timeline - Horizontal Layout */}
          <div className="desktop-timeline d-none d-md-block">
            {/* Main Year */}
            <div className="main-year-container">
              <h3 className="main-year">{activeYear}</h3>
              <p className="timeline-description">
                {getCurrentData().description}
              </p>
            </div>

            {/* Timeline Line with Dots */}
            <div className="timeline-line-container">
              <div className="timeline-line">
                {timelineData.map((item, index) => (
                  <div
                    key={item.year}
                    className={`timeline-segment ${item.year === activeYear ? 'active' : ''}`}
                    onClick={() => handleYearClick(item.year)}
                  >
                    <div className={`timeline-dot ${item.year === activeYear ? 'filled' : ''}`}>
                      <h3 className="year-label">{item.year}</h3>
                    </div>
                    {index < timelineData.length - 1 && (
                      <div className="timeline-connector"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .timeline-section {
          overflow: hidden;
          position: relative;
        }

        /* Header Styles */
        .subtitle {
          color: #6c757d;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .main-title {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
          color: #2c3e50;
          font-family: "Arial", sans-serif;
        }

        .highlight {
          color: #00a67d;
        }

        /* Timeline Content */
        .timeline-content {
          position: relative;
          padding: 0.2rem 0;
        }

        /* Background Years */
        .background-years {
          position: absolute;
          width: 100%;
          top: 0;
          left: 0;
          z-index: 1;
          transition: all 0.5s ease;
        }

        .bg-year {
          position: absolute;
          font-size: 8rem;
          font-weight: 700;
          color: #c8e6d3;
          opacity: 0.6;
          top: -2rem;
          user-select: none;
          transition: all 0.5s ease;
        }

        .bg-year.left {
          left: -2rem;
        }

        .bg-year.right {
          right: -2rem;
        }

        /* Main Year */
        .main-year-container {
          text-align: center;
          position: relative;
          z-index: 2;
          margin-bottom: 4rem;
        }

        .main-year {
          font-size: 12rem;
          font-weight: 700;
          color: #2c5aa0;
          margin: 0;
          line-height: 0.8;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
          transition: all 0.5s ease;
        }

        .timeline-description {
          max-width: 600px;
          margin: 2rem auto 0;
          color: #233467;
          font-size: 16px;
          line-height: 1.6;
          text-align: center;
          transition: all 0.3s ease;
        }

        /* Timeline Line */
        .timeline-line-container {
          display: flex;
          justify-content: center;
          margin-top: 3rem;
          position: relative;
          z-index: 2;
        }

        .timeline-line {
          display: flex;
          align-items: center;
          width: 100%;
          max-width: 600px;
          position: relative;
        }

        .timeline-segment {
          flex: 1;
          display: flex;
          align-items: center;
          position: relative;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .timeline-segment:hover {
          transform: translateY(-2px);
        }

        .timeline-dot {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 3px solid #2c5aa0;
          background-color: #ffffff;
          position: relative;
          z-index: 3;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .timeline-dot:hover {
          transform: scale(1.2);
          border-width: 4px;
        }

        .timeline-dot.filled {
          background-color: #2c5aa0;
          transform: scale(1.3);
          box-shadow: 0 0 15px rgba(44, 90, 160, 0.4);
        }

        .year-label {
          position: absolute;
          top: -35px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 14px;
          font-weight: 600;
          color: #2c5aa0;
          white-space: nowrap;
          opacity: 0;
          transition: all 0.3s ease;
          background: white;
          padding: 4px 8px;
          border-radius: 4px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .timeline-segment:hover .year-label,
        .timeline-segment.active .year-label {
          opacity: 1;
          top: -40px;
        }

        .timeline-connector {
          flex: 1;
          height: 3px;
          background-color: #e0e0e0;
          margin-left: 0;
          transition: all 0.3s ease;
        }

        .timeline-segment.active .timeline-connector {
          background-color: #2c5aa0;
        }

        /* Progressive line filling */
        .timeline-segment:nth-child(1).active ~ .timeline-segment .timeline-connector,
        .timeline-segment:nth-child(2).active ~ .timeline-segment .timeline-connector,
        .timeline-segment:nth-child(3).active ~ .timeline-segment .timeline-connector,
        .timeline-segment:nth-child(4).active ~ .timeline-segment .timeline-connector {
          background-color: #e0e0e0;
        }

        .timeline-segment:nth-child(1).active .timeline-connector {
          background-color: #2c5aa0;
        }

        .timeline-segment:nth-child(1).active ~ .timeline-segment:nth-child(2) .timeline-connector,
        .timeline-segment:nth-child(2).active .timeline-connector {
          background-color: #2c5aa0;
        }

        .timeline-segment:nth-child(1).active ~ .timeline-segment:nth-child(2) ~ .timeline-segment:nth-child(3) .timeline-connector,
        .timeline-segment:nth-child(2).active ~ .timeline-segment:nth-child(3) .timeline-connector,
        .timeline-segment:nth-child(3).active .timeline-connector {
          background-color: #2c5aa0;
        }
        
        .timeline-segment:nth-child(1).active ~ .timeline-segment:nth-child(2) ~ .timeline-segment:nth-child(3) ~ .timeline-segment:nth-child(4) .timeline-connector,
        .timeline-segment:nth-child(2).active ~ .timeline-segment:nth-child(3) ~ .timeline-segment:nth-child(4) .timeline-connector,
        .timeline-segment:nth-child(3).active ~ .timeline-segment:nth-child(4) .timeline-connector,
        .timeline-segment:nth-child(4).active .timeline-connector {
          background-color: #2c5aa0;
        }
        
        /* Mobile Timeline Styles */
        .mobile-timeline {
          position: relative;
          padding: 2rem 0;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
          padding-left: 3rem;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .timeline-item:hover {
          transform: translateX(5px);
        }

        .timeline-item.first {
          margin-top: 1.5rem;
        }

        .timeline-item.last {
          margin-bottom: 1.5rem;
        }

        .year-marker {
          font-size: 3rem;
          font-weight: 700;
          color: #c8e6d3;
          margin-bottom: 0.5rem;
          position: relative;
          z-index: 2;
          opacity: 0.7;
          text-align: center;
          margin-left: -3rem;
          width: calc(100% + 3rem);
          transition: all 0.3s ease;
        }

        .year-marker.main {
          font-size: 5rem;
          color: #2c5aa0;
          opacity: 1;
          margin-bottom: 1.5rem;
        }

        .timeline-vertical-line {
          position: absolute;
          left: 1.5rem;
          top: 2.5rem;
          bottom: 2.5rem;
          width: 3px;
          background: linear-gradient(
            to bottom,
            #2c5aa0 0%,
            #2c5aa0 40%,
            #e0e0e0 40%,
            #e0e0e0 100%
          );
          z-index: 1;
          transition: all 0.5s ease;
        }

        .timeline-item::before {
          content: "";
          position: absolute;
          left: 1.3rem;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background-color: #ffffff;
          border: 3px solid #2c5aa0;
          z-index: 2;
          transition: all 0.3s ease;
        }

        .timeline-item:hover::before {
          transform: scale(1.1);
        }

        .timeline-item.first::before {
          top: 1rem;
        }

        .timeline-item.active::before {
          background-color: #2c5aa0;
          top: 2.8rem;
          transform: scale(1.2);
          box-shadow: 0 0 15px rgba(44, 90, 160, 0.4);
        }

        .timeline-item.last::before {
          top: 1rem;
        }

        /* Responsive Styles */
        @media (max-width: 992px) {
          .main-year {
            font-size: 10rem;
          }

          .bg-year {
            font-size: 6rem;
          }
        }

        @media (max-width: 768px) {
          .main-title {
            font-size: 2rem;
          }

          .main-year {
            font-size: 7rem;
          }

          .bg-year {
            font-size: 5rem;
            top: -1rem;
          }

          .bg-year.left {
            left: -1rem;
          }

          .bg-year.right {
            right: -1rem;
          }

          .timeline-description {
            font-size: 15px;
            padding: 0 1.5rem;
            margin-top: 1.5rem;
          }

          .timeline-line {
            max-width: 400px;
          }

          .main-year-container {
            margin-bottom: 3rem;
          }

          .year-marker {
            font-size: 2.5rem;
          }

          .year-marker.main {
            font-size: 4rem;
          }
        }

        @media (max-width: 576px) {
          .timeline-section{
            padding-top:0 !important;
            padding-bottom:0 !important;
          }
          .main-title {
            font-size: 1.6rem;
          }
          .text-center{
            margin-bottom:0 !important;
          }
          .timeline-content{
            padding:0;
          }
          .subtitle {
            font-size: 12px;
          }

          .timeline-description {
            font-size: 14px;
            padding: 0 1rem;
            margin-top: 1rem;
          }

          .timeline-item {
            padding-left: 2.5rem;
          }

          .year-marker {
            font-size: 2.2rem;
            margin-left: -2.5rem;
            width: calc(100% + 2.5rem);
          }

          .year-marker.main {
            font-size: 3.5rem;
          }

          .timeline-vertical-line {
            left: 1.2rem;
            top: 2rem;
            bottom: 2rem;
          }

          .timeline-item::before {
            left: 1rem;
            width: 20px;
            height: 20px;
          }

          .timeline-item.first::before {
            top: 0.8rem;
          }

          .timeline-item.active::before {
            top: 2.5rem;
          }

          .timeline-item.last::before {
            top: 0.8rem;
          }
        }

        @media (max-width: 400px) {
          .main-title {
            font-size: 1.4rem;
          }

          .timeline-item {
            padding-left: 2.2rem;
            margin-bottom: 2.5rem;
          }

          .year-marker {
            font-size: 2rem;
            margin-left: -2.2rem;
            width: calc(100% + 2.2rem);
          }

          .year-marker.main {
            font-size: 3rem;
          }

          .timeline-vertical-line {
            left: 1.2rem;
            top: 4.2rem;
            bottom: 7rem;
          }

          .timeline-item::before {
            left: 0.8rem;
            width: 18px;
            height: 18px;
          }

          .timeline-item.first::before {
            top: 0.7rem;
          }

          .timeline-item.active::before {
            top: 2.2rem;
          }

          .timeline-item.last::before {
            top: 0.7rem;
          }
        }
      `}</style>
    </section>
  );
}
