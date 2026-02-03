const BASE_URL = 'https://ignitetraininginstitute.com'

const robotsContent = `User-agent: *
Allow: /*.js
Allow: /*.css
Allow: /wp-content/uploads/
Allow: /
Disallow: /wp-admin/
Disallow: /wp-includes/
Disallow: /wp-content/cache/
Disallow: /wp-content/upgrade/
Disallow: */feed/
Disallow: /xmlrpc.php

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: meta-externalagent
Allow: /

User-agent: Bytespider
Allow: /

User-agent: CCBot
Allow: /

User-agent: DuckDuckBot
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml`

export async function getServerSideProps({ res }) {
    res.setHeader('Content-Type', 'text/plain')
    // Tells Cloudflare and Browsers to check for a new version frequently
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=59')
    res.write(robotsContent)
    res.end()

    return {
        props: {},
    }
}

export default function Robots() { }