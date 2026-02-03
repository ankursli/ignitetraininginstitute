import Head from 'next/head';

export default function SEOHead({
    title = "Ignited Training Institute",
    description = "Expert tutoring in Dubai",
    preloadImages = [],
    preloadVideos = [],
}) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} key="desc" />

            {/* REMOVED: Preconnects moved to _document.js for better performance */}

            {/* Preload LCP image candidates with fetchpriority high */}
            {preloadImages.map((img, idx) => (
                <link
                    key={idx}
                    rel="preload"
                    href={img.src}
                    as="image"
                    type={img.type || "image/webp"}
                    fetchPriority={idx === 0 ? "high" : "low"}
                    media={img.media || undefined}
                />
            ))}

            {/* Preload videos if specified */}
            {preloadVideos.map((video, idx) => (
                <link
                    key={`video-${idx}`}
                    rel="preload"
                    href={video.src}
                    as="video"
                    type={video.type || "video/mp4"}
                />
            ))}
        </Head>
    );
}
