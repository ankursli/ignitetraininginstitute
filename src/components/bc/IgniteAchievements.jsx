"use client"

import { useEffect, useState } from "react";

export default function IgniteAchievements() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 1100);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => window.removeEventListener('resize', checkDevice);
  }, []);
  return (
    <div className="mobileign fade-in-section" data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat
      style={{ animationDelay: "0.1s" }}>
      <div className="container fade-in-section"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat
        style={{ maxWidth: '90vw', animationDelay: "0.15s" }}>

        {/* Mobile Header Section - Only show on mobile */}
        <div className="d-md-none text-center mb-4 fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
          style={{ animationDelay: "0.2s" }}>
          <h2 className="SubHeading testSubheading">OUR ACHIEVEMENTS
          </h2>

          {/* Main Title */}
          <h3
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section testTitle text-uppercase"
            style={{ animationDelay: "0.2s" }}
          >
            Milestones That Reflect  <br /> <span className="highlight"> Our Journey{" "}</span>
            Of Mentoring
          </h3>

          {/* Subtitle */}
          <p className="mx-auto fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{
              background: "#233467",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animationDelay: "0.45s",
              fontSize: "0.9rem",
              lineHeight: isMobile ? "1.3" : "1.2",
            }}>
            Each accomplishment highlights the dedication & success our students have achieved through the years.
          </p>
        </div>

        {/* Desktop Layout - Horizontal */}
        <div className="d-none d-md-block fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
          style={{ animationDelay: "0.5s" }}>

          {/* Desktop Stats Container */}
          <div className="desktop-stats-container">
            {/* Left Side Content - Header + Button */}
            <div className="left-content">
              {/* Desktop Header */}
              <div className="mb-4">
                <div className="mb-3">
                  <h2 className="SubHeading testSubheading">OUR ACHIEVEMENTS
                  </h2>
                </div>

                {/* Main Title */}
                {/* <h3
                  className="fw-bold fade-in-section text-uppercase"
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{
                    background: "#19245E",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animationDelay: "0.35s",
                    fontSize: "2rem",
                    margin: 0, // ✅ removes the margin
                  }}
                >
                  Milestones That Reflect
                </h3> */}

                <h3
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat="true"
                  className="fade-in-section testTitle text-uppercase"
                  style={{ animationDelay: "0.2s", fontSize: "2rem" }}
                >
                  Milestones That Reflect <br /><span className="highlight"> Our Journey</span>Of Mentoring

                </h3>

                {/* <h2
                  className="fw-bold fade-in-section text-uppercase"
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{
                    background: "linear-gradient(90deg, #00A491, #003E37)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animationDelay: "0.4s",
                    fontSize: "2rem",
                    margin: 0, // ✅ removes the margin
                  }}
                >
                  Our Journey{" "}
                  <span
                    style={{
                      background: "#19245E",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      animationDelay: "0.4s",
                      fontSize: "2rem",
                      margin: 0, // ✅ removes margin inside span (not needed, but safe)
                    }}
                  >
                    Of Mentoring
                  </span>
                </h2> */}


                {/* Subtitle */}
                <p className="lh-sm mb-4 fade-in-section"
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{
                    background: "#233467",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animationDelay: "0.45s",
                    fontSize: "1.2rem",
                    marginTop: "16px",
                  }}>
                  Each accomplishment highlights the dedication & success our students have achieved through the years.
                </p>
              </div>

              {/* CTA Button */}
              <div className="mb-4 fade-in-section"
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat>
                <button
                  className="btn cust-text fw-bold d-flex align-items-center rounded-pill"
                  style={{
                    background: "linear-gradient(90deg,#161664, #3F88BA)",
                    color: 'white',
                    padding: '12px 14px 12px 20px',
                    border: 'none',
                    transition: 'opacity 0.3s ease',
                    letterSpacing: "3px",
                    fontSize: "clamp(0.9rem, 1.1vw, 1.1rem)"
                  }}
                  onMouseEnter={(e) => e.target.style.opacity = "0.9"}
                  onMouseLeave={(e) => e.target.style.opacity = "1"}
                >
                  GET FREE DEMO
                  <div
                    className="custom-height rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      background: "linear-gradient(90deg, #E7F6FF, #A3CAF5)",
                      animationDelay: "0.75s",
                      marginLeft: "2.1rem"
                    }}
                  >
                    <img src="/assets/arrowright.webp" alt="british curriculum tutors in dubai" width={16} height={16} />
                  </div>
                </button>
              </div>
            </div>

            {/* Right Side - Stats Grid */}
            <div className="stats-grid-desktop">
              {/* Top Row */}
              <div className="stats-row">
                {/* Stat 1 */}
                <div className="stat-card-desktop">
                  <div className="stat-number teal-text">10+</div>
                  <div className="stat-divider"></div>
                  <div className="stat-content">
                    <p className="stat-title teal-text">Years Of Experience</p>
                    <p className="stat-description">Proven expertise in guiding students toward success</p>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="stat-card-desktop">
                  <div className="stat-number blue-text">1K+</div>
                  <div className="stat-divider"></div>
                  <div className="stat-content">
                    <p className="stat-title blue-text">Exam Prep Resources</p>
                    <p className="stat-description">Extensive curricula guides to master every subject</p>
                  </div>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="stats-row">
                {/* Stat 3 */}
                <div className="stat-card-desktop">
                  <div className="stat-number blue-text">A<sup>*</sup></div>
                  <div className="stat-divider"></div>
                  <div className="stat-content">
                    <p className="stat-title blue-text">Grades Across Subjects</p>
                    <p className="stat-description">Strategic tutoring that helps aim for steady progress</p>
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="stat-card-desktop">
                  <div className="stat-number teal-text">2K+</div>
                  <div className="stat-divider"></div>
                  <div className="stat-content">
                    <p className="stat-title teal-text">Student Success Stories</p>
                    <p className="stat-description">Consistent results through focused student journeys</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Vertical */}
        <div className="d-md-none fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
          style={{ animationDelay: "0.5s" }}>

          {/* Mobile CTA Button */}
          <div className="text-center mb-4">
            <a href="/join-free-demo-class/" >
              <button
                className="btn cust-text fw-bold d-flex align-items-center mx-auto rounded-pill"
                style={{
                  background: "linear-gradient(90deg,#161664, #3F88BA)",
                  color: 'white',
                  padding: '12px 14px 12px 20px',
                  border: 'none',
                  transition: 'opacity 0.3s ease',
                  letterSpacing: "3px",
                  fontSize: "clamp(0.9rem, 1.1vw, 1.1rem)"
                }}
                onMouseEnter={(e) => e.target.style.opacity = "0.9"}
                onMouseLeave={(e) => e.target.style.opacity = "1"}
              >
                GET FREE DEMO
                <div
                  className="custom-height rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    background: "linear-gradient(90deg, #E7F6FF, #A3CAF5)",
                    marginLeft: "2.1rem"
                  }}
                >
                  <img src="/assets/arrowright.webp" alt="british curriculum tutors in dubai" width={16} height={16} />
                </div>
              </button>
            </a>
          </div>

          {/* Mobile Stats - 2x2 Grid */}
          <div className="stats-grid-mobile">
            {/* Row 1 */}
            <div className="row g-3 mb-3">
              <div className="col-6">
                <div className="stat-card-mobile">
                  <div className="stat-number blue-text">10+</div>
                  <p className="stat-title-mobile blue-text">Years Of Experience</p>
                </div>
              </div>
              <div className="col-6">
                <div className="stat-card-mobile">
                  <div className="stat-number teal-text">1K+</div>
                  <p className="stat-title-mobile teal-text">Exam Prep Resources</p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="row g-3">
              <div className="col-6">
                <div className="stat-card-mobile">
                  <div className="stat-number blue-text">A<sup>*</sup></div>
                  <p className="stat-title-mobile blue-text">Grades Across Subjects</p>
                </div>
              </div>
              <div className="col-6">
                <div className="stat-card-mobile">
                  <div className="stat-number teal-text">2K+</div>
                  <p className="stat-title-mobile teal-text">Student Success Stories</p>
                </div>
              </div>
            </div>
          </div>
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

        /* Color Classes */
        .teal-text {
          background: linear-gradient(90deg, #00A491, #003E37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .blue-text {
          background: linear-gradient(90deg, #161664, #3F88BA);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .blue-text sup {
          background: linear-gradient(90deg, #161664, #3F88BA);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* then style the sup visually (can translate or top) */
        .teal-text sup,
        .blue-text sup {
          font-size: 0.55em;
          display: inline-block;
          transform: translateY(-0.30em); /* allowed because sup has its own background */
          line-height: 1;
          vertical-align: baseline;
          background-size: 100% 100%;
        }

        /* Desktop Layout */
 .desktop-stats-container {
          display: flex;
          align-items: flex-start;
          gap: 3rem;
          min-height: 400px;
        }
        
        .left-content {
          flex: 0 0 45%;
          margin-top: 3.4rem;
        }
        
        .stats-grid-desktop {
          flex: 1;
          background: url("/assets/Rectangle125.webp") no-repeat center/cover;
          border-radius: 20px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          justify-content: center;
        }

        
        .stats-row {
          display: flex;
          gap: 2rem;
        }
        
        .stat-card-desktop {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .stat-number {
          font-size: 3.3rem;
          font-weight: 700;
          line-height: 1;
          margin-bottom: 0.5rem;
        }
        
.stat-divider {
  width: 250px;
  height: 2px;
  background: linear-gradient(
    to right,
    rgba(0, 164, 145, 0.2),
    rgba(0, 62, 55, 0.2)
  );
  border-radius: 2px;
}


        
        .stat-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .stat-title {
          font-size: 1.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin: 0;
          text-transform: capitalize;
        }

        .stat-description {
          font-size: 1.3rem;
          line-height: 1.3;
          margin: 0;
          color: #666;
        }

        /* Mobile Layout */
        .stats-grid-mobile {
          background: url("/assets/Rectangle125.webp") no-repeat center/cover;
          border-radius: 20px;
          padding: 2rem;
        }
        
        .stat-card-mobile {
          text-align: center;
          padding: 1.5rem 1rem;
        }
        
        .stat-card-mobile .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1;
          margin-bottom: 1rem;
        }
        
        .stat-title-mobile {
          font-size: 0.8rem;
          font-weight: 700;
          line-height: 1.2;
          margin: 0;
          text-transform: capitalize;
        }

                @media (min-width: 1900) {
                        .left-content {
          flex: 0 0 45%;
          margin-top: 3.5rem !important;
        }
                }


        /* Responsive adjustments */
        @media (max-width: 575px) {
          .stat-card-mobile .stat-number {
            font-size: 2rem;
          }
          
          .stat-title-mobile {
            font-size: 0.7rem;
          }
          
          .stats-grid-mobile {
            padding: 1.5rem;
          }
        }
          @media (max-width: 575px) {
          .mobileign{
          margin-top: 0 !important;
          margin-bottom: 0 !important;
          }
          .custom-grid {
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
    font-size: clamp(0.7rem, 1.1vw, 1.1rem) !important;
    margin-block: 30px !important;
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
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
   .desktop-stats-container {
          display: flex;
          align-items: flex-start;
          gap: 3rem;
          min-height: 400px;
        }
        
        .left-content {
          flex: 0 0 45%;
          margin-top: 3.4rem;
        }
        
        .stats-grid-desktop {
          flex: 1;
          background: url("/assets/Rectangle125.webp") no-repeat center/cover;
          border-radius: 20px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          justify-content: center;
        }

        
        .stats-row {
          display: flex;
          gap: 2rem;
        }
        
        .stat-card-desktop {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .stat-number {
          font-size: 3rem;
          font-weight: 700;
          line-height: 1;
          margin-bottom: 0.5rem;
        }
        
.stat-divider {
  width: 200px;
  height: 2px;
  background: linear-gradient(
    to right,
    rgba(0, 164, 145, 0.2),
    rgba(0, 62, 55, 0.2)
  );
  border-radius: 2px;
}


        
        .stat-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .stat-title {
          font-size: 1.3rem;
          font-weight: 700;
          line-height: 1.2;
          margin: 0;
          text-transform: capitalize;
        }

        .stat-description {
          font-size: 1.1rem;
          line-height: 1.3;
          margin: 0;
          color: #666;
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
    margin-top: 15px !important;
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