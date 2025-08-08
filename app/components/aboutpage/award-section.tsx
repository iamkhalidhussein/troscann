import Awards_Recognitions from "@/app/lib/awards&recognitions.json";
import React from "react";

export const AwardSection = () => {
    return (
        <div className="md:mx-10 mx-4.5 mb-44">
            <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-[#8D493A] rounded-full"/>
                <span className="text-[#8D493A]">Awards & Recognition</span>
            </div>
            
            <h1 className="text-[#8D493A] text-5xl md:w-3/7 w-3/3 pb-10 font-normal">Our Achievements: Celebrating Excellence in Design</h1>

            {
                Awards_Recognitions.map((anr) => (
                    <React.Fragment key={anr.id}>
                        <div className="text-[#8D493A] md:flex grid gap-5 text-xl justify-between">
                            <h5 className="md:w-2/20">{anr.title}</h5>
                            <h5 className="md:w-2/7">{anr.description}</h5>
                            <h5>{anr.year}</h5>
                        </div>
                        <hr className="border-[#8D493A] my-3.5 w-full"/>
                    </React.Fragment>
                ))
            }
        </div>
    )
};