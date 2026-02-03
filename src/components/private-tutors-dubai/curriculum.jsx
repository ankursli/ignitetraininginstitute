import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const IBCurriculumStages = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div style={{ marginBlock: isMobile ? "0" : "" }}>
      <section className="achievementsSection pb-0" style={{ position: 'relative' }}>
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
                CURRICULA & STANDARDISED TESTS WE OFFER
              </h2>
            </div>
            <div
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section"
              style={{ animationDelay: "0.25s" }}
            >
              <h3 className="achievementsTitle">
                Curriculum-Based Learning & {isMobile ? "" : <br />}
                <span className="highlight">  Exam Prep</span> Solutions{" "}
              </h3>
            </div>
          </div>
        </div>
        <img src="/assets/bgrect25.webp" alt="private tutors in dubai" className="testimonialRect rect-1" width={598} height={120} />
        <img src="/assets/bgrect26.webp" alt="private tutors in dubai" className="testimonialRect rect-2" width={428} height={120} />
        <img
          src={isMobile ? "/assets/bgrect45.webp" : "/assets/bgrect27.webp"}
          alt="bg-shape"
          className="testimonialRect rect-3"
          width={isMobile ? 185 : 811}
          height={isMobile ? 133 : 120}
        />      </section>
      <section className="" style={{ position: 'relative' }}>
        <div className="container fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat>
          <div className="row pading-in gy-5">
            <div className="col-lg-6">
              <div
                className="curriculum-col curriculum-col-left"
                style={{ borderRadius: 20 }}
              >
                <p
                  className="curriculum-section-heading1"
                  style={{
                    fontSize: "35px",
                  }}
                >
                  CURRICULUMS
                </p>
                <div
                  style={{
                    border: "1px solid rgba(35, 52, 103, 1)",
                    maxWidth: isMobile ? 300 : 300,
                    margin: isMobile ? "0 auto" : "0",
                    opacity: ".25",
                  }}
                />
                <div className="curriculum-content">
                  <div className="curriculum-info">
                    <Image
                      src="/assets/check-inactive-blue.webp"
                      width={isMobile ? 20 : 30}
                      height={isMobile ? 20 : 30}
                      quality={100}
                      alt="Private Tutors in Dubai"
                    />{" "}
                    <h3>
                      <a
                        href="/ib-curriculum-tutors-in-dubai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        IB (MYP & IBDP)
                      </a>
                    </h3>
                  </div>

                  <div className="curriculum-info">
                    <Image
                      src="/assets/check-inactive-blue.webp"
                      width={isMobile ? 20 : 30}
                      height={isMobile ? 20 : 30}
                      quality={100}
                      alt="Private Tutors in Dubai"
                    />{" "}
                    <h3>
                      <a
                        href="/courses/igcse-tutors-in-dubai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        IGCSE
                      </a>
                    </h3>
                  </div>

                  <div className="curriculum-info">
                    <Image
                      src="/assets/check-inactive-blue.webp"
                      width={isMobile ? 20 : 30}
                      height={isMobile ? 20 : 30}
                      quality={100}
                      alt="Private Tutors in Dubai"
                    />{" "}
                    <h3>
                      <a
                        href="/courses/a-level-tutors-in-dubai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        A-Levels
                      </a>
                    </h3>
                  </div>

                  <div className="curriculum-info">
                    <Image
                      src="/assets/check-inactive-blue.webp"
                      width={isMobile ? 20 : 30}
                      height={isMobile ? 20 : 30}
                      quality={100}
                      alt="Private Tutors in Dubai"
                    />{" "}
                    <h3>
                      <a
                        href="/courses/igcse-tutors-in-dubai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Private Candidate (Homeschooling)
                      </a>
                    </h3>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="curriculum-col curriculum-col-right"
                style={{ borderRadius: 20 }}
              >
                <p
                  className="curriculum-section-heading2"
                  style={{
                    fontSize: "35px",
                    borderRadius: 0,
                  }}
                >
                  STANDARDISED TESTS
                </p>{" "}
                <div
                  style={{
                    border: "1px solid rgba(35, 52, 103, 1)",
                    maxWidth: isMobile ? 300 : 300,
                    margin: isMobile ? "0 auto" : "0",
                    opacity: ".25",
                  }}
                />
                <div className="curriculum-content">
                  <div className="curriculum-info">
                    <Image
                      src="/assets/check-inactive-blue.webp"
                      width={isMobile ? 20 : 30}
                      height={isMobile ? 20 : 30}
                      quality={100}
                      alt="Private Tutors in Dubai"
                    />{" "}
                    <h3>
                      <a
                        href="/act-tutors-in-dubai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        ACT
                      </a>
                    </h3>
                  </div>

                  <div className="curriculum-info">
                    <Image
                      src="/assets/check-inactive-blue.webp"
                      width={isMobile ? 20 : 30}
                      height={isMobile ? 20 : 30}
                      quality={100}
                      alt="Private Tutors in Dubai"
                    />{" "}
                    <h3>
                      <a
                        href="/advanced-placements-tutors-in-dubai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Advanced Placements (AP)
                      </a>
                    </h3>
                  </div>

                  <div className="curriculum-info">
                    <Image
                      src="/assets/check-inactive-blue.webp"
                      width={isMobile ? 20 : 30}
                      height={isMobile ? 20 : 30}
                      quality={100}
                      alt="Private Tutors in Dubai"
                    />{" "}
                    <h3>
                      <a
                        href="/ucat-tutors-in-dubai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        UCAT
                      </a>
                    </h3>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
