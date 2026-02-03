import React, { useState, useRef } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from '@/components/CustomImageWrapper';
import styles from '@/styles/home-copy/Trainers.module.css';

// ----------------------------------------------------------------------
// Trainer Data
// ----------------------------------------------------------------------

const trainers = [
  {
    name: "MASAB",
    img: "/images/team/masab.webp",
    subtitle: "Maths & Accounting",
    experience: "10+ YEARS",
    color: "blue",
  },
  {
    name: "SHWETHA",
    img: "/images/team/shwetha.webp",
    subtitle: "Biology",
    experience: "6+ YEARS",
    color: "green",
  },
  {
    name: "SARANYA",
    img: "/images/team/saranya.webp",
    subtitle: "Physics",
    experience: "8+ YEARS",
    color: "blue",
  },
  {
    name: "ASHWANI",
    img: "/images/team/ashwani.webp",
    subtitle: "Maths",
    experience: "7+ YEARS",
    color: "green",
  },
  {
    name: "IRTIQA",
    img: "/images/team/Irtiqa.webp",
    subtitle: "Computer Science, ICT",
    experience: "6+ YEARS",
    color: "blue",
  },
  {
    name: "ABDUL",
    img: "/images/team/abdul.webp",
    subtitle: "Maths",
    experience: "13+ YEARS",
    color: "green",
  },
  {
    name: "HARSHA",
    img: "/images/team/harsha.webp",
    subtitle: "Economics & Business",
    experience: "10+ YEARS",
    color: "blue",
  },
  {
    name: "NAMRATA",
    img: "/images/team/namrata.webp",
    subtitle: "Maths & Physics",
    experience: "10+ YEARS",
    color: "green",
  },
  {
    name: "KRITIKA",
    img: "/images/team/kritika.webp",
    subtitle: "Maths",
    experience: "3+ YEARS",
    color: "blue",
  },
  {
    name: "RUSTHA",
    img: "/images/team/rustha.webp",
    subtitle: "Chemistry, Biology, & EVM",
    experience: "3+ YEARS",
    color: "green",
  },
  {
    name: "IPSITA",
    img: "/images/team/ipsita.webp",
    subtitle: "Biology & EVM",
    experience: "7+ YEARS",
    color: "blue",
  },
  {
    name: "FREEZY",
    img: "/images/team/freezy.webp",
    subtitle: "Biology, Chemistry",
    experience: "4+ YEARS",
    color: "green",
  },
  {
    name: "AASHIMA",
    img: "/images/team/aashima.webp",
    subtitle: "Spanish",
    experience: "5+ YEARS",
    color: "blue",
  },
  {
    name: "ANUJA",
    img: "/images/team/Anuja.webp",
    subtitle: "English & French",
    experience: "10+ YEARS",
    color: "green",
  },
  {
    name: "DR. HAYA",
    img: "/images/team/dr-haya.webp",
    subtitle: "Chemistry, Physics, Biology",
    experience: "9+ YEARS",
    color: "blue",
  },
  {
    name: "DEEPAK",
    img: "/images/team/deepak.webp",
    subtitle: "Physics & Maths",
    experience: "13+ YEARS",
    color: "green",
  },
];

// ----------------------------------------------------------------------
// Trainer Card Component
// ----------------------------------------------------------------------

const TrainerCard = ({ trainer }) => (
  <a href="/our-team" className="nodecoration">
    <div data-color={trainer.color} className={styles.trainerCard}>

      <div className={styles.trainerName}>{trainer.name}</div>
      <div className={styles.trainerImgWrap}>
        <Image
          src={trainer.img}
          alt={`Trainer ${trainer.name} ignite training institute`}
          className={styles.trainerImg}
          width={300}
          height={300}
        />
      </div>
      <div className={styles.trainerSubtitle}>{trainer.subtitle}</div>
      <div className={styles.trainerExp}>{trainer.experience}</div>

    </div>
  </a>
);

// ----------------------------------------------------------------------
// Trainers Component
// ----------------------------------------------------------------------

