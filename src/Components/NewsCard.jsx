'use client'
import Image from 'next/image';
import React from 'react';
import image from '../../public/assets/image (2).png'
import { ButtonTerTiary } from '@/app/page';

const NewsCard = ({ aos, text, heading }) => {
    return (
        <div data-aos={`${aos}`} className='flex items-center 2xl:p-7 xl:p-5 p-2 gap-4 rounded-lg shadow-xl'>
            <Image className='2xl:w-[300px] 2xl:h-[400px] xl:w-[300px] xl:h-[300px] h-auto' src={image} alt='' />
            <div className='flex flex-col h-full'>
                <div className='pl-10'>
                    <h3 className='2xl:text-xl xl:text-lg text-sm font-semibold date text-[#919191] relative'>1 Aug, 2024</h3>
                </div>
                <h1 className='2xl:text-[28px] xl:text-2xl text-sm font-semibold 2xl:mt-6 xl:mt-6 mt-1'>{heading}</h1>
                <p className='2xl:text-[12px] xl:text-[10px] text-[6px] 2xl:mt-3 xl:mt-3 mt-1'>{text}</p>
                <div className='mt-auto'>
                    <ButtonTerTiary href={'/contact'} />
                </div>
            </div>
        </div>
    );
};

export default NewsCard;