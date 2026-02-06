"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const GlobalPhoneInput = dynamic(() => import('../GlobalPhoneInput'), {
    ssr: false,
    loading: () => <div style={{ height: '50px', width: '100%', borderRadius: '40px', border: '1.5px solid rgba(255,255,255,0.3)' }} />
});

export default function InfoCard() {
    const handlePhoneChange = (value) => {
        setFormData((prevData) => ({
            ...prevData,
            phone: value,
        }));

        if (errors.phone) {
            setErrors(prevErrors => ({ ...prevErrors, phone: '' }));
        }
    };
    const [isMobile, setIsMobile] = useState(false);
    const [isMobileButton, setIsMobileButton] = useState(false);
    const [pageInfo, setPageInfo] = useState('');
    // Form Data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        school: "",
        grade: "",
        message: "",
        formType: "Organic_Curriculum",
    });

    // New state for validation errors
    const [errors, setErrors] = useState({});

    const [loading, setLoading] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState(null);
    useEffect(() => {
        const checkDevice = () => {
            setIsMobile(window.innerWidth <= 1100);
            setIsMobileButton(window.innerWidth <= 768);
        };

        checkDevice();
        window.addEventListener("resize", checkDevice);

        if (typeof window !== 'undefined') {
            const url = window.location.href;
            const title = window.document.title || window.location.pathname;

            setPageInfo(`URL: ${url} | Title/Path: ${title}`);
        }

        return () => window.removeEventListener("resize", checkDevice);
    }, []);
    const validate = () => {
        const newErrors = {};
        let isValid = true;

        // --- 1. Name Validation (Required) ---
        if (!formData.name.trim()) {
            newErrors.name = "Name is required.";
            isValid = false;
        }

        // --- 2. Email Validation (Required & Format) ---
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email address is invalid.";
            isValid = false;
        }


        // --- 3. Phone Validation (Optional, but if filled, must be 6-15 digits) ---
        // Note: We use a simple regex since Zoho handles the country code component.
        // if (formData.phone && !/^\d{6,15}$/.test(formData.phone)) {
        //   newErrors.phone = "Phone must be 6-15 digits.";
        //   isValid = false;
        // }
        else if (!formData.phone.trim()) {
            // Assume phone is required for this form
            newErrors.phone = "Phone number is required.";
            isValid = false;
        }

        // --- 4. Grade Validation (New - Required) ---
        if (!formData.grade.trim()) {
            newErrors.grade = "Grade is required.";
            isValid = false;
        }


        if (!formData.school.trim()) {
            newErrors.school = "School name is required.";
            isValid = false;
        }

        // --- 4. Course Validation (Required) ---
        // if (!formData.course.trim()) { // <--- ADDED: Course validation
        //   newErrors.course = "Course selection is required.";
        //   isValid = false;
        // }
        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // Clear the error for this specific field as the user types
        if (errors[name]) {
            setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmissionStatus(null);

        // --- STEP 1: RUN VALIDATION ---
        if (!validate()) {
            return;
        }

        // Validation passed, proceed with API call
        setLoading(true);

        try {
            // Create the object that includes the required pageinfo
            const dataToSend = {
                ...formData,
                pageinfo: pageInfo, // <-- This is the crucial data
            };

            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend), // ✅ CORRECT: Sending the object that includes pageinfo
            });
            const result = await response.json();
            if (response.ok && result.success && result.redirectUrl) {

                window.location.href = result.redirectUrl;

            } else {
                // Fallback for API success: false or missing redirectUrl
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
    return (
        <div className="info-card-container">
            <div
                className="position-relative overflow-hidden"
                style={{
                    height: "100%", // Fill the parent height
                }}
            >

                {/* Background Image moved to parent page for LCP optimization */}



                {/* Content container */}
                <div className="position-relative h-100" style={{ zIndex: 1 }}>
                    <div className="row g-0 h-100">
                        {/* Left Section - Now taking 8 columns (2/3) */}
                        <div className="col-lg-8 d-flex flex-column justify-content-center pe-lg-4 p-4 left-content v100">
                            <h1
                                className="fw-bold text-white text-uppercase mb-3 fade-in-section"
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat
                                style={{
                                    lineHeight: "1.2",
                                    maxWidth: "863px",
                                    animationDelay: "0.2s",
                                    fontSize: "2.6rem",
                                }}
                            >
                                <span className="mobile-text">
                                    Start Your Academic Journey With IB MYP Tutors In UAE
                                </span>
                                <span className="desktop-text">
                                    IB MYP Tutors In UAE To Begin<br /> Your Academic Journey
                                </span>
                            </h1>
                            <div className="divider fade-in-section"
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat
                                style={{
                                    animationDelay: "0.25s",
                                }}></div>

                            <h2
                                className="text-white fade-in-section fs-8 fs-md-10"
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat
                                style={{
                                    letterSpacing: "0.2em",
                                    fontWeight: "600",
                                    opacity: "1",
                                    animationDelay: "0.25s",
                                    fontSize: "inherit",  // forces same size as previous p tag class
                                    lineHeight: "inherit", // optional: keep same spacing
                                    marginTop: "19px",
                                    marginBottom: "26px",
                                }}
                            >
                                Ace Your eAssessments Strategically
                            </h2>

                            <div
                                className="d-flex flex-wrap justify-content-evenly p-4 mb-4 fw-semibold fade-in-section info-row"
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat
                                style={{
                                    background: "linear-gradient(to right, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
                                    backdropFilter: "blur(3px)",       // stronger blur (left side)
                                    WebkitBackdropFilter: "blur(3px)", // Safari
                                    borderRadius: "100px",
                                    maxWidth: "823px",
                                    fontSize: "0.9rem",
                                    animationDelay: "0.3s",
                                    border: "1px solid rgba(255, 255, 255, 0.30)",
                                }}

                            >

                                <h3
                                    className="d-flex flex-column align-items-center text-center text-white info-col"
                                    style={{
                                        borderRight: "1px solid rgba(255, 255, 255, 0.3)",
                                        paddingRight: isMobile ? "16px" : "3.7rem",
                                        margin: 0,
                                        fontSize: "inherit",
                                        fontWeight: "inherit",
                                        lineHeight: "inherit",
                                    }}
                                >
                                    <span className="mb-2 icon-wrap" style={{ color: "#acf2d6" }}>
                                        <Image
                                            src="/assets/medal.webp"
                                            alt="Grade Support"
                                            width={32}
                                            height={45}
                                            className="icon-img"
                                            style={{ width: "auto", height: "auto", maxHeight: "45px", maxWidth: "32px" }}
                                        />
                                    </span>
                                    Grade 8<br />To 10 Support
                                </h3>

                                {/* ---- BLOCK 2 ---- */}
                                <h3
                                    className="d-flex flex-column align-items-center text-center text-white info-col"
                                    style={{
                                        borderRight: "1px solid rgba(255, 255, 255, 0.3)",
                                        paddingRight: isMobile ? "16px" : "4rem",
                                        margin: 0,
                                        fontSize: "inherit",
                                        fontWeight: "inherit",
                                        lineHeight: "inherit",
                                    }}
                                >
                                    <span className="mb-2 icon-wrap" style={{ color: "#acf2d6" }}>
                                        <Image
                                            src="/assets/person.webp"
                                            alt="Learning Mode"
                                            width={isMobile ? 20 : 30}
                                            height={isMobile ? 30 : 45}
                                            className="icon-img"
                                        />
                                    </span>
                                    Online <br /> & In-Person
                                </h3>

                                {/* ---- BLOCK 3 ---- */}
                                <h3
                                    className="d-flex flex-column align-items-center text-center text-white info-col"
                                    style={{
                                        margin: 0,
                                        fontSize: "inherit",
                                        fontWeight: "inherit",
                                        lineHeight: "inherit",
                                    }}
                                >
                                    <span className="mb-2 icon-wrap" style={{ color: "#acf2d6" }}>
                                        <Image
                                            src="/assets/location.webp"
                                            alt="Location"
                                            width={isMobile ? 22 : 32}
                                            height={isMobile ? 30 : 42}
                                            className="icon-img"
                                        />
                                    </span>

                                    Dubai <br /> (DIFC, JLT)

                                </h3>

                            </div>

                            <p
                                className="fade-in-section text-white mb-4 pt-3 pt-md-4"
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat
                                style={{
                                    maxWidth: "750px",
                                    fontSize: "1.2rem",
                                    lineHeight: "1.8",
                                    fontWeight: "500",
                                    opacity: "0.9",
                                    // marginTop: isMobile ? "0" : "20px!important", Handled by pt-3 pt-md-4
                                }}
                            >
                                At Ignite, we provide year-round academic support through engaging, concept-driven MYP tutoring & expertly designed study resources, empowering students to approach their MYP exams with clarity & confidence.
                            </p>

                            <div className="d-flex gap-3 btnwraper fade-in-section"
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat>
                                <a
                                    href="/join-free-demo-class/"
                                    style={{ textDecoration: "none" }}
                                >
                                    <button
                                        className="btn cust-text btng fw-bold text-uppercase d-flex justify-content-between align-items-center shadow"
                                        style={{
                                            background: "linear-gradient(to right, #A3CAF5, #E7F6FF)",
                                            color: "#273972",
                                            borderRadius: "40px",
                                            fontSize: "1rem",
                                            padding: "10px 15px",
                                            boxShadow: "2px 4px 8px rgba(38, 66, 149, 0.5)",
                                            minWidth: isMobile ? "auto" : "auto", // ensures spacing looks consistent
                                            marginTop: isMobile ? "auto" : "20px",
                                            gap: isMobile ? "20px" : "20px",
                                        }}
                                    >
                                        <span style={{ letterSpacing: isMobile ? "0" : "0px" }}>
                                            Get A Free Demo
                                        </span>
                                        <img
                                            src="/assets/rar.webp"
                                            alt="ibdp tutor in dubai"
                                            className="custom-height"
                                            width={35}
                                            height={35}
                                        />
                                    </button>
                                </a>
                            </div>

                        </div>

                        {/* Right Section - Form - Now taking 4 columns (1/3) */}
                        <div
                            className="col-lg-4 form-bg mt-4 mt-lg-0 d-flex align-items-center fade-in-section position-relative right-form"
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-repeat
                            style={{ animationDelay: "0.6s" }}
                        >
                            {/* Rectangle background images positioned within form section */}
                            {/* <img
                src="/assets/rect1.webp"
                alt="ibdp tutor in dubai"
                className="testimonialRect rect-1"
                width={321}
                height={170}
              />
              <img
                src="/assets/rect2.webp"
                alt="ibdp tutor in dubai"
                className="testimonialRect rect-2"
                width={539}
                height={170}
              />
              <img
                src="/assets/rect3.webp"
                alt="ibdp tutor in dubai"
                className="testimonialRect rect-3"
                width={309}
                height={170}
              /> */}

                            <div
                                className="w-100 text-white form-container"
                            // style={{
                            //   borderRadius: "40px",
                            //   backgroundImage: "url('/assets/idbprect.webp')",
                            //   backgroundSize: "cover",
                            //   backgroundPosition: "center",
                            //   backgroundRepeat: "no-repeat",
                            //   minHeight: "550px",
                            //   gap: "5px",
                            //   minWidth: "550px",
                            //   display: "flex",
                            //   flexDirection: "column",
                            //   justifyContent: "center",
                            // }}
                            >
                                <form onSubmit={handleSubmit}>

                                    <input type="hidden" name="pageinfo" value="" />
                                    <p
                                        className="fw-bold text-uppercase mb-4 fade-in-section text-center form-heading"
                                        data-scroll
                                        data-scroll-class="is-inview"
                                        data-scroll-repeat
                                        style={{ animationDelay: "0.65s" }}
                                    >
                                        GET A FREE DEMO CLASS+ FREE STUDY RESOURCES
                                    </p>
                                    {submissionStatus === 'success' && (
                                        <div className="alert alert-success text-center">
                                            Thank you! Your submission was successful.
                                        </div>
                                    )}
                                    {submissionStatus === 'error' && (
                                        <div className="alert alert-danger text-center">
                                            Submission failed. Please try again.
                                        </div>
                                    )}

                                    <div
                                        className="mb-3 fade-in-section"
                                        data-scroll
                                        data-scroll-class="is-inview"
                                        data-scroll-repeat
                                        style={{ animationDelay: "0.7s" }}
                                    >
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="form-control bg-transparent text-white fw-semibold"
                                            placeholder="NAME"
                                            style={{
                                                border: "1.5px solid #FFFFFF",
                                                borderRadius: "40px",
                                                fontSize: "0.9rem",
                                                padding: "12px 15px",
                                            }}
                                        />
                                        {errors.name && <div className="invalid-feedback d-block fw-bold text-warning">{errors.name}</div>}
                                    </div>

                                    <div
                                        className="row g-2 mb-3 fade-in-section"
                                        data-scroll
                                        data-scroll-class="is-inview"
                                        data-scroll-repeat
                                        style={{ animationDelay: "0.75s" }}
                                    >
                                        <div className="col-6">
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="form-control bg-transparent text-white fw-semibold"
                                                placeholder="EMAIL"
                                                style={{
                                                    border: "1.5px solid #FFFFFF",
                                                    borderRadius: "40px",
                                                    fontSize: "0.9rem",
                                                    padding: "12px 15px",
                                                }}
                                            />
                                            {errors.email && <div className="invalid-feedback d-block fw-bold text-warning">{errors.email}</div>}
                                        </div>
                                        <div className="col-6">
                                            <GlobalPhoneInput
                                                value={formData.phone}
                                                onChange={handlePhoneChange}
                                                error={errors.phone}
                                            />
                                        </div>
                                    </div>

                                    {/* --- NEW GRADE FIELD HERE --- */}
                                    <div
                                        className="mb-3 fade-in-section"
                                        data-scroll
                                        data-scroll-class="is-inview"
                                        data-scroll-repeat
                                        style={{ animationDelay: "0.77s" }}
                                    >
                                        <input
                                            type="text"
                                            name="grade"
                                            value={formData.grade}
                                            onChange={handleChange}
                                            className="form-control bg-transparent text-white fw-semibold"
                                            placeholder="GRADE"
                                            style={{
                                                border: "1.5px solid #FFFFFF",
                                                borderRadius: "40px",
                                                fontSize: "0.9rem",
                                                padding: "12px 15px",
                                            }}
                                        />
                                        {errors.grade && <div className="invalid-feedback d-block fw-bold text-warning">{errors.grade}</div>}
                                    </div>
                                    {/* --- NEW GRADE FIELD HERE --- */}

                                    <div
                                        className="mb-3 fade-in-section"
                                        data-scroll
                                        data-scroll-class="is-inview"
                                        data-scroll-repeat
                                        style={{ animationDelay: "0.8s" }}
                                    >
                                        <input
                                            type="text"
                                            name="school"
                                            value={formData.school}
                                            onChange={handleChange}
                                            className="form-control bg-transparent text-white fw-semibold"
                                            placeholder="SCHOOL"
                                            style={{
                                                border: "1.5px solid #FFFFFF",
                                                borderRadius: "40px",
                                                fontSize: "0.9rem",
                                                padding: "12px 15px",
                                            }}
                                        />
                                        {errors.school && <div className="invalid-feedback d-block fw-bold text-warning">{errors.school}</div>}
                                    </div>


                                    <div
                                        className="mb-4 fade-in-section"
                                        data-scroll
                                        data-scroll-class="is-inview"
                                        data-scroll-repeat
                                        style={{ animationDelay: "0.85s" }}
                                    >
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="form-control bg-transparent text-white fw-semibold"
                                            placeholder="DROP A MESSAGE"
                                            rows="5"
                                            style={{
                                                border: "1.5px solid #FFFFFF",
                                                borderRadius: "25px",
                                                fontSize: "0.9rem",
                                                padding: "16px 15px",
                                                resize: "none",
                                            }}
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        data-scroll
                                        data-scroll-class="is-inview"
                                        data-scroll-repeat
                                        className="fade-in-section btn bt-width fw-bold text-uppercase d-flex align-items-center justify-content-between gap-3 width"
                                        style={{
                                            background: "transparent",
                                            color: "white",
                                            fontSize: "1rem",
                                            padding: "11px 28px",
                                            border: "1.5px solid rgba(255, 255, 255, 0.7)",
                                            borderRadius: "40px",
                                            transition: "all 0.3s ease",
                                            animationDelay: "0.85s"
                                        }}
                                    >
                                        {loading ? 'SUBMITTING...' : 'SUBMIT'}
                                        <img
                                            src={isMobile ? "/assets/mobilebutton.webp" : "/assets/rwb.webp"}
                                            alt="right"
                                            width={isMobile ? 35 : 40}
                                            height={isMobile ? 35 : 40}
                                        />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .info-card-container {
          width: 100%;
          height: 100%;
        }
        .form-control::placeholder {
          color: #ffffff !important;
          opacity: 0.5;
          font-weight: 600;
        }
        .info-row {
          -webkit-mask-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 1) 20%
          );
          -webkit-mask-repeat: no-repeat;
          -webkit-mask-size: 100% 100%;
          mask-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 1) 20%
          );
          mask-repeat: no-repeat;
          mask-size: "100% 100%";
        }

        /* Mobile fix */
        @media (max-width: 768px) {
          .info-row {
            -webkit-mask-image: linear-gradient(
              to right,
              rgba(0, 0, 0, 0),
              rgba(0, 0, 0, 1) 5%
            ) !important;
            mask-image: linear-gradient(
              to right,
              rgba(0, 0, 0, 0),
              rgba(0, 0, 0, 1) 5%
            ) !important;
          }
        }

        .divider {
          height: 1px;
          width: 828px;
          border-radius: 5px;
          background-color: gray;
        }
        .form-control:focus {
          background-color: transparent !important;
          border-color: rgba(255, 255, 255, 0.7) !important;
          box-shadow: none !important;
          color: white !important;
        }

        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        .fade-in-section.is-inview {
          opacity: 1;
          transform: translateY(0);
        }
        .fade-in-section.is-clipped {
          opacity: 1;
          transform: translateY(0);
        }

        /* Desktop form styling */
        .form-container {
          background: rgba(
            157,
            157,
            157,
            0.7
          );
          backdrop-filter: blur(12px);
          position: relative;
          z-index: 10;
        }

        /* iPad Mini (768px - 820px) */
        @media (min-width: 768px) and (max-width: 820px) {
          .position-relative.overflow-hidden {
            min-height: 650px !important;
          }

          .left-content {
            padding: 2rem 1.5rem !important;
          }

          .left-content h1 {
            font-size: 1.8rem !important;
            max-width: 95% !important;
          }

          .divider {
            width: 95% !important;
          }

          .info-row {
            max-width: 95% !important;
            padding: 1.2rem 0.8rem !important;
            font-size: 0.8rem !important;
          }

          .left-content p {
            font-size: 0.95rem !important;
            max-width: 95% !important;
            line-height: 1.5 !important;
          }

          .right-form {
            padding: 1rem !important;
          }

          .form-container {
            min-height: 500px !important;
            min-width: 280px !important;
            width: 95% !important;
            margin-left: 0 !important;
            margin-block: 20px !important;
            padding: 1rem !important;
          }

          .form-heading {
            font-size: 1.1rem !important;
            margin-bottom: 0.8rem !important;
            line-height: 1.3 !important;
          }

          .form-control {
            font-size: 0.75rem !important;
            padding: 8px 10px !important;
          }



          .form-container .btn {
            font-size: 0.8rem !important;
            padding: 8px 15px !important;
          }

          .bt-width {
            width: 70% !important;
          }
        }

        /* iPad Pro (1024px - 1199px) */
        @media (min-width: 1024px) and (max-width: 1199px) {
          .position-relative.overflow-hidden {
            min-height: 600px !important;
          }

          .left-content {
            padding: 2.5rem 2rem 2rem 2.5rem !important;
          }

          .left-content h1 {
            font-size: 1.5rem !important;
            max-width: 90% !important;
          }

          .divider {
            width: 85% !important;
          }

          .info-row {
            max-width: 85% !important;
            padding: 1.8rem 1.2rem !important;
            font-size: 0.9rem !important;
          }

          .left-content p {
            font-size: 1rem !important;
            max-width: 85% !important;
            line-height: 1.6 !important;
          }

          .right-form {
            padding: 1.5rem 1rem 1.5rem 0.5rem !important;
          }

          .form-container {
            min-height: 500px !important;
            min-width: 320px !important;
            width: 90% !important;
            margin-left: auto !important;
          }

          .form-heading {
            font-size: 1.2rem !important;
            margin-bottom: 1rem !important;
          }
        }

        /* Nest Hub / Tablets (Landscape ~1024px) */
        @media (max-width: 1024px) and (min-width: 821px) {
           .position-relative.overflow-hidden {
             min-height: 700px !important; /* Increase height for spacing */
           }

           .left-content {
             padding: 2rem !important;
           }

           .left-content h1 {
             font-size: 1.8rem !important;
           }
        }

        @media (min-width: 1025px) {
          .v100 {
            height: 100vh;
          }
        }
      `}</style>
        </div>
    );
}
