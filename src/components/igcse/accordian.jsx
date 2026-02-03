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
          <h2 className="title">Ignite Training Institute - IGCSE Tuition In Dubai, UAE For A Focused Academic Success</h2>
          <p className="subtitle">
            Ignite Training Institute offers IGCSE tuition in Dubai and across the UAE to help students build strong academic foundations. Our experienced tutors provide structured lessons aligned with major boards like Edexcel, Cambridge, and Oxford AQA.
            <br />
            Students receive step-by-step support in subjects like Math, Sciences, English, and Business Studies. Tuition sessions focus on concept clarity, application, and exam preparation. Regular practice with past papers and targeted revision builds student confidence. With Ignite’s expert guidance, academic success becomes a realistic goal.
          </p>
        </div>
        <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="expanded">
          <h2 className="title">IGCSE Tutoring In Dubai With Expert Subject Support</h2>
          <p className="subtitle">
            At Ignite, students benefit from expert-led IGCSE tutoring in Dubai across all core and elective subjects. Our subject specialists offer in-depth explanations, practice questions, and assessment strategies tailored to individual needs. Each session is interactive and goal-oriented, focusing on helping students overcome their learning gaps.
            <br />
            Whether your child needs help with Physics calculations or English essay writing, we offer structured support. Tutors also guide students on how to approach different paper formats. This focused tutoring helps students stay on track and perform better.
          </p>          <br />


          <h2 className="title">GCSE Tutors In Dubai For Personalized Learning & Real Results</h2>
          <p className="subtitle">
            Ignite’s GCSE tutors in Dubai provide personalized learning plans that cater to each student’s academic goals and challenges. Whether your child is preparing for final exams or catching up on tricky topics, our tutors are here to help. We support students in Math, English, Sciences, and more, following UK curriculum standards.
            <br />
            Sessions include skill-building, exam techniques, and consistent feedback to ensure steady progress. With both in-person and online options available, students receive flexible and focused academic support. The result is improved understanding, confidence, and grades.
          </p>          <br />


          <h2 className="title">IGCSE Coaching That Builds Confidence, Clarity & Top Exam Scores</h2>
          <p className="subtitle">
            Ignite’s IGCSE coaching program is designed to help students succeed through clear instruction, practice, and expert feedback. We break down complex concepts, teach smart problem-solving strategies, and help students master exam formats. Coaching includes targeted revision, timed practice, and personalized tips for improvement.
            <br />
            Tutors ensure students feel confident in both their understanding and performance. From subject knowledge to exam technique, our coaching covers it all. With Ignite, students are empowered to aim for top scores in their IGCSE exams.
          </p>          <br />


          <h2 className="title">How Ignite’s IGCSE Classes Guide Students To Success?</h2>
          <ul>
            <li>IGCSE Past Paper Solving – Students practice a wide range of past papers to get familiar with question patterns, strengthen answer writing, and boost time management.</li>
            <li>Complete IGCSE Revision – We offer structured revision plans that revisit key concepts, target weak areas, and ensure students are fully prepared before exams.</li>
            <li>IGCSE Subjects Support – From Math and Sciences to English and Business Studies, we provide expert support for all major IGCSE subjects and exam boards.</li>
            <li>IGCSE Personalized Training – Each student follows a tailored learning plan based on their strengths, challenges, and academic goals for focused progress.</li>
            <li>IGCSE Syllabus Completion – Our tutors ensure the complete syllabus is covered in a timely and thorough manner, giving students ample time to revise and practice.</li>
            <li>IGCSE Exam Strategies – Students are trained in exam techniques, including time management, interpreting command words, and structuring responses for top marks.</li>
          </ul>
          <br />
          <h2 className="title">Exclusive IGCSE Resources</h2>
          <br />
          <div class="schemalinks">
            <a href="https://ignitetraininginstitute.com/british-curriculum/">British Curriculum</a> | <a href="https://ignitetraininginstitute.com/gcse-guide/">GCSE</a> | <a href="https://ignitetraininginstitute.com/igcse-curriculum/">What Is IGCSE Curriculum</a> | <a href="https://ignitetraininginstitute.com/cambridge-igcse-guide/">Cambridge IGCSE</a> | <a href="https://ignitetraininginstitute.com/what-is-aqa-gcse/">What Is AQA GCSE</a> | <a href="https://ignitetraininginstitute.com/what-is-the-difference-between-edexcel-and-cambridge/">Edexcel & Cambridge</a> | <a href="https://ignitetraininginstitute.com/pearson-edexcel-igcse/">Pearson Edexcel IGCSE</a> | <a href="https://ignitetraininginstitute.com/cambridge-igcse-guide/">Cambridge IGCSE</a> | <a href="https://ignitetraininginstitute.com/igcse-exams/">IGCSE Exams 2025</a> | <a href="https://ignitetraininginstitute.com/igcse-grades-explained/">IGCSE Grades</a> | <a href="https://ignitetraininginstitute.com/gcse-grading-system/">GCSE Grading System</a> | <a href="https://ignitetraininginstitute.com/gcse-grading-system/">New Vs Old GCSE Grading System</a> | <a href="https://ignitetraininginstitute.com/are-gcses-important/">Are GCSEs Important</a> | <a href="https://ignitetraininginstitute.com/how-to-study-for-igcse/">How To Study For IGCSE</a> | <a href="https://ignitetraininginstitute.com/universities-that-accept-igcse-certificate/">Universities That Accept IGCSE Certificate In USA & UK</a> | <a href="https://ignitetraininginstitute.com/igcse-chemistry/">IGCSE Chemistry</a> | <a href="https://ignitetraininginstitute.com/what-do-you-do-in-gcse-photography/">GCSE Photography</a> | <a href="https://ignitetraininginstitute.com/igcse-accounting-syllabus-overview-key-takeaways/">IGCSE Accounting</a> | <a href="https://ignitetraininginstitute.com/igcse-biology/">IGCSE Biology</a> | <a href="https://ignitetraininginstitute.com/igcse-physics/">IGCSE Physics</a> | <a href="https://ignitetraininginstitute.com/igcse-computer-science/">IGCSE Computer Science</a> | <a href="https://ignitetraininginstitute.com/edexcel-igcse-biology-syllabus/">Edexcel IGCSE Biology</a> | <a href="https://ignitetraininginstitute.com/how-to-study-for-igcse-biology/">How To Study For IGCSE Biology</a> | <a href="https://ignitetraininginstitute.com/how-to-revise-for-business-studies-gcse/">How To Revise For Business Studies GCSE</a> | <a href="https://ignitetraininginstitute.com/aqa-vs-cie/">AQA VS CIE</a> | <a href="https://ignitetraininginstitute.com/igcse-vs-cbse/">IGCSE VS CBSE</a> | <a href="https://ignitetraininginstitute.com/triple-science-vs-combined-science-what-to-choose/">Triple Science VS Combined Science</a> | <a href="https://ignitetraininginstitute.com/easiest-igcse-subjects/">Easiest IGCSE Subjects</a> | <a href="https://ignitetraininginstitute.com/indian-curriculum-vs-british-curriculum/">Indian Curriculum VS British Curriculum</a> | <a href="https://ignitetraininginstitute.com/difference-between-american-and-british-curriculum/">Difference Between American And British Curriculum</a> | <a href="https://ignitetraininginstitute.com/ib-curriculum-vs-british-curriculum/">IB Curriculum VS British Curriculum</a> | <a href="https://ignitetraininginstitute.com/igcse-vs-gcse-comparison/">IGCSE VS GCSE</a> | <a href="https://ignitetraininginstitute.com/difference-between-gcse-and-a-levels/">Differences Between GCSE & A-Levels</a> | <a href="https://ignitetraininginstitute.com/ib-vs-igcse-program/">IB VS IGCSE</a> | <a href="https://ignitetraininginstitute.com/sat-vs-igcse/">SAT VS IGCSE</a> | <a href="https://ignitetraininginstitute.com/what-is-the-difference-between-edexcel-and-cambridge/">Difference Between Edexcel & Cambridge</a> | <a href="https://ignitetraininginstitute.com/british-curriculum-schools/">British Curriculum Schools In Dubai</a> | <a href="https://ignitetraininginstitute.com/british-curriculum-schools-in-abu-dhabi/">British Curriculum Schools In Abu Dhabi</a> | <a href="https://ignitetraininginstitute.com/british-curriculum-schools-in-sharjah/">British Curriculum Schools In Sharjah</a>
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
