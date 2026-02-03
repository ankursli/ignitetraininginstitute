// src/components/homeCopy/About.js (Updated)
import React, { useState, useEffect } from "react";
import Image from '@/components/CustomImageWrapper';
//  Import the CSS Module
import styles from '@/styles/home-copy/About.module.css';

const About = () => {
  const [studentCount, setStudentCount] = useState(0);
  const [acceptanceRate, setAcceptanceRate] = useState(0);
  const targetStudents = 2300;
  const targetRate = 89;
  const duration = 2000;
  const steps = 50;
  /* Removed JS resize listener for performance */
  /* const [isMobile, setIsMobile] = useState(false); ... */

  // --- Omitted Count Animation Logic ---

  return (
    //  Apply local module class
    <section className={styles.aboutSection}>
      <div className="container">
        {/* Global Class used as string */}
        <div
          data-scroll
          data-scroll-class="is-inview"

          style={{ animationDelay: "0.1s" }}
          className={`${styles.aboutHeading} fade-in-section`}

        >
          <h2 className="SubHeading">ABOUT IGNITE</h2>
        </div>
        <div className={`row ${styles.aboutSectionInner}`}>
          {/* Global Bootstrap class used as string, local class used with styles */}
          <div className={`col-12 col-lg-6 ${styles.aboutLeft}`}>
            {/*  Apply local module class */}
            <div
              data-scroll
              data-scroll-class="is-inview"

              className={`fade-in-section ${styles.aboutImageWrap}`}
            >
              <div>
                {/*  Apply local module class */}
                <img
                  data-scroll
                  data-scroll-class="is-inview"

                  className={`fade-in-section ${styles.rectangleBG}`}
                  src="/images/rectangle-bg1.webp"
                  alt="Teacher"
                  width={265}
                  height={102}
                />
                <img
                  data-scroll
                  data-scroll-class="is-inview"

                  className={`fade-in-section ${styles.rectangleBG}`}
                  src="/images/rectangle-bg2.webp"
                  alt="Teacher"
                  width={265}
                  height={102}
                />
                <img
                  data-scroll
                  data-scroll-class="is-inview"

                  className={`fade-in-section ${styles.rectangleBG}`}
                  src="/images/rectangle-bg2.webp"
                  alt="Teacher"
                  width={265}
                  height={102}
                />
                <img
                  data-scroll
                  data-scroll-class="is-inview"

                  className={`fade-in-section ${styles.rectangleBG}`}
                  src="/images/rectangle-bg2.webp"
                  alt="Teacher"
                  width={265}
                  height={102}
                />
              </div>
              <Image
                src="/images/home-about-us.webp"
                alt="Teacher"
                data-scroll
                data-scroll-class="is-inview"

                className={`fade-in-section ${styles.aboutImage}`}
                width={500}
                height={400}
              />
              {/*  Apply local module classes */}
              <div
                // data-scroll
                // data-scroll-class="is-clipped"
                // 
                // data-scroll-offset="-10%"
                className={`${styles.statCard} ${styles.statCardYears}`}
              >
                {/*  Apply local module classes */}
                <div className={styles.statBig}>10 YEARS</div>
                <div className={styles.statSmall}>
                  OF RICH TUTORING EXPERIENCE
                </div>
              </div>
              <div
                // data-scroll
                // data-scroll-class="is-clipped"
                // 
                // data-scroll-offset="-10%"
                className={`${styles.statCard} ${styles.statCardResources}`}
              >
                {/*  Apply local module classes */}
                <div className={styles.statBig}>1000+</div>
                <div className={styles.statSmall}>
                  RESOURCES THAT HELP YOU JOIN THE TOP 1%
                </div>
              </div>
              {/*  Apply local module class */}
              <div
                // data-scroll
                // data-scroll-class="is-inview"
                // 
                className={`${styles.verticalLabel} `}
                style={{ animationDelay: "0.8s" }}
              >
                <span>4.9</span> RATED ON GOOGLE
              </div>
            </div>
          </div>

          {/* Global Bootstrap class used as string, local class used with styles */}
          <div className={`col-12 col-lg-6 ${styles.aboutRight}`}>
            <div
              data-scroll
              data-scroll-class="is-inview"

              className="fade-in-section"
              style={{ animationDelay: "0.1s" }}
            >
              {/*  Apply local module class. Global class used as string */}
              <div className={styles.aboutHeadingRow}>
                <span className="SubHeading" >ABOUT IGNITE</span>
              </div>
            </div>

            <h3
              data-scroll
              data-scroll-class="is-inview"

              className={`fade-in-section ${styles.aboutTitle}`}
              style={{ animationDelay: "0.2s" }}
            >
              EXAM-READY SUPPORT WITH TRUSTED CURRICULA{" "}
              {/* Global class used as string */}
              <span className="aboutHighlight">EXPERTS</span>
            </h3>

            <p
              data-scroll
              data-scroll-class="is-inview"

              className={`fade-in-section ${styles.aboutDesc}`}
              style={{ animationDelay: "0.3s" }}
            >
              At Ignite Training Institute, every student can thrive with the right guidance & support. Our experienced trainers & tailored learning methods help unlock true potential, inside & outside the classroom.
            </p>

            <div
              data-scroll
              data-scroll-class="is-inview"

              className="fade-in-section w-100"
              style={{ animationDelay: "0.4s" }}
            >
              {/*  Apply local module class */}
              <div className={styles.aboutStatsRow}>
                {/*  Apply local module class */}
                <div className={styles.aboutStatBlock}>
                  {/*  Apply local module classes */}
                  <div className={styles.aboutStatBig}>2300+</div>
                  <div className={styles.aboutStatLabel}>
                    TRULY HAPPY STUDENTS FROM UAE
                  </div>
                </div>
                {/*  Apply local module class */}
                <span className={styles.aboutStatBorder}></span>
                <div className={styles.aboutStatBlock}>
                  {/*  Apply local module classes */}
                  <div className={styles.aboutStatBig}>89%</div>
                  <div className={styles.aboutStatLabel}>
                    OF STUDENTS ACCEPTED TO TOP UNIVERSITIES
                  </div>
                </div>
              </div>


            </div>


            <span
              data-scroll
              data-scroll-class="is-inview"

              className={`fade-in-section ${styles.aboutDesc} ${styles.mobilePaddingTop}`}
              style={{ animationDelay: "0.3s" }}
            >
              <a href="/join-free-demo-class/" className="nodecoration mobile-mt-2">
                {/* Global classes used as strings */}
                <button className="buttonSkyBlue mainCardBtn">
                  GET A FREE DEMO{" "}
                  <Image
                    src="/images/right-arrow-blue.webp"
                    width={40}
                    height={40}
                    quality={100}
                    loading="lazy"
                  />
                </button>
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;