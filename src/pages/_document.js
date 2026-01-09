import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en"> 
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
     
        <link rel="preload" as="image" href="/images/video-cover.webp" fetchpriority="high" type="image/webp" />
       <style
    dangerouslySetInnerHTML={{
      __html: `
        .hero { position: relative; width: 100%; height: 520px; overflow: hidden; background: #000; }
        /* Ensure the poster fills the space immediately so LCP isn't delayed by layout */
        .heroPoster { width: 100%; height: 520px; object-fit: cover; display: block; }
        @media (min-width: 992px) { .hero, .heroPoster { height: 620px; } }
      `,
    }}
  />
      </Head>
      <body>
        <Main />
        <NextScript />

        {/* DELAY BOOTSTRAP: Only load it when the user actually starts scrolling */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('scroll', function() {
                if (!window.bootstrapLoaded) {
                  var s = document.createElement('script');
                  s.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
                  s.async = true;
                  document.body.appendChild(s);
                  window.bootstrapLoaded = true;
                }
              }, {passive: true, once: true});
            `,
          }}
        />

        {/* DELAY GTM: This is the main cause of the 1,020ms TBT */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              setTimeout(function() {
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-PMG2GSQ');
              }, 4000); // Delay GTM by 4 seconds on mobile
            `,
          }}
        />
      </body>
    </Html>
  );
}
