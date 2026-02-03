'use client';

import { useState, useEffect } from 'react';
import SEO from "@/components/SEO";
import TeamBanner from "@/components/team/Banner";
import MarqueeBanner from '@/components/a-level/MarqueeBanner';
import { ArrowRight } from 'lucide-react';
// Correct import for the CSS Module
import styles from '@/styles/team/team.module.css';


const trainersData = [
    {
        name: "MASAB",
        experience: "10+ Years",
        image: "/images/team/masab-team.webp",
        width: 470,
        height: 581,
        description: "Masab, an ACCA member with a Bachelor’s in Commerce, brings over a decade of expertise in teaching Mathematics & Accounting. Known for his ability to simplify complex concepts, he inspires students to achieve academic excellence while fostering a genuine love for learning. Teaching is his true passion, & he approaches every lesson with energy & commitment. Beyond academics, Masab enjoys playing table tennis, a sport that reflects his focus, precision, & competitive spirit.",
    },
    {
        name: "SHWETHA",
        experience: "6+ Years",
        image: "/images/team/shwetha-team.webp",
        width: 470,
        height: 581,
        description: "Shwetha brings over six and a half years of teaching experience in Biology, backed by an M.Sc. and B.Ed. With a deep love for nature, books, & exploration, she blends curiosity & real-world wonder into her classroom. Her passion for trekking, quiet reflection, & travel fuels the creativity she brings to every lesson. Shwetha believes education goes beyond textbooks, it’s about inspiring growth, nurturing questions, & connecting learning to life. Known for her calm, thoughtful approach, she encourages students to discover meaning & enthusiasm in the world around them.",
    },
    {
        name: "SARANYA",
        experience: "8+ Years",
        image: "/images/team/saranya-team.webp",
        width: 409,
        height: 504,
        description: "Saranya, with 8 years of experience, specializes in Physics & Mathematics. She holds an MSc in Physics from the University of Calicut, along with a B.Ed. & a B.Sc. in Physics, & has enriched her expertise through an astrophysics project at the Indian Institute of Astrophysics, Bangalore, & a winter workshop at IIT Madras. Passionate about learning & sharing knowledge, she sees teaching as a way to shape future leaders. With strong interests in astrophysics & materials science, Saranya is recognized for her structured lessons & adaptability to each student’s learning style.",
    },
    {
        name: "ASHWANI",
        experience: "7+ Years",
        image: "/images/team/ashwani-team.webp",
        width: 470,
        height: 581,
        description: "Ashwani, with 7 years of teaching experience, is a Mathematics educator holding an M.Ed degree. Initially skeptical about teaching, he discovered a true passion for guiding students and uncovering their hidden skills. Rather than simply delivering knowledge, he believes in working alongside students to solve problems, encouraging critical and logical thinking. For Ashwani, teaching is a lifelong journey that keeps him young, as he continues to learn and grow with his students.",
    },
    {
        name: "IRTIQA",
        experience: "6+ Years",
        image: "/images/team/Irtiqa-team.webp",
        width: 409,
        height: 508,
        description: "Irtiqa, a B.Tech graduate in Computer Science & certified Web Developer, has 6 years of experience teaching Computer Science, ICT, & IT. With a student-centered approach, she simplifies complex concepts using real-world examples & interactive activities, fostering curiosity, critical thinking, & practical application. She strives to create an engaging environment where students feel confident exploring ideas. Outside the classroom, Irtiqa enjoys crocheting & knitting, hobbies that inspire her creative, detailed, & thoughtful teaching style.",
    },
    {
        name: "ABDUL",
        experience: "13+ Years",
        image: "/images/team/abdul-team.webp",
        width: 470,
        height: 581,
        description: "Abdul, with 13 years of teaching experience, holds a Master’s in Mathematics & is passionate about making the subject clear & approachable. Inspired by friends who recognized his strong explanation skills, he embraced teaching as a fulfilling career. By placing himself in the student’s shoes, Abdul creates a supportive learning environment that strengthens understanding & builds confidence. Outside the classroom, he enjoys playing carrom, traveling, & pursuing a balanced, independent life.",
    },
    {
        name: "HARSHA",
        experience: "10+ Years",
        image: "/images/team/harsha-team.webp",
        width: 470,
        height: 581,
        description: "Harsha, with over 10 years of teaching experience, is an Economics & Business Studies educator holding an M.Com, B.Com, B.Ed, & a Postgraduate Diploma in Banking Operations. She guides students from Year 10 to Year 13, guiding them toward top results while building real-world understanding. Known for her interactive, practical lessons enriched with discussions & problem-solving, Harsha connects classroom theory to real-life decisions. Her goal is to inspire curiosity, confidence, & skills that students carry well beyond school.",
    },
    {
        name: "NAMRATA",
        experience: "10+ Years",
        image: "/images/team/namrata-team.webp",
        width: 409,
        height: 504,
        description: "Namrata, with over 10 years of teaching experience, specializes in Business Analytics, Mathematics, & Physics. She holds an MBA in Business Analytics & is currently pursuing a Postgraduate Certificate, along with certifications in data analysis, statistical modeling, & programming. Her teaching blends analytical thinking with creativity, using real-life examples & interactive methods to turn complex ideas into clear “aha!” moments. Passionate about making learning an engaging adventure, Namrata also enjoys reading, traveling, & hosting webinars on soft skills.",
    },
    {
        name: "KRITIKA",
        experience: "3+ Years",
        image: "/images/team/kritika-team.webp",
        width: 470,
        height: 581,
        description: "Kritika, with 3 years of teaching experience, is a passionate Mathematics educator holding a Bachelor’s in Physics (Honours) from Punjab University & a Bachelor of Education. She strives to make math engaging & empowering, connecting concepts to real-world applications through her physics background. Known for creating a supportive & motivating learning environment, Kritika encourages curiosity, confidence, & critical thinking. Outside the classroom, she enjoys stargazing & exploring innovative teaching methods to inspire a lifelong love for learning.",
    },
    {
        name: "RUSTHA",
        experience: "3+ Years",
        image: "/images/team/rustha-team.webp",
        width: 470,
        height: 581,
        description: "Rustha, with 3 years of teaching experience, specializes in Chemistry & Biology. She holds an M.Sc. in Forensic Science (with Advanced Practice) & a B.Sc. (Hons) in Forensic Science, with a strong background in Environmental Forensics. Having begun her career in forensic labs, she brings the same curiosity & analytical mindset into her classroom, helping students recognize patterns, think critically, & approach challenges with confidence. Rustha breaks down complex ideas into manageable steps, ensuring every student leaves with a deeper understanding & self-belief.",
    },
    {
        name: "IPSITA",
        experience: "7+ Years",
        image: "/images/team/ipsita-team.webp",
        width: 409,
        height: 507,
        description: "Ipsita, with 7 years of teaching experience, specializes in Biology and Environmental Management. She holds an M.Sc. in Zoology and is currently pursuing a B.Ed. Believing that learning should be enjoyable and engaging, she adopts a student-centric approach with interactive lessons that encourage curiosity and participation. Passionate about creating a positive classroom environment, Ipsita finds motivation in watching her students grow in confidence and understanding. Outside of teaching, she enjoys reading, painting, and traveling.",
    },
    {
        name: "FREEZY",
        experience: "4+ Years",
        image: "/images/team/freezy-team.webp",
        width: 409,
        height: 504,
        description: "Freezy, with over 4 years of teaching experience, is a passionate Science educator specializing in Biology, Chemistry, & Environmental Management. She holds a Master’s degree in Biotechnology & has further strengthened her expertise through workshops with IBICUS & Biotecnika. Known for making science engaging, interactive, & accessible, Freezy is dedicated to helping students build strong conceptual foundations & develop a deeper curiosity for the subject.",
    },
    {
        name: "AASHIMA",
        experience: "5+ Years",
        image: "/images/team/aashima-team.webp",
        width: 409,
        height: 508,
        description: "Aashima is a certified Spanish educator specializing in advanced language training. She has completed her C1.1 level from the Embassy of Spain – Instituto Cervantes & is a certified B2 DELE trainer. With strong technical expertise, she integrates modern tools, interactive software, & online resources into her lessons to make learning engaging & effective. Passionate about teaching, Aashima ensures her students gain not just fluency but also confidence in using the language in real-life contexts.",
    },
    {
        name: "ANUJA",
        experience: "10+ Years",
        image: "/images/team/Anuja-team.webp",
        width: 409,
        height: 504,
        description: "Ms. Anuja Agrawal brings over 10 years of rich teaching experience, specializing in English and French. With a BA in Psychology & Education, an MSc in Advanced Integrated Communications, & a PGDM in Business Management & Design Thinking, she blends academic depth with practical insights. Certified in Neuro-Linguistic Programming & Emotional Intelligence, she fosters impactful learning experiences. A passionate linguist with B2 French (Alliance Française) & A2 Spanish, Ms. Anuja also finds joy in traveling & exploring diverse cultures.",
    },
    {
        name: "DR. HAYA",
        experience: "9+ Years",
        image: "/images/team/dr-haya-team.webp",
        width: 470,
        height: 581,
        description: "Dr. Haya Khalid is a doctor by profession and a teacher by passion, with 9 years of teaching experience in Chemistry, Physics, & Biology. Holding an MBBS degree, her deep-rooted love for the sciences extends beyond medicine into inspiring young learners. During her academic journey, she discovered not only her affinity for the hard sciences but also her natural flair for teaching, igniting a career dedicated to shaping curious minds & guiding students toward academic excellence.",
    },
    {
        name: "DEEPAK",
        experience: "13+ Years",
        image: "/images/team/deepak-team.webp",
        width: 470,
        height: 581,
        description: "Deepak Irukullawar has 13 years of experience teaching Physics & Mathematics for IB, A Levels, & IGCSE. With a Master’s in Structural Engineering & Construction and certifications in Child Protection & Safeguarding and Dealing with People of Determination, he ensures a safe & supportive learning environment. Passionate about research & industry collaboration, he brings real-world applications into his teaching, helping students connect theory with practice for stronger academic mastery.",
    },
];

