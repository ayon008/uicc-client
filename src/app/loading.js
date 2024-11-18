'use client'
import Lottie from 'lottie-react';
import React from 'react';
import groovyWalkAnimation from '../../public/Animation - 1731864356526.json'

const loading = () => {
    return (
        <div className='mt-[100px]'>
            <div className='w-full h-screen'>
                <div className='flex items-center justify-center'>
                    <Lottie animationData={groovyWalkAnimation} className='w-[300px] h-auto' loop={true} />
                </div>
            </div>
        </div>
    );
};

export default loading;