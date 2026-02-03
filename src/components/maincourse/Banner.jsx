import Head from "next/head";
// import Image from "next/image";
import Image from '@/components/CustomImageWrapper';
import { useEffect, useState } from "react";

export default function TutoringCourses() {
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

  return (
    <div className="container mx-auto" style={{ marginBlock: isMobile ? "2.5rem" : "0" }}>
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          rel="stylesheet"
        />
      </Head>

      <main>
        <section className="heading-section">
          <div
            className="text-center mb-5 fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.15s" }}
          >
            <div
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section"
              style={{ animationDelay: "0.1s" }}
            >
              <h2 className="SubHeading testSubheading">TUTORING COURSES</h2>
            </div>

            <h3
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section testTitle font-sizet"
              style={{ animationDelay: "0.2s" }}
            >
              Courses That Build Confidence & <span className="highlight">
                Academic</span> Excellence
            </h3>
          </div>
        </section>

        <section className="cards-grid fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat>
          {!isMobile ? (
            <>
              <div className="top-row">
                {/* IB Card */}
                <article className="card1 card-gradient">
                  <div className="icon-container">
                    <div className="icon-circle">
                      <Image
                        alt="Open book icon in white on teal circular background"
                        src="/assets/book1.svg"
                        width={60}
                        height={60}
                      />
                    </div>
                  </div>
                  <h3 className="card-title">IBDP</h3>
                  <p className="card-description">
                    Maximize to 7/7 with subject-specific mentors who will help you.
                  </p>
                  <a href="/courses/ibdp-tutors-in-dubai">
                    <button className="card-button">
                      LEARN MORE
                      <Image
                        src="/assets/leftarr.webp"
                        alt="leftarr"
                        width={32}
                        height={32}
                      />
                    </button>
                  </a>
                </article>

                {/* IBDP Card */}
                <article className="card1 card-plain">
                  <div className="icon-container">
                    <div className="icon-circle">
                      <Image
                        alt="Closed book icon in white on teal circular background"
                        src="/assets/book2.svg"
                        width={60}
                        height={60}
                      />
                    </div>
                  </div>
                  <h3 className="card-title">IB MYP</h3>
                  <p className="card-description dark-text">
                    Kick-start your MYP learning with the best-suited tutor-led courses.
                  </p>
                  <a href="/courses/myp-tutors-in-dubai" >
                    <button className="card-button">
                      LEARN MORE
                      <Image
                        src="/assets/leftarr.webp"
                        alt="leftarr"
                        width={32}
                        height={32}
                      />
                    </button>
                  </a>
                </article>

                {/* MYP Card */}
                <article className="card1 card-gradient">
                  <div className="icon-container">
                    <div className="icon-circle">
                      <Image
                        alt="Lightbulb icon in white on teal circular background"
                        src="/assets/bulb.svg"
                        width={60}
                        height={60}
                      />
                    </div>
                  </div>
                  <h3 className="card-title">IGSE</h3>
                  <p className="card-description">
                    Master your IGCSE subjects with focused, expert-led tutoring support.
                  </p>
                  <a href="/courses/igcse-tutors-in-dubai" >
                    <button className="card-button">
                      LEARN MORE
                      <Image
                        src="/assets/leftarr.webp"
                        alt="leftarr"
                        width={32}
                        height={32}
                      />
                    </button>
                  </a>
                </article>
              </div>

              <div className="bottom-row">
                {/* IGCSE Card */}
                <article className="card1 card-plain">
                  <div className="icon-container">
                    <div className="icon-circle">
                      <Image
                        alt="Open book icon with a bookmark in white on teal circular background"
                        src="/assets/book3.svg"
                        width={60}
                        height={60}
                      />
                    </div>
                  </div>
                  <h3 className="card-title">A-LEVELS</h3>
                  <p className="card-description">
                    Achieve clarity & confidence with structured A-Level learning methods
                  </p>
                  <a href="/courses/a-level-tutors-in-dubai">
                    <button className="card-button">
                      LEARN MORE
                      <Image
                        src="/assets/leftarr.webp"
                        alt="leftarr"
                        width={32}
                        height={32}
                      />
                    </button>
                  </a>
                </article>

                {/* A-Levels Card */}
                <article className="card1 card-gradient">
                  <div className="icon-container">
                    <div className="icon-circle">
                      <Image
                        alt="Graduation cap icon in white on teal circular background"
                        src="/assets/hat.svg"
                        width={60}
                        height={60}
                      />
                    </div>
                  </div>
                  <h3 className="card-title">PRIVATE CANDIDACY</h3>
                  <p className="card-description">
                    Academic structure & mentoring for self-paced, private exam journeys
                  </p>
                  <a href="/courses/homeschooling-tutors-in-dubai">
                    <button className="card-button">
                      LEARN MORE
                      <Image
                        src="/assets/leftarr.webp"
                        alt="leftarr"
                        width={32}
                        height={32}
                      />
                    </button>
                  </a>
                </article>
              </div>
            </>
          ) : (
            <>
              <article className="card1 card-gradient">
                <div className="icon-container">
                  <div className="icon-circle">
                    <Image
                      alt="Open book icon in white on teal circular background"
                      src="/assets/book1.svg"
                      width={25}
                      height={25}
                    />
                  </div>
                </div>
                <h3 className="card-title">IBDP</h3>
                <p className="card-description">
                  Maximize to 7/7 with subject-specific mentors who will help you.
                </p>
                <a href="/courses/ibdp-tutors-in-dubai">
                  <button className="card-button">
                    LEARN MORE
                    <Image
                      src="/assets/leftarr.webp"
                      alt="leftarr"
                      width={16}
                      height={16}
                    />
                  </button>
                </a>
              </article>

              {/* IBDP Card */}
              <article className="card1 card-plain">
                <div className="icon-container">
                  <div className="icon-circle">
                    <Image
                      alt="Closed book icon in white on teal circular background"
                      src="/assets/book2.svg"
                      width={25}
                      height={25}
                    />
                  </div>
                </div>
                <h3 className="card-title">IB MYP</h3>
                <p className="card-description dark-text">
                  Kick-start your MYP learning with the best-suited tutor-led courses.
                </p>
                <a href="/courses/myp-tutors-in-dubai" >
                  <button className="card-button">
                    LEARN MORE
                    <Image
                      src="/assets/leftarr.webp"
                      alt="leftarr"
                      width={16}
                      height={16}
                    />
                  </button>
                </a>
              </article>

              {/* MYP Card */}
              <article className="card1 card-plain">
                <div className="icon-container">
                  <div className="icon-circle">
                    <Image
                      alt="Lightbulb icon in white on teal circular background"
                      src="/assets/bulb.svg"
                      width={25}
                      height={25}
                    />
                  </div>
                </div>
                <h3 className="card-title">IGSE</h3>
                <p className="card-description">
                  Master your IGCSE subjects with focused, expert-led tutoring support.
                </p>
                <a href="/courses/igcse-tutors-in-dubai" >
                  <button className="card-button">
                    LEARN MORE
                    <Image
                      src="/assets/leftarr.webp"
                      alt="leftarr"
                      width={16}
                      height={16}
                    />
                  </button>
                </a>

              </article>

              {/* IGCSE Card */}
              <article className="card1 card-gradient">
                <div className="icon-container">
                  <div className="icon-circle">
                    <Image
                      alt="Open book icon with a bookmark in white on teal circular background"
                      src="/assets/book3.svg"
                      width={25}
                      height={25}
                    />
                  </div>
                </div>
                <h3 className="card-title">A-LEVELS</h3>
                <p className="card-description">
                  Achieve clarity & confidence with structured A-Level learning methods
                </p>
                <a href="/courses/a-level-tutors-in-dubai">
                  <button className="card-button">
                    LEARN MORE
                    <Image
                      src="/assets/leftarr.webp"
                      alt="leftarr"
                      width={16}
                      height={16}
                    />
                  </button>
                </a>
              </article>

              {/* A-Levels Card */}
              <article className="card1 card-gradient">
                <div className="icon-container">
                  <div className="icon-circle">
                    <Image
                      alt="Graduation cap icon in white on teal circular background"
                      src="/assets/hat.svg"
                      width={25}
                      height={25}
                    />
                  </div>
                </div>
                <h3 className="card-title">PRIVATE CANDIDACY</h3>
                <p className="card-description">
                  Academic structure & mentoring for self-paced, private exam journeys
                </p>
                <a href="/courses/homeschooling-tutors-in-dubai">
                  <button className="card-button">
                    LEARN MORE
                    <Image
                      src="/assets/leftarr.webp"
                      alt="leftarr"
                      width={16}
                      height={16}
                    />
                  </button>
                </a>
              </article>
            </>
          )}
        </section>
      </main>

      <style jsx>{`
        // @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap");

        .container {
          font-family: "Montserrat", sans-serif;
          background: transparent;
          display: flex;
          justify-content: center;
          padding: 0 0.5rem;
          max-width: 90vw;
        }

        .heading-section {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.5rem;
          margin: 0 auto;
          padding: 0 0.25rem;
        }

        @media (min-width: 768px) {
          .cards-grid {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2.5rem;
            max-width: 1200px;
          }
          
          .cards-grid .top-row {
            display: flex;
            justify-content: center;
            gap: 2.5rem;
            flex-wrap: wrap;
          }
          
          .cards-grid .bottom-row {
            display: flex;
            justify-content: center;
            gap: 2.5rem;
            flex-wrap: wrap;
          }
        }

        .card1 {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border-radius: 1rem;
          padding: 0.75rem;
          aspect-ratio: 1/1;
          width: 100%;
          height: 180px;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        @media (min-width: 768px) {
          .card1 {
            padding: 2rem;
            height: auto;
            min-height: 350px;
            max-width: 350px;
            margin: 0 auto;
          }
        }

        .card-gradient {
          background: url("/assets/rectangle1392.webp") no-repeat center center;
          background-size: cover;
        }

        .card-plain {
        }

        .icon-container {
          margin-bottom: 0.5rem;
        }

        @media (min-width: 768px) {
          .icon-container {
            margin-bottom: 1.5rem;
          }
        }

        .icon-circle {
          background: url("/assets/grbg.webp") no-repeat center center;
          background-size: cover;
          border-radius: 50%;
          width: ${isMobile ? "2.5rem" : "5rem"};
          height: ${isMobile ? "2.5rem" : "5rem"};
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-title {
          color: #233467;
          font-weight: 700;
          font-size: ${isMobile ? "0.875rem" : "1.5rem"};
          margin-bottom: 0.25rem;
        }

        @media (min-width: 768px) {
          .card-title {
            margin-bottom: 0.5rem;
          }
        }

        .card-description {
          color: #233467;
          opacity: 0.5;
          font-size: ${isMobile ? "0.7rem" : "1rem"};
          line-height: 1.2;
          margin-bottom: 0.5rem;
          max-width: ${isMobile ? "90%" : "100%"};
          flex-grow: 1;
          font-weight: 500;
          display: flex;
          align-items: center;
        }

        @media (min-width: 768px) {
          .card-description {
            margin-bottom: 2rem;
            line-height: 1.4;
          }
        }

        .dark-text {
          color: #233467;
        }

        .card-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.2rem;
          border: 1px solid #233467;
          border-radius: 9999px;
          padding: ${isMobile ? "0.3rem 0.1rem .3rem .6rem" : "0.75rem .5rem .75rem 1.5rem"};
          color: #233467;
          font-weight: 700;
          letter-spacing: 0.05em;
          font-size: ${isMobile ? "0.55rem" : "0.875rem"};
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        @media (min-width: 768px) {
          .card-button {
            letter-spacing: 0.1em;
            font-weight: 700;
            gap: 0.75rem;
          }
        }

        .card-button img {
          width: ${isMobile ? "16px" : "32px"};
          height: ${isMobile ? "16px" : "32px"};
        }
      `}</style>
    </div>
  );
}

