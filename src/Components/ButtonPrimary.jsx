import React from 'react';

const ButtonPrimary = ({ text }) => {
    return (
        <button className={`px-6 h-fit py-4 rounded-[40px] bg-orange transition-colors duration-300 text-white bn-primary btn uppercase 2xl:text-xl xl:text-base font-bold`}>
            {text}
        </button>
    );
};

export default ButtonPrimary;