'use client';
import { CSSProperties, useState, useEffect } from 'react';
import Image from 'next/image';

// Theme constants
const THEME = {
    colors: {
        background: '#101010',
        text: '#FFFFFF',
    },
    gradients: {
        purple: 'linear-gradient(94deg, #8446D7 -7.09%, #5C2AB4 46.07%, #191356 104.59%)',
        overlay:
            'linear-gradient(rgba(211, 211, 211, 0.2), rgba(211, 211, 211, 0.2))',
    },
    typography: {
        fontFamily: 'Inter',
    },
};

// Shared styles
const styles = {
    section: {
        base: 'h-screen w-full snap-start relative',
        centered: 'flex items-center justify-center',
    },
    text: {
        heading: (isMobile: boolean): CSSProperties => ({
            color: THEME.colors.text,
            fontFamily: THEME.typography.fontFamily,
            fontSize: isMobile ? '28px' : '48px',
            fontWeight: 700,
            lineHeight: isMobile ? '36px' : 'normal',
            letterSpacing: '-0.96px',
        }),
        paragraph: (isMobile: boolean): CSSProperties => ({
            color: THEME.colors.text,
            fontFamily: THEME.typography.fontFamily,
            fontSize: isMobile ? '14px' : '16px',
            fontWeight: 400,
            lineHeight: isMobile ? '20px' : '28px',
        }),
        hero: (isMobile: boolean): CSSProperties => ({
            fontSize: isMobile ? '28px' : '72px',
            fontWeight: isMobile ? 700 : 800,
            lineHeight: isMobile ? '36px' : '72px',
            textAlign: isMobile ? 'center' : 'right',
            width: isMobile ? '100%' : '60%',
        }),
    },
    container: {
        maxWidth: '614px',
        width: '100%',
        margin: '0 auto',
    },
};

interface BackgroundImageProps {
    name: string;
}

const BackgroundImage = ({ name }: BackgroundImageProps) => (
    <div
        className='absolute inset-0 flex justify-center items-center'
        style={{
            ...styles.container,
            backgroundImage: `${THEME.gradients.overlay}, url(/${name}.png)`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '100vh',
        }}
    />
);

interface FeatureCardProps {
    title: string;
    description: string;
    iconIndex: number;
    isMobile: boolean;
}

const FeatureCard = ({
    title,
    description,
    iconIndex,
    isMobile,
}: FeatureCardProps) => (
    <div
        className={`text-center ${isMobile ? 'flex items-center' : ''}`}
        style={{ maxWidth: !isMobile ? '200px' : '100%' }}
    >
        <Image
            src={`/section2/icon${iconIndex}.png`}
            alt={title}
            width={isMobile ? 34 : 57}
            height={isMobile ? 34 : 57}
            className={isMobile ? 'mr-4' : 'mt-4'}
        />
        <div>
            <h3 className='mt-4 text-left text-white font-bold text-xl'>
                {title}
            </h3>
            <p className='text-sm mt-4 text-left text-white'>{description}</p>
        </div>
    </div>
);

function Section1({ isMobile }: { isMobile: boolean }) {
    return (
        <section
            className={`${styles.section.base} flex flex-col`}
            style={{ backgroundColor: THEME.colors.background }}
        >
            <BackgroundImage name='bg1' />
            <nav
                className={`w-full py-4 z-10 ${
                    !isMobile ? 'bg-[#101010]' : ''
                }`}
            >
                <div className='container mx-auto px-4 flex justify-between items-center'>
                    <div className='text-white font-bold text-3xl'>scene</div>
                </div>
            </nav>
            <div className='flex-grow flex flex-col items-center justify-around'>
                <div className='text-center z-10 p-4 w-full'>
                    <h1
                        className='mb-4 text-white'
                        style={styles.text.hero(isMobile)}
                    >
                        Be seen where you are
                    </h1>
                    <h2
                        className='mb-4'
                        style={{
                            ...styles.text.hero(isMobile),
                            background: !isMobile
                                ? THEME.gradients.purple
                                : 'none',
                            WebkitBackgroundClip: !isMobile ? 'text' : 'unset',
                            WebkitTextFillColor: !isMobile
                                ? 'transparent'
                                : THEME.colors.text,
                            marginTop: isMobile ? '-1rem' : '-4rem',
                            marginLeft: isMobile ? '0' : '20%',
                        }}
                    >
                        where you are matters
                    </h2>
                    <p className='text-white text-base mb-8 max-w-lg mx-auto'>
                        The dating app that brings you real connections, right
                        where you are at.
                    </p>
                </div>
            </div>
        </section>
    );
}

