"use client";

import Image from "next/image";

export default function TeamBanner() {
  return (
    <section
      className="team-banner team fade-in-section"
      data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat
      style={{
        animationDelay: "0.3s",
      }}
    >
      <Image
        src="/images/ourteam-desktop.webp"
        alt="Our Team Desktop"
        fill
        priority
        className="desktop-banner-img"
        style={{ objectFit: 'cover' }}
      />
      <Image
        src="/images/ourteam-mobile.webp"
        alt="Our Team Mobile"
        fill
        priority
        className="mobile-banner-img"
        style={{ objectFit: 'cover' }}
      />
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
          OUR TEAM
        </h1>
        <p className="subHeading">HOME // OUR TEAM</p>
      </div>
    </section>
  );
}
