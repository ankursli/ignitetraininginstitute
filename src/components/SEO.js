// src/components/SEO.js
import Head from 'next/head';

const SEO = ({ title, description, url, image, preloadImages }) => {
    // 1. We use the provided title directly (no global site name appended).
    const pageTitle = title || 'Ignite Training Institute';



    return (
        <Head>
            {/* Primary SEO Tags */}
            <title>{pageTitle}</title>

            {/* Critical LCP Preloading */}
            {preloadImages && preloadImages.map((img, index) => (
                <link
                    key={index}
                    rel="preload"
                    as="image"
                    href={img.src}
                    type={img.type}
                    media={img.media}
                    fetchPriority="high"
                />
            ))}

            {/* 🚨 CRITICAL: The 'key' prop forces replacement of any default meta tag */}
            <meta
                name="description"
                content={description || "Discover the best courses and expert trainers for your career growth."}
                key="desc"
            />

            {/* Canonical URL (Highly Recommended) */}
            {url && <link rel="canonical" href={url} />}

            {/* Open Graph / Social Media Tags (use consistent keys to override) */}
            <meta property="og:title" content={pageTitle} key="og-title" />
            <meta
                property="og:description"
                content={description || "Discover the best courses and expert trainers for your career growth."}
                key="og-desc"
            />
            <meta property="og:type" content="website" key="og-type" />
            <meta property="og:url" content={url || 'https://www.yoursite.com'} key="og-url" />
            {image && <meta property="og:image" content={image} key="og-image" />}

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" key="twitter-card" />
        </Head>
    );
};

export default SEO;