// import Head from "next/head";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// export default function TutoringCourses() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       setIsMobile(width < 768);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="container">
//       <Head>
//         <title>Tutoring Courses</title>
//         <meta charSet="utf-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link
//           href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
//           rel="stylesheet"
//         />
//       </Head>

//       <main>
//         <section className="heading-section">
//           <div
//             className="text-center mb-5 fade-in-section"
//             data-scroll
//             data-scroll-class="is-inview"
//             data-scroll-repeat
//             style={{ animationDelay: "0.15s" }}
//           >
//             <div
//               data-scroll
//               data-scroll-class="is-inview"
//               data-scroll-repeat="true"
//               className="fade-in-section"
//               style={{ animationDelay: "0.1s" }}
//             >
//               <div className="SubHeading testSubheading">TUTORING COURSES</div>
//             </div>

//             <h2
//               className="fw-bold mb-0 fade-in-section"
//               data-scroll
//               data-scroll-class="is-inview"
//               data-scroll-repeat
//               style={{
//                 animationDelay: "0.3s",
//                 fontSize: isMobile ? "1.5rem" : "2.5rem",
//                 lineHeight: "1.1",
//                 textTransform: "uppercase",
//                 marginTop: "3vh",
//               }}
//             >
//               <span
//                 style={{
//                   background: "linear-gradient(135deg, #3F88BA, #161664)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                 }}
//               >
//                 LOREM IPSUM DOLOR SIT AMET,
//               </span>{" "}
//               <span
//                 style={{
//                   background: "linear-gradient(135deg, #00A491, #003E37)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                 }}
//               >
//                 CONSECTETUR
//               </span>{" "}
//               <span
//                 style={{
//                   background: "linear-gradient(135deg, #3F88BA, #161664)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                 }}
//               >
//                 ADIPISCING
//               </span>
//             </h2>
//           </div>
//         </section>

