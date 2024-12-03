'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../../public/assets/tarik-8Du4GS1nn7c-unsplash.jpg'
import slider2 from '../../public/assets/tomas-nozina-UP22zkjJGZo-unsplash.jpg'
import { motion } from "framer-motion";
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
// import FaPlane from '@/icons/FaPlane';
import img1 from '../../public/assets/Student Visa.png'
import { FaArrowRight, FaPassport } from 'react-icons/fa';
import img2 from '../../public/assets/Worker VISA.png'
import { montserrat } from './MonoFont';
import { FaPlane } from "react-icons/fa";

// import img3 from '../../public/assets/'




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


    const Card = ({ img, headline, text }) => {
        return (
            <div className="card card-compact rounded-none border rounded-b-2xl hover:shadow-xl border-slate-200 transition-shadow duration-300 ease-linear">
                <figure>
                    <Image className='w-full h-[250px] object-cover' src={img} alt='' />
                </figure>
                <div className="p-6">
                    <h2 className="card-title text-2xl font-normal hover:text-red-700 duration-300 transition-colors ease-linear mb-4 delay-0">
                        {headline}
                    </h2>
                    <div className='h-[40px] bg-red-600 relative'>
                        <div className='h-full flex flex-col absolute right-0'>
                            <FaPlane size={'1.5rem'} className='my-auto' />
                        </div>
                    </div>
                    <p className={`${montserrat.className} text-base text-gray mb-4 font-medium`}>{text}</p>
                    <div className="pb-6 view">
                        <button className='flex items-center gap-3 font-bold text-base view transition-all duration-200 ease-in mouse-pointer view'>
                            <span className={`${montserrat.className} view text-black transition-all duration-200 ease-in`}>View More</span>
                            <motion.div
                                className="relative bg-white w-[30px] h-[30px] rounded-full shadow-none flex items-center justify-center view"
                                whileHover={{
                                    scale: 1.3,
                                    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
                                    padding: "1rem",
                                    transition: { duration: 0.3, ease: "linear" },
                                }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, boxShadow: "none" }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: 0 }}
                                >
                                    <FaArrowRight className="text-black view" />
                                </motion.div>
                            </motion.div>
                        </button>
                    </div>
                </div>
            </div>
        )
    }


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
                    <div className='grid grid-cols-3 gap-8'>
                        <Card img={img1} headline={'Student Visa Progress'} text={'Our agency streamlines the student visa process, handling documentation, applications, and interview prep while keeping you updated. Focus on your education—we’ll manage the rest!'} />
                        <Card img={img2} headline={'Student Visa Progress'} text={'Our agency streamlines the student visa process, handling documentation, applications, and interview prep while keeping you updated. Focus on your education—we’ll manage the rest!'} />
                        <Card img={img1} headline={'Student Visa Progress'} text={'Our agency streamlines the student visa process, handling documentation, applications, and interview prep while keeping you updated. Focus on your education—we’ll manage the rest!'} />
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <div className='grid grid-cols-3 gap-4'>
                        <div className='relative'>
                            <Image className='w-full 2xl:h-[500px] xl:h-[500px] h-[200px] object-cover object-center' src={slider2} alt='' />
                            <div className='absolute bottom-0 left-0 2xl:p-6 xl:p-6 p-2'>
                                <div className='2xl:block xl:block hidden'>
                                    <FaPlane width={53} height={51} />
                                </div>
                                <div className='2xl:hidden xl:hidden block'>
                                    <FaPlane width={25} height={20} />
                                </div>
                                <div className='2xl:border-l-4 xl:border-l-4 border-l-2 border-l-white-1 2xl:pl-4 xl:pl-4 pl-2'>
                                    <h2 className='2xl:text-3xl xl:text-2xl font-semibold text-white text-xs mt-3'>Tourist Visa</h2>
                                </div>
                            </div>
                        </div>
                        <div className='relative'>
                            <Image className='w-full 2xl:h-[500px] xl:h-[500px] h-[200px] object-cover object-center' src={slider2} alt='' />
                            <div className='absolute bottom-0 left-0 2xl:p-6 xl:p-6 p-2'>
                                <div className='2xl:block xl:block hidden'>
                                    <FaPlane width={53} height={51} />
                                </div>
                                <div className='2xl:hidden xl:hidden block'>
                                    <FaPlane width={25} height={20} />
                                </div>
                                <div className='2xl:border-l-4 xl:border-l-4 border-l-2 border-l-white-1 2xl:pl-4 xl:pl-4 pl-2'>
                                    <h2 className='2xl:text-3xl xl:text-2xl font-semibold text-white text-xs mt-3'>Family Visa</h2>
                                </div>
                            </div>
                        </div>
                        <div className='relative'>
                            <Image className='w-full 2xl:h-[500px] xl:h-[500px] h-[200px] object-cover object-center' src={slider2} alt='' />
                            <div className='absolute bottom-0 left-0 2xl:p-6 xl:p-6 p-2'>
                                <div className='2xl:block xl:block hidden'>
                                    <FaPlane width={53} height={51} />
                                </div>
                                <div className='2xl:hidden xl:hidden block'>
                                    <FaPlane width={25} height={20} />
                                </div>
                                <div className='2xl:border-l-4 xl:border-l-4 border-l-2 border-l-white-1 2xl:pl-4 xl:pl-4 pl-2'>
                                    <h2 className='2xl:text-3xl xl:text-2xl font-semibold text-white text-xs mt-3'>Student Visa</h2>
                                </div>
                            </div>
                        </div>

                    </div>
                </SwiperSlide> */}
            </Swiper>
            <div className="custom-pagination-1 flex gap-4 justify-center mt-4">
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
                {/* <button className='' onClick={() => goToSlide(2)}>
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
                </button> */}
            </div>
        </div>
    );
}
