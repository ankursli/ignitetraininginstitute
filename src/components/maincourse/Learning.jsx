import React, { useEffect, useState } from "react";
import Image from '@/components/CustomImageWrapper';

const advantages = [
  {
    title: "Subject Experts Who Truly Understand the Curriculum",
    icon: "/assets/union3.webp",
    text: "Our tutors aren't generalists, they're specialists with deep expertise in subjects across IB, IGCSE, & A-Levels, bringing clarity & confidence to every session.",
    width: 98,
    height: 135,
  },
  {
    title: "Small Groups, Big Focus",
    icon: "/assets/Union1.webp",
    text: "We keep learning groups intentionally small, so each student receives personalised attention, space to ask questions, & the support to learn at their own pace.",
    width: 146,
    height: 101,
  },
  {
    title: "Measured By Real Academic Progress",
    icon: "/assets/unioun.webp",
    text: "Improving grades isn't a by-product, it's our priority. We track progress through meaningful feedback, visible improvement, & consistent academic results.",
    width: 136,
    height: 129,
  },
  {
    title: "Ready For Every Exam, Every Time",
    icon: "/assets/heartg.webp",
    text: "We go beyond covering the syllabus, equipping students with strategies, timed practice, & revision techniques to approach any exam with confidence.",
    width: 109,
    height: 133,
  },
  {
    title: "Strong Foundations That Last",
    icon: "/assets/union3.webp",
    text: "Rather than rote learning, we focus on building a solid understanding of fundamental concepts, ensuring students can apply knowledge in any context.",
    width: 98,
    height: 135,
  },
  {
    title: "Consistent Motivation & Accountability",
    icon: "/assets/Union1.webp",
    text: "We create a focused learning environment that nurtures discipline, encourages curiosity, & helps students stay committed to their academic goals.",
    width: 146,
    height: 101,
  },
  {
    title: "Real Practice, Real Thinking",
    icon: "/assets/unioun.webp",
    text: "Sessions are built around active problem-solving using real exam-style questions, so students learn by thinking, not just by listening.",
    width: 136,
    height: 129,
  },
  {
    title: "Practice Exams That Prepare You For The Real One",
    icon: "/assets/heartg.webp",
    text: "Our mock exams simulate actual exam conditions, building familiarity, managing time pressure, & helping students walk into the real test fully prepared.",
    width: 109,
    height: 133,
  },
];


