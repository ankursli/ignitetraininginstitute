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
          <h2 className="title">Expert Physics Tutor In Dubai UAE For Academic Confidence</h2>
          <p className="subtitle">Ignite’s expert Physics tutors in Dubai offer in-depth guidance tailored to every learner’s pace and goals. With strong fundamentals and conceptual clarity, students develop the confidence needed to handle even the most complex topics. Our teaching methods encourage curiosity, critical thinking, and real-world application. Whether you’re aiming for higher grades or stronger conceptual understanding, we’re here to help. Students benefit from a structured yet flexible approach. Each lesson builds clarity, momentum, and measurable progress.</p>
        </div>
        <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="expanded">
          <h2 className="title">Find The Best Physics Tutor In Dubai For You With Ignite Training Institute</h2>
          <p className="subtitle">At Ignite, we help you find the right Physics tutor in Dubai to match your academic needs and learning style. Our qualified tutors offer both academic expertise and mentorship, helping students overcome challenges with ease. Whether it's revision support or concept mastery, we ensure a personalized and results-driven approach. With a proven track record of success, our students consistently achieve top results. Discover a tutor who truly understands your goals and helps you reach them. Start building your academic future with Ignite.</p>          <br />

          <h2 className="title">Personalized Physics Tuition In Dubai For Every Student</h2>
          <p className="subtitle">We believe every learner deserves tailored support, and that’s what our personalized Physics tuition in Dubai delivers. Our tutors focus on individual strengths, learning gaps, and curriculum requirements to craft lessons that make a difference. With one-on-one attention and real-time feedback, students learn faster and retain more. We cover IB, IGCSE, A-Levels, and other major curricula with precision and depth. Whether it’s problem-solving, lab work, or theory, we support holistic understanding. Personalized learning leads to consistent growth and confidence.</p>          <br />

          <h2 className="title">Score Higher With Targeted Physics Coaching In Dubai Today</h2>
          <p className="subtitle">Boost your Physics performance with targeted coaching designed for exam success. At Ignite, our tutors identify weak areas early and help you master them through focused practice and proven strategies. From foundational concepts to advanced applications, every session is aligned with your academic goals. We offer timed assessments, review sessions, and revision drills to build exam readiness. Whether you need help with mechanics, electricity, or thermodynamics, we’ve got you covered. High scores start with high-impact coaching.</p>          <br />

          <h2 className="title">Physics Classes In Dubai For Academic Excellence & Exam Support</h2>
          <p className="subtitle">Join our Physics classes in Dubai to experience structured learning and impactful exam support. Taught by experienced educators, our classes combine strong theoretical grounding with practical problem-solving. We help students from diverse curricula prepare for their board exams with clarity and confidence. Through interactive learning and regular assessments, we track performance and encourage improvement. Whether you’re in IB, IGCSE, or A-Levels, we tailor content to suit your needs. Excellence is not just a goal – it’s the result of consistent support.</p>          <br />

          <h2 className="title">Top-Notch Physics Tutoring In Dubai For Stronger Skills</h2>
          <p className="subtitle">Our Physics tutoring program in Dubai is built to sharpen skills and deepen understanding. Students are encouraged to ask questions, explore concepts, and engage in active learning. With our expert guidance, topics like kinematics, energy, and magnetism become easy to grasp. Tutors provide timely feedback, performance tracking, and continuous motivation. Whether it’s grade improvement or concept mastery, we help students progress with confidence. Unlock your true potential with top-quality tutoring that delivers results.</p>          <br />

          <h2 className="title">Online Physics Tutor In Dubai Helping Students Build Confidence</h2>
          <p className="subtitle">Study from anywhere in Dubai with our expert online Physics tutors. With interactive whiteboards, shared resources, and live explanations, students enjoy a classroom-like experience from the comfort of home. Our digital learning sessions are flexible, effective, and fully personalized to suit your schedule and pace. Whether it’s IB, IGCSE, or A-Levels, our online tutoring ensures you’re always supported. Get help before exams, clarify doubts instantly, and improve steadily. Confidence in Physics starts with the right online tutor.</p>          <br />

          <h2 className="title">Trusted Physics Learning Centre In Dubai For Exam Success</h2>
          <p className="subtitle">Ignite is a trusted name for Physics education in Dubai, known for its rigorous academic standards and caring approach. Our learning centre is equipped to support students across all major curricula, preparing them for academic and exam success. With structured study plans, mock tests, and constant mentorship, we help students build exam strategies and subject mastery. Physics is no longer intimidating with the right guidance in place. Our results speak for themselves – and so do our students’ achievements.</p>          <br />

          <h2 className="title">Looking For An Physics Tutor Near Me In Dubai? Get Help Today!</h2>
          <p className="subtitle">If you’re searching for a “Physics tutor near me” in Dubai, Ignite is here with the perfect match. Our local tutors bring deep curriculum knowledge and a personalized touch to every session. Get the flexibility of choosing between home tutoring, centre-based sessions, or online classes. Students benefit from individual attention, proven techniques, and consistent progress tracking. Don’t wait to fall behind – get expert support right where you are. Start your journey to better grades and stronger confidence now.</p>          <br />

          <h2 className="title">Get Better Results With IB Physics Tutor In Dubai Support</h2>
          <p className="subtitle">Our IB Physics tutors in Dubai specialize in HL and SL support, guiding students through a challenging and concept-heavy curriculum. We focus on strengthening IA preparation, lab report clarity, and command terms for exams. Tutors break down complex theories into digestible parts, using real-life examples to enhance understanding. We ensure students are confident with calculations, evaluations, and application-based questions. Our proven track record includes multiple 6s and 7s from past students. With the right support, IB Physics becomes manageable and even enjoyable.</p>          <br />

          <h2 className="title">Experienced IGCSE Physics Tutor In Dubai For Exam Prep</h2>
          <p className="subtitle">Our IGCSE Physics tutors in Dubai are experienced in both Edexcel and Cambridge syllabi, offering exam-focused guidance and conceptual clarity. From forces and motion to energy transfers and electricity, we help students tackle the most challenging topics. Every lesson is backed with past paper practice, tips on marking schemes, and revision strategies. Students learn how to approach 4-mark and 6-mark questions with precision and confidence. We create a supportive, structured learning space that encourages progress. With our help, exam prep becomes effective and less stressful.</p>          <br />

          <h2 className="title">Achieve More With A Levels Physics Tutor In Dubai Help</h2>
          <p className="subtitle">Take your grades higher with our expert A Levels Physics tutors in Dubai. We simplify complex topics such as quantum physics, nuclear reactions, and thermodynamics to ensure clear understanding. Our tutors emphasize real-world application and step-by-step problem solving. Students also receive past paper practice, exam tips, and targeted feedback. Whether you're pursuing AQA, Edexcel, or Cambridge, we align our sessions to your board. With consistent guidance, high achievement in A Levels Physics is within reach.</p>          <br />

          <h2 className="title">One-On-One AS Levels Physics Tutor In Dubai For Assured Improvement</h2>
          <p className="subtitle">Our one-on-one AS Levels Physics tutoring in Dubai offers fully personalized support to help students overcome academic hurdles and achieve better results. Tutors focus on key areas like wave motion, circuits, and forces, making sure you grasp each topic completely. With tailored explanations, regular quizzes, and mentorship, students grow in confidence and competence. We help you prepare thoroughly for internal assessments and board exams. With our dedicated one-on-one sessions, improvement is not just possible – it’s guaranteed.</p>          <br />

          <h2 className="title">AP Physics Tutor In Dubai Helping Students Excel With Confidence</h2>
          <p className="subtitle">Mastering AP Physics requires strong conceptual clarity, problem-solving skills, and consistent practice. At Ignite Training Institute, our AP Physics tutors in Dubai help students tackle complex topics like mechanics, electricity, magnetism, and waves with ease. Personalized sessions are designed to strengthen weak areas, improve analytical thinking, and boost exam performance. With exam-focused strategies, practice tests, and one-on-one guidance, students gain confidence in solving challenging problems. Our tutors ensure students not only prepare for AP exams but also build a strong foundation for future STEM studies.</p>
          <br /><br />
          <h2><strong>Ignite's Exclusive Learning Resources </strong></h2>
          <h3><strong>IB Resources</strong></h3>
          <p><strong><a href="https://ignitetraininginstitute.com/ib-curriculum-blog/">IB Curriculum</a> | <a href="https://ignitetraininginstitute.com/ib-diploma/">IB Diploma</a> | <a href="https://ignitetraininginstitute.com/guide-on-ib-programmes/">IB Programmes</a> | <a href="https://ignitetraininginstitute.com/ib-myp-programme/">IB MYP Programme Guide</a> | <a href="https://ignitetraininginstitute.com/ib-program-pros-and-cons/">IB Program Pros & Cons</a> | <a href="https://ignitetraininginstitute.com/benefits-of-ib-curriculum/">Benefits Of IB Curriculum</a> | <a href="https://ignitetraininginstitute.com/benefits-of-ib-diploma/">Benefits Of The IB Diploma Programme</a> | <a href="https://ignitetraininginstitute.com/is-myp-certificate-important/">Is MYP Certificate Important</a> | <a href="https://ignitetraininginstitute.com/how-to-study-for-ib-exams/">How To Study For IB Exams</a> | <a href="https://ignitetraininginstitute.com/ibdp-syllabus-changes/">IB Syllabus Updates</a> | <a href="https://ignitetraininginstitute.com/ib-bilingual-diploma/">IB Bilingual Diploma</a> | <a href="https://ignitetraininginstitute.com/how-to-get-good-grades-in-ib/">How To Get Good Grades In IB</a> | <a href="https://ignitetraininginstitute.com/ib-diploma-gpa-calculator/">IB Diploma GPA Calculator</a> | <a href="https://ignitetraininginstitute.com/ib-subject-choices/">IB Subject Choices</a> | <a href="https://ignitetraininginstitute.com/colleges-that-accept-ib-diploma/">Colleges That Accept IB Diploma</a> | <a href="https://ignitetraininginstitute.com/what-is-an-ib-world-school/">What Is An IB World School</a> | <a href="https://ignitetraininginstitute.com/ib-grades-explained/">IB Grades Explained</a> | <a href="https://ignitetraininginstitute.com/ib-cas-program/">CAS IB</a> | <a href="https://ignitetraininginstitute.com/ib-cas-ideas/">IB CAS Ideas</a> | <a href="https://ignitetraininginstitute.com/what-is-ib-extended-essay/">What Is An Extended Essay For IB</a> | <a href="https://ignitetraininginstitute.com/ib-learner-profile/">IB Learner Profile Attributes</a> | <a href="https://ignitetraininginstitute.com/ib-career-related-programme-guide/">IB Career Related Programme</a> | | <a href="https://ignitetraininginstitute.com/ib-physics/">IB Physics</a> | <a href="https://ignitetraininginstitute.com/ib-maths/">IB Maths</a> | <a href="https://ignitetraininginstitute.com/ib-computer-science-syllabus/">IB Computer Science Syllabus</a> | <a href="https://ignitetraininginstitute.com/ib-economics-exam/">IB Economics</a> | <a href="https://ignitetraininginstitute.com/ib-economics-exam/">IB Economics Exam</a> | <a href="https://ignitetraininginstitute.com/ib-curriculum-vs-british-curriculum/">IB Curriculum Vs British Curriculum</a> | <a href="https://ignitetraininginstitute.com/a-levels-vs-ibdp-comparison/">IB VS A Levels</a> | <a href="https://ignitetraininginstitute.com/ib-vs-igcse-program/">IB VS IGCSE</a> | <a href="https://ignitetraininginstitute.com/ib-vs-ap-comparison/">IB VS AP Difficulty</a> | <a href="https://ignitetraininginstitute.com/ib-certificate-vs-ib-diploma/">IB Certificate Vs IB Diploma</a> | <a href="https://ignitetraininginstitute.com/ib-vs-icse/">IB VS ICSE</a> | <a href="https://ignitetraininginstitute.com/ibcp-vs-ibdp/">IBCP VS IBDP</a> | <a href="https://ignitetraininginstitute.com/cbse-or-ib-board/">CBSE Or IB</a> | <a href="https://ignitetraininginstitute.com/a-levels-vs-ibdp-comparison/">A-Levels VS IBDP</a> | <a href="https://ignitetraininginstitute.com/ib-schools-in-dubai/">IB Schools In Dubai</a> | <a href="https://ignitetraininginstitute.com/ib-schools-in-abu-dhabi/">IB Schools In Abu Dhabi</a> | <a href="https://ignitetraininginstitute.com/ibdp-schools-in-dubai/">IBDP Schools In Dubai</a></strong></p>
          <h3><strong>Exclusive British Curriculum Resources</strong></h3>
          <p><strong><a href="https://ignitetraininginstitute.com/british-curriculum/">British Curriculum</a> | <a href="https://ignitetraininginstitute.com/a-level-qualifications/">A-Level</a> | <a href="http://as-levels">AS-Levels</a> | <a href="https://ignitetraininginstitute.com/gcse-guide/">GCSE</a> | <a href="https://ignitetraininginstitute.com/igcse-curriculum/">What Is IGCSE Curriculum</a> | <a href="https://ignitetraininginstitute.com/a-level-qualifications/">A-Level Qualifications</a> | <a href="https://ignitetraininginstitute.com/cambridge-igcse-guide/">Cambridge IGCSE</a> |  <a href="https://ignitetraininginstitute.com/cambridge-a-level-courses/">Cambridge A-Level Courses</a> | <a href="https://ignitetraininginstitute.com/what-is-aqa-gcse/">What Is AQA GCSE</a> | <a href="https://ignitetraininginstitute.com/igcse-exams/">IGCSE Exams 2025</a> | <a href="https://ignitetraininginstitute.com/igcse-grades-explained/">IGCSE Grades</a> | <a href="https://ignitetraininginstitute.com/what-is-the-difference-between-edexcel-and-cambridge/">Edexcel & Cambridge</a> | <a href="https://ignitetraininginstitute.com/a-levels-subjects/">A Levels Subjects</a> | <a href="https://ignitetraininginstitute.com/pearson-edexcel-igcse/">Pearson Edexcel IGCSE</a> | <a href="https://ignitetraininginstitute.com/cambridge-igcse-guide/">Cambridge IGCSE</a> | <a href="https://ignitetraininginstitute.com/why-choose-a-levels/">Why Choose A Levels?</a> |  <a href="https://ignitetraininginstitute.com/are-gcses-important/">Are GCSEs Important</a> | <a href="https://ignitetraininginstitute.com/gcse-grading-system/">New Vs Old GCSE Grading System</a> | <a href="https://ignitetraininginstitute.com/a-level-grading-system/">A-Level Grading System</a> | <a href="https://ignitetraininginstitute.com/universities-that-accept-igcse-certificate/">Universities That Accept IGCSE Certificate In USA & UK</a> | <a href="https://ignitetraininginstitute.com/as-level-university-requirement/">AS Level University Requirements</a> | <a href="https://ignitetraininginstitute.com/what-is-the-difference-between-edexcel-and-cambridge/">Difference Between Edexcel & Cambridge</a> | <a href="https://ignitetraininginstitute.com/a-level-subjects-for-pyschology/">A-Level Subjects For Psychology</a> | <a href="https://ignitetraininginstitute.com/a-level-arts-subjects/">A-Level Arts Subjects</a> | <a href="https://ignitetraininginstitute.com/edexcel-a-level-economics/">Edexcel A Level Economics</a> |  <a href="https://ignitetraininginstitute.com/a-levels-chemistry/">A Levels Chemistry</a> | <a href="https://ignitetraininginstitute.com/a-level-physics-course/">A-Level Physics</a> | <a href="https://ignitetraininginstitute.com/a-level-maths-grades/">A Level Maths Grade</a> | <a href="https://ignitetraininginstitute.com/igcse-chemistry/">IGCSE Chemistry</a> | <a href="https://ignitetraininginstitute.com/what-do-you-do-in-gcse-photography/">GCSE Photography</a> | <a href="https://ignitetraininginstitute.com/igcse-accounting-syllabus-overview-key-takeaways/">IGCSE Accounting</a> | <a href="https://ignitetraininginstitute.com/igcse-biology/">IGCSE Biology</a> | <a href="https://ignitetraininginstitute.com/igcse-physics/">IGCSE Physics</a> | <a href="https://ignitetraininginstitute.com/how-to-study-for-igcse/">How To Study For IGCSE</a> | <a href="https://ignitetraininginstitute.com/how-to-study-for-igcse-biology/">How To Study For IGCSE Biology</a> | <a href="https://ignitetraininginstitute.com/how-to-revise-for-business-studies-gcse/">How To Revise For Business Studies GCSE</a> | <a href="https://ignitetraininginstitute.com/igcse-computer-science/">IGCSE Computer Science</a> | <a href="https://ignitetraininginstitute.com/edexcel-igcse-biology-syllabus/">Edexcel IGCSE Biology</a> | <a href="https://ignitetraininginstitute.com/aqa-vs-cie/">AQA VS CIE</a> | <a href="https://ignitetraininginstitute.com/igcse-vs-cbse/">IGCSE VS CBSE</a> | <a href="https://ignitetraininginstitute.com/triple-science-vs-combined-science-what-to-choose/">Triple Science VS Combined Science</a> | <a href="https://ignitetraininginstitute.com/easiest-igcse-subjects/">Easiest IGCSE Subjects</a> | <a href="https://ignitetraininginstitute.com/indian-curriculum-vs-british-curriculum/">Indian Curriculum VS British Curriculum</a> | <a href="https://ignitetraininginstitute.com/difference-between-american-and-british-curriculum/">Difference Between American And British Curriculum</a> | <a href="https://ignitetraininginstitute.com/ib-curriculum-vs-british-curriculum/">IB Curriculum VS British Curriculum</a> | <a href="https://ignitetraininginstitute.com/a-levels-vs-cbse/">A-Levels VS CBSE</a> | <a href="https://ignitetraininginstitute.com/a-levels-vs-ibdp-comparison/">A-Levels VS IBDP</a> | <a href="https://ignitetraininginstitute.com/igcse-vs-gcse-comparison/">IGCSE VS GCSE</a> | <a href="https://ignitetraininginstitute.com/difference-between-gcse-and-a-levels/">Differences Between GCSE & A-Levels</a> | <a href="https://ignitetraininginstitute.com/ib-vs-igcse-program/">IB VS IGCSE</a> | <a href="https://ignitetraininginstitute.com/sat-vs-igcse/">SAT VS IGCSE</a> | <a href="https://ignitetraininginstitute.com/british-curriculum-schools/">British Curriculum Schools In Dubai</a> | <a href="https://ignitetraininginstitute.com/british-curriculum-schools-in-abu-dhabi/">British Curriculum Schools In Abu Dhabi</a> | <a href="https://ignitetraininginstitute.com/british-curriculum-schools-in-sharjah/">British Curriculum Schools In Sharjah</a> |</strong></p>
          <h3><strong>Exclusive AP Resources</strong></h3>
          <p><strong><a href="https://ignitetraininginstitute.com/advanced-placements/">Advanced Placements</a> | <a href="https://ignitetraininginstitute.com/ap-scores/">AP Scores</a> | <a href="https://ignitetraininginstitute.com/ib-vs-ap-comparison/">IB VS AP</a> | <a href="https://ignitetraininginstitute.com/ap-courses/">AP Courses</a> | <a href="https://ignitetraininginstitute.com/ap-exams-overview/">AP Exams</a> | <a href="https://ignitetraininginstitute.com/what-is-an-ap-seminar-exam/">AP Seminar Exam</a> | <a href="https://ignitetraininginstitute.com/are-ap-exams-hard/">Are AP Exams Hard</a> | <a href="https://ignitetraininginstitute.com/easiest-ap-exams/">Easiest AP Exams</a> | <a href="https://ignitetraininginstitute.com/ap-exam-test-dates/">AP Exam Test Dates</a> | <a href="https://ignitetraininginstitute.com/how-many-ap-classes-to-take/">AP Classes To Take</a> | <a href="https://ignitetraininginstitute.com/do-ap-classes-count-as-college-credit/">Do AP Classes Count As College Credit</a> | <a href="https://ignitetraininginstitute.com/how-to-get-a-5-on-ap-statistics/">How To Get A 5 On The AP Statistics</a> | <a href="https://ignitetraininginstitute.com/ap-computer-science-principles-vs-ap-computer-science-a/">AP Computer Science Principles VS AP Computer Science A</a> | <a href="https://ignitetraininginstitute.com/is-ap-statistics-easy/">Is AP Statistics Easy</a> | <a href="https://ignitetraininginstitute.com/ap-courses-for-engineering/">AP Courses For Engineering</a> | <a href="https://ignitetraininginstitute.com/ap-biology/">AP Biology</a> | <a href="https://ignitetraininginstitute.com/what-is-ap-chemistry-exam/">AP Chemistry Exam</a> | <a href="https://ignitetraininginstitute.com/how-to-register-for-ap-exams/">How To Register For AP Exams</a> | </strong></p>
          <h3><strong>Exclusive Homeschooling Resources</strong></h3>
          <p><strong><a href="https://ignitetraininginstitute.com/why-homeschooling-is-better/">Why Homeschooling Is Better</a> | <a href="https://ignitetraininginstitute.com/homeschooling-in-uae/">Homeschooling In UAE</a> | <a href="https://ignitetraininginstitute.com/how-does-being-homeschooled-work/">How Does Being Homeschooled Work</a></strong></p>

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
