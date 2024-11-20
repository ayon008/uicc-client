import Facebook from '@/icons/Facebook';
import FaLinkedIn from '@/icons/FaLinkedIn';
import FaLocation from '@/icons/FaLocation';
import FaPhone from '@/icons/FaPhone';
import FaTwitter from '@/icons/FaTwitter';
import FaWhatsapp from '@/icons/FaWhatsapp';
import Image from 'next/image';
import React from 'react';
import logo from '../../public/assets/logo.svg'
import ButtonSecondary from '@/Components/ButtonSecondary';
import Link from 'next/link';

const Footer = () => {
    // 2xl:mt-40 xl:mt-32 mt-16
    return (
        <div className=''>
            <div className='footer-main 2xl:pt-12 2xl:px-12 xl:pt-8 xl:px-8 px-4'>
                <div className='2xl:block xl:block hidden'>
                    <div className='bg-orange flex flex-col h-full rounded-lg'>
                        <div className='w-[20%]'>
                            <div className='relative xl:w-[180px] 2xl:w-[200px]'>
                                <Image className='absolute top-0 w-full 2xl:left-16 xl:left-10' src={logo} alt='logo' />
                            </div>
                        </div>
                        <div className='w-[80%] ml-auto h-full flex items-center justify-between 2xl:py-[18px] xl:py-3 2xl:pr-10 xl:pr-8'>
                            <div className='flex items-center gap-4'>
                                <Facebook />
                                <FaLinkedIn />
                                <FaTwitter />
                                <FaWhatsapp />
                            </div>
                            <div className='w-[1px] bg-white h-[32px] rounded-lg'>

                            </div>
                            <div>
                                <div className='flex items-center gap-2'>
                                    <FaLocation />
                                    <p className='text-white font-normal text-sm hover:text-deep-blue transition-colors duration-500 cursor-pointer'>87, BNS Center (Level-10), Sector-7, Uttara, Dhaka-1230</p>
                                </div>
                            </div>
                            <div className='w-[1px] bg-white h-[32px] rounded-lg'>

                            </div>
                            <div>
                                <div className='flex items-center gap-[2px]'>
                                    <FaPhone />
                                    <p className='text-white text-sm hover:text-deep-blue transition-colors duration-500 cursor-pointer font-semibold'>+880-195837780</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='2xl:hidden xl:hidden block py-6'>
                    <div className='w-3/4 bg-orange mx-auto py-4 space-y-4 rounded-lg'>
                        <Image className='h-[75px] w-auto mx-auto' src={logo} alt='logo' />
                        <div className='flex items-center px-8 gap-4'>
                            <Facebook />
                            <FaLinkedIn />
                            <FaTwitter />
                            <FaWhatsapp />
                        </div>
                        <div className='flex items-center gap-2 px-8'>
                            <FaLocation />
                            <p className='text-white font-normal text-sm hover:text-deep-blue transition-colors duration-500 cursor-pointer'>87, BNS Center (Level-10), Sector-7, Uttara, Dhaka-1230</p>
                        </div>
                        <div className='flex items-center px-10 gap-[2px]'>
                            <FaPhone />
                            <p className='text-white text-sm hover:text-deep-blue transition-colors duration-500 cursor-pointer font-semibold'>+880-195837780</p>
                        </div>
                    </div>
                </div>
                <footer className="footer items-center text-base-content py-10 px-14">
                    <aside className='text-white'>
                        <div className='2xl:space-y-4 xl:space-y-3 border-b-white pb-'>
                            <h2 className='2xl:text-xl xl:text-xl font-semibold'>Transforming Mind Shaping Future</h2>
                            <p className='2xl:text-sm xl:text-sm font-normal'>
                                Indignation and dislike men who are so beguiled and<br /> of pleasure of the moment so blinded
                            </p>
                        </div>
                        <div className='w-full h-[1px] bg-white 2xl:my-6 xl:my-4 my-2'></div>
                        <Link href={'/signUp'}>
                            <ButtonSecondary text={'Register Now'} />
                        </Link>
                    </aside>
                    <nav>
                        <h6 className="footer-title relative">Useful Links</h6>
                        <ul className="flex flex-col gap-2 list-disc pl-5">
                            <li className="2xl:mt-3 xl:mt-2 link link-hover">
                                <Link href={'/about'}>
                                    About Us
                                </Link>
                            </li>

                            <li className="link link-hover">
                                <Link href={'/universities'}>
                                    Top Universities
                                </Link>
                            </li>
                            <li className="link link-hover">Top Countries</li>
                            <li className="link link-hover">
                                <Link href={'/ielts'}>
                                    Education
                                </Link>
                            </li>
                            <li className="link link-hover">
                                <Link href={'/contact'}>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <nav className='2xl:block xl:block hidden bg-white w-[1px] h-[150px]'>

                    </nav>
                    <nav>
                        <h6 className="footer-title relative">Services</h6>
                        <ul className="flex flex-col gap-2 list-disc pl-5">
                            <li className="link link-hover 2xl:mt-3 xl:mt-2">
                                <Link href={'/career-counseling'}>
                                    Career Council
                                </Link>
                            </li>
                            <li className="link link-hover">
                                <Link href={'/air-ticket'}>
                                    Air Ticket
                                </Link>
                            </li>
                            <li className="link link-hover">
                                <Link href={'/language-training'}>
                                    Language Training
                                </Link>
                            </li>
                            <li className="link link-hover">
                                <Link href={'/visa-processing'}>
                                    Visa Processing
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <nav className='2xl:block xl:block hidden bg-white w-[1px] h-[150px]'>

                    </nav>
                    <nav>
                        <h6 className="footer-title relative">Quick Links</h6>
                        <ul className="flex flex-col gap-2 list-disc pl-5">
                            <li className="link link-hover 2xl:mt-3 xl:mt-2">
                                <Link href={'/ielts'}>
                                    Education
                                </Link>
                            </li>
                            <li className="link link-hover">
                                <Link href={'/korean-language/korean-regular-batch'}>
                                    Korean Language
                                </Link>
                            </li>
                            <li className="link link-hover">
                                <Link href={'/german-language/basic-german'}>
                                    German Language
                                </Link>
                            </li>
                            <li className="link link-hover">
                                <Link href={'/japanese-language/japanese-language-course-n5'}>
                                    Japanese Language
                                </Link>
                            </li>
                            <li className="link link-hover">
                                <Link href={'/chinese-language/basic-chinese'}>
                                    Chinese Language
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </footer>
            </div>
            <div className='footer-end flex 2xl:flex-row xl:flex-row flex-col gap-2 justify-between px-14 py-5'>
                <p className='text-white'>© Copyright {new Date().getFullYear()} <span className='text-orange-1 font-bold'>Abriana IT. </span> - All right reserved</p>
                <ul className='flex items-center text-white gap-8'>
                    <li>Privacy</li>
                    <li>Terms of Use</li>
                    <li>Support</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;