//         <section className="cards-grid">
//           {/* IB Card */}
//           <article className="card1 card-plain">
//             <div className="icon-container">
//               <div className="icon-circle">
//                 <Image
//                   alt="Open book icon in white on teal circular background"
//                   src="/assets/book1.svg"
//                   width={isMobile ? 25 : 60}
//                   height={isMobile ? 25 : 60}
//                 />
//               </div>
//             </div>
//             <h3 className="card-title">IB</h3>
//             <p className="card-description">
//               Transforming lives through tailored coaching for personal success.
//             </p>
//             <button className="card-button">
//               LEARN MORE
//               <img
//                 src="/assets/leftarr.webp"
//                 alt="leftarr"
//                 width={isMobile ? 16 : 32}
//                 height={isMobile ? 16 : 32}
//               />
//             </button>
//           </article>

//           {/* IBDP Card */}
//           <article className="card1 card-plain">
//             <div className="icon-container">
//               <div className="icon-circle">
//                 <Image
//                   alt="Closed book icon in white on teal circular background"
//                   src="/assets/book2.svg"
//                   width={isMobile ? 25 : 60}
//                   height={isMobile ? 25 : 60}
//                 />
//               </div>
//             </div>
//             <h3 className="card-title">IBDP</h3>
//             <p className="card-description dark-text">
//               Maximize to 45 points with subject-specific tutors that will help
//               you.
//             </p>
//             <button className="card-button">
//               LEARN MORE
//               <img
//                 src="/assets/leftarr.webp"
//                 alt="leftarr"
//                 width={isMobile ? 16 : 32}
//                 height={isMobile ? 16 : 32}
//               />
//             </button>
//           </article>

