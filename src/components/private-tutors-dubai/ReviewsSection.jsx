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
  //   name: "GENESIS TECH",
  //   subtitle: "Parent",
  // },
  {
    type: "text",
    text: "I wanted to share my incredible experience with Ignite Training Institute! They have been absolutely amazing in coaching my son. The team there took a personal interest in his progress, helping him overcome challenges and building his confidence along the way. I highly recommend Ignite Training Institute to anyone looking for exceptional coaching. The teachers are outstanding and go the extra mile to provide individualized attention. Their dedication and support have made a remarkable difference in my son's educational journey. Keep up the great stuff, Ignite Training Institute! Your commitment to students' growth is truly commendable.",
    name: "Genesis Tech",
    subtitle: "Parent",
  },
  // {
  //   type: "video",
  //   img: "/images/testimonial2.webp",
  //   video: true,
  //   name: "KABIR KOCHHAR",
  //   subtitle: "IB Student",
  // },
  {
    type: "text",
    text: "Ms. Nidhi Arora is one of the best Business and Economics teachers for the IB. She knows exactly what is coming on the syllabus and does an amazing job at helping her students. I have been working with her for most of my DP course, and whatever was hard to understand in school, Ms. Nidhi explained it within seconds. My grades have gone right up, and I am on track for a great DP score all thanks to her.",
    name: "Kabir Kochhar",
    subtitle: "IB Student",
  },
  // {
  //   type: "video",
  //   img: "/images/testimonial1.webp",
  //   video: true,
  //   name: "NICOLE MORGAN",
  //   subtitle: "Parent",
  // },
  {
    type: "text",
    text: "Sumit from Ignite went out of his way to arrange a tutor for my daughter on very short notice. The tutor was kind and competent and managed to quickly solve my daughter's doubt. Thank you! Highly recommend!",
    name: "Nicole Morgan",
    subtitle: "Parent",
  },
  // {
  //   type: "video",
  //   img: "/images/testimonial2.webp",
  //   video: true,
  //   name: "SARA KERR",
  //   subtitle: "Student",
  // },
  {
    type: "text",
    text: "Really good tutoring sessions conducted. I'm a student going there myself and I really enjoy my Economics sessions with my tutor (Nidhi), who gives great resources and explains/condenses concepts really well. Lots of past paper practice and she's very good at essay planning too. Overall, I really enjoy the sessions I've been receiving here.",
    name: "Sara Kerr",
    subtitle: "Student",
  },
  // {
  //   type: "video",
  //   img: "/images/testimonial1.webp",
  //   video: true,
  //   name: "SHIVAM BAKHDA",
  //   subtitle: "A-Level Student",
  // },
  {
    type: "text",
    text: "The institute has always been extremely helpful and thanks to Ms. Sadaf I am able to take A-Level Economics outside of school and still excel by achieving 2 A’s in the first two AS papers. Now I’m aiming for A*’s in P3 and P4. Additionally, I’ve improved significantly in Business Studies as well.",
    name: "Shivam Bakhda",
    subtitle: "A-Level Student",
  },
  // {
  //   type: "video",
  //   img: "/images/testimonial2.webp",
  //   video: true,
  //   name: "PRIYA NAIR",
  //   subtitle: "A-Level Student",
  // },
  {
    type: "text",
    text: "I highly recommend the services offered by Ignite. Sadaf was friendly and extremely helpful for A-Level Economics and Business. Thanks to her, I achieved a newfound confidence for my exams and studied in a structured and effective way. The rest of the staff was great too, from Ahzeb to Saif.",
    name: "Priya Nair",
    subtitle: "A-Level Student",
  },
  // {
  //   type: "video",
  //   img: "/images/testimonial1.webp",
  //   video: true,
  //   name: "TAMANNA IYYANI",
  //   subtitle: "A-Level Graduate",
  // },
  {
    type: "text",
    text: "As a student who completed my A-Levels with Ignite, I can say that my experience with the teachers and faculty was amazing. Ignite provided a supportive environment where I benefited from kind and passionate teachers. It was a place I could explore and excel academically, setting me up well for university and beyond.",
    name: "Tamanna Iyyani",
    subtitle: "A-Level Graduate",
  },
  // {
  //   type: "video",
  //   img: "/images/testimonial2.webp",
  //   video: true,
  //   name: "SARASWATHY RAMACHANDRAN",
  //   subtitle: "Parent",
  // },
  {
    type: "text",
    text: "We had a wonderful experience with Ignite Training Institute. My daughter received excellent support from her teacher Mr. Abdul for her A-Level Further Math course. He explained all concepts clearly and addressed every doubt patiently.",
    name: "Saraswathy Ramachandran",
    subtitle: "Parent",
  },
  // {
  //   type: "video",
  //   img: "/images/testimonial1.webp",
  //   video: true,
  //   name: "ZEYNEP INAN",
  //   subtitle: "IB & IGCSE Student",
  // },
  {
    type: "text",
    text: "I have been taking lessons at Ignite Training Institute for around three years for IGCSE science and math, which helped me achieve top grades. I also took IB math, biology, and Spanish. With my trainers' help, I achieved strong predicted and final grades, earning offers from top UK universities like UCL and University of Edinburgh.",
    name: "Zeynep Inan",
    subtitle: "IB & IGCSE Student",
  },
  // {
  //   type: "video",
  //   img: "/images/testimonial2.webp",
  //   video: true,
  //   name: "MAHAD WAHEED",
  //   subtitle: "IB Student",
  // },
  {
    type: "text",
    text: "Ignite Institute has been a great experience, especially with mentors who are very knowledgeable across IB subjects.",
    name: "Mahad Waheed",
    subtitle: "IB Student",
  },
  // {
  //   type: "video",
  //   img: "/images/testimonial1.webp",
  //   video: true,
  //   name: "NIMIT DEDHIA",
  //   subtitle: "Student",
  // },
  {
    type: "text",
    text: "Highly recommend Ignite! My academic success is a testament to their aim for excellence. The teaching was exceptional — expertise and dedication made learning enjoyable and effective. The personalised approach tailored to my learning style was invaluable.",
    name: "Nimit Dedhia",
    subtitle: "Student",
  },
  // {
  //   type: "video",
  //   img: "/images/testimonial2.webp",
  //   video: true,
  //   name: "BEN DUNATOV",
  //   subtitle: "GCSE Student",
  // },
  {
    type: "text",
    text: "Great tutoring service! Perfect for struggling GCSE students.",
    name: "Ben Dunatov",
    subtitle: "GCSE Student",
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
          <img src="/images/rectangle-bg4.webp" alt="private tutors in dubai" className={styles.testimonialRect} />
          <img src="/images/rectangle-bg4.webp" alt="private tutors in dubai" className={styles.testimonialRect} />
          <img src="/images/rectangle-bg4.webp" alt="private tutors in dubai" className={styles.testimonialRect} />

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
            alt="private tutor in dubai"
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