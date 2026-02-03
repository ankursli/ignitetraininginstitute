import React from "react";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <div className="cta-wrapper fade-in-section"
      data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat>
      <div className="cta-container">
        <div className="cta-background" />

        <div className="cta-content">
          {/* Desktop Layout */}
          <div className="desktop-only desktopLayout text-uppercase">
            <div className="textSection">
              <h2 className="heading">
                Discover Courses That Support Every Step Of Learning
              </h2>

              <p className="paragraph">
                Explore our wide range of tutoring programs, each designed to
                meet students where they are & guide them forward.
              </p>
              <a href="/courses">
                <button className="cta-button">
                  <span className="text-uppercase">
                    explore our tutoring course
                  </span>
                  <div className="buttonIcon">
                    <ArrowRight size={20} />
                  </div>

                </button>
              </a>
            </div>

            <div className="imageSection">
              <img
                src="/assets/tutbg.webp"
                alt="about ignite"
                className="image"
                width={600}
                height={317}
              />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="mobile-only mobileLayout text-uppercase">
            <div className="mobileTextSection">
              <p className="mobileHeading">
                Discover Courses That Support Every Step Of Learning
              </p>

              <p className="mobileParagraph">
                Explore our wide range of tutoring programs, each designed to
                meet students where they are & guide them forward.
              </p>

              <div className="mobileButtonContainer">
                <a href="/courses">
                  <button className="mobileButton">
                    <span className="text-uppercase mobileButtonText">
                      EXPLORE OUR TUTORING COURSES
                    </span>
                    <div className="mobileButtonIcon">
                      <ArrowRight size={18} />
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Image overlay */}
      <div className="mobile-only mobileImageContainer">
        <img
          src="/assets/tutbg.webp"
          alt="about ignite"
          className="mobileImage"
          width={600}
          height={317}
        />
      </div>

      <style jsx>{`
        .cta-wrapper {
          position: relative;
          
        }

        .cta-container {
          max-width: 90vw;
          border-radius: 40px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
        }

        .cta-background {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(285.71deg, #3f88ba -4.32%, #161664 106.53%),
            linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
        }

        .cta-content {
          position: relative;
          z-index: 10;
          width: 100%;
          height: 100%;
        }

        .desktopLayout {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 5rem;
        }

        .textSection {
          flex: 1;
          max-width: 48rem;
          padding-right: 2rem;
        }

        .heading {
          font-size: 2.5rem;
          font-weight: bold;
          color: white;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          letter-spacing: 0.02em;
        }

        .paragraph {
          font-size: 1.25rem;
          color: #d1d5db;
          margin-bottom: 2rem;
          line-height: 1.6;
          text-transform: none !important;
        }

        .cta-button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: transparent;
          border: 2px solid white;
          color: white;
          padding: 0.7rem 0.6rem 0.7rem 1.8rem;
          border-radius: 9999px;
          font-size: 1.125rem;
          font-weight: 500;
          cursor: pointer;
          min-width: 20rem;
          transition: 0.3s;
          outline: none;
        }

        .buttonIcon {
          background: black;
          color: white;
          border-radius: 50%;
          padding: 0.5rem;
          margin-left: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .imageSection {
          flex: 1;
          display: flex;
          justify-content: flex-end;
        }

        .image {
          border-radius: 1.5rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          max-width: 100%;
          height: auto;
        }

        /* Mobile */
        .mobileImageContainer {
          position: absolute;
          top: -12vh;
          left: 45%;
          transform: translateX(-50%);
          width: 60%;
          z-index: 5;
        }

        .mobileImage {
          border-radius: 1.5rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          width: 300px;
          height: auto;
          object-fit: cover;
              margin-top: 50px;
        }

        .mobileLayout {
          display: flex;
          flex-direction: column;
          height: 100%;
          position: relative;
          padding: 1.5rem;
          justify-content: flex-end;
          padding-top: 15vh;
        }

        .mobileTextSection {
          display: flex;
          flex-direction: column;
          justify-content: center;
          z-index: 3;
          position: relative;
          text-align: center;
        }

        .mobileHeading {
          font-size: 2rem;
          font-weight: bold;
          color: white;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          text-align: center;
        }

        .mobileParagraph {
          font-size: 1rem;
          color: #d1d5db;
          margin-bottom: 2rem;
          line-height: 1.6;
          text-align: center;
        }

        .mobileButtonContainer {
          display: flex;
          justify-content: center;
        }

        .mobileButton {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: transparent;
          border: 2px solid white;
          color: white;
          padding: 1rem 1.5rem;
          border-radius: 9999px;
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
          width: 100%;
          max-width: 20rem;
          transition: all 0.3s ease;
          outline: none;
        }

        .mobileButtonText {
          font-size: 12px;
          opacity: 0.5;
        }

        .mobileButtonIcon {
          background: black;
          color: white;
          border-radius: 50%;
          padding: 0.5rem;
          margin-left: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        /* Media Queries */
        @media (min-width: 768px) {
          .mobile-only {
            display: none !important;
          }
        }

        @media (max-width: 767px) {
          .desktop-only {
            display: none !important;
          }
          .cta-container {
            max-width: 95vw;
            margin-top: 30%;
          }
        }

        @media (max-width: 1024px) {
          .desktop-only h1 {
            font-size: 3rem !important;
          }
          .desktop-only {
            padding: 0 2rem !important;
          }
        }

        @media (max-width: 640px) {
          .mobile-only h1 {
            font-size: 1.875rem !important;
          }
        }
                            @media (max-width: 370px) {
                  .mobileImage {
    -webkit-border-radius: 1.5rem;
    -moz-border-radius: 1.5rem;
    border-radius: 1.5rem;
    -webkit-box-shadow: 0 25px 50px -12px rgba(0, 0, 0, .5);
    -moz-box-shadow: 0 25px 50px -12px rgba(0,0,0,.5);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, .5);
    width: 250px;
    height: fit-content;
    -o-object-fit: cover;
    object-fit: cover;
    margin-top:20px;
}
        .mobile-only h1 {
        font-size: 1.5rem !important;
    }

   
                  }
    
    @media (max-width: 575px) {
      .cta-container{
        margin-top: 19%;
      }
        .mobile-only h1{
          font-size:18.4px !important;
        }
          .mobileImage{
            margin-top:0;
          }
           .mobileParagraph{
        font-size:15px !important;
        line-height: 1.3 !important;
        text-transform: none !important;
          }
        .mobileButton{
          padding:0.5rem 1.5rem;
          
        }
    }
                                @media (max-width: 400px) {
                                                  .mobileImage {
    width: 280px;
    margin-top:50px;
}
            }

      `}</style>
    </div>
  );
}
