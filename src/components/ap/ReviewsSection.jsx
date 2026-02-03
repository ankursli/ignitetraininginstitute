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
  Autoplay,
} from "swiper/modules";
import styles from '@/styles/home-copy/Testimonial.module.css';

const testimonialData = [
  // {
  //   type: "video",
  //   img: "/images/testimonial1.webp",
  //   video: true,
  //   name: "LOREM IPSUM",
  //   subtitle: "Lorem ipsum dolor sit",
  // },
  {
    type: "text",
    text: "We had a great experience with the instructor at Ignite. My child progressed amazingly under their guidance and achieved a good grade in Chemistry. Thank you so much to the Ignite team for supporting us in this!",
    name: "Nidhi Choudhury",
    subtitle: "",
  },
  // {
  //   type: "video",
  //   img: "/images/testimonial2.webp",
  //   video: true,
  //   name: "LOREM IPSUM",
  //   subtitle: "Lorem ipsum dolor sit",
  // },
  {
    type: "text",
    text: "Sumit from Ignite went out of his way to arrange a tutor for my daughter on very short notice. The tutor was kind and competent and managed to quickly solve my daughter's doubt. Thank you! Highly recommend!",
    name: "Nicole Morgan",
    subtitle: "",
  },
  // {
  //   type: "video",
  //   img: "/images/testimonial2.webp",
  //   video: true,
  //   name: "LOREM IPSUM",
  //   subtitle: "Lorem ipsum dolor sit",
  // },
  {
    type: "text",
    text: "Really good tutoring sessions conducted. I'm a student going there myself and I really enjoy my Economics sessions with my tutor who gives good resources and explains/condenses concepts really well. Lots of past paper practice and very good at essay planning as well. Overall, I really enjoy the sessions I've been receiving here.",
    name: "Sara Kerr",
    subtitle: "",
  },
  // {
  //   type: "video",
  //   img: "/images/testimonial2.webp",
  //   video: true,
  //   name: "LOREM IPSUM",
  //   subtitle: "Lorem ipsum dolor sit",
  // },
  {
    type: "text",
    text: "I was referred to Ignite by a family member who had previously used their services and was highly satisfied. From the start, the coordinator demonstrated exceptional professionalism in interactions with both parents and students. My daughter was initially struggling with economics, but under the guidance of the tutor, the subject became much more approachable and understandable. Their teaching style made a significant difference in my daughter’s confidence and performance. I would highly recommend this institute to anyone seeking additional academic support. Their dedication and quality of tutoring truly stand out, and I’m confident others will have a similarly positive experience. I would like to wish the team the very best of luck and I hope they will offer their services to many more countries within the Middle East in the future.",
    name: "Sushma Menon",
    subtitle: "",
  },
  // {
  //   type: "video",
  //   img: "/images/testimonial2.webp",
  //   video: true,
  //   name: "LOREM IPSUM",
  //   subtitle: "Lorem ipsum dolor sit",
  // },
  {
    type: "text",
    text: "The trainers were flexible and were able to help in difficult subjects like Physics. My son scored a 100/100 on one of his maths papers after working with the tutors. Great work.",
    name: "Rosie Seldon",
    subtitle: "",
  },
  // {
  //   type: "video",
  //   img: "/images/testimonial2.webp",
  //   video: true,
  //   name: "LOREM IPSUM",
  //   subtitle: "Lorem ipsum dolor sit",
  // },
  {
    type: "text",
    text: "Ignite provides high quality tutoring with knowledgeable tutors and provide beneficial resources",
    name: "Abdullah Al Noubani",
    subtitle: "",
  },
  // {
  //   type: "video",
  //   img: "/images/testimonial2.webp",
  //   video: true,
  //   name: "LOREM IPSUM",
  //   subtitle: "Lorem ipsum dolor sit",
  // },
  {
    type: "text",
    text: "They were happy to help regardless of my location. They also promptly responded to my request and set up a meeting on a short notice. It speaks a lot about their work ethics and I found them to be a credible institute.",
    name: "Shweta Monga",
    subtitle: "",
  },
  // {
  //   type: "video",
  //   img: "/images/testimonial2.webp",
  //   video: true,
  //   name: "LOREM IPSUM",
  //   subtitle: "Lorem ipsum dolor sit",
  // },
  {
    type: "text",
    text: "Been here for 3 years it was an amazing journey to be on academically and socially.Amazing vibe with the teachers.",
    name: "Alizah",
    subtitle: "",
  },
];


