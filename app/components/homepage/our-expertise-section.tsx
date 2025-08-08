import Image from "next/image";
import our_expertise_banner from "@/public/our-expertise-banner.avif";
import services from "@/app/lib/services.json";
import React from "react";

export const OurExpertiseSection = () => {
    return (
        <div className="md:flex gap-6 md:my-60 my-24 items-center justify-center">
            <div className="w-1/2">
                <Image src={our_expertise_banner} width={670} alt="" className="h-[600px] md:block hidden"/>
            </div>

            <div className="mx-3">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#8D493A] rounded-full"/>
                    <span className="text-[#8D493A]">Our Expertise</span>
                </div>
                
                <h1 className="text-[#8D493A] w-3/3 md:text-5xl text-4xl md:font-semibold font-medium">Selecting the ideal elements to elevate your space</h1>

                <div className="text-[#8D493A] md:mt-32 mt-14">
                    {
                        services.map((service) => (
                            <React.Fragment key={service.id}>
                                <div className="flex gap-4">
                                    <span>01</span>
                                    <h4 className="text-2xl font-normal">{service.name}</h4>
                                </div>
                                <hr className="border-t-2 mt-2 w-full"/>
                            </React.Fragment>
                        ))
                    }
                </div>
            </div>
        </div>
    )
};