'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import img1 from '@/../public/assets/44923e5447f015910dcbb865d34f84e2.png'
import img2 from '@/../public/assets/b655cb9ea254db8e60a6ccaa93a1d36b.png'
import FaTicket from '@/icons/FaTicket';
import FaTelegram from '@/icons/FaTelegram';
import { TickIcon } from '../layout';

const Page = () => {
    return (
        <div>
            <div>
                <h1 className='2xl:text-5xl xl:text-4xl font-semibold'>Career Counseling at UICC</h1>
                <p className='2xl:text-xl xl:text-lg font-normal mt-6'>
                    International Career Council at Uttara offers *comprehensive career counseling services* to help individuals identify their passions, skills, and opportunities to excel in their chosen fields. Whether you&apos;re a student, job seeker, or professional looking to pivot, our expert counselors provide personalized guidance tailored to your needs and goals.
                </p>
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    Career Assessment and Planning
                </h2>
                <ul className='space-y-10'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Skill and Interest Evaluation: We assess your strengths, interests, and personality traits using proven tools and methodologies.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Career Mappin: Aligning your abilities with viable career paths that match your ambitions and goals.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Goal Setting: Help in setting achievable short-term and long-term career goals.
                        </span>
                    </li>
                </ul>
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    Education and Training Guidance
                </h2>
                <ul className='space-y-10'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Academic Counseling: Guidance for students choosing their educational paths, including subjects, universities, and degrees that align with their career goals.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Certification and Skill Development: Recommendations for courses like IELTS, Japanese, and Korean language training to enhance employability.
                        </span>
                    </li>
                </ul>
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    Study Abroad Counseling
                </h2>
                <ul className='space-y-10'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Program Selection: Assistance in identifying suitable study programs and universities globally.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Application Support: Help with admission procedures, including documentation, essays, and application forms.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Scholarship Guidance: Information about scholarships and financial aid opportunities.
                        </span>
                    </li>
                </ul>
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    Job Market Preparation
                </h2>
                <ul className='space-y-10'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Resume and Cover Letter Writing: Professional assistance to create impactful resumes and cover letters.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Interview Preparation: Tips, mock interviews, and feedback to build confidence for job interviews.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Job Search Strategies: Guidance on finding job opportunities and leveraging platforms like LinkedIn.
                        </span>
                    </li>
                </ul>
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    Career Transition and Development
                </h2>
                <ul className='space-y-10'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Career Change Guidance: Support for professionals looking to transition into new roles or industries.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Leadership Coaching: For those seeking growth into managerial or leadership positions.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Freelancing and Entrepreneurship Advice: Help in exploring independent career paths or starting a business.
                        </span>
                    </li>
                </ul>
                <div className='flex items-center mt-8 gap-6'>
                    <Image className='flex-1' src={img1} alt='' />
                    <Image className='flex-1' src={img2} alt='' />
                </div>
                <div className="flex-1 flex flex-col justify-between px-10">
                    <div className="mt-16">
                        <div className="flex items-center gap-2">
                            <FaTelegram />
                            <h2 className="2xl:text-2xl xl:text-xl font-semibold">Air Ticketing</h2>
                        </div>
                        <h1 className="2xl:text-5xl xl:text-5xl text-2xl font-semibold mt-3 w-full">
                            Reason to Choose Us
                        </h1>
                    </div>
                    <div className="space-y-14 mt-10">
                        <div className="flex items-center gap-4">
                            <div className="p-2 w-fit bg-orange-light rounded-full">
                                <div className="p-2 bg-orange rounded-full">
                                    <FaTicket />
                                </div>
                            </div>
                            <div>
                                <h2 className="2xl:text-3xl xl:text-2xl font-semibold">Convenience</h2>
                                <p className="2xl:text-xl xl:text-lg font-normal mt-3">We handle the entire flight booking process, saving you time and effort.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-2 w-fit bg-orange-light rounded-full">
                                <div className="p-2 bg-orange rounded-full">
                                    <FaTicket />
                                </div>
                            </div>
                            <div>
                                <h2 className="2xl:text-3xl xl:text-2xl font-semibold">Competitive Pricing</h2>
                                <p className="2xl:text-xl xl:text-lg font-normal mt-3">Access to competitive fares and deals for your destination.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-2 w-fit bg-orange-light rounded-full">
                                <div className="p-2 bg-orange rounded-full">
                                    <FaTicket />
                                </div>
                            </div>
                            <div>
                                <h2 className="2xl:text-3xl xl:text-2xl font-semibold">Travel Expertise</h2>
                                <p className="2xl:text-xl xl:text-lg font-normal mt-3">We provide guidance on the best routes and airlines for your journey.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='2xl:text-2xl xl:text-xl font-semibold mt-16'>
                    Let UICC take care of your travel plans with our reliable air ticket support, so you can focus on your next adventure.
                </p>
            </div>
        </div >
    );
};

export default Page;