const Learning = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
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

  // Calculate max slides based on screen size
  const getMaxSlides = () => {
    if (isMobile) {
      // Mobile: show 1.5 cards, so we can slide through all
      return Math.max(0, advantages.length - 1);
    } else {
      // Desktop: show 1 card at a time, but account for the card width and gap
      return Math.max(0, advantages.length - 1);
    }
  };

  const nextSlide = () => {
    const maxSlides = getMaxSlides();
    setCurrentSlide((prev) => (prev >= maxSlides ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const maxSlides = getMaxSlides();
    setCurrentSlide((prev) => (prev <= 0 ? maxSlides : prev - 1));
  };

  const goToSlide = (index) => {
    const maxSlides = getMaxSlides();
    if (index <= maxSlides) {
      setCurrentSlide(index);
    }
  };

  return (
    <div className="container" style={{ marginBlock: isMobile ? "0" : "" }}>
      {/* Mobile Layout */}
      <div className="mobile-layout">
        <div className="text-center fade-in-section wedifferent">
          <div className="testHeadings">
            <div
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section"
              style={{ animationDelay: "0.1s" }}
            >
              <h2 className="SubHeading testSubheading">HOW ARE WE DIFFERENT?
              </h2>
            </div>
            <h3
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section testTitle"
              style={{ animationDelay: "0.2s", fontSize: "2rem" }}
            >
              Here's How Our Approach Makes <span className="highlight"> All The </span> Difference
            </h3>
          </div>
          <p className="mobile-subtitle fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            style={{ animationDelay: "0.3s" }}>
            We blend expertise, structure, & care to help students thrive academically & personally, ensuring every learner gets the clarity & support they need.
          </p>
        </div>




        <div className="mobile-cards-container fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat="true">
          <div
            className="mobile-cards"
            style={{
              transform: `translateX(-${currentSlide * 60}%)`,
              transition: "transform 0.5s ease",
            }}
          >
            {advantages.map((item, index) => (
              <div
                key={index}
                className={`mobile-card ${index % 2 === 1 ? "mobile-green-card" : "mobile-blue-card"
                  }`}
              >
                <div className="mobile-card-icon">
                  <Image height={90} width={90} src={item.icon} alt="icon" className="mobile-icon" />
                </div>
                <div className="mobile-card-content">
                  <h3 className="mobile-card-title">{item.title}</h3>
                  <p className="mobile-card-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mobile-carousel-controls fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat="true">
          <button className="mobile-carousel-btn prev" onClick={prevSlide}>
            <Image
              src="/assets/rigtarr2.webp"
              alt="previous"
              width={isMobile ? 25 : 50}
              height={isMobile ? 25 : 50}
            />
          </button>
          <button className="mobile-carousel-btn next" onClick={nextSlide}>
            <Image src="/assets/leftarr2.webp" alt="next" width={isMobile ? 25 : 50} height={isMobile ? 25 : 50} />
          </button>
        </div>

        <div className="mobile-carousel-dots fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat="true">
          {Array.from({ length: getMaxSlides() + 1 }, (_, index) => (
            <div
              key={index}
              className={`mobile-dot-rect ${index === currentSlide ? "active" : ""
                }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="desktop-layout">
        <div className="desktop-header">
          <div className="desktop-content fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true">
            <div className="desktop-left">
              <div className="testimonialHeader" style={{ marginTop: "15%" }}>
                <h2 className="SubHeading">HOW ARE WE DIFFERENT?
                </h2>
              </div>

              <h3
                className="fw-bold mb-0 fade-in-section"
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat
                style={{
                  animationDelay: "0.3s",
                  fontSize: isMobile ? "1.5rem" : "2rem",
                  lineHeight: "1.1",
                  textTransform: "uppercase",
                  marginTop: "3vh"
                }}
              >
                <span
                  style={{
                    background: "linear-gradient(135deg,#161664, #3F88BA)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  Here's How Our Approach Makes <br />
                  <span
                    style={{
                      background: "linear-gradient(135deg, #00A491, #003E37)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent"
                    }}
                  >
                    All The
                  </span>{" "}
                  Difference
                </span>

              </h3>
              <p className="desktop-subtitle">
                We blend expertise, structure, & care to help students thrive academically & personally, ensuring every learner gets the clarity & support they need.
              </p>
              <div className="carousel-controls">
                <button className="carousel-btn prev" onClick={prevSlide}>
                  <Image src="/assets/rigtarr2.webp" alt="previous" width={isMobile ? 30 : 50} height={isMobile ? 30 : 50} />
                </button>
                <button className="carousel-btn next" onClick={nextSlide}>
                  <Image src="/assets/leftarr2.webp" alt="next" width={isMobile ? 30 : 50} height={isMobile ? 30 : 50} />
                </button>
              </div>
            </div>
            <div className="desktop-right">
              <div className="desktop-cards-container">
                <div
                  className="desktop-cards"
                  style={{
                    transform: `translateX(-${currentSlide * (400 + 80)}px)`,
                    transition: "transform 0.5s ease",
                  }}
                >
                  {advantages.map((item, index) => (
                    <div
                      key={index}
                      className={`desktop-card ${index % 2 === 1 ? "greenBg" : "blueBg"
                        }`}
                    >
                      <div className="desktop-card-icon">
                        <img src={item.icon} alt="ignite's tutoring courses" width={item.width} height={item.height} />
                      </div>
                      <h3 className="desktop-card-title">{item.title}</h3>
                      <p className="desktop-card-text">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Centered dot indicators for desktop */}
        <div className="desktop-carousel-dots">
          {Array.from({ length: getMaxSlides() + 1 }, (_, index) => (
            <div
              key={index}
              className={`dot-rect ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .advantages-container {
          max-width:90vw;
          margin:48 auto;
        }

        .advantages-badge {
          background: #2c5282;
          color: white;
          padding: 8px 20px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 2px;
          display: inline-block;
          margin-bottom: 20px;
        }

        .highlight {
          color: #319795;
        }

        /* Mobile Layout */
        .mobile-layout {
          display: block;
        }

        .desktop-layout {
          display: none;
        }

        .section-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .mobile-subtitle {
          font-size: 16px;
          color: #233467;
          line-height: 1.6;
          margin-top: 20px;
          font-weight:500;
          padding-bottom: 40px;
        }

        .mobile-cards-container {
          padding: 0 10px;
          margin-bottom: 30px;
          overflow: hidden;
        }

        .mobile-cards {
          display: flex;
          gap: 15px;
        }

        .mobile-card {
          flex: 0 0 60%;
          padding: 25px 20px;
          border-radius: 16px;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          transition: transform 0.3s ease;
        }

        .mobile-card:hover {
          transform: translateY(-5px);
        }

        .mobile-carousel-controls {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 20px;
        }

        .mobile-carousel-dots {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 15px;
        }

        .mobile-dot-rect {
          width: 10px;
          height: 3px;
          background: #cbd5e0;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .mobile-dot-rect.active {
          width: 25px;
          height: 3px;
          background: gray;
        }

        .mobile-carousel-btn {
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: none;
          padding: 10px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .mobile-carousel-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .mobile-blue-card {
          background-image: url("/assets/bluebg.webp");
        }

        .mobile-green-card {
          background-image: url("/assets/greenbg.webp");
        }

        .mobile-card-icon {
          margin-bottom: 15px;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        .mobile-icon {
          width: 60px;
          height: 60px;
          object-fit: contain;
        }

        .mobile-card-content {
          text-align: left;
        }

        .mobile-card-title {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 12px;
          line-height: 1.3;
          background: linear-gradient(135deg, #161664,#3f88ba);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .mobile-card-text {
          font-size: 12px;
          color: #233467;
          line-height: 1.5;
          margin: 0;
          font-weight:500;
        }
           :global(.mobile-card-icon img) {
            height: 50px !important;
            width: auto !important;
        }

        /* Desktop Layout */
       @media (min-width: 768px) {
                  
                   
                      .mobile-layout {
                        display: none;
                    }

                    .desktop-layout {
                        display: block;
                    }

                    .advantages-container {
                        padding: 0 40px;
                        max-width: 90vw;
                        margin: 0 auto;
                    }

                    .desktop-header {
                        width: 100%;
                    }

                    .desktop-content {
                        display: flex;
                        gap: 60px;
                        align-items: flex-start;
                    }

                    .desktop-left {
                        flex:0 0 500px;
                    }

                    .desktop-title {
                        font-size: 32px;
                        font-weight: 700;
                        color: #2c5282;
                        line-height: 1.2;
                        margin: 0 0 20px 0;
                    }

                    .desktop-subtitle {
                        font-size: 18px;
                        color:#233467;
                        line-height: 1.6;
                        margin-block: 20px;
                    }

                    .carousel-controls {
                        display: flex;
                        gap: 15px;
                        border:none !important;
                    }

                    .carousel-btn {
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border:none !important;
                        background:none !important;
                    }

                    .desktop-right {
                        flex: 1;
                        position: relative;
                    }

                    .desktop-cards-container {
                        overflow: hidden;
                        border-radius: 20px;
                        background: transparent;
                        height: 600px;
                        position: relative;
                    }

                    .desktop-cards {
                        display: flex;
                        flex-direction: row;
                        transition: transform 0.5s ease;
                        height: 100%;
                        gap: 5rem;
                    }

                    .desktop-card {
                        flex: 0 0 400px;
                        padding: 15px 30px 30px 30px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        text-align: left;
                        border-radius: 24px;
                        transition: transform 0.3s ease;
                    }

            
          .blueBg {
            background-image: url("/assets/bluebg.webp");
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
          }

          .greenBg {
            background-image: url("/assets/greenbg.webp");
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
          }

            .desktop-card-icon {
            margin-bottom: 19px;
            width: 90px;
            height: 90px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }

          .desktop-card-icon img {
            width: 90px;
            height: 90px;
            object-fit: contain;
          }

                    .desktop-card-title {
                        font-size: 28px;
                        font-weight: 700;
                        margin-bottom: 18px;
                        line-height: 1.3;
                        background: linear-gradient(to right, #161664, #3F88BA);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                    }

                    .desktop-card-text {
                              font-size: 18px;
        color: #233467;
        line-height: 1.6;
        margin: 0;
        font-weight: 600;
                    }

                    .desktop-carousel-dots {
                        display: flex;
                        justify-content: center;
                        gap: 10px;
                        margin-top: 30px;
                        width: 100%;
                    }

                    .carousel-dots {
                        display: flex;
                        justify-content: center;
                        gap: 10px;
                        margin-top: 20px;
                    }

                    .dot-rect {
                        width: 10px;
                        height: 3px;
                        background: #cbd5e0;
                        border-radius:40px;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    }

                    .dot-rect.active {
                        background: gray;
                         width: 25px;
                        height: 3px;
                    }
                }
      `}</style>
    </div>
  );
};

export default Learning;