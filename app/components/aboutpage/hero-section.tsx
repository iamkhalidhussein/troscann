import Image from "next/image";
import about_hero_img from "@/public/about-banner.avif";

export const HeroSection = () => {
    return (
        <>
            <h1 className="text-5xl mx-auto mt-48 text-[#8D493A] text-center font-medium md:w-2/3 w-[410px]">Crafting Timeless Spaces with Style</h1>
            <Image src={about_hero_img} width={1200} alt="" className="rounded-2xl mx-auto mt-14 md:w-4/5 w-[430px]"/>
        </>
    )
};