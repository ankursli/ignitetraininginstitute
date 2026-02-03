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
          <h2 className="title">Ignite Training Institute - IB Tutoring In Dubai, UAE For Academic Excellence & Success</h2>
          <p className="subtitle">At Ignite Training Institute, our IB tutoring in Dubai is designed to bring out the best in every student. The experienced IB tutors focus on building strong conceptual understanding and academic confidence across all subjects. We utilize proven teaching strategies and regular assessments to monitor progress and enhance outcomes.
            <br />Whether students need support in challenging areas or wish to aim for top IB scores, we provide the right tools and techniques. Ignite’s personalized attention and structured study plans help students manage their workload efficiently. From internal assessments to final exams, we prepare learners for every academic challenge. Our goal is to empower students to achieve academic excellence and long-term success.</p>
        </div>
        <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="expanded">
          <h2 className="title">IB Tuitions In Dubai Tailored To Students' Individual Needs</h2>
          <p className="subtitle">Ignite’s IB tuitions in Dubai are fully personalized to meet the unique learning needs of each student. We understand that no two learners are the same, which is why our sessions are flexible and goal-oriented! Whether a student needs help in understanding complex topics, organizing study schedules, or improving exam performance, our tutors adapt their approach accordingly.
            <br />We work closely with students to identify their strengths and address gaps effectively. With a strong focus on clarity and confidence, our tuition programs support consistent progress. Small group and one-on-one formats ensure each student receives the right attention. Our aim is to nurture independent learners who are well-prepared for IB success.</p>          <br />

          <h2 className="title">IB Coaching Classes In Dubai To Boost Your Scores!</h2>
          <p className="subtitle">Ignite’s IB coaching classes in Dubai are designed to help students maximize their academic potential and raise their scores. Our structured programs focus on syllabus mastery, effective revision, and exam technique. Students receive support from subject matter experts who understand the IB curriculum inside out. We conduct regular mock tests, timed assignments, and feedback sessions to improve performance under real exam conditions.
            <br />Whether it is SL or HL subjects, we provide comprehensive coaching that ensures subject clarity and confidence. Our coaching classes offer a blend of theory, practice, and skill-building. The goal is simple – to boost student scores and academic standing within the IB framework.</p>          <br />

          <h2 className="title">IB Classes In Dubai For Comprehensive Subject Support</h2>
          <p className="subtitle">Ignite’s IB classes in Dubai cover all subjects with in-depth support tailored to students' needs. Whether it is Mathematics, Sciences, Languages, or Humanities, our tutors break down complex topics into understandable segments. We focus on building strong academic foundations while also helping students develop time management and critical thinking skills.
            <br />Our lessons include past paper practice, assignment help, and exam-focused revision strategies. We offer both Standard and Higher Level support to suit individual subject choices. Small batch sizes and personalized guidance make our classes engaging and result-driven. At Ignite, we ensure that every student receives the comprehensive subject support they need to thrive in the IB curriculum.</p>          <br />

          <h2 className="title">IB Tuition For Middle Years Programme (MYP) – In-Person & Online Classes</h2>
          <p className="subtitle">IB tuition for the Middle Years Programme supports students from Grade 8 to Grade 10 with both in-person and online classes. The MYP stage is crucial for developing inquiry-based learning and interdisciplinary thinking, and our tutors are skilled at nurturing these core skills. We provide guidance across all subject groups, including Language and Literature, Sciences, Individuals and Societies, Mathematics, and more.
            <br />Our sessions are designed to help students understand the assessment criteria and build confidence in their ability to meet them. Whether your child needs homework help or exam preparation, our tutors are ready to provide structured, engaging, and supportive learning. Flexible class formats allow for convenience without compromising on quality. Ignite helps MYP students stay motivated and well-prepared for the DP journey ahead.</p>          <br />

          <h2 className="title">IB Tuition For Diploma Programme (DP) – In-Person & Online Classes</h2>
          <p className="subtitle">IB tuition for the Diploma Programme in Dubai is available both in-person and online to suit the busy schedules of high school students. The DP years are academically demanding, and our expert tutors provide focused support across all SL and HL subjects.
            <br />We help students navigate their coursework, internal assessments, extended essay, and Theory of Knowledge requirements with confidence. Lessons are structured around the IB assessment objectives, helping students meet and exceed expectations.
            <br />Regular revision, mock tests, and one-on-one sessions ensure that learners stay on track and improve steadily. Our goal is to make the DP journey manageable, less stressful, and more rewarding. Whether students aim for university placements or overall score improvement, our tuition offers the right academic edge.</p>          <br />

          <h2 className="title">Comprehensive IB Training In Dubai By Expert Tutors</h2>
          <p className="subtitle">Stay ahead in the IB journey with comprehensive training designed and delivered by expert tutors in Dubai. Our programs follow a structured, syllabus-aligned approach that ensures complete topic coverage across all IB subjects. With a focus on concept clarity, time management, and academic consistency, students benefit from weekly classes and guided practice.
            <br />Whether you are preparing for internal assessments or final exams, our expert-led training equips you with the right tools. Classes are interactive, personalised, and results-driven. The goal is to build a strong academic foundation and long-term IB success.</p>          <br />

          <h2 className="title">Rigorous IB Testing To Sharpen Exam Readiness & Skills</h2>
          <p className="subtitle">Sharpen your IB exam skills with our rigorous testing model that mirrors real exam conditions. Students undergo unit-wise tests, timed assessments, and full-length mock exams that simulate the actual IB exam environment. Each test is followed by detailed feedback and performance analysis to identify strengths and target weak areas.
            <br />Our goal is to reduce exam anxiety and build confidence through repetition, practice, and review. These assessments help students understand marking schemes and improve answer structuring. With every test, students grow more exam-ready and academically resilient.</p>          <br />

          <h2 className="title">Best IB Coaching Guidance In Dubai To Excel Academically</h2>
          <p className="subtitle">Receive the best IB coaching guidance in Dubai through our expert-led, result-focused programs. From subject-wise clarity to smart study planning, we offer academic support that goes beyond the classroom. Our experienced IB tutors provide students with guidance tailored to their learning pace and academic goals.
            <br />We help students excel in both internal assessments and external exams through regular reviews, feedback, and strategic preparation. With access to IB-style questions and carefully curated resources, students gain the skills needed to perform with confidence. Ignite is your trusted partner in academic excellence across the IB curriculum.</p>          <br />

          <h2 className="title">How Ignite’s IB Classes Guide Students To Success</h2>
          <p className="subtitle">Our exceptional IB courses are built on years of experience and expertise, designed to bring out the best in every student. <br />
            At the heart of our mission is the drive to shape future success, aligning students’ ambitions with global standards through world-class instruction in international curricula.</p>          <br />

          <ul className="subtitle">
            <li><strong>IB Past Paper Solving:</strong> We provide regular practice with past IB papers to help students understand exam patterns, question styles, and marking criteria.</li>
            <li><strong>Complete IB Revision:</strong> Our structured revision sessions ensure thorough coverage of all topics, reinforcing key concepts and improving retention.</li>
            <li><strong>IB Subjects Support:</strong> From Mathematics and Sciences to Humanities and Languages, we offer expert guidance across all IB subjects at both SL and HL levels.</li>
            <li><strong>IB Personalized Training:</strong> Each student receives individual attention, customized lesson plans, and feedback tailored to their academic strengths and goals.</li>
            <li><strong>IB Syllabus Completion:</strong> We ensure timely and complete syllabus coverage with a clear weekly roadmap, allowing students ample time for revision and exam prep.</li>
            <li><strong>IB Exam Strategies:</strong> Students are trained in effective exam techniques, including time management, answer structuring, and scoring tactics to maximize performance.</li>
          </ul>
          <br />

          <h2 className="title">Why Choose Ignite Training Institute To Guide Your IB Journey?</h2>
          <p className="subtitle">At Ignite Training Institute, we specialize in delivering high-quality IB tutoring that leads to measurable academic progress and exam success. Our experienced tutors understand the demands of the IB curriculum and provide personalized support tailored to each learner’s needs. <br />
            With structured classes, exam-focused training, and consistent mentorship, we help students build confidence, master subjects, and achieve top scores. Whether you need help with IAs, EE, TOK, or final exams, Ignite offers the complete support system to navigate your IB journey with success.</p>          <br />

          <h2 className="title">Exclusive IB Resources</h2>
          <br />
          <div class="schemalinks">
            <a href="https://ignitetraininginstitute.com/ib-curriculum-blog/">IB Curriculum</a> | <a href="https://ignitetraininginstitute.com/ib-diploma/">IB Diploma</a> | <a href="https://ignitetraininginstitute.com/guide-on-ib-programmes/">IB Programmes</a> | <a href="https://ignitetraininginstitute.com/ib-myp-programme/">IB MYP Programme Guide</a> | <a href="https://ignitetraininginstitute.com/ib-program-pros-and-cons/">IB Program Pros &amp; Cons</a> | <a href="https://ignitetraininginstitute.com/benefits-of-ib-curriculum/">Benefits Of IB Curriculum</a> | <a href="https://ignitetraininginstitute.com/benefits-of-ib-diploma/">Benefits Of The IB Diploma Programme</a> | <a href="https://ignitetraininginstitute.com/is-myp-certificate-important/">Is MYP Certificate Important</a> | <a href="https://ignitetraininginstitute.com/how-to-study-for-ib-exams/">How To Study For IB Exams</a> | <a href="https://ignitetraininginstitute.com/ibdp-syllabus-changes/">IB Syllabus Updates</a> | <a href="https://ignitetraininginstitute.com/ib-bilingual-diploma/">IB Bilingual Diploma</a> | <a href="https://ignitetraininginstitute.com/how-to-get-good-grades-in-ib/">How To Get Good Grades In IB</a> | <a href="https://ignitetraininginstitute.com/ib-diploma-gpa-calculator/">IB Diploma GPA Calculator</a> | <a href="https://ignitetraininginstitute.com/ib-subject-choices/">IB Subject Choices</a> | <a href="https://ignitetraininginstitute.com/colleges-that-accept-ib-diploma/">Colleges That Accept IB Diploma</a> | <a href="https://ignitetraininginstitute.com/what-is-an-ib-world-school/">What Is An IB World School</a> | <a href="https://ignitetraininginstitute.com/ib-grades-explained/">IB Grades Explained</a> | <a href="https://ignitetraininginstitute.com/ib-cas-program/">CAS IB</a> | <a href="https://ignitetraininginstitute.com/ib-cas-ideas/">IB CAS Ideas</a> | <a href="https://ignitetraininginstitute.com/what-is-ib-extended-essay/">What Is An Extended Essay For IB</a> | <a href="https://ignitetraininginstitute.com/ib-learner-profile/">IB Learner Profile Attributes</a> | <a href="https://ignitetraininginstitute.com/ib-career-related-programme-guide/">IB Career Related Programme</a> | | <a href="https://ignitetraininginstitute.com/ib-physics/">IB Physics</a> | <a href="https://ignitetraininginstitute.com/ib-maths/">IB Maths</a> | <a href="https://ignitetraininginstitute.com/ib-computer-science-syllabus/">IB Computer Science Syllabus</a> | <a href="https://ignitetraininginstitute.com/ib-economics-exam/">IB Economics</a> | <a href="https://ignitetraininginstitute.com/ib-economics-exam/">IB Economics Exam</a> | <a href="https://ignitetraininginstitute.com/ib-curriculum-vs-british-curriculum/">IB Curriculum Vs British Curriculum</a> | <a href="https://ignitetraininginstitute.com/a-levels-vs-ibdp-comparison/">IB VS A Levels</a> | <a href="https://ignitetraininginstitute.com/ib-vs-igcse-program/">IB VS IGCSE</a> | <a href="https://ignitetraininginstitute.com/ib-vs-ap-comparison/">IB VS AP Difficulty</a> | <a href="https://ignitetraininginstitute.com/ib-certificate-vs-ib-diploma/">IB Certificate Vs IB Diploma</a> | <a href="https://ignitetraininginstitute.com/ib-vs-icse/">IB VS ICSE</a> | <a href="https://ignitetraininginstitute.com/ibcp-vs-ibdp/">IBCP VS IBDP</a> | <a href="https://ignitetraininginstitute.com/cbse-or-ib-board/">CBSE Or IB</a> | <a href="https://ignitetraininginstitute.com/a-levels-vs-ibdp-comparison/">A-Levels VS IBDP</a> | <a href="https://ignitetraininginstitute.com/ib-schools-in-dubai/">IB Schools In Dubai</a> | <a href="https://ignitetraininginstitute.com/ib-schools-in-abu-dhabi/">IB Schools In Abu Dhabi</a> | <a href="https://ignitetraininginstitute.com/ibdp-schools-in-dubai/">IBDP Schools In Dubai</a>
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
