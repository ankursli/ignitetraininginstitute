import { Montserrat } from 'next/font/google';
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Script from "next/script";
import { useState, createContext, useEffect } from "react";
import Link from 'next/link';

import "@/styles/critical.css";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import SEOHead from '../components/SEOHead';
import Header from "../components/Header";
import Footer from "../components/Footer";
import DelayedPopup from "../components/DelayedPopup";

import "@/styles/DelayedPopup.css";

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

const loadStyles = () => {
    import("@/styles/home-copy/Blog.css");
    import("@/styles/blog/Blogpg.css");
    import("@/styles/slug/slug.css");
    import("@/styles/ibdp/Ibdp.css");
    import("@/styles/bloginnerpage.css");
    import("@/styles/team/team.css");
    import("@/styles/contact/contact.css");
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
    const [headerHeight, setHeaderHeight] = useState(0); // Default to 0 since header is removed
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
            // Temporarily disabled for LCP debugging
            console.log('Locomotive Scroll disabled for debugging');
            setShouldLoadLocomotiveScroll(false);
            // setShouldLoadLocomotiveScroll(true);
        }
    }, []);

    useEffect(() => {
        if (!stylesLoaded) {
            loadStyles();
            setStylesLoaded(true);
        }
    }, [stylesLoaded]);

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

    // Minimal Return for Debugging
    return (
        <PopupProvider>
            {/* <Script
                id="gtm-script"
                strategy="lazyOnload"
                dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PMG2GSQ');`,
                }}
            /> */}

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
                        <Link href="/join-free-demo-class" passHref legacyBehavior>
                            <a className="sticky-demo-button" aria-label="Go to Free Demo Class page">
                                Get a Free Demo
                            </a>
                        </Link>
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
                        <Link href="/join-free-demo-class" passHref legacyBehavior>
                            <a className="sticky-demo-button" aria-label="Go to Free Demo Class page">
                                Get a Free Demo
                            </a>
                        </Link>
                    )}
                </>
            )}
        </PopupProvider>
    );
}