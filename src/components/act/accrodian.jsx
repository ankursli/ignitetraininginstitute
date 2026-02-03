"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function Accordion() {
  const [open, setOpen] = useState(false);

  return (
    <div className="card mx-auto fade-in-section"
      data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat>
      {/* Header Row */}
      <div className="header" onClick={() => setOpen(!open)}>
        <div className="text-content">
          <h2 className="title">Ignite Training Institute - Expert ACT Tutoring In Dubai, UAE For Target Score Success</h2>
          <p className="subtitle">
            Ignite Training Institute offers expert ACT tutoring in Dubai, led by experienced instructors who specialize in all test sections - English, Math, Reading, Science, and Writing.<br />
            Students receive focused guidance on mastering core concepts, improving test-taking strategies, and managing time effectively. Each session includes section-specific drills, practice tests, and detailed feedback. The program is built to help students aim for their target scores with confidence. Whether you're preparing for your first attempt or a retake, our tutors provide the clarity and structure you need to succeed. Flexible scheduling and in-person or online formats are available.
          </p>        </div>
        <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="expanded">
          <h2 className="title">Strategic ACT Coaching In Dubai Focused On Exam Readiness</h2>
          <p className="subtitle">
            Our ACT coaching in Dubai is designed to equip students with the skills, strategies, and confidence needed to perform well on test day.<br />
            Ignite’s instructors teach students how to approach each question type, avoid common pitfalls, and pace themselves through the exam. Emphasis is placed on consistent practice using real ACT-style questions and timed mock exams. Coaching sessions also focus on reducing anxiety and improving accuracy under pressure. With our structured approach and expert feedback, students feel fully prepared for the actual exam. The goal is not just readiness, but top-tier results.
          </p>          <br />


          <h2 className="title">Personalized ACT Tuition In Dubai For Confident Test Performance</h2>
          <p className="subtitle">
            Ignite’s ACT tuition program is personalized to fit each student’s current level, target score, and learning style.<br />
            Our tutors begin with diagnostic assessments to identify strengths and improvement areas, then tailor a study plan accordingly. Whether a student needs intensive help in Math or writing support for the essay section, sessions are customized for maximum impact. Ongoing performance tracking ensures steady progress and timely adjustments. This personalized approach builds student confidence and enhances overall performance. One-on-one and small group formats are available based on student preference.
          </p>          <br />
          <br />

          <h2 className="title">Tailored ACT Courses To Match Your Academic Goals</h2>
          <p className="subtitle">
            Ignite offers tailored ACT prep courses designed to align with your academic and college admission goals.<br />
            From Ivy League hopefuls to scholarship-focused students, our courses are built around what matters most to you. Tutors guide you through mastering content, building stamina, and crafting high-scoring strategies for each section. With flexible start dates, progress tracking, and expert mentorship, every course delivers measurable improvement. We ensure that your ACT journey is not just effective, but strategic and focused on your long-term academic success.
          </p>          <br />


          <h2 className="title">Prep Smarter, Score Higher With ACT Coaching That Delivers Results</h2>
          <p className="subtitle">
            At Ignite, we believe smart preparation leads to strong results.<br />
            Our ACT coaching program combines expert teaching, adaptive practice, and strategic planning to help students maximize their scores. Each lesson focuses on efficient learning, identifying question patterns, refining problem-solving speed, and improving section scores. Regular feedback and mock tests help students stay exam-ready and confident. With proven results and student success stories, Ignite is the trusted choice for ACT prep in Dubai. Prepare smarter and unlock your best performance yet.
          </p>          <br />


          <h2 className="title">How Ignite’s ACT Classes Guide Students To Success?</h2>
          <p className="subtitle">
            Ignite Training Institute provides structured ACT prep that builds test-taking confidence, strengthens core concepts, and boosts student scores.
          </p>          <ul className="subtitle">
            <li><strong>ACT Past Paper Solving:</strong> Students practice real ACT papers and simulations to become familiar with question formats, timing, and scoring patterns for each section.</li>
            <li><strong>Complete ACT Revision:</strong> Our revision sessions focus on reinforcing tested concepts in English, Math, Reading, and Science while addressing specific problem areas.</li>
            <li><strong>ACT Subjects Support:</strong> We provide targeted support across all ACT sections including Math problem-solving, grammar rules, reading strategies, and scientific reasoning.</li>
            <li><strong>ACT Personalized Training:</strong> Each student receives a customized prep plan based on their baseline score, university goals, and subject-wise strengths and weaknesses.</li>
            <li><strong>ACT Syllabus Completion:</strong> Tutors ensure thorough coverage of all ACT-tested topics well in advance of the test date, giving students ample time for review and mock testing.</li>
            <li><strong>ACT Exam Strategies:</strong> Students are trained in pacing techniques, educated guessing, question prioritization, and section-specific strategies to maximize their composite score.</li>
          </ul>

        </div>
      )}

      <style jsx>{`
        .card {
          background-image: url('/assets/Rectangle130.webp');
          background-size: cover;
          background-position: center;
          max-width:90vw;
          color: white;
          padding: 24px;
          transition: all 0.3s ease;
          margin:0 auto !important;
        }

        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
        }

        .text-content {
          flex: 1;
        }

        .title {
          font-weight: bold;
          letter-spacing: 0.05em;
          font-size: 1.125rem; /* 18px */
          margin: 0;
        }

        .subtitle {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1rem;
          margin: 4px 0 0 0;
        }

        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 16px;
        }

        .expanded {
          margin-top: 16px;
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.95rem;
          line-height: 1.5;
        }
                  @media (max-width: 575px) {
                          .card {
          max-width:95vw;
          color: white;
          padding: 20px;
          transition: all 0.3s ease;
          
        }
            }
      `}</style>
    </div>
  );
}