//           {/* MYP Card */}
//           <article className="card1 card-plain">
//             <div className="icon-container">
//               <div className="icon-circle">
//                 <Image
//                   alt="Lightbulb icon in white on teal circular background"
//                   src="/assets/bulb.svg"
//                   width={isMobile ? 25 : 60}
//                   height={isMobile ? 25 : 60}
//                 />
//               </div>
//             </div>
//             <h3 className="card-title">MYP</h3>
//             <p className="card-description">
//               Kick-start your MYP learnings with tutor-led courses that best
//               suit.
//             </p>
//             <button className="card-button">
//               LEARN MORE
//               <img
//                 src="/assets/leftarr.webp"
//                 alt="leftarr"
//                 width={isMobile ? 16 : 32}
//                 height={isMobile ? 16 : 32}
//               />
//             </button>
//           </article>

//           {/* IGCSE Card */}
//           <article className="card1 card-plain">
//             <div className="icon-container">
//               <div className="icon-circle">
//                 <Image
//                   alt="Open book icon with a bookmark in white on teal circular background"
//                   src="/assets/book3.svg"
//                   width={isMobile ? 25 : 60}
//                   height={isMobile ? 25 : 60}
//                 />
//               </div>
//             </div>
//             <h3 className="card-title">IGCSE</h3>
//             <p className="card-description">
//               Get exclusive tutoring support for IGCSE / GCSE qualifications.
//             </p>
//             <button className="card-button">
//               LEARN MORE
//               <img
//                 src="/assets/leftarr.webp"
//                 alt="leftarr"
//                 width={isMobile ? 16 : 32}
//                 height={isMobile ? 16 : 32}
//               />
//             </button>
//           </article>

