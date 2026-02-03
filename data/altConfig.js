// data/altConfig.js

/**
 * Maps Next.js route paths (router.pathname) to the required Alt Text.
 * Paths are derived directly from the user-provided URLs (domain and trailing slash removed).
 * * NOTE: The inconsistent URL prefixes (e.g., /courses/ vs just /) are mapped directly 
 * as they appear in the list.
 */
export const PAGE_DEFAULT_ALT_MAP = {
    // ------------------------- HOME & MAIN PAGES --------------------------
    '/': "ignite training institute",
    '/about-us': "about ignite",
    '/contact-us': "contact ignite training institute",
    '/our-team': "ignite training institute's trainers",
    '/career': "career at ignite",
    '/blog': "blogs",
    '/join-free-demo-class': "free demo class at ignite",

    // ------------------------- COURSE PAGES (Mixed Prefixes) -----------------------------
    '/courses': "ignite's tutoring courses",
    '/ib-curriculum-tutors-in-dubai': "ib tutor in dubai", // Lacks '/courses/' prefix
    '/courses/ibdp-tutors-in-dubai': "ibdp tutor in dubai",
    '/courses/myp-tutors-in-dubai': "ib myp tutor in dubai",
    '/british-curriculum-tutors-in-dubai': "british curriculum tutors in dubai", // Lacks '/courses/' prefix
    '/courses/a-level-tutors-in-dubai': "a level tutors in dubai",
    '/courses/igcse-tutors-in-dubai': "igcse tutor in dubai",
    '/courses/homeschooling-tutors-in-dubai': "homeschooling & private candidates",
    '/act-tutors-in-dubai': "act tutoring", // Lacks '/courses/' prefix
    '/advanced-placements-tutors-in-dubai': "ad tutors in dubai", // Lacks '/courses/' prefix

    // ------------------------- GENERIC TUTOR & LOCATION PAGES ----------------------
    '/tutors-in-dubai': "tutors in dubai",
    '/private-tutors-in-dubai': "private tutors in dubai",
    '/tutors-in-ilt-dubai': "tutors in jlt dubai", // Corrected 'ilt' to 'jlt' as per previous context

    // ------------------------- SUBJECT TUTOR PAGES (Root Level) ----------------------
    '/english-tutor-in-dubai': "english tutor in dubai",
    '/french-tutor-in-dubai': "french tutor in dubai",
    '/spanish-tutor-in-dubai': "spanish tutor in dubai",
    '/computer-science-tutor-in-dubai': "computer science tutor in dubai",
    '/economics-tutor-in-dubai': "economics tutor in dubai",
    '/biology-tutor-in-dubai': "biology tutor in dubai",
    '/chemistry-tutor-in-dubai': "chemistry tutor in dubai",
    '/physics-tutor-in-dubai': "physics tutor in dubai",
    '/maths-tutor-in-dubai': "maths tutor in dubai",
    '/business-studies-tutor-in-dubai': "business studies tutor in dubai",
    '/accounting-tutor-in-dubai': "accounting tutor in dubai",
    '/psychology-tutor-in-dubai': "pyschology tutor in dubai",
};

// Fallback alt text if a path is not found in the map
export const FALLBACK_ALT_TEXT = "Ignite Training Institute: Educational Courses and Tutoring";