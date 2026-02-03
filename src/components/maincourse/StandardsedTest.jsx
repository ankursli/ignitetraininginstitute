import React, { useEffect, useState } from "react";
// import Image from "next/image";
import Image from '@/components/CustomImageWrapper';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const testData = [
  {
    number: "01.",
    title: "ACT",
    img: "/images/test-section1.webp",
    label: "ACT",
    details: ["Score higher on the ACT with personalized, proven preparation"],
    btn: "LEARN MORE",
  },
  {
    number: "02.",
    title: "AP",
    img: "/images/test-section2.webp",
    label: "ADVANCED PLACEMENTS",
    details: ["Targeted AP tutoring to strengthen concepts & exam readiness"],
    btn: "LEARN MORE",
  },
  {
    number: "03.",
    title: "UCAT",
    img: "/images/test-section3.webp",
    label: "UCAT",
    details: ["Master UCAT strategies with expert guidance & focused test prep"],
    btn: "LEARN MORE",
  },
];


const Test = ({ isMobileSwiper, active, setActive }) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // Set initial active slide for mobile, and initial active card for desktop
  useEffect(() => {
    if (isMobileSwiper && setActive) {
      setActive(1); // Set the second slide (index 1) as active initially for mobile
    } else if (!isMobileSwiper && setActive) {
      setActive(1); // Set the second card (index 1) as active initially for desktop
    }
  }, [isMobileSwiper, setActive]);


  return (
    <section className="testSection1">
      <div className="container">
        <div className="testHeadings">
          <div
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section"
            style={{ animationDelay: "0.1s" }}
          >
            <h2 className="SubHeading testSubheading font-sizet">STANDARDISED TESTS</h2>
          </div>
          <h3
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section testTitle font-sizet1"
            style={{ animationDelay: "0.2s" }}
          >
            {isMobile ? (
              // Mobile Title Structure (Example: shorter text without <br>)
              <>
                Score Higher With Test Prep Methods That Truly <span className="highlight">Work</span>
              </>
            ) : (
              // Desktop Title Structure (Original)
              <>
                Score Higher With Test Prep <br /> Methods That Truly <span className="highlight">Work</span>
              </>
            )}

          </h3>
        </div>
      </div> {/* End container for headings */}

      {/* Conditional Rendering: Swiper for Mobile (outside container), Static Cards for Desktop (inside container) */}
      {isMobileSwiper ? (
        <Swiper
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat="true"
          className="fade-in-section testMobileSwiper"
          // spaceBetween={25} // Default value, overridden by breakpoints
          centeredSlides={true}
          loop={false} // Enable looping for mobile
          pagination={false} // HIDE PAGINATION BULLETS
          modules={[Pagination, Navigation, Autoplay]}
          initialSlide={1} // Start with the second slide (index 1)
          onSlideChange={(swiper) => {
            if (setActive) {
              setActive(swiper.realIndex);
            }
          }}
          // navigation={true} // Uncomment if you want navigation arrows

          breakpoints={{
            0: {
              slidesPerView: 1.1,
              spaceBetween: 20, // Adjusted for more visibility
              centeredSlides: true,
            },
            400: {
              slidesPerView: 1.1,
              spaceBetween: 25, // Adjusted for more visibility
              centeredSlides: true,
            },
            575: {
              slidesPerView: 1.2,
              spaceBetween: 25, // Adjusted for more visibility
              centeredSlides: true,
            },
            786: {
              slidesPerView: 1.5,
              spaceBetween: 30, // Adjusted for more visibility
              centeredSlides: true,
            },
            900: {
              slidesPerView: 1.8,
              spaceBetween: 30, // Adjusted for more visibility
              centeredSlides: true,
            },
          }}
        >
          {testData.map((card, idx) => {
            const isCardActive = active === idx;
            return (
              <SwiperSlide key={idx}>
                <div className="testCardMobile">
                  <div
                    data-scroll
                    data-scroll-class="is-clipped"
                    data-scroll-offset="-10%"
                    className={`testCardImageWrap ${isCardActive ? "mobileActiveImageArea" : ""}`}
                    style={{ backgroundImage: `url(${card.img})` }}
                  >
                    <span className={`testCardNumber ${isCardActive ? "mobileActiveNumber" : ""}`}>{card.number}</span>
                    <h3 className={`testCardTitle ${isCardActive ? "mobileActiveTitle" : ""}`}>{card.title}</h3>
                  </div>
                  <div className={`testCardDetailsWrap ${isCardActive ? "mobileShowContent" : "mobileHideContent"}`}>
                    <h3 className="testCardLabel">{card.label}</h3>
                    <div className="testCardDetails">
                      {card.details &&
                        card.details.map((d, i) => <span key={i}>{d}</span>)}
                    </div>
                    <button className="testCardBtnMobile buttonSkyBlue" type="button">
                      {card.btn}
                      <span className="btnArrow">
                        <Image
                          src="/images/right-arrow-blue.webp"
                          width={30}
                          height={30}
                          quality={100}
                          alt="arrow"
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        // Desktop Version: Remains inside container
        <div className="container">
          <div className="row testCardsRow">
            {testData.slice(0, 3).map((card, idx) => {
              const isCardActive = active === idx;
              return (
                <div
                  key={idx}
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat="true"
                  className={`fade-in-section col-4 px-3 testCard`}
                  style={{ animationDelay: `${0.3 + idx * 0.15}s` }}
                  onMouseEnter={() => setActive(idx)}
                  onMouseLeave={() => setActive(1)}
                >
                  <div
                    data-scroll
                    data-scroll-class="is-clipped"
                    data-scroll-offset="-10%"
                    data-scroll-repeat="true"
                    className={`cardImageArea ${isCardActive ? "activeImageArea" : ""}`}
                    style={{ backgroundImage: `url('${card.img}')` }}
                  >
                    <div className="imageOverlay"></div>
                    <span className="cardNumber">{card.number}</span>
                    <h3 className="cardTitle mb-0">{card.title}</h3>
                  </div>

                  <div
                    className={`cardContentArea ${isCardActive ? "showContent" : "hideContent"}`}
                  >
                    <h3 className="cardLabel">{card.label}</h3>
                    <div className="cardDetails">
                      {card.details &&
                        card.details.map((d, i) => (
                          <p key={i} className="m-0">{d}</p>
                        ))}
                    </div>
                    <button className="cardBtn buttonSkyBlue" type="button">
                      {card.btn}{" "}
                      <Image
                        src="/images/right-arrow-blue.webp"
                        width={40}
                        height={40}
                        quality={100}
                        alt="arrow"
                      />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <style jsx>{`
//   .font-sizet {
//   font-size: 30px !important;
// }
//   .font-sizet1 {
//   font-size: 2rem !important;
// }
      .testSection1{
        padding:0 !important;
      }


@media (max-width: 768px) {
  .font-sizet {
    font-size: 20px !important;
  }
      .font-sizet1 {
  font-size: 25px !important;
}
}


      `}</style>
    </section>
  );
};

export default Test;