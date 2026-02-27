"use client";
import Image from "next/image";

export default function InfoCardLeft() {
    return (
        <div className="col-lg-8 d-flex flex-column justify-content-center pe-lg-4 p-4 left-content v100">
            <h1
                className="fw-bold text-white text-uppercase mb-3 desktop-fade-in hero-h1"
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat
            >
                IBDP Tutors In Dubai, UAE<br /> For Curriculum Excellence...
            </h1>
            <div className="divider desktop-fade-in"
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat
                style={{
                    animationDelay: "0.25s",
                }}></div>

            <h2
                className="text-white desktop-fade-in fs-8 fs-md-10 hero-h2"
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat
            >
                Max Out To 45 Scores In IBDP
            </h2>

            <div
                className="d-flex flex-wrap justify-content-evenly p-4 mb-4 fw-semibold desktop-fade-in info-row"
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat
                style={{
                    background: "linear-gradient(to right, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
                    backdropFilter: "blur(3px)",
                    WebkitBackdropFilter: "blur(3px)",
                    borderRadius: "100px",
                    maxWidth: "823px",
                    fontSize: "0.9rem",
                    animationDelay: "0.3s",
                    border: "1px solid rgba(255, 255, 255, 0.30)",
                }}
            >

                <h3
                    className="d-flex flex-column align-items-center text-center text-white info-col info-col-1"
                    style={{
                        borderRight: "1px solid rgba(255, 255, 255, 0.3)",
                        margin: 0,
                        fontSize: "inherit",
                        fontWeight: "inherit",
                        lineHeight: "inherit",
                    }}
                >
                    <span className="mb-2 icon-wrap" style={{ color: "#acf2d6" }}>
                        <Image
                            src="/assets/medal.webp"
                            alt="Grade Support"
                            width={32}
                            height={45}
                            className="icon-img"
                            style={{ width: "auto", height: "auto", maxHeight: "45px", maxWidth: "32px" }}
                        />
                    </span>
                    Grade 11<br />& 12 Support
                </h3>

                {/* ---- BLOCK 2 ---- */}
                <h3
                    className="d-flex flex-column align-items-center text-center text-white info-col info-col-2"
                    style={{
                        borderRight: "1px solid rgba(255, 255, 255, 0.3)",
                        margin: 0,
                        fontSize: "inherit",
                        fontWeight: "inherit",
                        lineHeight: "inherit",
                    }}
                >
                    <span className="mb-2 icon-wrap" style={{ color: "#acf2d6" }}>
                        <Image
                            src="/assets/person.webp"
                            alt="Learning Mode"
                            width={30}
                            height={45}
                            className="icon-img icon-img-2"
                        />
                    </span>
                    Online <br /> & In-Person
                </h3>

                {/* ---- BLOCK 3 ---- */}
                <h3
                    className="d-flex flex-column align-items-center text-center text-white info-col"
                    style={{
                        margin: 0,
                        fontSize: "inherit",
                        fontWeight: "inherit",
                        lineHeight: "inherit",
                    }}
                >
                    <span className="mb-2 icon-wrap" style={{ color: "#acf2d6" }}>
                        <Image
                            src="/assets/location.webp"
                            alt="Location"
                            width={32}
                            height={42}
                            className="icon-img icon-img-3"
                        />
                    </span>

                    Dubai <br /> (DIFC, JLT)

                </h3>

            </div>

            <p
                className="desktop-fade-in text-white mb-4 pt-3 pt-md-4"
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat
                style={{
                    maxWidth: "750px",
                    fontSize: "1.2rem",
                    lineHeight: "1.8",
                    fontWeight: "500",
                    opacity: "0.9",
                }}
            >
                We specialize in expert tutoring support for the IB Diploma Programme across all subject groups. Our structured approach combines in-depth resources, focused training, & rigorous testing for consistent results.
            </p>

            <div className="d-flex gap-3 btnwraper desktop-fade-in"
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat>
                <a
                    href="/join-free-demo-class/"
                    style={{ textDecoration: "none" }}
                >
                    <button
                        className="btn cust-text btng fw-bold text-uppercase d-flex justify-content-between align-items-center shadow left-btn"
                        style={{
                            background: "linear-gradient(to right, #A3CAF5, #E7F6FF)",
                            color: "#273972",
                            borderRadius: "40px",
                            fontSize: "1rem",
                            padding: "10px 15px",
                            boxShadow: "2px 4px 8px rgba(38, 66, 149, 0.5)",
                            minWidth: "auto",
                            gap: "20px",
                        }}
                    >
                        <span style={{ letterSpacing: "0px" }}>
                            Get A Free Demo
                        </span>
                        <img
                            src="/assets/rar.webp"
                            alt="ibdp tutor in dubai"
                            className="custom-height"
                            width={35}
                            height={35}
                        />
                    </button>
                </a>
            </div>

            <style jsx>{`
        /* Original Styles from InfoCard.jsx */
        .info-row {
          -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 20%);
          -webkit-mask-repeat: no-repeat;
          -webkit-mask-size: 100% 100%;
          mask-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 20%);
          mask-repeat: no-repeat;
          mask-size: "100% 100%";
        }
        .divider {
          height: 1px;
          width: 828px;
          border-radius: 5px;
          background-color: gray;
        }

        /* --- DESKTOP ANIMATION ONLY --- */
        /* By default (Mobile), no animation properties exist on .desktop-fade-in */
        
        @media (min-width: 1101px) {
          .desktop-fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease-out, transform 0.5s ease-out;
          }
          .desktop-fade-in.is-inview {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* --- Converted JS Styles AND Inline Styles to CSS --- */
        
        .hero-h1 {
            line-height: 1.2;
            max-width: 863px;
            animation-delay: 0.2s;
            font-size: 2.6rem;
        }
        .hero-h2 {
            letter-spacing: 0.2em;
            font-weight: 600;
            opacity: 1;
            animation-delay: 0.25s;
            font-size: inherit;
            line-height: inherit;
            margin-top: 19px;
            margin-bottom: 26px;
        }

        /* 1. Column Padding Handling (isMobile <= 1100px) */
        .info-col-1 { padding-right: 3.7rem; }
        .info-col-2 { padding-right: 4rem; }

        @media (max-width: 1100px) {
          .info-col-1 { padding-right: 16px !important; }
          .info-col-2 { padding-right: 16px !important; }
        }

        /* 2. Icon Sizing (isMobile <= 1100px) */
        .icon-img-2 {
            width: 30px;
            height: 45px;
        }
        .icon-img-3 {
            width: 32px;
            height: 42px;
        }

        @media (max-width: 1100px) {
           .icon-img-2 {
               width: 20px !important;
               height: 30px !important;
           }
           .icon-img-3 {
               width: 22px !important;
               height: 30px !important;
           }
        }
        
        /* 3. Button Margins (isMobile <= 1100px) */
        .left-btn {
            margin-top: 20px !important;
        }
         @media (max-width: 1100px) {
            .left-btn {
                margin-top: auto !important;
            }
         }


        /* --- Original Media Queries with H1 updates --- */

        @media (max-width: 768px) {
          .info-row {
            -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 5%) !important;
            mask-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 5%) !important;
          }
        }
        
        /* iPad Mini */
        @media (min-width: 768px) and (max-width: 820px) {
          .left-content { padding: 2rem 1.5rem !important; }
          .left-content h1 { font-size: 1.8rem !important; max-width: 95% !important; }
          .divider { width: 95% !important; }
          .info-row { max-width: 95% !important; padding: 1.2rem 0.8rem !important; font-size: 0.8rem !important; }
          .left-content p { font-size: 0.95rem !important; max-width: 95% !important; line-height: 1.5 !important; }
          .bt-width { width: 70% !important; }
        }

        /* iPad Pro */
        @media (min-width: 1024px) and (max-width: 1199px) {
          .left-content { padding: 2.5rem 2rem 2rem 2.5rem !important; }
          .left-content h1 { font-size: 1.5rem !important; max-width: 90% !important; }
          .divider { width: 85% !important; }
          .info-row { max-width: 85% !important; padding: 1.8rem 1.2rem !important; font-size: 0.9rem !important; }
          .left-content p { font-size: 1rem !important; max-width: 85% !important; line-height: 1.6 !important; }
        }

        /* Large Screens */
        @media (min-width: 1400px) {
          .left-content { padding: 4rem 2.5rem 4rem 4rem !important; }
        }
        
         /* Very Large Screens */
        @media (min-width: 1920px) {
          .left-content { padding:5rem 3rem 5rem 5rem!important; gap:5px !important; }
        }
        
        @media (min-width: 1200px) and (max-width: 1535px) {
          .left-content h1 { font-size: 2rem !important; max-width: 90% !important; }
          .divider { width: 70% !important; }
          .left-content p { font-size: 1rem !important; max-width: 90% !important; line-height: 1.6 !important; }
        }
        
        @media (min-width: 1536px) and (max-width: 1919px) {
            .btng { margin-top:7px !important; }
             .left-content { padding: 2rem 1.5rem 2rem 2.5rem !important; }
             .left-content h1 { font-size: 2rem !important; max-width: 90% !important; }
             .divider { width: 90% !important; }
            .info-row { max-width: 90% !important; padding: 1.5rem 1rem !important; font-size: 0.85rem !important; }
            .left-content p { font-size: 1rem !important; max-width: 90% !important; line-height: 1.6 !important; }
        }
        
        @media (max-width: 576px) {
          .info-row { font-size: 0.75rem !important; }
           /* Overriding the icon-img sizes for mobile specifically */
           .icon-img, .icon-img-2, .icon-img-3 {
               width: 20px !important;
               height: 20px !important;
           }
        }
        
        @media (max-width: 991.98px) {
            .col-lg-8 {
                width: 100% !important;
                order: 1 !important;
                margin-top: 3rem !important;
                padding: 2rem 2.3rem 0 1.5rem!important;
                gap:0.1rem;
            }
             h1 {
                font-size: 20px !important; 
                line-height: 1.2 !important;
                text-align: center !important;
                margin-bottom: 1rem !important;
                max-width: none !important;
            }
            .text-white.mb-4:first-of-type, .text-white.fs-8:first-of-type {
                font-size: 0.75rem !important;
                margin-bottom: 1.5rem !important;
                text-align: center !important;
            }
             .info-row {
                flex-direction: row !important;
                justify-content: space-around !important;
                align-items: center !important;
                gap: 0.5rem !important;
                padding: 0.8rem 1.6rem!important;
                margin-bottom: 1.5rem !important;
                background: rgba(255,255,255,0.03)!important;
            }
             .info-col {
                border-right: 1px solid rgba(255, 255, 255, 0.3) !important;
                padding-right: 0.8rem !important;
                flex: 1 !important;
                font-size: 0.7rem !important;
                line-height: 1.2 !important;
             }
            .info-col:last-child {
                border-right: none !important;
                padding-right: 0 !important;
             }
             .info-col img {
                width: 24px !important;
                height: 24px !important;
             }
             .text-white.mb-4:last-of-type {
                font-size: 0.8rem !important;
                line-height: 1.4 !important;
                text-align: center !important;
                margin-bottom: 1.5rem !important;
                max-width: none !important;
                padding: 0 1rem !important;
             }
             .d-flex.gap-3 {
                justify-content: center !important;
             }
        }
        
        @media (max-width: 575px) {
             .text-white.mb-4:last-of-type {
                padding: 1rem !important;
                line-height: 1.6 !important;
             }
              .info-row{ margin-top:1rem !important; }
              .cust-text {
                padding: 8px 15px 8px 15px !important;
                border: none !important;
                transition: opacity .3s ease !important;
                letter-spacing: 1px !important;
                font-size: 1rem !important;
                margin:10px auto!important;
                min-width: auto !important;
              }
              .custom-height {
                width: 30px !important;
                height: 30px !important;
                animation-delay: 0.75s !important;
                margin-left: 1rem !important;
              }
        }
        
        @media (max-width: 380px) {
            .info-col {
                border-right: 1px solid rgba(255, 255, 255, 0.3) !important;
                padding-right: 0.8rem !important;
                flex: 1 !important;
                font-size: 0.6rem !important;
                line-height: 1.2 !important;
            }
             .icon-img {
                width: 15px !important;
                height: 15px !important;
             } 
        }

        /* Desktop/Shared Breakpoints */
        @media (min-width: 768px) {
            .cust-text {
                padding:  10px 14px 10px 20px !important;
                transition: opacity 0.3s ease !important;
                letter-spacing: 1px !important;
                font-size: clamp(1rem, 1.1vw, 1.1rem) !important;
            }
             .custom-height {
                width: 40px !important;
                height: 40px !important;
                animation-delay: 0.75s !important;
                margin-left: 1rem !important;
             }
        }
        
        @media (min-width: 992px) {
           .col-lg-8 {
                flex: 0 0 66.666667% !important;
                max-width: 62.666667%!important;
                padding-right: 1rem !important;
           } 
        }
        
        /* Mobile Text Toggle */
        @media (max-width: 1100px) {
          
          .icon-img, .icon-img-2, .icon-img-3 {
              max-width: 22px !important;
              max-height: 30px !important;
              width: auto !important;
              height: auto !important;
          }
          
           /* NO ANIMATION OVERRIDE NEEDED - CLASS DOESNT EXIST ON MOBILE */
        }

      `}</style>
        </div>
    );
}