const coFoundersData = [
    {
        name: "Sumit Advani",
        image: "/images/sumit.webp",
        width: 546,
        height: 534,
        description: "Sumit, Co-Founder of Ignite Training Institute, holds a B.Sc. in IT along with a Diploma in Advertising & PR. With over 10 years of experience in the UAE’s education industry, he specializes in designing tailored academic programs that align with each student’s unique goals. Beyond academics, Sumit actively oversees the institute’s infrastructure & spearheads marketing initiatives, ensuring Ignite continues to deliver excellence both inside & outside the classroom.",
    },
    {
        name: "Mohnish Ahuja",
        image: "/images/mohnish.webp",
        width: 546,
        height: 534,
        description: "Mohnish, Co-Founder of Ignite Training Institute, holds a BMS degree & serves as the Head of Academics. With over 12 years of expertise in education, standardized testing, & student profile development, he brings a wealth of knowledge to the classroom. An IB-certified trainer and experienced A-Level educator, Mohnish is passionate about guiding students toward academic excellence. Driven by his vision, he is dedicated to transforming Ignite into a global hub for world-class education.",
    },
];

const adminStaffData = [
    {
        name: "Saif",
        image: "/images/saif.webp",
        width: 539,
        height: 494,
        description: "Saif, an ACCA-qualified professional, serves as the Student Coordinator & manages all student-related matters, from planning academic activities to ensuring smooth daily operations. With over 5 years of experience, Saif is committed to helping students achieve their goals & navigate the academic & admission process. Outside work, he enjoys reading, staying active through fitness routines, & pursuing his passion for house music by DJ’ing & mixing tracks, finding both creativity & relaxation in blending beats.",
    },
    {
        name: "Ahzeb",
        image: "/images/ahzeb.webp",
        width: 544,
        height: 494,
        description: "Ahzeb plays a key role by combining business development expertise with technical oversight. With over a decade of experience across diverse sales teams & cultures, he excels in crafting unique strategies, enrolling students in the right programs, coordinating schedules, providing tech support, & managing the company’s database. He works closely with teams, fosters partnerships, & contributes to performance reviews & new business initiatives. Outside of work, he’s a stand-up performer & avid writing enthusiast.",
    },
];

