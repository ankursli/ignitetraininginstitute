"use client"

export default function IgniteAchievements() {
  return (
    <div className=" py-md-5 py-4 fade-in-section" data-scroll
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
          <div className="d-flex align-items-center justify-content-center mb-3 fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.25s" }}>
            <h1 className="px-3 h2 fw-bold mx-md-3 mx-2 fade-in-section"
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat
              style={{
                background: "linear-gradient(90deg,#161664, #3F88BA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: '0.1em',
                animationDelay: "0.3s",
                fontSize: "clamp(0.9rem, 3vw, 1.2rem)"
              }}>
              <img
                src="/assets/3color.webp"
                alt="act"
                width={15}
                height={18}
                style={{ verticalAlign: "middle", marginLeft: "0.5rem" }}
              /> IGNITE ACHIEVEMENTS     <img
                src="/assets/3color.webp"
                alt="act"
                width={15}
                height={18}
                style={{ verticalAlign: "middle", marginLeft: "0.5rem" }}
              />
            </h1>
          </div>

          {/* Main Title */}
          <h2 className="fw-bold mb-2 lh-sm fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{
              background: "#19245E",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animationDelay: "0.35s",
              fontSize: "1.4rem"
            }}>
            LOREM IPSUM DOLOR SIT AMET,
          </h2>
          <h2 className="fw-bold mb-3 lh-sm fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{
              background: "linear-gradient(90deg, #00A491, #003E37)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animationDelay: "0.4s",
              fontSize: "1.4rem"
            }}>
            CONSECTETUR <span style={{
              background: "#19245E",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animationDelay: "0.4s",
              fontSize: "1.4rem"
            }}>ADIPISCING</span>          </h2>

          {/* Subtitle */}
          <p className="mx-auto lh-lg fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{
              background: "#233467",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animationDelay: "0.45s",
              fontSize: "0.9rem"
            }}>
            Choosing us means partnering with experienced coaches
            who are dedicated to unlocking your potential.
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
                  <div className="SubHeading testSubheading">IGNITE ACHIEVEMENTS
                  </div>
                </div>

                {/* Main Title */}
                <h2 className="fw-bold mb-2 lh-sm fade-in-section"
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{
                    background: "#19245E",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animationDelay: "0.35s",
                    fontSize: "2rem"
                  }}>
                  LOREM IPSUM DOLOR SIT AMET,
                </h2>
                <h2 className="fw-bold mb-3 lh-sm fade-in-section"
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{
                    background: "linear-gradient(90deg, #00A491, #003E37)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animationDelay: "0.4s",
                    fontSize: "2rem"
                  }}>
                  CONSECTETUR <span style={{
                    background: "#19245E",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animationDelay: "0.4s",
                    fontSize: "2rem"
                  }}>ADIPISCING</span>
                </h2>

                {/* Subtitle */}
                <p className="lh-lg mb-4 fade-in-section"
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{
                    background: "#233467",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animationDelay: "0.45s",
                    fontSize: "1.1rem"
                  }}>
                  Choosing us means partnering with experienced coaches who are dedicated to unlocking your potential.
                </p>
              </div>

              {/* CTA Button */}
              <div className="mb-4">
                <button
                  className="btn fw-bold d-flex align-items-center rounded-pill"
                  style={{
                    background: "linear-gradient(90deg,#161664, #3F88BA)",
                    color: 'white',
                    padding: '1rem 2rem',
                    border: 'none',
                    transition: 'opacity 0.3s ease',
                    fontSize: "1.1rem"
                  }}
                  onMouseEnter={(e) => e.target.style.opacity = "0.9"}
                  onMouseLeave={(e) => e.target.style.opacity = "1"}
                >
                  GET A FREE DEMO
                  <div
                    className="ms-3 rounded-circle d-flex align-items-center justify-content-center"
                  >
                    <img src="/assets/colr.webp" alt="rightar" style={{
                      width: '2rem',
                      height: '2rem',
                    }} width={36} height={36} />
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
                  <div className="stat-number teal-text">60%</div>
                  <div className="stat-divider"></div>
                  <div className="stat-content">
                    <p className="stat-title teal-text">OF RICH TUTORING EXPERIENCE</p>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="stat-card-desktop">
                  <div className="stat-number blue-text">30+</div>
                  <div className="stat-divider"></div>
                  <div className="stat-content">
                    <p className="stat-title blue-text">TRULY HAPPY STUDENTS FROM UAE</p>
                  </div>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="stats-row">
                {/* Stat 3 */}
                <div className="stat-card-desktop">
                  <div className="stat-number blue-text">60%</div>
                  <div className="stat-divider"></div>
                  <div className="stat-content">
                    <p className="stat-title blue-text">OF RICH TUTORING EXPERIENCE</p>
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="stat-card-desktop">
                  <div className="stat-number teal-text">30+</div>
                  <div className="stat-divider"></div>
                  <div className="stat-content">
                    <p className="stat-title teal-text">TRULY HAPPY STUDENTS FROM UAE</p>
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
            <button
              className="btn fw-bold d-flex align-items-center mx-auto rounded-pill"
              style={{
                background: "linear-gradient(90deg,#161664, #3F88BA)",
                color: 'white',
                padding: '0.8rem 1.8rem',
                border: 'none',
                transition: 'opacity 0.3s ease',
                fontSize: "1rem"
              }}
              onMouseEnter={(e) => e.target.style.opacity = "0.9"}
              onMouseLeave={(e) => e.target.style.opacity = "1"}
            >
              GET A FREE DEMO
              <div
                className="ms-3 rounded-circle d-flex align-items-center justify-content-center"
              >
                <img src="/assets/colr.webp" alt="rightar" style={{
                  width: '2rem',
                  height: '2rem',
                }} />
              </div>
            </button>
          </div>

          {/* Mobile Stats - 2x2 Grid */}
          <div className="stats-grid-mobile">
            {/* Row 1 */}
            <div className="row g-3 mb-3">
              <div className="col-6">
                <div className="stat-card-mobile">
                  <div className="stat-number blue-text">60%</div>
                  <p className="stat-title-mobile blue-text">OF RICH TUTORING EXPERIENCE</p>
                </div>
              </div>
              <div className="col-6">
                <div className="stat-card-mobile">
                  <div className="stat-number teal-text">30+</div>
                  <p className="stat-title-mobile teal-text">TRULY HAPPY STUDENTS FROM UAE</p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="row g-3">
              <div className="col-6">
                <div className="stat-card-mobile">
                  <div className="stat-number blue-text">60%</div>
                  <p className="stat-title-mobile blue-text">OF RICH TUTORING EXPERIENCE</p>
                </div>
              </div>
              <div className="col-6">
                <div className="stat-card-mobile">
                  <div className="stat-number teal-text">30+</div>
                  <p className="stat-title-mobile teal-text">TRULY HAPPY STUDENTS FROM UAE</p>
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
          background: linear-gradient(90deg, #3F88BA, #161664);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Desktop Layout */
        .desktop-stats-container {
          display: flex;
          align-items: flex-start;
          gap: 3rem;
          min-height: 500px;
        }
        
        .left-content {
          flex: 0 0 45%;
          /* No background color for left side */
        }
        
 .stats-grid-desktop {
  flex: 1;
  background: url("/assets/Rectangle125.webp") no-repeat center/cover;
  border-radius: 20px;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

        
        .stats-row {
          display: flex;
          gap: 2rem;
        }
        
        .stat-card-desktop {
          flex: 1;
          display: flex;
          flex-direction: column;
          text-align: center;
          gap: 1rem;
        }
        
        .stat-number {
          font-size: 4rem;
          font-weight: 700;
          line-height: 1;
        }
        
 .stat-divider {
  width: 9vw;
  height: 1px;
  background: linear-gradient(to right, #00A491, #003E37);
  border-radius: 2px;
  margin: 0 auto;
}

        
        .stat-content {
          flex: 1;
        }
        
        .stat-title {
          font-size: 1rem;
          font-weight: 700;
          line-height: 1.2;
          margin: 0;
          text-transform: uppercase;
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
          //text-transform: uppercase;
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
      `}</style>
    </div>
  );
}