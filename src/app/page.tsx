'use client';
import { CSSProperties, useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const BLACK_BG = '#101010';

function BackgroundImage(name: string) {
    return (
        <div
            className='absolute inset-0 flex justify-center items-center'
            style={{
                backgroundImage: `linear-gradient(rgba(211, 211, 211, 0.2), rgba(211, 211, 211, 0.2)), url(/${name}.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                maxWidth: '614px',
                width: '100%',
                height: '100vh',
                margin: '0 auto',
            }}
        ></div>
    );
}

function renderSection1(isMobile: boolean) {
    const mobileStyles: CSSProperties = {
        fontSize: '28px',
        fontWeight: 700,
        lineHeight: '36px',
        textAlign: 'center' as const,
    };

    const desktopStyles: CSSProperties = {
        fontSize: '72px',
        fontWeight: 800,
        lineHeight: '72px',
        textAlign: 'right' as const,
        width: '60%',
    };

    return (
        <section
            className='h-screen w-full flex flex-col items-center justify-around snap-start text-white relative'
            style={{
                backgroundColor: BLACK_BG,
            }}
        >
            {BackgroundImage('bg1')}
            <div className='text-center z-10 p-4 w-full'>
                <h1
                    className='mb-4'
                    style={isMobile ? mobileStyles : desktopStyles}
                >
                    Be seen where you are
                </h1>
                <h2
                    className='mb-4'
                    style={{
                        ...(isMobile ? mobileStyles : desktopStyles),
                        background: !isMobile
                            ? 'linear-gradient(94deg, #8446D7 -7.09%, #5C2AB4 46.07%, #191356 104.59%)'
                            : 'none',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginTop: isMobile ? '-1rem' : '-4rem',
                        marginLeft: isMobile ? '0' : '20%',
                        color: 'white',
                    }}
                >
                    where you are matters
                </h2>
                <p
                    className='text-lg mb-8'
                    style={{
                        color: '#FFF',
                        textAlign: 'center',
                        fontFamily: 'Inter',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: '24px',
                    }}
                >
                    The dating app that brings you real connections, right where
                    you are at.
                </p>
                <div
                    className='flex gap-4'
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '40px',
                        position: 'absolute',
                        bottom: '5rem',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '15rem',
                    }}
                >
                    <a href='#' className='text-white '>
                        App Store ↗
                    </a>
                    <a href='#' className='text-white '>
                        Play Store ↗
                    </a>
                </div>
            </div>
        </section>
    );
}

function renderSection2(isMobile: boolean) {
    return (
        <section
            className='h-screen w-full flex flex-col items-center justify-center snap-start relative'
            style={{
                backgroundColor: BLACK_BG,
            }}
        >
            {BackgroundImage('bg2')}
            <div className='text-center z-10 p-4 w-full flex flex-col md:flex-row items-center justify-around'>
                <div className='md:w-1/2 p-4'>
                    <h2
                        className='mb-4'
                        style={{
                            color: '#FFF',
                            fontFamily: 'Inter',
                            fontSize: isMobile ? '28px' : '48px',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            lineHeight: isMobile ? 'normal' : '40px',
                            letterSpacing: '-0.96px',
                        }}
                    >
                        Get Real, Be Seen
                    </h2>
                    <p
                        className='text-xl'
                        style={{
                            color: '#FFF',
                            fontFamily: 'Inter',
                            fontSize: isMobile ? '14px' : '16px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: 'normal',
                        }}
                    >
                        {`Scene connects you with others around you, sparking
                        genuine interactions in the moment. It's not just
                        online—it's about meeting in real life.`}
                    </p>
                </div>
            </div>
            <div
                className={`grid ${
                    isMobile ? 'grid-cols-1' : 'grid-cols-4'
                } gap-4 z-10 p-4`}
                style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
                    gap: '48px',
                }}
            >
                {[
                    {
                        title: 'Activate "Be Seen"',
                        description:
                            'Be visible only to others in the same place who are open to connecting.',
                    },
                    {
                        title: "See Who's Here",
                        description:
                            "Someone's interested? You'll know. You'll never miss the chance to connect.",
                    },
                    {
                        title: 'Get Notified',
                        description:
                            "Someone's interested? You'll know. You'll never miss the chance to connect.",
                    },
                    {
                        title: 'Break the Ice',
                        description:
                            'You have 10 messages to chat, feel the vibe, and then take things offline.',
                    },
                ].map((item, index) => (
                    <div
                        key={index}
                        className={`text-center ${
                            isMobile ? 'flex items-center' : ''
                        }`}
                        style={{
                            maxWidth: !isMobile ? '200px' : '100%',
                        }}
                    >
                        <Image
                            src={`/section2/icon${index + 1}.png`}
                            alt={item.title}
                            width={isMobile ? 34 : 57}
                            height={isMobile ? 34 : 57}
                            className={isMobile ? 'mr-4' : 'mt-4'}
                        />
                        <div>
                            <h3
                                className='mt-4 text-left'
                                style={{
                                    color: '#FFF',
                                    fontFamily: 'Inter',
                                    fontSize: '20px',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    lineHeight: 'normal',
                                }}
                            >
                                {item.title}
                            </h3>
                            <p
                                className='text-sm mt-4 text-left'
                                style={{
                                    color: '#FFF',
                                    fontFamily: 'Inter',
                                    fontSize: '14px',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    lineHeight: 'normal',
                                }}
                            >
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function renderSection3(isMobile: boolean) {
    return (
        <section
            className='h-screen w-full flex items-center justify-center snap-start relative'
            style={{
                backgroundColor: BLACK_BG,
            }}
        >
            {BackgroundImage('bg3')}
            <div className='text-center z-10 p-4'>
                <h2
                    style={{
                        color: '#FFF',
                        textAlign: 'center',
                        fontFamily: 'Inter',
                        fontSize: isMobile ? '28px' : '48px',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: isMobile ? '36px' : 'normal',
                        letterSpacing: '-0.96px',
                        marginBottom: '16px',
                    }}
                >
                    A different kind of dating app
                </h2>
                <p
                    style={{
                        color: '#FFF',
                        textAlign: 'center',
                        fontFamily: 'Inter',
                        fontSize: isMobile ? '14px' : '20px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: isMobile ? '20px' : '28px',
                        marginLeft: isMobile ? '0' : '15%',
                        marginRight: isMobile ? '0' : '15%',
                    }}
                >
                    Scene brings dating back to real life, it opens doors to
                    real moments, shared spaces, and the chance to say,
                </p>
                <p
                    style={{
                        color: '#FFF',
                        fontFamily: 'Inter',
                        fontSize: isMobile ? '14px' : '24px',
                        fontStyle: 'normal',
                        fontWeight: isMobile ? 400 : 700,
                        lineHeight: isMobile ? '20px' : '40px',
                    }}
                >
                    &quot;We met right here.&quot;
                </p>
            </div>
        </section>
    );
}

export default function Home() {
    const [isMobile, setIsMobile] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const section4Ref = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setShowNav(!entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        const currentSection4Ref = section4Ref.current;

        if (currentSection4Ref) {
            observer.observe(currentSection4Ref);
        }

        return () => {
            if (currentSection4Ref) {
                observer.unobserve(currentSection4Ref);
            }
        };
    }, [section4Ref]);

    return (
        <div className='min-h-screen flex flex-col justify-between'>
            {/* Top Navigation Bar */}
            {showNav && (
                <nav
                    className={`w-full py-4 z-10`}
                    style={{
                        backgroundColor: isMobile ? 'transparent ' : BLACK_BG,
                        position: isMobile ? 'static' : 'fixed',
                    }}
                >
                    <div className='container mx-auto flex justify-between items-center px-4'>
                        <div
                            className='text-white font-bold text-3xl'
                            style={{
                                left: isMobile ? '0' : '96px',
                            }}
                        >
                            scene
                        </div>
                    </div>
                </nav>
            )}

            {/* Main Content */}
            <div
                className='flex-grow overflow-y-scroll'
                style={{
                    scrollSnapType: 'y mandatory',
                    height: 'calc(100vh - 68px)',
                }}
            >
                <div
                    className='snap-y snap-mandatory h-full overflow-scroll'
                    style={{
                        scrollSnapType: 'y mandatory',
                    }}
                >
                    {renderSection1(isMobile)}
                    {renderSection2(isMobile)}
                    {renderSection3(isMobile)}
                    <section
                        ref={section4Ref}
                        className='h-screen w-full flex items-center justify-center snap-start relative'
                        style={{
                            backgroundColor: BLACK_BG,
                        }}
                    >
                        <div
                            className='absolute inset-0 z-0'
                            style={{
                                maxWidth: '614px',
                                width: '100%',
                                margin: '0 auto',
                                background:
                                    'var(--Main-Purple-Gradient, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(94deg, #8446D7 -7.09%, #5C2AB4 46.07%, #191356 104.59%))',
                            }}
                        />
                        <div className='relative z-10 text-center'>
                            <h2
                                style={{
                                    color: '#FFF',
                                    textAlign: 'center',
                                    fontFamily: 'Inter',
                                    fontSize: isMobile ? '28px' : '48px',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    lineHeight: isMobile ? '36px' : 'normal',
                                    letterSpacing: '-0.96px',
                                }}
                            >
                                Ready to be seen?
                            </h2>
                            <p
                                style={{
                                    color: '#FFF',
                                    textAlign: 'center',
                                    fontFamily: 'Inter',
                                    fontSize: isMobile ? '14px' : '20px',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    lineHeight: isMobile ? '20px' : '28px',
                                    marginTop: '16px',
                                }}
                            >
                                Download the app from your app store:
                            </p>
                            <div
                                className='flex gap-4 mt-8'
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '32px',
                                    justifyContent: 'center',
                                    width: '100%',
                                }}
                            >
                                <a href='#' className='text-white'>
                                    App Store ↗
                                </a>
                                <a href='#' className='text-white'>
                                    Play Store ↗
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Footer */}
            <footer
                className={`w-full py-6 ${
                    isMobile ? 'flex flex-col items-center' : 'mx-auto flex'
                }`}
                style={{
                    color: '#FFF',
                    textAlign: 'center',
                    backgroundColor: BLACK_BG,
                }}
            >
                <div
                    className='text-white font-bold text-3xl mb-4'
                    style={{
                        position: isMobile ? 'static' : 'absolute',
                        left: isMobile ? '0' : '96px',
                    }}
                >
                    scene.
                </div>
                <div
                    className='flex gap-4'
                    style={{
                        justifyContent: 'center',
                        width: '100%',
                        flexDirection: isMobile ? 'column' : 'row',
                    }}
                >
                    <a href='#' className='text-white'>
                        Privacy Policy
                    </a>
                    <a href='#' className='text-white'>
                        Terms of Service
                    </a>
                    <a href='#' className='text-white'>
                        Contact
                    </a>
                </div>
            </footer>
        </div>
    );
}
