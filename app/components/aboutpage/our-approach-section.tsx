import Image from "next/image";
import our_approach_img from "@/public/our-approach-img.avif";

export const OurApproachSection = () => {
    return (
        <div className="md:flex justify-between md:mx-14 mx-4.5 mt-32 mb-36">
            <div className="md:w-1/3 w-3/3">
                <div className="flex gap-2 items-center">
                    <div className="w-1 h-1 rounded-full bg-[#8D493A]"/>
                    <span className="text-[#8D493A]">Our Approach</span>
                </div>
                <h1 className="text-[#8D493A] md:text-6xl text-5xl font-normal">A Vision Shaped by Elegance and Expertise</h1>
                <p className="text-[#8D493A] md:mt-28 mt-5 mb-7">We believe every space should tell a story that reflects its unique personality and the people who inhabit it.</p>
                <p className="text-[#8D493A] md:mb-0 mb-4">With a thoughtful and intentional approach, we design spaces that exude balance, harmony, and authenticity. Our process is collaborative and meticulous, grounded in the philosophy that true beauty lies in the subtle details that make a space feel like home.</p>
            </div>
            <Image src={our_approach_img} width={600} alt="" className="rounded-lg"/>
        </div>
    )
};