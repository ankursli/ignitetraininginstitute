// components/DelayedPopup.js

import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from "next/navigation";
import { PopupContext } from '../pages/_app';
import Image from '@/components/CustomImageWrapper';
import GlobalPhoneInput from './GlobalPhoneInput'; // Ensure the path to your new component is correct

const POPUP_DELAY_MS = 15000;
const HAS_SEEN_POPUP_KEY = 'hasSeenPopupSession';

const DelayedPopup = () => {
    const { isManualOpen, closeManualPopup } = useContext(PopupContext);
    const router = useRouter();

    const [isDelayedVisible, setIsDelayedVisible] = useState(false);
    const [pageInfo, setPageInfo] = useState('');

    const isVisible = isDelayedVisible || isManualOpen;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        curriculum: "-Select-",
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const hasSeen = sessionStorage.getItem(HAS_SEEN_POPUP_KEY);

            if (!hasSeen) {
                const timer = setTimeout(() => {
                    setIsDelayedVisible(true);
                    sessionStorage.setItem(HAS_SEEN_POPUP_KEY, 'true');
                }, POPUP_DELAY_MS);

                const url = window.location.href;
                const title = window.document.title || window.location.pathname;
                setPageInfo(`URL: ${url} | Title/Path: ${title}`);

                return () => clearTimeout(timer);
            }

            const url = window.location.href;
            const title = window.document.title || window.location.pathname;
            setPageInfo(`URL: ${url} | Title/Path: ${title}`);
        }
    }, []);

    const closePopup = (e) => {
        if (e) e.preventDefault();
        if (!loading) {
            setIsDelayedVisible(false);
            if (isManualOpen) {
                closeManualPopup();
            }
            setErrors({});
            setSubmissionStatus(null);
        }
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

    // New handler for the GlobalPhoneInput to capture formattedValue
    const handlePhoneChange = (formattedValue) => {
        setFormData((prevData) => ({
            ...prevData,
            phone: formattedValue,
        }));
        if (errors.phone) {
            setErrors(prevErrors => ({ ...prevErrors, phone: '' }));
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

        // Updated validation for the formatted phone string
        if (!formData.phone || !formData.phone.trim()) {
            newErrors.phone = "Phone number is required.";
            isValid = false;
        } else if (!/^[\d\s()+-]{6,20}$/.test(formData.phone.trim())) {
            newErrors.phone = "Invalid phone format.";
            isValid = false;
        }

        if (formData.curriculum === '-Select-') {
            newErrors.curriculum = "Please select a curriculum.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmissionStatus(null);

        if (!validate()) return;

        setLoading(true);

        try {
            const dataToSend = {
                ...formData,
                pageinfo: pageInfo,
                formType: 'POPUP_FORM',
            };

            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataToSend),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                closePopup();
                if (result.redirectUrl) {
                    window.location.href = result.redirectUrl;
                } else {
                    router.push('/thank-you-default');
                }
            } else {
                setSubmissionStatus('error');
            }
        } catch (error) {
            setSubmissionStatus('error');
        } finally {
            setLoading(false);
        }
    };

    if (!isVisible) return null;

    return (
        <div className="popupOverlay">
            <div className="popupContent">
                <button className="closeButton" onClick={closePopup} disabled={loading}>
                    &times;
                </button>

                <form onSubmit={handleSubmit} className="popupForm">
                    <h3>Fuel Your Journey to Success!</h3>
                    <p>Register for a free consultation and study resources.</p>

                    {submissionStatus === 'error' && (
                        <p style={{ color: 'red', textAlign: 'center', fontWeight: 'bold' }}>Submission failed. Please try again.</p>
                    )}

                    <div className="row g-2">
                        <div className="col-6">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className="formInput"
                            />
                            {errors.name && <p className="error-text">{errors.name}</p>}
                        </div>
                        <div className="col-6">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="formInput"
                            />
                            {errors.email && <p className="error-text">{errors.email}</p>}
                        </div>
                    </div>

                    {/* Updated Phone Field */}
                    <label>Phone</label>
                    <GlobalPhoneInput
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        error={errors.phone}
                    />

                    <label>Curriculum</label>
                    <div className="selectWrapper">
                        <select
                            name="curriculum"
                            value={formData.curriculum}
                            onChange={handleChange}
                            className="formInput"
                        >
                            <option value="-Select-">-Select-</option>
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
                    {errors.curriculum && <p className="error-text">{errors.curriculum}</p>}

                    <button type="submit" className="btn popup-cust-text fw-bold d-flex align-items-center rounded-pill " disabled={loading}
                        style={{
                            background: "linear-gradient(90deg,#161664, #3F88BA)",
                            color: 'white',
                            border: 'none',
                            transition: 'opacity 0.3s ease',
                            fontSize: "clamp(0.9rem, 1.1vw, 1.1rem)",
                            margin: "15px auto 0 0",

                        }}
                        onMouseEnter={(e) => e.target.style.opacity = "0.9"}
                        onMouseLeave={(e) => e.target.style.opacity = "1"}
                    >
                        {loading ? 'Submitting...' : 'SUBMIT'}
                        <div
                            className="popup-custom-height rounded-circle d-flex align-items-center justify-content-center"

                            style={{
                                background: "linear-gradient(90deg, #E7F6FF, #A3CAF5)",
                                animationDelay: "0.75s",
                                marginLeft: "2.1rem "
                            }}
                        >
                            <img src="/assets/arrowright.webp" alt="ibdp tutor in dubai" width={16} height={16} />
                        </div>
                    </button>

                </form>
            </div>
        </div>
    );
};

export default DelayedPopup;