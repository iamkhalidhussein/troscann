import Image from "next/image";
import news from "@/app/lib/news.json";
import Link from "next/link";
import { ParagraphWithGaps } from "@/app/utils/paragraph-with-gaps";

const NewsDetail = ({params}: { params: { title: string}}) => {
    const title = decodeURIComponent(params.title);
    const n = news.find(n => n.title === title);

    return (
        <div className="md:mt-48 mt-32 mb-48">
            <div className="md:flex justify-center items-center md:mb-52 mb-24 gap-10">
                {n?.image && (
                    <Image src={n?.image} width={600} height={100} alt="" className="rounded-md md:block hidden w-[470px] mx-auto"/>
                )}
                <div className="md:w-1/2 w-full px-4">
                    <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 bg-[#8D493A] rounded-full"/>
                        <span className="text-[#8D493A]">{n?.date}</span>
                    </div>
                    <h1 className="text-[#8D493A] py-1.5 md:text-6xl text-4xl font-medium">{n?.title}</h1>
                    <p className=" text-[#8D493A]">{n?.description}</p>
                </div>
                {n?.image && (
                    <Image src={n?.image} width={600} height={100} alt="" className="rounded-md md:hidden block mt-5 w-[470px] mx-auto"/>
                )}
            </div>

            <div className="p-9 rounded-md text-[#8D493A] mb-48 md:w-1/2 w-[450px] mx-auto bg-[#FFFFFF]">
                {n?.details && (
                    <ParagraphWithGaps text={n?.details} linesPerChunk={4}/>
                )}
            </div>

            <div className="flex items-baseline-last justify-between mb-16 mx-10 gap-10">
                <div className="md:w-1/3">
                    <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-[#8D493A] rounded-full"/>
                        <span className="text-[#8D493A]">Next News</span>
                    </div>
                    <h1 className="text-[#8D493A] font-medium text-4xl">What's Next</h1>
                </div>
                <Link href='/news' className="bg-[#8D493A] py-3 px-5 rounded-sm text-[#F8EDE3]">View All News</Link>
            </div>

            <div className="md:flex grid justify-center gap-5">
                { 
                    news.slice(3, 6).map((n, index) => (
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
    );
};

export default NewsDetail;