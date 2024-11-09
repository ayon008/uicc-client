import FaTelegram from '@/icons/FaTelegram';
import React from 'react';

const SectionTitle = ({ subHeading, heading, width }) => {
    return (
        <div>
            <div className="flex items-center justify-center gap-2">
                <FaTelegram />
                <h2 className="2xl:text-2xl xl:text-xl font-semibold">{subHeading}</h2>
            </div>
            <h1 className={`2xl:text-5xl xl:text-5xl text-2xl font-semibold mt-2 2xl:leading-[70px] xl:leading-[70px] text-center mx-auto ${width ? 'w-full' : 'w-[60%]'}`}>
                {heading}
            </h1>
        </div>
    );
};

export default SectionTitle;