// pages/api/career-upload.js - FIXED WITH ZOHO HIDDEN FIELDS

import { createReadStream, promises as fs } from 'fs';
import { resolve } from 'path';
import { IncomingForm } from 'formidable';
import FormData from 'form-data';
// ❌ REMOVED: import axios from 'axios'; 
// The global fetch API is available in modern Node.js environments like Vercel.

// --- CRITICAL CONFIG: Disable Next.js Body Parser ---
export const config = {
    api: {
        bodyParser: false,
    },
};

// --- CONFIGURATION for the Career Form ---
const CAREER_FORM_CONFIG = {
    zohoUrl: 'https://forms.zohopublic.com/sumitignitetrain1/form/Career/formperma/5MGjIF4X7ef6W9KUqep6lOshMxA11LSyAx7Ub7300E4/htmlRecords/submit',
    fieldMap: {
        name: 'SingleLine',
        email: 'Email',
        phone: 'PhoneNumber_countrycode',
        location: 'SingleLine1',
        position: 'SingleLine2',
        department: 'SingleLine3',
        subjects: 'SingleLine6',
        job_type: 'Radio',
        notice_period: 'SingleLine4',
        experience: 'SingleLine5',
        cv_file: 'FileUpload',
    },
    redirectUrl: '/thank-you-career',
};

// --- HELPER: Parse Multipart Form Data ---
const parseMultipartForm = (req) => {
    const form = new IncomingForm({
        uploadDir: resolve('./tmp'),
        keepExtensions: true,
        maxFileSize: 5 * 1024 * 1024, // 5MB limit 
        multiples: false,
    });

    return new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
            if (err) return reject(err);

            // Note: formidable returns fields as arrays, converting to single values
            const data = {};
            for (const key in fields) {
                data[key] = fields[key][0];
            }
            const cvFile = files.cv_file ? files.cv_file[0] : null;

            resolve({ data, cvFile });
        });
    });
};

export default async function handler(req, res) {
    console.log('--- DEBUG: API Called ---');

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    let cvFile = null;
    let tempFilePath = null;

    try {
        // 1. Parse the incoming multipart request
        const { data, cvFile: parsedCvFile } = await parseMultipartForm(req);
        cvFile = parsedCvFile;
        tempFilePath = cvFile ? cvFile.filepath : null;

        // ... (logging and validation remain the same) ...

        if (!cvFile || !tempFilePath) {
            return res.status(400).json({
                success: false,
                message: "CV file is required."
            });
        }

        const { zohoUrl, fieldMap, redirectUrl } = CAREER_FORM_CONFIG;

        // 3. Build Zoho FormData with REQUIRED hidden fields
        const zohoFormData = new FormData();

        // ⭐ CRITICAL: Add Zoho's required hidden fields FIRST
        zohoFormData.append('zf_referrer_name', '');
        zohoFormData.append('zf_redirect_url', redirectUrl);
        zohoFormData.append('zc_gad', '');

        // Map text fields
        for (const [key, zohoField] of Object.entries(fieldMap)) {
            if (key !== 'cv_file' && data[key] !== undefined) {
                zohoFormData.append(zohoField, data[key] || '');
            }
        }

        // ⭐ Append the CV file
        if (cvFile && tempFilePath) {
            const fileStream = createReadStream(tempFilePath);
            zohoFormData.append(
                fieldMap.cv_file, // 'FileUpload'
                fileStream,
                {
                    filename: cvFile.originalFilename || 'resume.pdf',
                    contentType: cvFile.mimetype || 'application/pdf',
                }
            );
            console.log('✅ File appended to form data:', cvFile.originalFilename);
        }

        // 4. Submit to Zoho with native fetch (Replacing axios)
        console.log('--- Submitting to Zoho with fetch ---');

        const zohoResponse = await fetch(zohoUrl, {
            method: 'POST',
            body: zohoFormData,
            headers: {
                // Important: Use getHeaders() from 'form-data'
                ...zohoFormData.getHeaders(),
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            },
            // fetch does not require maxRedirects, validateStatus, etc., these are handled naturally.
            // By default, fetch does NOT throw on 4xx/5xx status codes, it just returns them.
        });


        console.log('✅ Zoho Response Status:', zohoResponse.status);

        // Success is generally indicated by 200 (OK) or 302 (Redirect) from a form submission endpoint
        if (zohoResponse.status === 200 || zohoResponse.status === 302) {
            return res.status(200).json({
                success: true,
                message: 'Career form submitted successfully.',
                redirectUrl
            });
        } else {
            // Attempt to read body for error information, if available
            let zohoErrorText = `Zoho submission failed with status ${zohoResponse.status}.`;
            try {
                // Try reading text body, but response might be stream/empty/HTML redirect
                zohoErrorText += ` Response: ${await zohoResponse.text()}`;
            } catch (e) {
                // Ignore if reading body fails
            }
            throw new Error(zohoErrorText);
        }

    } catch (error) {
        console.error('❌ API Route Error:', error.message);
        // Removed axios-specific error logging (error.response)

        return res.status(500).json({
            success: false,
            message: `An internal error occurred: ${error.message}`
        });
    } finally {
        // 5. Clean up temp file
        if (tempFilePath) {
            try {
                await fs.unlink(tempFilePath);
                console.log('🗑️ Temp file cleaned up');
            } catch (cleanupError) {
                console.error('Error cleaning up temp file:', cleanupError);
            }
        }
    }
}