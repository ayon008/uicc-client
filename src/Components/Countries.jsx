'use client'
import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import flag1 from '../../public/assets/aeacee374b2878078f489fb0e8234989.png'
import ButtonPrimary from './ButtonPrimary';
import Image from 'next/image';
import world1 from '../../public/assets/image 22.png'
import world2 from '../../public/assets/image 22 (1).png'
import flag2 from '../../public/assets/Image-80 (2).png';
import flag3 from '../../public/assets/Image-80 (3).png';
import flag4 from '../../public/assets/Image-80 (4).png';
import flag6 from '../../public/assets/Image-80 (5).png';
import flag5 from '../../public/assets/Image-80 (6).png';
import flag from '../../public/assets/Image-80.png'

const Country = ({ country, flag }) => {
    console.log(country);

    return (
        <div className='flex 2xl:gap-14 xl:gap-12 items-stretch h-full'>
            <div className='count'>
                <div className='flex flex-col h-full 2xl:px-9 xl:px-8'>
                    <p className='text-white my-auto vertical uppercase 2xl:text-2xl xl:text-2xl font-semibold'>{country}</p>
                </div>
            </div>
            {
                country === 'JAPAN' ?
                    <div className='flex items-center 2xl:gap-12 xl:gap-10'>
                        <div className=''>
                            <ul className='mt-6 2xl:space-y-[22px] xl:space-y-5'>
                                <li className='flex items-center gap-1'>
                                    <div className='rounded-full w-fit h-fit p-1 bg-deep-blue'>
                                        <FaCheck color='white' />
                                    </div>
                                    <p className='2xl:text-base xl:text-base font-normal'>Student visa for Language program</p>
                                </li>
                                <li className='flex items-center gap-1'>
                                    <div className='rounded-full w-fit h-fit p-1 bg-deep-blue'>
                                        <FaCheck color='white' />
                                    </div>
                                    <p className='2xl:text-base xl:text-base font-normal'>Visitor visa</p>
                                </li>
                                <li className='flex items-center gap-1'>
                                    <div className='rounded-full w-fit h-fit p-1 bg-deep-blue'>
                                        <FaCheck color='white' />
                                    </div>
                                    <p className='2xl:text-base xl:text-base font-normal'>Job Visa</p>
                                </li>
                                <li className='flex items-center gap-1'>
                                    <div className='rounded-full w-fit h-fit p-1 bg-deep-blue'>
                                        <FaCheck color='white' />
                                    </div>
                                    <p className='2xl:text-base xl:text-base font-normal'>Specific Skilled Worker(SSW) visa</p>
                                </li>
                                <li className='flex items-center gap-1'>
                                    <div className='rounded-full w-fit h-fit p-1 bg-deep-blue'>
                                        <FaCheck color='white' />
                                    </div>
                                    <p className='2xl:text-base xl:text-base font-normal'>Business Visa</p>
                                </li>
                            </ul>
                            <div className='2xl:mt-8 xl:mt-6'>
                                <ButtonPrimary text={'Register Now'} />
                            </div>
                        </div>
                        <div>
                            <Image className='w-[200px] h-[200px] rounded-full' src={flag} alt='' />
                        </div>
                    </div>
                    :
                    country === 'South Korea' ?
                        <div className='flex items-center 2xl:gap-12 xl:gap-10'>
                            <div className=''>
                                <ul className='mt-6 2xl:space-y-[22px] xl:space-y-5'>
                                    <li className='flex items-center gap-1'>
                                        <div className='rounded-full w-fit h-fit p-1 bg-deep-blue'>
                                            <FaCheck color='white' />
                                        </div>
                                        <p className='2xl:text-base xl:text-base font-normal'>Student Visa and Admission</p>
                                    </li>
                                    <li className='flex items-center gap-1'>
                                        <div className='rounded-full w-fit h-fit p-1 bg-deep-blue'>
                                            <FaCheck color='white' />
                                        </div>
                                        <p className='2xl:text-base xl:text-base font-normal'>Work Visa</p>
                                    </li>
                                    <li className='flex items-center gap-1'>
                                        <div className='rounded-full w-fit h-fit p-1 bg-deep-blue'>
                                            <FaCheck color='white' />
                                        </div>
                                        <p className='2xl:text-base xl:text-base font-normal'>Visitor visa</p>
                                    </li>
                                    <li className='flex items-center gap-1'>
                                        <div className='rounded-full w-fit h-fit p-1 bg-deep-blue'>
                                            <FaCheck color='white' />
                                        </div>
                                        <p className='2xl:text-base xl:text-base font-normal'>Business Visa</p>
                                    </li>
                                    <li className='flex items-center gap-1'>
                                        <div className='rounded-full w-fit h-fit p-1 bg-deep-blue'>
                                            <FaCheck color='white' />
                                        </div>
                                        <p className='2xl:text-base xl:text-base font-normal'>EPS-E9</p>
                                    </li>
                                    <li className='flex items-center gap-1'>
                                        <div className='rounded-full w-fit h-fit p-1 bg-deep-blue'>
                                            <FaCheck color='white' />
                                        </div>
                                        <p className='2xl:text-base xl:text-base font-normal'>Associate program (D4)</p>
                                    </li>
                                </ul>
                                <div className='2xl:mt-8 xl:mt-6'>
                                    <ButtonPrimary text={'Register Now'} />
                                </div>
                            </div>
                            <div>
                                <Image className='w-[200px] h-[200px] rounded-full' src={flag} alt='' />
                            </div>
                        </div> :
                        <div className='flex items-center 2xl:gap-12 xl:gap-10'>
                            <div className=''>
                                <h3 className='2xl:text-3xl xl:text-2xl font-semibold'>Student Visa</h3>
                                <ul className='mt-6 2xl:space-y-[22px] xl:space-y-5'>
                                    <li className='flex items-center gap-1'>
                                        <div className='rounded-full w-fit h-fit p-1 bg-deep-blue'>
                                            <FaCheck color='white' />
                                        </div>
                                        <p className='2xl:text-base xl:text-base font-normal'>90% Visa Success rate</p>
                                    </li>
                                    <li className='flex items-center gap-1'>
                                        <div className='rounded-full w-fit h-fit p-1 bg-deep-blue'>
                                            <FaCheck color='white' />
                                        </div>
                                        <p className='2xl:text-base xl:text-base font-normal'>Accommodation Guidance</p>
                                    </li>
                                    <li className='flex items-center gap-1'>
                                        <div className='rounded-full w-fit h-fit p-1 bg-deep-blue'>
                                            <FaCheck color='white' />
                                        </div>
                                        <p className='2xl:text-base xl:text-base font-normal'>Scholarship Guidance</p>
                                    </li>
                                    <li className='flex items-center gap-1'>
                                        <div className='rounded-full w-fit h-fit p-1 bg-deep-blue'>
                                            <FaCheck color='white' />
                                        </div>
                                        <p className='2xl:text-base xl:text-base font-normal'>All kinds of Bank Support</p>
                                    </li>
                                    <li className='flex items-center gap-1'>
                                        <div className='rounded-full w-fit h-fit p-1 bg-deep-blue'>
                                            <FaCheck color='white' />
                                        </div>
                                        <p className='2xl:text-base xl:text-base font-normal'>90% Visa Success rate</p>
                                    </li>
                                </ul>
                                <div className='2xl:mt-8 xl:mt-6'>
                                    <ButtonPrimary text={'Register Now'} />
                                </div>
                            </div>
                            <div>
                                <Image className='w-[200px] h-[200px] rounded-full' src={flag} alt='' />
                            </div>
                        </div>
            }
        </div>
    )
}

