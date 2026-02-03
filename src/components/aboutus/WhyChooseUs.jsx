import React, { useEffect, useState, useRef } from "react";

export default function WhyChooseUs() {
  const [isMobile, setIsMobile] = useState(false);

  // State for the two counters
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // Ref to observe for intersection
  const sectionRef = useRef(null);
  // State to prevent re-animation on re-scroll
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const currentRef = sectionRef.current;

    // Check if the section ref exists and if animation has not run yet
    if (!currentRef || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            // Start the counter animation when the section is visible
            startCounterAnimation();
            setHasAnimated(true); // Set state to true to prevent re-animation
            observer.unobserve(currentRef); // Stop observing after animation starts
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    observer.observe(currentRef);

    // Cleanup function
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]); // Re-run effect only if hasAnimated state changes

  const startCounterAnimation = () => {
    const target1 = 93;
    const target2 = 90;
    const duration = 1500; // 1.5 seconds for animation
    const stepTime = 10; // milliseconds

    // Calculate the increment for each step
    const increment1 = target1 / (duration / stepTime);
    const increment2 = target2 / (duration / stepTime);

    let currentCount1 = 0;
    let currentCount2 = 0;

    const interval = setInterval(() => {
      currentCount1 = Math.min(currentCount1 + increment1, target1);
      currentCount2 = Math.min(currentCount2 + increment2, target2);

      // Update state
      setCount1(Math.round(currentCount1));
      setCount2(Math.round(currentCount2));

      // Stop the interval once both counters reach their targets
      if (currentCount1 >= target1 && currentCount2 >= target2) {
        clearInterval(interval);
      }
    }, stepTime);
  };

  return (
    <>
      {/* Attach ref to the main section */}
      {!isMobile ? (
        <section ref={sectionRef} className="why-choose-section">
          <div className="container">
            <div className="row align-items-center">
              {/* Left side - Image */}
              <div className="col-lg-6 col-md-6 mb-4 mb-md-0 order-2 order-md-1 fade-in-section"
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat>
                <div className="image-container">
                  <div className="cutout-wrapper">
                    <img
                      src="/assets/Artboard.webp"
                      alt="about ignite"
                      className="cutout-img"
                      width={1476}
                      height={1476}
                    />
                  </div>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="col-lg-6 col-md-6 order-1 order-md-2">
                <div className="content-section">
                  <div className=" mb-3">
                    <h2 className="SubHeading testSubheading fade-in-section"
                      data-scroll
                      data-scroll-class="is-inview"
                      data-scroll-repeat>
                      WHY CHOOSE US?
                    </h2>
                    <h3
                      data-scroll
                      data-scroll-class="is-inview"
                      data-scroll-repeat="true"
                      className="fade-in-section testTitle"
                      style={{ animationDelay: "0.2s" }}
                    >
                      A Legacy Of Success Built On Trust &
                      <span className="highlight"> Learning</span>
                    </h3>
                  </div>

                  <p className="description text-center text-md-start fade-in-section"
                    data-scroll
                    data-scroll-class="is-inview"
                    data-scroll-repeat>
                    With expert trainers & tailored methods, we help students grow with purpose & confidently excel in every step of their journey. We ensure every session drives clarity, progress, & measurable growth.
                  </p>

                  {/* Statistics */}
                  <div className="row mt-4 fade-in-section"
                    data-scroll
                    data-scroll-class="is-inview"
                    data-scroll-repeat>
                    <div className="col-6">
                      <div className="stat-card">
                        <div className="circular-progress">
                          <svg
                            className="progress-ring"
                            width="220"
                            height="220"
                            viewBox="0 0 120 120"
                          >
                            <defs>
                              <linearGradient
                                id="greenGradient"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="100%"
                              >
                                <stop offset="0%" stopColor="#00A491" />
                                <stop offset="100%" stopColor="#003E37" />
                              </linearGradient>
                            </defs>

                            <circle
                              className="progress-ring-circle"
                              stroke="#e6f3f0"
                              strokeWidth="8"
                              fill="transparent"
                              r="52"
                              cx="60"
                              cy="60"
                            />
                            <circle
                              className="progress-ring-circle progress-ring-progress"
                              stroke="url(#greenGradient)"
                              strokeWidth="8"
                              fill="transparent"
                              r="52"
                              cx="60"
                              cy="60"
                              strokeDasharray="327"
                              strokeDashoffset="32.7"
                              strokeLinecap="round"
                            />
                          </svg>

                          <div className="progress-text">
                            {/* Display the animated counter value */}
                            <span className="percentage">{count1}%</span>
                          </div>
                        </div>
                        <div className="stat-label">
                          <strong>Target Grades</strong>
                          <br />
                          <strong> Achieved</strong>
                        </div>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="stat-card">
                        <div className="circular-progress">
                          <svg
                            className="progress-ring"
                            width="220"
                            height="220"
                            viewBox="0 0 120 120"
                          >
                            <defs>
                              <linearGradient
                                id="progressGradient"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="100%"
                                gradientTransform="rotate(285.71)"
                              >
                                <stop offset="-4.32%" stopColor="#3F88BA" />
                                <stop offset="106.53%" stopColor="#161664" />
                              </linearGradient>
                            </defs>

                            <circle
                              className="progress-ring-circle"
                              stroke="#e8f0f5"
                              strokeWidth="8"
                              fill="transparent"
                              r="52"
                              cx="60"
                              cy="60"
                            />
                            <circle
                              className="progress-ring-circle progress-ring-progress"
                              stroke="url(#progressGradient)"
                              strokeWidth="8"
                              fill="transparent"
                              r="52"
                              cx="60"
                              cy="60"
                              strokeDasharray="327"
                              strokeDashoffset="32.7"  // 90% filled
                              strokeLinecap="round"
                            />
                          </svg>

                          <div className="progress-text">
                            {/* Display the animated counter value */}
                            <span className="percentage1">{count2}%</span>
                          </div>
                        </div>
                        <div className="stat-label text-uppercase">
                          <strong>Student Referrals</strong>
                          <br />
                          <strong> Rate</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ... all your existing style blocks ... */}
          <style jsx>{`
            .image-container {
              position: relative;
              width: 100%;
              height: auto;
            }
 .testTitle {
  font-size: 2rem;
  font-weight: 700;
  max-width: 100%;
  color: var(--blue-color);
  margin: 40px auto;
  line-height: 1.2;
  text-transform: uppercase;
}

            .cutout-wrapper {
              filter: drop-shadow(0 15px 35px rgba(0, 0, 0, 0.2));
              border-radius: 25px;
              overflow: visible;
            }

            .cutout-img {
              width: 100%;
              height: auto;
              display: block;
            }

            .content-section {
              padding-left: 2rem;
            }
            .percentage1 {
              font-size: 50px;
              line-height: 25px;
              font-weight: 700;

              background: linear-gradient(135deg, #3f88ba, #161664);
              background-clip: text;
              -webkit-background-clip: text;
              color: transparent;
              -webkit-text-fill-color: transparent;
            }

            .description {
              color: #233467;
              font-size: 23px;
              // line-height: 36px;
              margin-bottom: 2rem;
            }

            .stat-card {
              text-align: center;
            }

            .circular-progress {
              position: relative;
              display: inline-block;
              margin-bottom: 1rem;
            }

            .progress-ring {
              transform: rotate(-90deg);
            }

            .progress-ring-circle {
              transition: stroke-dashoffset 0.35s;
              transform-origin: 50% 50%;
            }

            .progress-ring-progress {
              animation: progressAnimation 1.5s ease-in-out forwards;
            }

            .progress-text {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
            .percentage {
              font-size: 50px;
              line-height: 25px;
              font-weight: 700;

              background: linear-gradient(135deg, #00a491, #003e37);
              background-clip: text;
              -webkit-background-clip: text;
              color: transparent;
              -webkit-text-fill-color: transparent;
            }

            .stat-label {
              font-size: 25px;
              line-height: 25px;
              letter-spacing: 5%;
              font-weight: 600;
              text-transform: uppercase;

              background: linear-gradient(
                  285.71deg,
                  #3f88ba -4.32%,
                  #161664 106.53%
                ),
                linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
              background-clip: text;
              -webkit-background-clip: text;
              color: transparent;
              -webkit-text-fill-color: transparent;
            }

            .stat-label:first-child {
              color: #00a67d;
            }

            @keyframes progressAnimation {
              0% {
                stroke-dashoffset: 327;
              }
            }

            @media (max-width: 768px) {
              .content-section {
                padding-left: 0;
                text-align: center;
              }

              .stat-card {
                margin-bottom: 1.5rem;
              }

              .description {
                text-align: center;
                font-size: 15px;
                padding: 0 10px;
              }
            }
                   @media (min-width: 1536px) and (max-width: 1919px) {
                  .legacy-heading {
        font-size: 2rem !important;
  }
        .description{
        font-size: 20px !important;
        }
        .stat-label{
    font-size: 20px;
          }
     .testTitle {
  font-size: 1.8rem;
  font-weight: 700;
  max-width: 100%;
  color: var(--blue-color);
  margin: 40px auto;
  line-height: 1.2;
  text-transform: uppercase;
}
          }
                  @media (min-width: 1200px) and (max-width: 1535px) {
                                    .legacy-heading {
        font-size: 1.7rem !important;
  }
        .description{
        font-size: 17px !important;
        }
                .stat-label{
    font-size: 19px;
          }
          }
          `}</style>
        </section>
      ) : (
        <section ref={sectionRef} className="why-choose-section py-5">
          <div className="container">
            <div className="row align-items-center">
              {/* Left side - Image */}
              <div className="col-lg-6 col-md-6 mb-4 mb-md-0 order-2 order-md-1">
                <div className="image-container">
                  <div className="cutout-wrapper">
                    <img
                      src={
                        isMobile
                          ? "/assets/moabroad.webp"
                          : "/assets/Artboard.webp"
                      }
                      alt="about ignite"
                      className="cutout-img"
                      width={isMobile ? 2073 : 1476}
                      height={isMobile ? 2532 : 1476}
                    />
                  </div>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="col-lg-6 col-md-6 order-1 order-md-2">
                <div className="content-section">
                  <div className="text-center mb-5">
                    <div className="SubHeading testSubheading fade-in-section"
                      data-scroll
                      data-scroll-class="is-inview"
                      data-scroll-repeat>
                      WHY CHOOSE US?
                    </div>
                    <h2
                      data-scroll
                      data-scroll-class="is-inview"
                      data-scroll-repeat="true"
                      className="fade-in-section testTitle"
                    // style={{ animationDelay: "0.2s" }}
                    >
                      LOREM IPSUM DOLOR SIT AMET,
                      CONSECTETUR <span className="highlight">ADIPISCING</span>
                    </h2>
                  </div>

                  <p className="description text-center text-md-start fade-in-section"
                    data-scroll
                    data-scroll-class="is-inview"
                    data-scroll-repeat>
                    Choosing us means partnering with experienced coaches who
                    are dedicated to unlocking your potential. We offer
                    personalized strategies, proven methods, and unwavering
                    support to help you navigate challenges.
                  </p>

                  {/* Statistics - Always show but control visibility with CSS */}
                  <div
                    className={`stats-container ${isMobile ? "d-none" : ""}`}
                  >
                    <div className="row mt-4 fade-in-section"
                      data-scroll
                      data-scroll-class="is-inview"
                      data-scroll-repeat>
                      <div className="col-6">
                        <div className="stat-card">
                          <div className="circular-progress">
                            <svg
                              className="progress-ring"
                              width="120"
                              height="120"
                            >
                              <circle
                                className="progress-ring-circle"
                                stroke="#e6f3f0"
                                strokeWidth="8"
                                fill="transparent"
                                r="52"
                                cx="60"
                                cy="60"
                              />
                              <circle
                                className="progress-ring-circle progress-ring-progress"
                                stroke="#00a67d"
                                strokeWidth="8"
                                fill="transparent"
                                r="52"
                                cx="60"
                                cy="60"
                                strokeDasharray="327"
                                strokeDashoffset="32.7"
                                strokeLinecap="round"
                              />
                            </svg>
                            <div className="progress-text">
                              {/* Display the animated counter value */}
                              <span className="percentage">{count1}%</span>
                            </div>
                          </div>
                          <div className="stat-label">
                            <strong>CLIENT SUCCESS</strong>
                            <br />
                            <strong>RATINGS</strong>
                          </div>
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="stat-card">
                          <div className="circular-progress">
                            <svg
                              className="progress-ring"
                              width="120"
                              height="120"
                            >
                              <circle
                                className="progress-ring-circle"
                                stroke="#e8f0f5"
                                strokeWidth="8"
                                fill="transparent"
                                r="52"
                                cx="60"
                                cy="60"
                              />
                              <circle
                                className="progress-ring-circle progress-ring-progress"
                                stroke="#4a69bd"
                                strokeWidth="8"
                                fill="transparent"
                                r="52"
                                cx="60"
                                cy="60"
                                strokeDasharray="327"
                                strokeDashoffset="114.45"
                                strokeLinecap="round"
                              />
                            </svg>
                            <div className="progress-text">
                              {/* Display the animated counter value */}
                              <span className="percentage">{count2}%</span>
                            </div>
                          </div>
                          <div className="stat-label">
                            <strong>PROJECT</strong>
                            <br />
                            <strong>COMPLETED RATIO</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ... all your existing style blocks ... */}
          <style jsx>{`
            .image-container {
              position: relative;
              width: 100%;
              height: auto;
            }

            .cutout-wrapper {
              filter: drop-shadow(0 15px 35px rgba(0, 0, 0, 0.2));
              border-radius: 25px;
              overflow: visible;
            }
                .testTitle {
        max-width: 600px;
        font-size: 16px !important;
        margin: 20px auto;
        max-width: 73%;
    }
            /* Base image styling */
            .cutout-img {
              width: 100%;
              height: auto;
              object-fit: cover;
            }

            /* DESKTOP: Larger image */
            @media (min-width: 768px) {
              .cutout-img {
                width: 100%;
                max-width: 100%;
                max-height: 550px; /* increase height */
              }

              .image-container {
                height: auto;
              }
            }

            .content-section {
              padding-left: 1rem;
            }

            @media (max-width: 768px) {
              .content-section {
                padding-left: 0; /* keep mobile tight */
                text-align: center;
              }
            }

            .description {
              color: #6c757d;
              font-size: 16px;
              line-height: 1.6;
              margin-bottom: 2rem;
            }

            .stat-card {
              text-align: center;
            }

            .circular-progress {
              position: relative;
              display: inline-block;
              margin-bottom: 1rem;
            }

            .progress-ring {
              transform: rotate(-90deg);
            }

            .progress-ring-circle {
              transition: stroke-dashoffset 0.35s;
              transform-origin: 50% 50%;
            }

            .progress-ring-progress {
              animation: progressAnimation 1.5s ease-in-out forwards;
            }

            .progress-text {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }

            .percentage {
              font-size: 2rem;
              font-weight: 700;
              color: #2c3e50;
            }

            .stat-label {
              color: #4a69bd;
              font-size: 12px;
              font-weight: 600;
              text-transform: uppercase;
            }

            .stat-label:first-child {
              color: #00a67d;
            }

            @keyframes progressAnimation {
              0% {
                stroke-dashoffset: 327;
              }
            }

            @media (max-width: 768px) {
              .content-section {
                padding-left: 0;
                text-align: center;
              }

              .stat-card {
                margin-bottom: 1.5rem;
              }

              .description {
                text-align: center;
                font-size: 15px;
                padding: 0 10px;
              }
            }
              @media(max-width:575px){
                .testTitle{
                  font-size: 20.4px !important;  
                  max-width: 100%;
                }
                .why-choose-section{
                  padding-top:0 !important;
                  padding-bottom:0 !important;
                }
                .content-section .text-center.mb-5{
                   margin-bottom:20px !important;
                }
                .description,.order-2{
                  margin-bottom:0 !important;
                }
              }
          `}</style>
        </section>
      )}
    </>
  );
}