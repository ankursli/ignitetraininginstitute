const WP_API_URL = 'https://api.ignitetraininginstitute.com/wp-json/wp/v2'
const BASE_URL = 'https://ignitetraininginstitute.com'

const STATIC_ROOT_PAGES = [
    '', 'about-us', 'accounting-tutor-in-dubai', 'act-tutors-in-dubai',
    'advanced-placements-tutors-in-dubai', 'biology-tutor-in-dubai', 'blog',
    'british-curriculum-tutors-in-dubai', 'business-studies-tutor-in-dubai',
    'career', 'chemistry-tutor-in-dubai', 'computer-science-tutor-in-dubai',
    'contact-us', 'courses', 'economics-tutor-in-dubai', 'english-tutor-in-dubai',
    'french-tutor-in-dubai', 'ib-curriculum-tutors-in-dubai', 'join-free-demo-class',
    'maths-tutor-in-dubai', 'our-team', 'physics-tutor-in-dubai',
    'private-tutors-in-dubai', 'psychology-tutor-in-dubai', 'spanish-tutor-in-dubai',
    'tutors-in-dubai', 'tutors-in-jlt-dubai'
]

const STATIC_COURSES_PAGES = [
    'a-level-tutors-in-dubai', 'homeschooling-tutors-in-dubai',
    'ibdp-tutors-in-dubai', 'igcse-tutors-in-dubai', 'myp-tutors-in-dubai'
]

async function fetchAllWordPressData(endpoint) {
    let allItems = []
    let page = 1
    let morePagesAvailable = true

    while (morePagesAvailable) {
        try {
            const res = await fetch(`${WP_API_URL}/${endpoint}?per_page=100&page=${page}&hide_empty=false`)
            const data = await res.json()

            if (Array.isArray(data) && data.length > 0) {
                allItems = [...allItems, ...data]
                if (data.length === 100) {
                    page++
                } else {
                    morePagesAvailable = false
                }
            } else {
                morePagesAvailable = false
            }
        } catch (error) {
            console.error(`Error fetching page ${page}:`, error)
            morePagesAvailable = false
        }
    }
    return allItems
}

function generateSiteMap(posts, categories) {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${STATIC_ROOT_PAGES.map((page) => {
        const isTutorPage = page.includes('tutor') || page.includes('curriculum')
        return `
       <url>
           <loc>${BASE_URL}${page ? `/${page}` : ''}</loc>
           ${isTutorPage ? '<priority>0.9</priority>' : ''}
       </url>`
    }).join('')}
     
     ${STATIC_COURSES_PAGES.map((page) => `
       <url>
           <loc>${BASE_URL}/courses/${page}</loc>
           <priority>0.9</priority>
       </url>`).join('')}

     ${categories.map(({ slug }) => `
       <url>
           <loc>${BASE_URL}/category/${slug}</loc>
       </url>`).join('')}

     ${posts.map(({ slug, modified_gmt }) => `
       <url>
           <loc>${BASE_URL}/blog/${slug}</loc>
           <lastmod>${modified_gmt}</lastmod>
       </url>`).join('')}
   </urlset>`
}

export async function getServerSideProps({ res }) {
    try {
        const [posts, categories] = await Promise.all([
            fetchAllWordPressData('posts'),
            fetchAllWordPressData('categories')
        ])

        const sitemap = generateSiteMap(posts, categories)

        res.setHeader('Content-Type', 'text/xml')
        // Cache for 1 hour, serve stale for 1 minute while revalidating
        res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=59')
        res.write(sitemap)
        res.end()
    } catch (e) {
        console.error(e)
        res.statusCode = 500
        res.end()
    }

    return { props: {} }
}

export default function SiteMap() { }