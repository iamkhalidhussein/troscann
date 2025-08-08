import Image from "next/image";
import contact_banner_img from "@/public/contact-banner-img.avif";

export const metadata = {
    title: "Contact Us - Troscan",
};

const Contact = () => {
    return (
        <div className="md:mt-48 mt-32 mb-32">
            <h1 className="text-[#8D493A] md:text-8xl text-5xl md:w-1/2 mx-auto text-center font-medium">Let's Bring Your Vision to Life</h1>

            <div className="md:flex grid md:mt-14 mt-6 justify-center gap-6 mx-14">
                <Image 
                    src={contact_banner_img} 
                    width={500} 
                    height={100} 
                    alt="" 
                    className="rounded-md h-full"
                />
                <div className="bg-[#F7E9DC] p-16 md:w-2/3 border border-[#ECD8CC] rounded-md">
                    <ContactForm/>
                </div>
            </div>
        </div>
    )
};

export default Contact;

const ContactForm = () => {
    return (
        <form className="grid">
            <div className="flex gap-3">
                <input 
                    type="text" 
                    className="w-1/2 border border-[#ECD8CC] py-2.5 pl-4 rounded-md" placeholder="First Name"
                />
                <input 
                    type="text" 
                    className="w-1/2 border border-[#ECD8CC] rounded-md pl-4" placeholder="Last Name"
                />
            </div>
            <input 
                type="email" 
                className="border mt-3 border-[#ECD8CC] rounded-md py-2.5 pl-4" placeholder="Email"
            />
            <input 
                type="number" 
                className="border mt-3 border-[#ECD8CC] rounded-md py-2.5 pl-4" placeholder="Phone"
            />
            <textarea 
                placeholder="Message" 
                className="pl-4 mt-4 border border-[#ECD8CC] pt-4 rounded-md h-52"
            />
            <button type="submit" className="bg-[#8D493A] text-[#FFFFFF] mt-4 py-2.5 rounded-md">Submit</button>
        </form>
    )
};