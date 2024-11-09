import Image from 'next/image';
import React from 'react';
import bannerImage from '../../public/assets/b2b545a4b68bed225816755c8afd2c42.png'

const ServiceBanner = ({ text }) => {
    return (
        <div className='relative mt-[100px]'>
            <Image src={bannerImage} className='w-full max-h-[550px] object-fill' alt='' />
            <div className='absolute inset-0'>
                <div className='max-w-[1440px] mx-auto relative'>
                    <h1 className='2xl:text-5xl xl:text-4xl font-bold absolute left-11 top-20 text-white uppercase'>{text}</h1>
                </div>
            </div>
        </div>
    );
};

export default ServiceBanner;