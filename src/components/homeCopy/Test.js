import React, { useEffect } from "react";
// 1. STYLES MUST BE IMPORTED BEFORE SWIPER MODULES IN SOME NEXT.JS VERSIONS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from 'next/image';
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
    link: "#",
  },
];

const Test = ({ isMobileSwiper, active, setActive }) => {
  useEffect(() => {
    // 2. SAFETY CHECK: Ensure setActive exists before calling it
    if (isMobileSwiper && typeof setActive === 'function') {
      setActive(1); 
    }
  }, [isMobileSwiper, setActive]);

  return (
    <section className={styles.testSection1}>
      <div className="container">
        <div className={styles.testHeadings}>
          <h2 className={`SubHeading ${styles.testSubheading}`}>STANDARDISED TESTS</h2>
          <h3 className={styles.testTitle}>
            Power Your Academic Goals With Expert Prep <span className="highlight">Support</span>
          </h3>
          <p>Whether you're aiming for top scores or a strong foundation, Ignite’s courses give you the edge to succeed.</p>
        </div>
      </div>

      {isMobileSwiper ? (
        <Swiper
          className={styles.testMobileSwiper}
          centeredSlides={true}
          modules={[Pagination, Navigation, Autoplay]}
          initialSlide={1}
          onSlideChange={(swiper) => {
             if (typeof setActive === 'function') setActive(swiper.realIndex);
          }}
          breakpoints={{
            0: { slidesPerView: 1.1, spaceBetween: 20 },
            575: { slidesPerView: 1.2, spaceBetween: 25 },
          }}
        >
          {testData.map((card, idx) => (
            <SwiperSlide key={idx}>
              <div className={styles.testCardMobile}>
                <div className={`${styles.testCardImageWrap} ${active === idx ? styles.mobileActiveImageArea : ""}`}>
                  <Image 
                    src={card.img} 
                    alt={card.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    loading="lazy" 
                  />
                  <span className={styles.testCardNumber}>{card.number}</span>
                  <h3 className={styles.testCardTitle}>{card.title}</h3>
                </div>
                <div className={`${styles.testCardDetailsWrap} ${active === idx ? styles.mobileShowContent : styles.mobileHideContent}`}>
                  <h3 className={styles.testCardLabel}>{card.label}</h3>
                  <div className={styles.testCardDetails}>
                    {card.details?.map((d, i) => <span key={i}>{d}</span>)}
                  </div>
                  <a href={card.link} className={`${styles.testCardBtnMobile} buttonSkyBlue`}>
                    {card.btn}
                    <span className={styles.btnArrow}>
                      <Image src="/images/right-arrow-blue.webp" width={24} height={24} alt="arrow" />
                    </span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="container">
          <div className={`row ${styles.testCardsRow}`}>
            {testData.map((card, idx) => (
              <div
                key={idx}
                className={`col-4 px-3 ${styles.testCard}`}
                onMouseEnter={() => { if (typeof setActive === 'function') setActive(idx); }}
                onMouseLeave={() => { if (typeof setActive === 'function') setActive(1); }}
              >
                <div className={`${styles.cardImageArea} ${active === idx ? styles.activeImageArea : ""}`}>
                  <Image 
                    src={card.img} 
                    alt={card.title} 
                    fill 
                    sizes="33vw"
                    style={{ objectFit: 'cover' }}
                    loading="lazy"
                  />
                  <div className={styles.imageOverlay}></div>
                  <span className={styles.cardNumber}>{card.number}</span>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                </div>
                <div className={`${styles.cardContentArea} ${active === idx ? styles.showContent : styles.hideContent}`}>
                  <h3 className={styles.cardLabel}>{card.label}</h3>
                  <div className={styles.cardDetails}>
                    {card.details?.map((d, i) => (
                      <p key={i} className="m-0">{d}</p>
                    ))}
                  </div>
                  <a href={card.link} className={`${styles.cardBtn} buttonSkyBlue`}>
                    {card.btn} 
                    <Image src="/images/right-arrow-blue.webp" width={30} height={30} alt="arrow" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Test;