/* Container width fix */
.container {
  max-width: 1500px !important;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
}
.pading-in{
padding-inline:70px !important;
}
/* Header */
.achievementsSection {
  padding: 0 0;
  position: relative;
}
    .testimonialRect {
          position: absolute;
          opacity: 1;
          pointer-events: none;
          z-index: 2;
        }

        .rect-1 {
top: -53px;
    right: 54px;
    width: 608px;
    height: 102px;
        }

        .rect-2 {
          top: 62%;
          left: 0;
           width: 428px;
          height: 102px;
        }

        .rect-3 {
    bottom: -293%;
    right: 6rem;
    width: 750px;
    height: 102px;
        }

.achievementsHeadings {
  text-align: center;
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
  height: 350px;
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
.curriculum-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.curriculum-info {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
}
.curriculum-info h3 {
  color: rgba(35, 52, 103, 1);
  font-size: 23px;
  font-weight: 600;
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
    .pading-in{
padding-inline:0 !important;
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
  font-weight: 500;
}

/* Text color for each heading (th) with "gradient" */
.act-exam-table thead th {
  background: linear-gradient(to right, #161f5a, #e7f6ff);
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
}

.act-exam-table tbody tr:last-child td {
  border-bottom: none;
}

.act-exam-table th:last-child,
.act-exam-table td:last-child {
  border-right: none;
}
  @media (max-width: 388px) {
    .rect-1 {
                top: 260% !important;
        right: -44px !important;
        width: 144px !important;
        height: 55px !important;
    }

        .rect-2 {
          top: 132% !important;
        left: 0px !important;
        width: 279px !important;
        height: 55px !important;
    }
        .rect-3 {
           bottom: -140% !important;
        right: 296px !important;
        width: 100px !important;
        height: 55px !important; 
        }

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

     .rect-1 {
          top: 319%;
          right: -44px;
          width: 157px;
          height: 55px;
        }

        .rect-2 {
    top: 146%;
        left: 24px;
        width: 279px;
        height: 55px;
        }

        .rect-3 {
          bottom: -200%;
          right: 357px;
          width: 100px;
          height: 55px;
        }

  .curriculum-info {
    padding: 15px 30px;
  }
  .curriculum-info h3 {
    font-size: 16px;
  }
  .curriculum-section-heading1 {
    font-size: 19px !important;
  }
  .curriculum-section-heading2 {
    font-size: 19px !important;
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
  background-clip: text;
  color: transparent;
  margin-bottom: 60px;
}
  @media (max-width: 400px) {
    .rect-2 {
        top: 137%;
        left: 24px;
        width: 226px;
        height: 55px;
    }
        .rect-1 {
        top: 268%;
        right: -44px;
        width: 157px;
        height: 55px;
}
        
.rect-3{
        top: 234%;
              right: 328px;
        width: 167px;
        height: 72px;
    }
      }
.curriculum-col {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 30px 30px 50px 30px;
  padding-right: 100px;
  height: -webkit-fill-available;
}
.curriculum-col-left {
  background: url("/assets/turg.webp") no-repeat center center;
  background-size: cover;
}

.curriculum-col-right {
  background: url("/assets/turb.webp") no-repeat center center;
  background-size: cover;
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
  text-align: center;
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
  text-align: center;
}
}
@media (max-width: 575px) {
    .achievementsSection {
      padding: 0 0;
    }
    .achievementsTitle{
        font-size:20.4px;
        margin:20px 0;
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