import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://ignitetraininginstitute.com" />

        {/* --- CRITICAL LCP PRELOADS --- */}
        <link
          rel="preload"
          href="/images/video-cover-mobile.webp"
          as="image"
          type="image/webp"
          media="(max-width: 767px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/images/video-cover.webp"
          as="image"
          type="image/webp"
          media="(min-width: 768px)"
          fetchPriority="high"
        />

        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        <link
          rel="preload"
          href="/images/logo.svg"
          as="image"
          type="image/svg+xml"
          fetchPriority="high"
        />


        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta name="theme-color" content="#000000" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />



      </Head>

      <body>
        <Main />
        <NextScript />

        {/* <script
          async
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        ></script> */}
      </body>
    </Html>
  );
}