export default function Trainers() {
  // const [isTrainersSwiper, setIsTrainersSwiper] = useState(false); // Removed unused state
  const [showAll, setShowAll] = useState(false);
  const trainersGridRef = useRef(null);
  const navPrevRef = useRef(null);
  const navNextRef = useRef(null);

  /* Removed unused resize effect */

  const displayTrainers = showAll ? trainers : trainers.slice(0, 10);

  // Handlers for SEE MORE and SEE LESS
  const handleSeeMore = () => {
    setShowAll(true);
  };

  const handleSeeLess = () => {
    setShowAll(false);
    if (trainersGridRef.current) {
      trainersGridRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentTitle = (
    <span className="trainersTitleInner">
      <span className={styles.trainersTitleDesktop}>
        The Best <span className={styles.trainersHighlight}>Trainers</span> For Your<br />Success Journey
      </span>
      <span className={styles.trainersTitleMobile}>
        The Best <span className={styles.trainersHighlight}>Trainers</span> For Your Success Journey
      </span>
    </span>
  );


  return (
    <>
      {/* ------------------------------------------------------------------- */}
      {/* CSS IS INCLUDED HERE VIA style jsx global AS REQUESTED */}
      {/* ------------------------------------------------------------------- */}
      {/* ------------------------------------------------------------------- */}
      {/* CSS MOVED TO Trainers.module.css */}
      {/* ------------------------------------------------------------------- */}
      {/* ------------------------------------------------------------------- */}

      <section className={styles.trainersSection}>
        <div className="container">
          <div>
            <h2
              className={`SubHeading ${styles.trainersSubheading} fade-in-section`}
              data-scroll
              data-scroll-class="is-inview"

              style={{ animationDelay: "0.1s" }}
            >
              OUR TUTORS
            </h2>
          </div>

          <h3
            className={`${styles.trainersTitle} fade-in-section`}
            data-scroll
            data-scroll-class="is-inview"

            style={{ animationDelay: "0.2s" }}
          >
            {currentTitle}
          </h3>

          <div
            data-scroll
            data-scroll-class="is-inview"

            className="fade-in-section"
            style={{ animationDelay: "0.3s" }}
          >
            <div className={styles.trainersSwiperWrapper}>
              <div className={styles.trainersSwiperWrap}>
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={24}
                  slidesPerView={1}
                  breakpoints={{
                    700: {
                      slidesPerView: 2,
                      spaceBetween: 24,
                    },
                    991: {
                      slidesPerView: 3,
                      spaceBetween: 24,
                    },
                  }}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  onBeforeInit={(swiper) => {
                    if (swiper.params.navigation) {
                      swiper.params.navigation.prevEl = navPrevRef.current;
                      swiper.params.navigation.nextEl = navNextRef.current;
                    }
                  }}
                >
                  {trainers.map((t, i) => (
                    <SwiperSlide key={i}>
                      <TrainerCard trainer={t} />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <button ref={navPrevRef} className={`${styles.customNavBtn} swiper-button-prev`}>
                  <img src="/images/left-arrow-blue.webp" alt="Previous" width={57} height={57} />
                </button>
                <button ref={navNextRef} className={`${styles.customNavBtn} swiper-button-next`}>
                  <img src="/images/right-arrow-blue.webp" alt="Next" width={57} height={57} />
                </button>
                <div className={styles.trainersPagination}></div>
              </div>
            </div>

            <div className={styles.trainersGridWrapper}>
              <div
                className={styles.trainersGrid}
                ref={trainersGridRef}
                data-scroll
                data-scroll-class="is-inview"

              >
                {displayTrainers.map((t, i) => (
                  <div
                    key={`${t.name}-${i}`}
                    className="trainer-animate-item"
                    /* We use a simple CSS delay based on index for the stagger effect */
                    style={{ animationDelay: `${(i % 4) * 0.1}s` }}
                  >
                    <TrainerCard trainer={t} />
                  </div>
                ))}
              </div>
              <div
                data-scroll
                data-scroll-class="is-inview"

                className="fade-in-section"
                style={{ animationDelay: "0.3s" }}
              >
                {trainers.length > 10 && (
                  !showAll ? (
                    <button
                      onClick={handleSeeMore}
                      className={styles.trainersSeeMore}
                    >
                      SEE MORE
                    </button>
                  ) : (
                    <button
                      onClick={handleSeeLess}
                      className={styles.trainersSeeLess}
                    >
                      SEE LESS
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}