/** @type {import('next').NextConfig} */

// STATIC PAGES LIST (Root Level - 34 pages)
const STATIC_ROOT_PAGES = [
  'about-us',
  'accounting-tutor-in-dubai',
  'act-tutors-in-dubai',
  'advanced-placements-tutors-in-dubai',
  'biology-tutor-in-dubai',
  'blog',
  'british-curriculum-tutors-in-dubai',
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
  'maths-tutor-in-dubai',
  'our-team',
  'physics-tutor-in-dubai',
  'private-tutors-in-dubai',
  'psychology-tutor-in-dubai',
  'spanish-tutor-in-dubai',
  'thank-you-blog',
  'thank-you-career',
  'thank-you-contact',
  'thank-you-curriculum',
  'thank-you-freedemo',
  'thank-you-homeschooling',
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

// NEXT.JS 16 COMPATIBLE CONFIG - OPTIMIZED FOR PERFORMANCE
const nextConfig = {
  reactStrictMode: true,

  // Asset prefix for CDN - loads all _next/static/* files from S3
  // Use environment variable for flexibility
  assetPrefix: process.env.NEXT_PUBLIC_CDN_URL || 'https://iticdn.s3-accelerate.amazonaws.com/',

  // Base path for public folder assets (images, videos, etc.)
  // Leave empty to serve from same domain, or set to CDN URL
  // basePath: '', // Uncomment and set if needed

  // Optimize images (Next.js 16 compatible)
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'inline',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Allow loading images from S3 CDN
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'iticdn.s3.ap-south-1.amazonaws.com',
        pathname: '/**',
      },
    ],
    // Disable image optimization for external CDN images
    unoptimized: process.env.NEXT_PUBLIC_CDN_IMAGES === 'true',
  },

  // Compression
  compress: true,

  // Generate ETags
  generateEtags: true,

  // Production optimizations
  ...(process.env.NODE_ENV === 'production' && {
    compiler: {
      removeConsole: {
        exclude: ['error', 'warn'],
      },
      reactRemoveProperties: true,
    },
  }),

  // Experimental features for optimization
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-phone-input-2'],
  },
  turbopack: {},
  // Webpack optimization
  webpack: (config, { dev, isServer }) => {
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: 25,
          minSize: 20000,
          maxSize: 90000, // Target 90KB max chunk size
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
          },
        },
      };
    }

    return config;
  },

  // Performance headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/videos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
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

  async redirects() {
    const redirects = [];

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
      source: `/:slug((?!${excludePattern})[^.]+)`,
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

export default nextConfig;
