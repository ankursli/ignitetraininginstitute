import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/contact/ContactHeadline.module.css"; // adjust path as needed
import ContactBanner from "@/components/contact/Banner";

// Custom hook: returns [ref, inView]
function useInViewAnimation(threshold = 0.3) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            // optionally unobserve to avoid repeated triggers
            if (entry.target) observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);
  return [ref, inView];
}

const ContactHeadline = () => {
  const [greenRef, greenInView] = useInViewAnimation(0.3);
  const [blueRef, blueInView] = useInViewAnimation(0.3);

  return (
    <div className={styles.contactAnimatedHeadline}>
      <div
        ref={greenRef}
        className={`${styles.headlineBox} ${styles.headlineBoxGreen} ${greenInView ? styles.visible : ""
          }`}
        style={{ transitionDelay: "0s" }}
      >
        <div className={styles.headlineTop}>WANNA EXCEL</div>
        <div className={styles.headlineBottom}>ACADEMICALLY?</div>
      </div>
      <div
        ref={blueRef}
        className={`${styles.headlineBox} ${styles.headlineBoxBlue} ${blueInView ? styles.visible : ""
          }`}
        style={{ transitionDelay: "0.25s" }}
      >
        <div className={styles.headlineTop2}>LOOKING FOR BEST TUTORS</div>
        <div className={styles.headlineBottom2}>TO LEARN?</div>
      </div>
    </div>
  );
};


