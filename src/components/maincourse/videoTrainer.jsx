import { useEffect, useState } from "react";

const TrainersMessage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [trainers, setTrainers] = useState([
    {
      id: 1,
      name: "PRAKSHI\nSHARMA",
      experience: "5+ YEARS",
      image: "/assets/person.webp",
      alt: "Woman trainer with arms crossed in office background",
      videoUrl: "#", // Add actual video URL here
    },
    {
      id: 2,
      name: "NIKHIL\nPARMAR",
      experience: "5+ YEARS",
      image: "/assets/woman.webp",
      alt: "Man trainer wearing glasses in classroom background",
      videoUrl: "#", // Add actual video URL here
    },
    {
      id: 3,
      name: "PRAKSHI\nSHARMA",
      experience: "5+ YEARS",
      image: "/assets/person.webp",
      alt: "Woman trainer with arms crossed in office background",
      videoUrl: "#", // Add actual video URL here
    },
    {
      id: 4,
      name: "NIKHIL\nPARMAR",
      experience: "5+ YEARS",
      image: "/assets/woman.webp",
      alt: "Man trainer wearing glasses in classroom background",
      videoUrl: "#", // Add actual video URL here
    },
  ]);

  // Function to handle playing videos
  const playVideo = (videoUrl, trainerName) => {
    // alert(`Playing video for ${trainerName.replace('\n', ' ')} (URL: ${videoUrl})`);
    // In a real implementation, you would open a modal or play the video
  };

  return (
    <div className="container">
      <div
        className="text-center mb-5 fade-in-section"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat
        style={{ animationDelay: "0.15s" }}
      >
        {/* Gradient subtitle with lines */}
        <div
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat="true"
          className="fade-in-section"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="SubHeading testSubheading">TRAINERS MESSAGE</div>
        </div>

        {/* Main title */}
        <h2
          className="fw-bold mb-0 fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
          style={{
            animationDelay: "0.3s",
            fontSize: isMobile ? "21px" : "2.5rem",
            lineHeight: "1.1",
            textTransform: "uppercase",
            marginTop: "3vh",
            maxWidth: isMobile ? "100%" : "57%",
            marginInline: "auto",
          }}
        >
          <span
            style={{
              background: "linear-gradient(135deg , #161664, #3F88BA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            What Our Trainers Want
          </span>{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #00A491, #003E37)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Every Student
          </span>{" "}
          <span
            style={{
              background: "linear-gradient(135deg , #161664, #3F88BA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            To Know
          </span>
        </h2>
      </div>

      <div className="trainers-container">
        {trainers.map((trainer, index) => (
          <div key={trainer.id} className="trainer-card">
            <div
              className={`image-wrapper ${index % 2 === 0 ? "tall" : "short"}`}
            >
              <img src={trainer.image} alt={trainer.alt} />
              <button
                aria-label="Play video"
                className="play-button"
                onClick={() => playVideo(trainer.videoUrl, trainer.name)}
              >
                <i className="fas fa-play"></i>
              </button>
              <div className="trainer-name">{trainer.name}</div>
            </div>
            <div className={`experience ${index % 2 === 0 ? "green" : "blue"}`}>
              <span
                className={
                  index % 2 === 0 ? "text-green-gradient" : "text-blue-gradient"
                }
              >
                {trainer.experience}
              </span>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        // @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&display=swap");

        .container {
          font-family: "Montserrat", sans-serif;
          margin: 0 auto;
          padding: 40px 0.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          max-width: 90vw;
        }

        h2 {
          color: #1b2e5b;
          font-weight: 700;
          font-size: 1.125rem;
          margin-bottom: 1.5rem;
          user-select: none;
          text-align: center;
        }

        h1 {
          color: #1b2e5b;
          font-weight: 700;
          font-size: 2.25rem;
          text-align: center;
          max-width: 48rem;
          margin-bottom: 4rem;
          line-height: 1.2;
          user-select: none;
        }

        h1 .highlight {
          color: #0b6b5b;
        }

        .trainers-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr); /* always 4 in desktop */
          gap: 3rem 2rem;
          max-width: 1200px;
          width: 100%;
        }

        .trainer-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%; /* make it auto-fit inside grid */
        }
        .image-wrapper {
          position: relative;
          width: 280px;
          border-radius: 1.5rem;
          overflow: hidden;
          user-select: none;
          background: transparent;
        }

        .image-wrapper.tall {
          height: 350px;
        }

        .image-wrapper.short {
          height: 280px;
        }

        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 1.5rem;
          display: block;
        }

        .play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: 2px dotted white;
          border-radius: 50%;
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
          font-size: 20px;
        }

        .play-button:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translate(-50%, -50%) scale(1.1);
        }

        .trainer-name {
          position: absolute;
          bottom: 20px;
          left: 86px;
          color: white;
          font-weight: 700;
          font-size: 1.5rem;
          line-height: 1.2;
          text-align: left;
          user-select: none;
          pointer-events: none;
          white-space: pre-line;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          z-index: 5;
        }

        .experience {
          margin-top: 1rem;
          padding: 0.75rem 2rem;
          border-radius: 25px;
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: 0.1em;
          user-select: none;
          white-space: nowrap;
        }

        /* Green gradient text */
        .text-green-gradient {
          background: linear-gradient(90deg, #00a491 0%, #003e37 127.82%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent; /* Safari/Chrome */
          color: transparent; /* fallback */
        }

        .text-blue-gradient {
          background: linear-gradient(
            285.71deg,
            #3f88ba -4.32%,
            #161664 106.53%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }

        .experience.green {
          background: url("/assets/15bg.webp") no-repeat center center;
          background-size: cover;
        }

        .experience.blue {
          background: url("/assets/25bg.webp") no-repeat center center;
          background-size: cover;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .container {
            padding: 20px 0.25rem;
          }

          h1 {
            font-size: 1.75rem;
            margin-bottom: 2rem;
          }

          .trainers-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem 1.5rem; /* Same gap as desktop proportionally */
            max-width: 100%;
            padding: 0 0.25rem;
          }

          .trainer-card {
            width: 100%;
          }

          .image-wrapper {
            width: 100%;
            max-width: 220px; /* Increased from 160px */
            margin: 0 auto;
          }

          .image-wrapper.tall {
            height: 275px; /* Proportional to new width (220 * 1.25) */
          }

          .image-wrapper.short {
            height: 225px; /* Same as width for square-ish aspect */
          }

          .trainer-name {
            font-size: 1rem; /* Increased from 0.75rem */
            bottom: 12px; /* Adjusted positioning */
            left: 12px;
          }

          .experience {
            font-size: 0.8rem; /* Increased from 0.625rem */
            padding: 0.6rem 1.2rem; /* Increased padding */
            margin-top: 0.75rem;
          }

          .play-button {
            width: 55px; /* Increased from 40px */
            height: 55px;
            font-size: 18px; /* Increased from 14px */
          }
        }

        @media (max-width: 480px) {
          h2 {
            font-size: 1rem;
          }

          h1 {
            font-size: 1.5rem;
          }

          .trainers-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem 1.5rem; /* Keep same gap as tablet */
            max-width: 100%;
          }

          .image-wrapper {
            max-width: 180px; /* Increased from 140px */
          }

          .image-wrapper.tall {
            height: 225px; /* Proportional to new width (180 * 1.25) */
          }

          .image-wrapper.short {
            height: 225px; /* Same as width */
          }

          .trainer-name {
            font-size: 0.85rem; /* Increased from 0.65rem */
            bottom: 10px;
            left: 55px;
          }

          .play-button {
            width: 50px; /* Increased from 35px */
            height: 50px;
            font-size: 16px; /* Increased from 12px */
          }

          .experience {
            font-size: 0.7rem; /* Increased from 0.55rem */
            padding: 0.5rem 1rem; /* Increased padding */
          }
        }
      `}</style>
    </div>
  );
};

export default TrainersMessage;