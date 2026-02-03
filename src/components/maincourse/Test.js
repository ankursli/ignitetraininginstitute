// src/components/homeCopy/Test.js (Updated)
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from '@/components/CustomImageWrapper';
// Import the CSS Module
import styles from '@/styles/maincourse/Test.module.css';

const testData = [
  {
    number: "01.",
    title: "ADVANCED PLACEMENTS",
    img: "/images/test-section1.webp",
    label: "Targeted AP tutoring to strengthen concepts & exam readiness",
    details: ["Total Courses: 2", "Online & In-Person"],
    btn: "VIEW COURSES",
    link: "/act-tutors-in-dubai/",
  },
  {
    number: "02.",
    title: "ACT",
    img: "/images/test-section2.webp",
    label: "Score higher on the ACT with personalized, proven preparation",
    details: ["Total Courses: 2", "Online & In-Person"],
    btn: "VIEW COURSES",
    link: "/advanced-placements-tutors-in-dubai/",
  },
  {
    number: "03.",
    title: "UCAT",
    img: "/images/test-section3.webp",
    label: "Master UCAT strategies with expert guidance & focused test prep",
    details: ["Total Courses: 2", "Online & In-Person"],
    btn: "VIEW COURSES",
    link: "#", // Assuming UCAT doesn't have a specific link yet
  },
];

const Test = ({ isMobileSwiper, active, setActive }) => {
  // Set initial active slide for mobile, and initial active card for desktop
  useEffect(() => {
    if (isMobileSwiper && setActive) {
      setActive(1); // Set the second slide (index 1) as active initially for mobile
    } else if (!isMobileSwiper && setActive) {
      setActive(1); // Set the second card (index 1) as active initially for desktop
    }
  }, [isMobileSwiper, setActive]);

  return (
    // Apply local module class
    <section className={styles.testSection1}>
      <div className="container">
        {/* Apply local module class */}
        <div className={styles.testHeadings}>
          <div
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section"
            style={{ animationDelay: "0.1s" }}
          >
            {/* Global Class used as string, local class used with styles */}
            <h2 className={`SubHeading ${styles.testSubheading}`}>STANDARDISED TESTS</h2>
          </div>
          <h3
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
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
            data-scroll-repeat="true"
            className="fade-in-section"
            style={{ animationDelay: "0.4s" }}
          >
            <p>
              Whether you're aiming for top scores or a strong foundation, Ignite’s courses give you the edge to succeed.
            </p>
          </div>
        </div>
      </div>
      {/* Conditional Rendering: Swiper for Mobile (outside container), Static Cards for Desktop (inside container) */}
      {isMobileSwiper ? (
        <Swiper
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat="true"
          // Apply local module class
          className={`${styles.testMobileSwiper} fade-in-section`}
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
                {/* Apply local module class */}
                <div className={styles.testCardMobile}>
                  {/* Apply local module class */}
                  <div
                    data-scroll
                    data-scroll-class="is-clipped"
                    data-scroll-offset="-10%"
                    // Apply local module classes
                    className={`${styles.testCardImageWrap} ${isCardActive ? styles.mobileActiveImageArea : ""}`}
                    style={{ backgroundImage: `url(${card.img})` }}
                  >
                    {/* Apply local module classes */}
                    <span className={`${styles.testCardNumber} ${isCardActive ? styles.mobileActiveNumber : ""}`}>{card.number}</span>
                    <h3 className={`${styles.testCardTitle} ${isCardActive ? styles.mobileActiveTitle : ""}`}>{card.title}</h3>
                  </div>
                  {/* Apply local module classes */}
                  <div className={`${styles.testCardDetailsWrap} ${isCardActive ? styles.mobileShowContent : styles.mobileHideContent}`}>
                    <h3 className={styles.testCardLabel}>{card.label}</h3>
                    <div className={styles.testCardDetails}>
                      {card.details &&
                        card.details.map((d, i) => <span key={i}>{d}</span>)}
                    </div>
                    {/* Apply local module class and global class */}
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
      ) : (
        // Desktop Version: Remains inside container
        <div className="container">
          {/* Apply local module class */}
          <div className={`row ${styles.testCardsRow}`}>
            {testData.slice(0, 3).map((card, idx) => {
              const isCardActive = active === idx;
              return (
                <div
                  key={idx}
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat="true"
                  // Apply local module class and global classes
                  className={`fade-in-section col-4 px-3 ${styles.testCard}`}
                  style={{ animationDelay: `${0.3 + idx * 0.15}s` }}
                  onMouseEnter={() => setActive(idx)}
                  onMouseLeave={() => setActive(1)}
                >
                  <div
                    data-scroll
                    data-scroll-class="is-clipped"
                    data-scroll-offset="-10%"
                    data-scroll-repeat="true"
                    // Apply local module classes
                    className={`${styles.cardImageArea} ${isCardActive ? styles.activeImageArea : ""}`}
                    style={{ backgroundImage: `url('${card.img}')` }}
                  >
                    {/* Apply local module classes */}
                    <div className={styles.imageOverlay}></div>
                    <span className={styles.cardNumber}>{card.number}</span>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                  </div>
                  <div
                    // Apply local module classes
                    className={`${styles.cardContentArea} ${isCardActive ? styles.showContent : styles.hideContent}`}
                  >
                    <h3 className={styles.cardLabel}>{card.label}</h3>
                    <div className={styles.cardDetails}>
                      {card.details &&
                        card.details.map((d, i) => (
                          <p key={i} className="m-0">{d}</p>
                        ))}
                    </div>
                    {/* Apply local module class and global class */}
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
      )}
    </section>
  );
};

export default Test;