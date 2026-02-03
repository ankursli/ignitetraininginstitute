"use client";

export default function ContactBanner() {
  return (
    <section
      className="contact-banner fade-in-section"
      data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat
      style={{
        animationDelay: "0.3s",
      }}
    >
      {/* Dark overlay */}
      <div className="dark-overlay"></div>

      <div className="overlay">
        <h1
          className="heading"
          style={{
            background: "linear-gradient(90deg, #EDFFF4, #A6EAC7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          CONTACT US
        </h1>
        <p className="subHeading">HOME // CONTACT</p>
      </div>


    </section>
  );
}
