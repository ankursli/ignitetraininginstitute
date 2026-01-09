import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* 1. CRITICAL: Preconnect to reduce DNS/Handshake time */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* 2. THE LCP FIX: Preload the hero poster immediately with high priority */}
        <link
          rel="preload"
          href="/images/hero-poster.webp"
          as="image"
          type="image/webp"
          fetchpriority="high"
        />

        {/* 3. Preload Logo */}
        <link
          rel="preload"
          href="/images/logo.svg"
          as="image"
          type="image/svg+xml"
        />

        {/* 4. Optimized Font Loading (Prevents blocking) */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          media="print"
          onLoad="this.media='all'"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </noscript>

        <meta name="theme-color" content="#000000" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />

        {/* 5. CRITICAL CSS: Fixes the 'Hidden LCP' on desktop and reserves space */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Reserves space to prevent Layout Shift (CLS) */
              .hero {
                position: relative;
                width: 100%;
                height: 620px;
                background-color: #000; /* Dark placeholder to keep LCP area "active" */
                overflow: hidden;
              }

              /* The LCP Element must be visible on ALL screens for a fast paint */
              .heroPoster {
                width: 100%;
                height: 620px;
                object-fit: cover;
                display: block !important; 
                position: absolute;
                inset: 0;
                z-index: 1;
              }

              /* Mobile height adjustment */
              @media (max-width: 575px) {
                .hero, .heroPoster {
                  height: 520px;
                }
              }
            `,
          }}
        />
      </Head>

      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PMG2GSQ"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />

        <Main />
        <NextScript />

        {/* 6. TBT FIX: Delay GTM until interaction to free up the main thread */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var gtmLoaded = false;
                function loadGTM() {
                  if (gtmLoaded) return;
                  gtmLoaded = true;
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-PMG2GSQ');
                }
                // Load GTM on first user interaction or after 3.5 seconds
                var interactionEvents = ['mouseover', 'keydown', 'touchstart', 'scroll'];
                interactionEvents.forEach(function(e) {
                  window.addEventListener(e, loadGTM, {passive: true, once: true});
                });
                setTimeout(loadGTM, 3500);
              })();
            `,
          }}
        />

        {/* Bootstrap - Kept async at the end */}
        <script
          async
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        ></script>
      </body>
    </Html>
  );
}