//           {/* A-Levels Card */}
//           <article className="card1 card-plain">
//             <div className="icon-container">
//               <div className="icon-circle">
//                 <Image
//                   alt="Graduation cap icon in white on teal circular background"
//                   src="/assets/hat.svg"
//                   width={isMobile ? 25 : 60}
//                   height={isMobile ? 25 : 60}
//                 />
//               </div>
//             </div>
//             <h3 className="card-title">A-LEVELS</h3>
//             <p className="card-description">
//               Enjoy excellent resources &amp; training under top A-Levels tutors
//               for all exam boards.
//             </p>
//             <button className="card-button">
//               LEARN MORE
//               <img
//                 src="/assets/leftarr.webp"
//                 alt="leftarr"
//                 width={isMobile ? 16 : 32}
//                 height={isMobile ? 16 : 32}
//               />
//             </button>
//           </article>
//         </section>
//       </main>

//       <style jsx>{`
//         @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap");

//         .container {
//           font-family: "Montserrat", sans-serif;
//           background: transparent;
//           display: flex;
//           justify-content: center;
//           padding: 2.5rem 0.5rem;
//           min-height: 100vh;
//         }

//         main {
//           max-width: 90vw;
//           width: 100%;
//         }

//         .heading-section {
//           text-align: center;
//           margin-bottom: 2.5rem;
//         }

//         .cards-grid {
//           display: grid;
//           grid-template-columns: repeat(2, 1fr);
//           gap: 0.5rem;
//           margin: 0 auto;
//           padding: 0 0.25rem;
//         }

//         @media (min-width: 768px) {
//           .cards-grid {
//             grid-template-columns: repeat(3, 1fr);
//             gap: 2.5rem;
//           }
//         }

//         .card1 {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           text-align: center;
//           border-radius: 1rem;
//           padding: 0.75rem;
//           aspect-ratio: 1/1;
//           width: 100%;
//           height: 180px;
//           justify-content: space-between;
//           transition: all 0.3s ease;
//           position: relative;
//           overflow: hidden;
//         }

//         .card1::before {
//           content: "";
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: url("/assets/rectangle1392.webp") no-repeat center center;
//           background-size: cover;
//           opacity: 0;
//           transition: opacity 0.3s ease;
//           z-index: -1;
//         }

//         .card1:hover::before {
//           opacity: 1;
//         }

//         @media (min-width: 768px) {
//           .card1 {
//             padding: 2rem;
//             height: auto;
//             min-height: 350px;
//             max-width: 350px;
//             margin: 0 auto;
//           }
//         }

//         .card-gradient {
//           background: url("/assets/rectangle1392.webp") no-repeat center center;
//           background-size: cover;
//         }

//         .card-plain {
//         }

//         .icon-container {
//           margin-bottom: 0.5rem;
//         }

//         @media (min-width: 768px) {
//           .icon-container {
//             margin-bottom: 1.5rem;
//           }
//         }

//         .icon-circle {
//           background: url("/assets/grbg.webp") no-repeat center center;
//           background-size: cover;
//           border-radius: 50%;
//           width: ${isMobile ? "2.5rem" : "5rem"};
//           height: ${isMobile ? "2.5rem" : "5rem"};
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .card-title {
//           color: #233467;
//           font-weight: 700;
//           font-size: ${isMobile ? "0.875rem" : "1.5rem"};
//           margin-bottom: 0.25rem;
//         }

//         @media (min-width: 768px) {
//           .card-title {
//             margin-bottom: 0.5rem;
//           }
//         }

//         .card-description {
//           color: #4f5a7a;
//           font-size: ${isMobile ? "0.55rem" : "1rem"};
//           line-height: 1.2;
//           margin-bottom: 0.5rem;
//           max-width: ${isMobile ? "140px" : "220px"};
//           flex-grow: 1;
//           display: flex;
//           align-items: center;
//         }

//         @media (min-width: 768px) {
//           .card-description {
//             margin-bottom: 2rem;
//             line-height: 1.4;
//           }
//         }

//         .dark-text {
//           color: #233467;
//         }

//         .card-button {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 0.2rem;
//           border: 1px solid #233467;
//           border-radius: 9999px;
//           padding: ${isMobile ? "0.3rem 0.6rem" : "0.75rem 1.5rem"};
//           color: #233467;
//           font-weight: 700;
//           letter-spacing: 0.05em;
//           font-size: ${isMobile ? "0.55rem" : "0.875rem"};
//           background: transparent;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           white-space: nowrap;
//         }

//         @media (min-width: 768px) {
//           .card-button {
//             letter-spacing: 0.1em;
//             font-weight: 700;
//             gap: 0.75rem;
//           }
//         }

//         .card-button img {
//           width: ${isMobile ? "16px" : "32px"};
//           height: ${isMobile ? "16px" : "32px"};
//         }
//       `}</style>
//     </div>
//   );
// }
