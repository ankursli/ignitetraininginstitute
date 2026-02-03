import React from 'react';
import PhoneInput from 'react-phone-input-2';

const countries = [
    { name: "Afghanistan", code: "af", dial: "93" },
    { name: "Albania", code: "al", dial: "355" },
    { name: "Algeria", code: "dz", dial: "213" },
    { name: "Andorra", code: "ad", dial: "376" },
    { name: "Angola", code: "ao", dial: "244" },
    { name: "Antigua and Barbuda", code: "ag", dial: "1268" },
    { name: "Argentina", code: "ar", dial: "54" },
    { name: "Armenia", code: "am", dial: "374" },
    { name: "Australia", code: "au", dial: "61" },
    { name: "Austria", code: "at", dial: "43" },
    { name: "Azerbaijan", code: "az", dial: "994" },
    { name: "Bahamas", code: "bs", dial: "1242" },
    { name: "Bahrain", code: "bh", dial: "973" },
    { name: "Bangladesh", code: "bd", dial: "880" },
    { name: "Barbados", code: "bb", dial: "1246" },
    { name: "Belarus", code: "by", dial: "375" },
    { name: "Belgium", code: "be", dial: "32" },
    { name: "Belize", code: "bz", dial: "501" },
    { name: "Benin", code: "bj", dial: "229" },
    { name: "Bhutan", code: "bt", dial: "975" },
    { name: "Bolivia", code: "bo", dial: "591" },
    { name: "Bosnia and Herzegovina", code: "ba", dial: "387" },
    { name: "Botswana", code: "bw", dial: "267" },
    { name: "Brazil", code: "br", dial: "55" },
    { name: "Brunei", code: "bn", dial: "673" },
    { name: "Bulgaria", code: "bg", dial: "359" },
    { name: "Burkina Faso", code: "bf", dial: "226" },
    { name: "Burundi", code: "bi", dial: "257" },
    { name: "Cambodia", code: "kh", dial: "855" },
    { name: "Cameroon", code: "cm", dial: "237" },
    { name: "Canada", code: "ca", dial: "1" },
    { name: "Cape Verde", code: "cv", dial: "238" },
    { name: "Central African Republic", code: "cf", dial: "236" },
    { name: "Chad", code: "td", dial: "235" },
    { name: "Chile", code: "cl", dial: "56" },
    { name: "China", code: "cn", dial: "86" },
    { name: "Colombia", code: "co", dial: "57" },
    { name: "Congo (DRC)", code: "cd", dial: "243" },
    { name: "Congo (Republic)", code: "cg", dial: "242" },
    { name: "Costa Rica", code: "cr", dial: "506" },
    { name: "Croatia", code: "hr", dial: "385" },
    { name: "Cuba", code: "cu", dial: "53" },
    { name: "Cyprus", code: "cy", dial: "357" },
    { name: "Czech Republic", code: "cz", dial: "420" },
    { name: "Denmark", code: "dk", dial: "45" },
    { name: "Djibouti", code: "dj", dial: "253" },
    { name: "Dominica", code: "dm", dial: "1767" },
    { name: "Dominican Republic", code: "do", dial: "1809" },
    { name: "Ecuador", code: "ec", dial: "593" },
    { name: "Egypt", code: "eg", dial: "20" },
    { name: "El Salvador", code: "sv", dial: "503" },
    { name: "Equatorial Guinea", code: "gq", dial: "240" },
    { name: "Eritrea", code: "er", dial: "291" },
    { name: "Estonia", code: "ee", dial: "372" },
    { name: "Eswatini", code: "sz", dial: "268" },
    { name: "Ethiopia", code: "et", dial: "251" },
    { name: "Finland", code: "fi", dial: "358" },
    { name: "France", code: "fr", dial: "33" },
    { name: "Germany", code: "de", dial: "49" },
    { name: "Ghana", code: "gh", dial: "233" },
    { name: "Greece", code: "gr", dial: "30" },
    { name: "Hong Kong", code: "hk", dial: "852" },
    { name: "Hungary", code: "hu", dial: "36" },
    { name: "Iceland", code: "is", dial: "354" },
    { name: "India", code: "in", dial: "91" },
    { name: "Indonesia", code: "id", dial: "62" },
    { name: "Iran", code: "ir", dial: "98" },
    { name: "Iraq", code: "iq", dial: "964" },
    { name: "Ireland", code: "ie", dial: "353" },
    { name: "Israel", code: "il", dial: "972" },
    { name: "Italy", code: "it", dial: "39" },
    { name: "Japan", code: "jp", dial: "81" },
    { name: "Jordan", code: "jo", dial: "962" },
    { name: "Kenya", code: "ke", dial: "254" },
    { name: "Kuwait", code: "kw", dial: "965" },
    { name: "Malaysia", code: "my", dial: "60" },
    { name: "Maldives", code: "mv", dial: "960" },
    { name: "Mexico", code: "mx", dial: "52" },
    { name: "Nepal", code: "np", dial: "977" },
    { name: "Netherlands", code: "nl", dial: "31" },
    { name: "New Zealand", code: "nz", dial: "64" },
    { name: "Nigeria", code: "ng", dial: "234" },
    { name: "Norway", code: "no", dial: "47" },
    { name: "Pakistan", code: "pk", dial: "92" },
    { name: "Philippines", code: "ph", dial: "63" },
    { name: "Poland", code: "pl", dial: "48" },
    { name: "Portugal", code: "pt", dial: "351" },
    { name: "Qatar", code: "qa", dial: "974" },
    { name: "Romania", code: "ro", dial: "40" },
    { name: "Russia", code: "ru", dial: "7" },
    { name: "Saudi Arabia", code: "sa", dial: "966" },
    { name: "Singapore", code: "sg", dial: "65" },
    { name: "South Africa", code: "za", dial: "27" },
    { name: "South Korea", code: "kr", dial: "82" },
    { name: "Spain", code: "es", dial: "34" },
    { name: "Sri Lanka", code: "lk", dial: "94" },
    { name: "Sweden", code: "se", dial: "46" },
    { name: "Switzerland", code: "ch", dial: "41" },
    { name: "Thailand", code: "th", dial: "66" },
    { name: "Turkey", code: "tr", dial: "90" },
    { name: "United Arab Emirates", code: "ae", dial: "971" },
    { name: "United Kingdom", code: "gb", dial: "44" },
    { name: "United States", code: "us", dial: "1" },
    { name: "Vietnam", code: "vn", dial: "84" },
    { name: "Zimbabwe", code: "zw", dial: "263" }
];

