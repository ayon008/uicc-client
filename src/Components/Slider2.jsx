'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../../public/assets/tarik-8Du4GS1nn7c-unsplash.jpg'
import { motion } from "framer-motion";
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function Slider2() {
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
                pagination={{ clickable: true }}
                autoplay={true}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                modules={[Pagination]}
                className="mySwiper mt-10">
                <SwiperSlide>
                    <div className='grid grid-cols-3 gap-4'>
                        <div className='relative'>
                            <Image className='w-full max-h-[500px]' src={slider1} alt='' />
                            {/* <div className='absolute bottom-0 w-1/2 left-0 bg-orange py-6 px-12'>
                            <p className='text-white 2xl:text-xl xl:text-lg'>
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam”
                            </p>
                            <h3 className='mt-6 font-semibold 2xl:text-3xl xl:text-2xl text-white'>Ronald Richards</h3>
                            <p className='mt-2 2xl:text-2xl xl:text-xl font-medium text-white'>Saint Vincent and the Grenadines</p>
                        </div> */}
                        </div>
                        <div className='relative'>
                            <Image className='w-full max-h-[500px]' src={slider1} alt='' />
                            {/* <div className='absolute bottom-0 w-1/2 left-0 bg-orange py-6 px-12'>
                            <p className='text-white 2xl:text-xl xl:text-lg'>
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam”
                            </p>
                            <h3 className='mt-6 font-semibold 2xl:text-3xl xl:text-2xl text-white'>Ronald Richards</h3>
                            <p className='mt-2 2xl:text-2xl xl:text-xl font-medium text-white'>Saint Vincent and the Grenadines</p>
                        </div> */}
                        </div>
                        <div className='relative'>
                            <Image className='w-full max-h-[500px]' src={slider1} alt='' />
                            {/* <div className='absolute bottom-0 w-1/2 left-0 bg-orange py-6 px-12'>
                            <p className='text-white 2xl:text-xl xl:text-lg'>
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam”
                            </p>
                            <h3 className='mt-6 font-semibold 2xl:text-3xl xl:text-2xl text-white'>Ronald Richards</h3>
                            <p className='mt-2 2xl:text-2xl xl:text-xl font-medium text-white'>Saint Vincent and the Grenadines</p>
                        </div> */}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    
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
        </div>
    );
}
