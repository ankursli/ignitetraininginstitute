// src/components/homeCopy/Test.js (Updated)
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from '@/components/CustomImageWrapper';
// Import the CSS Module
import styles from '@/styles/home-copy/Test.module.css';

const testData = [
  {
    number: "01.",
    title: "ACT",
    img: "/images/test-section1.webp",
    label: "AMERICAN COLLEGE TESTING",
    details: ["Total Courses: 2", "Online & In-Person"],
    btn: "VIEW COURSES",
    link: "/act-tutors-in-dubai/",
  },
  {
    number: "02.",
    title: "AP",
    img: "/images/test-section2.webp",
    label: "ADVANCED PLACEMENTS",
    details: ["Total Courses: 2", "Online & In-Person"],
    btn: "VIEW COURSES",
    link: "/advanced-placements-tutors-in-dubai/",
  },
  {
    number: "03.",
    title: "UCAT",
    img: "/images/test-section3.webp",
    label: "UNIVERSITY CLINICAL APTITUDE TEST",
    details: ["Total Courses: 2", "Online & In-Person"],
    btn: "VIEW COURSES",
    link: "#", // Assuming UCAT doesn't have a specific link yet
  },
];

const Test = ({ active, setActive }) => {
  useEffect(() => {
    setActive(1);
  }, [setActive]);

  return (
    // Apply local module class
    <section className={styles.testSection1}>
      <div className="container">
        {/* Apply local module class */}
        <div className={styles.testHeadings}>
          <div
            data-scroll
            data-scroll-class="is-inview"

            className="fade-in-section"
            style={{ animationDelay: "0.1s" }}
          >
            {/* Global Class used as string, local class used with styles */}
            <h2 className={`SubHeading ${styles.testSubheading}`}>STANDARDISED TESTS</h2>
          </div>
          <h3
            data-scroll
            data-scroll-class="is-inview"

            // Apply local module class. Global class used as string
            className={`fade-in-section ${styles.testTitle}`}
            style={{ animationDelay: "0.2s" }}
          >
            Power Your Academic Goals With Expert Prep{" "}
            <span className="highlight">Support</span>
          </h3>

          <div
            data-scroll
            data-scroll-class="is-inview"

            className="fade-in-section"
            style={{ animationDelay: "0.4s" }}
          >
            <p>
              Whether you're aiming for top scores or a strong foundation, Ignite’s courses give you the edge to succeed.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.testMobileWrapper}>
        <Swiper
          data-scroll
          data-scroll-class="is-inview"

          className={styles.testMobileSwiper}
          centeredSlides={true}
          loop={false}
          pagination={false}
          modules={[Pagination, Navigation, Autoplay]}
          initialSlide={1}
          onSlideChange={(swiper) => {
            if (setActive) {
              setActive(swiper.realIndex);
            }
          }}
          breakpoints={{
            0: { slidesPerView: 1.1, spaceBetween: 20, centeredSlides: true, },
            400: { slidesPerView: 1.1, spaceBetween: 25, centeredSlides: true, },
            575: { slidesPerView: 1.2, spaceBetween: 25, centeredSlides: true, },
            786: { slidesPerView: 1.5, spaceBetween: 30, centeredSlides: true, },
            900: { slidesPerView: 1.8, spaceBetween: 30, centeredSlides: true, },
          }}
        >
          {testData.map((card, idx) => {
            const isCardActive = active === idx;
            return (
              <SwiperSlide key={idx}>
                <div className={styles.testCardMobile}>
                  <div
                    data-scroll
                    data-scroll-class="is-clipped"
                    data-scroll-offset="-10%"
                    className={`${styles.testCardImageWrap} ${isCardActive ? styles.mobileActiveImageArea : ""}`}
                    style={{ backgroundImage: `url(${card.img})` }}
                  >
                    <span className={`${styles.testCardNumber} ${isCardActive ? styles.mobileActiveNumber : ""}`}>{card.number}</span>
                    <h3 className={`${styles.testCardTitle} ${isCardActive ? styles.mobileActiveTitle : ""}`}>{card.title}</h3>
                  </div>
                  <div className={`${styles.testCardDetailsWrap} ${isCardActive ? styles.mobileShowContent : styles.mobileHideContent}`}>
                    <h3 className={styles.testCardLabel}>{card.label}</h3>
                    <div className={styles.testCardDetails}>
                      {card.details &&
                        card.details.map((d, i) => <span key={i}>{d}</span>)}
                    </div>
                    <a href={card.link} className={`${styles.testCardBtnMobile} buttonSkyBlue`} type="button">
                      {card.btn}
                      <span className={styles.btnArrow}>
                        <Image
                          src="/images/right-arrow-blue.webp"
                          width={30}
                          height={30}
                          quality={100}
                          alt="arrow"
                        />
                      </span>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className={styles.testDesktopWrapper}>
        <div className="container">
          <div className={`row ${styles.testCardsRow}`}>
            {testData.slice(0, 3).map((card, idx) => {
              const isCardActive = active === idx;
              return (
                <div
                  key={idx}
                  data-scroll
                  data-scroll-class="is-inview"

                  className={`fade-in-section col-4 px-3 ${styles.testCard}`}
                  style={{ animationDelay: `${0.3 + idx * 0.15}s` }}
                  onMouseEnter={() => setActive(idx)}
                  onMouseLeave={() => setActive(1)}
                >
                  <div
                    data-scroll
                    data-scroll-class="is-clipped"
                    data-scroll-offset="-10%"

                    className={`${styles.cardImageArea} ${isCardActive ? styles.activeImageArea : ""}`}
                    style={{ backgroundImage: `url('${card.img}')` }}
                  >
                    <div className={styles.imageOverlay}></div>
                    <span className={styles.cardNumber}>{card.number}</span>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                  </div>
                  <div
                    className={`${styles.cardContentArea} ${isCardActive ? styles.showContent : styles.hideContent}`}
                  >
                    <h3 className={styles.cardLabel}>{card.label}</h3>
                    <div className={styles.cardDetails}>
                      {card.details &&
                        card.details.map((d, i) => (
                          <p key={i} className="m-0">{d}</p>
                        ))}
                    </div>
                    <a href={card.link} className={`${styles.cardBtn} buttonSkyBlue`} type="button">
                      {card.btn}{" "}
                      <Image
                        src="/images/right-arrow-blue.webp"
                        width={40}
                        height={40}
                        quality={100}
                        alt="arrow"
                      />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Test;