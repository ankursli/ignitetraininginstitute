import React, { useState, useEffect } from "react";
// Import the reusable schema component
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
import ContactBanner from "@/components/contact/Banner";


// 1. Accept the headerHeight prop
const Contact = ({ headerHeight }) => {

    // 💡 NEW STATE FOR FORM LOGIC
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        grade: "",
        school: "",
        message: "",
        tests_courses: "",
        courses: "",
        heard_about: "",
        formType: "CONTACT_US", // Crucial for API routing
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState(null);
    const [pageInfo, setPageInfo] = useState(''); // To capture URL context

    // 💡 CAPTURE PAGE INFO (similar to InfoCard.jsx)
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const url = window.location.href;
            const title = window.document.title || window.location.pathname;
            setPageInfo(`URL: ${url} | Title/Path: ${title}`);
        }
    }, []);

    // 💡 VALIDATION FUNCTION
    const validate = () => {
        const newErrors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = "Name is required.";
            isValid = false;
        }
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Valid email is required.";
            isValid = false;
        }
        // Assuming phone is required
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required.";
            isValid = false;
        }
        // Assuming at least one course/test selection is required
        // if (!formData.tests_courses && !formData.courses) {
        //     newErrors.tests_courses = "Please select a test or a course.";
        //     newErrors.courses = "Please select a test or a course.";
        //     isValid = false;
        // }

        setErrors(newErrors);
        return isValid;
    };


    // 💡 HANDLE CHANGE FUNCTION
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // Clear the error for this specific field
        if (errors[name]) {
            setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
        }
    };

    // 💡 HANDLE SUBMIT FUNCTION
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmissionStatus(null);

        if (!validate()) {
            return;
        }

        setLoading(true);

        try {
            const dataToSend = {
                ...formData,
                pageinfo: pageInfo, // Add page context
            };

            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
            });

            const result = await response.json();

            if (response.ok && result.success && result.redirectUrl) {
                // Success: Redirect to the thank-you page determined by the API
                window.location.href = result.redirectUrl;
            } else {
                console.error('Submission failed via API:', result.message || 'Unknown error');
                setSubmissionStatus('error');
            }
        } catch (error) {
            console.error('API call failed:', error);
            setSubmissionStatus('error');
        } finally {
            setLoading(false);
        }
    };


    // ----------------------------------------------------
    // 燥 JSON-LD SCHEMA DEFINITION FOR THIS PAGE
    // ----------------------------------------------------
    const educationalOrganizationSchema = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Ignite Training Institute",
        "url": "https://ignitetraininginstitute.com/",
        "logo": "https://ignitetraininginstitute.com/wp-content/uploads/2023/02/ignitefinallogos_1.svg",
        "description": "Ignite Training Institute offers expert tutoring in Dubai for IB, IGCSE, A-Levels, AP, SAT, ACT, MYP, and homeschooling programs. With qualified tutors and personalized learning, Ignite supports students in achieving academic success.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Al Moosa Tower 1 - 1503 - Sheikh Zayed Rd - near Emirates Towers Metro (Sea Side - Trade Centre - Trade Centre 1",
            "addressLocality": "Dubai",
            "addressCountry": "United Arab Emirates"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+971588589958",
            "contactType": "customer service",
            "areaServed": "AE",
            "availableLanguage": ["English", "Arabic"]
        },
        "sameAs": [
            "https://www.instagram.com/ignitetraininginstitute/",
            "https://ae.linkedin.com/company/ignite-training-institute",
            "https://www.facebook.com/ignitetraininginstitute"
        ]
    };


    return (
        <>
            <SEO title="Contact Us"
                description="Get in touch with our academic experts to clearly understand the tutoring process & successfully kickstart your academic journey today!" />
            {/* 燥 SCHEMA INJECTION: Use the reusable component here */}
            <JsonLd schema={educationalOrganizationSchema} />

            {/* 3. Apply the headerHeight as paddingTop to fix the sticky header issue. */}
            <div style={{ paddingTop: `${headerHeight}px` }} className="innerpage">
                <section data-scroll-section>
                    <ContactBanner />
                </section>

                <section className="highlight-banners fade-in-section"
                    data-scroll
                    data-scroll-class="is-inview"
                    data-scroll-repeat>
                    <h2 className="banner green-banner mb-0">
                        <span className="text-normal">WANNA EXCEL</span>
                        <span className="text-bold">ACADEMICALLY?</span>
                    </h2>

                    <h3 className="banner blue-banner mb-0">
                        <span className="text-normal">LOOKING FOR BEST TUTORS</span>
                        <span className="text-bold">TO LEARN?</span>
                    </h3>
                </section>
                <section className="contact-form fade-in-section"
                    data-scroll
                    data-scroll-class="is-inview"
                    data-scroll-repeat>
                    {/* 💡 WRAP FORM IN onSubmit HANDLER */}
                    <form onSubmit={handleSubmit}>
                        {submissionStatus === 'error' && (
                            <div className="alert alert-danger text-center mb-3">
                                Submission failed. Please try again.
                            </div>
                        )}
                        <div className="form-row">
                            <div className="form-group">
                                <label>NAME</label>
                                {/* 💡 ADD props: name, value, onChange */}
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder=""
                                />
                                {errors.name && <div className="error-message">{errors.name}</div>}
                            </div>
                            <div className="form-group">
                                <label>EMAIL</label>
                                {/* 💡 ADD props: name, value, onChange */}
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder=""
                                />
                                {errors.email && <div className="error-message">{errors.email}</div>}
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>CONTACT</label>
                                <div className="phone-input">
                                    {/* Updated flag to better represent UAE */}
                                    <span className="flag">🇦🇪</span>
                                    {/* 💡 ADD props: name, value, onChange */}
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+971"
                                    />
                                </div>
                                {errors.phone && <div className="error-message">{errors.phone}</div>}
                            </div>
                            <div className="form-group">
                                <label>GRADE</label>
                                {/* 💡 ADD props: name, value, onChange */}
                                <input
                                    type="text"
                                    name="grade"
                                    value={formData.grade}
                                    onChange={handleChange}
                                    placeholder=""
                                />
                                {errors.grade && <div className="error-message">{errors.grade}</div>}
                            </div>
                        </div>

                        <div className="form-group full-width">
                            <label>SCHOOL</label>
                            {/* 💡 ADD props: name, value, onChange */}
                            <input
                                type="text"
                                name="school"
                                value={formData.school}
                                onChange={handleChange}
                                placeholder=""
                            />
                            {errors.school && <div className="error-message">{errors.school}</div>}
                        </div>

                        <div className="form-group full-width">
                            <label>MESSAGE (OPTIONAL)</label>
                            {/* 💡 ADD props: name, value, onChange */}
                            <textarea
                                rows="3"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                            {errors.message && <div className="error-message">{errors.message}</div>}
                        </div>

                        {/* <div className="form-group full-width">
                            <label>TESTS / COURSES</label>
                          
                            <select
                                name="tests_courses"
                                value={formData.tests_courses}
                                onChange={handleChange}
                            >
                                <option value="">Select</option>
                                
                                <option value="IB Diploma">IB Diploma</option>
                                <option value="IB MYP">IB MYP</option>
                                <option value="IGCSE">IGCSE</option>
                                <option value="A-Levels">A-Levels</option>
                                <option value="Homeschooling">Homeschooling</option>
                                <option value="EmSAT">EmSAT</option>
                                <option value="ACT">ACT</option>
                                <option value="Advanced Placements">Advanced Placements</option>
                                <option value="STEM (Undergraduate)">STEM (Undergraduate)</option>
                                <option value="STEM (Others)">STEM (Others)</option>
                            </select>
                            {errors.tests_courses && <div className="error-message">{errors.tests_courses}</div>}
                        </div> */}

                        <div className="form-group full-width">
                            <label>COURSES</label>
                            {/* 💡 ADD props: name, value, onChange and use Zoho options */}
                            <select
                                name="courses"
                                value={formData.courses}
                                onChange={handleChange}
                            >
                                <option value="">Select</option>
                                {/* Options from contact-zoho.html */}
                                <option value="Maths">Maths</option>
                                <option value="English">English</option>
                                <option value="Third Choice">Third Choice</option>
                            </select>
                            {errors.courses && <div className="error-message">{errors.courses}</div>}
                        </div>

                        <div className="form-group full-width">
                            <label>YOU HEARD ABOUT US THROUGH?</label>
                            {/* 💡 ADD props: name, value, onChange (Assuming this is for lead source) */}
                            <select
                                name="heard_about"
                                value={formData.heard_about}
                                onChange={handleChange}
                            >
                                <option value="">Select</option>
                                <option>Friends</option>
                                <option>Social Media</option>
                                <option>Google Search</option>
                            </select>
                            {errors.heard_about && <div className="error-message">{errors.heard_about}</div>}
                        </div>
                        <div className="form-actions">
                            <button type="submit" className="submit-btn" disabled={loading}>
                                {loading ? 'SUBMITTING...' : 'SUBMIT'}
                                <span className="arrow">
                                    <img src="/images/right-arrow-skyblue.webp" alt="contact ignite training institute" width={57} height={57} />
                                </span>
                            </button>
                        </div>
                    </form>
                    {/* 💡 SIMPLE CSS FOR ERROR MESSAGES (You may need to define this in your stylesheet) */}
                    <style jsx global>{`
                        .error-message {
                            color: red;
                            font-size: 0.85rem;
                            margin-top: 5px;
                            font-weight: bold;
                        }
                        .alert-danger {
                            color: #721c24;
                            background-color: #f8d7da;
                            border-color: #f5c6cb;
                            padding: 0.75rem 1.25rem;
                            border-radius: 0.25rem;
                        }
                    `}</style>
                </section>
                <section className="contact-container fade-in-section"
                    data-scroll
                    data-scroll-class="is-inview"
                    data-scroll-repeat>

                    <div className="contact-grid">
                        <div className="contact-card green">
                            <img src="/images/email.webp" alt="contact ignite training institute" width={117} height={117} />
                            <h3>EMAIL US</h3>
                            <p>Email us now for expert tutoring and tailored growth solutions.</p>
                            <a href="mailto:hello@ignitetraininginstitute.com">hello@ignitetraininginstitute.com</a>
                        </div>

                        <div className="contact-card green">
                            <img src="/images/call.webp" alt="contact ignite training institute" width={117} height={117} />
                            <h3>CALL US</h3>
                            <p>Call us today for personalised tutoring and transformative growth.</p>
                            <a href="tel:+971568357374">+971 56835 7374</a>
                        </div>
                    </div>


                    <div className="contact-visit blue">
                        <img src="/images/location-map.webp" alt="contact ignite training institute" width={99} height={99} />
                        <h3>VISIT US</h3>
                        <p>Visit us for personalized coaching and guidance toward lasting success!</p>
                        <address>
                            1503, Al Moosa Tower 1, Sheikh Zayed Road, Near Emirates Towers Metro (Sea Side), Dubai <br /><br />
                            Tiffany Tower - Level 11 Cluster W - Jumeirah Lake Towers - Dubai - United Arab Emirates
                        </address>

                    </div>
                </section>
                <section className="map fade-in-section"
                    data-scroll
                    data-scroll-class="is-inview"
                    data-scroll-repeat>
                    <iframe
                        // NOTE: Changed to a safe, valid Google Maps URL format for embedding if necessary
                        src="https://maps.google.com/maps?q=Al%20Moosa%20Tower%201,%20Dubai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </section>
            </div >
        </>
    );
};

export default Contact;