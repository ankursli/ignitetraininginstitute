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
          <h2 className="title">Ignite Training Institute - British Curriculum Tuition In Dubai, UAE For Academic Success</h2>
          <p className="subtitle">Ignite Training Institute provides expert British curriculum tuition in Dubai and across the UAE to help students achieve academic success in IGCSE and A Levels. Our tutors are subject specialists who understand exam board expectations and tailor instruction accordingly. We focus on concept clarity, exam technique, and performance improvement. <br />
            Whether students need help with Math, Sciences, English, or Economics, support is personalized. Regular assessments and feedback help track progress and strengthen weak areas. With structured guidance, students build confidence and improve steadily.</p>
        </div>
        <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="expanded">
          <h2 className="title">British Curriculum Classes Tailored To Student Needs</h2>
          <p className="subtitle">At Ignite, British curriculum classes are customized to suit each student’s academic level, subject requirements, and learning pace. Whether a student is preparing for IGCSE or A Levels, our approach ensures focused attention and measurable progress. Classes are available in one-on-one or small group formats for better engagement and support. <br />
            We reinforce concepts, prepare students for exams, and assist with assignments and projects. From core subjects to optional ones, every class is aligned with the curriculum. Our goal is to help students stay ahead with clarity and confidence.</p>          <br />

          <h2 className="title">British Curriculum Coaching For IGCSE & A Levels Excellence</h2>
          <p className="subtitle">Ignite offers specialized coaching for IGCSE and A Levels under the British curriculum, helping students aim for top grades. Our coaching goes beyond just covering the syllabus; we help students master exam strategies, tackle past papers, and understand how to answer questions with precision. <br />
            Every session is structured to match the student’s academic goals. With subject-specific focus and expert mentoring, we help learners overcome challenges and improve performance. Students receive ongoing feedback to track growth and stay exam-ready.</p>          <br />

          <h2 className="title">Best Tuition For IGCSE / GCSE - Both In Person And Online Classes</h2>
          <p className="subtitle">Ignite provides the best tuition support for IGCSE and GCSE students through both in-person and online formats. Students can choose what suits their schedule while receiving the same high-quality academic guidance. Our experienced tutors simplify complex topics, guide students through past papers, and provide support across subjects. <br />
            Lessons are interactive, goal-focused, and designed to improve grades. We offer flexibility without compromising on academic depth. Whether online or in the center, students receive full attention and academic care.</p>          <br />

          <h2 className="title">Best Tuition For AS & A Levels - Both In Person And Online Classes</h2>
          <p className="subtitle">Ignite’s AS and A Level tuition is available in both in-person and online formats to ensure accessibility for all learners. Our experienced faculty helps students grasp advanced topics, master exam techniques, and manage coursework effectively. We support a wide range of subjects, including Math, Biology, Physics, Business, and more. <br />
            Sessions are tailored to the student's needs and aligned with their exam board requirements. With flexible scheduling and focused mentoring, students get the academic edge they need to excel in AS and A Levels.</p>          <br />

          <h2 className="title">How Ignite’s British Curriculum Classes Guide Students To Success</h2>
          <p className="subtitle">Ignite’s British curriculum classes are structured to build subject mastery, improve exam skills, and develop academic confidence. Our tutors personalize learning based on each student’s strengths and areas that need improvement. Through consistent practice, targeted revision, and one-on-one attention, we help students perform at their best in IGCSE and A Levels. <br />
            Regular feedback, mock tests, and progress tracking keep students motivated and on track. Whether preparing for exams or reinforcing daily lessons, Ignite provides the support students need to succeed.</p>          <br />

          <h2 className="title">Why Join Ignite Training Institute Ahead Of Your British Curriculum Journey?</h2>
          <p className="subtitle">Start your British curriculum journey with the right academic foundation and expert support at Ignite Training Institute.</p>          <br />

          <ul className="subtitle">
            <li><strong>British Curriculum Past Paper Solving:</strong> Students regularly solve past papers to get familiar with question patterns, improve accuracy, and build exam confidence across subjects.</li>
            <li><strong>Complete British Curriculum Revision:</strong> Our structured revision sessions reinforce key concepts, clarify doubts, and ensure thorough preparation before every major assessment.</li>
            <li><strong>British Curriculum Subjects Support:</strong> We offer academic support for all core and elective subjects across IGCSE, GCSE, AS, and A Levels, guided by subject-specialist tutors.</li>
            <li><strong>British Curriculum Personalized Training:</strong> Each student receives a tailored learning plan based on their academic needs, goals, and pace, ensuring focused and effective progress.</li>
            <li><strong>British Curriculum Syllabus Completion:</strong> Tutors ensure timely and complete syllabus coverage to leave ample room for revision, testing, and reinforcement.</li>
            <li><strong>British Curriculum Exam Strategies:</strong> Students are trained in time management, answer structuring, and smart exam techniques that align with board-specific expectations.</li>
          </ul>
          <br />

          <h2 className="title">Exclusive British Curriculum Resources</h2>
          <br />
          <div class="schemalinks">
            <a href="https://ignitetraininginstitute.com/british-curriculum/">British Curriculum</a> | <a href="https://ignitetraininginstitute.com/a-level-qualifications/">A-Level</a> | <a href="http://as-levels">AS-Levels</a> | <a href="https://ignitetraininginstitute.com/gcse-guide/">GCSE</a> | <a href="https://ignitetraininginstitute.com/igcse-curriculum/">What Is IGCSE Curriculum</a> | <a href="https://ignitetraininginstitute.com/a-level-qualifications/">A-Level Qualifications</a> | <a href="https://ignitetraininginstitute.com/cambridge-igcse-guide/">Cambridge IGCSE</a> | <a href="https://ignitetraininginstitute.com/cambridge-a-level-courses/">Cambridge A-Level Courses</a> | <a href="https://ignitetraininginstitute.com/what-is-aqa-gcse/">What Is AQA GCSE</a> | <a href="https://ignitetraininginstitute.com/igcse-exams/">IGCSE Exams 2025</a> | <a href="https://ignitetraininginstitute.com/igcse-grades-explained/">IGCSE Grades</a> | <a href="https://ignitetraininginstitute.com/what-is-the-difference-between-edexcel-and-cambridge/">Edexcel & Cambridge</a> | <a href="https://ignitetraininginstitute.com/a-levels-subjects/">A Levels Subjects</a> | <a href="https://ignitetraininginstitute.com/pearson-edexcel-igcse/">Pearson Edexcel IGCSE</a> | <a href="https://ignitetraininginstitute.com/cambridge-igcse-guide/">Cambridge IGCSE</a> | <a href="https://ignitetraininginstitute.com/why-choose-a-levels/">Why Choose A Levels?</a> | <a href="https://ignitetraininginstitute.com/are-gcses-important/">Are GCSEs Important</a> | <a href="https://ignitetraininginstitute.com/gcse-grading-system/">New Vs Old GCSE Grading System</a> | <a href="https://ignitetraininginstitute.com/a-level-grading-system/">A-Level Grading System</a> | <a href="https://ignitetraininginstitute.com/universities-that-accept-igcse-certificate/">Universities That Accept IGCSE Certificate In USA & UK</a> | <a href="https://ignitetraininginstitute.com/as-level-university-requirement/">AS Level University Requirements</a> | <a href="https://ignitetraininginstitute.com/what-is-the-difference-between-edexcel-and-cambridge/">Difference Between Edexcel & Cambridge</a> | <a href="https://ignitetraininginstitute.com/a-level-subjects-for-pyschology/">A-Level Subjects For Psychology</a> | <a href="https://ignitetraininginstitute.com/a-level-arts-subjects/">A-Level Arts Subjects</a> | <a href="https://ignitetraininginstitute.com/edexcel-a-level-economics/">Edexcel A Level Economics</a> | <a href="https://ignitetraininginstitute.com/a-levels-chemistry/">A Levels Chemistry</a> | <a href="https://ignitetraininginstitute.com/a-level-physics-course/">A-Level Physics</a> | <a href="https://ignitetraininginstitute.com/a-level-maths-grades/">A Level Maths Grade</a> | <a href="https://ignitetraininginstitute.com/igcse-chemistry/">IGCSE Chemistry</a> | <a href="https://ignitetraininginstitute.com/what-do-you-do-in-gcse-photography/">GCSE Photography</a> | <a href="https://ignitetraininginstitute.com/igcse-accounting-syllabus-overview-key-takeaways/">IGCSE Accounting</a> | <a href="https://ignitetraininginstitute.com/igcse-biology/">IGCSE Biology</a> | <a href="https://ignitetraininginstitute.com/igcse-physics/">IGCSE Physics</a> | <a href="https://ignitetraininginstitute.com/how-to-study-for-igcse/">How To Study For IGCSE</a> | <a href="https://ignitetraininginstitute.com/how-to-study-for-igcse-biology/">How To Study For IGCSE Biology</a> | <a href="https://ignitetraininginstitute.com/how-to-revise-for-business-studies-gcse/">How To Revise For Business Studies GCSE</a> | <a href="https://ignitetraininginstitute.com/igcse-computer-science/">IGCSE Computer Science</a> | <a href="https://ignitetraininginstitute.com/edexcel-igcse-biology-syllabus/">Edexcel IGCSE Biology</a> | <a href="https://ignitetraininginstitute.com/aqa-vs-cie/">AQA VS CIE</a> | <a href="https://ignitetraininginstitute.com/igcse-vs-cbse/">IGCSE VS CBSE</a> | <a href="https://ignitetraininginstitute.com/triple-science-vs-combined-science-what-to-choose/">Triple Science VS Combined Science</a> | <a href="https://ignitetraininginstitute.com/easiest-igcse-subjects/">Easiest IGCSE Subjects</a> | <a href="https://ignitetraininginstitute.com/indian-curriculum-vs-british-curriculum/">Indian Curriculum VS British Curriculum</a> | <a href="https://ignitetraininginstitute.com/difference-between-american-and-british-curriculum/">Difference Between American And British Curriculum</a> | <a href="https://ignitetraininginstitute.com/ib-curriculum-vs-british-curriculum/">IB Curriculum VS British Curriculum</a> | <a href="https://ignitetraininginstitute.com/a-levels-vs-cbse/">A-Levels VS CBSE</a> | <a href="https://ignitetraininginstitute.com/a-levels-vs-ibdp-comparison/">A-Levels VS IBDP</a> | <a href="https://ignitetraininginstitute.com/igcse-vs-gcse-comparison/">IGCSE VS GCSE</a> | <a href="https://ignitetraininginstitute.com/difference-between-gcse-and-a-levels/">Differences Between GCSE & A-Levels</a> | <a href="https://ignitetraininginstitute.com/ib-vs-igcse-program/">IB VS IGCSE</a> | <a href="https://ignitetraininginstitute.com/sat-vs-igcse/">SAT VS IGCSE</a> | <a href="https://ignitetraininginstitute.com/british-curriculum-schools/">British Curriculum Schools In Dubai</a> | <a href="https://ignitetraininginstitute.com/british-curriculum-schools-in-abu-dhabi/">British Curriculum Schools In Abu Dhabi</a> | <a href="https://ignitetraininginstitute.com/british-curriculum-schools-in-sharjah/">British Curriculum Schools In Sharjah</a>
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
