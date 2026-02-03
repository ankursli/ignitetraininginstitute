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
import styles from "@/styles/home-copy/Testimonial.module.css";


const testimonialData = [
  // {
  //   type: "video",
  //   img: "/images/testimonial1.webp",
  //   video: true,
  //   name: "",
  //   subtitle: "Incredible coaching experience",
  // },
  {
    type: "text",
    text: "I wanted to share my incredible experience with Ignite Training Institute! They have been absolutely amazing in coaching my son. The team there took a personal interest in his progress, helping him overcome challenges and building his confidence along the way. I highly recommend Ignite Training Institute to anyone looking for exceptional coaching. The teachers are outstanding and go the extra mile to provide individualized attention. Their dedication and support have made a remarkable difference in my son's educational journey. Keep up the great stuff, Ignite Training Institute! Your commitment to students' growth is truly commendable.",
    name: "Genesis Tech",
    subtitle: "",
  },
  // {
  //   type: "video",
  //   img: "/images/testimonial2.webp",
  //   video: true,
  //   name: "",
  //   subtitle: "Best IB Business and Economics tutor",
  // },
  {
    type: "text",
    text: "Ms. Nidhi Arora is one of the best Business and Economics teachers for the IB. She knows exactly what is coming on the syllabus and does an amazing job at helping her students. I have been working with her for the best part of my DP course so far, and I can say that whatever was hard to understand in school, Ms. Nidhi explained it to me within seconds. My grades have gone right up and I am on track for a great DP score all thanks to her.",
    name: "Kabir Kochhar",
    subtitle: "",
  },
  // {
  //   type: "video",
  //   img: "/images/testimonial1.webp",
  //   video: true,
  //   name: "",
  //   subtitle: "Highly recommended for quick tutoring",
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
  //   name: "",
  //   subtitle: "Excellent Economics tutoring",
  // },
  {
    type: "text",
    text: "Really good tutoring sessions conducted. I'm a student going there myself and I really enjoy my Economics sessions with my tutor (Nidhi) who really gives good resources and explains/condenses concepts really well. Lots of past paper practice and she's very good at essay planning as well. Overall, I really enjoy the sessions I've been receiving here.",
    name: "Sara Kerr",
    subtitle: "",
  },
  // {
  //   type: "video",
  //   img: "/images/testimonial1.webp",
  //   video: true,
  //   name: "",
  //   subtitle: "A-level Economics success",
  // },
  {
    type: "text",
    text: "The institute has always been extremely helpful and thanks all to the help of Ms Sadaf I am able to take A level Economics outside of school and still excel by already achieving 2 A’s in the first two AS papers and now am aiming for A*’s in P3 and P4. Additionally, I am also able to improve my Business Studies skills.",
    name: "Shivam Bakhda",
    subtitle: "",
  },
  // {
  //   type: "video",
  //   img: "/images/testimonial2.webp",
  //   video: true,
  //   name: "Priya Nair",
  //   subtitle: "Structured and effective A-Level support",
  // },
  {
    type: "text",
    text: "I highly recommend the services offered by Ignite. Sadaf was friendly and extremely helpful for A-Level Economics and Business. Thanks to her, I achieved a newfound sense of confidence for my exams and was able to study in a structured and effective way. The rest of the staff was great too, from Ahzeb to Saif.",
    name: "Priya Nair",
    subtitle: "",
  },
  // {
  //   type: "video",
  //   img: "/images/testimonial1.webp",
  //   video: true,
  //   name: "Tamanna Iyyani",
  //   subtitle: "Supportive environment for academic growth",
  // },
  {
    type: "text",
    text: "As a student that has completed my A-levels with Ignite, I can say that my experience with the teachers and faculty has been amazing. Ignite provided me with a supportive environment where I really benefitted learning from kind and passionate teachers. Overall, it was a place I could fully explore and excel in my academic pursuits and I believe has set me up well for university and my life ahead.",
    name: "Tamanna Iyyani",
    subtitle: "",
  },
  // {
  //   type: "video",
  //   img: "/images/testimonial2.webp",
  //   video: true,
  //   name: "Saraswathy Ramachandran",
  //   subtitle: "A-level Further Math support",
  // },
  {
    type: "text",
    text: "We had a wonderful experience with Ignite training institute. My daughter got very good support from her teacher Mr Abdul for her A level Further Math course. He taught all concepts clearly and cleared her doubts.",
    name: "Saraswathy Ramachandran",
    subtitle: "",
  },
  // {
  //   type: "video",
  //   img: "/images/testimonial1.webp",
  //   video: true,
  //   name: "Zeynep Inan",
  //   subtitle: "Top grades in IGCSE and IB",
  // },
  {
    type: "text",
    text: "I have been taking lessons at Ignite Training Institute for around three years. I have taken lessons for IGCSE science and math which has helped me achieve top grades. I have also taken lessons for IB math, biology, and Spanish. With the help of my trainers, I was able to achieve a good predicted and final exam grade which allowed me to get offers from top universities in the UK such as UCL and University of Edinburgh.",
    name: "Zeynep Inan",
    subtitle: "",
  },
  // {
  //   type: "video",
  //   img: "/images/testimonial2.webp",
  //   video: true,
  //   name: "",
  //   subtitle: "Knowledgeable mentors for IB",
  // },
  {
    type: "text",
    text: "Ignite institute has been a great experience. Especially with the mentors' level of experience being very knowledgeable across IB.",
    name: "Mahad Waheed",
    subtitle: "",
  },
  // {
  //   type: "video",
  //   img: "/images/testimonial1.webp",
  //   video: true,
  //   name: "",
  //   subtitle: "Personalized approach to learning",
  // },
  {
    type: "text",
    text: "Highly recommend Ignite! My academic success is certainly a testament to their aim for excellence. The teaching provided was exceptional. The expertise and dedication made learning enjoyable and effective. The personalised approach tailored to my learning style was invaluable.",
    name: "Nimit Dedhia",
    subtitle: "",
  },
  // {
  //   type: "video",
  //   img: "/images/testimonial2.webp",
  //   video: true,
  //   name: "",
  //   subtitle: "Perfect for struggling GCSE students",
  // },
  {
    type: "text",
    text: "Great tutoring service! Perfect for struggling GCSE students.",
    name: "Ben Dunatov",
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
          <img src="/images/rectangle-bg4.webp" alt="tutors in jlt dubai" className={styles.testimonialRect} />
          <img src="/images/rectangle-bg4.webp" alt="tutors in jlt dubai" className={styles.testimonialRect} />
          <img src="/images/rectangle-bg4.webp" alt="tutors in jlt dubai" className={styles.testimonialRect} />

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
            alt="tutors in jlt dubai"
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