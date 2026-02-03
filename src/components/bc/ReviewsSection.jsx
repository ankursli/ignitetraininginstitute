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
  // Placeholder Video 1
  // {
  //   type: "video",
  //   img: "/images/testimonial1.webp",
  //   video: true,
  //   name: "LOREM IPSUM",
  //   subtitle: "Lorem ipsum dolor sit",
  // },

  // Text Testimonial 1: Zeynep Inan
  {
    type: "text",
    text: "I have taken lessons for IGCSE science and math which has helped me achieve top grades. With the help of my trainers, I was able to get offers from top universities in the UK such as UCL and University of Edinburgh.",
    name: "Zeynep Inan",
    subtitle: "IB & IGCSE Student",
  },

  // Placeholder Video 2
  // {
  //   type: "video",
  //   img: "/images/testimonial2.webp",
  //   video: true,
  //   name: "LOREM IPSUM",
  //   subtitle: "Lorem ipsum dolor sit",
  // },

  // Text Testimonial 2: Hassan Ali
  {
    type: "text",
    text: "This is the best tuition center in Dubai. Went from getting 5-6s in the start of my GCSEs to getting 8-9s in my actual GCSE exams. This place helped me a lot and has very good tutors as well.",
    name: "Hassan Ali",
    subtitle: "GCSE Student",
  },

  // Placeholder Video 3
  // {
  //   type: "video",
  //   img: "/images/testimonial2.webp",
  //   video: true,
  //   name: "LOREM IPSUM",
  //   subtitle: "Lorem ipsum dolor sit",
  // },

  // Text Testimonial 3: Sushma Menon (Parent)
  {
    type: "text",
    text: "My daughter was initially struggling with economics, but under the guidance of Miss Harsha, the subject became much more approachable and understandable. Their dedication and quality of tutoring truly stand out.",
    name: "Sushma Menon",
    subtitle: "Parent",
  },

  // Placeholder Video 4
  // {
  //   type: "video",
  //   img: "/images/testimonial1.webp",
  //   video: true,
  //   name: "LOREM IPSUM",
  //   subtitle: "Lorem ipsum dolor sit",
  // },

  // Text Testimonial 4: Ben Dunatov
  {
    type: "text",
    text: "Great tutoring service! Perfect for struggling GCSE students.",
    name: "Ben Dunatov",
    subtitle: "GCSE Student",
  },

  // Placeholder Video 5
  // {
  //   type: "video",
  //   img: "/images/testimonial2.webp",
  //   video: true,
  //   name: "LOREM IPSUM",
  //   subtitle: "Lorem ipsum dolor sit",
  // },

  // Text Testimonial 5: Rosie Seldon (Parent)
  {
    type: "text",
    text: "The trainers were flexible and were able to help in difficult subjects like Physics. My son scored a 100/100 on one of his maths papers after working with the tutors. Great work.",
    name: "Rosie Seldon",
    subtitle: "Parent",
  },

  // Placeholder Video 6
  // {
  //   type: "video",
  //   img: "/images/testimonial1.webp",
  //   video: true,
  //   name: "LOREM IPSUM",
  //   subtitle: "Lorem ipsum dolor sit",
  // },

  // Text Testimonial 6: Riyad Bouarissa
  {
    type: "text",
    text: "The business teacher deserves special recognition for outstanding instruction and genuine concern for my success. The sessions imparted comprehensive knowledge and equipped me with essential skills for my exams.",
    name: "Riyad Bouarissa",
    subtitle: "Student",
  },

  // Placeholder Video 7
  // {
  //   type: "video",
  //   img: "/images/testimonial1.webp",
  //   video: true,
  //   name: "LOREM IPSUM",
  //   subtitle: "Lorem ipsum dolor sit",
  // },

  // Text Testimonial 7: Shivam Bakhda
  {
    type: "text",
    text: "The institute has always been extremely helpful and has enabled me to take A level Economics outside of school and still excel by already achieving 2 A’s in the first two AS papers and now aiming for A*’s in P3 and P4. Additionally, I am also able to improve my Business Studies skills.",
    name: "Shivam Bakhda",
    subtitle: "Student",
  },

  // Placeholder Video 8
  // {
  //   type: "video",
  //   img: "/images/testimonial1.webp",
  //   video: true,
  //   name: "LOREM IPSUM",
  //   subtitle: "Lorem ipsum dolor sit",
  // },

  // Text Testimonial 8: Priya Nair
  {
    type: "text",
    text: "I highly recommend the services offered by Ignite. The support was extremely helpful for A-Level Economics and Business. Thanks to this, I achieved a newfound sense of confidence for my exams and was able to study in a structured and effective way. The rest of the staff was great too, from Ahzeb to Saif.",
    name: "Priya Nair",
    subtitle: "Student",
  },

  // Placeholder Video 9
  // {
  //   type: "video",
  //   img: "/images/testimonial1.webp",
  //   video: true,
  //   name: "LOREM IPSUM",
  //   subtitle: "Lorem ipsum dolor sit",
  // },

  // Text Testimonial 9: Nishchaya Dheer
  {
    type: "text",
    text: "It’s a very good support institute where special attention is given to each student. My son has been going here for the last 2 years (O & AS Levels) to take support in Maths & Physics and has been very happy and comfortable. All tutors have been a big support as well to my son.",
    name: "Nishchaya Dheer",
    subtitle: "Student",
  },

  // Placeholder Video 10
  // {
  //   type: "video",
  //   img: "/images/testimonial1.webp",
  //   video: true,
  //   name: "LOREM IPSUM",
  //   subtitle: "Lorem ipsum dolor sit",
  // },

  // Text Testimonial 10: Palanivel Guruswamy
  {
    type: "text",
    text: "I am happy to share my experience with Ignite Training Institute. My daughter recently achieved A* grades in Math, Physics, Chemistry & Biology. This wouldn't have happened without the effort & support from the institute. The teachers dedication, personalized attention, and their availability for any clarification have all contributed to her academic excellence. I extend my heartfelt thanks & appreciation to the institute & teachers.",
    name: "Palanivel Guruswamy",
    subtitle: "Student",
  },

  // Placeholder Video 11
  // {
  //   type: "video",
  //   img: "/images/testimonial1.webp",
  //   video: true,
  //   name: "LOREM IPSUM",
  //   subtitle: "Lorem ipsum dolor sit",
  // },

  // Text Testimonial 11: Tamanna Iyyani
  {
    type: "text",
    text: "As a student that has completed my A-levels with Ignite, I can say that my experience with the teachers and faculty has been amazing. Ignite provided me with a supportive environment where I really benefitted learning from kind and passionate teachers. Overall, it was a place I could fully explore and excel in my academic pursuits and I believe has set me up well for university and my life ahead.",
    name: "Tamanna Iyyani",
    subtitle: "Student",
  },

  // Placeholder Video 12
  // {
  //   type: "video",
  //   img: "/images/testimonial1.webp",
  //   video: true,
  //   name: "LOREM IPSUM",
  //   subtitle: "Lorem ipsum dolor sit",
  // },

  // Text Testimonial 12: Saraswathy Ramachandran
  {
    type: "text",
    text: "We had a wonderful experience with Ignite training institute. My daughter got very good support from her teacher Mr Abdul for her A level Further Math course. He taught all concepts clearly and cleared her doubts",
    name: "Saraswathy Ramachandran",
    subtitle: "Student",
  },
];


