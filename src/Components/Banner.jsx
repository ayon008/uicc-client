'use client'
import Image from 'next/image';
import React from 'react';
import ButtonSecondary from './ButtonSecondary';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Banner = ({ bannerImage }) => {
    const MotionImage = motion(Image);
    return (
        <div className="banner-image h-[660px] w-full relative">
            <div className="relative w-full h-full overflow-hidden">
                <MotionImage
                    src={bannerImage}
                    alt="Banner Image"
                    layout="fill"
                    initial={{ transform: 'scale(1)' }}
                    animate={{ transform: 'scale(1.1)' }}  // Scale the image without affecting the layout
                    transition={{ duration: 10, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
                    priority
                    className="w-full h-full object-fill z-0"
                />
                <div className='absolute inset-0 z-10 bg-gradient-to-r from-white/90 via-white/80 to-white/80'>

                </div>
            </div>
            {/* <div className='absolute 2xl:w-auto xl:w-auto w-3/4 -translate-y-1/2 h-fit top-1/2 2xl:left-20 xl:left-16 left-1/2 2xl:-translate-x-0 xl:-translate-x-0 -translate-x-1/2 z-50'>
                <div className="2xl:space-y-16 xl:space-y-10 space-y-6">
                    <div className="w-fit 2xl:mx-0 xl:mx-0 mx-auto rounded-xl border-white p-3 welcome z-50">
                        <h5 className="2xl:text-xl xl:text-base text-sm font-semibold text-white uppercase">Welcome to UICC</h5>
                    </div>
                    <h1 className="2xl:text-6xl xl:text-5xl text-3xl font-semibold 2xl:text-left xl:text-left text-center banner-text color-changing-text">Transforming mind <br />
                        Shaping future</h1>
                    <div className="flex items-center 2xl:justify-normal xl:justify-normal justify-center gap-3">
                        <div className="bg-white w-[8px] 2xl:h-[50px] xl:h-[40px] h-[35px] rounded-xl">

                        </div>
                        <TypeAnimation
                            sequence={[
                                500, // Pause before starting
                                'We provide IELTS preparation courses', // Text to type
                                1000, // Pause for 1 second
                                'We offer visa processing services', // Next text
                                1000, // Pause for 1 second
                                'We help with student and worker visas', // Next text
                                1000, // Pause for 1 second
                                'Learn Korean, Japanese, and Chinese with us', // Next text
                                1000, // Pause for 1 second
                                'Master German with our expert instructors', // Next text
                                500, // Pause for 0.5 seconds before restarting
                            ]}
                            repeat={Infinity} // Repeat indefinitely
                            className="2xl:text-xl xl:text-base text-sm font-semibold banner-text text-white 2xl:text-left xl:text-left text-center"
                            speed={75} // Typing speed
                            deletionSpeed={90} // Deletion speed
                        />

                    </div>
                    <div className='2xl:mx-0 xl:mx-0 mx-auto w-fit'>
                        <Link href={'/signUp'}>
                            <ButtonSecondary text={'Register Now'} />
                        </Link>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Banner;