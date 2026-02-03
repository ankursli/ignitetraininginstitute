"use client";

export default function SubjectsCard() {
  const sections = [
    { name: "English", questions: 75, time: "45 Minutes", score: "0-36" },
    { name: "Maths", questions: 60, time: "60 Minutes", score: "0-36" },
    { name: "Reading", questions: 40, time: "35 Minutes", score: "0-36" },
    { name: "Science", questions: 40, time: "35 Minutes", score: "0-36" },
    { name: "Writing", questions: 1, time: "40 Minutes", score: "0-36" },
  ];

  return (
    <div
      className="mx-auto fade-in-section"
      style={{
        maxWidth: "90vw",
        padding: "2rem",
        background: "white"
      }}
      data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat
    >
      <h2
        className="fw-bold text-center mb-4"
        style={{
          background: "linear-gradient(90deg,#161664, #3F88BA)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          letterSpacing: "0.1em",
          animationDelay: "0.3s",
          fontSize: "1.5rem"
        }}
      >
        <img
          src="/assets/3color.webp"
          alt="act"
          width={15}
          height={18}
          style={{ verticalAlign: "middle", marginRight: "0.5rem" }}
        />
        ACT TEST OVERVIEW
        <img
          src="/assets/3color.webp"
          alt="act"
          width={15}
          height={18}
          style={{ verticalAlign: "middle", marginLeft: "0.5rem" }}
        />
      </h2>

      <div style={{
        overflowX: "auto",
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid #161664",
        boxShadow: "0 4px 12px rgba(22, 22, 100, 0.1)"
      }}>
        <table
          style={{
            width: "100%",
            textAlign: "center",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr style={{
              background: "linear-gradient(90deg, #93b3d6ff, #b4d3e7ff)",
            }}>
              <th style={{
                padding: "0.75rem 1rem",
                background: "linear-gradient(90deg,#161664, #3F88BA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "0.1em",
                animationDelay: "0.3s",
                fontSize: "1rem",
                borderRight: "1px solid #161664"
              }}>
                ACT SECTION
              </th>
              <th style={{
                padding: "0.75rem 1rem",
                background: "linear-gradient(90deg,#161664, #3F88BA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "0.1em",
                animationDelay: "0.3s",
                fontSize: "1rem",
                borderRight: "1px solid #161664"
              }}>
                NO. OF QUESTIONS
              </th>
              <th style={{
                padding: "0.75rem 1rem",
                background: "linear-gradient(90deg,#161664, #3F88BA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "0.1em",
                animationDelay: "0.3s",
                fontSize: "1rem",
                borderRight: "1px solid #161664"
              }}>
                TIMES ALLOTED
              </th>
              <th style={{
                padding: "0.75rem 1rem",
                background: "linear-gradient(90deg,#161664, #3F88BA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "0.1em",
                animationDelay: "0.3s",
                fontSize: "1rem"
              }}>
                SCORE
              </th>
            </tr>
          </thead>
          <tbody>
            {sections.map((sec, index) => (
              <tr
                key={sec.name}
                style={{
                  background: index % 2 === 0
                    ? "none"
                    : "url('/assets/Rectangle 149.webp') no-repeat center / cover",
                  color: "#0d2344",
                  fontWeight: 500,
                }}
              >
                <td style={{ padding: "0.75rem 1rem", borderRight: "1px solid #161664" }}>
                  {sec.name}
                </td>
                <td style={{ padding: "0.75rem 1rem", borderRight: "1px solid #161664" }}>
                  {sec.questions}
                </td>
                <td style={{ padding: "0.75rem 1rem", borderRight: "1px solid #161664" }}>
                  {sec.time}
                </td>
                <td style={{ padding: "0.75rem 1rem" }}>
                  {sec.score}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Animation */}
      <style jsx>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-in-section.is-inview {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}