function Section2({ isMobile }: { isMobile: boolean }) {
    const features = [
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
    ];

    return (
        <section
            className={`${styles.section.base} flex flex-col items-center justify-center`}
            style={{ backgroundColor: THEME.colors.background }}
        >
            <BackgroundImage name='bg2' />
            <div className='text-center z-10 p-4 w-full'>
                <h2 className='mb-8' style={styles.text.heading(isMobile)}>
                    Get Real, Be Seen
                </h2>
                <div
                    className={`grid ${
                        isMobile ? 'grid-cols-1' : 'grid-cols-4'
                    } gap-12 max-w-6xl mx-auto`}
                >
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            iconIndex={index + 1}
                            isMobile={isMobile}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function Section3({ isMobile }: { isMobile: boolean }) {
    return (
        <section
            className={`${styles.section.base} ${styles.section.centered}`}
            style={{ backgroundColor: THEME.colors.background }}
        >
            <BackgroundImage name='bg3' />
            <div className='text-center z-10 p-4 max-w-4xl'>
                <h2 className='mb-4' style={styles.text.heading(isMobile)}>
                    A different kind of dating app
                </h2>
                <p
                    className='mb-6 mx-auto'
                    style={{
                        ...styles.text.paragraph(isMobile),
                        fontSize: isMobile ? '14px' : '20px',
                        maxWidth: isMobile ? '100%' : '70%',
                    }}
                >
                    Scene brings dating back to real life, it opens doors to
                    real moments, shared spaces, and the chance to say,
                </p>
                <p className='text-white font-bold text-xl md:text-2xl'>
                    &quot;We met right here.&quot;
                </p>
            </div>
        </section>
    );
}

function Section4({ isMobile }: { isMobile: boolean }) {
    return (
        <section
            className={`${styles.section.base} flex flex-col`}
            style={{ backgroundColor: THEME.colors.background }}
        >
            <div
                className='absolute inset-0 flex justify-center items-center'
                style={{
                    ...styles.container,
                    backgroundImage: THEME.gradients.purple,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '100vh',
                }}
            />
            <div className='flex-grow flex items-center justify-center'>
                <div className='text-center z-10 p-4'>
                    <h2 className='mb-4' style={styles.text.heading(isMobile)}>
                        Ready to be seen?
                    </h2>
                    <p className='mb-8' style={styles.text.paragraph(isMobile)}>
                        Download the app from your app store:
                    </p>
                    <div className='flex justify-center gap-8'>
                        <a href='#' className='text-white hover:opacity-80'>
                            App Store ↗
                        </a>
                        <a href='#' className='text-white hover:opacity-80'>
                            Play Store ↗
                        </a>
                    </div>
                </div>
            </div>
            <footer className='w-full py-6 z-10 bg-[#101010]'>
                <div className='container mx-auto px-4'>
                    <div
                        className={`flex ${
                            isMobile
                                ? 'flex-col items-center'
                                : 'justify-between items-center'
                        }`}
                    >
                        <div className='text-3xl font-bold mb-4 text-white'>
                            scene.
                        </div>
                        <div
                            className={`flex gap-8 ${
                                isMobile ? 'flex-col' : ''
                            }`}
                        >
                            <a href='#' className='text-white hover:opacity-80'>
                                Privacy Policy
                            </a>
                            <a href='#' className='text-white hover:opacity-80'>
                                Terms of Service
                            </a>
                            <a href='#' className='text-white hover:opacity-80'>
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
}

export default function Home() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <main className='h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth'>
            <Section1 isMobile={isMobile} />
            <Section2 isMobile={isMobile} />
            <Section3 isMobile={isMobile} />
            <Section4 isMobile={isMobile} />
        </main>
    );
}