const GlobalPhoneInput = ({ value, onChange, error }) => {
    // Determine current flag based on value
    const activeCountry = countries.find(c => value?.replace(/\D/g, '').startsWith(c.dial)) || countries.find(c => c.code === 'ae');
    const flagIso = activeCountry ? activeCountry.code : 'ae';

    return (
        <div className="position-relative"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat>

            {/* SVG Flag display */}
            <div className="custom-flag-container">
                <img
                    src={`https://flagcdn.com/${flagIso}.svg`}
                    alt="flag"
                    height={50}
                    width={100}
                />
            </div>

            <PhoneInput
                country={'ae'}
                value={value}
                // Use the 4th argument (formattedValue) to keep +, brackets, and spaces for Zoho
                onChange={(val, country, e, formattedValue) => onChange(formattedValue)}
                disableDropdown={true}
                specialLabel=""
                placeholder="PH.NO"
                inputStyle={{
                    width: '100%',
                    background: 'transparent',
                    color: 'white',
                    border: '1.5px solid #FFFFFF',
                    borderRadius: '40px',
                    fontSize: '1rem',
                }}
                buttonStyle={{
                    background: 'transparent',
                    border: 'none',
                    borderRadius: '40px 0 0 40px',
                    width: '45px'
                }}
            />

            {/* Invisible Native Select for Scroll Fix */}
            <select
                className="native-select-overlay"
                onChange={(e) => onChange(`+${e.target.value}`)}
                value=""
            >
                <option value="" disabled>Select Country</option>
                {countries.map((c) => (
                    <option key={`${c.code}-${c.dial}`} value={c.dial}>
                        {c.name} (+{c.dial})
                    </option>
                ))}
            </select>

            {error && (
                <div className="invalid-feedback d-block fw-bold text-warning">
                    {error}
                </div>
            )}

            <style jsx>{`
            :global(.react-tel-input .flag), 
            :global(.react-tel-input .selected-flag) {
                display: none !important;
            }

            .custom-flag-container {
                position: absolute;
                top: 50%;
                left: 15px;
                transform: translateY(-50%);
                z-index: 5;
                pointer-events: none;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 40px;
            }

            .custom-flag-container img {
                height: auto;
                max-width: 30px;
                border-radius: 4px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            }

            .native-select-overlay {
                position: absolute;
                top: 0;
                left: 15px;
                width: 40px;
                height: 100%;
                opacity: 0;
                cursor: pointer;
                z-index: 10;
                -webkit-appearance: menulist-button;
            }

            :global(.popupForm .form-control),
            :global(.popupForm .react-tel-input .form-control:focus),
            :global(.popupForm .react-tel-input .form-control::placeholder),
            :global(.popupForm .react-tel-input .form-control::-webkit-input-placeholder),
            :global(.popupForm .react-tel-input .form-control::-moz-placeholder)
            {
                /* Example: Different height or border for the popup version */
                background: rgba(255, 255, 255, 0.1) !important;
                border: 1px solid rgba(0, 0, 0, 1) !important;
                height: 34px !important;
                color: #152f63 !important;
                font-size: 0.8rem !important;
                border-radius: 1rem;
                border-color: rgba(0,0,0,1 ) !important;
                padding: .375rem 0.75rem 0.375rem 3.75rem !important;
            }
                

            :global(.react-tel-input .form-control:focus) {
                background-color: transparent !important;
                border-color: rgba(255, 255, 255, 0.7) !important;
                box-shadow: none !important;
            }

            /* Responsive styles using custom class targeting */
            @media (min-width: 350px) {
                .custom-flag-container img {
                    width:25px
                }
                .native-select-overlay {
                    width: 25px;
                    left:10px;
                }
                .custom-flag-container {
                    width: 25px;
                    justify-content: flex-start;
                    left:9px;
                }
                :global(.form-control){
                    padding: 10px 0 10px 35px !important;
                    font-size: .8rem !important;
                }
                :global(.form-control::placeholder) {
                    color: #FFFFFF !important;
                    font-size: .8rem !important;
                }
            }


            @media (min-width: 992px) {
                :global(.react-tel-input .form-control) {
                    padding: 10px 15px 10px 60px !important;
                    font-size: 0.85rem !important;
                }
                :global(.popupForm .form-control),
                :global(.popupForm .react-tel-input .form-control:focus),
                :global(.popupForm .react-tel-input .form-control::placeholder),
                :global(.popupForm .react-tel-input .form-control::-webkit-input-placeholder),
                :global(.popupForm .react-tel-input .form-control::-moz-placeholder)
                {
                    /* Example: Different height or border for the popup version */
                    background: rgba(255, 255, 255, 0.1) !important;
                    border: 1px solid rgba(0, 0, 0, 1) !important;
                    height: 50px !important;
                    color: #152f63 !important;
                    font-size: 1rem !important;
                    border-radius: 1rem;
                    border-color: rgba(0,0,0,1 ) !important;
                    padding: .375rem 0.75rem .375rem 2.75rem !important;
                }
            }

            @media (min-width: 1400px) {
                :global(.react-tel-input .form-control) {
                    padding: 12px 18px 12px 60px !important;
                    font-size: 0.9rem !important;
                }
                :global(.popupForm .form-control),
                :global(.popupForm .react-tel-input .form-control:focus),
                :global(.popupForm .react-tel-input .form-control::placeholder),
                :global(.popupForm .react-tel-input .form-control::-webkit-input-placeholder),
                :global(.popupForm .react-tel-input .form-control::-moz-placeholder)
                {
                    /* Example: Different height or border for the popup version */
                    background: rgba(255, 255, 255, 0.1) !important;
                    border: 1px solid rgba(0, 0, 0, 1) !important;
                    height: 50px !important;
                    color: #152f63 !important;
                    font-size: 1rem !important;
                    border-radius: 1rem;
                    border-color: rgba(0,0,0,1 ) !important;
                    padding: .375rem 0.75rem .375rem 2.75rem !important;
                }
            }

            @media (min-width: 1536px) and (max-width: 1919px) {
                :global(.react-tel-input .form-control) {
                    padding: 13px 12px 13px 60px !important;
                    font-size: 0.8rem !important;
                }
                :global(.popupForm .form-control),
                :global(.popupForm .react-tel-input .form-control:focus),
                :global(.popupForm .react-tel-input .form-control::placeholder),
                :global(.popupForm .react-tel-input .form-control::-webkit-input-placeholder),
                :global(.popupForm .react-tel-input .form-control::-moz-placeholder)
                {
                    /* Example: Different height or border for the popup version */
                    background: rgba(255, 255, 255, 0.1) !important;
                    border: 1px solid rgba(0, 0, 0, 1) !important;
                    height: 50px !important;
                    color: #152f63 !important;
                    font-size: 1rem !important;
                    border-radius: 1rem;
                    border-color: rgba(0,0,0,1 ) !important;
                    padding: .375rem 0.75rem .375rem 2.75rem !important;
                }
            }

            @media (min-width: 1920px) {
                :global(.react-tel-input .form-control) {
                    padding: 21px 20px 21px 60px !important;
                    font-size: 0.95rem !important;
                }
                
                :global(.popupForm .form-control),
                :global(.popupForm .react-tel-input .form-control:focus),
                :global(.popupForm .react-tel-input .form-control::placeholder),
                :global(.popupForm .react-tel-input .form-control::-webkit-input-placeholder),
                :global(.popupForm .react-tel-input .form-control::-moz-placeholder)
                {
                    /* Example: Different height or border for the popup version */
                    background: rgba(255, 255, 255, 0.1) !important;
                    border: 1px solid rgba(0, 0, 0, 1) !important;
                    height: 50px !important;
                    color: #152f63 !important;
                    font-size: 1rem !important;
                    border-radius: 1rem;
                    border-color: rgba(0,0,0,1 ) !important;
                    padding: .375rem 0.75rem .375rem 2.75rem !important;
                }
            }
      `}</style>
        </div>
    );
};

export default GlobalPhoneInput;