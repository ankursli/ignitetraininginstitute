import { useEffect, useRef, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";



const AchievementsCarousel = () => {
  const [mounted, setMounted] = useState(false);
  const scrollRef = useRef(null);
  const scrollInstanceRef = useRef(null);

  useEffect(() => {
    let scroll;
    const initScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      if (!scrollRef.current) return;
      scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.1,
      });
      scrollInstanceRef.current = scroll;
    };
    if (typeof window !== "undefined") {
      initScroll();
    }
    return () => {
      scrollInstanceRef.current?.destroy();
      scrollInstanceRef.current = null;
    };
  }, []);
  const SUBJECTLIST = [
    {
      counts: "01.",
      subjectsName: "Listening & Speaking",
    },
    {
      counts: "02.",
      subjectsName: "Reading & Writing",
    },
    {
      counts: "03.",
      subjectsName: "Everyday Vocabulary",
    },
    {
      counts: "04.",
      subjectsName: "Grammar Fundamentals",
    },
    {
      counts: "05.",
      subjectsName: "Extensive Learning Material",
    },
    {
      counts: "06.",
      subjectsName: "Everyday Spanish",
    },
    {
      counts: "07.",
      subjectsName: "Culture & Experiences",
    },
    {
      counts: "08.",
      subjectsName: "Global Issues",
    },
  ];
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="subject-syllabus">
      <div className="container">
        <div className="achievementsHeadings ">
          <div
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section"
            style={{ animationDelay: "0.1s" }}
          >
            <h2 className="SubHeading">SUBJECT SYLLABUS</h2>
          </div>
          <div
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section"
            style={{ animationDelay: "0.25s" }}
          >
            <h3 className="achievementsTitle text-uppercase">
              Explore Key Areas In The <br></br>{" "}
              <span className="highlight"> Spanish</span> Syllabus{" "}
            </h3>
          </div>
        </div>
        <div className="row gy-4 gy-sm-3 fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat>
          {SUBJECTLIST.map((item, indx) => (
            <div className="col-6 col-lg-3">
              <div
                className="subjects-card text-uppercase"
                key={indx + 1}
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="counts">{item.counts}</div>
                <h3 className="subjects-name">{item.subjectsName}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        /* Header */
.achievementsSection {
  padding: 70px 0;
}

.subjects-card .subjects-name{
      margin-bottom: 0;
}

.achievementsHeadings {
  text-align: center;
  /* background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, var(--border-color), #e7f6ff) border-box;
  border-bottom: 2px solid transparent;
  padding-bottom: 30px; */
}

.achievementsTitle {
  font-size: 2rem;
  font-weight: 700;
  margin: 40px 0 30px;
  line-height: 1.1;
  text-transform: uppercase;
  color: var(--blue-color);
}

.achievementsTitle .highlight {
  background: linear-gradient(
    to right,
    var(--lightgreen-color),
    var(--green-color)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.achievementsHeadings p {
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.5);
  line-height: 1.4;
}


/* Carousel container */
.achievements-container {
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  position: relative;
  padding-bottom: 40px;
}

.achievements-swiperWrapper {
  position: relative;
  padding-bottom: 60px;
  overflow: visible;
}

/* Slide wrapper stacks card + info */
.achievements-slideWrapper {
  /* display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px; */
  text-align: center;
}

/* Card */
.achievements-slideCard {
  background-image: url("/images/uni-subtract.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  border-radius: 15px;
  /* position: relative; */
  /* overflow: hidden; */
  /* padding: 20px; */
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  height: 350px;
  /* box-shadow: none; */
  width: 260px;
}
.customNavBtn {
  background-color: transparent;
}
/* Logo */
.achievements-logoWrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
.mix-blend {
  mix-blend-mode: darken;
}
.achievements-logoWrapper img {
  max-width: 100%;
  height: auto;
  mix-blend-mode: darken;
}

/* Score */
.achievements-score {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e3a8a;
  position: absolute;
  top: 64%;
  right: 0;
  padding: 10px 20px;
  /* background: #fff; */
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
}

/* Info below card */
.achievements-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: center;
}

/* Name with underline */
.achievements-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: #1f7f67;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  position: relative;
  padding-bottom: 4px;
  margin: 0;
}
.curriculum-info {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
}
.curriculum-info h1 {
  color: rgba(35, 52, 103, 1);
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 0;
}
.achievements-name::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: #d0d7e3;
}

/* Description row */
.achievements-bottomRow {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: #1e3a8a;
  margin: 0;
  padding-bottom: 4px;
}

.achievements-bottomRow::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: #d0d7e3;
}

.achievements-iconWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.achievements-descriptionText {
  font-weight: 500;
  letter-spacing: 0.5px;
}

/* Navigation arrows */
.achievements-navButton {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  /* background: #1e3a8a; */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 5;
}

.achievements-prev {
  left: 10px;
}

.achievements-next {
  right: 10px;
}

.achievements-arrow {
  stroke: #ffffff;
  fill: none;
  stroke-width: 2;
}

.swiper-button-prev:after,
.swiper-button-next:after {
  display: none !important;
}

.customNavBtn {
  border: 0;
  background-color: none;
}

/* Responsive tweaks */
@media (max-width: 1024px) {
  .achievements-score {
    font-size: 2rem;
  }

  .achievements-name {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .achievements-slideCard {
    padding: 15px;
    min-height: 200px;
  }

  .achievements-score {
    font-size: 1.5rem;
  }

  .achievements-navButton {
    width: 30px;
    height: 30px;
  }

  .achievementsHeadings p {
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.5);
    line-height: 1.4;
  }
}

/*Table*/
.actTestHeadings {
  text-align: center;
  padding-bottom: 30px;
}

.act-exam-overview {
  padding: 60px 0;
}

.act-table-container {
  margin-top: 40px;
  overflow-x: auto;
}

.act-exam-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin: 0 auto;
  /* No background-color here, as rows will handle it */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #dee2e6;
  border: 1px solid #161664;
}

