import React, { useState } from "react";
import LazySection from "@/components/LazySection";
import he from "he";
import SEO from "@/components/SEO";
import Hero from "@/components/homeCopy/Hero";

// Dynamic imports for below-the-fold components
import dynamic from "next/dynamic";
const Course = dynamic(() => import("@/components/homeCopy/Course"));
const MarqueeBanner = dynamic(() => import("@/components/homeCopy/MarqueeBanner"));
const About = dynamic(() => import("@/components/homeCopy/About"));
const Test = dynamic(() => import("@/components/homeCopy/Test"));
const Subjects = dynamic(() => import("@/components/homeCopy/Subjects"));
const Usps = dynamic(() => import("@/components/homeCopy/Usps"));
const Trainers = dynamic(() => import("@/components/homeCopy/Trainers"));
const Testimonial = dynamic(() => import("@/components/homeCopy/Testimonial"));
const Blog = dynamic(() => import("@/components/homeCopy/Blog"));

const HomeCopy = ({ headerHeight, blogData }) => {
    const [active, setActive] = useState(1);

    return (
        <>
            <SEO
                title="Ignite Training Institute - Tutors In UAE For Exam Success"
                description="As Dubai's leading coaching institute, we empower students to embark on their academic journey by offering expert tutoring for IB, IGCSE, A Levels & AP"
                url="https://ignitetraininginstitute.com"
                preloadImages={[
                    // We only preload the TRUE LCP candidate (the poster) 
                    // Background images are discovered via CSS and are less critical.
                    {
                        src: "/images/video-cover-mobile.webp",
                        type: "image/webp",
                        media: "(max-width: 767px)"
                    }
                ]}
            />
            <div className="homeCopy" style={{ paddingTop: `${headerHeight}px` }}>
                <Hero />

                <LazySection>
                    <Course />
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <MarqueeBanner />
                    </section>
                </LazySection>

                <LazySection>
                    <About />
                </LazySection>

                <LazySection>
                    <Test
                        setActive={setActive}
                        active={active}
                    />
                </LazySection>

                <LazySection>
                    <Subjects />
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <Usps />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <Trainers />
                    </section>
                </LazySection>

                <LazySection>
                    <Testimonial />
                </LazySection>

                <LazySection>
                    <Blog blogData={blogData} />
                </LazySection>
            </div>
        </>
    );
};

export async function getServerSideProps({ res }) {
    // Cache the entire page on the edge for 1 hour to improve TTFB
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=59');
    try {
        const res = await fetch("https://api.ignitetraininginstitute.com/wp-json/wp/v2/posts?per_page=3&_embed");
        const data = await res.json();

        const blogData = data.map((post) => {
            const rawExcerpt = post.excerpt.rendered.replace(/<[^>]*>?/gm, "");
            const rawTitle = post.title.rendered.replace(/<[^>]*>?/gm, "");
            const decodedExcerpt = he.decode(rawExcerpt);
            const decodedTitle = he.decode(rawTitle);
            const trimmedExcerpt = decodedExcerpt.length > 80
                ? decodedExcerpt.substring(0, decodedExcerpt.lastIndexOf(" ", 80)) + "..."
                : decodedExcerpt;

            return {
                img: post._embedded["wp:featuredmedia"]?.[0]?.source_url || "/images/blog-placeholder.webp",
                title: decodedTitle,
                desc: trimmedExcerpt,
                link: post.slug,
            };
        });

        return {
            props: {
                blogData,
            },
        };
    } catch (error) {
        console.error("Error fetching blogs for SSR:", error);
        return {
            props: {
                blogData: [],
            },
        };
    }
}

export default HomeCopy;