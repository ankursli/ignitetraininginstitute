import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Image from '@/components/CustomImageWrapper';
export default function CallToAction() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsMobile(width < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const styles = {
        container: {
            maxWidth: isMobile ? "95vw" : "90vw",
            borderRadius: "40px",
            margin: "0 auto",
            position: 'relative',
            overflow: 'hidden',
            marginTop: isMobile ? "30%" : 0
        },
        background: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            background: "linear-gradient(247.93deg, #00A491 -6.5%, #003E37 101.45%)",

        },
        content: {
            position: 'relative',
            zIndex: 10,
            width: '100%',
            height: '100%'
        },
        desktopLayout: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '5rem'
        },
        textSection: {
            flex: 1,
            maxWidth: '48rem',
            paddingRight: '2rem'
        },
        heading: {
            fontSize: '2rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '1.5rem',
            lineHeight: '1.1',
            letterSpacing: '0.02em',
            textTransform: 'uppercase'
        },
        paragraph: {
            fontSize: '1.25rem',
            color: '#d1d5db',
            marginBottom: '2rem',
            lineHeight: '1.6',

        },
        button: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'transparent',
            border: '2px solid white',
            color: 'white',
            padding: '0.9rem 10px 0.9rem 1rem',
            borderRadius: '9999px',
            fontSize: '1.125rem',
            fontWeight: '500',
            cursor: 'pointer',
            minWidth: '20rem',
            transition: 'all 0.3s ease',
            outline: 'none'
        },
        buttonIcon: {
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '50%',
            padding: '0.5rem',
            marginLeft: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease'
        },
        imageSection: {
            flex: 1,
            display: 'flex',
            justifyContent: 'flex-end'
        },
        image: {
            borderRadius: '1.5rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            maxWidth: '100%',
            height: 'auto'
        },
        mobileWrapper: {
            position: 'relative'
        },
        mobileImageContainer: {
            position: 'absolute',
            top: '-12vh',
            left: '45%',
            transform: 'translateX(-50%)',
            width: '60%',
            zIndex: 5,
        },
        mobileImage: {
            borderRadius: '1.5rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            width: '100%',
            objectFit: "cover",
            width: "300px",
            height: "auto"
        },
        mobileLayout: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            position: 'relative',
            padding: '1.5rem',
            justifyContent: 'flex-end',
            paddingTop: '15vh'
        },
        mobileTextSection: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            zIndex: 3,
            position: 'relative',
            textAlign: 'center',
        },
        mobileHeading: {
            fontSize: '2rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '1.5rem',
            lineHeight: '1.2',
            textAlign: 'center',
            textTransform: 'uppercase'
        },
        mobileParagraph: {
            fontSize: '1rem',
            color: '#d1d5db',
            marginBottom: '2rem',
            lineHeight: '1.6',
            textAlign: 'center',

        },
        mobileButtonContainer: {
            display: 'flex',
            justifyContent: 'center'
        },
        mobileButton: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'transparent',
            border: '2px solid white',
            color: 'white',
            padding: '1rem 1.5rem',
            borderRadius: '9999px',
            fontSize: '1rem',
            fontWeight: '500',
            cursor: 'pointer',
            width: '100%',
            maxWidth: '20rem',
            transition: 'all 0.3s ease',
            outline: 'none'
        },
        mobileButtonIcon: {
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '50%',
            padding: '0.5rem',
            marginLeft: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'all 0.3s ease'
        }
    };

    const [isHovered, setIsHovered] = React.useState(false);
    const [isMobileHovered, setIsMobileHovered] = React.useState(false);

    const buttonHoverStyle = isHovered ? {
        backgroundColor: 'white',
        color: '#1e3a8a'
    } : {};

    const buttonIconHoverStyle = isHovered ? {
        backgroundColor: '#1e3a8a',
        color: 'white'
    } : {};

    const mobileButtonHoverStyle = isMobileHovered ? {
        backgroundColor: 'white',
        color: '#1e3a8a'
    } : {};

    const mobileButtonIconHoverStyle = isMobileHovered ? {
        backgroundColor: '#1e3a8a',
        color: 'white'
    } : {};

    return (
        <div style={styles.mobileWrapper}>
            <div style={styles.container} className='fade-in-section'
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true">
                <div style={styles.background} />

                <div style={styles.content}>
                    {/* Desktop Layout */}
                    <div style={styles.desktopLayout} className="desktop-only">
                        <div style={styles.textSection}>
                            <h2 style={styles.heading}>
                                Experience Ignite Firsthand, See What Sets Us Apart
                            </h2>

                            <p style={styles.paragraph}>
                                Get a glimpse of our teaching style & expert mentors. Discover how Ignite can make a real difference in your journey.
                            </p>
                            <a href="/join-free-demo-class/" style={{ textDecoration: 'none' }} rel="noreferrer">
                                <button
                                    style={{ ...styles.button }}
                                >
                                    <span>GET A FREE DEMO</span>
                                    <div style={{ ...styles.buttonIcon }}>
                                        <ArrowRight size={20} />
                                    </div>
                                </button>
                            </a>
                        </div>

                        <div style={styles.imageSection}>
                            <Image
                                src="/assets/callto.webp"
                                alt="Tutoring team working together"
                                style={styles.image}
                                height={370}
                                width={550}
                            />
                        </div>
                    </div>

                    {/* Mobile Layout */}
                    <div style={styles.mobileLayout} className="mobile-only">
                        <div style={styles.mobileTextSection}>
                            <h2 style={styles.mobileHeading}>
                                Experience Ignite Firsthand, See What Sets Us Apart
                            </h2>

                            <p style={styles.mobileParagraph}>
                                Get a glimpse of our teaching style & expert mentors. Discover how Ignite can make a real difference in your journey.
                            </p>

                            <div style={styles.mobileButtonContainer}>
                                <a href="/join-free-demo-class/" style={{ textDecoration: 'none' }} rel="noreferrer">

                                    <button
                                        style={{ ...styles.mobileButton }}
                                    >
                                        <span>GET A FREE DEMO</span>
                                        <div style={{ ...styles.mobileButtonIcon }}>
                                            <ArrowRight size={18} />
                                        </div>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Image - Outside container to overlay */}
            <div style={styles.mobileImageContainer} className="mobile-only mobile-fixed-image">
                <Image
                    src="/assets/callto.webp"
                    alt="Tutoring team working together"
                    style={styles.mobileImage}
                    height={370}
                    width={550}
                />
            </div>

            <style jsx>{`
        @media (min-width: 768px) {
          .mobile-only {
            display: none !important;
          }
            
        }
        
        @media (max-width: 767px) {
          .desktop-only {
            display: none !important;
          }
        .mobile-fixed-image {
                transform: translateX(-50%) !important;
            }
        }

        @media (max-width: 1024px) {
          .desktop-only h1 {
            font-size: 3rem !important;
          }
          .desktop-only {
            padding: 0 2rem !important;
          }
        }

        @media (max-width: 640px) {
          .mobile-only h1 {
            font-size: 1.875rem !important;
          }
        }
      `}</style>
        </div>
    );
}