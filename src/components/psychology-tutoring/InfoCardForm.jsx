"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const GlobalPhoneInput = dynamic(() => import('../GlobalPhoneInput'), {
    ssr: false,
    loading: () => <div style={{ height: '50px', width: '100%', borderRadius: '40px', border: '1.5px solid rgba(255,255,255,0.3)' }} />
});

export default function InfoCardForm() {
    const [isMobile, setIsMobile] = useState(false);
    const [pageInfo, setPageInfo] = useState('');

    // Form Data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        grade: "",
        school: "",
        course: "",
        message: "",
        type: 'Organic_Subject',
    });

    // Validation errors
    const [errors, setErrors] = useState({});

    const [loading, setLoading] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState(null);

    const handlePhoneChange = (value) => {
        setFormData((prevData) => ({
            ...prevData,
            phone: value,
        }));

        if (errors.phone) {
            setErrors(prevErrors => ({ ...prevErrors, phone: '' }));
        }
    };

    useEffect(() => {
        const checkDevice = () => {
            setIsMobile(window.innerWidth <= 1100);
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

    const validate = () => {
        const newErrors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = "Name is required.";
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email address is invalid.";
            isValid = false;
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required.";
            isValid = false;
        }

        if (!formData.grade.trim()) {
            newErrors.grade = "Grade is required.";
            isValid = false;
        }
        if (!formData.school.trim()) {
            newErrors.school = "School name is required.";
            isValid = false;
        }

        if (!formData.course.trim()) {
            newErrors.course = "Course selection is required.";
            isValid = false;
        }
        setErrors(newErrors);
        return isValid;
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
        <div
            className="col-lg-4 form-bg mt-4 mt-lg-0 d-flex align-items-center fade-in-section position-relative right-form"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.6s" }}
        >
            <div className="w-100 text-white form-container">
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

                    <div
                        className="row g-2 mb-3 fade-in-section"
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat
                        style={{ animationDelay: "0.75s" }}
                    >
                        <div className="col-4">
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
                        <div className="col-8">
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
                    </div>

                    <div
                        className="mb-3 fade-in-section"
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat
                        style={{ animationDelay: "0.8s" }}
                    >
                        <select
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            className="form-control bg-transparent text-white fw-semibold"
                            style={{
                                border: "1.5px solid #FFFFFF",
                                borderRadius: "40px",
                                fontSize: "0.9rem",
                                padding: "12px 15px",
                                appearance: "none",
                            }}
                        >
                            <option value="" disabled selected={!formData.course}>SELECT YOUR COURSE</option>
                            <option value="International Baccalaureate (IB)">International Baccalaureate (IB)</option>
                            <option value="IGCSE/GCSE">IGCSE/GCSE</option>
                            <option value="A-Levels">A-Levels</option>
                            <option value="Advanced Placements (AP)">Advanced Placements (AP)</option>
                        </select>
                        {errors.course && <div className="invalid-feedback d-block fw-bold text-warning">{errors.course}</div>}
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

            <style jsx>{`
        .form-control::placeholder {
          color: #ffffff !important;
          opacity: 0.5;
          font-weight: 600;
        }

        select.form-control {
          color: white; 
          appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          background-size: 1em;
        }
        
        select.form-control option {
            color: black;
            background: white;
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

        /* Desktop form styling */
        .form-container {
          background: rgba(157, 157, 157, 0.7);
          backdrop-filter: blur(12px);
          position: relative;
          z-index: 10;
        }

        /* iPad Mini */
        @media (min-width: 768px) and (max-width: 820px) {
          .right-form { padding: 1rem !important; }
          .form-container {
            min-height: 500px !important;
            min-width: 280px !important;
            width: 95% !important;
            margin-left: 0 !important;
            margin-block: 20px !important;
            padding: 1rem !important;
          }
           .form-heading { font-size: 1.1rem !important; margin-bottom: 0.8rem !important; line-height: 1.3 !important; }
           .form-control { font-size: 0.75rem !important; padding: 8px 10px !important; }
           .form-container .btn { font-size: 0.8rem !important; padding: 8px 15px !important; }
           .bt-width { width: 70% !important; }
        }

        /* iPad Pro */
        @media (min-width: 1024px) and (max-width: 1199px) {
          .right-form { padding: 1.5rem 1rem 1.5rem 0.5rem !important; }
          .form-container {
             min-height: 500px !important;
             min-width: 320px !important;
             width: 98% !important;
             margin-left: 0 !important;
             margin-block: 25px !important;
             padding: 1.4rem 1.2rem !important;
          }
           .form-heading { font-size: 1.1rem !important; margin-bottom: 1rem !important; line-height: 1.3 !important; }
           .form-control { font-size: 0.85rem !important; padding: 10px 12px !important; }
           textarea.form-control { padding: 12px !important; }
           .form-container .btn { font-size: 0.9rem !important; padding: 10px 18px !important; }
           .bt-width { width: 65% !important; }
        }

        @media (min-width: 992px) {
           .col-lg-4 {
             flex: 0 0 33.333333% !important;
             max-width: 33.333333% !important;
             padding-left: 1rem !important;
           }
           .right-form { padding: 1rem 3rem 1rem 2rem !important; }
           .form-container {
              padding: 1.5rem 1.5rem !important;
              margin: 0 !important;
              max-width: 100%;
              width: 110% !important;
              margin-left: -5% !important;
              border-radius: 40px; /* Force border radius as it was in original */
           }
           .form-heading {
             font-size: 1.2rem !important;
             text-align: center !important;
             line-height: 1.3 !important;
             margin-bottom: 1.5rem !important;
           }
           .form-control { font-size: 0.85rem !important; padding: 10px 15px !important; }
           textarea.form-control { padding: 14px 15px !important; }
           .form-container .btn { font-size: 0.9rem !important; padding: 10px 25px !important; }
        }

        @media (min-width: 1400px) {
            .right-form { padding: 1.5rem 4rem 1.5rem 2.5rem !important; }
            .form-container { padding: 1.8rem 2rem !important; width: 108% !important; margin-left: -4% !important; }
            .form-heading { font-size: 1.3rem !important; line-height: 1.4 !important; }
            .form-control { font-size: 0.9rem !important; padding: 12px 18px !important; }
            textarea.form-control { pattern: 16px 18px !important; }
            .form-container .btn { font-size: 0.95rem !important; padding: 12px 30px !important; }
        }

        @media (min-width: 1920px) {
             .right-form { padding: 3rem 5rem 3rem 3rem!important; }
             .form-container { padding: 2rem 2.5rem !important; width: 105% !important; margin-left: -2.5% !important; }
             .form-heading { font-size: 1.8rem !important; }
             .form-control { font-size: 0.95rem !important; padding: 21px 20px !important; }
             textarea.form-control { padding: 18px 20px !important; }
             .form-container .btn { font-size: 1rem !important; padding: 14px 11px 14px 22px !important }
        }

        @media (max-width: 991.98px) {
             .form-bg { position: relative; }
             .form-container {
                position: relative;
                z-index: 1;
                background: transparent !important;
                opacity: 1 !important;
                backdrop-filter: none !important;
                padding-top: 5rem !important;
                width: 100% !important;
                margin-left: 0 !important;
                box-shadow: none !important;
             }
             .col-lg-4 {
                 width: 100% !important;
                 order: 2 !important;
                 margin-top: 0 !important;
                 padding: 0 0.5rem 2rem !important;
             }
             .form-container h2 {
                font-size: 1.2rem !important;
                text-align: center !important;
                line-height: 1.2 !important;
                margin-bottom: 1.2rem !important;
                font-weight: 700 !important;
                margin-top: 47px;
             }
             .form-control { font-size: 0.8rem !important; padding: 10px 12px !important; }
             textarea.form-control { padding: 12px !important; }
             .width { width:70% !important; }
             .form-container .btn {
                font-size: 0.85rem !important;
                padding: 12px 12px 12px 24px!important;
                max-width: none !important;
                display: flex !important;
                justify-content: space-between !important;
             }
        }
        
         @media (max-width: 1100px) {
           .fade-in-section {
             opacity: 1 !important;
             visibility: visible !important;
             transform: none !important;
             transition: none !important;
             animation: none !important;
           }
         }
      `}</style>
        </div>
    );
}
