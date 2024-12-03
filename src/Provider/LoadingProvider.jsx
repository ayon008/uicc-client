'use client';
import Loading from '@/app/Loader';
import Footer from '@/shared/Footer';
import Navbar from '@/shared/Navbar';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [circles, setCircles] = useState([]);  // State to track the position of each circle

    useEffect(() => {
        const handleMouse = (e) => {
            setCoords({ x: e.clientX, y: e.clientY });
        }
        window.addEventListener('mousemove', handleMouse);
        return () => window.removeEventListener('mousemove', handleMouse);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Add new circle at the current mouse position
        setCircles(prevCircles => [
            ...prevCircles.slice(-9),  // Keep the last 10 circles to avoid excessive rendering
            { x: coords.x, y: coords.y }
        ]);
    }, [coords]);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className='min-h-screen w-full'>
            <Navbar />
            <div className="bg-[#EEEFF1]">
                {children}
            </div>
            {/* Render circles based on their previous positions */}
            {/* {circles.map((circle, i) => (
                <motion.div
                    key={i}
                    className='w-[24px] h-[24px] absolute z-[2000] bg-black rounded-full'
                    initial={{ left: coords.x - 12, top: coords.y - 12 }}  // Initial position for the circle
                    animate={{ left: circle.x - 12, top: circle.y - 12 }}  // Animated position for each circle
                    transition={{ delay: i * 0.05, type: 'spring', stiffness: 100, damping: 20 }}  // Adjust animation timing
                />
            ))} */}
            <Footer />
        </div>
    );
};

export default LoadingProvider;
