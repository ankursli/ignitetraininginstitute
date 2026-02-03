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
  //   name: "LOREM IPSUM",
  //   subtitle: "Lorem ipsum dolor sit",
  // },
  {
    type: "text",
    text: "A great tutor for economics as the IB course is covered in great detail with units taught thoroughly. My economics grade has progressed superbly.",
    name: "Omar Bilal",
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
    text: "Amazing classes with highly qualified teachers. I have learnt a lot in only 2 classes.",
    name: "Arjun Thawrani",
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
    text: "Ignite institute has been a great experience. Especially with the mentors level of experience being very knowledgeable across IB.",
    name: "Mahad Waheed",
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
    text: "I am doing IB Physics. The instructor is truly an angel and a role model to me. Their in-depth knowledge of physics is incredible, and their passion for the subject shines through in everything they do in class. As a slow student, I really appreciate the effort they put into making sure that I understand the concepts we are studying. They have a remarkable talent for explaining complex ideas in a way that is easy to understand, and they always take the time to answer my questions and provide examples that clarify the material. I also value the way they challenge me to think critically and to develop my own understanding of the subject. Their question-and-answer skills are second to none, and I always feel supported and encouraged when I ask for help. I feel incredibly fortunate to have the opportunity to learn from them.I am doing IB English. The instructor’s passion for the subject shines through in every lesson, and their dedication to my learning is truly inspiring. I appreciate that they always challenge me to go beyond surface-level analysis of literature and encourage me to dive deeper into the text. Their feedback on my work is invaluable and has helped me improve my writing and critical thinking skills tremendously. I also love the variety of materials and resources provided in class, and the way different English language techniques are introduced. I am doing IB Economics. As a first-time economics student, I was initially intimidated by the subject, but the instructor has made it so much easier to understand. Their method of starting the first class by asking questions about the economy was such a brilliant way to engage me in the subject. I know I ended up asking a silly question, but it was handled so gracefully, and I appreciate their patience with me in class. I have to say, I look forward to every class because of how interesting they make the discussions. Their ability to make the subject matter relatable and engaging is commendable. The notes are also amazing!",
    name: "Shakira Jahan",
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
    text: "Ignite training institute is an adequate facility, the work ethic of which is worthy of its name. With hardworking qualified individuals, who are able to explain and teach complex topics in very simple and logical ways making it easy to understand. The managing and coordinating team is also very understanding and flexible according to the student's needs.",
    name: "Insiya Hamid",
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
    text: "really good tutoring sessions conducted. I'm a student going there myself and I really enjoy my Economics sessions with my tutor who really gives good resources and explains/condenses concepts really well. Lots of past paper practice and she's very good at essay planning as well. Overall, I really enjoy the sessions I've been receiving here.",
    name: "Sara Kerr",
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
          <img src="/images/rectangle-bg4.webp" alt="ib myp tutor in dubai" className={styles.testimonialRect} width={585} height={120} />
          <img src="/images/rectangle-bg4.webp" alt="ib myp tutor in dubai" className={styles.testimonialRect} width={585} height={120} />
          <img src="/images/rectangle-bg4.webp" alt="ib myp tutor in dubai" className={styles.testimonialRect} width={585} height={120} />

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
            alt="myp tutor in dubai"
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