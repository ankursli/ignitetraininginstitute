/** @type {import('next').NextConfig} */

// Import bundle analyzer
import withBundleAnalyzer from '@next/bundle-analyzer';

// STATIC PAGES LIST (Root Level - 34 pages)
const STATIC_ROOT_PAGES = [
  'about-us',
  'accounting-tutor-in-dubai',
  'act-tutors-in-dubai',
  'advanced-placements-tutors-in-dubai',
  'biology-tutor-in-dubai',
  'blog',
  'british-curriculum-tutors-in-dubai',
  'british-curriculum-tutors-in-dubai-copy',
  'business-studies-tutor-in-dubai',
  'career',
  'chemistry-tutor-in-dubai',
  'computer-science-tutor-in-dubai',
  'contact-us',
  'courses',
  'economics-tutor-in-dubai',
  'english-tutor-in-dubai',
  'french-tutor-in-dubai',
  'ib-curriculum-tutors-in-dubai',
  'index',
  'join-free-demo-class',
  'join-free-demo-class-copy',
  'maths-tutor-in-dubai',
  'our-team',
  'physics-tutor-in-dubai',
  'private-tutors-in-dubai',
  'psychology-tutor-in-dubai',
  'spanish-tutor-in-dubai',
  'thank-you-blog',
  'thank-you-career',
  'thank-you-contact',
  'thank-you-homeschooling',
  'thank-you-newsletter',
  'thank-you-organic',
  'thank-you-organic-copy',
  'thank-you-popup',
  'thank-you-subject',
  'thank-you-tutor',
  'tutors-in-dubai',
  'tutors-in-jlt-dubai',
];

// STATIC PAGES LIST (Courses Folder - 5 pages)
const STATIC_COURSES_PAGES = [
  'a-level-tutors-in-dubai',
  'homeschooling-tutors-in-dubai',
  'ibdp-tutors-in-dubai',
  'igcse-tutors-in-dubai',
  'myp-tutors-in-dubai',
];

// CATEGORY SLUGS (17 categories)
const CATEGORY_SLUGS = [
  'a-levels',
  'advanced-placements',
  'american-curriculum',
  'british-curriculum',
  'gcse',
  'homeschooling',
  'ibdp',
  'igcse',
  'international-baccalaureate',
  'myp',
  'news-mentions',
  'schools',
  'standardized-tests',
  'study-tips',
  'subject-choices',
  'tutoring',
  'universities',
];

const nextConfig = {
  reactStrictMode: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'inline',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.ignitetraininginstitute.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  compress: true,
  generateEtags: true,

  ...(process.env.NODE_ENV === 'production' && {
    compiler: {
      removeConsole: {
        exclude: ['error', 'warn'],
      },
      reactRemoveProperties: true,
    },
  }),

  experimental: {
    optimizePackageImports: ['lucide-react', 'react-phone-input-2'],
  },

  turbopack: {},

  webpack: (config, { dev, isServer }) => {
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            vendor: {
              name: 'vendor',
              chunks: 'all',
              test: /node_modules/,
              priority: 20,
            },
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
            react: {
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              name: 'react',
              chunks: 'all',
              priority: 30,
            },
            swiper: {
              test: /[\\/]node_modules[\\/]swiper[\\/]/,
              name: 'swiper',
              chunks: 'async',
              priority: 25,
            },
            locomotiveScroll: {
              test: /[\\/]node_modules[\\/]locomotive-scroll[\\/]/,
              name: 'locomotive-scroll',
              chunks: 'async',
              priority: 25,
            },
            bootstrap: {
              test: /[\\/]node_modules[\\/](bootstrap|@popperjs)[\\/]/,
              name: 'bootstrap',
              chunks: 'async',
              priority: 25,
            },
          },
        },
      };
    }

    return config;
  },

  async headers() {
    return [
      {
        // Global headers - Simplified to avoid Cloudflare conflicts
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://cdn.jsdelivr.net https://www.clarity.ms https://static.cloudflareinsights.com https://connect.facebook.net https://www.googleadservices.com https://googleads.g.doubleclick.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https://www.googletagmanager.com https://www.google-analytics.com https://ignitetraininginstitute.com https://api.ignitetraininginstitute.com https://flagcdn.com https://www.facebook.com https://www.google.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://stats.g.doubleclick.net https://bat.bing.com; connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com https://api.ignitetraininginstitute.com https://cdn.jsdelivr.net https://www.clarity.ms https://static.cloudflareinsights.com https://www.facebook.com https://www.google.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://analytics.google.com; frame-src 'self' https://www.youtube.com https://www.google.com https://td.doubleclick.net https://bid.g.doubleclick.net;"
          },
        ],
      },
      {
        // Explicitly ensure robots.txt has the correct type and no framing restrictions
        source: '/robots.txt',
        headers: [
          { key: 'Content-Type', value: 'text/plain' },
          { key: 'Cache-Control', value: 'public, s-maxage=3600, stale-while-revalidate=59' },
        ],
      },
      {
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/videos/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/_next/static/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/',
        headers: [
          {
            key: 'Link',
            value: '<https://fonts.googleapis.com>; rel=preconnect; crossorigin, <https://fonts.gstatic.com>; rel=preconnect; crossorigin, <https://www.googletagmanager.com>; rel=dns-prefetch'
          },
        ],
      },
    ];
  },

  // ADD REWRITES FOR DYNAMIC ROBOTS AND SITEMAP
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/robots.txt.js',
      },
      {
        source: '/sitemap.xml',
        destination: '/sitemap.xml.js',
      },
      {
        source: '/api/mpl/:path*',
        destination: 'https://api.ignitetraininginstitute.com/wp-json/mpl/v1/:path*',
      },
      {
        source: '/api/wp/:path*',
        destination: 'https://api.ignitetraininginstitute.com/wp-json/wp/v2/:path*',
      },
    ];
  },

  async redirects() {
    const redirects = [
      {
        source: '/blog/emsat-tutors-in-dubai',
        destination: '/',
        permanent: true,
      },
    ];

    CATEGORY_SLUGS.forEach((slug) => {
      if (!STATIC_ROOT_PAGES.includes(slug) && !STATIC_COURSES_PAGES.includes(slug)) {
        redirects.push({
          source: `/${slug}`,
          destination: `/category/${slug}`,
          permanent: true,
        });
      }
    });

    const excludedSlugs = [
      ...STATIC_ROOT_PAGES,
      ...STATIC_COURSES_PAGES,
      ...CATEGORY_SLUGS,
      '_next',
      'api',
      'category',
      'images',
      'videos',
      'fonts',
      'styles',
      'public',
      'favicon.ico',
      'robots.txt',
      'sitemap.xml',
    ];

    const excludePattern = excludedSlugs.join('|');

    redirects.push({
      source: `/:slug((?!(?:${excludePattern})$)[^/.]+)`,
      destination: '/blog/:slug',
      permanent: true,
    });

    CATEGORY_SLUGS.forEach((slug) => {
      redirects.push({
        source: `/blog/${slug}`,
        destination: `/category/${slug}`,
        permanent: true,
      });
    });

    return redirects;
  },
};

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true,
});

export default bundleAnalyzer(nextConfig);