'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../../public/assets/tarik-8Du4GS1nn7c-unsplash.jpg'
import slider2 from '../../public/assets/tomas-nozina-UP22zkjJGZo-unsplash.jpg'
import { motion } from "framer-motion";
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
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

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex); // Reinitialize AOS to apply animations to the new slide
    };
    return (
        <div className='sliders'>
            <Swiper
                ref={swiperRef}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000, // Time in milliseconds before moving to the next slide
                    disableOnInteraction: false, // Keeps autoplay running after user interaction
                }}
                onSlideChange={handleSlideChange}
                modules={[Autoplay]}
                className="mySwiper mt-10">
                <SwiperSlide>
                    <div className='grid grid-cols-3 gap-4'>
                        <div className='relative'>
                            <Image className='w-full 2xl:h-[500px] xl:h-[500px] h-[250px] object-cover object-center' src={slider1} alt='' />
                            <div className='absolute bottom-0 left-0 2xl:p-6 xl:p-6 p-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="53" height="51" viewBox="0 0 73 71" fill="none">
                                    <g clip-path="url(#clip0_333_2239)">
                                        <path d="M72.3158 48.6112L71.4962 40.5962L41.7725 25.6308C41.7725 25.6308 42.0379 20.55 41.7725 13.06C41.4776 8.35385 39.5854 3.88931 36.4087 0.404541L36.4233 0.422041H35.8925C32.7336 3.88559 30.8472 8.32085 30.5433 12.9987L30.5404 13.06C30.275 20.547 30.5404 25.6308 30.5404 25.6308L0.819583 40.5962L0 48.6112L20.0929 42.562L30.275 40.8645C29.9068 47.8779 30.628 54.9059 32.4129 61.6983L32.3079 61.2258L24.3512 64.4195V69.6637L34.6179 67.3304C35.07 68.2404 35.4929 68.9812 35.9479 69.6987L35.8867 69.5966V70.4191C35.9781 70.283 36.0685 70.144 36.1579 70.002L36.4321 70.4191V69.5966C36.8258 68.9841 37.2487 68.2433 37.6337 67.4791L37.7008 67.3304L47.9675 69.6637V64.4195L40.0108 61.2258C41.3612 56.1712 42.1342 50.367 42.1342 44.385C42.1342 43.1463 42.1011 41.9155 42.035 40.6925L42.0437 40.8616L52.2287 42.5591L72.3187 48.6083L72.3158 48.6112Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_333_2239">
                                            <rect width="72.9167" height="70" fill="white" transform="translate(0 0.422119)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div className='border-l-4 border-l-white-1 pl-4'>
                                    <h2 className='2xl:text-3xl xl:text-2xl font-semibold text-white text-xs mt-3'>Tourist Visa</h2>
                                </div>
                            </div>
                        </div>
                        <div className='relative'>
                            <Image className='w-full 2xl:h-[500px] xl:h-[500px] h-[250px] object-cover object-center' src={slider1} alt='' />
                            <div className='absolute bottom-0 left-0 2xl:p-6 xl:p-6 p-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="53" height="51" viewBox="0 0 73 71" fill="none">
                                    <g clip-path="url(#clip0_333_2239)">
                                        <path d="M72.3158 48.6112L71.4962 40.5962L41.7725 25.6308C41.7725 25.6308 42.0379 20.55 41.7725 13.06C41.4776 8.35385 39.5854 3.88931 36.4087 0.404541L36.4233 0.422041H35.8925C32.7336 3.88559 30.8472 8.32085 30.5433 12.9987L30.5404 13.06C30.275 20.547 30.5404 25.6308 30.5404 25.6308L0.819583 40.5962L0 48.6112L20.0929 42.562L30.275 40.8645C29.9068 47.8779 30.628 54.9059 32.4129 61.6983L32.3079 61.2258L24.3512 64.4195V69.6637L34.6179 67.3304C35.07 68.2404 35.4929 68.9812 35.9479 69.6987L35.8867 69.5966V70.4191C35.9781 70.283 36.0685 70.144 36.1579 70.002L36.4321 70.4191V69.5966C36.8258 68.9841 37.2487 68.2433 37.6337 67.4791L37.7008 67.3304L47.9675 69.6637V64.4195L40.0108 61.2258C41.3612 56.1712 42.1342 50.367 42.1342 44.385C42.1342 43.1463 42.1011 41.9155 42.035 40.6925L42.0437 40.8616L52.2287 42.5591L72.3187 48.6083L72.3158 48.6112Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_333_2239">
                                            <rect width="72.9167" height="70" fill="white" transform="translate(0 0.422119)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div className='border-l-4 border-l-white-1 pl-4'>
                                    <h2 className='2xl:text-3xl xl:text-2xl font-semibold text-white text-xs mt-3'>Family Visa</h2>
                                </div>
                            </div>
                        </div>
                        <div className='relative'>
                            <Image className='w-full 2xl:h-[500px] xl:h-[500px] h-[250px] object-cover object-center' src={slider1} alt='' />
                            <div className='absolute bottom-0 left-0 2xl:p-6 xl:p-6 p-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="53" height="51" viewBox="0 0 73 71" fill="none">
                                    <g clip-path="url(#clip0_333_2239)">
                                        <path d="M72.3158 48.6112L71.4962 40.5962L41.7725 25.6308C41.7725 25.6308 42.0379 20.55 41.7725 13.06C41.4776 8.35385 39.5854 3.88931 36.4087 0.404541L36.4233 0.422041H35.8925C32.7336 3.88559 30.8472 8.32085 30.5433 12.9987L30.5404 13.06C30.275 20.547 30.5404 25.6308 30.5404 25.6308L0.819583 40.5962L0 48.6112L20.0929 42.562L30.275 40.8645C29.9068 47.8779 30.628 54.9059 32.4129 61.6983L32.3079 61.2258L24.3512 64.4195V69.6637L34.6179 67.3304C35.07 68.2404 35.4929 68.9812 35.9479 69.6987L35.8867 69.5966V70.4191C35.9781 70.283 36.0685 70.144 36.1579 70.002L36.4321 70.4191V69.5966C36.8258 68.9841 37.2487 68.2433 37.6337 67.4791L37.7008 67.3304L47.9675 69.6637V64.4195L40.0108 61.2258C41.3612 56.1712 42.1342 50.367 42.1342 44.385C42.1342 43.1463 42.1011 41.9155 42.035 40.6925L42.0437 40.8616L52.2287 42.5591L72.3187 48.6083L72.3158 48.6112Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_333_2239">
                                            <rect width="72.9167" height="70" fill="white" transform="translate(0 0.422119)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div className='border-l-4 border-l-white-1 pl-4'>
                                    <h2 className='2xl:text-3xl xl:text-2xl font-semibold text-white text-xs mt-3'>Student Visa</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='grid grid-cols-3 gap-4'>
                        <div className='relative'>
                            <Image className='w-full 2xl:h-[500px] xl:h-[500px] h-[250px] object-cover object-center' src={slider2} alt='' />
                            <div className='absolute bottom-0 left-0 2xl:p-6 xl:p-6 p-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="53" height="51" viewBox="0 0 73 71" fill="none">
                                    <g clip-path="url(#clip0_333_2239)">
                                        <path d="M72.3158 48.6112L71.4962 40.5962L41.7725 25.6308C41.7725 25.6308 42.0379 20.55 41.7725 13.06C41.4776 8.35385 39.5854 3.88931 36.4087 0.404541L36.4233 0.422041H35.8925C32.7336 3.88559 30.8472 8.32085 30.5433 12.9987L30.5404 13.06C30.275 20.547 30.5404 25.6308 30.5404 25.6308L0.819583 40.5962L0 48.6112L20.0929 42.562L30.275 40.8645C29.9068 47.8779 30.628 54.9059 32.4129 61.6983L32.3079 61.2258L24.3512 64.4195V69.6637L34.6179 67.3304C35.07 68.2404 35.4929 68.9812 35.9479 69.6987L35.8867 69.5966V70.4191C35.9781 70.283 36.0685 70.144 36.1579 70.002L36.4321 70.4191V69.5966C36.8258 68.9841 37.2487 68.2433 37.6337 67.4791L37.7008 67.3304L47.9675 69.6637V64.4195L40.0108 61.2258C41.3612 56.1712 42.1342 50.367 42.1342 44.385C42.1342 43.1463 42.1011 41.9155 42.035 40.6925L42.0437 40.8616L52.2287 42.5591L72.3187 48.6083L72.3158 48.6112Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_333_2239">
                                            <rect width="72.9167" height="70" fill="white" transform="translate(0 0.422119)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div className='border-l-4 border-l-white-1 pl-4'>
                                    <h2 className='2xl:text-3xl xl:text-2xl font-semibold text-white text-xs mt-3'>Tourist Visa</h2>
                                </div>
                            </div>
                        </div>
                        <div className='relative'>
                            <Image className='w-full 2xl:h-[500px] xl:h-[500px] h-[250px] object-cover object-center' src={slider2} alt='' />
                            <div className='absolute bottom-0 left-0 2xl:p-6 xl:p-6 p-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="53" height="51" viewBox="0 0 73 71" fill="none">
                                    <g clip-path="url(#clip0_333_2239)">
                                        <path d="M72.3158 48.6112L71.4962 40.5962L41.7725 25.6308C41.7725 25.6308 42.0379 20.55 41.7725 13.06C41.4776 8.35385 39.5854 3.88931 36.4087 0.404541L36.4233 0.422041H35.8925C32.7336 3.88559 30.8472 8.32085 30.5433 12.9987L30.5404 13.06C30.275 20.547 30.5404 25.6308 30.5404 25.6308L0.819583 40.5962L0 48.6112L20.0929 42.562L30.275 40.8645C29.9068 47.8779 30.628 54.9059 32.4129 61.6983L32.3079 61.2258L24.3512 64.4195V69.6637L34.6179 67.3304C35.07 68.2404 35.4929 68.9812 35.9479 69.6987L35.8867 69.5966V70.4191C35.9781 70.283 36.0685 70.144 36.1579 70.002L36.4321 70.4191V69.5966C36.8258 68.9841 37.2487 68.2433 37.6337 67.4791L37.7008 67.3304L47.9675 69.6637V64.4195L40.0108 61.2258C41.3612 56.1712 42.1342 50.367 42.1342 44.385C42.1342 43.1463 42.1011 41.9155 42.035 40.6925L42.0437 40.8616L52.2287 42.5591L72.3187 48.6083L72.3158 48.6112Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_333_2239">
                                            <rect width="72.9167" height="70" fill="white" transform="translate(0 0.422119)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div className='border-l-4 border-l-white-1 pl-4'>
                                    <h2 className='2xl:text-3xl xl:text-2xl font-semibold text-white text-xs mt-3'>Family Visa</h2>
                                </div>
                            </div>
                        </div>
                        <div className='relative'>
                            <Image className='w-full 2xl:h-[500px] xl:h-[500px] h-[250px] object-cover object-center' src={slider2} alt='' />
                            <div className='absolute bottom-0 left-0 2xl:p-6 xl:p-6 p-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="53" height="51" viewBox="0 0 73 71" fill="none">
                                    <g clip-path="url(#clip0_333_2239)">
                                        <path d="M72.3158 48.6112L71.4962 40.5962L41.7725 25.6308C41.7725 25.6308 42.0379 20.55 41.7725 13.06C41.4776 8.35385 39.5854 3.88931 36.4087 0.404541L36.4233 0.422041H35.8925C32.7336 3.88559 30.8472 8.32085 30.5433 12.9987L30.5404 13.06C30.275 20.547 30.5404 25.6308 30.5404 25.6308L0.819583 40.5962L0 48.6112L20.0929 42.562L30.275 40.8645C29.9068 47.8779 30.628 54.9059 32.4129 61.6983L32.3079 61.2258L24.3512 64.4195V69.6637L34.6179 67.3304C35.07 68.2404 35.4929 68.9812 35.9479 69.6987L35.8867 69.5966V70.4191C35.9781 70.283 36.0685 70.144 36.1579 70.002L36.4321 70.4191V69.5966C36.8258 68.9841 37.2487 68.2433 37.6337 67.4791L37.7008 67.3304L47.9675 69.6637V64.4195L40.0108 61.2258C41.3612 56.1712 42.1342 50.367 42.1342 44.385C42.1342 43.1463 42.1011 41.9155 42.035 40.6925L42.0437 40.8616L52.2287 42.5591L72.3187 48.6083L72.3158 48.6112Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_333_2239">
                                            <rect width="72.9167" height="70" fill="white" transform="translate(0 0.422119)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div className='border-l-4 border-l-white-1 pl-4'>
                                    <h2 className='2xl:text-3xl xl:text-2xl font-semibold text-white text-xs mt-3'>Student Visa</h2>
                                </div>
                            </div>
                        </div>

                    </div>
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
