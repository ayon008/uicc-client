import React from 'react';
import '../app/css/btn-secondary.css'

const ButtonSecondary = ({ text }) => {
    return (
        // <button className={`relative rounded-[12px] bg-white border-none btn button-secondary uppercase 2xl:text-xl xl:text-base font-bold w-[250px] h-[70px]`}>

        // </button>
        <div class="box__link button-animation">
            {text}
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

export default ButtonSecondary;