export default function Testimonial({ }) {
  return (
    <>
      <section className={styles.testimonialSection}>
        <div
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat="true"
          className="fade-in-section"
          style={{ animationDelay: "0.1s" }}
        >
          <div className={styles.testimonialHeader}>
            <h2 className="SubHeading">REVIEWS & TESTIMONIALS</h2>
          </div>
        </div>

        <div
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat="true"
          className={`fade-in-section ${styles.testimonialBgBox}`}
          style={{ animationDelay: "0.2s" }}
        >
          {/* Decorative rectangles */}
          <img src="/images/rectangle-bg4.webp" alt="ap tutors in dubai" className={styles.testimonialRect} width={585} height={120} />
          <img src="/images/rectangle-bg4.webp" alt="ap tutors in dubai" className={styles.testimonialRect} width={585} height={120} />
          <img src="/images/rectangle-bg4.webp" alt="ap tutors in dubai" className={styles.testimonialRect} width={585} height={120} />

          <img
            src="/images/google-logo.webp"
            alt="google logo"
            data-scroll
            data-scroll-class="is-clipped"
            data-scroll-repeat="true"
            data-scroll-offset="-10%"
            className={styles.googlelogo}
            style={{ animationDelay: "0.2s" }}
            width={250}
            height={80}
          />

          <h3
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className={`fade-in-section ${styles.testimonialTitle}`}
            style={{ animationDelay: "0.3s" }}
          >
            IGNITE TRAINING INSTITUTE - TUTORS IN DUBAI
          </h3>

          <p
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className={`fade-in-section ${styles.googleReview}`}
            style={{ animationDelay: "0.4s" }}
          >
            <span>4.9 </span>
            Google Reviews
          </p>

          <img
            src="/images/star-review.webp"
            alt="ap tutor in dubai"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            data-scroll-offset="-10%"
            className={`fade-in-section ${styles.starReview}`}
            style={{ animationDelay: "0.5s" }}
            width={250}
            height={80}
          />
        </div>

        <div className={`fade-in-section ${styles.testimonialSliderWrap}`}
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat="true"
        >
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
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 2, slidesPerGroup: 2 },
              576: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            className={styles.testimonialSwiper}
          >


            {testimonialData.map((item, idx) => (
              <SwiperSlide key={idx}>
                {item.type === "video" ? (
                  <div className={`${styles.testimonialCard} ${styles.testimonialCardVideo}`}>
                    <img
                      src={item.img}
                      alt={item.name}
                      className={styles.testimonialImg}
                    />
                    <div className={styles.testimonialVideoOverlay}></div>
                    <div className={styles.testimonialPlayBtn}>
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="24"
                          cy="24"
                          r="23"
                          fill="#0000008a"
                          stroke="#ffffff60"
                          strokeWidth="2"
                        />
                        <polygon points="20,16 34,24 20,32" fill="#ffffff90" />
                      </svg>
                    </div>
                    <div className={styles.testimonialVideoText}>
                      <b>{item.name}</b>
                      <span>{item.subtitle}</span>
                    </div>
                  </div>
                ) : (
                  <div className={`${styles.testimonialCard} ${styles.testimonialCardText}`}>
                    <div className={styles.testimonialText}>{item.text}</div>
                    <div className={styles.testimonialTextName}>
                      <b>{item.name}</b>
                    </div>
                    <div className={styles.testimonialTextSubtitle}>{item.subtitle}</div>
                  </div>
                )}
              </SwiperSlide>
            ))}

          </Swiper>
          <button className="swiper-button-prev" tabIndex={0} aria-label="Previous testimonial">
            <img
              src="/images/right-arrow-blue.webp"
              alt="Prev"
              className="btntest"
              style={{ transform: "rotate(180deg)" }}
              width={32}
              height={32}
            />
          </button>
          <button className="swiper-button-next" tabIndex={0} aria-label="Next testimonial">
            <img
              src="/images/right-arrow-blue.webp"
              alt="Next"
              className="btntest"
              width={32}
              height={32}
            />
          </button>

          <div className={styles.testimonialPagination}></div>
        </div>
      </section>

    </>
  );
}