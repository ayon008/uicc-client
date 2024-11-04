'use client'
import Facebook from '@/icons/Facebook';
import FaEmail from '@/icons/FaEmail';
import FaLinkedIn from '@/icons/FaLinkedIn';
import FaLocation from '@/icons/FaLocation';
import FaPhone from '@/icons/FaPhone';
import FaTwitter from '@/icons/FaTwitter';
import FaWhatsapp from '@/icons/FaWhatsapp';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import logo from '../../public/assets/logo.svg'
import { MdSearch } from 'react-icons/md';
import Link from 'next/link';
import DropDown from '@/icons/DrowDown';
import { motion } from "framer-motion";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    console.log(scrolled);


    useEffect(() => {
        let lastScrollTop = 0;
        const handleScroll = () => {
            const currentScrollTop = window.scrollY;
            setScrolled(currentScrollTop < lastScrollTop && currentScrollTop > 80);
            lastScrollTop = currentScrollTop;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = <>
        <li className="2xl:text-xl xl:text-base font-semibold hover:text-orange transition-all duration-100">
            <Link href="/home">Home</Link>
        </li>
        <li className="2xl:text-xl xl:text-base font-semibold hover:text-orange transition-all duration-100">
            <Link href="/about">About</Link>
        </li>
        <li className="2xl:text-xl xl:text-base font-semibold hover:text-orange transition-all duration-100">
            <Link href="/service">Service</Link>
        </li>
        <li className="2xl:text-xl xl:text-base font-semibold hover:text-orange transition-all duration-100">
            <Link href="/associate-universities">Associate Universities</Link>
        </li>
        {/* <li className="2xl:text-xl xl:text-base font-semibold dropdown-icon hover:text-orange transition-all duration-100 flex items-center cursor-pointer">


        </li> */}
        <li>
            <div className="dropdown dropdown-hover">
                <div className='2xl:text-xl xl:text-base font-semibold dropdown-icon hover:text-orange transition-all duration-100 flex items-center cursor-pointer '>
                    <span tabIndex={0} role="button">Education</span>
                    <DropDown />
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-[#FBFCFF] z-[1] w-64 pb-2 pt-[40px] px-2 -left-8">
                    <li>
                        <Link href="" className='uppercase font-semibold 2xl:text-xl xl:text-base'>IELTS</Link>
                    </li>
                    <li>
                        <Link href="" className='uppercase font-semibold 2xl:text-xl xl:text-base'>Korean Language</Link>
                    </li>
                    <li>
                        <Link href="" className='uppercase font-semibold 2xl:text-xl xl:text-base'>Japanese Language</Link>
                    </li>
                    <li>
                        <Link href="" className='uppercase font-semibold 2xl:text-xl xl:text-base'>German Language</Link>
                    </li>
                    <li>
                        <Link href="" className='uppercase font-semibold 2xl:text-xl xl:text-base'>Chinese Language</Link>
                    </li>
                </ul>
            </div>
        </li>
        <li className="2xl:text-xl xl:text-base font-semibold hover:text-orange transition-all duration-100">
            <Link href="/contact">Contact</Link>
        </li>
        <li>
            <button className="rounded-[30px] flex items-center btn text-white bg-orange 2xl:text-lg xl:text-base">
                <MdSearch size={24} color="white" />
                <span>Search</span>
            </button>
        </li>
    </>


    return (
        <div className='w-full relative z-50'>
            <div className='w-full h-[60px] bg-orange flex items-center justify-between'>
                {/* Nav Start */}
                <div className='nav-start  flex px-11 py-[12px] gap-1'>
                    <Facebook />
                    <FaLinkedIn />
                    <FaTwitter />
                    <FaWhatsapp />
                </div>
                <div className='nav-end flex items-center gap-12 pe-6'>
                    <div className='flex items-center gap-2'>
                        <FaLocation />
                        <p className='text-white font-normal text-sm hover:text-deep-blue transition-colors duration-500 cursor-pointer'>87, BNS Center, Sector-7, Uttara, Dhaka-1230</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaEmail />
                        <p className='text-white font-normal text-sm hover:text-deep-blue transition-colors duration-500 cursor-pointer'>info@uttara.com</p>
                    </div>
                    <div className='bg-deep-blue flex items-center px-12 py-[18px]'>
                        <FaPhone />
                        <div class="phone-number">
                            <span class="letter text-base font-semibold text-white animate__backOutDown">+</span>
                            <span class="letter text-base font-semibold text-white">8</span>
                            <span class="letter text-base font-semibold text-white">8</span>
                            <span class="letter text-base font-semibold text-white">0</span>
                            <span class="letter text-base font-semibold text-white">-</span>
                            <span class="letter text-base font-semibold text-white">1</span>
                            <span class="letter text-base font-semibold text-white">9</span>
                            <span class="letter text-base font-semibold text-white">5</span>
                            <span class="letter text-base font-semibold text-white">8</span>
                            <span class="letter text-base font-semibold text-white">3</span>
                            <span class="letter text-base font-semibold text-white">7</span>
                            <span class="letter text-base font-semibold text-white">7</span>
                            <span class="letter text-base font-semibold text-white">8</span>
                            <span class="letter text-base font-semibold text-white">0</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute top-[60px] inset-0'>
                <div className='bg-[#FBFCFF]'>
                    <div className='flex items-center justify-between  max-w-[1440px] mx-auto relative h-[100px] 2xl:py-10 xl:py-10'>
                        <div className='absolute top-0 left-11'>
                            <div className='nav-start'>
                                <Image className='w-[275px] h-[125px]' src={logo} alt='logo' />
                            </div>
                        </div>
                        <div class="w-fit ml-auto pr-11">
                            <ul class="flex items-center justify-between 2xl:gap-8 xl:gap-6">
                                {
                                    navItems
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <motion.div
                initial={{ top: -2000 }}
                animate={{ top: scrolled ? 0 : -200 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.01 }}
                className={`h-[100px] bg-[#FBFCFF] shadow-xl fixed right-0 left-0 z-50`}
            >
                <div className='max-w-[1440px] mx-auto h-full flex items-center justify-between relative 2xl:py-10 xl:py-10'>
                    <div className='absolute top-0 left-11'>
                        <div className='nav-start'>
                            <Image className='w-[275px] h-[125px]' src={logo} alt='logo' />
                        </div>
                    </div>
                    <div class="w-fit ml-auto pr-11">
                        <ul class="flex navItems items-center justify-between 2xl:gap-8 xl:gap-6">
                            {
                                navItems
                            }
                        </ul>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Navbar;