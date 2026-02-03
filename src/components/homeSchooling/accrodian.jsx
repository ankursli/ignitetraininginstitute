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
          <h2 className="title">Ignite Training Institute – Private Candidacy Support For IGCSE, A Levels, & AP</h2>
          <p className="subtitle">
            Ignite Training Institute offers expert tutoring support for students appearing as private candidates for IGCSE, A Levels, and Advanced Placements.<br />
            Our subject-specialist tutors help you prepare with focused, curriculum-aligned lessons, exam strategy sessions, and past paper practice. Whether you’re homeschooling, switching schools, or need flexible academic support, our team ensures you're exam-ready. Students also receive guidance on syllabus planning, coursework support (where applicable), and mock assessments. Ignite is the trusted academic partner for private candidates across Dubai.
          </p>
        </div>
        <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="expanded">
          <h2 className="title">Get Academic Support For IGCSE Private Candidates</h2>
          <p className="subtitle">
            Preparing for IGCSE as a private candidate?<br />
            Ignite’s tutoring support ensures you cover your subject syllabus thoroughly and stay on track. We offer targeted lessons, past paper sessions, and exam technique coaching tailored to your exam board, Cambridge or Edexcel. Our experienced tutors guide you through key concepts, manage your progress, and help you build confidence. Whether you’re homeschooled or retaking, we provide the structure and clarity you need to succeed.
          </p>          <br />


          <h2 className="title">Get Academic Support For A Levels Private Candidates</h2>
          <p className="subtitle">
            A Level private candidates at Ignite receive personalized academic guidance designed for independent learners.<br />
            We align our tutoring with the Edexcel, Cambridge, and AQA exam boards, focusing on building strong subject knowledge and exam technique. From intensive revision to coursework help (where applicable), we ensure every student is well-prepared for AS and A2 components. Flexible schedules and one-on-one support make it easy for private candidates to achieve high academic outcomes.
          </p>          <br />


          <h2 className="title">Get Academic Support For AP Private Candidates</h2>
          <p className="subtitle">
            Ignite offers focused tutoring support for AP private candidates aiming to earn college credits through high-scoring performances on the AP exams.<br />
            Our AP specialists coach students across subjects like Calculus, Physics, Chemistry, Economics, and more. Lessons are tailored to the College Board’s AP syllabus and include test prep strategies, concept deep dives, and mock testing. Whether you’re self-studying or combining AP with other curricula, Ignite helps you prepare with confidence.
          </p>          <br />


          <h2 className="title">Homeschooling In Dubai With Expert Academic Guidance</h2>
          <p className="subtitle">
            Ignite Training Institute supports homeschooling families in Dubai with structured tutoring programs across IGCSE, A Levels, IB, and AP.<br />
            Our experienced tutors work with students to build a strong academic foundation, provide one-on-one instruction, and help with exam readiness. We ensure students follow a clear learning path that matches their goals. With flexible schedules and expert tracking, Ignite makes homeschooling in Dubai both effective and enriching for learners.
          </p>          <br />


          <h2 className="title">Homeschooling In UAE For British Curriculum Success</h2>
          <p className="subtitle">
            Our British curriculum homeschooling support in the UAE helps students succeed in IGCSE and A Level pathways through guided learning, expert tutors, and structured content delivery.<br />
            Whether you're registered as a private candidate or following an online school, our tutors align their sessions to Edexcel and Cambridge standards. Ignite ensures that each student is fully supported, academically challenged, and confident for their exams and assessments.
          </p>          <br />


          <h2 className="title">Homeschooling Tutors Offering Personalized Learning Support</h2>
          <p className="subtitle">
            Ignite’s homeschooling tutors bring subject expertise and teaching flexibility to support students' learning at home.<br />
            We personalize each session based on the student’s pace, curriculum, and academic needs. From foundational concepts to advanced topics, our tutors provide clarity and engagement across subjects. Whether you're preparing for exams or building day-to-day academic skills, our team ensures a smooth homeschooling journey with measurable progress.
          </p>          <br />


          <h2 className="title">Online Homeschooling In Dubai With Flexible Scheduling</h2>
          <p className="subtitle">
            Ignite’s online homeschooling support allows students in Dubai to learn from anywhere with flexible, high-quality tutoring.<br />
            Ideal for learners who need customized schedules, our online classes are live, interactive, and curriculum-aligned. Tutors cover core subjects, exam preparation, and skill-building, all while keeping learners engaged and on track. We support British, IB, and American curriculum homeschooling pathways with complete academic assistance.
          </p>          <br />


          <h2 className="title">Exclusive Homeschooling Resources</h2>
          <br />
          <div class="schemalinks">
            <a href="https://ignitetraininginstitute.com/why-homeschooling-is-better/">Why Homeschooling Is Better</a> | <a href="https://ignitetraininginstitute.com/homeschooling-in-uae/">Homeschooling In UAE</a> | <a href="https://ignitetraininginstitute.com/how-does-being-homeschooled-work/">How Does Being Homeschooled Work</a>
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
