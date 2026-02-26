// pages/api/vote.js

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const formData = new URLSearchParams();
        if (req.body.post_id) formData.append('post_id', req.body.post_id);
        if (req.body.vote_type) formData.append('vote_type', req.body.vote_type);

        const wpResponse = await fetch('https://api.ignitetraininginstitute.com/wp-json/custom/v1/vote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Forwarded-For': req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '',
                'X-Real-IP': req.headers['x-real-ip'] || req.socket?.remoteAddress || '',
            },
            body: formData.toString(),
        });

        if (!wpResponse.ok) {
            // Forward the error status but prevent a hard crash
            const errBody = await wpResponse.text();
            console.error("WP Error Body:", errBody);
            return res.status(wpResponse.status).json({ success: false, message: 'WordPress API returned an error', debug: errBody });
        }

        const data = await wpResponse.json();
        return res.status(200).json(data);
    } catch (error) {
        console.error('API Route Error fetching vote:', error.message);
        // We return 503 instead of throwing a TypeError to the frontend
        return res.status(503).json({ success: false, message: 'Server unreachable or CORS issue bypassed.' });
    }
}
