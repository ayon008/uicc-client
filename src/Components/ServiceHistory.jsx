'use client'
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const ServiceHistory = ({ count }) => {
    const { ref, inView } = useInView({
        triggerOnce: false, // Trigger animation only once
        threshold: 0.5, // Trigger when 50% of the element is visible
    });
    const targetNumber = 1500;
    return (
        <div className="px-10 max-w-7xl mx-auto">
            <div className={`2xl:py-[90px] xl:py-16 2xl:px-28 xl:px-20 grid grid-cols-4 ${count}`}>
                <div>
                    <h1 ref={ref} className="text-white text-center 2xl:text-5xl xl:text-4xl font-semibold">
                        {
                            inView &&
                            <CountUp start={40} end={90} duration={2} separator="," suffix='%' />
                        }
                    </h1>
                    <p className="text-white text-center mt-1 2xl:text-2xl xl:text-lg">Trusted Clients</p>
                </div>
                <div>
                    <h1 ref={ref} className="text-white text-center 2xl:text-5xl xl:text-4xl font-semibold">
                        {
                            inView &&
                            <CountUp start={8} end={12} duration={2} separator="," suffix='K' />
                        }
                    </h1>
                    <p className="text-white text-center mt-1 2xl:text-2xl xl:text-lg">Trusted Clients</p>
                </div>
                <div>
                    <h1 ref={ref} className="text-white text-center 2xl:text-5xl xl:text-4xl font-semibold">
                        {
                            inView &&
                            <CountUp start={4} end={10} duration={2} separator="," suffix='+' />
                        }
                    </h1>
                    <p className="text-white text-center mt-1 2xl:text-2xl xl:text-lg">Countries</p>
                </div>
                <div>
                    <h1 className="text-white text-center 2xl:text-5xl xl:text-4xl font-semibold">
                        {
                            inView &&
                            <CountUp start={4} end={10} duration={2} separator="," suffix='+' />
                        }
                    </h1>
                    <p className="text-white text-center mt-1 2xl:text-2xl xl:text-lg">Trusted Clients</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceHistory;