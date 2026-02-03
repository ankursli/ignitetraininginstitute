This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

## WordPress Category Reflection & Maintenance

The following is a summary of how WordPress categories are reflected in this React/Next.js website:

1. **Automatic UI Reflection**: New categories added to WordPress will show up automatically in the "All Categories" list and category filters on the Blog page. This is because the code fetches categories dynamically from the WordPress API.
2. **Dynamic Category Pages**: Navigating to a category via `example.com/category/new-category-slug` will work automatically and display the correct posts.
3. **Sitemap Updates**: The `sitemap.xml` is fully dynamic and will automatically include new categories and their posts.
4. **Short URLs & Redirects**: Shorthand URLs (e.g., `example.com/new-category` instead of `example.com/category/new-category`) will **NOT** reflect automatically. These depend on the `CATEGORY_SLUGS` list in `next.config.mjs`.
5. **Update Script**: To sync short URLs, you must run `npm run update-categories`. This script fetches the latest slugs and updates your config file, which then requires a server restart/redeploy.
6. **SEO Data**: New categories will use fallback SEO settings (WordPress description + generic title) unless you manually add them to the `categorySeoMap` in `src/pages/category/[category-slug].js`.

In summary: Main content and sitemaps reflect automatically, but shorthand redirects and optimized SEO require manual updates or running the update script.
