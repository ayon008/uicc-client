'use client'
import Image from 'next/image';
import React from 'react';
import ButtonSecondary from './ButtonSecondary';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

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
                    animate={{ transform: 'scale(1.2)' }}  // Scale the image without affecting the layout
                    transition={{ duration: 10, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
                    priority
                    className="w-full h-full object-cover object-center"
                />
            </div>
            <div className='absolute -translate-y-1/2 h-fit top-1/2 2xl:left-20 xl:left-16 z-50'>
                <div className="2xl:space-y-16 xl:space-y-10">
                    <div className="w-fit rounded-xl border-white p-3 welcome">
                        <h5 className="2xl:text-xl xl:text-base text-sm font-semibold text-white uppercase">Welcome to UICC</h5>
                    </div>
                    <h1 className="text-white 2xl:text-6xl xl:text-5xl text-3xl font-semibold">Transforming mind <br />
                        Shaping future</h1>
                    <div className="flex items-center gap-3">
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
                            className="2xl:text-xl xl:text-base text-sm font-semibold banner-text text-white"
                            speed={75} // Typing speed
                            deletionSpeed={90} // Deletion speed
                        />

                    </div>
                    <ButtonSecondary text={'Register Now'} />
                </div>
            </div>
        </div>
    );
};

export default Banner;