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
          <h2 className="title">Ignite Training Institute – Trusted Tutors In Dubai For Academic Excellence</h2>
          <p className="subtitle">
            At Ignite Training Institute, we believe that academic excellence is not just about high scores, it's about nurturing curious minds and building a solid foundation for future success.<br />
            Our tutors are carefully selected for their subject expertise and ability to inspire students. Whether your child is aiming for better grades or a deeper understanding, our approach blends academic rigor with personalized mentorship to unlock their full potential.
          </p>        </div>
        <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="expanded">
          <h2 className="title">Personalized Tuitions In Dubai For All Curricula – IB, IGCSE, A Levels, & AP</h2>
          <p className="subtitle">
            Every curriculum has its unique demands, and every student has a unique learning style.<br />
            At Ignite, we offer tailored tutoring programs that align with the specific requirements of IB, IGCSE, A Levels, and AP. From reinforcing fundamental concepts to advanced exam strategies, we provide structured, goal-oriented sessions that help students stay ahead. Our tutors adapt to each learner’s pace, ensuring both confidence and competence grow hand-in-hand.
          </p>          <br />


          <h2 className="title">Expert Tutoring In Dubai, UAE To Boost Student Confidence</h2>
          <p className="subtitle">
            True learning begins when students feel confident in their abilities.<br />
            Our expert tutors foster an encouraging environment where questions are welcomed, mistakes are embraced, and progress is celebrated. Through ongoing assessments, timely feedback, and personalized attention, we help students overcome academic anxieties and step into their full potential with renewed self-belief and enthusiasm for learning.
          </p>          <br />


          <h2 className="title">Leading Tuition Centre In Dubai For IGCSE, A-Levels & More</h2>
          <p className="subtitle">
            With years of experience and a proven track record, Ignite stands out as a leading tuition provider for international and British curricula.<br />
            Our structured programs for IGCSE, A-Levels, and more are designed not just to prepare students for exams, but to cultivate analytical thinking, problem-solving abilities, and academic independence. We work closely with families and schools to ensure holistic progress and long-term achievement.
          </p>          <br />


          <h2 className="title">Comprehensive Coaching In Dubai For Exam Prep & Success</h2>
          <p className="subtitle">
            Exam time can be overwhelming, but with the right preparation, students can perform with confidence and clarity.<br />
            Ignite offers specialized coaching programs that focus on effective study techniques, past paper practice, time management, and stress-reduction strategies. Our tutors guide students through rigorous exam prep, helping them sharpen their skills and maximize their scores in every subject.
          </p>          <br />


          <h2 className="title">Find The Best Tuition Centre Near Me With Proven Methods & Real Results</h2>
          <p className="subtitle">
            Looking for a trusted tuition centre nearby?<br />
            Ignite’s combination of expert tutors, personalized plans, and results-oriented methods makes us the preferred choice for thousands of families in Dubai. Our students consistently achieve top grades and gain admission into leading universities. Whether it's subject support or full academic guidance, we deliver measurable results backed by real success stories.
          </p>          <br />


          <h2 className="title">Tutoring Near Me That Aligns With Student Academic Goals</h2>
          <p className="subtitle">
            At Ignite, we begin with one key question: What does success look like for you?<br />
            Whether it’s acing a particular subject, improving overall academic performance, or preparing for competitive entrance exams, our tutoring programs are fully aligned with individual goals. Each student receives a learning plan tailored to their aspirations, helping them stay focused, motivated, and on track for success.
          </p>          <br />


          <h2 className="title">Top Coaching Institute In Dubai With Subject-Specific Support</h2>
          <p className="subtitle">
            Different subjects require different approaches.<br />
            That’s why Ignite offers specialized support across a wide range of subjects, including Mathematics, Sciences, English, Business, Economics, and more. Our tutors bring deep subject knowledge and customized teaching techniques that cater to various learning needs. Whether your child needs help in a challenging topic or is ready to explore advanced material, we provide the right support at the right time.
          </p>          <br />


          <h2 className="title">Experienced Dubai Tutors For One-On-One & Group Learning</h2>
          <p className="subtitle">
            Our team of experienced tutors understands that every student learns differently.<br />
            At Ignite, we offer both one-on-one sessions for personalized attention and small group classes that foster peer learning and collaboration. This flexible model allows students to thrive in the environment that suits them best, while still receiving the expert guidance needed to reach their academic goals.
          </p>          <br />


          <h2 className="title">How Ignite’s Tutors In Dubai Guide Students To Success</h2>
          <p className="subtitle">
            Our tutors do more than just teach; they become mentors and role models who guide students through their academic journey.<br />
            From setting achievable goals to developing smart study routines, they provide ongoing encouragement and structure. Through a combination of subject expertise, emotional support, and continuous monitoring, our tutors ensure that each student stays on the path to success both in and out of the classroom.
          </p>          <br />

          <h2 className="title">Exclusive IB Resources</h2>
          <div class="schemalinks">
            <a href="https://ignitetraininginstitute.com/ib-curriculum-blog/">IB Curriculum</a> | <a href="https://ignitetraininginstitute.com/ib-diploma/">IB Diploma</a> | <a href="https://ignitetraininginstitute.com/guide-on-ib-programmes/">IB Programmes</a> | <a href="https://ignitetraininginstitute.com/ib-myp-programme/">IB MYP Programme Guide</a> | <a href="https://ignitetraininginstitute.com/ib-program-pros-and-cons/">IB Program Pros & Cons</a> | <a href="https://ignitetraininginstitute.com/benefits-of-ib-curriculum/">Benefits Of IB Curriculum</a> | <a href="https://ignitetraininginstitute.com/benefits-of-ib-diploma/">Benefits Of The IB Diploma Programme</a> | <a href="https://ignitetraininginstitute.com/is-myp-certificate-important/">Is MYP Certificate Important</a> | <a href="https://ignitetraininginstitute.com/how-to-study-for-ib-exams/">How To Study For IB Exams</a> | <a href="https://ignitetraininginstitute.com/ibdp-syllabus-changes/">IB Syllabus Updates</a> | <a href="https://ignitetraininginstitute.com/ib-bilingual-diploma/">IB Bilingual Diploma</a> | <a href="https://ignitetraininginstitute.com/how-to-get-good-grades-in-ib/">How To Get Good Grades In IB</a> | <a href="https://ignitetraininginstitute.com/ib-diploma-gpa-calculator/">IB Diploma GPA Calculator</a> | <a href="https://ignitetraininginstitute.com/ib-subject-choices/">IB Subject Choices</a> | <a href="https://ignitetraininginstitute.com/colleges-that-accept-ib-diploma/">Colleges That Accept IB Diploma</a> | <a href="https://ignitetraininginstitute.com/what-is-an-ib-world-school/">What Is An IB World School</a> | <a href="https://ignitetraininginstitute.com/ib-grades-explained/">IB Grades Explained</a> | <a href="https://ignitetraininginstitute.com/ib-cas-program/">CAS IB</a> | <a href="https://ignitetraininginstitute.com/ib-cas-ideas/">IB CAS Ideas</a> | <a href="https://ignitetraininginstitute.com/what-is-ib-extended-essay/">What Is An Extended Essay For IB</a> | <a href="https://ignitetraininginstitute.com/ib-learner-profile/">IB Learner Profile Attributes</a> | <a href="https://ignitetraininginstitute.com/ib-career-related-programme-guide/">IB Career Related Programme</a> | <a href="https://ignitetraininginstitute.com/ib-physics/">IB Physics</a> | <a href="https://ignitetraininginstitute.com/ib-maths/">IB Maths</a> | <a href="https://ignitetraininginstitute.com/ib-computer-science-syllabus/">IB Computer Science Syllabus</a> | <a href="https://ignitetraininginstitute.com/ib-economics-exam/">IB Economics</a> | <a href="https://ignitetraininginstitute.com/ib-economics-exam/">IB Economics Exam</a> | <a href="https://ignitetraininginstitute.com/ib-curriculum-vs-british-curriculum/">IB Curriculum Vs British Curriculum</a> | <a href="https://ignitetraininginstitute.com/a-levels-vs-ibdp-comparison/">IB VS A Levels</a> | <a href="https://ignitetraininginstitute.com/ib-vs-igcse-program/">IB VS IGCSE</a> | <a href="https://ignitetraininginstitute.com/ib-vs-ap-comparison/">IB VS AP Difficulty</a> | <a href="https://ignitetraininginstitute.com/ib-certificate-vs-ib-diploma/">IB Certificate Vs IB Diploma</a> | <a href="https://ignitetraininginstitute.com/ib-vs-icse/">IB VS ICSE</a> | <a href="https://ignitetraininginstitute.com/ibcp-vs-ibdp/">IBCP VS IBDP</a> | <a href="https://ignitetraininginstitute.com/cbse-or-ib-board/">CBSE Or IB</a> | <a href="https://ignitetraininginstitute.com/a-levels-vs-ibdp-comparison/">A-Levels VS IBDP</a> | <a href="https://ignitetraininginstitute.com/ib-schools-in-dubai/">IB Schools In Dubai</a> | <a href="https://ignitetraininginstitute.com/ib-schools-in-abu-dhabi/">IB Schools In Abu Dhabi</a> | <a href="https://ignitetraininginstitute.com/ibdp-schools-in-dubai/">IBDP Schools In Dubai</a>
          </div>
          <br />


          <h2 className="title">Exclusive British Curriculum Resources</h2>
          <div class="schemalinks">
            <a href="https://ignitetraininginstitute.com/british-curriculum/">British Curriculum</a> | <a href="https://ignitetraininginstitute.com/a-level-qualifications/">A-Level</a> | <a href="http://as-levels">AS-Levels</a> | <a href="https://ignitetraininginstitute.com/a-level-qualifications/">A-Level Qualifications</a> | <a href="https://ignitetraininginstitute.com/as-level-university-requirement/">AS Level University Requirements</a> | <a href="https://ignitetraininginstitute.com/what-is-the-difference-between-edexcel-and-cambridge/">Edexcel & Cambridge</a> | <a href="https://ignitetraininginstitute.com/cambridge-a-level-courses/">Cambridge A-Level Courses</a> | <a href="https://ignitetraininginstitute.com/a-levels-subjects/">A Levels Subjects</a> | <a href="https://ignitetraininginstitute.com/why-choose-a-levels/">Why Choose A Levels?</a> | <a href="https://ignitetraininginstitute.com/a-level-grading-system/">A-Level Grading System</a> | <a href="https://ignitetraininginstitute.com/what-is-the-difference-between-edexcel-and-cambridge/">Difference Between Edexcel & Cambridge</a> | <a href="https://ignitetraininginstitute.com/a-level-subjects-for-pyschology/">A-Level Subjects For Psychology</a> | <a href="https://ignitetraininginstitute.com/a-level-arts-subjects/">A-Level Arts Subjects</a> | <a href="https://ignitetraininginstitute.com/a-levels-chemistry/">A Levels Chemistry</a> | <a href="https://ignitetraininginstitute.com/edexcel-a-level-economics/">Edexcel A Level Economics</a> | <a href="https://ignitetraininginstitute.com/a-level-physics-course/">A-Level Physics</a> | <a href="https://ignitetraininginstitute.com/a-level-maths-grades/">A Level Maths Grade</a> | <a href="https://ignitetraininginstitute.com/a-level-computer-science-course/">A Level Computer Science</a> | <a href="https://ignitetraininginstitute.com/triple-science-vs-combined-science-what-to-choose/">Triple Science VS Combined Science</a> | <a href="https://ignitetraininginstitute.com/indian-curriculum-vs-british-curriculum/">Indian Curriculum VS British Curriculum</a> | <a href="https://ignitetraininginstitute.com/difference-between-american-and-british-curriculum/">Difference Between American And British Curriculum</a> | <a href="https://ignitetraininginstitute.com/ib-curriculum-vs-british-curriculum/">IB Curriculum VS British Curriculum</a> | <a href="https://ignitetraininginstitute.com/a-levels-vs-cbse/">A-Levels VS CBSE</a> | <a href="https://ignitetraininginstitute.com/a-levels-vs-ibdp-comparison/">A-Levels VS IBDP</a> | <a href="https://ignitetraininginstitute.com/difference-between-gcse-and-a-levels/">Differences Between GCSE & A-Levels</a> | <a href="https://ignitetraininginstitute.com/a-level-schools-in-dubai/">A-Level Schools In Dubai</a> | <a href="https://ignitetraininginstitute.com/british-curriculum-schools/">British Curriculum Schools In Dubai</a> | <a href="https://ignitetraininginstitute.com/british-curriculum-schools-in-abu-dhabi/">British Curriculum Schools In Abu Dhabi</a> | <a href="https://ignitetraininginstitute.com/british-curriculum-schools-in-sharjah/">British Curriculum Schools In Sharjah</a>
          </div>
          <br />


          <h2 className="title">Exclusive AP Resources</h2>
          <div class="schemalinks">
            <a href="https://ignitetraininginstitute.com/advanced-placements/">Advanced Placements</a> | <a href="https://ignitetraininginstitute.com/ap-scores/">AP Scores</a> | <a href="https://ignitetraininginstitute.com/ib-vs-ap-comparison/">IB VS AP</a> | <a href="https://ignitetraininginstitute.com/ap-courses/">AP Courses</a> | <a href="https://ignitetraininginstitute.com/ap-exams-overview/">AP Exams</a> | <a href="https://ignitetraininginstitute.com/what-is-an-ap-seminar-exam/">AP Seminar Exam</a> | <a href="https://ignitetraininginstitute.com/are-ap-exams-hard/">Are AP Exams Hard</a> | <a href="https://ignitetraininginstitute.com/easiest-ap-exams/">Easiest AP Exams</a> | <a href="https://ignitetraininginstitute.com/ap-exam-test-dates/">AP Exam Test Dates</a> | <a href="https://ignitetraininginstitute.com/how-many-ap-classes-to-take/">AP Classes To Take</a> | <a href="https://ignitetraininginstitute.com/do-ap-classes-count-as-college-credit/">Do AP Classes Count As College Credit</a> | <a href="https://ignitetraininginstitute.com/how-to-get-a-5-on-ap-statistics/">How To Get A 5 On The AP Statistics</a> | <a href="https://ignitetraininginstitute.com/ap-computer-science-principles-vs-ap-computer-science-a/">AP Computer Science Principles VS AP Computer Science A</a> | <a href="https://ignitetraininginstitute.com/is-ap-statistics-easy/">Is AP Statistics Easy</a> | <a href="https://ignitetraininginstitute.com/ap-courses-for-engineering/">AP Courses For Engineering</a> | <a href="https://ignitetraininginstitute.com/ap-biology/">AP Biology</a> | <a href="https://ignitetraininginstitute.com/what-is-ap-chemistry-exam/">AP Chemistry Exam</a> | <a href="https://ignitetraininginstitute.com/how-to-register-for-ap-exams/">How To Register For AP Exams</a>
          </div>
          <br />


          <h2 className="title">Exclusive Homeschooling Resources</h2>
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
          padding: 10px;
          transition: all 0.3s ease;
        }
            }
      `}</style>
    </div>
  );
}
