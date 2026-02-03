import React, { useEffect, useState } from "react";

export default function HomeschoolingMindset() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const cards = [
    {
      title: "Clarity In Thought Process",
      desc: "A successful journey begins with self-awareness. Whether you're an independent learner or require guidance, recognizing how you learn best & openly communicating your evolving needs lays the foundation for long-term success.",
      color: "blue",
      mobileTitle: "blue",
      mobileColor: "mobileBlue",
      icon: "/assets/1setting.webp",
      upbutton: "/assets/brup.svg",
      downButton: "/assets/brdown.webp",
    },
    {
      title: "Create Your Own Processes",
      desc: "Private schooling allows students to move beyond rigid classroom routines & discover what truly works for them. By designing their schedules, setting goals, & embracing a results-driven mindset, they excel on their own terms.",
      color: "green",
      mobileTitle: "green",
      icon: "/assets/2setting.webp",
      upbutton: "/assets/grup.svg",
      downButton: "/assets/grdown.webp",
      mobileColor: "mobileGreen",
    },
    {
      title: "Effective Time Management",
      desc: "Success as private students hinges on managing time purposefully. We guide students to balance academic focus with extracurricular pursuits & personal growth. This harmony boosts performance, well-being, & lifelong learning skills.",
      color: "green",
      mobileTitle: "blue",
      icon: "/assets/4setting.webp",
      upbutton: "/assets/brup.svg",
      downButton: "/assets/brdown.webp",
      mobileColor: "mobileBlue",
    },
    {
      title: "Take Ownership Of Actions",
      desc: "Private schooling teaches more than subjects; it instills accountability. Students learn to own their actions & recognize their efforts. This sense of ownership prepares them for the independent demands of university life & beyond.",
      color: "blue",
      icon: "/assets/3setting.webp",
      upbutton: "/assets/grup.svg",
      downButton: "/assets/grdown.webp",
      mobileColor: "mobileGreen",
      mobileTitle: "green",
    },
  ];


  return (
    <section className="mindset-section">
      <div className="testHeadings">
        <div
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat="true"
          className="fade-in-section"
          style={{ animationDelay: "0.1s" }}
        >
          <h2 className="SubHeading testSubheading">MINDSET FOR PURSUING PRIVATE SCHOOLING
          </h2>
        </div>
        <h3
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat="true"
          className="fade-in-section testTitle"
          style={{ animationDelay: "0.2s", fontSize: '2rem' }}
        >

          When <span className="highlight">  Learning </span>Becomes A Lifestyle, Not A Limitation
        </h3>
      </div>


      <div className="cards-container fade-in-section"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${isMobile ? card.mobileColor : card.color} ${openIndex === index ? "open" : ""
              }`}
          >
            <div className="card-content">
              <div className="icon-container">
                <img src={card.icon} alt="homeschooling & private candidates" className={`${isMobile ? "mobileicon" : "icon"}`} />
              </div>
              <div className="divider"></div>
              <div className="text-content">
                <div className="title-container">
                  <h3
                    className={`card-title ${isMobile ? `${card.mobileTitle}-title` : `${card.color}-title`
                      }`}>{card.title}</h3>
                </div>
              </div>
            </div>
            <p className="desc">{card.desc}</p>

            {/* Mobile arrow toggle */}
            <button
              className="toggle-btn"
              onClick={() => toggleCard(index)}
              aria-label="Toggle"
            >
              <img
                src={openIndex === index ? card.upbutton : card.downButton}
                alt="Toggle Icon"
                className="toggle-icon"
              />
            </button>
          </div>
        ))}
      </div>

      <style jsx>{`

        .mindset-section {
          text-align: center;
          padding: 0 1rem;
          max-width: 1500px;
          margin: 0 auto;
        }
        
        .divider{
          width:1px;
          height:60px;
          background-color:#233467;
          opacity:0.2;
        }

        .title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0a1834;
          margin-bottom: 2rem;
          text-align: center;
        }

        .cards-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        .toggle-icon {
          width: 27px;
          height: 10px;
          border: none; /* Remove any border from images */
          outline: none; /* Remove outline */
        }

        .card {
          border-radius: 12px;
          padding: 1.5rem;
          text-align: left;
          position: relative;
          overflow: hidden;
          border: none; /* Explicitly remove border */
          outline: none; /* Remove outline */
          box-shadow: none; /* Remove any box shadow */
        }

        .card-content {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .icon-container {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobileicon {
          width:50px;
          height:50px;
          object-fit: contain;
          border: none; /* Remove border from images */
          outline: none;
        }
        
        .icon {
          width:114px;
          height:110px;
          object-fit: contain;
          border: none; /* Remove border from images */
          outline: none;
        }

        .text-content {
          flex: 1;
          padding-left: 1rem;
        }

        .title-container {
          margin-bottom: 1rem;
        }

        .card-title {
          font-size: 17px;
          font-weight: 700;
          margin: 0;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .blue-title {
          background: linear-gradient(285.71deg, #161664 -4.32%,#3F88BA  106.53%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text; /* for future support */
          color: transparent;
        }

        .green-title {
          background: linear-gradient(90deg, #00A491 0%, #003E37 127.82%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }

        .desc {
          font-size: 16px;
          line-height: 1.5;
          background: linear-gradient(285.71deg, #3F88BA -4.32%, #161664 106.53%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text; /* For Firefox */
          color: transparent;    /* Fallback */
          margin: 0;
        }

         

        /* Mobile: show only partial content by default */
        @media (max-width: 767px) {
          .desc {
            max-height: 3em;
            overflow: hidden;
            transition: max-height 0.3s ease;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }

          .card.open .desc {
            max-height: 500px;
            -webkit-line-clamp: unset;
          }

          .divider{
            width:1px;
            height:40px;
            background-color:#233467;
          }
        }

        .blue {
          background: url("/assets/bluebg1.webp") no-repeat center center;
          background-size: cover;
        }

        .green {
          background: url("/assets/greenbg1.webp") no-repeat center center;
          background-size: cover;
        }
        
.mobileBlue {
  background: url("/assets/bluebg2.webp") no-repeat center center;
  background-size: cover;
  border: 2px solid rgba(163, 202, 245, 0.4); /* Blue border with opacity */
}

.mobileGreen {
  background: url("/assets/greenbg2.webp") no-repeat center center;
  background-size: cover;
  border: 2px solid rgba(166, 234, 199, 0.4); /* Green border with opacity */
}

        .toggle-btn {
          background: none;
          border: none; /* Explicitly remove border */
          outline: none; /* Remove outline on focus */
          cursor: pointer;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          color: #00A491;
          font-weight: bold;
          transition: transform 0.3s ease;
          padding: 0; /* Remove default padding */
        }

        .toggle-btn:hover {
          transform: translateX(-50%) scale(1.1);
        }

        .toggle-btn:focus {
          outline: none; /* Remove focus outline */
        }

        /* Desktop: show all content, hide arrow */
        @media (min-width: 768px) {
          .cards-container {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }

          .title {
            font-size: 1.75rem;
          }

          .card {
            padding: 4rem;
          }

          .card-content {
            gap: 1.5rem;
          }

          .icon-container {
            width: 90px;
            height: 90px;
          }

          .icon {
          width: 80px;
        height: 80px;
        margin-bottom: 27px;
          }

          .text-content {
            padding-left: 1.5rem;
          }

          .card-title {
            font-size: 1.1rem;
          }

          .desc {
            max-height: none !important;
            font-size: 1rem;
          }

          .toggle-btn {
            display: none;
          }
        }
        @media (max-width: 575px) {
            .mindset-section {
              padding-top:0 ;
              padding-bottom:0 ;
              }

            .mobileicon{
              width:35px;
              height:35px;
            }
            .title-container{
              margin-bottom: 0;
            }
            .card-content{
              align-items: center;
            }
            .desc{
              padding-top:10px;
              max-height:4em;
              padding-bottom:5px ;
            }
            .card{
              padding:2rem;
            }
            .toggle-icon{
            width:auto;
            }
            .toggle-btn{
              bottom:-5px;
            }
         }

        @media (min-width: 1024px) {
          .card-title {
            font-size: 26px;
          }
          
          .desc {
            font-size: 19px;
            font-weight: 500;
          }
        }
          
      `}</style>
    </section>
  );
}