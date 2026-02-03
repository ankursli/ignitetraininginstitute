import React from "react";

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
        {/* Desktop Layout - Horizontal */}
        <div className="d-none d-md-flex justify-content-between align-items-center w-100">
          {[
            { src: "/assets/uni1.webp", alt: "Pearson Edexcel" },
            { src: "/assets/camb.webp", alt: "University of Cambridge" },
            { src: "/assets/uni3.webp", alt: "AQA Realising Potential" },
          ].map((logo, index) => (
            <div
              key={index}
              className="logo-wrapper desktop-logo fade-in-section"
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <img src={logo.src} alt={logo.alt} className="logo-img" width={1011} height={491} />
            </div>
          ))}
        </div>

        {/* Mobile Layout - Vertical Stack */}
        <div className="d-md-none w-100 d-flex flex-column align-items-center gap-4">
          {[
            { src: "/assets/pea.webp", alt: "Pearson Edexcel" },
            { src: "/assets/camb.webp", alt: "University of Cambridge" },
            { src: "/assets/aqa.webp", alt: "AQA Realising Potential" },
          ].map((logo, index) => (
            <div
              key={index}
              className="logo-wrapper mobile-logo fade-in-section"
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <img src={logo.src} alt={logo.alt} className="logo-img" width={218} height={116} />
            </div>
          ))}
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
        }

        /* Desktop sizes */
        .desktop-logo {
          width: auto;
          height: auto;
        }

        /* Mobile sizes */
        .mobile-logo {
          width: 200px;
          height: 100px;
        }

        /* Image scaling */
        .logo-img {
          max-width: 200px;
          object-fit: contain;
        }

        .university-logos-container {
          height: auto; /* Desktop */
        }
        @media (max-width: 767px) {
          .university-logos-container {
            height: auto; /* Mobile */
          }
        }

      `}</style>
    </>
  );
};

export default UniversityLogosCard;
