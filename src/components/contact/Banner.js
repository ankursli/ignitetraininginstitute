"use client";

import styles from "@/styles/contact/contact.module.css";

export default function ContactBanner() {
  return (
    <section
      className={`${styles.careersBanner} ${styles.fadeInSection}`}
      data-scroll
      data-scroll-class={styles.isInview}
      data-scroll-repeat
      style={{
        animationDelay: "0.3s",
      }}
    >
      <div className={styles.darkOverlay}></div>

      <div className={styles.overlay}>
        <h1
          className={styles.heading}
          style={{
            background: "linear-gradient(90deg, #EDFFF4, #A6EAC7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          CONTACT US
        </h1>
        <p className={styles.subHeading}>HOME // CONTACT</p>
      </div>
    </section>
  );
}