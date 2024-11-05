import Image from 'next/image';
import React from 'react';
import ButtonSecondary from './ButtonSecondary';
import bannerImage from '../../public/assets/vasily-koloda-8CqDvPuo_kI-unsplash.jpg'

const Banner = () => {
    return (
        <div className="banner-image max-h-[660px] mt-[100px] relative">
            <Image src={bannerImage} className="w-full max-h-[660px] object-center" alt="" />
            <div className='absolute -translate-y-1/2 h-fit top-1/2 2xl:left-20 xl:left-16 z-40'>
                <div className="2xl:space-y-16 xl:space-y-10">
                    <div className="w-fit rounded-xl border-white p-3 welcome">
                        <h5 className="2xl:text-xl xl:text-base text-sm font-semibold text-white uppercase">Welcome to UICC</h5>
                    </div>
                    <h1 className="text-white 2xl:text-6xl xl:text-5xl text-3xl font-semibold">Transforming mind <br />
                        Shaping future</h1>
                    <div className="flex items-center gap-3">
                        <div className="bg-white w-[8px] 2xl:h-[50px] xl:h-[40px] h-[35px] rounded-xl">

                        </div>
                        <p className="2xl:text-xl xl:text-base text-sm font-semibold banner-text text-white ">We provide a complete language program and visa processing</p>
                    </div>
                    <ButtonSecondary text={'Register Now'} />
                </div>
            </div>
        </div>
    );
};

export default Banner;