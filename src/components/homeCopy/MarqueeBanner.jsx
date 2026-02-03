import React from "react";

const items = [
  "WHERE GRADE IMPROVEMENT BEGINS",
  "WHERE GRADE IMPROVEMENT BEGINS",
  "WHERE GRADE IMPROVEMENT BEGINS",
  "WHERE GRADE IMPROVEMENT BEGINS",
  "WHERE GRADE IMPROVEMENT BEGINS",
];


import styles from "@/styles/home-copy/MarqueeBanner.module.css";

const MarqueeBanner = () => {
  /* Refactored to use CSS media queries */
  return (
    <section>
      <div
        data-scroll
        data-scroll-class="is-inview"

        className={`fade-in-section ${styles.bannerScroll1}`}
        style={{ animationDelay: "0.4s" }}
      >
        <div className={styles.scrollContent1}>
          {/* Repeat twice for infinite effect */}
          {[...Array(2)].map((_, i) =>
            items.map((text, idx) => (
              <div className={styles.scrollItem1} key={`${i}-${idx}`}>
                <span className={styles.dot}>●</span> {text}
              </div>
            ))
          )}
        </div>
      </div>


    </section>
  );
};

export default MarqueeBanner;
