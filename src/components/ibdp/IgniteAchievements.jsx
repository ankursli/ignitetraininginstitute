"use client"

import { useEffect, useState } from "react";

export default function IgniteAchievements() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="fade-in-section ignite-achievements" data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat
      style={{ animationDelay: "0.1s" }}>
      <div className="fade-in-section "
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat
        style={{ maxWidth: isMobile ? "95vw" : '70vw', animationDelay: "0.15s", margin: "0 auto", padding: isMobile ? "0px 0px 5px 0px" : "0", }}>

        {/* Header Section */}
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
              <h2 className="SubHeading testSubheading">OUR ACHIEVEMENTS
              </h2>
            </div>
            <h3
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section testTitle"
              style={{ animationDelay: "0.2s", color: "#19245E !important", maxWidth: "700px !important", fontSize: "2rem" }}
            >
              Powering Progress Through <span className="highlight">Results</span> That Matter
            </h3>
          </div>
          {/* Subtitle */}
          <p className="mx-auto fade-in-section subtitle-text"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{
              background: "linear-gradient(90deg,#161664, #3F88BA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animationDelay: "0.45s",
              fontSize: isMobile ? "14px" : "23px"
            }}>
            We've built every achievement through the progress, effort,          <br className="d-none d-md-block" />
            & dedication of our IBDP students over the years.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="row custom-gap mb-md-5 mb-4">

          {/* Top Left - Card 1 */}
          <div className="col-md-6 col-6 fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.5s" }}>
            <div className="stat-card p-md-4 px-3 py-2 d-flex flex-md-row flex-column align-items-center" style={{
              backgroundImage: "url('/assets/linear1.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '1.5rem',
              minHeight: isMobile ? "0" : '180px',
            }}>
              <div className="flex-shrink-0 me-md-4 mb-md-0 ">
                <div className="stat-number fw-bold" style={{
                  background: "linear-gradient(90deg, #00A491, #003E37)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  borderRadius: "40px",
                  fontSize: isMobile ? "30px" : "80px",
                  paddingLeft: isMobile ? "0" : "20px",
                  marginRight: isMobile ? "65px" : "0px",
                }}>10+</div>
              </div>
              <div
                className="border-md-start ps-md-4 ps-0 mt-md-0 mt-2 pt-md-0 pt-2"
                style={{
                  borderLeft: "2px solid rgba(107, 114, 128, .2)", // gray with 50% opacity
                  borderTop: "none",
                }}
              >
                <h3 className="h5 fw-bold mb-1 mb-md-2 h3-custom stat-title" style={{
                  background: "linear-gradient(90deg, #00A491, #003E37)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  Years Of Experience
                </h3>
                <p
                  className="text-muted m-0 d-none d-md-block stat-description"
                  style={{
                    fontSize: isMobile ? "16px" : "23px",
                    lineHeight: '1.2'
                  }}
                >
                  Proven expertise in guiding                  <br />
                  students toward growth                 </p>

              </div>
            </div>
          </div>

          {/* Top Right - Card 2 */}
          <div className="col-md-6 col-6 fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.55s" }}>
            <div className="stat-card p-md-4 px-3 py-2 d-flex flex-md-row flex-column align-items-center" style={{
              backgroundImage: "url('/assets/linear2.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '1.5rem',
              minHeight: isMobile ? "0" : '180px',
            }}>
              <div className="flex-shrink-0 me-md-4 mb-md-0 ">
                <div className="stat-number fw-bold" style={{
                  background: "linear-gradient(90deg,#161664, #3F88BA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  borderRadius: "40px",
                  fontSize: isMobile ? "30px" : "80px",
                  paddingLeft: isMobile ? "0" : "20px",
                  marginRight: isMobile ? "65px" : "0px",
                }}>1K+</div>
              </div>
              <div
                className="border-md-start ps-md-4 ps-0 mt-md-0 mt-2 pt-md-0 pt-2"
                style={{
                  borderLeft: "2px solid rgba(107, 114, 128, .2)", // gray with 50% opacity
                  borderTop: "none",
                }}
              >
                <h3 className="h5 fw-bold mb-1 mb-md-2 h3-custom stat-title" style={{
                  background: "linear-gradient(90deg,#161664, #3F88BA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  Exam Prep Resources                </h3>
                <p
                  className="text-muted m-0 d-none d-md-block stat-description"
                  style={{
                    fontSize: isMobile ? "16px" : "23px",
                    lineHeight: '1.2'
                  }}
                >
                  Extensive IBDP-specific guides
                  <br />
                  to master all subjects
                </p>

              </div>
            </div>
          </div>

          {/* Bottom Left - Card 3 */}
          <div className="col-md-6 col-6 fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.6s" }}>
            <div className="stat-card p-md-4 px-3 py-2 d-flex flex-md-row flex-column align-items-center" style={{
              backgroundImage: "url('/assets/linear3.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '1.5rem',
              minHeight: isMobile ? "0" : '180px',
            }}>
              <div className="flex-shrink-0 me-md-4 mb-md-0 ">
                <div className="stat-number fw-bold" style={{
                  background: "linear-gradient(90deg,#161664, #3F88BA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  borderRadius: "40px",
                  fontSize: isMobile ? "30px" : "80px",
                  paddingLeft: isMobile ? "0" : "20px",
                  marginRight: isMobile ? "65px" : "0px",
                }}>7/7</div>
              </div>
              <div
                className="border-md-start ps-md-4 ps-0 mt-md-0 mt-2 pt-md-0 pt-2"
                style={{
                  borderLeft: "2px solid rgba(107, 114, 128, .2)", // gray with 50% opacity
                  borderTop: "none",
                }}
              >
                <h3 className="h5 fw-bold mb-1 mb-md-2 h3-custom stat-title" style={{
                  background: "linear-gradient(90deg,#161664, #3F88BA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  Scores Across Subjects
                </h3>
                <p
                  className="text-muted m-0 d-none d-md-block stat-description"
                  style={{
                    fontSize: isMobile ? "16px" : "23px",
                    lineHeight: '1.2'
                  }}
                >
                  Strategic tutoring that helps
                  <br />
                  you aim for excellence
                </p>

              </div>
            </div>
          </div>

          {/* Bottom Right - Card 4 */}
          <div className="col-md-6 col-6 fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.65s" }}>
            <div className="stat-card p-md-4 px-3 py-2 d-flex flex-md-row flex-column align-items-center" style={{
              backgroundImage: "url('/assets/linear4.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '1.5rem',
              minHeight: isMobile ? "0" : '180px',
            }}>
              <div className="flex-shrink-0 me-md-4 mb-md-0 ">
                <div className="stat-number fw-bold" style={{
                  background: "linear-gradient(90deg, #00A491, #003E37)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  borderRadius: "40px",
                  fontSize: isMobile ? "30px" : "80px",
                  paddingLeft: isMobile ? "0" : "20px",
                  marginRight: isMobile ? "65px" : "0px",
                }}>2K+</div>
              </div>
              <div
                className="border-md-start ps-md-4 ps-0 mt-md-0 mt-2 pt-md-0 pt-2"
                style={{
                  borderLeft: "2px solid rgba(107, 114, 128, .2)", // gray with 50% opacity
                  borderTop: "none",
                }}
              >
                <h3 className="h5 fw-bold mb-1 mb-md-2 h3-custom stat-title" style={{
                  background: "linear-gradient(90deg, #00A491, #003E37)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  Student Success Stories
                </h3>
                <p
                  className="text-muted m-0 d-none d-md-block stat-description"
                  style={{
                    fontSize: isMobile ? "16px" : "23px",
                    lineHeight: '1.4'
                  }}
                >
                  Consistent results through
                  <br />
                  guided student journeys
                </p>

              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
          style={{ animationDelay: "0.7s" }}>
          <a href="/join-free-demo-class/">
            <button
              className="btn cust-text fw-bold d-flex align-items-center mx-auto rounded-pill"
              style={{
                background: "linear-gradient(90deg,#161664, #3F88BA)",
                color: 'white',
                padding: '12px 14px 12px 20px',
                border: 'none',
                transition: 'opacity 0.3s ease',
                letterSpacing: "3px",
                fontSize: "clamp(0.9rem, 1.1vw, 1.1rem)",
                marginTop: isMobile ? "auto" : "61px !important"
              }}
              onMouseEnter={(e) => e.target.style.opacity = "0.9"}
              onMouseLeave={(e) => e.target.style.opacity = "1"}
            >
              GET A FREE DEMO
              <div
                className="custom-height rounded-circle d-flex align-items-center justify-content-center"

                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  background: "linear-gradient(90deg, #E7F6FF, #A3CAF5)",
                  animationDelay: "0.75s",
                  marginLeft: "2.1rem "
                }}
              >
                <img src="/assets/arrowright.webp" alt="ibdp tutor in dubai" width={16} height={16} />
              </div>
            </button>
          </a>
        </div>
      </div>
      <style jsx>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        .fade-in-section.is-inview {
          opacity: 1;
          transform: translateY(0);
        }
        
        .custom-gap {
          --bs-gutter-x: 5rem; /* horizontal gap */
          --bs-gutter-y: 3rem; /* vertical gap */
        }

        /* Media query for 125% zoom detection and compensation */
        @media screen and (min-width: 1536px) and (max-width: 2399px) {
          .subtitle-text {
            font-size: 18px !important;
          }
          
          .stat-card {
            padding: 10px !important;
            min-height: 144px !important;
            border-radius: 1.2rem !important;
          }
          
          .stat-number {
            font-size: 64px !important;
            padding-left: 16px !important;
          }
          
          .stat-title {
            font-size: 20px !important;
          }
          
          .stat-description {
            font-size: 18px !important;
          }
          
          .custom-gap {
            --bs-gutter-x: 4rem !important;
            --bs-gutter-y: 2.4rem !important;
          }
          
          .cust-text {
            padding: 10px 11px 10px 16px !important;
            letter-spacing: 2.4px !important;
            font-size: 0.88rem !important;
            margin-top: 49px !important;
          }
          
          .custom-height {
            width: 2rem !important;
            height: 2rem !important;
            margin-left: 1.7rem !important;
          }
          
          .custom-height img {
            width: 13px !important;
            height: 13px !important;
          }
        }

        /* Media query for 150% zoom detection and compensation */
        @media screen and (min-width: 1280px) and (max-width: 1535px) {
          .subtitle-text {
            font-size: 15px !important;
          }
          
          .stat-card {
            padding: 8px !important;
            min-height: 120px !important;
            border-radius: 1rem !important;
          }
          
          .stat-number {
            font-size: 53px !important;
            padding-left: 13px !important;
          }
          
          .stat-title {
            font-size: 17px !important;
          }
          
          .stat-description {
            font-size: 15px !important;
          }
          
          .custom-gap {
            --bs-gutter-x: 3.3rem !important;
            --bs-gutter-y: 2rem !important;
          }
          
          .cust-text {
            padding: 8px 9px 8px 13px !important;
            letter-spacing: 2px !important;
            font-size: 0.75rem !important;
            margin-top: 41px !important;
          }
          
          .custom-height {
            width: 1.7rem !important;
            height: 1.7rem !important;
            margin-left: 1.4rem !important;
          }
          
          .custom-height img {
            width: 11px !important;
            height: 11px !important;
          }
        }

        @media (max-width: 767.98px) {
          .border-md-start {
            border-left: none !important;
            border-top: 2px solid rgba(107, 114, 128, .2) !important;
            padding-top: 0.5rem !important;
            margin-top: 0.5rem !important;
          }
          
          .custom-gap {
            --bs-gutter-x: 1rem; /* horizontal gap */
            --bs-gutter-y: 1rem; /* vertical gap */
          }
        }

        @media (max-width: 575px) {
          .ignite-achievements{
          
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
            font-size:1rem;
            margin-top: 45px !important;
            font-weight:600 !important;
          }

          .custom-height {
            width: 30px !important;
            height: 30px !important;
            background: linear-gradient(90deg, #E7F6FF, #A3CAF5) !important;
            animation-delay: 0.75s !important;
            margin-left: 1rem !important;
          }
        }
        
        @media (min-width: 768px) {
          .cust-text {
            background: linear-gradient(90deg, #161664, #3F88BA) !important;
            color: white !important;
            padding: 12px 14px 12px 20px !important;
            border: none !important;
            transition: opacity 0.3s ease !important;
            letter-spacing: 3px !important;
            font-size: clamp(0.9rem, 1.1vw, 1.1rem) !important;
            margin-top: 61px !important;
          }
          
          .h3-custom {
            font-size: 25px !important;
          }
          
          .custom-height {
            width: 2.5rem !important;
            height: 2.5rem !important;
            background: linear-gradient(90deg, #E7F6FF, #A3CAF5) !important;
            animation-delay: 0.75s !important;
            margin-left: 2.1rem !important;
          }
        }
        
        @media (max-width: 440px) {
          .h3-custom {
            font-size: 20px !important;
          }
        }
        
        @media (max-width: 390px) {
          .h3-custom {
            font-size: 14px !important;
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