import React from "react";
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import styles from '@/styles/home-copy/Testimonial.module.css';

// Only load CSS for this module to reduce global CSS size
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    type: "text",
    text: "I wanted to share my incredible experience with Ignite Training Institute! They have been absolutely amazing in coaching my son...",
    name: "Genesis Tech",
    subtitle: "",
  },
  {
    type: "text",
    text: "One of the best Business and Economics teachers for the IB. They know exactly what is coming on the syllabus...",
    name: "Kabir Kochhar",
    subtitle: "",
  },
  {
    type: "text",
    text: "Sumit from Ignite went out of his way to arrange a tutor for my daughter on very short notice...",
    name: "Nicole Morgan",
    subtitle: "",
  },
  {
    type: "text",
    text: "really good tutoring sessions conducted. I'm a student going there myself and I really enjoy my Economics sessions...",
    name: "Sara Kerr",
    subtitle: "",
  },
];

export default function Testimonial() {
  return (
    <section className={styles.testimonialSection}>
      <div className={styles.testimonialHeader}>
        <h2 className="SubHeading">REVIEWS & TESTIMONIALS</h2>
      </div>

      <div className={styles.testimonialBgBox}>
        {/* Decorative elements as lazy-loaded Images instead of CSS backgrounds */}
        <div className={styles.testimonialRect}>
          <Image src="/images/rectangle-bg4.webp" alt="bg" width={100} height={100} loading="lazy" />
        </div>
        
        <Image
          src="/images/google-logo.webp"
          alt="google logo"
          className={styles.googlelogo}
          width={250}
          height={80}
          loading="lazy"
        />

        <h2 className={styles.testimonialTitle}>IGNITE TRAINING INSTITUTE - TUTORS IN DUBAI</h2>

        <p className={styles.googleReview}>
          <span>4.9 </span> Google Reviews
        </p>

        <Image
          src="/images/star-review.webp"
          alt="star review"
          className={styles.starReview}
          width={250}
          height={80}
          loading="lazy"
        />
      </div>

      <div className={styles.testimonialSliderWrap}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          spaceBetween={20}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            el: `.${styles.testimonialPagination}`,
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 4 },
          }}
          className={styles.testimonialSwiper}
        >
          {testimonialData.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className={`${styles.testimonialCard} ${styles.testimonialCardText}`}>
                <div className={styles.testimonialText}>{item.text}</div>
                <div className={styles.testimonialTextName}>
                  <b>{item.name}</b>
                </div>
                <div className={styles.testimonialTextSubtitle}>{item.subtitle}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.testimonialPagination}></div>
        <button className="swiper-button-prev">
          <Image src="/images/right-arrow-blue.webp" alt="Prev" width={32} height={32} style={{ transform: "rotate(180deg)" }} />
        </button>
        <button className="swiper-button-next">
          <Image src="/images/right-arrow-blue.webp" alt="Next" width={32} height={32} />
        </button>
      </div>
    </section>
  );
}
