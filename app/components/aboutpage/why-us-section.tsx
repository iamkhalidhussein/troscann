import why_us_lists from "@/app/lib/why-us-lists.json";
import Image from "next/image";

export const WhyUsSection = () => {
    return (
        <div>
            <div className="flex items-center justify-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-[#8D493A] rounded-full"/>
                <span className="text-[#8D493A]">Why Us?</span>
            </div>
            <h1 className="text-[#8D493A] md:text-6xl text-5xl md:w-2/4 text-center mx-auto font-medium">Elevate Your Space with Expertise & Elegance</h1>

            <div className="md:flex grid items-center mx-10 pt-14 pb-36 gap-5 justify-center">
                
                {
                    why_us_lists.map((list, index) => (
                        <div key={index} className="text-[#8D493A] rounded-md bg-[#FFFFFF] pt-5 pb-12 text-center">
                            <div className="bg-[#F8EDE3B3] flex justify-center mx-auto rounded-md py-2 w-12">
                                <Image src={list.image} width={30} height={30} alt=""/>
                            </div>
                            <h4 className="text-2xl w-3/4 mx-auto py-3">{list.title}</h4>
                            <p className="w-3/4 mx-auto">{list.description}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
};