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
          <h2 className="title">Ignite Training Institute - Expert Tutors For A Levels Across All Subjects Online And In Person</h2>
          <p className="subtitle">Ignite Training Institute provides expert A Level tutors across all major subjects, including Math, Biology, Chemistry, Physics, Economics, and English. Whether online or in person, our sessions are designed to match individual learning styles and exam board requirements. Students receive structured lessons, past paper practice, and targeted feedback. <br />
            Our experienced tutors ensure concept clarity and exam readiness. We support Edexcel, Cambridge, Oxford AQA boards. Flexible scheduling and consistent guidance help students stay on track for top scores.</p>
        </div>
        <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="expanded">
          <h2 className="title">A Levels Tuitions In Dubai, UAE For Academic Excellence</h2>
          <p className="subtitle">Ignite’s A Levels tuitions in Dubai provide academic support tailored to help students reach their full potential. Our subject-specialist tutors guide learners through complex topics, helping them build strong foundations. We offer in-depth sessions that focus on both understanding and application. <br />
            Students also get regular practice through past papers and mock exams. With personalized feedback and exam strategies, we help students aim for top results. Our tuition is ideal for students targeting academic excellence in the British curriculum.</p>          <br />

          <h2 className="title">A Levels Tutoring In Dubai With Personalized Support</h2>
          <p className="subtitle">Our A Levels tutoring in Dubai offers personalized academic support designed to meet each student’s unique needs. Tutors at Ignite create custom study plans based on strengths and improvement areas. We help students stay aligned with syllabus goals and prepare strategically for final exams. <br />
            Sessions include concept reinforcement, writing practice, and real-time feedback. Whether online or in person, students receive the same level of focused support. With our guidance, learners become more confident and performance-driven.</p>          <br />

          <h2 className="title">AS Levels Tutors In Dubai For Focused Academic Help</h2>
          <p className="subtitle">Ignite provides skilled AS-Level tutors in Dubai who offer focused academic assistance across all core and elective subjects. Our tutors help simplify advanced topics and provide clear explanations tailored to each student’s pace. We support learners through challenging coursework, assignments, and exam prep. <br />
            Tutors also train students in effective time management and exam techniques. This focused help is key to building academic strength early in the A Level journey. Our goal is to prepare students for long-term success.</p>          <br />

          <h2 className="title">AS Level Tuitions Designed To Boost Exam Performance</h2>
          <p className="subtitle">Our AS Level tuitions are designed to enhance subject understanding and improve exam results. Ignite’s expert tutors guide students through past paper practice, assessment criteria, and syllabus-based instruction. We focus on helping students write well-structured answers, apply concepts accurately, and manage exam stress. <br />
            Each session is aligned with the requirements of Edexcel, Cambridge, Oxford AQA boards. Students receive regular progress updates and revision tools. With the right support, they build momentum and achieve better scores.</p>          <br />

          <h2 className="title">AS Level Tutoring For Concept Clarity And Exam Success</h2>
          <p className="subtitle">Ignite offers AS Level tutoring that emphasizes concept clarity and confident exam performance. Students learn through guided sessions that focus on understanding theory and applying it in exams. The expert tutors at Ignite also provide strategies for tackling difficult questions, organizing answers, and managing time. <br />
            We support all major British curriculum boards and adapt lessons to suit individual learning needs. Visual aids, practice questions, and regular feedback ensure students stay on track. This approach helps learners feel prepared and capable ahead of exams.</p>          <br />

          <h2 className="title">Ignite Training Institute Best Tutors For Cambridge, Edexcel, Oxford International AQA</h2>
          <p className="subtitle">Ignite Training Institute is home to some of the best tutors for the British curriculum, including Cambridge, Edexcel, and Oxford International AQA. Our faculty is trained to teach according to board-specific requirements while offering individual attention to each student. We guide learners across subjects like Math, Science, Business Studies, English, & more. <br />
            With a focus on accuracy, application, and exam preparation, our tutors help students meet and exceed academic goals. Both online and in-person options are available for flexibility. Ignite’s proven approach ensures high student success rates.</p>          <br />

          <h2 className="title">Expert Support For British Curriculum Based AS And A Levels Coaching</h2>
          <p className="subtitle">Ignite provides expert coaching support for students following the British curriculum in AS and A Levels. We help learners understand complex subject material, develop critical thinking, and prepare effectively for final exams. Our coaching style includes lesson planning, timed practice, and targeted revision. <br />
            Students are supported throughout their academic journey with consistent feedback and mentorship. Whether your goal is to improve scores or deepen subject knowledge, we offer the tools and guidance needed. Our coaching empowers students to perform at their best.</p>          <br />

          <h2 className="title">How Ignite’s A Level Classes Guide Students To Success?</h2>
          <p className="subtitle">At Ignite Training Institute, our A Level classes are designed to build academic confidence, boost performance, and help students reach their target scores. Here's how we guide students step by step toward success in their A Level journey.</p>          <br />

          <ul className="subtitle">
            <li><strong>A Levels Past Paper Solving:</strong> Students regularly practice past papers to understand question patterns, improve accuracy, and build confidence under timed conditions.</li>
            <li><strong>Complete A Levels Revision:</strong> Ignite offers structured revision sessions that cover key topics, reinforce concepts, and help students retain what matters most for the exam.</li>
            <li><strong>A Levels Subjects Support:</strong> From Math and Sciences to Humanities and Business, students receive expert guidance across all A Level subjects based on their chosen board.</li>
            <li><strong>A Levels Personalized Training:</strong> Each student gets a customized study plan based on their strengths, weaknesses, and academic goals for focused and effective learning.</li>
            <li><strong>A Levels Syllabus Completion:</strong> Our tutors ensure the entire syllabus is covered well before exams, giving students enough time for revision, practice, and doubt clearing.</li>
            <li><strong>A Levels Exam Strategies:</strong> Students are trained in answer structuring, time management, and scoring techniques to perform with confidence in every exam paper.</li>
          </ul>
          <br />

          <h2 className="title">Exclusive A Levels Resources</h2>
          <br />

          <div class="schemalinks">
            <a href="https://ignitetraininginstitute.com/british-curriculum/">British Curriculum</a> | <a href="https://ignitetraininginstitute.com/a-level-qualifications/">A-Level</a> | <a href="http://as-levels">AS-Levels</a> | <a href="https://ignitetraininginstitute.com/a-level-qualifications/">A-Level Qualifications</a> | <a href="https://ignitetraininginstitute.com/as-level-university-requirement/">AS Level University Requirements</a> | <a href="https://ignitetraininginstitute.com/what-is-the-difference-between-edexcel-and-cambridge/">Edexcel & Cambridge</a> | <a href="https://ignitetraininginstitute.com/cambridge-a-level-courses/">Cambridge A-Level Courses</a> | <a href="https://ignitetraininginstitute.com/a-levels-subjects/">A Levels Subjects</a> | <a href="https://ignitetraininginstitute.com/why-choose-a-levels/">Why Choose A Levels?</a> | <a href="https://ignitetraininginstitute.com/a-level-grading-system/">A-Level Grading System</a> | <a href="https://ignitetraininginstitute.com/what-is-the-difference-between-edexcel-and-cambridge/">Difference Between Edexcel & Cambridge</a> | <a href="https://ignitetraininginstitute.com/a-level-subjects-for-pyschology/">A-Level Subjects For Psychology</a> | <a href="https://ignitetraininginstitute.com/a-level-arts-subjects/">A-Level Arts Subjects</a> | <a href="https://ignitetraininginstitute.com/a-levels-chemistry/">A Levels Chemistry</a> | <a href="https://ignitetraininginstitute.com/edexcel-a-level-economics/">Edexcel A Level Economics</a> | <a href="https://ignitetraininginstitute.com/a-level-physics-course/">A-Level Physics</a> | <a href="https://ignitetraininginstitute.com/a-level-maths-grades/">A Level Maths Grade</a> | <a href="https://ignitetraininginstitute.com/a-level-computer-science-course/">A Level Computer Science</a> | <a href="https://ignitetraininginstitute.com/triple-science-vs-combined-science-what-to-choose/">Triple Science VS Combined Science</a> | <a href="https://ignitetraininginstitute.com/indian-curriculum-vs-british-curriculum/">Indian Curriculum VS British Curriculum</a> | <a href="https://ignitetraininginstitute.com/difference-between-american-and-british-curriculum/">Difference Between American And British Curriculum</a> | <a href="https://ignitetraininginstitute.com/ib-curriculum-vs-british-curriculum/">IB Curriculum VS British Curriculum</a> | <a href="https://ignitetraininginstitute.com/a-levels-vs-cbse/">A-Levels VS CBSE</a> | <a href="https://ignitetraininginstitute.com/a-levels-vs-ibdp-comparison/">A-Levels VS IBDP</a> | <a href="https://ignitetraininginstitute.com/difference-between-gcse-and-a-levels/">Differences Between GCSE & A-Levels</a> | <a href="https://ignitetraininginstitute.com/a-level-schools-in-dubai/">A-Level Schools In Dubai</a> | <a href="https://ignitetraininginstitute.com/british-curriculum-schools/">British Curriculum Schools In Dubai</a> | <a href="https://ignitetraininginstitute.com/british-curriculum-schools-in-abu-dhabi/">British Curriculum Schools In Abu Dhabi</a> | <a href="https://ignitetraininginstitute.com/british-curriculum-schools-in-sharjah/">British Curriculum Schools In Sharjah</a>
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
