import ServiceBanner from '@/Components/ServiceBanner';
import React from 'react';
import image from '../../../public/assets/stephen-phillips-hostreviews-co-uk-3Mhgvrk4tjM-unsplash.jpg'
import Image from 'next/image';
import { AiOutlineMail } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FaPhoneAlt } from 'react-icons/fa';
import SectionTitle from '@/Components/SectionTitle';
import ContacatForm from '@/Components/ContacatForm';
import BottomSection from '@/Components/BottomSection';



const page = () => {
    return (
        <div className=''>
            <ServiceBanner text={'Contact Us'} />
            <div className='grid grid-cols-3 gap-6 2xl:px-11 xl:px-8 2xl:py-14 xl:py-10 max-w-[1440px] mx-auto 2xl:mb-36 xl:mb-28'>
                <div className="card card-compact rounded-lg shadow-xl relative">
                    <figure>
                        <Image src={image} alt='email' className='max-h-[227px] object-fill' />
                    </figure>
                    <div className='bg-white shadow-xl p-6 rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit h-fit max-h-[227px]'>
                        <AiOutlineMail size={48} color="black" />
                    </div>
                    <div className="card-body mt-14">
                        <h2 className="text-center 2xl:text-2xl xl:text-xl font-medium">Send Us Mail</h2>
                        <p className='2xl:text-xl xl:text-lg mt-6 text-center text-[#808080]'>info@uttara.com</p>
                        <p className='2xl:text-xl xl:text-lg text-center mt-2 text-[#808080]'>uttaraicc@gmail.com</p>
                    </div>
                </div>
                <div className="card card-compact rounded-lg shadow-xl relative">
                    <figure>
                        <Image src={image} alt='email' className='max-h-[227px] object-fill' />
                    </figure>
                    <div className='bg-white shadow-xl p-6 rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit h-fit max-h-[227px]'>
                        <HiOutlineLocationMarker size={48} color="black" />
                    </div>
                    <div className="card-body mt-14">
                        <h2 className="text-center 2xl:text-2xl xl:text-xl font-medium">Visit Our Office</h2>
                        <p className='2xl:text-base xl:text-sm mt-6 text-center text-[#808080]'>87, BNS Center, Sector-7, Uttara, Dhaka-1230
                        </p>
                    </div>
                </div>
                <div className="card card-compact rounded-lg shadow-xl relative">
                    <figure>
                        <Image src={image} alt='email' className='max-h-[227px] object-fill' />
                    </figure>
                    <div className='bg-white shadow-xl p-6 rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit h-fit max-h-[227px]'>
                        <FaPhoneAlt size={48} color="black" />
                    </div>
                    <div className="card-body mt-14">
                        <h2 className="text-center 2xl:text-2xl xl:text-xl font-medium">Call Us Anytime</h2>
                        <p className='2xl:text-xl xl:text-lg mt-6 text-center text-[#808080]'>+880-195837780</p>
                        <p className='2xl:text-xl xl:text-lg text-center mt-2 text-[#808080]'>+880-195837783</p>
                    </div>
                </div>
            </div>
            <div className='w-3/4 mx-auto'>
                <SectionTitle heading={'Committed to arrange your first business consultation totally free of cost'} subHeading={'Drop Us a Line'} width={true} />
            </div>
            <ContacatForm />
            <BottomSection />
        </div>
    );
};

export default page;