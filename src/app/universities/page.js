import SectionTitle from '@/Components/SectionTitle';
import ServiceBanner from '@/Components/ServiceBanner';
import Image from 'next/image';
import React from 'react';
import image1 from '../../../public/assets/Image-80 (2).png'
import { FaCheck } from 'react-icons/fa';
import { ButtonTerTiary } from '../page';


const Card = () => {
    return (
        <div className='rounded-xl box-shadow p-6'>
            <div className='flex items-center gap-2'>
                <Image src={image1} alt='' />
                <div>
                    <p className='text-orange text-xs font-medium'>Admission Service</p>
                    <h4 className='text-base font-medium'>University</h4>
                </div>
            </div>
            <div className='mt-6 uni'>
                <ul className='space-y-1'>
                    <li className='flex items-center gap-2'>
                        <FaCheck className='text-orange' />
                        <span>Lorem Ipsum Generator</span>
                    </li>
                    <li className='flex items-center gap-2'>
                        <FaCheck className='text-orange' />
                        <span>Lorem Ipsum Generator</span>
                    </li>
                    <li className='flex items-center gap-2'>
                        <FaCheck className='text-orange' />
                        <span>Lorem Ipsum Generator</span>
                    </li>
                    <li className='flex items-center gap-2'>
                        <FaCheck className='text-orange' />
                        <span>Lorem Ipsum Generator</span>
                    </li>
                </ul>
                <div className='mt-6'>
                    <ButtonTerTiary text={'Read More'} />
                </div>
            </div>
        </div>
    )
}


const page = () => {
    return (
        <div className=''>
            <ServiceBanner text={'Universities'} />
            <div className='2xl:my-28 xl:my-20'>
                <SectionTitle subHeading={'Associate Universities'} heading={'The Universities We Serve'} />
            </div>
            <div className='px-10 max-w-[1440px] mx-auto grid grid-cols-4 gap-6'>
                {
                    Array.from({ length: 5 })?.map((_, i) => {
                        return (
                            <Card key={i} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default page;