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
  EffectCoverflow,
} from "swiper/modules";


const alumniData = [
  {
    name: "LOREM IPSUM DOLOR",
    img: "/images/alumni-slider1.webp",
    logo: "/images/university_logo.webp",
  },
  {
    name: "LOREM IPSUM DOLOR",
    img: "/images/alumni-slider2.webp",
    logo: "/images/university_logo.webp",
  },
  {
    name: "LOREM IPSUM DOLOR",
    img: "/images/alumni-slider3.webp",
    logo: "/images/university_logo.webp",
  },
  {
    name: "LOREM IPSUM DOLOR",
    img: "/images/alumni-slider1.webp",
    logo: "/images/university_logo.webp",
  },
  {
    name: "LOREM IPSUM DOLOR",
    img: "/images/alumni-slider2.webp",
    logo: "/images/university_logo.webp",
  },
  {
    name: "LOREM IPSUM DOLOR",
    img: "/images/alumni-slider3.webp",
    logo: "/images/university_logo.webp",
  },
];

export default function Alumni({ setActiveIndex }) {
  return (
    <>
      <section className="alumniSection">
        <div className="container">

          <div
            className="text-center mb-5 fade-in-section alumniSubSection"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.15s" }}
          >
            {/* Gradient subtitle with lines */}
            <div
              data-scroll
              data-scroll-class="is-inview"

              className="fade-in-section"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="SubHeading testSubheading">OUR ALUMNI IN TOP UNIVERSITIES
              </div>
            </div>

            {/* Main title */}
            <h2
              data-scroll
              data-scroll-class="is-inview"

              className="fade-in-section testTitle"
              style={{ animationDelay: "0.2s" }}
            >
              Charting Global Success, One Student At
              <span className="highlight"> At A Time  </span>
            </h2>
          </div>



          <div className="alumniSwiper">
            {/* Swiper Nav Buttons */}
            <button className="swiper-button-prev customNavBtn">
              <img
                src="/images/right-arrow-blue.webp"
                alt="Prev"
                style={{ transform: "rotate(180deg)" }}
                width={32}
                height={32}
              />
            </button>
            <button className="swiper-button-next customNavBtn">
              <img
                src="/images/right-arrow-blue.webp"
                alt="Next"
                width={32}
                height={32}
              />
            </button>

            {/* <Swiper
              modules={[Navigation, Pagination, EffectCoverflow]}
              effect="coverflow"
              coverflowEffect={{
                rotate: 0,
                stretch: 80,
                depth: 200,
                modifier: 2,
                initialSlide: 1,
                slideShadows: false,
              }}
              initialSlide={1}
              slidesPerView={3}
              centeredSlides={true}
              spaceBetween={0}
              loop={true}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{ clickable: true }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="alumniSwiper"
              breakpoints={{
                0: { slidesPerView: 1.5 },
                767: { slidesPerView: 2 },
                1100: { slidesPerView: 3 },
              }}
            > */}
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={3}
              centeredSlides={true}
              spaceBetween={-80}
              loop={true}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{ clickable: true }}
              className="alumniSwiper"
              // REMOVE THIS LINE: onProgress={(swiper) => { ... }}
              breakpoints={{
                0: { slidesPerView: 1.5 },
                767: { slidesPerView: 2 },
                1100: { slidesPerView: 3 },
              }}
            >

              {alumniData.map((alumni, idx) => (
                <SwiperSlide key={idx}>
                  {({ isActive }) => (
                    <div
                      data-scroll
                      data-scroll-class="is-inview"

                      className="fade-in-section alumniCard"
                      style={{ animationDelay: `${0.3 + idx * 0.15}s` }}
                    >


                      <div className="alumniImageWrap">
                        <img
                          src={alumni.img}
                          alt={alumni.name}
                          data-scroll
                          data-scroll-class="is-inview"

                          className="alumniImage"
                        />
                        {/* <div className="alumniLogoBox">
                          <img
                            src={alumni.logo}
                            alt="university logo"
                            data-scroll
                            data-scroll-class="is-clipped"
                            data-scroll-offset="-10%"
                            className="alumniLogo"
                          />
                        </div> */}
                      </div>

                      <div className={`alumniName ${isActive ? "activeName" : ""}`}>
                        {alumni.name}
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
