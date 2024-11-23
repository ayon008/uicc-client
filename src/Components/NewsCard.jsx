'use client'
import Image from 'next/image';
import React from 'react';
import image from '../../public/assets/image (2).png'
import { ButtonTerTiary } from '@/app/page';

const NewsCard = ({ aos }) => {
    return (
        <div data-aos={`${aos}`} className='flex items-center rounded-lg shadow-xl'>
            <Image className='2xl:w-[300px] 2xl:h-[400px] xl:w-[300px] xl:h-[300px] w-1/2 h-auto' src={image} alt='' />
            <div className='2xl:p-7 xl:p-5 p-2'>
                <div className='pl-10'>
                    <h3 className='2xl:text-xl xl:text-lg text-sm font-semibold date text-[#919191] relative'>1 Aug, 2024</h3>
                </div>
                <h1 className='2xl:text-[28px] xl:text-2xl text-sm font-semibold 2xl:mt-6 xl:mt-6 mt-1'>Lorrem Ipsum</h1>
                <p className='2xl:text-xl xl:text-base text-[10px] 2xl:mt-3 xl:mt-3 mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
                <div className='2xl:mt-9 xl:mt-9 mt-3'>
                    <ButtonTerTiary text={'Contact Us'} href={'/contact'} />
                </div>
            </div>
        </div>
    );
};

export default NewsCard;