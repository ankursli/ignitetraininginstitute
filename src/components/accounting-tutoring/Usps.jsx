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
    title: "Expert Guidance",
    desc: "Learn from skilled tutors with deep accounting expertise.",
    width: 77,
    height: 67,
  },
  {
    number: "02",
    icon: "/images/usp-icon2.webp",
    title: "Practical Insights",
    desc: "Understand real-world accounting through applied learning methods.",
    width: 67,
    height: 63,
  },
  {
    number: "03",
    icon: "/images/usp-icon3.webp",
    title: "Proven Results",
    desc: "Consistent track record of top scores in Accounting assessments.",
    width: 60,
    height: 65,
  },
  {
    number: "04",
    icon: "/images/usp-icon4.webp",
    title: "Clear Concepts",
    desc: "Grasp complex accounting topics with simplified explanations.",
    width: 80,
    height: 78,
  },
  {
    number: "05",
    icon: "/images/usp-icon5.webp",
    title: "Flexible Sessions",
    desc: "Study efficiently on your terms with schedule-friendly classes..",
    width: 71,
    height: 70,
  },
  {
    number: "06",
    icon: "/images/usp-icon6.webp",
    title: "Tailored Learning",
    desc: "Accounting lessons expertly designed to match your style and goals.",
    width: 80,
    height: 81,
  },
  {
    number: "07",
    icon: "/images/usp-icon1.webp",
    title: "Confidence Boost",
    desc: "Build lasting clarity and confidence through guided support.",
    width: 77,
    height: 67,
  },
  {
    number: "08",
    icon: "/images/usp-icon2.webp",
    title: "Exam Strategies",
    desc: "Tackle exams with smart, targeted preparation techniques.",
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
          // Apply local module class: styles.uspSection
          className={`fade-in-section ${styles.uspSection}`}
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
          style={{ animationDelay: "0.2s" }}
        >
          <div className="row justify-content-between gx-5">
            <div className="col-lg-4">
              <div
                // Apply local module class: styles.uspLeft
                className={styles.uspLeft}
                // FIX: Attributes enable Locomotive Scroll's custom sticky behavior
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
                  // Apply local module class: styles.uspTitle
                  className={`fade-in-section ${styles.uspTitle} mb-0`}
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{ animationDelay: "0.2s" }}
                >
                  What Do Students Get From Ignite's French Support?
                </h3>

                {/* The commented-out subtitle/desc elements (uspSubtitle, uspDesc) 
                    are structurally correct if uncommented, using local styles. */}

                <a
                  href="/about-us/"
                  // Apply local module class: styles.uspBtn, and global class: buttonSkyBlue
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
              {/* Apply local module class: styles.uspRight */}
              <div className={styles.uspRight}>
                {uspDataRows.map((row, index) => (
                  // Apply local module class: styles.uspSlide
                  <div key={index} className={styles.uspSlide}>
                    {row.map((usp, i) => (
                      // Apply local module class: styles.uspItem
                      <div key={i} className={`fade-in-section ${styles.uspItem}`}
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat>
                        <div className={styles.uspNumber}>{usp.number}</div>
                        <div className={styles.uspIconCircle}>
                          <img
                            src={usp.icon}
                            alt={usp.title}
                            // Apply local module class: styles.uspIcon
                            className={styles.uspIcon}
                            width={usp.width}
                            height={usp.height}
                          />
                        </div>
                        <div className={styles.uspContent}>
                          {/* Apply local module classes: styles.uspItemTitle, styles.uspItemDesc */}
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