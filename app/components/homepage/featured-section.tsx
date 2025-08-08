"use client";

import Image from "next/image";
import featured_img1 from "@/public/featured-img1.avif";
import featured_img2 from "@/public/featured-img2.avif";
import featured_img3 from "@/public/featured-img3.avif";
import featured_img4 from "@/public/featured-img4.avif";
import featured_img5 from "@/public/featured-img5.avif";
import featured_img6 from "@/public/featured-img6.avif";
import Link from "next/link";
import projects from "@/app/lib/projects.json";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const FeaturedSection = () => {
    const ref = useRef(null);
    
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    });
    
    // Image split transforms
    const moveLeft = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const moveRight = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const moveUp = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const moveDown = useTransform(scrollYProgress, [0, 1], [0, 100]);

    // Heading opacity and scale
    const headingOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
    const headingScale = useTransform(scrollYProgress, [0.2, 0.6], [0.8, 1]);
    
    return (
        <div ref={ref} className="mx-auto pt-64">
            <div className="md:flex grid md:block hidden justify-center items-center gap-10">
                <motion.div style={{ x: moveLeft, y: moveUp }}>
                        <Image src={featured_img1} width={250} height={100} alt="" className="rounded-md" />
                    </motion.div>
                    <motion.div style={{ y: moveUp }}>
                        <Image src={featured_img3} width={250} height={100} alt="" className="rounded-md" />
                    </motion.div>
                    <motion.div style={{ x: moveRight, y: moveUp }}>
                        <Image src={featured_img2} width={250} height={100} alt="" className="rounded-md" />
                </motion.div>
            </div>

            <motion.h4
                style={{
                    opacity: headingOpacity,
                    scale: headingScale,
                }}
                className="text-4xl font-normal text-[#8D493A] text-center md:w-[500px] mx-auto z-10"
            >
                Transforming spaces with style, through Troscán's exquisite design expertise.
            </motion.h4>

            <div className="md:flex grid md:block hidden justify-center items-center md:gap-10">
                <motion.div style={{ x: moveLeft, y: moveDown }}>
                        <Image src={featured_img5} width={250} height={100} alt="" className="rounded-md" />
                    </motion.div>
                    <motion.div style={{ y: moveDown }}>
                        <Image src={featured_img4} width={250} height={100} alt="" className="rounded-md" />
                    </motion.div>
                    <motion.div style={{ x: moveRight, y: moveDown }}>
                        <Image src={featured_img6} width={250} height={100} alt="" className="rounded-md" />
                </motion.div>
            </div>

            <div className="mt-28"/>

            {
                projects.slice(0, 3).map((project, index) => (
                    <motion.div 
                        key={index} 
                        className="shadow-2xl relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${project.image})`}}
                    >
                        <div className="absolute items-center justify-center flex flex-col inset-0">
                            <span className="text-[#FFFFFF] pb-7">{project.id}</span>
                            <h1 className="text-4xl text-[#FFFFFF] text-center font-medium">{project.title}</h1>
                            <p className="font-medium text-[#FFFFFF] py-3">{project.description}</p>
                            <Link href={`/projects/${project.title}`} className="text-[#8D493A] py-3 px-5 bg-[#F8EDE3] rounded-sm">
                                View Project
                            </Link>
                        </div>
                    </motion.div>
                ))
            }
        </div>
    )
};