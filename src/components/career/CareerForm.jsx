// components/CareerForm.jsx - DIRECT ZOHO SUBMISSION

"use client";
import React, { useState, useRef, useEffect } from "react";

export default function CareerForm() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);
  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    department: "",
    position: "",
    subjects: "",
    job_type: "Full Time",
    notice_period: "",
    experience: "",
  });

  const [redirectUrl, setRedirectUrl] = useState("");

  useEffect(() => {
    setRedirectUrl(window.location.origin + '/thank-you-career');
  }, []);

  // --- VALIDATION LOGIC ---
  const validate = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.name.trim()) { newErrors.name = "Name is required."; isValid = false; }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) { newErrors.email = "Valid email is required."; isValid = false; }
    if (!formData.phone.trim()) { newErrors.phone = "Contact number is required."; isValid = false; }
    if (!formData.department.trim()) { newErrors.department = "Department is required."; isValid = false; }
    if (!formData.position.trim()) { newErrors.position = "Position is required."; isValid = false; }
    if (!formData.experience.trim()) { newErrors.experience = "Experience is required."; isValid = false; }
    if (!file) { newErrors.file = "CV is required."; isValid = false; }

    setErrors(newErrors);
    return isValid;
  };

  // --- HANDLE CHANGE ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  // --- FILE HANDLERS ---
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > 1024 * 1024) {
        alert("File size exceeds 1MB limit");
        setFile(null);
        setFileName("");
        return;
      }

      const validTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      if (!validTypes.includes(selectedFile.type)) {
        alert("Only PDF and DOC files are supported");
        setFile(null);
        setFileName("");
        return;
      }

      setFile(selectedFile);
      setFileName(selectedFile.name);
      setErrors(prev => ({ ...prev, file: '' }));
    } else {
      setFile(null);
      setFileName("");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange({ target: { files: e.dataTransfer.files } });
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  // --- JOB TYPE HANDLER ---
  const handleJobTypeChange = (type) => {
    setFormData(prev => ({ ...prev, job_type: type }));
  };

  // --- SUBMISSION LOGIC (Native Form Submit) ---
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissionStatus(null);

    if (!validate()) return;
    setLoading(true);

    // Submit the form natively
    formRef.current.submit();
  };

  return (
    <section className="career-section"
      data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat
    >
      <h2 className="title fade-in-section"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat
        style={{ animationDelay: "0.1s" }}
      >
        ADVANCE YOUR CAREER WITH{" "}<br />
        THE RIGHT <span>OPPORTUNITIES</span>
      </h2>

      {submissionStatus === 'success' && (
        <div className="alert alert-success" style={{ marginBottom: '20px' }}>
          Application submitted successfully! Redirecting...
        </div>
      )}
      {submissionStatus === 'error' && (
        <div className="alert alert-danger" style={{ marginBottom: '20px' }}>
          Submission failed. Please try again.
        </div>
      )}

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        action='https://forms.zohopublic.com/sumitignitetrain1/form/Career/formperma/5MGjIF4X7ef6W9KUqep6lOshMxA11LSyAx7Ub7300E4/htmlRecords/submit'
        method='POST'
        encType='multipart/form-data'
        className="career-form fade-in-section"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat
        style={{ animationDelay: "0.2s" }}
      >
        {/* Hidden Fields for Zoho */}
        <input type="hidden" name="zf_referrer_name" value="" />
        <input type="hidden" name="zf_redirect_url" value={redirectUrl} />
        <input type="hidden" name="zc_gad" value="" />
        <input type="hidden" name="SingleLine" value={formData.name} />
        <input type="hidden" name="Email" value={formData.email} />
        <input type="hidden" name="PhoneNumber_countrycode" value={`+971${formData.phone}`} />
        <input type="hidden" name="SingleLine1" value={formData.location} />
        <input type="hidden" name="SingleLine2" value={formData.position} />
        <input type="hidden" name="SingleLine3" value={formData.department} />
        <input type="hidden" name="Radio" value={formData.job_type} />
        <input type="hidden" name="SingleLine4" value={formData.notice_period} />
        <input type="hidden" name="SingleLine5" value={formData.experience} />
        <input type="hidden" name="SingleLine6" value={formData.subjects} />
        <label htmlFor="name">NAME*</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? 'is-invalid' : ''}
          required
        />
        {errors.name && <div className="invalid-feedback d-block">{errors.name}</div>}

        <label htmlFor="email">EMAIL*</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? 'is-invalid' : ''}
          required
        />
        {errors.email && <div className="invalid-feedback d-block">{errors.email}</div>}

        <label htmlFor="phone">CONTACT NO.*</label>
        <div className="phone-input">
          <img src="/assets/uae.webp" alt="career at ignite" width={25} height={35} />
          <select>
            <option>+971</option>
          </select>
          <img src="/assets/dropdown-arrow.webp" alt="career at ignite" className="dropdown-arrow" width={27} height={15} />
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? 'is-invalid' : ''}
            required
          />
        </div>
        {errors.phone && <div className="invalid-feedback d-block">{errors.phone}</div>}

        <div className="two-col">
          <div className="fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.25s" }}
          >
            <label htmlFor="location">CURRENT LOCATION</label>
            <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} />
          </div>
          <div className="fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.3s" }}
          >
            <label htmlFor="department">DEPARTMENT*</label>

            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className={errors.department ? 'is-invalid' : ''}
              required
            >
              <option value="Teaching">Teaching</option>
              <option value="Admin">Admin</option>
              <option value="Sales">Sales</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
            </select>
            {errors.department && <div className="invalid-feedback d-block">{errors.department}</div>}
          </div>
        </div>

        <div className="two-col">
          <div className="fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.35s" }}
          >
            <label htmlFor="position">POSITION/ROLE*</label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className={errors.position ? 'is-invalid' : ''}
              required
            />
            {errors.position && <div className="invalid-feedback d-block">{errors.position}</div>}
          </div>
          <div className="fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.4s" }}
          >
            <label htmlFor="subjects" className="subject">SUBJECTS</label>
            <input
              type="text"
              id="subjects"
              name="subjects"
              value={formData.subjects}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="job-type fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
          style={{ animationDelay: "0.45s" }}
        >
          <button
            type="button"
            className={`outlined ${formData.job_type === 'Full Time' ? 'active' : ''}`}
            onClick={() => handleJobTypeChange('Full Time')}
          >
            Full Time
          </button>
          <button
            type="button"
            className={`outlined ${formData.job_type === 'Part Time' ? 'active' : ''}`}
            onClick={() => handleJobTypeChange('Part Time')}
          >
            Part Time
          </button>
        </div>

        <div className="two-col">
          <div className="fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.5s" }}
          >
            <label htmlFor="notice_period">NOTICE PERIOD</label>
            <input type="text" id="notice_period" name="notice_period" value={formData.notice_period} onChange={handleChange} />
          </div>
          <div className="fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.55s" }}
          >
            <label htmlFor="experience">YEARS OF EXPERIENCE*</label>
            <input
              type="text"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className={errors.experience ? 'is-invalid' : ''}
              required
            />
            {errors.experience && <div className="invalid-feedback d-block">{errors.experience}</div>}
          </div>
        </div>

        <div className={`file-section fade-in-section ${errors.file ? 'is-invalid-container' : ''}`}
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
          style={{ animationDelay: "0.6s" }}
        >
          <p className="file-note">
            Max Size: 1MB Support: PDF, DOC
          </p>
          <div
            className="file-upload"
            onClick={triggerFileInput}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            {fileName || 'Drop Your CV Here'}
            {file && (
              <span className="file-selected-badge">
                ✓
              </span>
            )}
          </div>
          <input
            type="file"
            ref={fileInputRef}
            name="FileUpload"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx"
            style={{ display: "none" }}
            required
          />
          {errors.file && <div className="invalid-feedback d-block" style={{ marginTop: '5px' }}>{errors.file}</div>}
        </div>

        <div className="text-center fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat>
          <button
            type="submit"
            disabled={loading}
            className="btn cust-text fw-bold d-flex align-items-center mx-auto rounded-pill"
            style={{
              background: "linear-gradient(90deg,#161664, #3F88BA)",
              color: 'white',
              padding: '6px 6px 6px 27px',
              border: 'none',
              transition: 'opacity 0.3s ease',
              letterSpacing: "3px",
              fontSize: "clamp(0.9rem, 1.1vw, 1.1rem)",
              marginTop: "65px"
            }}
            onMouseEnter={(e) => e.target.style.opacity = "0.9"}
            onMouseLeave={(e) => e.target.style.opacity = "1"}
          >
            {loading ? 'SENDING...' : 'SUBMIT'}
            <div
              className="custom-height rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: "2.5rem",
                height: "2.5rem",
                background: "linear-gradient(90deg, #E7F6FF, #A3CAF5)",
                marginLeft: "2.5rem"
              }}
            >
              <img src="/assets/arrowright.webp" alt="career at ignite" width={16} height={16} />
            </div>
          </button>
        </div>
      </form>

      <style jsx>{`
        .is-invalid {
            border-bottom: 2px solid #ff4d4d !important;
        }
        .is-invalid-container {
            border-radius: 20px;
            box-shadow: 0 0 0 2px #ff4d4d;
        }
        .invalid-feedback {
            color: #ff4d4d;
            font-size: 0.75rem;
            margin-top: 5px;
            display: none;
        }
        .invalid-feedback.d-block {
            display: block;
        }
        
        .job-type .outlined.active {
            background: linear-gradient(90deg, #3F88BA, #161664);
            color: white;
            border-color: transparent;
        }

        .alert {
          padding: 15px;
          border-radius: 8px;
          margin-bottom: 20px;
          text-align: center;
        }
        .alert-success {
          background: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
        }
        .alert-danger {
          background: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        }

        @font-face {
          font-family: 'Monstra';
          src: url('/fonts/Monstra.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }

        .career-section {
          max-width: 90vw;
          margin: auto;
          text-align: center;
          padding: 0 20px;
          font-family: 'Montserrat', sans-serif;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #161664;
          margin-bottom: 40px;
          line-height: 1.2;
          padding-inline: 12rem;
        }
        .title span {
          background: linear-gradient(90deg, #00A491, #003E37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .career-form {
          width: 80%;
          margin-top: 30px;
          padding: 6rem;
          border-radius: 30px;
          text-align: left;
          background: linear-gradient(135deg, #e8f4f8 0%, #f0f8f0 100%);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        label {
          font-size: 0.8vw;
          color: #1f2d61;
          font-weight: 500;
          margin-top: 30px;
          margin-bottom:0;
          text-transform: uppercase;
        }

        input, select {
          width: 100%;
          padding: 5px 0;
          border: none;
          border-bottom: 1px solid #161664;
          background: transparent;
          outline: none;
          font-size: 16px;
          color: #233467;
          font-family: 'Montserrat', sans-serif;
          appearance: none;
        }
        input::placeholder {
          color: #4b4b77;
          font-size: 14px;
        }

        .phone-input {
          display: flex;
          align-items: center;
          gap: 10px;
          border-bottom: 1px solid #161664;
          padding-bottom: 12px;
        }
        .phone-input img:first-child {
          width: 45px;
          height: 35px;
          border-radius: 8px;
        }

        .phone-input select {
          border: none;
          background: #D9D9D980;
          border-radius: 4px !important;
          font-size: 0.8vw;
          color: #233467;
          width: auto;
          min-width: 80px;
          padding: 4px 8px;
          font-weight: 700;
        }

        .dropdown-arrow {
          width: 10px;
          height: 10px;
          margin-left: -26px;
          pointer-events: none;
          z-index: 1;
        }

        .subject{
          position: relative;
          
          background-repeat: no-repeat;
          background-position: right 10px center;
          background-size: 10px 10px;
          padding-right: 15px;
        }

        .phone-input input {
          border: none;
          flex: 1;
          padding: 0;
          font-size: 16px;
        }

        .two-col {
          display: flex;
          gap: 100px;
          margin-top: 0;
        }
        .two-col div {
          flex: 1;
        }

        .job-type {
          margin: 25px 0;
          display: flex;
          gap: 15px;
        }
        .outlined {
          border: 1px solid #161664;
          background: transparent;
          border-radius: 25px;
          padding: 12px 30px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #161664;
          font-family: 'Montserrat', sans-serif;
        }
        .outlined:hover {
          background: linear-gradient(90deg, #3F88BA, #161664);
          color: white;
        }

        .file-section {
          margin-top: 25px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .file-note {
          font-size: 15px;
          color: #161664;
          margin-bottom: 15px;
          text-align: center;
          font-weight: 600;
        }

        .file-upload {
          border: 1px solid #161664;
          padding: 20px 65px;
          border-radius: 20px;
          text-align: center;
          cursor: pointer;
          font-weight: 700;
          font-size: 22px;
          background: rgba(255, 255, 255, 0.6);
          transition: all 0.3s ease;
          color: #161664;
          min-width: 200px;
          display: inline-block;
          position: relative;
        }

        .file-selected-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          background: #00A491;
          color: white;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          border: 2px solid white;
        }
        .file-upload:hover {
          background: rgba(255, 255, 255, 0.8);
          transform: translateY(-2px);
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

        @media (max-width: 768px) {
          .title {
            font-size: 18.5px;
            margin-bottom: 30px;
            padding-inline: 0;
          }

          .career-form {
            padding: 30px 25px;
          }

          .two-col {
            flex-direction: column;
            gap: 0;
          }
          
          .job-type {
            flex-direction: row;
            gap: 10px;
          }
          
          .outlined {
            padding: 10px 25px;
            font-size: 14px;
          }

          label {
            font-size: 12px;
            margin-top: 15px;
          }

          input, select {
            font-size: 14px;
            padding: 10px 0;
          }

          .phone-input select {
            font-size: 12px;
          }

          .file-upload {
            font-size: 14px;
            padding: 15px 25px;
          }

          .file-selected-badge {
            width: 18px;
            height: 18px;
            font-size: 10px;
          }
        }
        
        @media (max-width: 575px) {
          .career-form{
            width: 100%;
            margin-top: 0;
          }
          .career-section {
            padding: 0;
          }
          .cust-text {
            padding: 8px 8px 8px 13px !important;
            letter-spacing: 1px !important;
            font-size: clamp(0.7rem, 1.1vw, 1.1rem) !important;
            margin-top: 45px !important;
          }
          .phone-input select {
            font-size: 14px;
            min-width: 70px;
          }
          .custom-height {
            width: 30px !important;
            height: 30px !important;
            margin-left: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}