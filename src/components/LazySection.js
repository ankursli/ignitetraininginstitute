import React, { useState, useEffect, useRef } from 'react';
import { useScroll } from './LocomotiveScrollProvider'; // Adjust path if needed

const LazySection = ({ children, threshold = 0.1, rootMargin = "200px" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    const scroll = useScroll(); // Get Locomotive Scroll instance

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();

                    // Directly update Locomotive Scroll instance
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
