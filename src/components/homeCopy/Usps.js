// src/components/homeCopy/Usps.js (Updated)
import React, { useState, useEffect, useCallback } from "react";
// ... (rest of imports)
import Image from '@/components/CustomImageWrapper';
// Import the CSS Module
import styles from '@/styles/home-copy/Usps.module.css';

// Custom Hook to Detect Mobile/Tablet View for disabling sticky logic (remains the same)
const useIsStickyDisabled = (breakpoint = 1100) => {
  const [isStickyDisabled, setIsStickyDisabled] = useState(false);

  const checkStickyDisabled = useCallback(() => {
    if (typeof window !== "undefined") {
      // Disable sticky tracking when screen width is less than the CSS breakpoint (1100px)
      setIsStickyDisabled(window.innerWidth <= breakpoint);
    }
  }, [breakpoint]);

  useEffect(() => {
    checkStickyDisabled();
    window.addEventListener("resize", checkStickyDisabled);
    return () => window.removeEventListener("resize", checkStickyDisabled);
  }, [checkStickyDisabled]);

  return isStickyDisabled;
};


const uspData = [
  // ... uspData remains the same ...
  {
    number: "01",
    icon: "/images/usp-icon1.webp",
    title: "EXPERIENCED TUTORS",
    desc: "Learn from highly qualified tutors with a proven track record of academic success.",
  },
  {
    number: "02",
    icon: "/images/usp-icon2.webp",
    title: "STRUCTURED LEARNING",
    desc: "A well-organised approach that ensures clarity, consistency, & a strong foundation.",
  },
  {
    number: "03",
    icon: "/images/usp-icon3.webp",
    title: "TAILORED PROGRAMS",
    desc: "Customised study plans aligned with each student's needs, pace, & curriculum.",
  },
  {
    number: "04",
    icon: "/images/usp-icon4.webp",
    title: "FLEXIBLE SCHEDULING",
    desc: "Convenient session timings designed to fit around school & lifestyle demands.",
  },
  {
    number: "05",
    icon: "/images/usp-icon5.webp",
    title: "INTERACTIVE SESSIONS",
    desc: "Engaging, discussion-based learning that encourages curiosity & critical thinking.",
  },
  {
    number: "06",
    icon: "/images/usp-icon6.webp",
    title: "INDIVIDUAL SUPPORT",
    desc: "Receive personalised guidance every step of the way to overcome any challenges.",
  },
  {
    number: "07",
    icon: "/images/usp-icon1.webp",
    title: "EXTENSIVE EXAM PREP",
    desc: "Practice with unit tests, past papers, & mock exams under exam-like conditions",
  },
  {
    number: "08",
    icon: "/images/usp-icon2.webp",
    title: "EXCELLENT RESOURCES",
    desc: "Access to curated notes, practice tests, & subject-specific learning material.",
  },
];

const uspDataRows = [];
for (let i = 0; i < uspData.length; i += 2) {
  uspDataRows.push(uspData.slice(i, i + 2));
}

export default function Usps({ }) {
  const isStickyDisabled = useIsStickyDisabled();

  // Helper function to return data-scroll attributes or empty object
  const getStickyProps = () => {
    if (isStickyDisabled) {
      return {};
    }
    return {
      "data-scroll": true,
      "data-scroll-sticky": true,
      "data-scroll-target": `.${styles.uspSection}`, // Target the module class
    };
  };

  return (
    <>
      <div
        // Global classes: usp-section and sp-container (assuming sp-container is now in globals.css)
        className="usp-section sp-container"

      >
        <div
          // Apply local module class
          data-scroll
          data-scroll-class="is-inview"

          className={`fade-in-section ${styles.uspSection}`}
          style={{ animationDelay: "0.2s" }}
        >
          {/* Global Bootstrap classes used as strings */}
          <div className="row justify-content-between gx-5">
            <div className="col-lg-4">
              <div
                // Apply local module class
                className={styles.uspLeft}
                {...getStickyProps()}
              >
                <h2
                  className="fade-in-section SubHeading"
                  data-scroll
                  data-scroll-class="is-inview"

                  style={{ animationDelay: "0.1s" }}
                >
                  OUR PROMISE
                </h2>

                <h3
                  // Apply local module class
                  className={`fade-in-section ${styles.uspTitle}`}
                  data-scroll
                  data-scroll-class="is-inview"

                  style={{ animationDelay: "0.2s" }}
                >
                  Here's Why Ignite Is The UAE's First Choice
                </h3>


                <h4
                  // Apply local module class
                  className={`fade-in-section ${styles.uspSubtitle}`}
                  data-scroll
                  data-scroll-class="is-inview"

                  style={{ animationDelay: "0.3s" }}
                >
                  Real Support, Real Progress
                </h4>

                {/* 1. DESKTOP TEXT */}
                <p
                  // Apply local module class and global Bootstrap classes
                  className={`fade-in-section ${styles.uspDesc} d-none d-lg-block`}
                  data-scroll
                  data-scroll-class="is-inview"

                  style={{ animationDelay: "0.4s" }}
                >
                  We go beyond just tutoring and focus on personalised learning, proven methods, and expert guidance that drive real results. Discover what makes us the trusted choice for students and parents alike.
                </p>

                {/* 2. MOBILE TEXT */}
                <p
                  // Apply local module class and global Bootstrap classes
                  className={`fade-in-section ${styles.uspDesc} d-lg-none`}
                  data-scroll
                  data-scroll-class="is-inview"

                  style={{ animationDelay: "0.4s" }}
                >
                  We go beyond just tutoring with personalised learning, proven methods, and expert support that deliver real results.
                </p>

                <a
                  href="/about-us/"
                  // Apply local module class and global classes
                  className={`${styles.uspBtn} fade-in-section buttonSkyBlue`}
                  data-scroll
                  data-scroll-class="is-inview"

                  style={{ animationDelay: "0.5s" }}
                >
                  KNOW MORE{" "}
                  <Image
                    src="/images/right-arrow-blue.webp"
                    width={40}
                    height={40}
                    quality={100}
                    alt="right arrow"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              {/* Apply local module class */}
              <div className={styles.uspRight}>
                {uspDataRows.map((row, index) => (
                  // Apply local module class
                  <div key={index} className={styles.uspSlide}>
                    {row.map((usp, i) => (
                      <div
                        key={i}
                        // Apply local module class
                        // className={`fade-in-section ${styles.uspItem}`}
                        className={`fade-in-section ${styles.uspItem}`}
                        data-scroll
                        data-scroll-class="is-inview"

                        style={{ animationDelay: `${0.6 + i * 0.15}s` }}
                      >
                        {/* Apply local module classes */}
                        <div className={styles.uspNumber}>{usp.number}</div>
                        <div className={styles.uspIconCircle}>
                          <Image
                            src={usp.icon}
                            alt={usp.title}
                            className={styles.uspIcon}
                            width={64}
                            height={64}
                          />
                        </div>
                        <div className={styles.uspContent}>
                          <h3 className={styles.uspItemTitle}>{usp.title}</h3>
                          <div className={styles.uspItemDesc}>{usp.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}