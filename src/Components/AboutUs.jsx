'use client'
import FaTelegram from '@/icons/FaTelegram';
import FaVisa from '@/icons/FaVisa';
import React from 'react';
import ButtonPrimary from './ButtonPrimary';
import Image from 'next/image';
import image from '../../public/assets/image (1).png'
import img1 from '../../public/assets/1.png'
import img2 from '../../public/assets/2.png'
import FaTicket from '@/icons/FaTicket';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
const AboutUs = () => {
    const { ref, inView } = useInView({
        triggerOnce: false, // Trigger animation only once
        threshold: 0.5, // Trigger when 50% of the element is visible
    });
    return (
        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 max-w-[1440px] mx-auto 2xl:p-24 xl:p-24 px-5 py-10">
            <div data-aos='fade-right' className="2xl:block xl:block hidden">
                <div className="w-fit h-fit relative" ref={ref}>
                    <Image className="" src={image} alt="" />
                    <motion.div
                        initial={{ clipPath: 'inset(0 100% 0 0)' }}
                        animate={inView ? { clipPath: 'inset(0 0% 0 0)' } : { clipPath: 'inset(0 100% 0 0)' }}
                        transition={{
                            duration: 1, // Animation duration in seconds
                            ease: "easeInOut",
                            delay: 0.1 // Easing function
                        }}
                        className='absolute top-10 -right-14'>
                        <Image className="" src={img1} alt="" />
                    </motion.div>
                    <motion.div
                        initial={{ clipPath: 'inset(0 100% 0 0)' }}
                        animate={inView ? { clipPath: 'inset(0 0% 0 0)' } : { clipPath: 'inset(0 100% 0 0)' }}
                        transition={{
                            duration: 1, // Animation duration in seconds
                            ease: "easeInOut",
                            delay: 0.1 // Easing function
                        }}
                        className='absolute -left-14 bottom-28'>
                        <Image className="" src={img2} alt="" />
                    </motion.div>
                </div>
            </div>
            <div data-aos="fade-left" className="flex flex-col justify-between 2xl:space-y-0 xl:space-y-0 space-y-6">
                <div className="flex items-center gap-2">
                    <FaTelegram />
                    <h2 className="2xl:text-2xl xl:text-xl font-semibold">About Us</h2>
                </div>
                <h1 className="2xl:text-5xl xl:text-5xl text-2xl font-semibold mt-2 2xl:leading-[81px] xl:leading-[81px]">
                    We help Making your <br /> <span className="dream relative">Dream into</span> Reality
                </h1>
                <p className="">
                    At Uttara International Career Council (UICC)**, we are dedicated to helping individuals unlock their global potential. Established with the vision of empowering students and professionals to pursue their dreams on an international scale, UICC offers a comprehensive range of services designed to guide you toward academic, linguistic, and career success abroad.
                </p>
                <div className="flex justify-between 2xl:gap-0 xl:gap-0 gap-6 items-center">
                    <div className="flex items-center gap-4">
                        <div className="bg-orange w-fit p-3 rounded-full">
                            <FaTicket />
                        </div>
                        <h3 className="2xl:text-xl xl:text-lg font-semibold">Visa Eligibilities</h3>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="bg-orange w-fit p-3 rounded-full">
                            <FaTicket />
                        </div>
                        <h3 className="2xl:text-xl xl:text-lg font-semibold">Career Counseling</h3>
                    </div>
                </div>
                <div>
                    <Link href={'/signUp'}>
                        <ButtonPrimary text={'Register Now'} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;