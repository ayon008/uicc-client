'use client'
import Lottie from 'lottie-react';
import React from 'react';
import groovyWalkAnimation from '../../public/Animation - 1724095427415.json'

const error = () => {
    return (
        <div className='mt-[100px]'>
            <div className='w-full h-screen'>
                <div className='flex flex-col items-center justify-center'>
                    <Lottie animationData={groovyWalkAnimation} className='w-[300px] h-auto my-auto' loop={true} />
                </div>
            </div>
        </div>
    );
};

export default error;