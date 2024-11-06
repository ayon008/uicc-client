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

const Footer = () => {
    return (
        <div className='2xl:mt-40 xl:mt-32 mt-16'>
            <div className='footer-main 2xl:pt-12 2xl:px-12 xl:pt-8 xl:px-8'>
                <div className=''>
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
                                    <p className='text-white font-normal text-sm hover:text-deep-blue transition-colors duration-500 cursor-pointer'>87, BNS Center, Sector-7, Uttara, Dhaka-1230 (Level-10)</p>
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
                <footer className="footer items-center text-base-content py-10 px-14">
                    <aside className='text-white'>
                        <div className='2xl:space-y-4 xl:space-y-3 border-b-white pb-'>
                            <h2 className='2xl:text-xl xl:text-xl font-semibold'>Transforming Mind Shaping Future</h2>
                            <p className='2xl:text-sm xl:text-sm font-normal'>
                                Indignation and dislike men who are so beguiled and<br /> of pleasure of the moment so blinded
                            </p>
                        </div>
                        <div className='w-full h-[1px] bg-white 2xl:my-6 xl:my-4'></div>
                        <div>
                            <ButtonSecondary text={'Get Consultancy'} />
                        </div>
                    </aside>
                    <nav>
                        <h6 className="footer-title relative">Useful Links</h6>
                        <ul className="flex flex-col gap-2 list-disc pl-5">
                            <li className="2xl:mt-3 xl:mt-2 link link-hover">About Us</li>
                            <li className="link link-hover">Top Universities</li>
                            <li className="link link-hover">Top Countries</li>
                            <li className="link link-hover">Education</li>
                            <li className="link link-hover">Contact Us</li>
                        </ul>
                    </nav>
                    <nav className='bg-white w-[1px] h-[150px]'>

                    </nav>
                    <nav>
                        <h6 className="footer-title relative">Services</h6>
                        <ul className="flex flex-col gap-2 list-disc pl-5">
                            <li className="link link-hover 2xl:mt-3 xl:mt-2">Career Council</li>
                            <li className="link link-hover">Air Ticket</li>
                            <li className="link link-hover">Language Training</li>
                            <li className="link link-hover">Visa Processing</li>
                        </ul>
                    </nav>
                    <nav className='bg-white w-[1px] h-[150px]'>

                    </nav>
                    <nav>
                        <h6 className="footer-title relative">Quick Links</h6>
                        <ul className="flex flex-col gap-2 list-disc pl-5">
                            <li className="link link-hover 2xl:mt-3 xl:mt-2">IELTS</li>
                            <li className="link link-hover">Korean Language</li>
                            <li className="link link-hover">German Language</li>
                            <li className="link link-hover">Japanese Language</li>
                            <li className="link link-hover">Chinese Language</li>
                        </ul>
                    </nav>
                </footer>
            </div>
            <div className='footer-end flex justify-between px-14 py-5'>
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