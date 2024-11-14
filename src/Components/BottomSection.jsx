import React from 'react';
const BottomSection = () => {
    return (
        <div className='px-10 2xl:mt-36 xl:mt-28'>
            <div className='bottomSection flex flex-col'>
                <div className='h-fit my-auto flex justify-between items-center 2xl:px-14 xl:px-10'>
                    <p className='text-white h-fit 2xl:text-5xl xl:text-4xl font-semibold'>Subscribe To Immigway <br /> For All the offers</p>
                    <form className='min-w-[400px] relative h-fit'>
                        <input className='rounded-[40px] px-4 py-4 w-full' type='email' placeholder='Email' />
                        <button type='submit' className='absolute bottom-[5px] right-2'>
                            <div className='bg-orange p-3 rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                                    <path d="M21.4996 2.02702C21.5146 1.47493 21.0791 1.01529 20.527 1.00036L11.5303 0.75721C10.9782 0.742289 10.5186 1.17775 10.5036 1.72983C10.4887 2.28191 10.9242 2.74156 11.4763 2.75648L19.4733 2.97262L19.2572 10.9697C19.2423 11.5218 19.6777 11.9814 20.2298 11.9963C20.7819 12.0113 21.2416 11.5758 21.2565 11.0237L21.4996 2.02702ZM2.18774 20.726L21.1877 2.72595L19.8123 1.27405L0.812255 19.274L2.18774 20.726Z" fill="white" />
                                </svg>
                            </div>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BottomSection;