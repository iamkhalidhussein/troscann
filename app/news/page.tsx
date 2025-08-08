import Image from "next/image";
import news from "@/app/lib/news.json";
import Link from "next/link";

export const metadata = {
    title: "News - Troscan",
};

const News = () => {
    return (
        <div className="mt-48 mb-32">
            <h1 className="text-[#8D493A] md:text-7xl text-5xl md:w-1/2 mx-auto text-center font-medium">Expert Insights and Design Inspiration</h1>
            
            <div className="grid md:grid-cols-3 grid-cols-1 mx-12 mt-6 md:gap-5 gap-12">
                {
                    news.map((n, index) => (
                    <div key={index}>
                        <Link href={`/news/${n.title}`}>
                            <Image 
                                src={n.image} 
                                width={400} 
                                height={0} 
                                alt="" 
                                className="rounded-md w-full mt-14 h-3/4"
                            />
                            <div className="flex items-center gap-1 py-1">
                                <div className="w-2 h-2 bg-[#8D493A] rounded-full"/>
                                <span className="text-[#8D493A]">{n.date}</span>
                            </div>
                            <h4 className="text-[#8D493A] text-2xl">{n.title}</h4>
                            <p className="text-[#8D493A] font-normal">{n.description}</p>
                        </Link>
                    </div>
                    ))
                }
            </div>
        </div>
    );
};

export default News;