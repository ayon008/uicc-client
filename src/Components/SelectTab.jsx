'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import Banner from './Banner';
import bannerImage from '@/../public/assets/vasily-koloda-8CqDvPuo_kI-unsplash.jpg'
import bannerImage1 from '../../public/assets/Student Visa.png'
import bannerImage2 from '../../public/assets/Family VISA.png'
import bannerImage3 from '../../public/assets/Worker VISA.png'
import Aos from 'aos';
import Link from 'next/link';

const SelectTab = () => {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const goToSlide = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
            setActiveIndex(index);
        }
    };

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex); // Reinitialize AOS to apply animations to the new slide
    };

    return (
        <div>
            <div className='mt-[100px] sliders'>
                <Swiper
                    ref={swiperRef}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 6000, // Time in milliseconds before moving to the next slide
                        disableOnInteraction: false, // Keeps autoplay running after user interaction
                    }}
                    onSlideChange={handleSlideChange}
                    modules={[Navigation, Autoplay]} // Include Autoplay in modules
                    className="mySwiper mt-10 overflow-hidden">
                    <SwiperSlide>
                        <Banner bannerImage={bannerImage} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Banner bannerImage={bannerImage1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Banner bannerImage={bannerImage2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Banner bannerImage={bannerImage3} />
                    </SwiperSlide>
                </Swiper>
                <div className="custom-pagination flex gap-4 justify-center mt-4">
                    <button className='' onClick={() => goToSlide(0)}>
                        <motion.div
                            initial={{ border: 'none', padding: 12 }}
                            animate={{ border: activeIndex === 0 ? '1px solid #ff8c3a' : '1px solid #D3D3D3' }}
                            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.01 }}
                            className='rounded-full'>
                            <motion.div
                                initial={{ backgroundColor: '#D3D3D3' }}
                                animate={{ backgroundColor: activeIndex === 0 ? '#ff8c3a' : '#D3D3D3' }}
                                transition={{ duration: 0.3, ease: "easeInOut", delay: 0.01 }}
                                className='w-[10px] h-[10px] rounded-full'>

                            </motion.div>
                        </motion.div>
                    </button>
                    <button className='' onClick={() => goToSlide(1)}>
                        <motion.div
                            initial={{ border: 'none', padding: 12 }}
                            animate={{ border: activeIndex === 1 ? '1px solid #ff8c3a' : '1px solid #D3D3D3' }}
                            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.01 }}
                            className='rounded-full'>
                            <motion.div
                                initial={{ backgroundColor: '#D3D3D3' }}
                                animate={{ backgroundColor: activeIndex === 1 ? '#ff8c3a' : '#D3D3D3' }}
                                transition={{ duration: 0.3, ease: "easeInOut", delay: 0.01 }}
                                className='w-[10px] h-[10px] rounded-full'>

                            </motion.div>
                        </motion.div>
                    </button>
                    <button className='' onClick={() => goToSlide(2)}>
                        <motion.div
                            initial={{ border: 'none', padding: 12 }}
                            animate={{ border: activeIndex === 2 ? '1px solid #ff8c3a' : '1px solid #D3D3D3' }}
                            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.01 }}
                            className='rounded-full'>
                            <motion.div
                                initial={{ backgroundColor: '#D3D3D3' }}
                                animate={{ backgroundColor: activeIndex === 2 ? '#ff8c3a' : '#D3D3D3' }}
                                transition={{ duration: 0.3, ease: "easeInOut", delay: 0.01 }}
                                className='w-[10px] h-[10px] rounded-full'>

                            </motion.div>
                        </motion.div>
                    </button>
                    <button className='' onClick={() => goToSlide(3)}>
                        <motion.div
                            initial={{ border: 'none', padding: 12 }}
                            animate={{ border: activeIndex === 3 ? '1px solid #ff8c3a' : '1px solid #D3D3D3' }}
                            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.01 }}
                            className='rounded-full'>
                            <motion.div
                                initial={{ backgroundColor: '#D3D3D3' }}
                                animate={{ backgroundColor: activeIndex === 3 ? '#ff8c3a' : '#D3D3D3' }}
                                transition={{ duration: 0.3, ease: "easeInOut", delay: 0.01 }}
                                className='w-[10px] h-[10px] rounded-full'>

                            </motion.div>
                        </motion.div>
                    </button>
                </div>
                <div className={'grid grid-cols-5'}>
                    <Link href={'/language-training'} className={`border-deep-blue text-deep-blue cursor-pointer 2xl:py-6 xl:py-4 text-center border-2 bg-white font-semibold 2xl:text-2xl xl:text-lg`} >
                        Language Training
                    </Link>
                    <Link href={'/career-counseling'} className={`border-deep-blue text-deep-blue cursor-pointer 2xl:py-6 xl:py-4 text-center border-2 bg-white font-semibold 2xl:text-2xl xl:text-lg`} >
                        Career Counseling
                    </Link>
                    <Link href={'/visa-processing'} className={`border-deep-blue text-deep-blue cursor-pointer 2xl:py-6 xl:py-4 text-center border-2 bg-white font-semibold 2xl:text-2xl xl:text-lg`} >
                        Visa Processing
                    </Link>
                    <Link href={'/air-ticket'} className={`border-deep-blue text-deep-blue cursor-pointer 2xl:py-6 xl:py-4 text-center border-2 bg-white font-semibold 2xl:text-2xl xl:text-lg`} >
                        Air Ticketing
                    </Link>
                    <Link href={'/'} className={`border-deep-blue text-deep-blue cursor-pointer 2xl:py-6 xl:py-4 text-center border-2 bg-white font-semibold 2xl:text-2xl xl:text-lg`}>
                        Training Center
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SelectTab;