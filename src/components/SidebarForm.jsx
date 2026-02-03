// components/SidebarForm.jsx

"use client";
import React, { useState } from 'react';

// This component receives the current page information (URL/Title)
export default function SidebarForm({ pageInfo, formType }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        course: "", // Default value from original select
        formType: "BLOG_SIDEBAR",
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' or 'error'

    // --- Validation Logic ---
    const validate = () => {
        const newErrors = {};
        let isValid = true;

        if (!formData.name.trim()) { newErrors.name = "Name is required."; isValid = false; }

        if (!formData.email.trim()) { newErrors.email = "Email is required."; isValid = false; }
        else if (!/\S+@\S+\.\S+/.test(formData.email)) { newErrors.email = "Invalid email format."; isValid = false; }

        if (!formData.phone.trim()) { newErrors.phone = "Phone is required."; isValid = false; }


        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmissionStatus(null);
        if (!validate()) return;
        setLoading(true);

        // Map data to the five fields expected by your /api/submit-form proxy
        const dataToSend = {

            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            // Course selection is mapped to the 'school' field and also included in 'message'
            school: formData.course,
            message: `Inquiry from blog sidebar. Course Selected: ${formData.course}.`,
            pageinfo: pageInfo,
            formType: formType,
        };

        console.log("Form Component Data Sent:", dataToSend);

        try {
            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataToSend),
            });

            if (response.ok) {
                // Parse the JSON response
                const result = await response.json(); // <--- CRITICAL: Await the response body

                if (result.success) {
                    setSubmissionStatus('success');
                    setFormData({ name: "", email: "", phone: "", course: "IB Diploma" });


                    if (result.redirectUrl) {
                        window.location.href = result.redirectUrl; // Redirect the user
                    }
                } else {
                    // Handle the case where the API returns 200 OK but success: false
                    setSubmissionStatus('error');
                    console.error('Submission failed with message:', result.message);
                }
            } else {
                setSubmissionStatus('error');
                // Optional: Log the API status for debugging
                console.error('API response not OK:', response.status);
            }
        } catch (error) {
            setSubmissionStatus('error');
        } finally {
            setLoading(false);
        }
    };

    return (
        // Uses the exact containers and classes from your original HTML
        <div className="form-container blog-container">
            <h2>Get a Free Demo Class +<br />Free Study Resources</h2>

            {/* Submission Status Feedback */}
            {submissionStatus === 'success' && (<div className="alert alert-success" style={{ padding: '10px', marginBottom: '15px' }}>Submitted successfully!</div>)}
            {submissionStatus === 'error' && (<div className="alert alert-danger" style={{ padding: '10px', marginBottom: '15px' }}>Submission failed.</div>)}

            <form onSubmit={handleSubmit}>
                <input type="hidden" name="pageinfo" value="" />
                <div className="form-row">
                    {/* Name Field */}
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder=""
                            // is-invalid class added for validation
                            className={`${errors.name ? 'is-invalid' : ''}`}
                        />
                        {/* invalid-feedback d-block is essential for displaying the error */}
                        {errors.name && <div className="invalid-feedback d-block">{errors.name}</div>}
                    </div>

                    {/* Email Field */}
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder=""
                            className={`${errors.email ? 'is-invalid' : ''}`}
                        />
                        {errors.email && <div className="invalid-feedback d-block">{errors.email}</div>}
                    </div>
                </div>

                {/* Phone Number Field */}
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <div className="phone-input">
                        <img src="https://flagcdn.com/w40/ae.webp" alt="UAE Flag" className="flag" height={50}
                            width={100} />
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+971"
                            className={`${errors.phone ? 'is-invalid' : ''}`}
                        />
                    </div>
                    {errors.phone && <div className="invalid-feedback d-block">{errors.phone}</div>}
                </div>

                {/* Course Selection Field */}
                <div className="form-group">
                    <label htmlFor="course">Tests/Courses</label>
                    <select
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                    >
                        <option value="IB Diploma">IB Diploma</option>
                        <option value="IB MYP">IB MYP</option>
                        <option value="IGCSE/GCSE">IGCSE/GCSE</option>
                        <option value="A Levels">A Levels</option>
                        <option value="Homeschooling">Homeschooling</option>
                        <option value="ACT">ACT</option>
                        <option value="UCAT">UCAT</option>
                        <option value="Advanced Placements">Advanced Placements</option>
                        <option value="STEM (Undergraduate)">STEM (Undergraduate)</option>
                        <option value="STEM (Others)">STEM (Others)</option>
                    </select>
                </div>

                {/* Button using your exact classes */}
                <button
                    type="submit"
                    disabled={loading}
                    className="submit-btn blog-submit-btn"
                >
                    {loading ? 'Submitting...' : 'Submit'}
                    <span className="arrow">→</span>
                </button>
            </form>
        </div>
    );
}