.act-exam-table th,
.act-exam-table td {
  padding: 15px 20px;
  text-align: left;

  color: #495057;
}

.act-exam-table td {
  border-right: 1px solid #161664;
}

/* Header row background with gradient */
.act-exam-table thead tr {
  background: linear-gradient(to right, #a3caf5, #e7f6ff);
  /* Remove direct color here, as th will handle text color */
  font-weight: 500;
}

/* Text color for each heading (th) with "gradient" */
.act-exam-table thead th {
  background: linear-gradient(to right, #161f5a, #e7f6ff);
  /* The requested text "gradient" */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  border-right: 1px solid #161664;
}

/* Even body rows background with gradient */
.act-exam-table tbody tr:nth-of-type(even) {
  background: linear-gradient(to right, #e3effc, #f8fcff);
}

/* Odd body rows (optional, keeps default or can set a single color) */
.act-exam-table tbody tr:nth-of-type(odd) {
  background-color: #ffffff;
  /* Default white background for odd rows */
}

.act-exam-table tbody tr:last-child td {
  border-bottom: none;
}

.act-exam-table th:last-child,
.act-exam-table td:last-child {
  border-right: none;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .act-exam-table th,
  .act-exam-table td {
    padding: 10px 15px;
    font-size: 0.9em;
  }
          .subjects-card {
  padding: 15px !important;
  gap: 10px !important;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  transition: all 0.3s ease;
  height: 100%;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
}
  .achievementsTitle {
    font-size: 1.8em;
  }
    .achievementsSection {
  padding: 20px 0;
}
}
@media (max-width: 575px) {
  .subject-syllabus{
    padding:0 0 0 0;
  }
  .subject-syllabus .achievementsHeadings{
    margin-bottom:0 !important;
  }
  .subject-syllabus .achievementsTitle{
      margin:20px 0;
  }
}

.subjects-card {
  padding: 20px;
  gap: 25px;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  transition: all 0.3s ease;
  height: 100%;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
}
.subjects-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(269.48deg, #e7f6ff 2.74%, #a3caf5 93.4%);
  opacity: 0.5;
  z-index: -1;
}

.subjects-card:hover::before {
  background: linear-gradient(47.43deg, #00a491 0%, #003e37 123.39%);
  opacity: 1;
}

.subjects-card:hover .subjects-name {
  color: rgba(255, 255, 255, 1);
}
.subjects-card:hover .counts {
  color: rgba(255, 255, 255, 1);
}
.subjects-card .counts {
  font-size: 40px;
  font-weight: 700;
  color: rgba(22, 22, 100, 1);
}
.subjects-card .subjects-name {
  font-size: 20px;
  font-weight: 700;
  color: rgba(22, 22, 100, 1);
}

.myCustomAchievments {
  padding: 80px 30px;
  margin: 0 30px;
  background: linear-gradient(
    270deg,
    rgb(255 255 255 / 0%) -5.67%,
    #a6eac7 121.47%
  );
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}
.myCustomAchievments .achievement-section-content {
  font-size: 18px;
}

@media (max-width: 768px) {
  .act-exam-table th,
  .act-exam-table td {
    padding: 8px 10px;
    font-size: 0.8em;
  }
  .curriculum-info {
    padding: 15px 30px;
  }
  .curriculum-info h1 {
    font-size: 16px;
  }
  .curriculum-section-heading1 {
    font-size: 22px !important;
  }
  .achievementsTitle {
    font-size: 23px;
  }
  .subjects-card {
    border-radius: 10px !important;
  }
  .subjects-card .subjects-name {
    font-size: 14px;
  }
  .myCustomAchievments {
    margin: 0;
    margin-top: 40px;
  }
  .myCustomAchievments .achievement-section-desc {
    font-size: 13px;
  }
  /* .myCustomAchievments .achievement-section-sub-heading2 {
    font-size: 2.1rem;
  }
  .myCustomAchievments .achievement-section-sub-heading1 {
    font-size:3rem;
  } */
}

        `}</style>
    </section>
  );
};


export default AchievementsCarousel;