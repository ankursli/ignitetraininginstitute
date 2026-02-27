import { Montserrat } from 'next/font/google';
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Script from "next/script";
import { useState, createContext, useEffect } from "react";
import Link from 'next/link';

import "@/styles/critical.css";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/home-copy/Blog.css";
import "@/styles/DelayedPopup.css";
import "@/styles/blog/Blogpg.css";
import "@/styles/bloginnerpage.css";
import "@/styles/slug/slug.css";
import "@/styles/contact/contact.css";
import "@/styles/ibdp/Ibdp.css";
import "@/styles/team/team.css";

import SEOHead from '../components/SEOHead';
import Header from "../components/Header";
import Footer from "../components/Footer";

const DelayedPopup = dynamic(() => import("../components/DelayedPopup"), {
    ssr: false,
});

const LocomotiveScrollProvider = dynamic(() => import('../components/LocomotiveScrollProvider'), {
    ssr: false,
});

const isPageSpeedInsights = () => {
    if (typeof navigator === 'undefined') return false;
    const userAgent = navigator.userAgent.toLowerCase();
    return (
        userAgent.includes('lighthouse') ||
        userAgent.includes('gtmetrix') ||
        userAgent.includes('pagespeed') ||
        userAgent.includes('chrome-lighthouse') ||
        userAgent.includes('speed insights')
    );
};

const isMobileDevice = () => {
    if (typeof window === 'undefined') return false;
    return (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        window.innerWidth <= 768
    );
};



const montserrat = Montserrat({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-montserrat',
    preload: true,
    fallback: ['Arial', 'sans-serif'],
});

export const PopupContext = createContext({
    isManualOpen: false,
    openManualPopup: () => { console.error('PopupContext used without Provider'); },
    closeManualPopup: () => { console.error('PopupContext used without Provider'); },
});

const PopupProvider = ({ children }) => {
    const [isManualOpen, setIsManualOpen] = useState(false);
    const openManualPopup = () => setIsManualOpen(true);
    const closeManualPopup = () => setIsManualOpen(false);

    return (
        <PopupContext.Provider value={{ isManualOpen, openManualPopup, closeManualPopup }}>
            {children}
        </PopupContext.Provider>
    );
}

export default function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const [headerHeight, setHeaderHeight] = useState(102); // Default to approx header height to prevent CLS
    const [showButton, setShowButton] = useState(false);
    const [stylesLoaded, setStylesLoaded] = useState(false);
    const [shouldLoadLocomotiveScroll, setShouldLoadLocomotiveScroll] = useState(false);

    const mobileBreakpoint = 2600;

    useEffect(() => {
        const isMobile = isMobileDevice();
        // const isPageSpeed = isPageSpeedInsights(); // Only needed if you have special logic for bots

        // Ensure Locomotive Scroll is disabled for ALL mobile devices
        if (isMobile) {
            console.log('Locomotive Scroll disabled for mobile');
            setShouldLoadLocomotiveScroll(false);
        } else {
            setShouldLoadLocomotiveScroll(true);
        }
    }, []);



    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth <= mobileBreakpoint) {
                const shouldShow = window.scrollY > 100;
                setShowButton(shouldShow);
            } else {
                setShowButton(true);
            }
        };

        const handleResize = () => {
            if (window.innerWidth > mobileBreakpoint) {
                setShowButton(true);
            } else {
                handleScroll();
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleResize, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // --- Google Ads Click Conversion Tracking for "Get a Free Demo" ---
    const handleDemoClick = (e) => {
        e.preventDefault();
        const url = '/join-free-demo-class';

        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
            window.gtag('event', 'conversion', {
                'send_to': 'AW-844959495/i6DpCNnjiP4bEIee9JID',
                'event_callback': function () {
                    window.location.href = url;
                }
            });

            // Fallback in case the callback doesn't fire
            setTimeout(() => {
                window.location.href = url;
            }, 500);
        } else {
            // If gtag isn't loaded, just perform the regular navigation
            window.location.href = url;
        }
    };

    // Minimal Return for Debugging
    return (
        <PopupProvider>
            <Script
                id="gtm-script"
                strategy="lazyOnload"
                dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PMG2GSQ');`,
                }}
            />
            {/* Google Tag (gtag.js) */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=AW-844959495"
                strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'AW-844959495');
                `}
            </Script>

            {/* Meta Pixel Code */}
            <Script id="meta-pixel" strategy="lazyOnload">
                {`
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '1590586591378731');
                    fbq('track', 'PageView');
                `}
            </Script>
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: 'none' }}
                    src="https://www.facebook.com/tr?id=1590586591378731&ev=PageView&noscript=1"
                    alt=""
                />
            </noscript>

            {shouldLoadLocomotiveScroll ? (
                <LocomotiveScrollProvider>
                    <SEOHead />
                    <div className={`${montserrat.className} ${montserrat.variable}`}>
                        <Header setHeaderHeight={setHeaderHeight} />
                        <Component {...pageProps} headerHeight={headerHeight} />
                        <Footer />
                        <DelayedPopup />
                    </div>
                    {showButton && (
                        <a
                            href="/join-free-demo-class"
                            onClick={handleDemoClick}
                            className="sticky-demo-button"
                            aria-label="Go to Free Demo Class page"
                        >
                            Get a Free Demo
                        </a>
                    )}
                </LocomotiveScrollProvider>
            ) : (
                <>
                    <SEOHead />
                    <div className={`${montserrat.className} ${montserrat.variable}`}>
                        <Header setHeaderHeight={setHeaderHeight} />
                        <Component {...pageProps} headerHeight={headerHeight} />
                        <Footer />
                        <DelayedPopup />
                    </div>
                    {showButton && (
                        <a
                            href="/join-free-demo-class"
                            onClick={handleDemoClick}
                            className="sticky-demo-button"
                            aria-label="Go to Free Demo Class page"
                        >
                            Get a Free Demo
                        </a>
                    )}
                </>
            )}
        </PopupProvider>
    );
}