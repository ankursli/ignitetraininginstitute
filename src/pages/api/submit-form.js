// pages/api/submit-form.js

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const {
        name, email, phone, grade, school, course, message, pageinfo, formType, curriculum,
        location, department, position, subjects, job_type, notice_period, experience,
        tests_courses, courses, heard_about
    } = req.body;

    // --- 1. DETERMINE THE CURRENT PAGE PATH/SLUG ---
    const urlMatch = pageinfo ? pageinfo.split(' | ')[0].replace('URL: ', '').toLowerCase() : '';
    let path = '';
    try {
        if (urlMatch) {
            path = new URL(urlMatch).pathname.toLowerCase();
        }
    } catch (e) {
        path = '';
    }

    // --- 2. CONFIGURATION ---
    const FORM_CONFIGS = [
        // Add this inside the FORM_CONFIGS array in submit-form.js
        {
            type: 'NEWSLETTER',
            slugs: [],
            zohoUrl: 'https://forms.zohopublic.com/sumitignitetrain1/form/Newsletter/formperma/SllpnKEoYnsphGyGPZQ-ZFV4xNvQE0MU9hiSCzjd2vo/htmlRecords/submit',
            fieldMap: { email: 'Email', name: 'Firstname' }, // Mapping 'email' from frontend to 'Email' in Zoho
            redirectUrl: '/thank-you-newsletter',
        },
        {
            type: 'POPUP_FORM',
            slugs: [],
            zohoUrl: 'https://forms.zohopublic.com/sumitignitetrain1/form/popupform/formperma/cGgm_RXPoyqKpSDvZhp5unQZcl05haUEI_sVxSNGcXA/htmlRecords/submit',
            fieldMap: { name: 'SingleLine', email: 'Email', phone: 'PhoneNumber_countrycode', curriculum: 'SingleLine1' },
            redirectUrl: '/thank-you-popup',
        },
        {
            type: 'BLOG_SIDEBAR',
            slugs: [],
            zohoUrl: 'https://forms.zohopublic.com/sumitignitetrain1/form/BlogDetailPage/formperma/mgvhc7pg0i_9ypjsyAhQqnD4vnIuZusObkrMNZ5f6yk/htmlRecords/submit',
            fieldMap: { name: 'SingleLine', email: 'Email', phone: 'PhoneNumber_countrycode', school: 'SingleLine1', course: 'Dropdown', message: 'MultiLine', pageinfo: 'SingleLine2' },
            redirectUrl: '/thank-you-blog',
        },
        {
            type: 'Organic_Curriculum',
            slugs: ["/ib-curriculum-tutors-in-dubai", "/courses/ibdp-tutors-in-dubai", "/courses/myp-tutors-in-dubai", "/courses/igcse-tutors-in-dubai", "/courses/a-level-tutors-in-dubai", "/british-curriculum-tutors-in-dubai", "/act-tutors-in-dubai", "/advanced-placements-tutors-in-dubai"],
            zohoUrl: 'https://forms.zohopublic.com/sumitignitetrain1/form/IgniteCourses/formperma/58L0c_DIb7n5At6RTaPaWpu0ymjyqTDe2O7brKyZl2c/htmlRecords/submit',
            fieldMap: { name: 'SingleLine', email: 'Email', phone: 'PhoneNumber_countrycode', grade: 'SingleLine3', school: 'SingleLine1', message: 'MultiLine', pageinfo: 'SingleLine2' },
            redirectUrl: '/thank-you-curriculum',
        },
        {
            type: 'Tutor',
            slugs: ["/tutors-in-jlt-dubai", "/tutors-in-dubai", "/private-tutors-in-dubai"],
            zohoUrl: 'https://forms.zohopublic.com/sumitignitetrain1/form/Tests/formperma/8zcXiMlEz_lXvS_IJxAtMq7Rta3AT8-bwNe_rllPvJg/htmlRecords/submit',
            fieldMap: { name: 'SingleLine', email: 'Email', phone: 'PhoneNumber_countrycode', grade: 'SingleLine1', course: 'SingleLine3', message: 'MultiLine', pageinfo: 'SingleLine2' },
            redirectUrl: '/thank-you-tutor',
        },
        {
            type: 'Freedemo',
            slugs: ["/act-tutors-in-dubai", "/advanced-placements-tutors-in-dubai"],
            zohoUrl: 'https://forms.zohopublic.com/sumitignitetrain1/form/Freedemo/formperma/KAwVRrjBN9gUy9u3j43gxKyKXGIc9361RYMOFY1MlcI/htmlRecords/submit',
            fieldMap: { name: 'SingleLine', email: 'Email', phone: 'PhoneNumber_countrycode', grade: 'SingleLine1', course: 'SingleLine3', message: 'MultiLine', pageinfo: 'SingleLine2' },
            redirectUrl: '/thank-you-freedemo',
        },
        {
            type: 'Homeschooling',
            slugs: ["/courses/homeschooling-tutors-in-dubai"],
            zohoUrl: 'https://forms.zohopublic.com/sumitignitetrain1/form/Homeschooling/formperma/bdx3_HZb5eCExd0eEaR-m3Cqfjo3i2VrFROA3E4oaYo/htmlRecords/submit',
            fieldMap: { name: 'SingleLine', email: 'Email', phone: 'PhoneNumber_countrycode', school: 'SingleLine1', course: 'SingleLine3', message: 'MultiLine', pageinfo: 'SingleLine2' },
            redirectUrl: '/thank-you-homeschooling',
        },
        {
            type: 'Organic_Subject',
            slugs: ["/english-tutor-in-dubai", "/french-tutor-in-dubai", "/spanish-tutor-in-dubai", "/computer-science-tutor-in-dubai", "/economics-tutor-in-dubai", "/biology-tutor-in-dubai", "/chemistry-tutor-in-dubai", "/physics-tutor-in-dubai", "/maths-tutor-in-dubai", "/business-studies-tutor-in-dubai", "/accounting-tutor-in-dubai", "/psychology-tutor-in-dubai"],
            zohoUrl: 'https://forms.zohopublic.com/sumitignitetrain1/form/OrganicSubjectForm/formperma/KvWSFWr1Am7ISNcB-oG4RhgjmaIFGp0LOV4RgxPxFcw/htmlRecords/submit',
            fieldMap: { name: 'SingleLine', email: 'Email', phone: 'PhoneNumber_countrycode', grade: 'SingleLine4', school: 'SingleLine1', course: 'SingleLine3', message: 'MultiLine', pageinfo: 'SingleLine2' },
            redirectUrl: '/thank-you-subject',
        },
        {
            type: 'CAREER_FORM',
            slugs: ['/careers'],
            zohoUrl: 'https://forms.zohopublic.com/sumitignitetrain1/form/Career/formperma/5MGjIF4X7ef6W9KUqep6lOshMxA11LSyAx7Ub7300E4/htmlRecords/submit',
            fieldMap: { name: 'SingleLine', email: 'Email', phone: 'PhoneNumber_countrycode', location: 'SingleLine1', department: 'SingleLine2', position: 'SingleLine3', subjects: 'SingleLine4', job_type: 'Radio', notice_period: 'SingleLine5', experience: 'SingleLine6', pageinfo: 'SingleLine7' },
            redirectUrl: '/thank-you-career',
        },
        {
            type: 'CONTACT_US',
            slugs: ['/contact-us'],
            zohoUrl: 'https://forms.zohopublic.com/sumitignitetrain1/form/Contact/formperma/h_7YNNyAc6n4bPwBAZeDqgxMUn73Vna_ZJpKdSvkxG8/htmlRecords/submit',
            fieldMap: { name: 'SingleLine', email: 'Email', phone: 'PhoneNumber_countrycode', grade: 'SingleLine1', school: 'SingleLine2', tests_courses: 'Dropdown', courses: 'Dropdown1', heard_about: 'Dropdown2', message: 'MultiLine', pageinfo: 'SingleLine3' },
            redirectUrl: '/thank-you-contact',
        },
    ];

    // --- 3. MATCH CONFIGURATION ---
    let submittedFormConfig = formType ? FORM_CONFIGS.find(config => config.type === formType) : null;
    if (!submittedFormConfig) {
        submittedFormConfig = FORM_CONFIGS.find(config => config.slugs && config.slugs.includes(path));
    }

    if (!submittedFormConfig) {
        return res.status(400).json({ success: false, message: 'Invalid form source.' });
    }

    const { zohoUrl, fieldMap, redirectUrl } = submittedFormConfig;

    // --- 4. SUBMIT TO BREVO ---
    if (formType !== 'CAREER_FORM') {
        try {
            const brevoApiKey = process.env.BREVO_API_KEY;

            // Clean phone: Remove all non-numeric characters except +
            let cleanPhone = (phone || '').replace(/[^\d+]/g, '');

            // Ensure it starts with + for Brevo SMS validation
            if (cleanPhone && !cleanPhone.startsWith('+')) {
                cleanPhone = `+${cleanPhone}`;
            }

            const brevoData = {
                email: email,
                attributes: {
                    FIRSTNAME: name || '',
                    // SMS: cleanPhone
                },
                listIds: [12],
                updateEnabled: true
            };

            // --- CONSOLE LOG FOR BREVO DEBUGGING ---
            console.log('Sending following data to Brevo:', JSON.stringify(brevoData, null, 2));

            const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'api-key': brevoApiKey,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(brevoData)
            });

            const brevoResult = await brevoResponse.json();

            if (!brevoResponse.ok) {
                console.error('Brevo detailed error:', JSON.stringify(brevoResult));
            } else {
                console.log('Brevo entry created/updated successfully.');
            }
        } catch (brevoError) {
            console.error('Brevo network/system error:', brevoError);
        }
    }
    // --- 5. SUBMIT TO ZOHO (Commented for testing) ---

    const zohoPayload = new URLSearchParams();
    zohoPayload.append(fieldMap.name, name || '');
    zohoPayload.append(fieldMap.email, email || '');
    zohoPayload.append(fieldMap.phone, phone || '');

    if (fieldMap.school) zohoPayload.append(fieldMap.school, school || '');
    if (grade && fieldMap.grade) zohoPayload.append(fieldMap.grade, grade);
    if (course && fieldMap.course) zohoPayload.append(fieldMap.course, course);
    if (curriculum && fieldMap.curriculum) zohoPayload.append(fieldMap.curriculum, curriculum);
    if (fieldMap.message) zohoPayload.append(fieldMap.message, message || '');
    if (fieldMap.pageinfo) zohoPayload.append(fieldMap.pageinfo, pageinfo || '');

    if (fieldMap.location) zohoPayload.append(fieldMap.location, location || '');
    if (fieldMap.department) zohoPayload.append(fieldMap.department, department || '');
    if (fieldMap.position) zohoPayload.append(fieldMap.position, position || '');
    if (fieldMap.subjects) zohoPayload.append(fieldMap.subjects, subjects || '');
    if (fieldMap.job_type) zohoPayload.append(fieldMap.job_type, job_type || '');
    if (fieldMap.notice_period) zohoPayload.append(fieldMap.notice_period, notice_period || '');
    if (fieldMap.experience) zohoPayload.append(fieldMap.experience, experience || '');
    if (fieldMap.tests_courses) zohoPayload.append(fieldMap.tests_courses, tests_courses || '');
    if (fieldMap.courses) zohoPayload.append(fieldMap.courses, courses || '');
    if (fieldMap.heard_about) zohoPayload.append(fieldMap.heard_about, heard_about || '');

    try {
        const zohoResponse = await fetch(zohoUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: zohoPayload.toString(),
        });

        if (zohoResponse.status === 200 || zohoResponse.status === 302) {
            return res.status(200).json({ success: true, redirectUrl });
        } else {
            return res.status(502).json({ success: false, message: 'Zoho failure' });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal error' });
    }


    return res.status(200).json({
        success: true,
        message: 'Brevo success (Zoho paused)',
        redirectUrl: redirectUrl
    });
}   