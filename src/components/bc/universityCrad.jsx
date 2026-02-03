import React from "react";

import Image from "next/image";

const UniversityLogosCard = () => {
  return (
    <>
      <div
        className="container-fluid py-4 d-flex justify-content-center align-items-center university-logos-container fade-in-section"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat
        style={{
          maxWidth: "90vw",
          margin: "0 auto",
          animationDelay: "0.3s",
        }}
      >
        <div className="d-flex flex-column flex-md-row justify-content-around align-items-center w-100 gap-4 gap-md-0">
          <div className="logo-wrapper fade-in-section" data-scroll data-scroll-class="is-inview" data-scroll-repeat style={{ animationDelay: "0.2s" }}>
            <Image src="/assets/uni1.webp" alt="Pearson Edexcel" width={500} height={342} className="logo-img" style={{ maxWidth: "100%", height: "auto" }} />
          </div>
          <div className="logo-wrapper fade-in-section" data-scroll data-scroll-class="is-inview" data-scroll-repeat style={{ animationDelay: "0.3s" }}>
            <Image src="/assets/uni2.webp" alt="University of Cambridge" width={500} height={243} className="logo-img" style={{ maxWidth: "100%", height: "auto" }} />
          </div>
          <div className="logo-wrapper fade-in-section" data-scroll data-scroll-class="is-inview" data-scroll-repeat style={{ animationDelay: "0.4s" }}>
            <Image src="/assets/uni3.webp" alt="AQA Realising Potential" width={500} height={243} className="logo-img" style={{ maxWidth: "100%", height: "auto" }} />
          </div>
        </div>

      </div>

      {/* ✅ Scoped responsive styles */}
      <style jsx>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-in-section.is-inview {
          opacity: 1;
          transform: translateY(0);
        }

        /* Shared wrapper */
        .logo-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 280px; /* Default desktop width */
        }

        /* Image scaling */
        .logo-img {
          object-fit: contain;
        }

        .university-logos-container {
          height: auto;
        }

        @media (max-width: 767px) {
          .logo-wrapper {
            width: 100%; /* Full width on mobile to allow centering/scaling */
            max-width: 250px; /* Limit max width on mobile */
          }
        }
        
        @media (max-width: 575px) {
            .university-logos-container{
            padding:0 0 0 0 !important; 
            }
        }

      `}</style>
    </>
  );
};

export default UniversityLogosCard;
