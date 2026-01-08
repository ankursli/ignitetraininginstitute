import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* CRITICAL: Preconnect to external domains - reduces DNS lookup time */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://ignitetraininginstitute.com" />

        {/* DNS prefetch for less critical resources */}
        {/* <link rel="dns-prefetch" href="https://scripts.clarity.ms" /> */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        {/* <link rel="preload" href="/_next/static/css/bootstrap.min.css" as="style" /> */}

        {/* CRITICAL: Preload logo (LCP candidate) */}
        <link
          rel="preload"
          href="/images/logo.svg"
          as="image"
          type="image/svg+xml"
          fetchPriority="high"
        />

        {/* CRITICAL: Preload critical fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </noscript>

        {/* Viewport - FIXED for mobile optimization */}

        <meta name="theme-color" content="#000000" />

        {/* Performance hints */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
      </Head>

      <body>
        {/* GTM noscript - keep for tracking */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PMG2GSQ"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />

        <Main />
        <NextScript />

        {/* CRITICAL CHANGE: Move Bootstrap to async load after page interactive */}
        <script
          async
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        ></script>

        {/* CRITICAL CHANGE: Delay GTM load until after window load + 3 seconds */}
        {/* <script
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
                
                // Load GTM after window load + 3 seconds OR on user interaction
                window.addEventListener('load', function() {
                  setTimeout(loadGTM, 3000);
                });
                
                // Load on first user interaction (scroll, click, touchstart)
                var userInteracted = false;
                var interactionEvents = ['scroll', 'mousedown', 'touchstart', 'keydown'];
                
                function onUserInteraction() {
                  if (!userInteracted) {
                    userInteracted = true;
                    loadGTM();
                    interactionEvents.forEach(function(event) {
                      document.removeEventListener(event, onUserInteraction);
                    });
                  }
                }
                
                interactionEvents.forEach(function(event) {
                  document.addEventListener(event, onUserInteraction, { passive: true, once: true });
                });
              })();
            `,
          }}
        /> */}
      </body>
    </Html>
  );
}
