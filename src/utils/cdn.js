/**
 * CDN URL Helper
 * 
 * Use this to generate CDN URLs for images and assets in your public folder
 */

const CDN_URL = process.env.NEXT_PUBLIC_CDN_URL || 'https://iticdn.s3.ap-south-1.amazonaws.com';
const USE_CDN = process.env.NEXT_PUBLIC_USE_CDN === 'true';

/**
 * Get CDN URL for a public asset
 * @param {string} path - Path to asset (e.g., '/images/logo.webp' or 'images/logo.webp')
 * @returns {string} - Full URL to asset (CDN or local)
 */
export function getCDNUrl(path) {
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    // Return CDN URL if enabled, otherwise return local path
    return USE_CDN ? `${CDN_URL}/${cleanPath}` : `/${cleanPath}`;
}

/**
 * Get CDN URL for an image
 * Alias for getCDNUrl for clarity
 */
export function getImageUrl(path) {
    return getCDNUrl(path);
}

/**
 * Get CDN URL for a video
 * Alias for getCDNUrl for clarity
 */
export function getVideoUrl(path) {
    return getCDNUrl(path);
}

/**
 * Get background image CSS with CDN support
 * @param {string} path - Path to image
 * @returns {object} - Style object with background-image
 */
export function getBackgroundImage(path) {
    return {
        backgroundImage: `url('${getCDNUrl(path)}')`,
    };
}

// Export CDN configuration
export const cdnConfig = {
    url: CDN_URL,
    enabled: USE_CDN,
};

export default {
    getCDNUrl,
    getImageUrl,
    getVideoUrl,
    getBackgroundImage,
    cdnConfig,
};
