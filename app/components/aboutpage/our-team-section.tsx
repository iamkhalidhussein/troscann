import Image from "next/image";
import Link from "next/link";
import teamMembers from "@/app/lib/our-teams.json";

export const OurTeamSection = () => {
    return (
        <div className="mb-32">
            <div className="flex items-center mx-auto w-20 gap-1">
                <div className="w-1.5 h-1.5 bg-[#8D493A] rounded-full"/>
                <span className="text-[#8D493A]">Our Team</span>
            </div>

            <h1 className="text-[#8D493A] text-5xl text-center mx-auto md:w-1/3 font-medium">Meet the Visionaries Behind Troscan</h1>

            <div className="grid md:grid-cols-3 grid-cols-1 gap-10 mt-20 md:mx-12 mx-5 justify-center">
                {
                    teamMembers.map((member) => (
                        <div key={member.id} className="text-[#8D493A] rounded-md">
                            <Image 
                                src={member.image} 
                                width={400} 
                                height={100} 
                                alt="" 
                                className="rounded-t-md h-2/3 w-full"
                            />
                            <div className="bg-[#FFFFFF] pl-5 rounded-b-md pb-7">
                                <h4 className="text-2xl pt-6 leading-1.5">{member.name}</h4>
                                <p className="leading-12 pb-3">{member.role}</p>
                                <Link href='/contact' className="bg-[#F8EDE3] font-medium py-2.5 px-7">
                                    Contact
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
};