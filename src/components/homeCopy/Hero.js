import Image from "next/image"; // Changed to standard next/image for better LCP control
import styles from "@/styles/home-copy/Hero.module.css";

const Hero = () => {
  return (
    <section className={`${styles.hero} ${styles.homeherosection}`}>
      <div className="container">
        <div className={`row ${styles.heroMain}`}>
          {/* LEFT CONTENT */}
          <div className={`col-12 col-lg-7 col-xl-7 pe-lg-5 ${styles.heroLeft}`}>
            <div className={styles.heroMainHeading}>
              <h2 className={styles.SubHeading}>BEST TUTORS IN UAE</h2>
            </div>

            <div className="d-lg-none">
              <h1 className={`${styles.heroTitleMobile} pt-3 pb-3`}>
                Empower Your Academic Goals With{" "}
                <span className="highlight">Ignite&apos;s</span> Tutors
              </h1>
            </div>

            <div className="d-none d-lg-block">
              <h1 className={styles.heroTitleDesktop}>
                Ignite Your Path To Top{" "}
                <span className="highlight">Academic</span> Performance
              </h1>
            </div>

            <div className={styles.heroParagraph}>
              <h3>Improve Your Grades Today!</h3>
              <b>
                We support students in progressing across IBDP, IB MYP, IGCSE,
                A-Levels, AP, & more with curriculum-specific tutoring in Dubai.
              </b>
              <strong>
                Ignite&apos;s experienced tutors help students thrive with
                personalized support & structured programs.
              </strong>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className={`col-12 col-lg-5 col-xl-5 ${styles.heroRight}`}>
            <div className={styles.videoContainer}>
              {/* ✅ OPTIMIZED LCP IMAGE */}
              <Image
  src="/images/video-cover.webp"
  alt="Ignite Tutoring Hero"
  width={800}
  height={600}
  priority={true}
  fetchPriority="high"
  loading="eager"
  className={styles.heroPoster}
  sizes="(max-width: 768px) 100vw, 50vw" // Helps browser choose the right resolution
  style={{
    objectFit: "cover",
    width: "100%",
    height: "auto",
  }}
/>

              {/* 🎥 VIDEO (DESKTOP ONLY) */}
              <video
  className={styles.heroVideo}
  autoPlay
  muted
  loop
  playsInline
  preload="none" // <--- Critical: Stops video from stealing bandwidth from the image
  poster="/images/video-cover.webp"
>
  <source src="https://ignitetraininginstitute.b-cdn.net/hero-banner-video2.mp4" type="video/mp4" />
</video>
            </div>

            <div className={styles.buttonGroup}>
              <a href="/join-free-demo-class/" className="buttonBlue">
                Get A Free Demo{" "}
                <Image
                  src="/images/right-arrow-skyblue.webp"
                  width={30}
                  height={30}
                  alt="Right arrow"
                />
              </a>

              <a href="/courses/" className="buttonSkyBlue">
                Explore Classes{" "}
                <Image
                  src="/images/right-arrow-blue.webp"
                  width={30}
                  height={30}
                  alt="Right arrow"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
