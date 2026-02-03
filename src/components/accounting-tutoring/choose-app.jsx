import Image from 'next/image'
import React from 'react'

const IBCurriculumStages = () => {
  return (
    <div>


      <section className="">
        <div className="container">
          <div className="achievementsHeadings">
            <div
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section"
              style={{ animationDelay: "0.1s" }}
            >
              <h2 className="SubHeading">
                CURRICULUM WE OFFER
              </h2>
            </div>
            <div
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section"
              style={{ animationDelay: "0.25s" }}
            >
              <h3
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className="fade-in-section testTitle"
                style={{ animationDelay: "0.2s" }}
              >
                Curriculum-Aligned Coaching &
                <span className="highlight"> Exam Prep </span>Support
              </h3>
            </div>
          </div>
          <div className="row gy-5 curriculum-content fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat>
            <div className="col-lg-6">
              <div
                className="curriculum-col curriculum-col-left"
                style={{ borderRadius: 20 }}
              >
                <p
                  className="curriculum-section-heading1 text-center"
                  style={{
                    fontSize: "2rem",
                    borderBottomColor: "grey",
                    borderBottomWidth: 1,
                  }}
                >
                  CURRICULUMS
                </p>
                <div
                  style={{
                    border: "1px solid rgba(35, 52, 103, 1)",
                    width: 300,
                    opacity: ".25",
                    margin: "auto auto 40px",
                  }}
                />
                <div className="row gy-3">
                  <div className="col-lg-6">
                    <div className="curriculum-info">
                      <Image
                        alt='Accounting Tutors in Dubai'
                        src="/assets/check-inactive-blue.webp"
                        width={30}
                        height={30}
                        quality={100}
                      />{" "}
                      <h3>IGCSE/GCSE Accounting Tutors</h3>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="curriculum-info">
                      <Image
                        alt='Accounting Tutors in Dubai'
                        src="/assets/check-inactive-blue.webp"
                        width={30}
                        height={30}
                        quality={100}
                      />{" "}
                      <h3>A-Levels Accounting Tutors</h3>
                    </div>
                  </div>
                  {/* <div className="col-lg-6">
                    <div className="curriculum-info">
                      <Image
                        src="/assets/check-inactive-blue.webp"
                        width={30}
                        height={30}
                        quality={100}
                      />{" "}
                      <h1>IGCSE/GCSE French Tutors</h1>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="curriculum-info">
                      <Image
                        src="/assets/check-inactive-blue.webp"
                        width={30}
                        height={30}
                        quality={100}
                      />{" "}
                      <h1>A-Levels French Tutors</h1>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            {/* <div className="col-lg-6">
              <div
                className="curriculum-col curriculum-col-right"
                style={{ borderRadius: 20 }}
              >
                <p
                  className="curriculum-section-heading2 text-center"
                  style={{
                    fontSize: "2rem",
                    borderBottomColor: "grey",
                    borderBottomWidth: 1,
                    borderRadius: 0,
                  }}
                >
                  STANDARDISED TESTS
                </p>{" "}
                <div
                  style={{
                    border: "1px solid rgba(35, 52, 103, 1)",
                    width: 300,
                    opacity: ".25",
                    margin: "auto auto 40px",
                  }}
                />
                <div className="row gy-3">
                  <div className="col-lg-6">
                    <div className="curriculum-info">
                      <Image
                        src="/assets/check-inactive-blue.webp"
                        width={30}
                        height={30}
                        quality={100}
                      />{" "}
                      <h1>ACT English <br/>Tutors</h1>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="curriculum-info">
                      <Image
                        src="/assets/check-inactive-blue.webp"
                        width={30}
                        height={30}
                        quality={100}
                      />{" "}
                      <h1>AP English <br/>Tutors</h1>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="curriculum-info">
                      <Image
                        src="/assets/check-inactive-blue.webp"
                        width={30}
                        height={30}
                        quality={100}
                      />{" "}
                      <h1>UCAT English Tutors</h1>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="curriculum-info">
                      <Image
                        src="/assets/check-inactive-blue.webp"
                        width={30}
                        height={30}
                        quality={100}
                      />{" "}
                      <h1>A-Level Chemistry Tutors</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <style jsx>{`
/* Header */
.curriculum-content{
  justify-content: center;
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
.curriculum-info h3 {
  color: rgba(35, 52, 103, 1);
  font-size: 24px;
  font-weight: 500;
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
.achievementsSection {
  padding: 30px 0;
}
  .achievementsHeadings p {
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.5);
    line-height: 1.4;
  }
}
@media (max-width: 575px) {
      .achievementsSection {
        padding: 0 0 80px 0;
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

  .achievementsTitle {
    font-size: 1.8em;
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
  .curriculum-info h3 {
    font-size: 16px;
  }
  .curriculum-section-heading1 {
    font-size: 22px !important;
  }
  .curriculum-section-heading2 {
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

.curriculum-section-heading1 {
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 40px;
  letter-spacing: 0%;
  vertical-align: middle;
  text-transform: uppercase;
  background: linear-gradient(285.71deg, #3F88BA -4.32%, #161664 106.53%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* Optional for cross-browser support */
  background-clip: text;
  color: transparent;
}

.curriculum-section-sub-heading1 {
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 45px;
  letter-spacing: 0%;
  vertical-align: middle;
  text-transform: uppercase;
  background: linear-gradient(285.71deg, #3F88BA -4.32%, #161664 106.53%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* Optional for cross-browser support */
  background-clip: text;
  color: transparent;
  margin-bottom: 60px;
}

.curriculum-section-heading2 {
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 40px;
  letter-spacing: 0%;
  vertical-align: middle;
  text-transform: uppercase;
  background: linear-gradient(285.71deg, #3F88BA -4.32%, #161664 106.53%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

    /* Optional for cross-browser support */
    background-clip: text;
    color: transparent;


}

.curriculum-section-sub-heading2 {
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 45px;
  letter-spacing: 0%;
  vertical-align: middle;
  text-transform: uppercase;
  background: linear-gradient(90deg, #00A491 0%, #003E37 127.82%);

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* Optional for cross-browser support */
  background-clip: text;
  color: transparent;
  margin-bottom: 60px;

}

.curriculum-col {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 40px 80px;
}
.curriculum-col-left{
background: linear-gradient(235.04deg, #EDFFF4 45.21%, #A6EAC7 95.86%);

}
.curriculum-col-right{
  background: linear-gradient(237.21deg, #E7F6FF 54.23%, #A3CAF5 103.75%);

}


.curriculum-left-button {
  position: relative;
  overflow: hidden;
  padding: 10px 30px;
  border-radius: 40px;
  text-transform: uppercase;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  cursor: pointer;
  transition: 0.3s ease;
  z-index: 1;
  background: linear-gradient(90deg, #00A491 0%, #003E37 127.82%);
  color: #fff;

}


.curriculum-left-button img {
  width: 30px;
  height: auto;
  /* background: linear-gradient(269.48deg, #E7F6FF 2.74%, #A3CAF5 93.4%); */
}


.curriculum-right-button {
  position: relative;
  overflow: hidden;
  padding: 10px 30px;
  border-radius: 40px;
  text-transform: uppercase;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  cursor: pointer;
  transition: 0.3s ease;
  z-index: 1;
  background: linear-gradient(285.71deg, #3F88BA -4.32%, #161664 106.53%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
  color: #fff;


}

.curriculum-right-button img {
  width: 30px;
  height: auto;
  /* background: linear-gradient(269.48deg, #E7F6FF 2.74%, #A3CAF5 93.4%); */
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
  .curriculum-section-heading2 {
  font-weight: 700;
  font-size: 2rem;
  }

  .achievements-score {
    font-size: 1.5rem;
  }

  .achievements-navButton {
    width: 30px;
    height: 30px;
  }

  .achievements-arrow {
    width: 10px;
    height: 10px;
  }
  .curriculum-col {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  padding-right: 0px;
  padding: 30px;

}
.curriculum-section-heading1{
  font-size: 2rem;
}
}
@media (min-width: 1536px) and (max-width: 1919px) {
  /* Curriculum Sections */
  .curriculum-section-heading1,
  .curriculum-section-heading2 {
    font-size: 40px; /* 45px - 5px */
  }
  
  .curriculum-section-sub-heading1,
  .curriculum-section-sub-heading2 {
    font-size: 57px; /* 62px - 5px */
  }
  
  .curriculum-info h3 {
    font-size: 19px; /* 24px - 5px */
  }
  
  /* Table Styles */
  .act-exam-table th,
  .act-exam-table td {
    font-size: calc(1rem - 5px);
  }
  
  /* Subject Cards */
  .subjects-card .counts {
    font-size: 35px; /* 40px - 5px */
  }
  
  .subjects-card .subjects-name {
    font-size: 15px; /* 20px - 5px */
  }
  
  /* Achievement Section Content */
  .myCustomAchievments .achievement-section-content {
    font-size: 13px; /* 18px - 5px */
  }
  
  /* Button Text Sizes */
  .curriculum-left-button,
  .curriculum-right-button {
    font-size: calc(1rem - 5px);
  }
  
  /* Adjust padding for smaller text */
  .curriculum-col {
    padding: 35px 75px; /* 40px 80px - 5px */
  }
  
  .curriculum-info {
    padding: 12px; /* 15px - 3px */
  }
}
  @media (min-width: 1200px) and (max-width: 1535px) {
  /* Curriculum Sections */
  .curriculum-section-heading1,
  .curriculum-section-heading2 {
    font-size: 35px; /* 45px - 10px */
  }
  
  .curriculum-section-sub-heading1,
  .curriculum-section-sub-heading2 {
    font-size: 52px; /* 62px - 10px */
  }
  
  .curriculum-info h3 {
    font-size: 14px; /* 24px - 10px */
  }
  
  /* Table Styles */
  .act-exam-table th,
  .act-exam-table td {
    font-size: calc(1rem - 10px);
  }
  
  /* Subject Cards */
  .subjects-card .counts {
    font-size: 30px; /* 40px - 10px */
  }
  
  .subjects-card .subjects-name {
    font-size: 10px; /* 20px - 10px */
  }
  
  /* Achievement Section Content */
  .myCustomAchievments .achievement-section-content {
    font-size: 8px; /* 18px - 10px */
  }
  
  /* Button Text Sizes */
  .curriculum-left-button,
  .curriculum-right-button {
    font-size: calc(1rem - 10px);
  }
  
  /* Adjust padding for smaller text */
  .curriculum-col {
    padding: 30px 70px; /* 40px 80px - 10px */
  }
  
  .curriculum-info {
    padding: 10px; /* 15px - 5px */
  }
  
  /* Additional adjustments for this breakpoint */
  .achievementsHeadings p {
    font-size: calc(1.4rem - 10px);
  }
  
  .achievements-name {
    font-size: calc(1.2rem - 10px);
  }
  
  .achievements-descriptionText {
    font-size: calc(0.9rem - 10px);
  }
  
  .achievements-score {
    font-size: calc(2.5rem - 10px);
  }
}
  @media (max-width: 575px) {
    
    .achievementsHeadings .SubHeading{
        margin:0;
    }
    .achievementsTitle{
        margin: 20px 0;
        font-size: 20.4px;
    }
    .curriculum-content{
        padding-top:15px;
    }
    .curriculum-info{
        padding: 5px 30px;
    }
    
    .curriculum-section-heading1,
    .curriculum-section-heading2{
        margin-bottom:0;
    }
}
`}</style>
    </div>
  )
}

export default IBCurriculumStages