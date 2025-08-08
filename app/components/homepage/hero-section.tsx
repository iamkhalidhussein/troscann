"use client"

import { motion } from "framer-motion";

export const HeroSection = () => {
    return (
        <div className="bg-[url('/hero-bg.avif')] bg-cover bg-center h-screen  w-full">
            <motion.div 
                className="relative top-64 md:w-2/3 w-2/2 mx-auto"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                <motion.h1 
                    className="font-medium md:text-8xl text-5xl text-[#FFFFFF] text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    Timeless Comfort & Endless Luxury
                </motion.h1>
                
                <motion.div
                    className="md:flex grid justify-center gap-3 pt-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0, duration: 1 }}
                >
                    <a className="text-[#8D493A] hover:bg-[#AB855D] hover:font-semibold text-center bg-[#F8EDE3] md:px-5 px-32 py-3 rounded-md duration-300 cursor-pointer">
                        Our Vision
                    </a>
                    <a className="text-[#FFFFFF] border hover:border-[#F8EDE3] hover:bg-[#F8EDE3] hover:text-[#8D493A] text-center duration-300 px-6 py-3 rounded-md cursor-pointer">
                        Explore Expertise
                    </a>
                </motion.div>
            </motion.div>
        </div>
    )
};