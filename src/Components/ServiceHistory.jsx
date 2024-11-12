import React from 'react';

const ServiceHistory = ({ count }) => {
    return (
        <div className="px-10 max-w-7xl mx-auto">
            <div className={`2xl:py-[90px] xl:py-16 2xl:px-28 xl:px-20 grid grid-cols-4 ${count}`}>
                <div>
                    <h1 className="text-white text-center 2xl:text-5xl xl:text-4xl font-semibold">12k</h1>
                    <p className="text-white text-center mt-1 2xl:text-2xl xl:text-lg">Trusted Clients</p>
                </div>
                <div>
                    <h1 className="text-white text-center 2xl:text-5xl xl:text-4xl font-semibold">12k</h1>
                    <p className="text-white text-center mt-1 2xl:text-2xl xl:text-lg">Trusted Clients</p>
                </div>
                <div>
                    <h1 className="text-white text-center 2xl:text-5xl xl:text-4xl font-semibold">12k</h1>
                    <p className="text-white text-center mt-1 2xl:text-2xl xl:text-lg">Trusted Clients</p>
                </div>
                <div>
                    <h1 className="text-white text-center 2xl:text-5xl xl:text-4xl font-semibold">12k</h1>
                    <p className="text-white text-center mt-1 2xl:text-2xl xl:text-lg">Trusted Clients</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceHistory;