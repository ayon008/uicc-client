'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../../public/assets/1135dacc92653527eec563091064a4a9.png'
import slider2 from '../../public/assets/becca-tapert-GnY_mW1Q6Xc-unsplash.jpg'
import { motion } from "framer-motion";
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function Slider() {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const goToSlide = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
            setActiveIndex(index);
        }
    };

    return (
        <div className='sliders'>
            <Swiper
                ref={swiperRef}
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }}
                pagination={{ clickable: true }}
                autoplay={false}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                modules={[Navigation, Pagination]}
                className="mySwiper mt-10">
                <SwiperSlide>
                    <div className='relative'>
                        <Image className='w-full max-h-[600px] xl:h-[550px] 2xl:h-[600px] h-[300px] object-fill' src={slider1} alt='' />
                        <div className='absolute bottom-0 w-1/2 left-0 bg-orange 2xl:py-6 xl:py-6 py-4 2xl:px-12 xl:px-12 px-6'>
                            <p className='text-white 2xl:text-xl xl:text-lg text-[8px]'>
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam”
                            </p>
                            <h3 className='2xl:mt-6 xl:mt-6 mt-2 font-semibold 2xl:text-3xl xl:text-2xl text-base text-white'>Ronald Richards</h3>
                            <p className='2xl:mt-2 xl:mt-2 mt-[3px] 2xl:text-2xl xl:text-xl text-[10px] font-medium text-white'>Saint Vincent and the Grenadines</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <Image className='w-full max-h-[600px] xl:h-[550px] 2xl:h-[600px] h-[300px] object-fill' src={slider2} alt='' />
                </SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <div className="custom-next swiper-button-next">
                    <div className='bg-white px-3 rounded-full cursor-pointer'>
                        <svg className='' xmlns="http://www.w3.org/2000/svg" width="24" height="49" viewBox="0 0 24 49" fill="none">
                            <path d="M4.90397 13.5819L7.02597 11.4619L18.584 23.0159C18.7703 23.201 18.9181 23.4211 19.019 23.6636C19.1199 23.9061 19.1719 24.1662 19.1719 24.4289C19.1719 24.6915 19.1199 24.9516 19.019 25.1941C18.9181 25.4366 18.7703 25.6567 18.584 25.8419L7.02597 37.4019L4.90597 35.2819L15.754 24.4319L4.90397 13.5819Z" fill="black" />
                        </svg>
                    </div>
                </div>
                <div className="custom-prev swiper-button-prev">
                    <div className='bg-white px-3 rounded-full cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="49" viewBox="0 0 24 49" fill="none">
                            <path d="M19.096 35.2619L16.974 37.3819L5.41603 25.8279C5.22972 25.6428 5.08186 25.4226 4.98096 25.1801C4.88007 24.9376 4.82812 24.6775 4.82812 24.4149C4.82812 24.1522 4.88007 23.8922 4.98096 23.6497C5.08186 23.4072 5.22972 23.187 5.41603 23.0019L16.974 11.4419L19.094 13.5619L8.24603 24.4119L19.096 35.2619Z" fill="black" />
                        </svg>
                    </div>
                </div>
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
        </div>
    );
}
