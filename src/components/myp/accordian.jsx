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
          <h2 className="title">Ignite Training Institute - MYP Tuition In Dubai for Academic Support & Growth</h2>
          <p className="subtitle">Ignite Training Institute offers personalized MYP tuition in Dubai to support students through every stage of the IB Middle Years Programme. Our sessions focus on strengthening core understanding, refining academic skills, and bridging knowledge gaps. Whether students need help with Math, Sciences, Humanities, or Language Acquisition, our expert tutors adapt to their needs. <br />
            We offer structured lesson plans aligned with the MYP framework and assessment criteria. Regular practice, feedback, and concept revision help students stay confident and academically consistent. Our tuition model encourages growth, critical thinking, and a love for learning.</p>
        </div>
        <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="expanded">
          <h2 className="title">IB MYP Tutoring In Dubai By Subject-Specialist Mentors</h2>
          <p className="subtitle">At Ignite, students benefit from IB MYP tutoring in Dubai delivered by subject-specialist mentors with deep knowledge of the Middle Years Programme. Each tutor brings a student-focused approach, guiding learners through inquiry-based learning and interdisciplinary skills. Whether it's helping with assessments, projects, or day-to-day understanding, our mentors provide targeted academic support. <br />
            We work closely with students to build clarity, academic curiosity, and exam-readiness. Sessions are interactive and personalized, helping students achieve stronger academic outcomes. With mentor support, students are better prepared for both classroom success and the DP transition.</p>          <br />

          <h2 className="title">MYP Classes In Dubai Focused On Concept Mastery & Growth</h2>
          <p className="subtitle">Ignite’s MYP classes in Dubai are designed to help students build strong conceptual foundations and core academic skills. Our approach supports every subject area by breaking down complex topics and linking them to real-world understanding. We focus on analytical thinking, writing structure, math reasoning, and scientific inquiry to help students succeed across disciplines. <br />
            Each class is aligned with the MYP framework, including the criteria for formative and summative assessments. Students also receive guidance for personal projects and interdisciplinary learning tasks. Through regular evaluations and support, we aim to help students thrive in all subject areas.</p>          <br />

          <h2 className="title">Choose The Top Expert Support For The Middle Year Programme</h2>
          <p className="subtitle">Choosing the right academic support for the IB Middle Years Programme can make all the difference in a student’s journey. Ignite provides top-tier tutoring and classes designed to build confidence, subject knowledge, and essential skills. Our expert mentors understand the unique demands of the MYP curriculum and offer targeted guidance to meet them. <br />
            With flexible formats, continuous feedback, and skill-focused learning, we ensure students stay ahead. From project planning to assessment readiness, we cover it all. Give your child the expert academic support they need to succeed in the MYP years.</p>          <br />

          <h2 className="title">Middle Years Programme Tutoring In Dubai With Expert Guidance</h2>
          <p className="subtitle">Ignite Training Institute offers specialized tutoring for the Middle Years Programme (MYP), designed to support students in mastering concepts and excelling in their final years. Our tailored approach ensures every learner receives personalized attention, with a balance of subject mastery, skill-building, and exam readiness. <br />
            With experienced tutors, interactive lessons, and structured study plans, we help students strengthen their academic foundation and boost confidence. Regular assessments, feedback, and targeted review sessions further enhance learning outcomes. <br />
            Whether it’s Mathematics, Sciences, or Humanities, our MYP tutoring in Dubai equips students with the tools to succeed. At Ignite, we make learning engaging, effective, and aligned with each student’s unique goals.</p>          <br />

          <h2 className="title">Master Every Subject With Targeted IB MYP Coaching Support In UAE</h2>
          <p className="subtitle">Ignite’s targeted IB MYP coaching in the UAE helps students master every subject through strategic and skill-based instruction. Our coaching plans are individualized, ensuring that each student receives support where they need it most. Whether it’s Math, Science, English, or Design, we help students understand the subject deeply and meet IB assessment expectations. <br />
            Past paper practice, assignment guidance, and personal project support are all part of our approach. We build study habits and skills that stay with students well beyond the MYP years. With the right coaching, students develop confidence across the entire curriculum.</p>          <br />

          <h2 className="title">How Ignite’s MYP Classes Guide Students To Success?</h2>
          <p className="subtitle">Ignite’s MYP classes are designed to build strong academic foundations, critical thinking, and the skills students need to thrive in the IB Middle Years Programme.</p>          <br />

          <ul className="subtitle">
            <li><strong>MYP Past Paper Solving:</strong> Students solve practice questions modeled on MYP assessment criteria to improve clarity, application, and exam technique.</li>
            <li><strong>Complete MYP Revision:</strong> Our revision sessions help reinforce key concepts, clarify doubts, and prepare students for both formative and summative assessments.</li>
            <li><strong>MYP Subjects Support:</strong> We offer expert guidance across all MYP subjects, including Mathematics, Sciences, English, Humanities, and more.</li>
            <li><strong>MYP Personalized Training:</strong> Each student receives customized support tailored to their learning pace, subject needs, and academic goals.</li>
            <li><strong>MYP Syllabus Completion:</strong> Tutors ensure the timely completion of all subject units while aligning lessons with the MYP framework and learning objectives.</li>
            <li><strong>MYP Exam Strategies:</strong> We train students in interpreting command terms, structuring answers, and using ATL skills to perform confidently in assessments.</li>
          </ul>
          <br />

          <h2 className="title">Exclusive MYP Resources</h2>
          <br />
          <div class="schemalinks">
            <a href="https://ignitetraininginstitute.com/ib-myp-programme/">IB MYP Programme Guide</a> | <a href="https://ignitetraininginstitute.com/is-myp-certificate-important/">Is MYP Certificate Important</a> | <a href="https://ignitetraininginstitute.com/ib-schools-in-dubai/">IB Schools In Dubai</a> | <a href="https://ignitetraininginstitute.com/ib-schools-in-abu-dhabi/">IB Schools In Abu Dhabi</a> | <a href="https://ignitetraininginstitute.com/ibdp-schools-in-dubai/">IBDP Schools In Dubai</a>
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
