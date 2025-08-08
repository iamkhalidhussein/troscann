"use client";

import Image from "next/image";
import about_us_img from "@/public/about-us.avif";
import Link from "next/link";
import { motion } from "framer-motion";

export const AboutUsSection = () => {
    return (
        <div className="md:flex justify-between pt-44 mx-10">
            <motion.div
                className="w-2/5"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <LeftSideTexts/>
                <AboutUsBtn/>
            </motion.div>
            <ImageWithAnimation/>
        </div>
    )
};

const LeftSideTexts = () => {
    return (
        <div className="md:w-auto w-5/2">
            <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-[#8D493A] rounded-full" />
                <span className="text-[#8D493A]">About Us</span>
            </div>
            <h2 className="text-[#8D493A] md:text-6xl text-4xl font-medium">
                Where Spaces Inspire, and Design Comes Alive
            </h2>
            <p className="text-[#8D493A] pt-36 pb-7">
                At Troscán, we believe that every space has a story to tell. As a premier furniture design and room decorating agency.
            </p>
            <p className="text-[#8D493A] pb-6">
                Our expert team blends timeless craftsmanship with innovative designs, ensuring each piece and layout reflects your unique taste and lifestyle. Whether you're looking to reimagine your living room.
            </p>
        </div>
    )
};

const AboutUsBtn = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-4/3 mb-10"
        >
            <Link 
                href="/about" 
                className="md:px-5 px-6 w-full text-center md:py-3.5 py-3.5 mb-20 bg-[#8D493A] text-[#FFFFFF] rounded-sm"
            >
                More About Us
            </Link>
        </motion.div>
    )
};

const ImageWithAnimation = () => {
    return (
        <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.5 }}
        >
            <Image
                src={about_us_img}
                width={670}
                height={500}
                alt="about_us"
                className="rounded-xl"
            />
        </motion.div>
    )
};