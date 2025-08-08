import Link from "next/link";

export const GetInTouchSection = () => {
    return (
        <div className="bg-[url('/get-in-touch-banner.avif')] relative bg-cover bg-center h-screen">
            <div className="bg-[#F8EDE3] flex flex-col mx-auto my-auto rounded-md justify-center items-center inset-0 absolute md:w-1/2 w-[360px] h-[290px] md:h-2/3">
                <h3 className="text-[#8D493A] md:w-3/4 w-4/5 text-center md:text-3xl text-xl font-normal">Ready to reimagine your space? Connect with us at Troscán to bring your vision to life with our expertise in design and decoration.</h3>
                <Link href='/about' className="text-[#F8EDE3] bg-[#8D493A] py-3 mt-3 px-5 rounded-sm">Get In Touch</Link>
            </div>
        </div>
    )
};