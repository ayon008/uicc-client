import Facebook from '@/icons/Facebook';
import FaEmail from '@/icons/FaEmail';
import FaLinkedIn from '@/icons/FaLinkedIn';
import FaLocation from '@/icons/FaLocation';
import FaPhone from '@/icons/FaPhone';
import FaTwitter from '@/icons/FaTwitter';
import FaWhatsapp from '@/icons/FaWhatsapp';
import React from 'react';

const Navbar = () => {
    const text = '+880-195837780';
    return (
        <div className='w-full'>

            <div className='w-full bg-orange flex items-center justify-between'>
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
                        <p className='text-white font-normal text-sm hover:text-deep-blue transition-colors duration-500'>87, BNS Center, Sector-7, Uttara, Dhaka-1230</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaEmail />
                        <p className='text-white font-normal text-sm hover:text-deep-blue transition-colors duration-500'>info@uttara.com</p>
                    </div>
                    <div className='bg-deep-blue flex items-center px-12 py-[18px]'>
                        <FaPhone />
                        <p className='text-base font-semibold text-white hover-letter'>
                            {text.split("").map((letter, index) => (
                                <span key={index} className="hover-letter" style={{ animationDelay: `${index * 0.1}s` }}>
                                    {letter}
                                </span>
                            ))}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;