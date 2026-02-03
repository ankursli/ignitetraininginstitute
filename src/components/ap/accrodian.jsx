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
          <h2 className="title">Ignite Training Institute - Expert-Led AP Tuitions In Dubai, UAE For Academic Excellence</h2>
          <p className="subtitle"> Ignite Training Institute offers expert-led AP tuitions in Dubai to help students build a strong academic foundation in college-level subjects. Our AP tutors are experienced in guiding students through the rigor of Advanced Placement courses across subjects like Calculus, Physics, Chemistry, and English.
            <br />
            Sessions are structured around concept mastery, problem-solving techniques, and exam strategies. Students benefit from regular assessments, past paper practice, and personalized feedback. Whether preparing for AP exams or aiming to earn college credits early, our tuition supports all academic goals. Flexible scheduling and online options ensure accessibility for learners across the UAE.
          </p>        </div>
        <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="expanded">
          <h2 className="title">AP Tutoring In UAE With Subject-Specialist Support</h2>
          <p className="subtitle">
            Our AP tutoring program in the UAE is led by subject-specialist educators who are well-versed in the College Board curriculum. Students receive detailed explanations, practice materials, and individualized support tailored to their chosen AP subjects. Whether tackling complex AP Calculus questions or essay-based AP Literature prompts, students are equipped with the tools they need to succeed.
            <br />
            Tutors provide step-by-step guidance on multiple-choice questions and free-response sections. The program also includes timed mock exams and revision sessions to build exam stamina. Ignite’s approach ensures students gain clarity, confidence, and competitive AP scores.
          </p>          <br />


          <h2 className="title">Focused AP Classes In Dubai For Exam Readiness And Success</h2>
          <p className="subtitle">
            Ignite’s AP classes in Dubai are designed to maximize exam performance with a focus on skill development, critical thinking, and real exam conditions. Each session blends interactive teaching with targeted practice on AP-format questions. Students learn how to manage time effectively, structure responses, and avoid common mistakes.
            <br />
            With support for a wide range of subjects, our AP classes cater to diverse academic needs. We also provide resources aligned with the latest College Board updates and testing trends. By the end of the program, students feel well-prepared and confident heading into their AP exams.
          </p>          <br />


          <h2 className="title">Personalized AP Coaching In Dubai For High-Scoring Performance</h2>
          <p className="subtitle">
            Our personalized AP coaching in Dubai is tailored to each student’s strengths, weaknesses, and learning pace. Ignite’s tutors design individual learning plans based on diagnostic assessments and academic goals. Whether a student is aiming for a perfect 5 or needs help catching up, coaching sessions are built to deliver focused improvement.
            <br />
            Students receive one-on-one attention, strategic guidance, and regular feedback. We break down tough concepts and provide practice that matches the AP exam format. This customized coaching leads to deeper understanding, improved performance, and better test-day results.
          </p>          <br />


          <h2 className="title">Comprehensive Advanced Placements Tutoring In Dubai By Expert Educators</h2>
          <p className="subtitle">
            Ignite’s comprehensive AP tutoring covers every aspect of exam success from concept clarity to effective answering strategies. Our expert educators help students navigate the rigor of AP subjects while also preparing them for the expectations of college-level coursework. The program includes syllabus-aligned instruction, past paper analysis, mock testing, and time-bound assignments.
            <br />
            Tutors also mentor students on how to handle the pressure of AP exams with confidence. With both in-person and online options available, students across Dubai can access world-class support tailored to the AP framework.
          </p>          <br />


          <h2 className="title">Boost Your College Credits With Best-Suited AP Courses</h2>
          <p className="subtitle">
            With AP tutoring at Ignite, students can boost their college credit potential by choosing the right AP courses and excelling in them. Our team helps students identify AP subjects aligned with their strengths and university goals. Once enrolled, they receive intensive academic support to master each topic and earn top scores.
            <br />
            This not only strengthens college applications but also helps students place out of introductory college courses. Ignite ensures that each AP course is approached with clarity, structure, and long-term academic vision in mind.
          </p>          <br />


          <h2 className="title">Showcase Your Confidence At College-Level With Top AP Scores</h2>
          <p className="subtitle">
            Top AP scores reflect a student’s readiness for college-level work, and Ignite prepares you to showcase that confidence. Through expert instruction, real AP exam practice, and guided feedback, students learn to approach exams with calm and clarity. We emphasize analytical thinking, precise writing, and problem-solving under pressure.
            <br />
            Whether it’s mastering FRQs or optimizing multiple-choice speed, Ignite’s students are coached to succeed. High AP scores help students stand out during college admissions and ease the transition to university-level academics.
          </p>          <br />


          <h2 className="title">How Ignite Supports Its AP Students To Shine?</h2>
          <ul>
            <li>AP Past Paper Solving – Students regularly solve AP-style questions and past exams to strengthen content application, understand scoring rubrics, and manage time effectively.</li>
            <li>Complete AP Revision – Our targeted revision sessions focus on key topics, clarify tough concepts, and ensure students are exam-ready with a solid grasp of each subject.</li>
            <li>AP Subjects Support – We offer academic support across major AP subjects including Calculus, Biology, Physics, Economics, and more, aligned with College Board standards.</li>
            <li>AP Personalized Training – Each AP student receives a customized learning plan tailored to their subject combination, exam timeline, and academic goals.</li>
            <li>AP Syllabus Completion – Tutors ensure timely coverage of the entire AP syllabus while reinforcing essential topics through regular review and practice.</li>
            <li>AP Exam Strategies – Students learn test-taking techniques such as pacing, eliminating wrong choices, and mastering free-response questions to maximize their AP score.</li>
          </ul>
          <br />
          <h2 className="title">Exclusive AP Resources</h2>
          <br />

          <div class="schemalinks">
            <a href="https://ignitetraininginstitute.com/advanced-placements/">Advanced Placements</a> | <a href="https://ignitetraininginstitute.com/ap-scores/">AP Scores</a> | <a href="https://ignitetraininginstitute.com/ib-vs-ap-comparison/">IB VS AP</a> | <a href="https://ignitetraininginstitute.com/ap-courses/">AP Courses</a> | <a href="https://ignitetraininginstitute.com/ap-exams-overview/">AP Exams</a> | <a href="https://ignitetraininginstitute.com/what-is-an-ap-seminar-exam/">AP Seminar Exam</a> | <a href="https://ignitetraininginstitute.com/are-ap-exams-hard/">Are AP Exams Hard</a> | <a href="https://ignitetraininginstitute.com/easiest-ap-exams/">Easiest AP Exams</a> | <a href="https://ignitetraininginstitute.com/ap-exam-test-dates/">AP Exam Test Dates</a> | <a href="https://ignitetraininginstitute.com/how-many-ap-classes-to-take/">AP Classes To Take</a> | <a href="https://ignitetraininginstitute.com/do-ap-classes-count-as-college-credit/">Do AP Classes Count As College Credit</a> | <a href="https://ignitetraininginstitute.com/how-to-get-a-5-on-ap-statistics/">How To Get A 5 On The AP Statistics</a> | <a href="https://ignitetraininginstitute.com/ap-computer-science-principles-vs-ap-computer-science-a/">AP Computer Science Principles VS AP Computer Science A</a> | <a href="https://ignitetraininginstitute.com/is-ap-statistics-easy/">Is AP Statistics Easy</a> | <a href="https://ignitetraininginstitute.com/ap-courses-for-engineering/">AP Courses For Engineering</a> | <a href="https://ignitetraininginstitute.com/ap-biology/">AP Biology</a> | <a href="https://ignitetraininginstitute.com/what-is-ap-chemistry-exam/">AP Chemistry Exam</a> | <a href="https://ignitetraininginstitute.com/how-to-register-for-ap-exams/">How To Register For AP Exams</a>
          </div>

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
      `}</style>
    </div>
  );
}
