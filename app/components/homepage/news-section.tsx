import Image from "next/image";
import Link from "next/link";
import news from "@/app/lib/news.json";

export const NewsSection = () => {
    return (
        <div className="my-32">
            <div className="md:flex items-baseline-last justify-between mb-16 md:mx-10 mx-3 gap-10">
                <div className="md:w-1/3 mb-4">
                    <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-[#8D493A] rounded-full"/>
                        <span className="text-[#8D493A]">News</span>
                    </div>
                    <h1 className="text-[#8D493A] md:text-5xl text-4xl">Stay Inspired with Interior Trends</h1>
                </div>
                <Link href='/news' className="bg-[#8D493A] py-3 px-5 rounded-sm text-[#F8EDE3]">View All News</Link>
            </div>

            <div className="md:flex grid mx-4 justify-center md:gap-5 gap-16">
                { 
                    news.slice(0, 3).map((n, index) => (
                        <div key={index}>
                            <Link href={`/news/${n.title}`}>
                                <Image 
                                    src={n.image} 
                                    width={400} 
                                    height={0} 
                                    alt="" 
                                    className="rounded-md h-3/4"
                                />
                                <div className="flex items-center gap-1 py-1">
                                    <div className="w-2 h-2 bg-[#8D493A] rounded-full"/>
                                    <span className="text-[#8D493A]">{n.date}</span>
                                </div>
                                <h4 className="text-[#8D493A] text-2xl max-w-[400px]">{n.title}</h4>
                                <p className="text-[#8D493A] font-normal">{n.description}</p>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};