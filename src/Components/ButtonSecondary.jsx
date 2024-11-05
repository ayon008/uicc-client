import React from 'react';

const ButtonSecondary = ({ text }) => {
    return (
        <button className={`px-6 h-fit py-4 rounded-[40px] text-deep-blue bg-white border-none transition-colors duration-300 bn-secondary btn uppercase 2xl:text-xl xl:text-base font-bold`}>
            {text}
        </button>
    );
};

export default ButtonSecondary;