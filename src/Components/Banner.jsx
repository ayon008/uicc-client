'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ButtonSecondary from './ButtonSecondary';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Fade, Slide } from 'react-awesome-reveal';

const Banner = ({ bannerImage, flag, person, index }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        setIsLoaded(true);
    }, [index]);

    const MotionImage = motion(Image);
    return (
        <div className="banner-image h-[800px] w-full relative">
            <div className="relative w-full h-full overflow-hidden">
                <MotionImage
                    src={bannerImage}
                    alt="Banner Image"
                    layout="fill"
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.2 }}
                    transition={{
                        duration: 10,
                        ease: 'easeInOut', // Smoother easing
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }}
                    priority
                    className="w-full h-full object-fill z-0"
                />
                <div className='absolute inset-0 z-10 bg-gradient-to-r from-white/90 via-white/80 to-white/80'></div>
            </div>
            <div className='absolute flex items-center 2xl:w-auto xl:w-auto -translate-y-1/2 h-fit top-1/2 2xl:left-20 xl:left-16 left-1/2 2xl:-translate-x-0 xl:-translate-x-0 -translate-x-1/2 z-50'>
                <div className="2xl:space-y-16 xl:space-y-10 space-y-6">
                    <div className="w-fit 2xl:mx-0 xl:mx-0 mx-auto rounded-xl border-2 border-deep-blue p-3 welcome">
                        <h5 className="2xl:text-xl xl:text-base text-sm font-semibold text-deep-blue uppercase">Welcome to UICC</h5>
                    </div>
                    <div className='flex flex-col'>
                        <Fade damping={0.05} duration={600} delay={300} cascade>
                            <span className="2xl:text-6xl xl:text-5xl text-3xl font-semibold text-deep-blue">Transforming mind</span>
                            <span className="2xl:text-6xl xl:text-5xl text-3xl font-semibold text-orange">Shaping future</span>
                        </Fade>
                    </div>
                    <div className="flex items-center 2xl:justify-normal xl:justify-normal justify-center gap-3">
                        <div className="bg-orange w-[8px] 2xl:h-[50px] xl:h-[40px] h-[35px] rounded-xl"></div>
                        <TypeAnimation
                            sequence={[
                                500,
                                'We provide IELTS preparation courses',
                                1000,
                                'We offer visa processing services',
                                1000,
                                'We help with student and worker visas',
                                1000,
                                'Learn Korean, Japanese, and Chinese with us',
                                1000,
                                'Master German with our expert instructors',
                                500,
                            ]}
                            repeat={Infinity}
                            speed={50} // Adjusted for smoother typing
                            deletionSpeed={60}
                            className="2xl:text-xl xl:text-base text-sm font-semibold banner-text text-deep-blue 2xl:text-left xl:text-left text-center"
                        />
                    </div>
                    <motion.div
                        key={index}
                        initial={{ clipPath: 'inset(0 100% 0 0)' }}
                        animate={{ clipPath: 'inset(0 0% 0 0)' }}
                        transition={{
                            duration: 1,
                            ease: 'easeInOut',
                        }}
                        className='2xl:mx-0 xl:mx-0 mx-auto w-fit'>
                        <Link href={'/signUp'}>
                            <ButtonSecondary text={'Register Now'} />
                        </Link>
                    </motion.div>
                </div>
            </div>
            <div className='2xl:block xl:block hidden'>
                <MotionImage
                    key={index}
                    src={flag}
                    alt={''}
                    priority
                    initial={{ rotateX: -45, opacity: 0, right: 0, bottom: 10 }}
                    animate={{ rotateX: 0, opacity: 1, right: 0, bottom: 0 }}
                    transition={{
                        duration: 1,
                        ease: 'easeInOut',
                    }}
                    className="absolute z-20"
                />
            </div>
            <motion.div
                key={index}
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                animate={{ clipPath: 'inset(0 0% 0 0)' }}
                transition={{
                    duration: 1,
                    ease: 'easeInOut',
                }}
                className='absolute right-10 bottom-0 z-30 h-[90%] 2xl:block xl:block hidden'>
                <Image src={person} className='h-full w-auto' alt='' />
            </motion.div>
        </div>
    );
};

export default Banner;
