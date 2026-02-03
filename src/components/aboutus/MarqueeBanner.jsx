import React from "react";

const items = [
    "EXPERT GUIDANCE",
    "TAILORED STUDY RESOURCES",
    "PROGRESS TRACKING",
    "PROVEN REAL RESULTS",
    "GRADE IMPROVEMENT"
];

const MarqueeBanner = () => {
    return (
        <section>
            <div
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className="fade-in-section bannerScroll1"
                style={{ animationDelay: "0.4s" }}
            >
                <div className="scrollContent1">
                    {/* Repeat twice for infinite effect */}
                    {[...Array(2)].map((_, i) =>
                        items.map((text, idx) => (
                            <div className="scrollItem1" key={`${i}-${idx}`}>
                                {text}
                                <span className="dot">●</span>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <style jsx>{`
        .bannerScroll1 {
          margin: 0;
          width: 100%;
          overflow: hidden;
          background: linear-gradient(90deg, #161d58 50%, #2f648e 100%);
          min-height: 60px;
          display: flex;
          align-items: center;
          position: relative;
        }

          .scrollContent1 {
              display: flex;
              gap: 3rem;
              /* equal space between items */
              width: max-content;
              animation: bannerScrollAnim 28s linear infinite;
          }

          .scrollItem1 {
              display: flex;
              align-items: center;
              gap: 5rem;
              /* equal spacing between dot and text */
              font-family: inherit;
              font-size: 1.3rem;
              font-weight: 700;
              letter-spacing: 0.25em;
              text-transform: uppercase;
              white-space: nowrap;
              padding: 20px;
              /* gradient text */
              background: linear-gradient(90deg, #A3CAF5, #E7F6FF);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              color: transparent;
          }

          .scrollItem1 .dot {
              font-size: 1.5rem;
              font-weight: bold;
              background: linear-gradient(90deg, #EDFFF4, #A6EAC7);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              color: transparent;
              margin: 0;
              /* remove old margin */
          }


          @keyframes bannerScrollAnim {
              0% {
                  transform: translateX(0);
              }

              100% {
                  transform: translateX(-50%);
              }
          }

          @media (max-width: 575px) {
              .bannerScroll1 {
                  margin: 80px 0 40px 0;
              }

              .scrollItem1 {
                  font-size: 1rem;
                  line-height: 40px;
                  gap: 3rem;
                  /* equal spacing between dot and text */
              }

              .scrollItem1 .dot {
                  font-size: 1rem;
                  font-weight: bold;
                  background: linear-gradient(90deg, #EDFFF4, #A6EAC7);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  background-clip: text;
                  color: transparent;
                  margin: 0;
                  /* remove old margin */
              }

              .bannerScroll1 {
                  width: 100%;
                  overflow: hidden;
                  background: linear-gradient(90deg, #161d58 50%, #2f648e 100%);
                  min-height: 50px;
                  display: flex;
                  align-items: center;
                  position: relative;
              }

              .scrollContent1 {
                  gap: 0.3rem !important;
                  /* equal space between items */
              }
          }

          @media (max-width: 768px) {
              .scrollItem1 {
                  padding: 0 10px 0 10px;
                  /* reduced padding on mobile */
                  gap: 2rem;
                  /* optional: reduce gap for better fit */
                  font-size: 0.8rem;
                  /* optional: smaller font */
              }

              .bannerScroll1 {
                  margin: 0 0 !important;
              }
      }
      `}</style>

        </section>
    );
};

export default MarqueeBanner;
