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
    title: "Language Mastery",
    desc: "Develop strong fluency and confidence in French communication.",
    width: 77,
    height: 67,
  },
  {
    number: "02",
    icon: "/images/usp-icon2.webp",
    title: "Personalized Approach",
    desc: "Lessons tailored to your goals, pace, and strengths.",
    width: 67,
    height: 63,
  },
  {
    number: "03",
    icon: "/images/usp-icon3.webp",
    title: "Cultural Insights",
    desc: "Learn French with real-world cultural relevance and depth.",
    width: 76,
    height: 69,
  },
  {
    number: "04",
    icon: "/images/usp-icon4.webp",
    title: "Proven Results",
    desc: "Consistent track record of high grades in French exams.",
    width: 66,
    height: 71,
  },
  {
    number: "05",
    icon: "/images/usp-icon5.webp",
    title: "Interactive Learning",
    desc: "Lively & interactive sessions that enhance language retention.",
    width: 78,
    height: 74,
  },
  {
    number: "06",
    icon: "/images/usp-icon6.webp",
    title: "Flexible Sessions",
    desc: "Online or in-person classes that suit your schedule.",
    width: 76,
    height: 78,
  },
  {
    number: "07",
    icon: "/images/usp-icon1.webp",
    title: "Tailored Guidance",
    desc: "Curriculum-specific support to meet academic requirements.",
    width: 77,
    height: 67,
  },
  {
    number: "08",
    icon: "/images/usp-icon2.webp",
    title: "Exam Excellence",
    desc: "Thorough preparation for top performance in French assessments.",
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
        <div
          className={`fade-in-section ${styles.uspSection}`}
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
          style={{ animationDelay: "0.2s" }}
        >
          <div className="row justify-content-between gx-5">
            <div className="col-lg-4">
              <div
                className={styles.uspLeft}
                data-scroll
                data-scroll-sticky
                data-scroll-target={`.${styles.uspSection}`}
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
                  className={`fade-in-section ${styles.uspTitle} mb-0`}
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{ animationDelay: "0.2s" }}
                >
                  What Do Students Get From Ignite's French Support?
                </h3>

                <a
                  href="/about-us/"
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
                  <div key={index} className={styles.uspSlide}>
                    {row.map((usp, i) => (
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