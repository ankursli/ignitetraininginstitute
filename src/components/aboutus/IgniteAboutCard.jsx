"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function IgniteAboutCard() {
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
    <div
      className="container fade-in-section"
      data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat
      style={{ maxWidth: "1140px", animationDelay: "0.15s" }}
    >

      <div className="ignite-container">
        {/* Left Content */}
        <div className="ignite-left">
          <div className="mb-5">

            <div className="testHeadings">
              <div
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className={`fade-in-section ${isMobile ? 'text-center' : ''}`}
                style={{ animationDelay: "0.1s" }}
              >
                <h2 className={`SubHeading testSubheading ${isMobile ? 'text-center' : ''}`}>OUR APPROACH
                </h2>
              </div>
              <h3
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className={`fade-in-section testTitle ${isMobile ? 'text-center' : ''}`}
                style={{ animationDelay: "0.2s", fontSize: "2rem" }}
              >
                Not Just Better Grades, A Journey Of
                Consistent<span className="highlight"> Progress </span>
              </h3>
            </div>
          </div>


          <p
            className="ignite-description  fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{
              animationDelay: "0.3s",
            }}
          >
            Founded in 2015, Ignite Training Institute is dedicated to guiding students on their unique paths. Through personalized tutoring & in-depth expertise, we help students build confidence, strengthen understanding, & reach their full potential.
          </p>
          {/* <h2 className="ignite-secondary-title fade-in-section" data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat style={{
              animationDelay: "0.3s",
            }}>
            LOREM IPSUM DOLOR SIT AMET,<br />
            CONSECTETUR ADIPISCING
          </h2>

          <p className="ignite-short-description">
            Choosing us means partnering with
            experienced coaches who are dedicated to
            unlocking your potential.
          </p> */}
        </div>

        {/* Right Content */}
        <div className="ignite-right fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat>
          <img
            src="/assets/arect.webp"
            alt="about ignite"
            className="testimonialRect rect-1"
            width={479}
            height={102}
          />
          <img
            src="/assets/arect1.webp"
            alt="about ignite"
            className="testimonialRect rect-2"
            width={211}
            height={102}
          />
          <img
            src="/assets/arect2.webp"
            alt="about ignite"
            className="testimonialRect rect-3"
            width={724}
            height={102}
          />

          <div
            className="image-container fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{
              animationDelay: "0.3s",
            }}
          >
            <img
              src="/assets/aboutbg.webp"
              alt="about ignite"
              className="main-image"
              width={700}
              height={466}
            />
          </div>
        </div>
        {/* Separate Check items boxes */}
      </div>

      <div
        className="check-boxes-container fade-in-section approach"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat
        style={{ animationDelay: "0.3s" }}
      >
        <div className="check-box d-flex flex-md-row flex-column justify-content-around">
          {/* First item */}
          <div className="d-flex flex-column align-items-center gap-2 mb-4 mb-md-0">
            <h3 className="heading-title gradient-text">TRAINING</h3>
            <p className="heading-subtitle">
              Expert-led sessions focused on               <br className="d-none d-md-block" />
              concept clarity & real learning.
            </p>
          </div>

          {/* Second item */}
          <div className="d-flex flex-column align-items-center gap-2 mb-4 mb-md-0">
            <h3 className="heading-title gradient-text">RESOURCES</h3>
            <p className="heading-subtitle">
              Curriculum-aligned materials
              <br className="d-none d-md-block" />
              tailored for effective self-study.
            </p>
          </div>

          {/* Third item */}
          <div className="d-flex flex-column align-items-center gap-2">
            <h3 className="heading-title gradient-text">TESTING</h3>
            <p className="heading-subtitle">
              Frequent assessments to track               <br className="d-none d-md-block" />
              progress & boost performance.
            </p>
          </div>
        </div>
      </div>
      <div
        className="text-center fade-in-section"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat
        style={{ animationDelay: "0.7s" }}
      >
        <a
          href="#"
          style={{ textDecoration: "none" }}
        >
          <button
            className="btn cust-text mt-5 fw-bold d-flex align-items-center mx-auto rounded-pill"
            style={{
              background: "linear-gradient(90deg,#161664, #3F88BA)",
              color: "white",
              padding: "12px 14px 12px 20px",
              border: "none",
              transition: "opacity 0.3s ease",
              letterSpacing: "3px",
              fontSize: "clamp(0.9rem, 1.1vw, 1.1rem)",
            }}
            onMouseEnter={(e) => (e.target.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.target.style.opacity = "1")}
          >
            GET IN TOUCH
            <div
              className="custom-height rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: "2.5rem",
                height: "2.5rem",
                background: "linear-gradient(90deg, #E7F6FF, #A3CAF5)",
                animationDelay: "0.75s",
                marginLeft: "2.1rem",
              }}
            >
              <img src="/assets/arrowright.webp" alt="about ignite" width={16} height={14} />
            </div>
          </button>
        </a>
      </div>

      <style jsx>{`
        @font-face {
          font-family: "Monstra";
          src: url("/fonts/Monstra.ttf") format("truetype");
          font-weight: normal;
          font-style: normal;
        }

        .my-text {
          font-family: "Monstra", sans-serif;
        }

         .testimonialRect {
          position: absolute;
          opacity: 1;
          pointer-events: none;
          z-index: 2;
        }

        .rect-1 {
           top: 5%;
          left: -45%;
          width: 350px;
          height: 88px;
              }

              .rect-2 {
          top: 40%;
          right: 100%;
          width: 114px;
          height: 88px;
              }

              .rect-3 {
          bottom: 5%;
          right: 100%;
          width: 542px;
          height: 88px;
              }


        .ignite-section {
          padding: 0 20px;
          max-width:88vw;
          margin: 0 auto;
          font-family: "Montserrat", sans-serif;
        }

        .approach {
          max-width: 80vw;
          margin: 0 auto;
        }

        .ignite-container {
          max-width: 90vw;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: flex-start;
        }

        .ignite-left {
          padding-right: 20px;
        }

        .gradient-text {
          background: linear-gradient(to right, #161664, #3f88ba);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }

        .fade-in-section.is-inview {
          opacity: 1;
          transform: translateY(0);
        }

        .subtitle-wrapper {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 15px;
          margin-bottom: 0;
          margin-top:0;

        }

        .header-title {
          font-size: 30px;
          line-height: 1;
          font-weight: 600;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          white-space: nowrap;
        }

        .menu-lines {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .line {
          width: 20px;
          height: 2px;
          background: #00a491;
          display: block;
        }

        .ignite-subtitle {
          font-size: 36.864px;
          font-weight: 700;
          color: #2c5f7d;
          letter-spacing: 1;
          margin: 0;
        }

        .ignite-main-title {
          font-size: 2rem;
          font-weight: 700;
          color: #233467;
          line-height: 1.2;
          margin: 0 0 12px 0;
                    margin-bottom: 25px;

        }

        .green-text {
          background: linear-gradient(90deg, #00a491, #003e37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ignite-description {
          font-size: 1vw;
          // font-weight: 600;
          color: #233467;
          margin: 0 0 18px 0;
          line-height: 1.6;
          max-width: 90%;
        }

        .ignite-secondary-title {
          font-size: 1.5vw;
          font-weight: 700;
          background: linear-gradient(90deg, #00a491, #003e37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 35px;
          letter-spacing: 5%;
          margin: 0 0 15px 0;
          text-transform: uppercase;
        }

        .ignite-short-description {
          font-size: 1vw;
          font-weight: 600;
          color: #7a8ca3;
          margin: 0 0 18px 0;
          line-height: 1.6;
          max-width: 90%;
        }

        .ignite-right {
          position: relative;
        }

        .image-container {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .main-image {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 20px;
        }

        .check-boxes-container {
          display: flex;
          gap: 20px;
          margin-top: 20px;
        }

        .check-box {
background: linear-gradient(269.51deg, rgba(231, 246, 255, 0) -9.55%, rgba(163, 202, 245, 0.35) 92.85%);
          border-radius: 15px;
          padding: 20px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          border: 2px solid #A6EAC7;
          flex: 1;
        }

        .check-circle {
          width: 28px;
          height: 28px;
          // background: linear-gradient(180deg, #3f88ba 0%, #161664 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .check-box span {
          font-size: 1rem;
          color: #2c5f7d;
          font-weight: 500;
          line-height: 1.4;
        }

        .heading-title {
          font-family: "Monstra", sans-serif;
          font-weight: bolder;
          font-size: 33px;
          text-align: center;
          position: relative;
          display: inline-block; /* keeps the underline centered under text */
        }

        .heading-title::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -8px; /* distance below text */
          transform: translateX(-50%);
          width: 120%; /* 👈 make it longer than text (100% = equal to text, 120% = 20% longer) */
          height: 1px; /* thickness of underline */
          background-color: #212529; /* pick your color */
          border-radius: 2px; /* smooth edges */
          opacity: 0.2; /* make it a bit lighter */
        }

        .heading-subtitle {
          font-size: 18px;
    text-align: center;
    color: #233467;
    margin: 0;
    line-height: 1.4;
    font-weight: 500;
}

        .gradient-text {
          background: linear-gradient(to right, #161664, #3f88ba);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
          .approach {
            max-width: 95vw;
          }

          .check-box {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 15px;
          }

          .heading-title {
            font-size: 18px;
          }

          .heading-subtitle {
            font-size: 14px;
            max-width:90%;
            margin:0 auto;
          }

          .check-boxes-container {
            flex-direction: column;
            gap: 15px;
          }
        }

        @media (max-width: 1024px) {
          .ignite-container {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .ignite-left {
            padding-right: 0;
          }

          .ignite-main-title {
            font-size: 2rem;
            font-weight: 700;
            color: #233467;
            line-height: 1;
            margin: 0 0 25px 0;
          }

          .check-boxes-container {
            flex-direction: column;
            gap: 15px;
          }
        }

        @media (max-width: 768px) {
          .subtitle-wrapper {
            justify-content: center;
            text-align: center;
            width: 100%;
          }

                .rect-1 {
        display:none !important;
        }

        .rect-2 {
        display:none !important;
        }

        .rect-3 {
        display:none !important;
        }

          .header-title {
            font-size: 20px !important;
            white-space: nowrap;
            overflow: visible;
            padding: 0 8px;
          }

          .ignite-main-title {
            font-size: 20.4px;
            font-weight: 700;
            color: #233467;
            margin: 0 0 0 0;
            text-align: center;
          }

          .ignite-secondary-title {
            font-size: 1.2rem;
            text-align: center;
          }

          .ignite-description,
          .ignite-short-description {
            text-align: center;
            font-size: 14px;
            max-width: 100%;
          }

          .check-boxes-container {
            padding: 10px;
          }

          .line {
            width: 15px;
          }
        }

        @media (max-width: 480px) {
          .header-title {
            font-size: 19px !important;
            padding: 0 4px;
          }

          .header-title img {
            width: 12px !important;
            height: 15px !important;
          }

          .heading-title {
            font-size: 16px;
          }

          .heading-subtitle {
            font-size: 13px;
          }
        }
          @media (max-width: 575px) {
        .testHeadings {
          width: 100%;
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
  @media (min-width: 1536px) and (max-width: 1919px) {
  .ignite-main-title {
    font-size: 1.8rem;
    font-weight: 700;
    color: #233467;
    line-height: 1.2;
    margin: 40px 0 30px 0;
}
                .rect-1 {
top: 5%;
    left: -45.8%;
    width: 283px;
    height: 70px;
        }

        .rect-2 {
    top: 40%;
    right: 100%;
    width: 114px;
    height: 70px;
        }

        .rect-3 {
 bottom: 5%;
    right: 100%;
    width: 350px;
    height: 70px;
        }
    

.heading-title {
    font-family: "Monstra", sans-serif;
    font-weight: bolder;
    font-size: 25px;
    text-align: center;
    position: relative;
    display: inline-block;
}
    .heading-subtitle {
    font-size: 16px;
    text-align: center;
    color: #233467;
    margin: 0;
    line-height: 1.4;
    font-weight: 500;
}
      .custom-grid {
    gap: .5rem;
    margin-bottom:3.5rem;
  }

  .cust-text {
    background: linear-gradient(90deg, #161664, #3F88BA) !important;
    color: white !important;
padding: 10px 8px 10px 15px !important;
display:flex;
justify-content:space-between;
    border: none !important;
    -webkit-transition: opacity .3s ease !important;
    -moz-transition: opacity .3s ease !important;
    -o-transition: opacity .3s ease !important;
    transition: opacity .3s ease !important;
    letter-spacing: 1px !important;
    font-size: clamp(0.7rem, 1rem, 1.1rem) !important;
    margin-top: 20px !important;
    font-weight: 600 !important;
    min-width:220px;
  }

  .custom-height {
        width: 35px !important;
        height: 35px !important;
    background: linear-gradient(90deg, #E7F6FF, #A3CAF5) !important;
    animation-delay: 0.75s !important;
    margin-left: 1rem !important;
  }
      }
  @media (min-width: 1200px) and (max-width: 1535px) {
  .subtitle-wrapper{
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex
;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -webkit-justify-content: center;
    -moz-box-pack: start;
    -ms-flex-pack: start;
    justify-content: center;
    gap: 15px;
    margin-bottom: 0;
    margin-top: 30px;
}
    .ignite-description{
    font-size: 1vw;
    font-weight: normal;
    color: #233467;
    margin: 0 0 18px 0;
    line-height: 1.6;
    max-width: 90%;
}
    .ignite-main-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #233467;
    line-height: 1.2;
    margin: 0 0 12px 0;
    margin-bottom: 11px;
}
            .rect-1 {
top: 5%;
        left: -40%;
        width: 200px;
        height: 60px;
        }

        .rect-2 {
        top: 40%;
        right: 100%;
        width: 105px;
        height: 60px;
        }

        .rect-3 {
bottom: 5%;
        right: 100%;
        width: 400px;
        height: 60px;
        }
        .heading-title {
    font-family: "Monstra", sans-serif;
    font-weight: bolder;
    font-size: 22px;
    text-align: center;
    position: relative;
    display: inline-block;
}
    .heading-subtitle {
    font-size: 14px;
    text-align: center;
    color: #233467;
    margin: 0;
    line-height: 1.4;
    font-weight: 500;
}
  }
@media (max-width: 575px) {
    .ignite-section{
    padding: 0 0;
        width: 100vw;
    }
        .ignite-container{
          gap:0;
        }
        .subtitle-wrapper,.subtitle-wrapper>div{
          margin-top:0;
          margin-bottom:0px !important;
        }
          .ignite-main-title{
            margin:20px auto;
          }
          .ignite-description{
            font-weight:normal;
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
    margin-top: 10px !important;
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
      `}</style>
    </div>
  );
}
