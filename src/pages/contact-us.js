import React, { useState, useEffect } from "react";
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
import ContactBanner from "@/components/contact/Banner";
import styles from "@/styles/contact/contact.module.css";

const Contact = ({ headerHeight }) => {
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
        formType: "CONTACT_US",
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState(null);
    const [pageInfo, setPageInfo] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const url = window.location.href;
            const title = window.document.title || window.location.pathname;
            setPageInfo(`URL: ${url} | Title/Path: ${title}`);
        }
    }, []);

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
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
        }
    };

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
                pageinfo: pageInfo,
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
                window.location.href = result.redirectUrl;
            } else {
                setSubmissionStatus('error');
            }
        } catch (error) {
            setSubmissionStatus('error');
        } finally {
            setLoading(false);
        }
    };

    const educationalOrganizationSchema = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Ignite Training Institute",
        "url": "https://ignitetraininginstitute.com/",
        "logo": "https://ignitetraininginstitute.com/wp-content/uploads/2023/02/ignitefinallogos_1.svg",
        "description": "Ignite Training Institute offers expert tutoring in Dubai for IB, IGCSE, A-Levels, AP, SAT, ACT, MYP, and homeschooling programs.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Al Moosa Tower 1 - 1503 - Sheikh Zayed Rd",
            "addressLocality": "Dubai",
            "addressCountry": "United Arab Emirates"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+971588589958",
            "contactType": "customer service",
            "areaServed": "AE",
            "availableLanguage": ["English", "Arabic"]
        }
    };

    return (
        <>
            <SEO title="Contact Ignite Training Institute In Dubai, UAE"
                description="Contact Ignite Training Institute in Dubai, UAE, for expert tutoring in IB, IGCSE, A-Levels, AP, & test prep." />
            <JsonLd schema={educationalOrganizationSchema} />

            <div style={{ paddingTop: `${headerHeight}px` }} className="innerpage">
                <section data-scroll-section>
                    <ContactBanner />
                </section>

                <section className={`${styles.highlightBanners} ${styles.fadeInSection}`}
                    data-scroll
                    data-scroll-class={styles.isInview}
                    data-scroll-repeat>
                    <h2 className={`${styles.banner} ${styles.greenBanner} mb-0`}>
                        <span className={styles.textNormal}>WANNA EXCEL</span>
                        <span className={styles.textBold}>ACADEMICALLY?</span>
                    </h2>

                    <h3 className={`${styles.banner} ${styles.blueBanner} mb-0`}>
                        <span className={styles.textNormal}>LOOKING FOR BEST TUTORS</span>
                        <span className={styles.textBold}>TO LEARN?</span>
                    </h3>
                </section>

                <section className={`${styles.contactForm} ${styles.fadeInSection}`}
                    data-scroll
                    data-scroll-class={styles.isInview}
                    data-scroll-repeat>
                    <form onSubmit={handleSubmit}>
                        {submissionStatus === 'error' && (
                            <div className={`${styles.alertDanger} text-center mb-3`}>
                                Submission failed. Please try again.
                            </div>
                        )}
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label>NAME</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <div className={styles.errorMessage}>{errors.name}</div>}
                            </div>
                            <div className={styles.formGroup}>
                                <label>EMAIL</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <div className={styles.errorMessage}>{errors.email}</div>}
                            </div>
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label>CONTACT</label>
                                <div className={styles.phoneInput}>
                                    <span className={styles.flag}>🇦🇪</span>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+971"
                                    />
                                </div>
                                {errors.phone && <div className={styles.errorMessage}>{errors.phone}</div>}
                            </div>
                            <div className={styles.formGroup}>
                                <label>GRADE</label>
                                <input
                                    type="text"
                                    name="grade"
                                    value={formData.grade}
                                    onChange={handleChange}
                                />
                                {errors.grade && <div className={styles.errorMessage}>{errors.grade}</div>}
                            </div>
                        </div>

                        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                            <label>SCHOOL</label>
                            <input
                                type="text"
                                name="school"
                                value={formData.school}
                                onChange={handleChange}
                            />
                            {errors.school && <div className={styles.errorMessage}>{errors.school}</div>}
                        </div>

                        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                            <label>MESSAGE (OPTIONAL)</label>
                            <textarea
                                rows="3"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                            <label>COURSES</label>
                            <select
                                name="courses"
                                value={formData.courses}
                                onChange={handleChange}
                            >
                                <option value="">Select</option>
                                <option value="Maths">Maths</option>
                                <option value="English">English</option>
                                <option value="Third Choice">Third Choice</option>
                            </select>
                        </div>

                        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                            <label>YOU HEARD ABOUT US THROUGH?</label>
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
                        </div>

                        <div className={styles.formActions}>
                            <button type="submit" className={styles.submitBtn} disabled={loading}>
                                {loading ? 'SUBMITTING...' : 'SUBMIT'}
                                <span className={styles.arrow}>
                                    <img src="/images/right-arrow-skyblue.webp" alt="contact ignite training institute" />
                                </span>
                            </button>
                        </div>
                    </form>
                </section>

                <section className={`${styles.contactContainer} ${styles.fadeInSection}`}
                    data-scroll
                    data-scroll-class={styles.isInview}
                    data-scroll-repeat>
                    <div className={styles.contactGrid}>
                        <div className={`${styles.contactCard} ${styles.green}`}>
                            <img src="/images/email.webp" alt="contact" />
                            <h3>EMAIL US</h3>
                            <p>Email us now for expert tutoring and tailored growth solutions.</p>
                            <a href="mailto:hello@ignitetraininginstitute.com">hello@ignitetraininginstitute.com</a>
                        </div>

                        <div className={`${styles.contactCard} ${styles.green}`}>
                            <img src="/images/call.webp" alt="contact" />
                            <h3>CALL US</h3>
                            <p>Call us today for personalised tutoring and transformative growth.</p>
                            <a href="tel:+971568357374">+971 56835 7374</a>
                        </div>
                    </div>

                    <div className={`${styles.contactVisit} ${styles.blue}`}>
                        <img src="/images/location-map.webp" alt="location" />
                        <h3>VISIT US</h3>
                        <p>Visit us for personalized coaching and guidance toward lasting success!</p>
                        <address>
                            1503, Al Moosa Tower 1, Sheikh Zayed Road, Near Emirates Towers Metro (Sea Side), Dubai <br /><br />
                            Tiffany Tower - Level 11 Cluster W - Jumeirah Lake Towers - Dubai
                        </address>
                    </div>
                </section>

                <section className={`${styles.map} ${styles.fadeInSection}`}
                    data-scroll
                    data-scroll-class={styles.isInview}
                    data-scroll-repeat>
                    <iframe
                        src="https://maps.google.com/maps?q=Al%20Moosa%20Tower%201,%20Dubai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </section>
            </div>
        </>
    );
};

export default Contact;