// 1. Accept the headerHeight prop
const Contact = ({ headerHeight }) => {
  // --- START OF REMOVAL/MODIFICATION ---

  // REMOVE: These refs are no longer needed as the scroll container is in _app.js
  // const scrollRef = useRef(null);
  // const scrollInstanceRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 991;
      setIsMobile(mobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // REMOVE: The entire useEffect block that initializes Locomotive Scroll locally.
  /*
  useEffect(() => {
    let scroll;

    const initScroll = async () => {
      if (isMobile) return; // skip on mobile

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
      if (scrollInstanceRef.current) {
        scrollInstanceRef.current.destroy();
        scrollInstanceRef.current = null;
      }
    };
  }, [isMobile]);
  */
  // --- END OF REMOVAL/MODIFICATION ---


  return (
    // 2. The outer div is now the main component wrapper. 
    //    It no longer needs scrollRef or data-scroll-container.
    //    It *does* need the paddingTop for the header fix.
    <div style={{ paddingTop: `${headerHeight}px` }}>

      {/* Banner Section */}
      <section data-scroll-section>
        <ContactBanner />
      </section>

      {/* Contact Form Section */}
      <section data-scroll-section>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: isMobile ? 16 : 32 }}>
          {/* Animated Headline Section */}
          <ContactHeadline />

          <form
            style={{
              background: "#fff",
              borderRadius: 24,
              padding: isMobile ? 16 : 32,
              boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
              <div style={{ flex: 1, minWidth: 220 }}>
                <label style={{ fontWeight: 700, color: "#1A2750", fontSize: 14 }}>NAME</label>
                <input
                  type="text"
                  style={{
                    width: "100%",
                    border: "none",
                    borderBottom: "2px solid #E6E6E6",
                    padding: "8px 0",
                    fontSize: 16,
                    outline: "none",
                    marginTop: 4,
                  }}
                />
              </div>
              <div style={{ flex: 1, minWidth: 220 }}>
                <label style={{ fontWeight: 700, color: "#1A2750", fontSize: 14 }}>EMAIL</label>
                <input
                  type="email"
                  style={{
                    width: "100%",
                    border: "none",
                    borderBottom: "2px solid #E6E6E6",
                    padding: "8px 0",
                    fontSize: 16,
                    outline: "none",
                    marginTop: 4,
                  }}
                />
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
              <div style={{ flex: 1, minWidth: 220 }}>
                <label style={{ fontWeight: 700, color: "#1A2750", fontSize: 14 }}>CONTACT</label>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
                  <img
                    src="/images/contact/flag.webp"
                    alt="UAE Flag"
                    style={{
                      width: 34, height: 25, borderRadius: 3, border: "1px solid #eee", resize: 'cover'

                    }}
                  />
                  <span
                    style={{
                      background: "#F5F5F5",
                      borderRadius: 6,
                      padding: "4px 10px",
                      fontWeight: 600,
                      fontSize: 15,
                      color: "#1AC9A6",
                    }}
                  >
                    +971
                  </span>
                  <input
                    type="tel"
                    style={{
                      flex: 1,
                      border: "none",
                      borderBottom: "2px solid #E6E6E6",
                      padding: "8px 0",
                      fontSize: 16,
                      outline: "none",
                      marginLeft: 8,
                    }}
                  />
                </div>
              </div>
              <div style={{ flex: 1, minWidth: 220 }}>
                <label style={{ fontWeight: 700, color: "#1A2750", fontSize: 14 }}>GRADE</label>
                <input
                  type="text"
                  style={{
                    width: "100%",
                    border: "none",
                    borderBottom: "2px solid #E6E6E6",
                    padding: "8px 0",
                    fontSize: 16,
                    outline: "none",
                    marginTop: 4,
                  }}
                />
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
              <div style={{ flex: 1, minWidth: 220 }}>
                <label style={{ fontWeight: 700, color: "#1A2750", fontSize: 14 }}>SCHOOL</label>
                <input
                  type="text"
                  style={{
                    width: "100%",
                    border: "none",
                    borderBottom: "2px solid #E6E6E6",
                    padding: "8px 0",
                    fontSize: 16,
                    outline: "none",
                    marginTop: 4,
                  }}
                />
              </div>
            </div>
            <div>
              <label style={{ fontWeight: 700, color: "#1A2750", fontSize: 14 }}>
                MESSAGE (OPTIONAL)
              </label>
              <textarea
                style={{
                  width: "100%",
                  border: "1.5px solid #E6E6E6",
                  borderRadius: 12,
                  padding: 12,
                  fontSize: 16,
                  outline: "none",
                  marginTop: 4,
                  minHeight: 70,
                  resize: "vertical",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={{ fontWeight: 700, color: "#1A2750", fontSize: 15 }}>
                  TESTS / COURSES
                </label>
                <select
                  style={{
                    width: "100%",
                    border: "none",
                    borderBottom: "2px solid #E6E6E6",
                    padding: "10px 0",
                    fontSize: 16,
                    outline: "none",
                    marginTop: 4,
                    background: "transparent",
                  }}
                >
                  <option value="">Select</option>
                  <option value="SAT">SAT</option>
                  <option value="ACT">ACT</option>
                  <option value="IBDP">IBDP</option>
                  <option value="IGCSE">IGCSE</option>
                </select>
              </div>
              <div>
                <label style={{ fontWeight: 700, color: "#1A2750", fontSize: 15 }}>
                  COURSES
                </label>
                <select
                  style={{
                    width: "100%",
                    border: "none",
                    borderBottom: "2px solid #E6E6E6",
                    padding: "10px 0",
                    fontSize: 16,
                    outline: "none",
                    marginTop: 4,
                    background: "transparent",
                  }}
                >
                  <option value="">Select</option>
                  <option value="Math">Math</option>
                  <option value="Physics">Physics</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Biology">Biology</option>
                </select>
              </div>
              <div>
                <label style={{ fontWeight: 700, color: "#1A2750", fontSize: 15 }}>
                  YOU HEARD ABOUT US THROUGH?
                </label>
                <select
                  style={{
                    width: "100%",
                    border: "none",
                    borderBottom: "2px solid #E6E6E6",
                    padding: "10px 0",
                    fontSize: 16,
                    outline: "none",
                    marginTop: 4,
                    background: "transparent",
                  }}
                >
                  <option value="">Select</option>
                  <option value="Google">Google</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Friend">Friend</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              style={{
                margin: "32px auto 0 auto",
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: "linear-gradient(90deg, #3F88BA 0%, #161664 100%)",
                color: "#fff",
                fontWeight: 700,
                fontSize: 20,
                border: "none",
                borderRadius: 32,
                padding: "12px 36px",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                letterSpacing: 2,
              }}
            >
              SUBMIT
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.2)",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 9h10m0 0l-4-4m4 4l-4 4"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </form>

          {/* Contact Info Section */}

        </div>
      </section>

      {/* Contact Info Cards Section */}
      <section data-scroll-section>
        <div
          style={{
            display: "flex",
            gap: 32,
            marginTop: 64,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Email Card */}
          <div
            style={{
              background: "linear-gradient(0deg, #EDFFF4 0%, #baecd2ff 100%)",
              borderRadius: 48,
              padding: "48px 32px 36px 32px",
              minWidth: 340,
              maxWidth: 550,
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
            }}
          >
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #009688 0%, #1AC9A6 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 24,
              }}
            >
              <svg width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="38" height="38" rx="19" fill="none" />
                <path d="M10 14.5v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2H12a2 2 0 0 0-2 2Z" stroke="#fff" strokeWidth="2.2" strokeLinejoin="round" />
                <path d="m10 15 9 7 9-7" stroke="#fff" strokeWidth="2.2" strokeLinejoin="round" />
              </svg>
            </div>
            <div style={{ fontWeight: 700, fontSize: 18, color: "#232B4D", letterSpacing: 1, marginBottom: 8, fontFamily: 'Montserrat, sans-serif', textAlign: 'center' }}>EMAIL US</div>
            <div style={{ fontWeight: 500, fontSize: 18, color: "#7A8CA3", marginBottom: 18, textAlign: 'center', lineHeight: 1.4 }}>
              Email us now for expert tutoring<br />and tailored growth solutions.
            </div>
            <a
              href="mailto:hello@ignitetraininginstitute.com"
              style={{
                fontWeight: 700,
                fontSize: 18,
                color: "#009688",
                textDecoration: "none",
                fontFamily: 'Montserrat, sans-serif',
                marginTop: 8,
                textAlign: 'center',
                wordBreak: 'break-all',
                display: 'block',
              }}
            >
              hello@ignitetraininginstitute.com
            </a>
          </div>
          {/* Call Card */}
          <div
            style={{
              background: "linear-gradient(0deg, #EDFFF4 0%, #baecd2ff 100%)",
              borderRadius: 48,
              padding: "48px 32px 36px 32px",
              minWidth: 340,
              maxWidth: 550,
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
            }}
          >
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #009688 0%, #1AC9A6 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 24,
              }}
            >
              <svg width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="38" height="38" rx="19" fill="none" />
                <path d="M27.5 23.5v2a2 2 0 0 1-2 2c-7.18 0-13-5.82-13-13a2 2 0 0 1 2-2h2a2 2 0 0 1 2 1.72c.13.81.37 1.6.7 2.34a2 2 0 0 1-.45 2.18l-.63.63a10.97 10.97 0 0 0 4.95 4.95l.63-.63a2 2 0 0 1 2.18-.45c.74.33 1.53.57 2.34.7A2 2 0 0 1 27.5 23.5Z" stroke="#fff" strokeWidth="2.2" strokeLinejoin="round" />
              </svg>
            </div>
            <div style={{ fontWeight: 700, fontSize: 18, color: "#232B4D", letterSpacing: 1, marginBottom: 8, fontFamily: 'Montserrat, sans-serif', textAlign: 'center' }}>CALL US</div>
            <div style={{ fontWeight: 500, fontSize: 18, color: "#7A8CA3", marginBottom: 18, textAlign: 'center', lineHeight: 1.4 }}>
              Call us today for personalised tutoring<br />and transformative growth.
            </div>
            <a
              href="tel:+9718080584756"
              style={{
                fontWeight: 700,
                fontSize: 18,
                color: "#009688",
                textDecoration: "none",
                fontFamily: 'Montserrat, sans-serif',
                marginTop: 8,
                textAlign: 'center',
                wordBreak: 'break-all',
                display: 'block',
              }}
            >
              +971 80805 84756
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section data-scroll-section>
        <div style={{ padding: 60, borderRadius: 30 }}>
          <img src={"/images/contactus-map.webp"} height={600} width={"100%"} />
        </div>
      </section>
    </div>
  );
};

export default Contact;