import Image from 'next/image';
import React from 'react';
import image from '../../public/assets/image (2).png'

const NewsCard = () => {
    return (
        <div className='flex items-center rounded-lg shadow-xl'>
            <Image className='w-[300px] h-[400px]' src={image} alt='' />
            <div className='2xl:p-7 xl:p-5'>
                <div className='pl-10'>
                    <h3 className='2xl:text-xl xl:text-lg font-semibold date text-[#919191] relative'>1 Aug, 2024</h3>
                </div>
                <h1 className='2xl:text-[28px] xl:text-2xl font-semibold mt-6'>Lorrem Ipsum</h1>
                <p className='2xl:text-xl xl:text-base mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
                <button className={`p-6 h-fit py-4 rounded-[40px] text-white border-none btn uppercase 2xl:text-xl xl:text-base news mt-9`}>
                    <span className='mr-2'>Contact us</span>
                    <div className='bg-white p-2 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                            <path d="M17.1193 2.02701C17.1342 1.47492 16.6987 1.01528 16.1467 1.00035L7.14994 0.7572C6.59786 0.742279 6.13821 1.17773 6.12329 1.72982C6.10837 2.2819 6.54382 2.74155 7.09591 2.75647L15.093 2.97261L14.8769 10.9697C14.8619 11.5218 15.2974 11.9814 15.8495 11.9963C16.4016 12.0113 16.8612 11.5758 16.8761 11.0237L17.1193 2.02701ZM2.28833 16.4808L16.8074 2.72594L15.4319 1.27404L0.912841 15.0289L2.28833 16.4808Z" fill="url(#paint0_linear_346_2563)" />
                            <defs>
                                <linearGradient id="paint0_linear_346_2563" x1="8.86011" y1="8.87744" x2="9.54786" y2="9.60339" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0B286D" />
                                    <stop offset="1" stop-color="#0F172A" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default NewsCard;