export default function Testimonial({ }) {
  return (
    <>
      {/* Apply local module class */}
      <section className={styles.testimonialSection}>
        <div
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat="true"
          className="fade-in-section"
          style={{ animationDelay: "0.1s" }}
        >
          {/* Apply local module class */}
          <div className={styles.testimonialHeader}>
            <h2 className="SubHeading">REVIEWS & TESTIMONIALS</h2>
          </div>
        </div>

        <div
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat="true"
          // Apply local module class
          className={`fade-in-section ${styles.testimonialBgBox}`}
          style={{ animationDelay: "0.2s" }}
        >
          {/* Decorative rectangles - Apply local module class */}
          <img src="/images/rectangle-bg4.webp" alt="british curriculum, tutors in dubai" className={styles.testimonialRect} width="585" height="120" />
          <img src="/images/rectangle-bg4.webp" alt="british curriculum tutors in dubai" className={styles.testimonialRect} width="585" height="120" />
          <img src="/images/rectangle-bg4.webp" alt="british curriculum tutors in dubai" className={styles.testimonialRect} width="585" height="120" />

          <img
            src="/images/google-logo.webp"
            alt="google logo"
            data-scroll
            data-scroll-class="is-clipped"
            data-scroll-repeat="true"
            data-scroll-offset="-10%"
            // Apply local module class
            className={styles.googlelogo}
            style={{ animationDelay: "0.2s" }}
            width={250}
            height={80}
          />

          <h2
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            // Apply local module class
            className={`fade-in-section ${styles.testimonialTitle}`}
            style={{ animationDelay: "0.3s" }}
          >
            IGNITE TRAINING INSTITUTE - TUTORS IN DUBAI
          </h2>

          <p
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            // Apply local module class
            className={`fade-in-section ${styles.googleReview}`}
            style={{ animationDelay: "0.4s" }}
          >
            <span>4.9 </span>
            Google Reviews
          </p>

          <img
            src="/images/star-review.webp"
            alt="british curriculum in dubai"
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

        {/* Apply local module class */}
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
              // Target the module class
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
            // Apply local module class
            className={styles.testimonialSwiper}
          >


            {/* NOTE: testimonialData must be defined in scope for this map to work */}
            {testimonialData && testimonialData.map((item, idx) => (
              <SwiperSlide key={idx}>
                {item.type === "video" ? (
                  // Apply local module classes
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
                  // Apply local module classes
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
          {/* Global Swiper navigation buttons (kept as strings) */}
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

          {/* Apply local module class */}
          <div className={styles.testimonialPagination}></div>
        </div>
      </section>

    </>
  );
}