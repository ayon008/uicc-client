import FaTelegram from '@/icons/FaTelegram';
import React from 'react';
import TextAnimation from './TextAnimation';

const SectionTitle = ({ subHeading, heading, width }) => {
    return (
        <div>
            {/* Subheading with AOS animation */}
            <div data-aos="fade-right" className="flex items-center justify-center gap-2">
                <FaTelegram />
                <h2 className="2xl:text-2xl xl:text-xl font-semibold">
                    <TextAnimation>
                        {subHeading}
                    </TextAnimation>
                </h2>
            </div>

            {/* Heading with delay applied via data-aos-delay */}
            <TextAnimation>
                <h1 data-aos="fade-right"
                    data-aos-delay="100"
                    className={`2xl:text-5xl xl:text-5xl text-2xl font-semibold mt-2 2xl:leading-[70px] xl:leading-[70px] text-center mx-auto w-full}`}
                >
                    <span>{heading}</span>
                </h1>
            </TextAnimation>
        </div>
    );
};

export default SectionTitle;
