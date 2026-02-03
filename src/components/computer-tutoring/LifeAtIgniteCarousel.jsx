"use client";
import { useEffect, useState } from "react";

export default function LifeAtIgniteCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const images = [
    {
      url: "/assets/igncra.webp",
      alt: "Modern library with bookshelves and seating area",
    },
    {
      url: "/assets/igncra.webp",
      alt: "Modern office workspace with computers",
    },
    {
      url: "/assets/igncra.webp",
      alt: "Collaborative meeting room",
    },
    {
      url: "/assets/igncra.webp",
      alt: "Creative workspace with plants",
    },
  ];
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const getPrevIndex = () =>
    currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
  const getNextIndex = () =>
    currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;

  return (
    <div className=" overflow-hidden fade-in-section" data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat
      style={{ animationDelay: "0.1s", marginBlock: isMobile ? "40px" : "96px", paddingBottom: isMobile ? "40px" : "0" }}>
      <div className="container fade-in-section"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat
        style={{ maxWidth: '1140px', animationDelay: "0.15s" }}>
        {/* Updated Header Section */}
        <div className="alumniSubSection" style={{ padding: '30px 0' }}>
          <h3
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section SubHeading alumniSubHeading"
            style={{ animationDelay: "0.2s" }}
          >
            LIFE AT IGNITE
          </h3>
          <h2
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section alumniTitle"
            style={{ margin: "24px 0 0 0", animationDelay: "0.3s" }}
          >
            Inside The Ignite's<br /><span className="alumniHighlight"> Vivid </span>
            Learning Experience </h2>
        </div>

        {/* Carousel */}
        <div className="position-relative d-flex align-items-center justify-content-center mx-auto fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
          style={{ maxWidth: '1200px', animationDelay: "0.4s" }}>
          {/* Left Arrow */}
          <button
            onClick={prevImage}
            className="position-absolute btn d-flex align-items-center justify-content-center fade-in-section arrow-btn"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{
              zIndex: 10,
              left: '-4rem',
              width: '3rem',
              height: '3rem',
              transition: 'background-color 0.3s ease',
              animationDelay: "0.45s"
            }}
          >
            <img src="/assets/lar.webp" alt="computer science tutor in dubai" width={isMobile ? 32 : 80} height={isMobile ? 32 : 80} />
          </button>

          {/* Stacked Images */}
          <div className="position-relative d-flex justify-content-center align-items-center carousel-images">
            <img
              src={images[getPrevIndex()].url}
              alt={images[getPrevIndex()].alt}
              className="position-absolute rounded shadow-sm fade-in-section prev-img"
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat
            />
            <img
              src={images[getNextIndex()].url}
              alt={images[getNextIndex()].alt}
              className="position-absolute rounded shadow-sm fade-in-section next-img"
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat
            />
            <img
              src={images[currentImageIndex].url}
              alt={images[currentImageIndex].alt}
              className="position-relative rounded shadow-lg fade-in-section main-img"
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat
            />
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextImage}
            className="position-absolute btn d-flex align-items-center justify-content-center fade-in-section arrow-btn"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{
              zIndex: 10,
              right: '-4rem',
              width: '3rem',
              height: '3rem',
              transition: 'background-color 0.3s ease',
              animationDelay: "0.65s"
            }}
          >
            <img src="/assets/rar.webp" alt="computer science tutor in dubai" width={isMobile ? 32 : 80} height={isMobile ? 32 : 80} />
          </button>
        </div>

        {/* Caption */}
        <div className="mt-4 text-center fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
          style={{ animationDelay: "0.7s" }}>
          <p className="mx-auto" style={{ maxWidth: '40rem', fontSize: isMobile ? "16px" : "23px" }}>
            Experience strong academic support & enriching connections that shape student life & growth at Ignite.
          </p>
        </div>
      </div>
      <style jsx>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        .fade-in-section.is-inview {
          opacity: 1;
          transform: translateY(0);
        }

        /* Alumni Section Styles */
        .alumniSubSection {
          text-align: center;
          position: relative;
          margin-bottom:3rem;
        }
        .alumniSubSection:before {
          content: "";
          width: 130%;
          height: 100%;
          position: absolute;
          top: 0;
          right: -50%;
          border: 3px solid black;
          border-radius: 30px;
          background-color: var(--white-color);
          background: linear-gradient(white, white) padding-box,
            linear-gradient(to right, var(--border-color), #e7f6ff) border-box;
          border: 2px solid transparent;
          z-index: -1;
        }
        .alumniSubHeading {
          font-size: 28px;
          color: #19245E;
          text-transform: uppercase;
        }
        .alumniTitle {
          font-size: 1.8rem;
          font-weight: 700;
          max-width: 50%;
          margin: 30px auto 0 !important;
          line-height: 1.1;
          text-transform: uppercase;
          color: #19245E;
        }
        .alumniHighlight {
          background: linear-gradient(to left, #00A491, #003E37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Desktop defaults - Increased sizes for 1920px resolution */
        .carousel-images {
          height: 550px;
          width: 1000px;
        }
        .prev-img, .next-img {
          width: 650px;
          height: 450px;
          object-fit: cover;
          opacity: 20%;
          filter: brightness(1.2) contrast(0.6) saturate(0.5);
          position: relative;
          transition: all 0.5s ease;
          border-radius: 1rem;
          border-radius: 30px !important;
          top: 50px;
          opacity: 20% !important;
        }
        .prev-img::after, .next-img::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 30px;
          pointer-events: none;
        }
        .prev-img { left: 40px; }
        .next-img { right: 40px; }
        .main-img {
          width: 820px;
          height: 520px;
          border-radius: 30px !important;
          object-fit: cover;
          border-radius: 1rem;
          transition: all 0.5s ease;
        }

        /* Medium screens (1200px to 1600px) */
        @media (max-width: 1600px) and (min-width: 1200px) {
          .carousel-images {
            height: 480px;
            width: 950px;
          }
          .prev-img, .next-img {
            width: 550px;
            height: 400px;
            top: 40px;
          }
          .prev-img { left: 30px; }
          .next-img { right: 30px; }
          .main-img {
            width: 650px;
            height: 480px;
          }
        }

        /* Mobile fixes */
         @media (max-width: 1199px) {
          .alumniSubHeading {
            font-size: 1.5rem;
          }
          .alumniTitle {
            font-size: 1.8rem;
          }
        }
        @media (max-width: 768px) {
          .carousel-images {
            width: 100%;
            height: 400px;
          }
          .prev-img, .next-img {
            display: block;
            width: 300px;
            height: 260px;
            top: 80px;
          }
          .prev-img { left: 10vw; }
          .next-img { right: 10vw; }
          .main-img {
            width: 320px;
            height: 320px;
          }
          .arrow-btn {
            top: 50%;
            transform: translateY(-50%);
            width: 2.5rem !important;
            height: 2.5rem !important;
          }
          .arrow-btn:first-child {
            left: 0.5rem !important;
            right: auto !important;
          }
          .arrow-btn:last-child {
            right: 0.5rem !important;
            left: auto !important;
          }
          .alumniSubSection:before {
            right: -30%;
            border-radius: 20px;
          }
          .alumniTitle {
            max-width: 100%;
          }
        }
        @media (max-width: 575px) {
          .alumniSubHeading {
            font-size: 18px;
          }
          .alumniTitle {
            font-size: 16px;
          }
          .carousel-images {
            height: 350px;
          }
          .prev-img, .next-img {
            width: 240px;
            height: 220px;
          }
          .main-img {
            width: 280px;
            height: 280px;
          }
        
        }

        /* Samsung Galaxy S8+ specific */
        @media (max-width: 414px) and (max-height: 846px) {
          .prev-img, .next-img {
            width: 300px;
            height: 200px;
          }
          .main-img {
            width: 280px;
            height: 300px;
          }
        }
         @media (min-width: 1536px) and (max-width: 1919px) {
  /* Reduced carousel sizes */
  .carousel-images {
    height: 450px;
    width: 800px;
  }
  .prev-img, .next-img {
    width: 530px;
    height: 370px;
    top: 40px;
  }
  .prev-img { left: 25px; }
  .next-img { right: 25px; }
  .main-img {
    width: 670px;
    height: 430px;
  }
  
  /* Reduced text sizes */
  .alumniSubHeading {
    font-size: 25px;
  }
  .alumniTitle {
    font-size: 1.7rem;
    max-width: 60%;
  }
  .mt-4 p {
    font-size: 18px !important;
  }
  
  /* Reduce container padding */
  .alumniSubSection {
    padding: 20px 0 !important;
    margin-bottom: 2rem !important;
  }
  
.arrow-btn:first-child {
    left:2rem !important;
    right: auto !important;
    width: 2.5rem !important;
    height: 2.5rem !important;
  }
  .arrow-btn:last-child {
    right: 3rem !important;
    left: auto !important;
    width: 2.5rem !important;
    height: 2.5rem !important;
  }
  
  .arrow-btn img {
    width: 60px !important;
    height: 60px !important;
  }
} 
      `}</style>
    </div>
  );
}