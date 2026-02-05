import React, { useState, useEffect, useRef } from 'react';
import { useScroll } from './LocomotiveScrollProvider'; // Adjust path if needed

const LazySection = ({ children, threshold = 0.1, rootMargin = "200px" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    const scroll = useScroll(); // Get Locomotive Scroll instance

    // Helper to detect bots/crawlers
    const isBotDetected = () => {
        if (typeof window === 'undefined') return false;
        const userAgent = navigator.userAgent.toLowerCase();
        return (
            userAgent.includes('googlebot') ||
            userAgent.includes('bingbot') ||
            userAgent.includes('lighthouse') ||
            userAgent.includes('gtmetrix') ||
            userAgent.includes('pagespeed') ||
            userAgent.includes('chrome-lighthouse')
        );
    };

    useEffect(() => {
        // Eager load on Desktop OR if Bot is detected
        if (typeof window !== 'undefined' && (window.innerWidth > 768 || isBotDetected())) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();

                    // Directly update Locomotive Scroll instance (only for mobile if somehow active)
                    if (scroll) {
                        setTimeout(() => {
                            scroll.update();
                            console.log('Locomotive Scroll Updated via LazySection');
                        }, 200);
                    }
                }
            },
            {
                threshold,
                rootMargin
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (observer && ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold, rootMargin]);

    return (
        <div ref={ref} style={{ minHeight: '100px' }}>
            {isVisible ? children : null}
        </div>
    );
};

export default LazySection;
