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
  //   width: 1920,
  //   height: 2880,
  //   video: true,
  //   name: "LOREM IPSUM",
  //   subtitle: "Lorem ipsum dolor sit",
  // },

  // Text Testimonial 1: Nidhi Choudhury (Parent)
  {
    type: "text",
    text: "We had a great experience with the instructor at Ignite. My child progressed amazingly under their guidance and achieved good grade in Chemistry. Thank you so much to Ahzeb and the Ignite team for supporting us in this!",
    name: "Nidhi Choudhury",
    subtitle: "Parent",
  },

  // Placeholder Video 2
  // {
  //   type: "video",
  //   img: "/images/testimonial2.webp",
  //   width: 2000,
  //   height: 3028,
  //   video: true,
  //   name: "LOREM IPSUM",
  //   subtitle: "Lorem ipsum dolor sit",
  // },

  // Text Testimonial 2: Genesis Tech (Parent)
  {
    type: "text",
    text: "The team there took a personal interest in his progress, helping him overcome challenges and building his confidence along the way. I highly recommend Ignite Training Institute to anyone looking for exceptional coaching.",
    name: "Genesis Tech",
    subtitle: "Parent",
  },

  // Placeholder Video 3
  // {
  //   type: "video",
  //   img: "/images/testimonial2.webp",
  //   video: true,
  //   name: "LOREM IPSUM",
  //   subtitle: "Lorem ipsum dolor sit",
  // },

  // Text Testimonial 3: Kabir Kochhar
  {
    type: "text",
    text: "One of the best Business and Economics teachers for the IB. The syllabus is covered thoroughly, and difficult concepts are explained within seconds, making them easy to understand. My grades have gone right up.",
    name: "Kabir Kochhar",
    subtitle: "IB Student",
  },

  // Placeholder Video 4
  // {
  //   type: "video",
  //   img: "/images/testimonial1.webp",
  //   video: true,
  //   name: "LOREM IPSUM",
  //   subtitle: "Lorem ipsum dolor sit",
  // },

  // Text Testimonial 4: Maya Alrawi
  {
    type: "text",
    text: "I’m an IB student and had a great experience with my Math tutoring at Ignite. I used to think that face-to-face was more effective than online tutoring, but I was able to learn just as effectively online.",
    name: "Maya Alrawi",
    subtitle: "IB Student",
  },

  // Placeholder Video 5
  // {
  //   type: "video",
  //   img: "/images/testimonial2.webp",
  //   video: true,
  //   name: "LOREM IPSUM",
  //   subtitle: "Lorem ipsum dolor sit",
  // },

  // Text Testimonial 5: Nicole Morgan (Parent)
  {
    type: "text",
    text: "Sumit from Ignite went out of his way to arrange a tutor for my daughter on very short notice. The tutor was kind and competent and managed to quickly solve my daughter's doubt. Thank you! Highly recommend!",
    name: "Nicole Morgan",
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

  // Text Testimonial 6: Kovidh Verma
  {
    type: "text",
    text: "My teacher at Ignite is a fantastic economic teacher, making sure the syllabus was covered and has gone through all the 15 past exam papers I did.",
    name: "Kovidh Verma",
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

  // Text Testimonial 7: Omar Bilal
  {
    type: "text",
    text: "A great tutor for economics as the IB course is covered in great detail with units taught thoroughly. My economics grade has progressed superbly.",
    name: "Omar Bilal",
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

  // Text Testimonial 8: Arjun Thawrani
  {
    type: "text",
    text: "Amazing classes with highly qualified teachers. I have learnt a lot in only 2 classes.",
    name: "Arjun Thawrani",
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

  // Text Testimonial 9: Mahad Waheed
  {
    type: "text",
    text: "Ignite institute has been a great experience. Especially with the mentors level of experience being very knowledgeable across IB.",
    name: "Mahad Waheed",
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

  // Text Testimonial 10: Shakira Jahan
  {
    type: "text",
    text: "I am doing IB Physics. The instructor is truly an angel and a role model to me. Their in-depth knowledge of physics is incredible, and their passion for the subject shines through in everything they do in class. As a slow student, I really appreciate the effort they put into making sure that I understand the concepts we are studying. They have a remarkable talent for explaining complex ideas in a way that is easy to understand, and they always take the time to answer my questions and provide examples that clarify the material. I also value the way they challenge me to think critically and to develop my own understanding of the subject. Their question-and-answer skills are second to none, and I always feel supported and encouraged when I ask for help. I feel incredibly fortunate to have the opportunity to learn from them.I am doing IB English. The instructor’s passion for the subject shines through in every lesson, and their dedication to my learning is truly inspiring. I appreciate that they always challenge me to go beyond surface-level analysis of literature and encourage me to dive deeper into the text. Their feedback on my work is invaluable and has helped me improve my writing and critical thinking skills tremendously. I also love the variety of materials and resources provided in class, and the way different English language techniques are introduced. I am doing IB Economics. As a first-time economics student, I was initially intimidated by the subject, but the instructor has made it so much easier to understand. Their method of starting the first class by asking questions about the economy was such a brilliant way to engage me in the subject. I know I ended up asking a silly question, but it was handled so gracefully, and I appreciate their patience with me in class. I have to say, I look forward to every class because of how interesting they make the discussions. Their ability to make the subject matter relatable and engaging is commendable. The notes are also amazing!",
    name: "Shakira Jahan",
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

  // Text Testimonial 11: Insiya Hamid
  {
    type: "text",
    text: "Ignite training institute is an adequate facility, the work ethic of which is worthy of its name. With hardworking qualified individuals, who are able to explain and teach complex topics in very simple and logical ways making it easy to understand. The managing and coordinating team is also very understanding and flexible according to the student's needs.",
    name: "Insiya Hamid",
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

  // Text Testimonial 12: Sara Kerr
  {
    type: "text",
    text: "really good tutoring sessions conducted. I'm a student going there myself and I really enjoy my Economics sessions with my tutor who really gives good resources and explains/condenses concepts really well. Lots of past paper practice and she's very good at essay planning as well. Overall, I really enjoy the sessions I've been receiving here.",
    name: "Sara Kerr",
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
          <img src="/images/rectangle-bg4.webp" alt="ib tutor in dubai" className={styles.testimonialRect} width={585} height={120} />
          <img src="/images/rectangle-bg4.webp" alt="ib tutor in dubai" className={styles.testimonialRect} width={585} height={120} />
          <img src="/images/rectangle-bg4.webp" alt="ib tutor in dubai" className={styles.testimonialRect} width={585} height={120} />

          <img
            src="/images/google-logo.webp"
            alt="ib tutor in dubai"
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
            style={{ animationDelay: "0.3s" }}
          >
            <span>4.9 </span>
            Google Reviews
          </p>

          <img
            src="/images/star-review.webp"
            alt="ib tutor in dubai"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            data-scroll-offset="-10%"
            // Apply local module class
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


            {testimonialData.map((item, idx) => (
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
              alt="ib tutor in dubai"
              className="btntest"
              style={{ transform: "rotate(180deg)" }}
              width={32}
              height={32}
            />
          </button>
          <button className="swiper-button-next" tabIndex={0} aria-label="Next testimonial">
            <img
              src="/images/right-arrow-blue.webp"
              alt="ib tutor in dubai"
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