const sliceByWordCount = (text, wordLimit) => {
    const words = text.split(/\s+/);
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
};

const OurTeam = ({ headerHeight }) => {
    const [isMobileDevice, setIsMobileDevice] = useState(false);
    const [expandedCards, setExpandedCards] = useState({});

    useEffect(() => {
        const handleResize = () => setIsMobileDevice(window.innerWidth <= 768);
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleReadMore = (key) => {
        setExpandedCards(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <>
            <SEO
                title="Meet Our Expert Trainers | Know Our Team Better"
                description="Get to know Ignite Training Institute’s expert mentors in the UAE, shaping bright futures with 2000+ trained students & remarkable academic results"
            />

            <div style={{ paddingTop: `${headerHeight}px` }} className="innerpage">
                <TeamBanner />

                {/* --- Section 1: Co-Founders --- */}
                <section className={styles['meet-out-team']} data-scroll-section>
                    <div className="container">
                        <div className="text-center mb-5">
                            <div className={styles['meet-team-Headings']}>
                                <div data-scroll data-scroll-class="is-inview" data-scroll-repeat="true" className={styles['fade-in-section']} style={{ animationDelay: "0.1s" }}>
                                    <h2 className="SubHeading">MEET OUR TEAM</h2>
                                </div>
                                <h3 data-scroll data-scroll-class="is-inview" data-scroll-repeat="true" className={`${styles['fade-in-section']} ${styles.meetTitle}`} style={{ animationDelay: "0.2s" }}>
                                    Dedicated Ignite Trainers Shaping Bright<span className={styles.highlight}> Futures </span>
                                </h3>
                                <h2 data-scroll data-scroll-class="is-inview" data-scroll-repeat="true" className={`${styles['fade-in-section']} ${styles.cofounderTitle}`} style={{ animationDelay: "0.2s" }}>
                                    CO-FOUNDERS
                                </h2>
                            </div>
                        </div>
                        <div className={styles['meet-team-cards']}>
                            {coFoundersData.map((founder, index) => {
                                const key = `founder-${index}`;
                                const isExpanded = expandedCards[key];
                                return (
                                    <div className={styles['team-card']} key={key} data-scroll data-scroll-class="is-inview" data-scroll-repeat="true" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                                        <div className={styles['team-card-image']}>
                                            <img src={founder.image} alt={founder.name} width={founder.width} height={founder.height} />
                                        </div>
                                        <div className={styles['team-card-info']}>
                                            <div className={styles['team-card-name']}><h3>{founder.name}</h3></div>
                                            <div className={styles['team-card-content']}>
                                                <p className={`${styles.description} ${isExpanded ? styles.expanded : ""}`}>
                                                    {isExpanded ? founder.description : sliceByWordCount(founder.description, 16)}
                                                </p>
                                                <a href="#" onClick={(e) => { e.preventDefault(); toggleReadMore(key); }}>
                                                    {isExpanded ? "Read Less" : "Read More"}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* --- Section 2: Student Success Managers --- */}
                <section className={styles['admin-staff']} data-scroll-section>
                    <div className="container">
                        <div className={styles['meet-team-Headings']}>
                            <h2 className={styles.cofounderTitle}>STUDENT SUCCESS MANAGERS</h2>
                        </div>
                        <div className={styles['admin-staff-cards']}>
                            {adminStaffData.map((admin, index) => {
                                const key = `admin-${index}`;
                                const isExpanded = expandedCards[key];
                                return (
                                    <div className={styles['admin-card']} key={key} data-scroll data-scroll-class="is-inview" data-scroll-repeat="true" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                                        <div className={styles['admin-card-image']}><img src={admin.image} alt={admin.name} width={admin.width} height={admin.height} /></div>
                                        <div className={styles['admin-card-info']}>
                                            <div className={styles['admin-card-content']}>
                                                <p className={`${styles.description} ${isExpanded ? styles.expanded : ""}`}>
                                                    {isExpanded ? admin.description : sliceByWordCount(admin.description, 8)}
                                                </p>
                                                <a href="#" onClick={(e) => { e.preventDefault(); toggleReadMore(key); }}>
                                                    {isExpanded ? "Read Less" : "Read More"}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <MarqueeBanner />

                {/* --- Section 3: Trainers --- */}
                <section className={styles['trainer-section']} data-scroll-section>
                    <div className="container">
                        <div className={styles['meet-team-Headings']}>
                            <h2 className={styles.cofounderTitle}>Trainers</h2>
                        </div>
                        <div className={styles['trainer-cards']}>
                            {trainersData.map((trainer, index) => {
                                const key = `trainer-${index}`;
                                const isExpanded = expandedCards[key];
                                return (
                                    <div className={styles['trainer-card']} key={key} data-scroll data-scroll-class="is-inview" data-scroll-repeat="true" style={{ animationDelay: `${0.3 + index * 0.05}s` }}>
                                        <div className={styles['trainer-name']}><h3>{trainer.name}</h3></div>
                                        <div className={styles['trainer-image']}><img src={trainer.image} alt={trainer.name} width={trainer.width} height={trainer.height} /></div>
                                        <div className={styles['trainer-info']}>
                                            <p className={`${styles.description} ${isExpanded ? styles.expanded : ""}`}>
                                                {isExpanded ? trainer.description : trainer.description.slice(0, 150) + "..."}
                                            </p>
                                            <a href="#" onClick={(e) => { e.preventDefault(); toggleReadMore(key); }}>
                                                {isExpanded ? "Read Less" : "Read More"}
                                            </a>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* --- Section 4: CTA --- */}
                <section className={styles['cta-section']} data-scroll-section>
                    <div className={`${styles['call-to-action']} ${styles.teams} container`}>
                        <div className={styles['cta-container']}>
                            <div className={styles['cta-content']}>
                                <h2>Meet The Dedicated Educators {!isMobileDevice && <br />} Driving Student Success</h2>
                                <p>Get to know the passionate experts whose knowledge, guidance, & commitment inspire students to achieve their full potential.</p>
                                <div className={styles['cta-buttons']}>
                                    <a href="/our-team">
                                        <button className={styles['cta-button']}>
                                            <span>Join Our Team</span>
                                            <div className={styles.buttonIcon}><ArrowRight size={20} /></div>
                                        </button>
                                    </a>
                                    <a href="/join-free-demo-class">
                                        <button className={styles['cta-button']}>
                                            <span>Join a Free Demo</span>
                                            <div className={styles.buttonIcon}><ArrowRight size={20} /></div>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default OurTeam;