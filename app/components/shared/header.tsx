"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HambergerMenu } from "../icons/hamberger-menu";
import { useState } from "react";
import { Close } from "../icons/close";

export const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <motion.nav
            className="fixed top-7 left-0 right-0 justify-between items-center py-2 px-5 rounded-xl border-0 bg-[#F8EDE3] inset-shadow-sm shadow-md md:w-1/2 md:mx-auto mx-2 flex z-10"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <Link href='/' className="text-[#8D493A] text-2xl font-medium">
                Troscan
            </Link>

            <ul className="md:flex hidden text-[#8D493A] font-medium gap-5">
                <Link href='/about'>About</Link>
                <Link href='/projects'>Projects</Link>
                <Link href='/news'>News</Link>
            </ul>
            
            {mobileMenu && (
            <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute top-full left-0 right-0 bg-[#F8EDE3] text-[#8D493A] font-medium flex flex-col items-center gap-4 py-4 md:hidden shadow-md rounded-b-md overflow-hidden z-10"
            >
                <Link href="/about" onClick={() => setMobileMenu(false)}>About</Link>
                <Link href="/projects" onClick={() => setMobileMenu(false)}>Projects</Link>
                <Link href="/news" onClick={() => setMobileMenu(false)}>News</Link>
                <Link
                href="/contact"
                className="bg-[#8D393A] text-[#F8EDE3] px-6 py-2 rounded"
                onClick={() => setMobileMenu(false)}
                >
                Contact Us
                </Link>
            </motion.ul>
            )}

            <Link
                href="/contact"
                className="bg-[#8D393A] md:block hidden text-[#F8EDE3] px-6 py-2.5 rounded"
            >
                Contact Us
            </Link>

            <button className="bg-[#8D493A] duration-300 text-[#FFFFFF] py-2 px-2.5 rounded-md md:hidden block" onClick={() => setMobileMenu(!mobileMenu)}>
                {mobileMenu ? <Close/> : <HambergerMenu/>}
            </button>

        </motion.nav>
    )
};