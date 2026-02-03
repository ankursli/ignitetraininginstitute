"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import GlobalPhoneInput from '../GlobalPhoneInput';

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
    <div
      className=""
      style={{
        maxWidth: isMobile ? "95vw" : "90vw",
        marginInline: "auto",
        marginBlock: isMobile ? "0" : "0",
        animationDelay: "0.1s",
      }}
    >
      <div
        className="position-relative overflow-hidden"
        style={{
          backgroundImage: "url('/assets/1stcard.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "1.5rem",
          minHeight: "750px",
        }}
      >
        {/* Dark overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100 fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
          style={{
            background: "rgba(0, 0, 0, 0.6)",
            borderRadius: "1.5rem",
            animationDelay: "0.15s",
          }}
        ></div>

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
                {isMobile ? (
                  <>
                    IBDP Tutors In Dubai, UAE For Curriculum Excellence
                  </>
                ) : (
                  <>
                    IBDP Tutors in Dubai,<br /> UAE Helping You Excel
                  </>
                )}
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
                Max Out To 45 Scores In IBDP
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
                      width={isMobile ? 20 : 32}
                      height={isMobile ? 30 : 45}
                      className="icon-img"
                    />
                  </span>
                  Grade 11<br />& 12 Support
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
                className={`fade-in-section text-white mb-4 ${isMobile ? 'pt-3' : ''}`}
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat
                style={{
                  maxWidth: "750px",
                  fontSize: "1.2rem",
                  lineHeight: "1.8",
                  fontWeight: "500",
                  opacity: "0.9",
                  marginTop: isMobile ? "0" : "20px!important",
                }}
              >
                We specialize in expert tutoring support for the IB Diploma Programme across all subject groups. Our structured approach combines in-depth resources, focused training, & rigorous testing for consistent results.
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
              <img
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
              />

              <div
                className="w-100 text-white form-container"
                style={{
                  borderRadius: "40px",
                  backgroundImage: "url('/assets/idbprect.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  minHeight: "550px",
                  gap: "5px",
                  minWidth: "550px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
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

          textarea.form-control {
            padding: 10px !important;
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
            width: 98% !important;
            margin-left: 0 !important;
            margin-block: 25px !important;
            padding: 1.4rem 1.2rem !important;
          }

          .form-heading {
            font-size: 1.1rem !important;
            margin-bottom: 1rem !important;
            line-height: 1.3 !important;
          }

          .form-control {
            font-size: 0.85rem !important;
            padding: 10px 12px !important;
          }

          textarea.form-control {
            padding: 12px !important;
          }

          .form-container .btn {
            font-size: 0.9rem !important;
            padding: 10px 18px !important;
          }

          .bt-width {
            width: 65% !important;
          }
        }

        @media (max-width: 768px) {
          .responsive-title {
            line-height: 1 !important;
            font-size: 40px !important;
          }
          .form-container{
            min-width:auto !important;
          }
          .divider {
            height: 1px;
            width: auto !important;
            border-radius: 5px;
            background-color: gray;
            margin-bottom: 10px;
          }
        }
        /* Rectangle positioning */
        .testimonialRect {
          position: absolute;
          opacity: 1;
          pointer-events: none;
          z-index: 2;
        }

        .rect-1 {
          top: 3%;
          left: 10%;
          width: 80px;
          height: 30px;
          display: none !important;
        }

        .rect-2 {
          top: 5%;
          right: 10%;
          width: 50px;
          height: 25px;
          display: none !important;
        }

        .rect-3 {
          bottom: 20%;
          right: 15%;
          width: 55px;
          height: 28px;
          display: none !important;
        }

        /* Adjust column proportions for true 2/3 and 1/3 */
        @media (min-width: 992px) {
          .col-lg-8 {
            flex: 0 0 66.666667% !important;
            max-width: 62.666667%!important;
            padding-right: 1rem !important;
          }

          .col-lg-4 {
            flex: 0 0 33.333333% !important;
            max-width: 33.333333% !important;
            padding-left: 1rem !important;
          }

          .left-content {
            padding: 3rem 2rem 3rem 3rem !important;
          }

          .right-form {
            padding: 1rem 3rem 1rem 2rem !important;
          }

          .form-container {
            padding: 1.5rem 1.5rem !important;
            margin: 0 !important;
            max-width: 100%;
            width: 110% !important;
            margin-left: -5% !important;
          }

          .form-heading {
            font-size: 1.2rem !important;
            text-align: center !important;
            line-height: 1.3 !important;
            margin-bottom: 1.5rem !important;
          }

          .form-control {
            font-size: 0.85rem !important;
            padding: 10px 15px !important;
          }

          textarea.form-control {
            padding: 14px 15px !important;
          }

          .form-container .btn {
            font-size: 0.9rem !important;
            padding: 10px 25px !important;
          }
        }

        /* Enhanced spacing for larger screens while maintaining proportions */
        @media (min-width: 1400px) {
          .left-content {
            padding: 4rem 2.5rem 4rem 4rem !important;
          }
          .bt-width{
            font-size:16px;
            letter-spacing:3px;
            width:65%
          }

          .right-form {
            padding: 1.5rem 4rem 1.5rem 2.5rem !important;
          }

          .form-container {
            padding: 1.8rem 2rem !important;
            width: 108% !important;
            margin-left: -4% !important;
          }

          .form-heading {
            font-size: 1.3rem !important;
            line-height: 1.4 !important;
          }

          .form-control {
            font-size: 0.9rem !important;
            padding: 12px 18px !important;
          }

          textarea.form-control {
            padding: 16px 18px !important;
          }

          .form-container .btn {
            font-size: 0.95rem !important;
            padding: 12px 30px !important;
          }
        }

        /* Further spacing adjustments for very large screens */
        @media (min-width: 1920px) {
          .left-content {
            padding:5rem 3rem 5rem 5rem!important;
            gap:5px !important;
          }

          .right-form {
            padding: 3rem 5rem 3rem 3rem!important;
          }

          .form-container {
            padding: 2rem 2.5rem !important;
            width: 105% !important;
            margin-left: -2.5% !important;
          }

          .form-heading {
            font-size: 1.8rem !important;
          }

          .form-control {
            font-size: 0.95rem !important;
            padding: 21px 20px !important;
          }

          textarea.form-control {
            padding: 18px 20px !important;
          }

          .form-container .btn {
            font-size: 1rem !important;
            padding:14px 11px 14px 22px!important
          }
        }
        @media (min-width: 1200px) and (max-width: 1535px) {
          .form-container {
            min-height: 535px !important;
            min-width: 380px !important;
            width: 105% !important;
            margin-left: -2.5% !important;
            margin-block: 20px !important;
            padding: 1.2rem 1.7rem !important;
          }
          .left-content h1 {
            font-size: 2rem !important;
            max-width: 90% !important;
          }
          .position-relative.overflow-hidden {
            min-height: 600px !important;
          }
          .divider {
            width: 70% !important;
          }
          .left-content p {
            font-size: 1rem !important;
            max-width: 90% !important;
            line-height: 1.6 !important;
          }

          .form-container .btn {
            font-size: 1rem !important;
            padding: 10px 9px 10px 10px !important;
            width: 243px;
          }
        }
        /* NEW: Laptop-specific adjustments (1200px - 1919px) */
        @media (min-width: 1536px) and (max-width: 1919px) {
          .position-relative.overflow-hidden {
            min-height: 600px !important;
          }
          .btng{
            margin-top:7px !important;
          }

          .left-content {
            padding: 2rem 1.5rem 2rem 2.5rem !important;
          }

          .left-content h1 {
            font-size: 2rem !important;
            max-width: 90% !important;
          }

          .divider {
            width: 90% !important;
          }

          .info-row {
            max-width: 90% !important;
            padding: 1.5rem 1rem !important;
            font-size: 0.85rem !important;
          }

          .left-content p {
            font-size: 1rem !important;
            max-width: 90% !important;
            line-height: 1.6 !important;
          }

          .right-form {
            padding: 1rem 2rem 1rem 1.5rem !important;
          }

          .form-container {
            min-height: 535px !important;
            min-width: 420px !important;
            width: 105% !important;
            margin-left: -2.5% !important;
            margin-block: 30px !important;
            padding: 1.2rem 1.7rem !important;
          }

          .form-heading {
            font-size: 1.5rem !important;
            margin-bottom: 1rem !important;
          }

          .form-control {
            font-size: 0.8rem !important;
            padding: 13px 12px !important;
          }

          textarea.form-control {
            padding: 12px 12px !important;
          }

          .form-container .btn {
            font-size: 0.85rem !important;
            padding: 10px 10px 10px 14px!important;
          }

          .bt-width {
            width: 60% !important;
          }
        }

        @media (max-width: 576px) {
          .info-row {
            font-size: 0.75rem !important;
          }
          .icon-img {
            width: 20px !important;
            height: 20px !important;
          }
        }

        /* Mobile form styling */
        @media (max-width: 991.98px) {
          .position-relative.overflow-hidden {
            position: relative;
            background-image: url("/assets/ib-bg.webp") !important;
            background-size: cover !important;
            background-position: top !important;
            background-repeat: no-repeat;
          }

          /* instead of solid background, add gradient overlay that blends with parent */
          .form-bg {
            position: relative;
          }
          .form-bg::before {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(
              to top,
              rgba(0, 164, 145, 0.95) 0%,
              rgba(22, 22, 100, 1) 60%,
              rgba(22, 22, 100, 1) 80%,
              rgba(22, 22, 100, 0.5) 90%,
              rgba(22, 22, 100, 0) 100%
            );
            mix-blend-mode: multiply;
            z-index: 0;
          }

          /* make form content sit above overlay */
          .form-container {
            position: relative;
            z-index: 1;
            background: transparent !important;
            opacity: 1 !important;
            backdrop-filter: none !important;
            padding-top: 5rem !important;
            width: 100% !important;
            margin-left: 0 !important;
          }


          .position-relative.overflow-hidden::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            //background: rgba(0, 0, 0, 0.60);
            z-index: 1;
          }

          .position-absolute.top-0.start-0.w-100.h-100 {
            display: block !important;
            background: transparent !important;
          }

          .row.g-0.h-100 {
            flex-direction: column !important;
          }

          .col-lg-8,
          .col-lg-4 {
            width: 100% !important;
          }

          .col-lg-8 {
            order: 1 !important;
            margin-top: 3rem !important;
            padding: 2rem 2.3rem 0 1.5rem!important;
              gap:0.1rem;
          }

          .col-lg-4 {
            order: 2 !important;
            margin-top: 0 !important;
            padding: 0 0.5rem 2rem !important;
          }

          h1 {
            font-size: 20px !important;
            line-height: 1.2 !important;
            text-align: center !important;
            margin-bottom: 1rem !important;
            max-width: none !important;
          }

          .text-white.mb-4:first-of-type, .text-white.fs-8:first-of-type {
            font-size: 0.75rem !important;
            margin-bottom: 1.5rem !important;
            text-align: center !important;
          }

          .info-row {
            flex-direction: row !important;
            justify-content: space-around !important;
            align-items: center !important;
            gap: 0.5rem !important;
            padding: 0.8rem 1.6rem!important;
            margin-bottom: 1.5rem !important;
            background: rgba(255,255,255,0.03)!important;
          }

          .info-col {
            border-right: 1px solid rgba(255, 255, 255, 0.3) !important;
            padding-right: 0.8rem !important;
            flex: 1 !important;
            font-size: 0.7rem !important;
            line-height: 1.2 !important;
          }

          .info-col:last-child {
            border-right: none !important;
            padding-right: 0 !important;
          }

          .info-col img {
            width: 24px !important;
            height: 24px !important;
          }

          .text-white.mb-4:last-of-type {
            font-size: 0.8rem !important;
            line-height: 1.4 !important;
            text-align: center !important;
            margin-bottom: 1.5rem !important;
            max-width: none !important;
            padding: 0 1rem !important;
          }

          .d-flex.gap-3 {
            justify-content: center !important;
          }

          .rect-1 {
            top: 4%;
            left: -3%;
            width: 27vw;
            height: 7vh;
            opacity: 1;
            display: block !important;
          }

          .rect-2 {
            top: 9.7%;
            right: -3%;
            width: 35vw;
            height: 7vh;
            opacity: 1;
            display: block !important;
          }

          .rect-3 {
            bottom: 9%;
            right: -3%;
            width: 25vw;
            height: 7vh;
            opacity: 1;
            display: block !important;
          }

          .form-container h2 {
            font-size: 1.2rem !important;
            text-align: center !important;
            line-height: 1.2 !important;
            margin-bottom: 1.2rem !important;
            font-weight: 700 !important;
            margin-top: 47px;
          }

          .form-control {
            font-size: 0.8rem !important;
            padding: 10px 12px !important;
          }

          textarea.form-control {
            padding: 12px !important;
          }
          .width{
            width:70% !important;
          }

          .form-container .btn {
            font-size: 0.85rem !important;
            padding: 12px 12px 12px 24px!important;
            max-width: none !important;
            display: flex !important;
            justify-content: space-between !important;
          }
        }

        @media (max-width: 575px) {
          .text-white.mb-4:last-of-type {
            padding: 1rem !important;
            line-height: 1.6 !important;
          }
          .info-row{
            margin-top:1rem !important;
          }
          .cust-text {
            padding: 8px 15px 8px 15px !important;
            border: none !important;
            -webkit-transition: opacity .3s ease !important;
            -moz-transition: opacity.3s ease!important;
            -o-transition: opacity.3s ease!important;
            transition: opacity .3s ease !important;
            letter-spacing: 1px !important;
            font-size: 1rem !important;
            margin:10px auto!important;
            min-width: auto !important;
          }

          .custom-height {
            width: 30px !important;
            height: 30px !important;
            animation-delay: 0.75s !important;
            margin-left: 1rem !important;
          }
        }
        @media (min-width: 768px) {
          .form-container {
            padding:0;
          }
          .cust-text {
            padding:  10px 14px 10px 20px !important;
            transition: opacity 0.3s ease !important;
            letter-spacing: 1px !important;
            font-size: clamp(1rem, 1.1vw, 1.1rem) !important;
          }

          .custom-height {
            width: 40px !important;
            height: 40px !important;
            animation-delay: 0.75s !important;
            margin-left: 1rem !important;
          }
        }
        @media (max-width: 380px) {
          .info-col {
            border-right: 1px solid rgba(255, 255, 255, 0.3) !important;
            padding-right: 0.8rem !important;
            flex: 1 !important;
            font-size: 0.6rem !important;
            line-height: 1.2 !important;
          }
          .icon-img {
            width: 15px !important;
            height: 15px !important;
          }
          .fontd{
            font-size: 0.6rem !important;
            line-height: 1.2 !important;
          }
        }

      `}</style>
    </div>
  );
}