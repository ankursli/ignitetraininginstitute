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
          <h2 className="title">Expert Maths Tutor In Dubai UAE For Academic Confidence</h2>
          <p className="subtitle">Ignite Training Institute offers expert Maths tutors in Dubai who provide focused guidance tailored to each student’s level. Whether you're catching up or aiming to excel, our tutors help strengthen your core concepts and problem-solving skills. We ensure students build confidence in Maths through step-by-step support and targeted strategies. With a deep understanding of school and international curricula, we make complex topics simple and engaging. Our tutors adapt to different learning styles, making sessions productive and impactful. Join hundreds of students across Dubai who’ve boosted their grades with our expert maths support.</p>

        </div>
        <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="expanded">
          <h2 className="title">Find The Best Mathematics Tutor In Dubai For You With Ignite Training Institute</h2>
          <p className="subtitle">Struggling to find the right Maths tutor? Ignite Training Institute connects students with highly qualified Mathematics tutors in Dubai who understand different learning paces and goals. Whether it's IB, IGCSE, or A Levels, our tutors bring clarity and confidence to every lesson. We focus on foundational understanding, logical reasoning, and effective revision techniques. Flexible timing, in-person and online options, and personalized attention make it easy to stay on track. With our support, you’ll stop dreading Maths and start mastering it. Let us match you with the right tutor for your needs.
          </p>          <br />

          <h2 className="title">Personalized Maths Tuition In Dubai For Every Student</h2>
          <p className="subtitle">At Ignite, we understand that no two students learn Maths the same way. Our personalized Maths tuition in Dubai is designed around your strengths, challenges, and academic goals. From homework help to exam prep, our tutors build a learning path that truly works. We ensure every concept is thoroughly explained and practiced so students feel more confident in class and during assessments. The result is a stronger grasp of topics and improved academic performance. Discover the power of custom learning with Ignite’s personalised tuition support.</p>          <br />

          <h2 className="title">Score Higher With Targeted Maths Coaching In Dubai Today</h2>
          <p className="subtitle">Get the scores you need with focused and strategic Maths coaching at Ignite. Our Dubai-based tutors offer structured sessions that align with your curriculum and upcoming exams. We don’t just teach Maths, we coach students to think critically, solve efficiently, and apply their knowledge under pressure. Regular assessments, feedback, and targeted revisions help eliminate weak areas and boost performance. Whether preparing for term tests or final boards, our approach is results-driven and student-centric. Take the first step toward higher scores with expert coaching today.</p>          <br />

          <h2 className="title">Maths Classes In Dubai For Academic Excellence & Exam Support</h2>
          <p className="subtitle">Ignite Training Institute offers comprehensive Maths classes in Dubai for students across IB, IGCSE, A Levels, and other international curricula. Our classes are designed to improve understanding, sharpen skills, and build exam readiness. Tutors follow a structured approach, ensuring students cover all necessary topics with clarity and confidence. We offer support in algebra, geometry, calculus, statistics, and more. With a blend of concept-based teaching and rigorous practice, we prepare students for success inside and outside the classroom. Join our high-performing Maths learners today.</p>          <br />

          <h2 className="title">Top-Notch Maths Tutoring In Dubai For Stronger Skills</h2>
          <p className="subtitle">Develop stronger analytical and problem-solving skills with Ignite’s top-tier Maths tutoring. Our tutors in Dubai are subject-matter experts who make abstract concepts more accessible and engaging. From junior school Maths to advanced levels, we support students at every stage of their academic journey. Our sessions blend theory, application, and continuous practice to help students gain mastery. Whether you’re working to improve grades or aiming for academic excellence, we offer the tools, techniques, and mentoring you need. Ignite is where skills meet confidence.</p>          <br />

          <h2 className="title">Online Maths Tutor In Dubai Helping Students Build Confidence</h2>
          <p className="subtitle">Can’t attend in-person sessions? Our online Maths tutors in Dubai deliver the same quality support right to your screen. We offer flexible, interactive, and personalized tutoring from the comfort of your home. Using digital tools and real-time feedback, our tutors guide students through concepts, clarify doubts, and provide structured assignments. It’s ideal for students with busy schedules or who prefer learning in a quieter space. With one-on-one focus and engaging virtual lessons, we help students overcome fear of Maths and thrive academically.</p>          <br />

          <h2 className="title">Trusted Maths Learning Centre In Dubai For Exam Success</h2>
          <p className="subtitle">Ignite Training Institute is a trusted Maths learning centre in Dubai, known for driving real academic results. Our students consistently achieve top grades thanks to our systematic teaching methods, regular mock tests, and concept-driven learning plans. We go beyond rote memorization, focusing on building deep understanding and confident application. Whether you're struggling with functions or preparing for finals, we’ve got you covered. Our dedicated Maths faculty ensures every student receives the attention and strategies needed to succeed. Experience exam success with us.</p>          <br />

          <h2 className="title">Looking For A Maths Tutor Near Me In Dubai? Get Help Today!</h2>
          <p className="subtitle">Searching for a Maths tutor near you in Dubai? Ignite Training Institute offers accessible and expert tutors ready to support your academic goals. We match students with tutors based on curriculum, skill level, and learning preferences. Our nearby locations and flexible timings make it easy to fit tutoring into your routine. Whether you need urgent exam help or long-term academic support, we have qualified tutors across the city. Get the help you need today and see real improvement in your Maths performance.</p>          <br />

          <h2 className="title">Get Better Results With IB Maths Tutor In Dubai Support</h2>
          <p className="subtitle">Our experienced IB Maths tutors in Dubai help students master the unique demands of the IB curriculum. From standard to higher level, we offer structured guidance, time-saving techniques, and clarity on complex topics. Our tutors break down syllabus components, past papers, and internal assessments in a way that builds both understanding and confidence. With a balance of theory and practical application, we ensure students are well-prepared for exams. Improve your results and take the stress out of IB Maths with our expert support.</p>          <br />

          <h2 className="title">Experienced IGCSE Maths Tutor In Dubai For Exam Prep</h2>
          <p className="subtitle">Prepare smarter and perform better with our IGCSE Maths tutors in Dubai. At Ignite, we focus on exam techniques, time management, and core concept clarity to help students excel. Our tutors are well-versed in the IGCSE syllabus and guide students through key topics, tricky questions, and past paper practice. We offer both extended and core level support, ensuring students build confidence and skill with every session. With our structured approach, you’ll walk into your exams fully prepared and ready to score high.</p>          <br />

          <h2 className="title">Achieve More With A Levels Maths Tutor In Dubai Help</h2>
          <p className="subtitle">Our A Levels Maths tutors in Dubai are dedicated to helping students tackle advanced concepts with ease. We specialize in supporting students through pure, mechanics, and statistics components, ensuring a strong grasp of each. With a focus on precision, application, and problem-solving, our tutors prepare students for both coursework and final exams. Whether you’re struggling or aiming for top grades, our tailored sessions adapt to your needs. Achieve more and go further in A Levels with Ignite’s expert Maths tutors.</p>          <br />

          <h2 className="title">One-On-One AS Levels Maths Tutor In Dubai For Assured Improvement</h2>
          <p className="subtitle">Ignite’s AS Levels Maths tutoring in Dubai offers personalized, one-on-one sessions for students who want focused improvement. We help students understand fundamental principles, build step-by-step strategies, and develop exam confidence. Our tutors identify problem areas and provide targeted support that leads to measurable progress. With regular feedback and exam-style practice, students become more proficient and less anxious about assessments. Whether you’re catching up or pushing ahead, our tutors are here to help you improve with every session.</p>          <br />

          <h2 className="title">AP Maths Tutor In Dubai Helping Students Excel With Confidence</h2>
          <p className="subtitle">AP Maths can be demanding, with advanced concepts in calculus, algebra, and statistics. Ignite’s AP Maths tutors in Dubai simplify complex theories and guide students step by step. Through focused practice, exam strategies, and conceptual clarity, students strengthen their problem-solving skills. Our tutors provide structured sessions to help students maximize their scores and confidence. Personalized teaching ensures every student masters both theory and application. With Ignite’s guidance, students approach AP Maths with clarity, accuracy, and improved performance.</p>

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
