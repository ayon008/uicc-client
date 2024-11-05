'use client'
import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Banner from './Banner';

// 2xl:p-6 xl:p-4
// 2xl:p-6 xl:p-4
// 2xl:p-6 xl:p-4
// 2xl:p-6 xl:p-4
// 2xl:p-6 xl:p-4

const SelectTab = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className={'mt-[100px]'}>
            <TabPanel>
                <Banner />
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
            <TabList className={'grid grid-cols-5'}>
                <Tab className={`cursor-pointer 2xl:py-6 xl:py-4 text-center ${tabIndex === 0 ? 'text-white bg-deep-blue' : 'text-black bg-white'} font-semibold 2xl:text-2xl xl:text-lg`} >
                    Language Training
                </Tab>
                <Tab className={`cursor-pointer 2xl:py-6 xl:py-4 text-center ${tabIndex === 1 ? 'text-white bg-deep-blue' : 'text-black bg-white'} font-semibold 2xl:text-2xl xl:text-lg`} >
                    Career Counseling
                </Tab>
                <Tab className={`cursor-pointer 2xl:py-6 xl:py-4 text-center ${tabIndex === 2 ? 'text-white bg-deep-blue' : 'text-black bg-white'} font-semibold 2xl:text-2xl xl:text-lg`} >
                    Visa Processing
                </Tab>
                <Tab className={`cursor-pointer 2xl:py-6 xl:py-4 text-center ${tabIndex === 3 ? 'text-white bg-deep-blue' : 'text-black bg-white'} font-semibold 2xl:text-2xl xl:text-lg`} >
                    Air Ticketing
                </Tab>
                <Tab className={`cursor-pointer 2xl:py-6 xl:py-4 text-center ${tabIndex === 4 ? 'text-white bg-deep-blue' : 'text-black bg-white'} font-semibold 2xl:text-2xl xl:text-lg`}>
                    Training Center
                </Tab>
            </TabList>
        </Tabs>
    );
};

export default SelectTab;