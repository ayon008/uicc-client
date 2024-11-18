'use client'
import Image from 'next/image';
import React from 'react';
import image from '../../public/assets/image (2).png'
import { ButtonTerTiary } from '@/app/page';

const NewsCard = ({ aos }) => {
    return (
        <div data-aos={`${aos}`} className='flex items-center rounded-lg shadow-xl'>
            <Image className='w-[300px] h-[400px]' src={image} alt='' />
            <div className='2xl:p-7 xl:p-5'>
                <div className='pl-10'>
                    <h3 className='2xl:text-xl xl:text-lg font-semibold date text-[#919191] relative'>1 Aug, 2024</h3>
                </div>
                <h1 className='2xl:text-[28px] xl:text-2xl font-semibold mt-6'>Lorrem Ipsum</h1>
                <p className='2xl:text-xl xl:text-base mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
                <div className='mt-9'>
                    <ButtonTerTiary text={'Contact Us'} href={'/contact'} />
                </div>
            </div>
        </div>
    );
};

export default NewsCard;