const Accordion = () => {
    // Track which accordion item is open
    const [openIndex, setOpenIndex] = useState(0);

    // Toggle the accordion item based on index
    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Define accordion items
    const accordionItems = [
        { title: 'AUstralia', image: world1, flag: flag2 },
        { title: 'Canada', image: world2, flag: flag },
        { title: 'USA', image: world1, flag: flag3 },
        { title: 'UK', image: world1, flag: flag5 },
        { title: 'New Zealand', image: world1, flag: flag2 },
        { title: 'JAPAN', image: world1, flag: flag6 },
        { title: 'South Korea', image: world1, flag: flag4 },
    ];

    return (
        <div className="w-fit flex items-center justify-end mx-auto mb-32">
            {accordionItems.map((item, index) => (
                <div data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" key={index} className="flex flex-row-reverse border border-[#E8FFFE] h-[400px]">
                    {openIndex !== index && (
                        <button
                            className={`py-3 h-full font-semibold relative hover:bg-orange transition-all duration-300 ease-in-out 2xl:w-[100px] xl:w-[80px] border-[#E8FFFE]`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <Image className='h-full' src={item.image} alt={`${item.title}`} />
                            <span className='w-fit h-fit vertical z-10 top-10 left-[32%] 2xl:text-3xl xl:text-3xl font-semibold absolute uppercase'>{item.title}</span>
                            <Image className='absolute bottom-3 left-1/2 -translate-x-1/2' src={item?.flag} alt='' />
                        </button>
                    )}
                    <div
                        className={`transition-all flex-1 duration-300 overflow-hidden ${openIndex === index ? 'max-w-full min-w-[650px] 2xl:pr-6' : 'max-w-0 min-w-0'
                            }`}
                    >
                        <Country country={item.title} flag={item.flag} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
