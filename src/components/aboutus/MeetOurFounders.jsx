import React, { useEffect, useState } from "react";

// Helper component for the Read More/Read Less functionality
const TruncatedText = ({ text, wordLimit = 16 }) => {
  const words = text.split(/\s+/).filter(Boolean); // Split by whitespace and remove empty strings
  const [isExpanded, setIsExpanded] = useState(false);

  // Determine if the text is longer than the limit
  const isTooLong = words.length > wordLimit;

  // Get the visible text based on the expanded state
  const visibleText = isExpanded || !isTooLong
    ? text
    : words.slice(0, wordLimit).join(" ") + "...";

  const toggleExpanded = (e) => {
    // Prevent the default action of the anchor tag (which is usually navigation)
    e.preventDefault();
    setIsExpanded(prev => !prev);
  };

  return (
    <>
      <p className="message-text-content">
        {visibleText}
      </p>
      {isTooLong && (
        <a
          href="#" // Use # or javascript:void(0);
          onClick={toggleExpanded}
          className="read-more-link" // Changed class name
        >
          {isExpanded ? "Read Less" : "Read More"}
        </a>
      )}
    </>
  );
};

export default function MeetOurFounders() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Founder 1's message (moved to a constant for cleaner use)
  const founderMessage1 = "Ignite began with a belief: every child holds extraordinary potential, but their journeys differ. Too often, dreams are slowed by roadblocks that could be removed with timely help. We listen first, teach second, customising every step, so our students gain the skills, confidence, and direction to thrive in a world full of possibilities.";

  // Founder 2's message (moved to a constant for cleaner use)
  const founderMessage2 = "For me, education is and always will be the most reliable route to career success. Beyond academics, the very process of learning builds discipline, problem-solving, and resilience. At Ignite, we aim to teach the ability to learn itself, so our students don’t just keep up with change, they lead it.";

  return (
    <section className="founders-section">
      <div className="container">
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
            <h2 className="SubHeading testSubheading">meet our founders</h2>
          </div>

          {/* Main title */}
          <h3
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section testTitle"
            style={{ animationDelay: "0.2s" }}
          >
            The Visionaries Behind The Ignite's
            <span className="highlight"> Purpose</span>
          </h3>
        </div>

        {/* First Founder */}
        <div className="row align-items-start founder-row fade-in-section"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat>
          {/* Left side - Founder Image with Background */}
          <div className="col-lg-5 col-md-6 mb-4 mb-md-0 order-1 order-md-1">
            <div className="founder-image-container">
              <div className="founder-image">
                <img
                  src="/assets/founder1.webp"
                  alt="Sumit Advani Co-Founder Of Ignite Training Institute"
                  className="founder-cutout"
                  width={508}
                  height={666}
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="col-lg-7 col-md-6 order-2 order-md-2">
            <div className="founder-content">
              {/* Founder's Message */}
              <div className="founder-message">
                <h3 className="message-title">FOUNDERS MESSAGE</h3>
                {/* Replaced <p> with TruncatedText component */}
                <TruncatedText text={founderMessage1} />
              </div>
            </div>
          </div>
        </div>

        {/* Second Founder */}
        <div className="row align-items-start founder-row fade-in-section"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat>
          <div className="col-lg-7 col-md-6 order-2 order-md-1">
            <div className="founder-content2">
              {/* Founder's Message */}
              <div className="founder-message2">
                <h3 className="message-title2">FOUNDERS MESSAGE</h3>
                {/* Replaced <p> with TruncatedText component */}
                <TruncatedText text={founderMessage2} />
              </div>
            </div>
          </div>

          {/* Right side - Founder Image with Background */}
          <div className="col-lg-5 col-md-6 mb-4 mb-md-0 order-1 order-md-2 mr-10">
            <div className="founder-image-container2">
              <div className="founder-image2">
                <img
                  src="/assets/founder2.webp"
                  alt="Mohnish Ahuja Co-Founder Of Ignite Training Institute"
                  className="founder-cutout2"
                  width={508}
                  height={666}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Founders Section */
        .founders-section {
          overflow: hidden;
          position: relative;
        }
        
        .founder-row {
          margin-bottom: 0;
        }

        .founder-row:last-child {
          margin-bottom: 0;
        }
        :global(.message-text-content) {
          color: #233467;
        }
        :global(.read-more-link) {
          color: var(--blue-color);
          text-decoration: underline !important;
          font-weight: 600;
          }
        /* Founder Image Container */
        .founder-image-container {
          position: relative;
          height: 550px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .founder-image-container2 {
          position: relative;
          height: 550px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .founder-image {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }

        .founder-image2 {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }

        .founder-cutout {
          width: auto;
          max-width: 100%;
          height: auto;
          max-height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.15));
        }

        .founder-cutout2 {
          width: auto;
          max-width: 100%;
          height: auto;
          max-height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.15));
        }

        /* Founder Content */
        .founder-content {
          padding-left: 7rem;
          display: flex;
          align-items: center;
          height: 100%;
        }

        .founder-content2 {
          padding-left: 7rem;
          display: flex;
          align-items: center;
          height: 100%;
        }

        /* Founder Message */
        .founder-message {
          padding: 2rem;
          border-radius: 16px;
          margin-top:67px;
        }

        .founder-message2 {
          padding: 2rem;
          border-radius: 16px;
          margin-top:67px;
        }

        .message-title,
        .message-title2 {
          font-size: 35px;
          font-weight: 700;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          background: linear-gradient(90deg, #00a491, #003e37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }
        
        /* New class for the text content */
        .message-text-content {
          font-size: 23px;
          line-height: 1.8;
          margin-bottom: 1.2rem; 
        }
        
        /* New anchor link style */
        .read-more-link {
          color: #00a491; /* Highlight color for the link */
          font-size: 23px; /* Match the text size */
          font-weight: 600;
          cursor: pointer;
          padding: 0;
          margin-bottom: 1.2rem; /* Consistent spacing */
          display: block; /* Make it take its own line */
          text-align: left;
          text-decoration: none; /* Remove default underline */
        }
        
        .read-more-link:hover {
          text-decoration: underline;
        }
        
        .testTitle {
          font-size: 2rem;
          font-weight: 700;
          max-width: 50%;
          color: var(--blue-color);
          margin: 40px auto;
          line-height: 1.2;
          text-transform: uppercase;
        }
        .founder-message a {
            color: var(--blue-color);
            text-decoration: underline !important;
            font-weight: 600;
        }

        /* Mobile Responsive Styles */
        @media (max-width: 1200px) {
          .founder-content,
          .founder-content2 {
            padding-left: 4rem;
          }
        }

        @media (max-width: 992px) {
          .founder-image-container,
          .founder-image-container2 {
            height: 480px;
          }

          .founder-content,
          .founder-content2 {
            padding-left: 2rem;
          }
        }

        @media (max-width: 768px) {
          .founder-content,
          .founder-content2 {
            padding-left: 0;
            text-align: center;
          }
          .founder-cutout,
          .founder-cutout2 {
            position: relative;
            right: 0;
          }

          .founder-image-container,
          .founder-image-container2 {
            height: 420px;
            margin-bottom: 2rem;
          }

          .founder-message,
          .founder-message2 {
            padding: 1.5rem;
            margin-top: 0;
          }
          
          .read-more-link {
            text-align: center;
          }
        }

        @media (max-width: 576px) {

          .founders-section{
            padding:0 !important;
          }
          .founders-section>div>div,.founder-image-container,.order-1,.message-title{
            margin-bottom:0 !important;
          }
          .founder-image-container,
          .founder-image-container2 {
            height: auto;
          }
          .testTitle{
            max-width:100%;
            margin:20px 0;
          }
          .message-title,
          .message-title2 {
            font-size: 1.2rem;
            text-align: left;
          }
          .founder-message,.founder-message2{
            padding:0 20px;
          }
          
          :global(.message-text-content) {
            font-size: 15px;
            line-height: 1.3;
            text-align: left;
           
          }
          
          :global(.read-more-link) {
            font-size: 15px;
            text-align: left;
            color: var(--blue-color);
            text-decoration: underline !important;
            font-weight: 600;
          }

          .founder-image-container2 {
            margin-top: 30px;
            margin-bottom: 0 !important;
          }
        }

        @media (max-width: 400px) {
          .founder-image-container,
          .founder-image-container2 {
            height: 320px;
          }
        }
      @media (min-width: 1200px) and (max-width: 1535px) {
          .message-title,
          .message-title2 {
            font-size: 1.2rem;
          }
          .founder-image-container,
          .founder-image-container2 {
            height: 420px;
            margin-bottom: 2rem;
          }
          .message-text-content,
          .read-more-link {
            font-size: 15px;
          }
      }

      @media (min-width: 1536px) and (max-width: 1919px) {
          .message-title,
          .message-title2 {
            font-size: 1.7rem;
          }
              .founder-image-container,
          .founder-image-container2 {
            height: 420px;
            margin-bottom: 1rem;
          }
          .message-text-content,
          .read-more-link {
            font-size: 1.3rem;
          }
      }
           
      `}</style>
    </section>
  );
}