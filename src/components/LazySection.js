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

        // Comprehensive regex for Search Engines, AI Bots, Performance Tools, and Social Previews
        const botPattern = /googlebot|bingbot|applebot|slurp|baiduspider|duckduckbot|google-inspectiontool|chrome-lighthouse|lighthouse|gtmetrix|pagespeed|headlesschrome|gptbot|oai-searchbot|claudebot|perplexitybot|amazonbot|bytespider|ccbot|facebookexternalhit|twitterbot|linkedinbot|slackbot|discordbot|whatsapp/;

        return botPattern.test(userAgent);
    };

    // Unified effect for visibility and scroll updates
    useEffect(() => {
        // Eager load logic
        if (typeof window !== 'undefined' && (window.innerWidth > 768 || isBotDetected())) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold, rootMargin }
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

    // Separate effect to handle ResizeObserver when content becomes visible
    useEffect(() => {
        if (!isVisible || !ref.current || !scroll) return;

        const resizeObserver = new ResizeObserver(() => {
            if (scroll && typeof scroll.update === 'function') {
                scroll.update();
            }
        });

        resizeObserver.observe(ref.current);

        return () => {
            resizeObserver.disconnect();
        };
    }, [isVisible, scroll]);

    return (
        <div ref={ref} style={{ minHeight: '100px' }}>
            {isVisible ? children : null}
        </div>
    );
};

export default LazySection;
