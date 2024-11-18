'use client'
import React from 'react';
import image2 from '../../public/assets/jodyhongfilms-sI1mbxJFFpU-unsplash.jpg'
import FaTelegram from '@/icons/FaTelegram';
import FaVisa from '@/icons/FaVisa';
import Image from 'next/image';
import FaTicket from '@/icons/FaTicket';
import Aos from 'aos';
const ChooseUs = () => {
    return (
        <div className="px-10 max-w-7xl mx-auto flex justify-between gap-6 2xl:mb-40 xl:mb-28">
            <div className="flex-1 flex flex-col justify-between">
                <div className="mt-16">
                    <div className="flex items-center gap-2">
                        <FaTelegram />
                        <h2 className="2xl:text-2xl xl:text-xl font-semibold">Why Choose UICC</h2>
                    </div>
                    <h1 className="2xl:text-5xl xl:text-5xl text-2xl font-semibold mt-2 w-full">
                        Reason to Choose Us
                    </h1>
                </div>
                <div className="space-y-10">
                    <div className="flex items-center gap-4">
                        <div className="p-2 w-fit bg-orange-light rounded-full">
                            <div className="p-2 bg-orange rounded-full">
                                <FaTicket />
                            </div>
                        </div>
                        <div>
                            <h2 className="2xl:text-3xl xl:text-2xl font-semibold">Expert Faculty</h2>
                            <p className="2xl:text-xl xl:text-lg font-normal mt-3">Our team consists of seasoned professionals with years of experience in international education, language training, and career guidance.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="p-2 w-fit bg-orange-light rounded-full">
                            <div className="p-2 bg-orange rounded-full">
                                <FaTicket />
                            </div>
                        </div>
                        <div>
                            <h2 className="2xl:text-3xl xl:text-2xl font-semibold">Student-Centered Approach</h2>
                            <p className="2xl:text-xl xl:text-lg font-normal mt-3">We pride ourselves on offering tailored solutions that cater to the individual goals and aspirations of our students.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="p-2 w-fit bg-orange-light rounded-full">
                            <div className="p-2 bg-orange rounded-full">
                                <FaTicket />
                            </div>
                        </div>
                        <div>
                            <h2 className="2xl:text-3xl xl:text-2xl font-semibold">Global Network</h2>
                            <p className="2xl:text-xl xl:text-lg font-normal mt-3">UICC has established connections with universities, companies, and professionals across the world, giving our students access to valuable resources and opportunities.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Image className="w-1/2 max-h-[700px] object-fill" src={image2} alt="" />
        </div>
    );
};

export default ChooseUs;