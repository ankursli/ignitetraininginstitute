import React, { useState } from 'react';
import styles from '../styles/Footer.module.css';
import Image from '@/components/CustomImageWrapper';

const Footer = () => {
  // --- START: Newsletter Integration ---
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          formType: 'NEWSLETTER',
          pageinfo: `URL: ${window.location.href} | Newsletter Subscription`
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Direct redirection without showing success message
        if (result.redirectUrl) {
          window.location.href = result.redirectUrl;
        }
      } else {
        setLoading(false);
        setStatus('error');
      }
    } catch (error) {
      console.error("Newsletter error:", error);
      setLoading(false);
      setStatus('error');
    }
  };
  // --- END: Newsletter Integration ---

  return (
    <footer
      data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat="true"
      className={`fade-in-section sp-container ${styles.footerWrap}`}
      style={{ animationDelay: "0.2s" }}>
      <div
        className={`fade-in-section ${styles.footerTop}`}
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat="true"
        style={{ animationDelay: "0.1s" }}
      >
        <h3 className={styles.footerTitle}>
          REVOLUTIONIZING THE WAY STUDENTS LEARN
        </h3>
        <div className={styles.footerMainRow}>
          <div className={styles.footerTop}>
            <Image
              src="/images/footerImage.webp"
              data-scroll
              data-scroll-class="is-clipped"
              data-scroll-repeat="true"
              data-scroll-offset="-10%"
              alt="Footer"
              className={`${styles.footerMainImg}`}
              width={452}
              height={250}
            />
          </div>
          <div
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className={`fade-in-section ${styles.footerTop}`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className={styles.footerDesc}>
              Stay updated with the latest study tips, exam strategies, & academic insights. Join our mailing list & fuel your journey to success.
            </div>
            <div className={styles.socialmediafooter}>
              <a href="https://www.facebook.com/ignitetraininginstitute" target="_blank">
                <img src="/images/fb-footer.webp" alt="Facebook" width={36} height={36} />
              </a>
              <a href="https://www.instagram.com/ignitetraininginstitute/?hl=en" target="_blank">
                <img src="/images/insta-footer.webp" alt="Instagram" width={36} height={36} />
              </a>
              <a href="https://www.linkedin.com/company/ignite-training-institute" target="_blank">
                <img src="/images/linkedin-footer.webp" alt="LinkedIn" width={36} height={36} />
              </a>
            </div>

            <div className={styles.footerNewsletterWrap}>
              <div className={styles.footerNewsletterLabel}>SUBSCRIBE TO OUR NEWSLETTER</div>
              <form className={styles.footerNewsletterForm} onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder={loading ? "Subscribing..." : "Email"}
                  className={styles.footerNewsletterInput}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button className={styles.footerNewsletterBtn} type="submit" disabled={loading}>
                  <img src="/images/right-arrow-blue.webp" alt="Footer Arrow" width={28} height={28} />
                </button>
              </form>
              {status === 'error' && <p style={{ color: '#ff6b6b', fontSize: '0.8rem', marginTop: '5px' }}>Something went wrong. Please try again.</p>}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerLinksRow}>
        <div
          className={`fade-in-section ${styles.footerTop}`}
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat="true"
          style={{ animationDelay: "0.4s" }}
        >
          <div className={styles.footerLinksCol}>
            <div className={styles.footerLinksTitle}>COURSES</div>
            <ul>
              <li><a href="/ib-curriculum-tutors-in-dubai">IB Tutors</a></li>
              <ul>
                <li><a href="/courses/ibdp-tutors-in-dubai">IBDP Tutors In Dubai</a></li>
                <li><a href="/courses/myp-tutors-in-dubai">MYP Tutors In Dubai</a></li>
              </ul>
              <li><a href="/british-curriculum-tutors-in-dubai">British Curriculum Tutors</a></li>
              <ul>
                <li><a href="/courses/a-level-tutors-in-dubai">A Levels Tutors In Dubai</a></li>
                <li><a href="/courses/igcse-tutors-in-dubai">IGCSE Tutors In Dubai</a></li>
              </ul>
              <li><a href="/courses/homeschooling-tutors-in-dubai">Private Candidacy</a></li>
              <li><a href="/tutors-in-dubai">Tutors In Dubai</a></li>
              <li><a href="/tutors-in-jlt-dubai">Tutors In JLT Dubai</a></li>
              <li><a href="/private-tutors-in-dubai">Private Tutors In Dubai</a></li>
            </ul>
            <br />
            <div className={styles.footerLinksTitle}>TESTS</div>
            <ul>
              <li><a href="/act-tutors-in-dubai">ACT Prep</a></li>
              <li><a href="/advanced-placements-tutors-in-dubai">Advanced Placements</a></li>
            </ul>
          </div>
        </div>

        <div
          className={`fade-in-section ${styles.footerTop}`}
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat="true"
          style={{ animationDelay: "0.5s" }}
        >
          <div className={styles.footerLinksCol}>
            <div className={styles.footerLinksTitle}>SUBJECTS</div>
            <ul>
              <li><a href="/english-tutor-in-dubai">English Tutors In Dubai</a></li>
              <li><a href="/french-tutor-in-dubai">French Tutors In Dubai</a></li>
              <li><a href="/spanish-tutor-in-dubai">Spanish Tutors In Dubai</a></li>
              <li><a href="/computer-science-tutor-in-dubai">Computer Science Tutors In Dubai</a></li>
              <li><a href="/economics-tutor-in-dubai">Economics Tutors In Dubai</a></li>
              <li><a href="/biology-tutor-in-dubai">Biology Tutors In Dubai</a></li>
              <li><a href="/chemistry-tutor-in-dubai">Chemistry Tutors In Dubai</a></li>
              <li><a href="/physics-tutor-in-dubai">Physics Tutors In Dubai</a></li>
              <li><a href="/maths-tutor-in-dubai">Maths Tutors In Dubai</a></li>
              <li><a href="/business-studies-tutor-in-dubai">Business Studies Tutors In Dubai</a></li>
              <li><a href="/accounting-tutor-in-dubai">Accounting Tutors In Dubai</a></li>
              <li><a href="/psychology-tutor-in-dubai">Psychology Tutors In Dubai</a></li>
            </ul>
          </div>
        </div>

        <div
          className={`fade-in-section ${styles.footerTop}`}
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat="true"
          style={{ animationDelay: "0.6s" }}
        >
          <div className={styles.footerLinksCol}>
            <div className={styles.footerLinksTitle}>ABOUT IGNITE</div>
            <ul>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/our-team">Our Team</a></li>
              <li><a href="/courses">Our Courses</a></li>
              <li><a href="/join-free-demo-class">Free Demo Class</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
              <li><a href="/career">Career</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footerBottomRow}>
        <div
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat="true"
          className="fade-in-section"
          style={{ animationDelay: "0.7s" }}>
          <div className={styles.footerAddressLabel}>ADDRESS</div>
          <div className={styles.footerAddress}>1503, Al Moosa Tower 1, Sheikh Zayed Road, Near Emirates Towers Metro (Sea Side), Dubai</div>
          <div className={styles.footerAddress}>Tiffany Tower - Level 11 Cluster W - Jumeirah Lake Towers - Dubai - United Arab Emirates</div>
        </div>
        <div
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat="true"
          className="fade-in-section"
          style={{ animationDelay: "0.8s" }}>
          <div className={styles.footerContactLabel}>CONTACT</div>
          <div className={styles.footerContact}>
            <span><a href="tel:+971568357374">+971568357374</a></span>
            <br />
            <span><a href="mailto:hello@ignitetraininginstitute.com">hello@ignitetraininginstitute.com</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;