import FaTelegram from '@/icons/FaTelegram';
import FaVisa from '@/icons/FaVisa';
import React from 'react';
import ButtonPrimary from './ButtonPrimary';
import Image from 'next/image';
import image from '../../public/assets/image (1).png'
import img1 from '../../public/assets/1.png'
import img2 from '../../public/assets/2.png'
import FaTicket from '@/icons/FaTicket';

const AboutUs = () => {
    return (
        <div className="grid grid-cols-2 max-w-[1440px] mx-auto p-24">
            <div data-aos="fade-right" className="">
                <div className="w-fit h-fit relative">
                    <Image className="" src={image} alt="" />
                    <Image className="absolute top-10 -right-14" src={img1} alt="" />
                    <Image className="absolute -left-14 bottom-28" src={img2} alt="" />
                </div>
            </div>
            <div data-aos="fade-left" className="flex flex-col justify-between">
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
                <div className="flex justify-between items-center">
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
                    <ButtonPrimary text={'Register Now'} />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;