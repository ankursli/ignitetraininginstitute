import { Montserrat } from 'next/font/google';
import { useRouter } from "next/router";
import { useState, createContext, useEffect } from "react";
import Link from 'next/link';
import dynamic from 'next/dynamic';

import "@/styles/critical.css";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import SEOHead from '../components/SEOHead';
import Header from "../components/Header";

const Footer = dynamic(() => import("../components/Footer"), { ssr: false });
const DelayedPopup = dynamic(() => import("../components/DelayedPopup"), { ssr: false });

const LocomotiveScrollProvider = dynamic(
    () => import('../components/LocomotiveScrollProvider'),
    {
        ssr: false,
        loading: () => <div style={{ minHeight: '100vh' }} />
    }
);

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
    // import("@/styles/home-copy/Blog.css");
    // import("@/styles/blog/Blogpg.css");
    // import("@/styles/slug/slug.css");
    // import("@/styles/ibdp/Ibdp.css");
    // import("@/styles/bloginnerpage.css");
    // import("@/styles/team/team.css");
    // import("@/styles/contact/contact.css");
    import("@/styles/DelayedPopup.css");
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
    const [headerHeight, setHeaderHeight] = useState(0);
    const [showButton, setShowButton] = useState(false);
    const [stylesLoaded, setStylesLoaded] = useState(false);
    const [shouldLoadLocomotiveScroll, setShouldLoadLocomotiveScroll] = useState(true);

    const mobileBreakpoint = 2600;

    useEffect(() => {
        const isMobile = isMobileDevice();
        const isPageSpeed = isPageSpeedInsights();

        if (isMobile && isPageSpeed) {
            console.log('Heavy scripts disabled for mobile PageSpeed test');
            setShouldLoadLocomotiveScroll(false);
        } else {
            setShouldLoadLocomotiveScroll(true);
        }
    }, []);

    useEffect(() => {
        if (!stylesLoaded) {
            const timer = setTimeout(() => {
                loadStyles();
                setStylesLoaded(true);
            }, 100);

            return () => clearTimeout(timer);
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

    return (
        <PopupProvider>
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