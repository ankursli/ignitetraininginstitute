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
          <h2 className="title">Expert Psychology Tutor In Dubai, UAE For Academic Confidence</h2>
          <p className="subtitle">Master core concepts and boost academic performance with expert Psychology guidance. At Ignite, our tutors simplify complex topics in cognition, behavior, and development. With personalized strategies and real-world examples, students build clarity and confidence. Whether you're in IB, IGCSE, or A Levels, we help you excel in exams and class participation. Our supportive environment fosters curiosity, motivation, and consistent improvement. Take the first step toward academic excellence today.</p>
        </div>
        <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="expanded">
          <h2 className="title">Find The Best Psychology Tutor In Dubai For You With Ignite Training Institute</h2>
          <p className="subtitle">Searching for the right tutor can be overwhelming, but not with Ignite. We connect students with top-rated Psychology tutors in Dubai based on their curriculum and learning needs. Our educators are experienced in handling diverse boards like IB, IGCSE, and A Levels. With a focus on goal-oriented teaching, we ensure each session adds value. Build subject knowledge and exam confidence with Dubai’s trusted tutors. Get matched with the perfect fit today.</p>          <br />

          <h2 className="title">Personalized Psychology Tuition In Dubai For Every Student</h2>
          <p className="subtitle">Every student learns differently, and our Psychology tuition reflects that. At Ignite, we create custom lesson plans tailored to individual strengths and areas of improvement. Our expert tutors help students grasp psychological principles through engaging discussions and interactive sessions. From case studies to exam practice, we offer tools to deepen understanding and retention. Personalized support leads to better grades and sharper analytical skills. Experience tuition that’s built just for you.</p>          <br />

          <h2 className="title">Score Higher With Targeted Psychology Coaching In Dubai Today</h2>
          <p className="subtitle">Want to improve your Psychology scores? Our targeted coaching approach delivers real results. With Ignite, students receive focused help on challenging topics and exam strategies. We use proven teaching methods, regular assessments, and one-on-one feedback. Our coaching sharpens analytical thinking and strengthens exam-writing techniques. Ideal for students aiming for top scores in IGCSE, A Levels, or IB. Let’s start raising your academic game now.</p>          <br />

          <h2 className="title">Psychology Classes In Dubai For Academic Excellence & Exam Support</h2>
          <p className="subtitle">Join Psychology classes at Ignite and unlock academic success. Our classes are led by experienced tutors who make theory practical and engaging. We provide structured lessons, revision sessions, and practice questions aligned to your curriculum. Whether you need help with coursework or exam prep, we’re here to support you. Classes are small, focused, and tailored for better learning outcomes. Get the right support to thrive in school and beyond.</p>          <br />

          <h2 className="title">Top-Notch Psychology Tutoring In Dubai For Stronger Skills</h2>
          <p className="subtitle">Strong understanding of human behavior starts with strong tutoring. At Ignite, our top-notch Psychology tutors equip students with deep subject knowledge and critical thinking skills. Lessons cover everything from cognitive processes to developmental psychology and research methods. We bridge classroom gaps and prepare you for academic success. Ideal for students seeking to build long-term competency in the subject. Invest in quality tutoring that makes a difference.</p>          <br />

          <h2 className="title">Online Psychology Tutor In Dubai, Helping Students Build Confidence</h2>
          <p className="subtitle">Study smarter from the comfort of your home with online tutoring. Ignite’s Psychology tutors offer interactive, live sessions tailored to your goals. Our digital platform supports seamless learning with flexible scheduling and expert instruction. Gain clarity on complex concepts, prepare for exams, and get ahead in class. Online doesn’t mean impersonal; it means accessible and effective. Build your confidence with trusted guidance, wherever you are.</p>          <br />

          <h2 className="title">Trusted Psychology Learning Centre In Dubai For Exam Success</h2>
          <p className="subtitle">Ignite is more than a tuition provider, we’re a trusted learning partner. Our Psychology centre in Dubai supports students across all levels with a structured learning path. From fundamentals to advanced theories, our experienced tutors help students succeed. We focus on concepts, practice, and exam-readiness. Whether it’s internal assessments or board exams, we ensure you're fully prepared. Join a centre that delivers consistent academic success.</p>          <br />

          <h2 className="title">Looking For A Psychology Tutor Near Me In Dubai? Get Help Today!</h2>
          <p className="subtitle">If you're searching “Psychology tutor near me,” you’ve found the answer. Ignite connects students with expert tutors right here in Dubai. We offer flexible scheduling, both online and offline, and personalized attention. Whether you're behind in class or aiming for top marks, we have the right support. Boost understanding, improve scores, and enjoy learning. Reach out now and get started on your success journey.</p>          <br />

          <h2 className="title">Get Better Results With An IB Psychology Tutor In Dubai Support</h2>
          <p className="subtitle">IB Psychology demands strong essay-writing, analysis, and critical evaluation skills. Our expert IB tutors at Ignite help students master the curriculum with confidence. We break down complex theories, guide you through IA preparation, and boost exam performance. Personalized sessions target your weak spots and reinforce strengths. Whether you’re in Year 1 or 2, we’ll help you stay ahead. Unlock your IB potential with expert support.</p>          <br />

          <h2 className="title">Experienced IGCSE Psychology Tutor In Dubai For Exam Prep</h2>
          <p className="subtitle">Get exam-ready with our experienced IGCSE Psychology tutors. At Ignite, we cover the entire syllabus, including paper formats, mark schemes, and common pitfalls. Our tutors use past papers, mock tests, and targeted reviews to ensure thorough preparation. Lessons are interactive and focused on improving performance in both theory and application. Perfect for students aiming for top grades in IGCSE. Get the guidance you need to succeed.</p>          <br />

          <h2 className="title">Achieve More With A Levels Psychology Tutor In Dubai Help</h2>
          <p className="subtitle">A Levels demand a deeper understanding of psychology, and we’re here to help. Our tutors guide you through topics like abnormal psychology, social behavior, and research methods. With practice essays, structured analysis, and regular feedback, students become exam-ready. Whether you're struggling with content or aiming for an A*, we tailor support to your needs. Excel in your A Levels with Ignite’s expert guidance. Let’s help you achieve more.</p>          <br />

          <h2 className="title">One-On-One AS Levels Psychology Tutor In Dubai For Assured Improvement</h2>
          <p className="subtitle">AS Levels set the foundation for future academic success. Our one-on-one tutoring ensures students get the individual support they need. Ignite tutors explain concepts clearly, provide custom notes, and conduct regular tests to track progress. Sessions are flexible and focused on your specific challenges. Ideal for students who need a strong start in Psychology. Improve grades and boost confidence with personal, expert-led sessions.</p>          <br />

          <h2 className="title">AP Psychology Tutor In Dubai Helping Students Excel With Confidence</h2>
          <p className="subtitle">AP Psychology requires understanding human behavior, research methods, and psychological theories. Ignite’s AP Psychology tutors in Dubai guide students through topics like cognition, development, and personality. Our sessions combine conceptual clarity with exam-focused strategies for improved results. Students learn how to analyze case studies and apply psychological principles effectively. Personalized sessions build both confidence and critical thinking skills. With Ignite, students prepare effectively for AP Psychology exams while developing a deeper interest in psychology.</p>
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
