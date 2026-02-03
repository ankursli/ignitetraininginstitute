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
          <h2 className="title">Ignite Training Institute - IBDP Tuition In Dubai, UAE For Academic Success & Growth</h2>
          <p className="subtitle">Ignite Training Institute offers IBDP tuition in Dubai designed to unlock each student’s academic potential. With a focus on concept clarity, analytical skills, and exam techniques, our tuition sessions help students build a solid foundation in every subject. Lessons are customized based on the student’s IB year, subject combination, and learning style. <br />
            Whether a student needs help with HL Math or SL English, we tailor our approach to their needs. Regular assessments and feedback loops track progress and reinforce learning. Our goal is to nurture both academic performance and student confidence throughout the IB journey.</p>
        </div>
        <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="expanded">
          <h2 className="title">IB Diploma Tutoring In Dubai By Experienced Mentors</h2>
          <p className="subtitle">Our IB Diploma tutoring in Dubai is led by experienced mentors who understand the rigor of the IB Diploma. Every tutor at Ignite brings deep subject knowledge and IB exam insight to the table. From internal assessments (IAs) to extended essays (EE), our team supports students through every academic requirement. <br />
            Sessions are interactive, focused, and aligned with current IB standards. We guide students on how to approach exam questions, apply critical thinking, and manage time under pressure. With our mentoring, students gain the tools they need to excel both inside and outside the classroom.</p>          <br />

          <h2 className="title">IBDP Private Classes In Dubai For Targeted Exam Preparation</h2>
          <p className="subtitle">Ignite’s IBDP coaching in Dubai is tailored specifically for exam readiness. We focus on refining answer writing, mastering IB command terms, and solving past papers strategically. Students learn how to approach different paper formats, whether it is data analysis in the Sciences or structured essays in the Humanities. <br />
            Our coaching emphasizes high-impact revision techniques, timed mocks, and personalized feedback. Each session is built to improve performance and confidence in the lead-up to finals. With our focused coaching, students enter the IB exams feeling prepared and in control.</p>          <br />

          <h2 className="title">Achieve Your Dream Scores With Focused IBDP Coaching</h2>
          <p className="subtitle">At Ignite Training Institute, our focused IBDP coaching is designed to help students reach their target scores with confidence. We identify each student’s strengths and areas for improvement, then tailor sessions to match their academic goals. Through concept reinforcement, past paper practice, and exam-specific strategies, students build the skills needed to excel. <br />
            Our expert IB tutors offer personalized attention across all subjects, ensuring clarity in even the most challenging topics. Regular progress checks and feedback keep students on track. With the right guidance and structure, achieving your dream IBDP score becomes a realistic and rewarding goal.</p>          <br />

          <h2 className="title">IBDP Training In Dubai For Confident IB Performance</h2>
          <p className="subtitle">Our IBDP training in Dubai goes beyond traditional tutoring as it is a structured program built for long-term academic growth. At Ignite, we train students to think critically, write analytically, and apply concepts across subjects. <br />
            Through consistent practice, goal setting, and smart study plans, students steadily improve their scores and skills. Our training covers everything from core subject mastery to IA, TOK, and EE guidance. With regular performance tracking and mentor support, students develop the confidence to meet and exceed IB expectations.</p>          <br />

          <h2 className="title">IB Diploma Classes In Dubai With Complete Subject Support</h2>
          <p className="subtitle">Ignite’s IB Diploma classes in Dubai offer comprehensive support across all IBDP subjects from Group 1 to Group 6. Whether it’s HL Chemistry, SL Economics, Math AA, Language & Literature, Visual Arts, or any other IB subject, our expert tutors provide structured guidance aligned with the IB curriculum. <br />
            Students receive help with core concepts, exam strategies, and coursework requirements. Each session combines theory instruction, targeted revision, and assignment assistance to ensure subject mastery. We also provide detailed feedback on past papers, IAs, and practice essays. With small group and one-on-one options available, students receive the attention they need to excel. Our complete subject support ensures no topic is left unclear.</p>          <br />

          <h2 className="title">How Ignite’s IBDP Classes Guide Students To Success?</h2>
          <p className="subtitle">Ignite’s IBDP classes are structured to help students succeed through personalized guidance, subject mastery, and smart exam preparation.</p>          <br />

          <ul className="subtitle">
            <li><strong>IBDP Past Paper Solving:</strong> Students regularly practice past IB papers to improve question interpretation, apply command terms accurately, and build exam confidence.</li>
            <li><strong>Complete IBDP Revision:</strong> We provide focused revision sessions that cover key topics, address learning gaps, and reinforce understanding ahead of assessments.</li>
            <li><strong>IBDP Subjects Support:</strong> Support is available for all IBDP subjects across Groups 1 to 6, including guidance for IAs, EEs, and TOK components.</li>
            <li><strong>IBDP Personalized Training:</strong> Each student receives individualized attention and a tailored study plan based on their academic needs, learning style, and subject choices.</li>
            <li><strong>IBDP Syllabus Completion:</strong> Tutors ensure the full syllabus is covered on time, allowing students to focus on revision, practice, and deeper concept understanding.</li>
            <li><strong>IBDP Exam Strategies:</strong> We teach students how to manage time, structure responses, and use IB command terms effectively to maximize marks in each paper.</li>
          </ul>
          <br />
          <h2 className="title">Exclusive IBDP Resources</h2>
          <div class="schemalinks">
            <a href="https://ignitetraininginstitute.com/ib-diploma/">IB Diploma</a> | <a href="https://ignitetraininginstitute.com/benefits-of-ib-diploma/">Benefits Of The IB Diploma Programme</a> | <a href="https://ignitetraininginstitute.com/ib-bilingual-diploma/">IB Bilingual Diploma</a> | <a href="https://ignitetraininginstitute.com/ib-diploma-gpa-calculator/">IB Diploma GPA Calculator</a> | <a href="https://ignitetraininginstitute.com/ibdp-subjects-2/">IBDP Subjects</a> | <a href="https://ignitetraininginstitute.com/colleges-that-accept-ib-diploma/">Colleges That Accept IB Diploma</a> | <a href="https://ignitetraininginstitute.com/ib-curriculum-vs-british-curriculum/">IB Curriculum Vs British Curriculum</a> | <a href="https://ignitetraininginstitute.com/a-levels-vs-ibdp-comparison/">IB VS A Levels</a> | <a href="https://ignitetraininginstitute.com/ib-vs-igcse-program/">IB VS IGCSE</a> | <a href="https://ignitetraininginstitute.com/ib-vs-ap-comparison/">IB VS AP Difficulty</a> | <a href="https://ignitetraininginstitute.com/ib-certificate-vs-ib-diploma/">IB Certificate Vs IB Diploma</a> | <a href="https://ignitetraininginstitute.com/ib-vs-icse/">IB VS ICSE</a> | <a href="https://ignitetraininginstitute.com/ibcp-vs-ibdp/">IBCP VS IBDP</a> | <a href="https://ignitetraininginstitute.com/cbse-or-ib-board/">CBSE Or IB</a> | <a href="https://ignitetraininginstitute.com/a-levels-vs-ibdp-comparison/">A-Levels VS IBDP</a> | <a href="https://ignitetraininginstitute.com/ib-schools-in-dubai/">IB Schools In Dubai</a> | <a href="https://ignitetraininginstitute.com/ib-schools-in-abu-dhabi/">IB Schools In Abu Dhabi</a> | <a href="https://ignitetraininginstitute.com/ibdp-schools-in-dubai/">IBDP Schools In Dubai</a>
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
