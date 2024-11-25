'use client'
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
const TextAnimation = ({ children, className }) => {
    const { ref, inView } = useInView({
        triggerOnce: false, // Trigger animation only once
        threshold: 0.5, // Trigger when 50% of the element is visible
    });
    return (
        <>
            <div ref={ref}>
                <motion.div
                    initial={{ clipPath: 'inset(0 100% 0 0)' }}
                    animate={inView ? { clipPath: 'inset(0 0% 0 0)' } : { clipPath: 'inset(0 100% 0 0)' }}
                    transition={{
                        duration: 1, // Animation duration in seconds
                        ease: "easeInOut",
                        delay: 0.1 // Easing function
                    }}
                    className={`${className}`}>
                    {children}
                </motion.div>
            </div>
        </>
    );
};

export default TextAnimation;