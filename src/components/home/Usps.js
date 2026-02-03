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
  Scrollbar,
  Mousewheel,
} from "swiper/modules";
import Image from "next/image";

const uspData = [
  {
    number: "01",
    icon: "/images/usp-icon1.webp",
    title: "EXPERIENCED TUTORS",
    desc: "One-on-one sessions to achieve personal goals and enhance self-awareness.",
  },
  {
    number: "02",
    icon: "/images/usp-icon2.webp",
    title: "STRUCTURED LEARNING",
    desc: "One-on-one sessions to achieve personal goals and enhance self-awareness.",
  },
  {
    number: "03",
    icon: "/images/usp-icon3.webp",
    title: "TAILORED COURSES",
    desc: "One-on-one sessions to achieve personal goals and enhance self-awareness.",
  },
  {
    number: "04",
    icon: "/images/usp-icon4.webp",
    title: "FLEXIBLE SCHEDULING",
    desc: "One-on-one sessions to achieve personal goals and enhance self-awareness.",
  },
  {
    number: "05",
    icon: "/images/usp-icon5.webp",
    title: "INTERACTIVE SESSIONS",
    desc: "One-on-one sessions to achieve personal goals and enhance self-awareness.",
  },
  {
    number: "06",
    icon: "/images/usp-icon6.webp",
    title: "INDIVIDUAL SUPPORT",
    desc: "One-on-one sessions to achieve personal goals and enhance self-awareness.",
  },
  {
    number: "07",
    icon: "/images/usp-icon1.webp",
    title: "EXPERIENCED TUTORS",
    desc: "One-on-one sessions to achieve personal goals and enhance self-awareness.",
  },
  {
    number: "08",
    icon: "/images/usp-icon2.webp",
    title: "STRUCTURED LEARNING",
    desc: "One-on-one sessions to achieve personal goals and enhance self-awareness.",
  },
];

const uspDataRows = [];
for (let i = 0; i < uspData.length; i += 2) {
  uspDataRows.push(uspData.slice(i, i + 2));
}

export default function Usps({ }) {
  return (
    <>
      <div
        // data-scroll
        // data-scroll-class="is-inview"
        // data-scroll-repeat="true"
        className="fade-in-section uspSection"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <div className="uspLeft">
              <span
                // data-scroll
                // data-scroll-class="is-inview"
                // data-scroll-repeat="true"
                className="fade-in-section SubHeading"
                style={{ animationDelay: "0.1s" }}
              >
                OUR USP'S
              </span>

              <h2
                // data-scroll
                // data-scroll-class="is-inview"
                // data-scroll-repeat="true"
                className="fade-in-section uspTitle"
                style={{ animationDelay: "0.2s" }}
              >
                LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING
              </h2>

              <div
                // data-scroll
                // data-scroll-class="is-inview"
                // data-scroll-repeat="true"
                className="fade-in-section uspSubtitle"
                style={{ animationDelay: "0.3s" }}
              >
                LOREM IPSUM DOLOR SIT AMET
              </div>

              <p
                // data-scroll
                // data-scroll-class="is-inview"
                // data-scroll-repeat="true"
                className="fade-in-section uspDesc"
                style={{ animationDelay: "0.4s" }}
              >
                Choosing us means partnering with experienced coaches who are
                dedicated to unlocking your potential. We offer personalized
                strategies, proven methods, and unwavering support to help you
                navigate challenges.
              </p>

              <button
                // data-scroll
                // data-scroll-class="is-inview"
                // data-scroll-repeat="true"
                className="uspBtn fade-in-section buttonSkyBlue"
                style={{ animationDelay: "0.5s" }}
                type="button"
              >
                KNOW MORE{" "}
                <Image
                  src="/images/right-arrow-blue.webp"
                  width={40}
                  height={40}
                  quality={100}
                />
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="uspRight">
              {uspDataRows.map((row, index) => (
                <div key={index} className="uspSlide">
                  {row.map((usp, i) => (
                    <div key={i} className="uspItem">
                      <div className="uspNumber">{usp.number}</div>
                      <div className="uspIconCircle">
                        <img
                          src={usp.icon}
                          alt={usp.title}
                          className="uspIcon"
                        />
                      </div>
                      <div className="uspContent">
                        <div className="uspItemTitle">{usp.title}</div>
                        <div className="uspItemDesc">{usp.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
