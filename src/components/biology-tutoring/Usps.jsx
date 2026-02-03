import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Scrollbar,
  Mousewheel,
} from "swiper/modules";
import Image from "next/image";
import styles from '@/styles/home-copy/Usps.module.css';

const uspData = [
  {
    number: "01",
    icon: "/images/usp-icon1.webp",
    title: "Expert Insight",
    desc: "Learn from Biology specialists with deep subject expertise.",
    width: 77,
    height: 67,
  },
  {
    number: "02",
    icon: "/images/usp-icon2.webp",
    title: "Clear Concepts",
    desc: "Break down complex Biology topics into understandable concepts.",
    width: 67,
    height: 63,
  },
  {
    number: "03",
    icon: "/images/usp-icon3.webp",
    title: "Proven Results",
    desc: "Consistently high student scores in Biology exams.",
    width: 76,
    height: 69,
  },
  {
    number: "04",
    icon: "/images/usp-icon4.webp",
    title: "Flexible Approach",
    desc: "Customized learning schedules that suit your academic needs.",
    width: 66,
    height: 71,
  },
  {
    number: "05",
    icon: "/images/usp-icon5.webp",
    title: "Tailored Support",
    desc: "Personalized tutoring aligned to curriculum and learning goals.",
    width: 78,
    height: 74,
  },
  {
    number: "06",
    icon: "/images/usp-icon6.webp",
    title: "Practical Knowledge",
    desc: "Connect theory with real-world Biology applications and understanding.",
    width: 76,
    height: 78,
  },
  {
    number: "07",
    icon: "/images/usp-icon1.webp",
    title: "Exam Excellence",
    desc: "Structured preparation to excel in Biology assessments.",
    width: 77,
    height: 67,
  },
  {
    number: "08",
    icon: "/images/usp-icon2.webp",
    title: "Boosted Confidence",
    desc: "Build confidence through clarity, practice, and progress tracking.",
    width: 67,
    height: 63,
  },
];

const uspDataRows = [];
for (let i = 0; i < uspData.length; i += 2) {
  uspDataRows.push(uspData.slice(i, i + 2));
}

export default function Usps({ }) {
  return (
    <>
      <div
        className="usp-section sp-container"
      >
        {/* Apply local module class */}
        <div
          className={`fade-in-section ${styles.uspSection}`}
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
          style={{ animationDelay: "0.2s" }}
        >
          {/* Global Bootstrap classes */}
          <div className="row justify-content-between gx-5">
            <div className="col-lg-4">
              <div
                // Apply local module class
                className={styles.uspLeft}
                // FIX: These attributes enable Locomotive Scroll's custom sticky behavior
                data-scroll
                data-scroll-sticky
                data-scroll-target={`.${styles.uspSection}`} // Target the module class
              >
                <h2
                  className="fade-in-section SubHeading mb-0"
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{ animationDelay: "0.1s" }}
                >
                  OUR PROMISE
                </h2>

                <h3
                  // Apply local module class
                  className={`fade-in-section ${styles.uspTitle} mb-0`}
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{ animationDelay: "0.2s" }}
                >
                  What Do Students Get From Ignite's Biology Support?
                </h3>

                <a
                  href="/about-us/"
                  // Apply local module class and global class
                  className={`${styles.uspBtn} fade-in-section buttonSkyBlue`}
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{ animationDelay: "0.5s" }}
                >
                  KNOW MORE ABOUT IGNITE{" "}
                  <Image
                    src="/images/right-arrow-blue.webp"
                    width={40}
                    height={40}
                    quality={100}
                    alt="right arrow"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              <div className={styles.uspRight}>
                {uspDataRows.map((row, index) => (
                  // Apply local module class
                  <div key={index} className={styles.uspSlide}>
                    {row.map((usp, i) => (
                      // Apply local module class
                      <div key={i} className={`fade-in-section ${styles.uspItem}`}
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat>
                        <div className={styles.uspNumber}>{usp.number}</div>
                        <div className={styles.uspIconCircle}>
                          <img
                            src={usp.icon}
                            alt={usp.title}
                            className={styles.uspIcon}
                            width={usp.width}
                            height={usp.height}
                          />
                        </div>
                        <div className={styles.uspContent}>
                          <h3 className={styles.uspItemTitle}>{usp.title}</h3>
                          <div className={styles.uspItemDesc}>{usp.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}