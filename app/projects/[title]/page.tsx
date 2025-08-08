import projectDetails from "@/app/lib/project-details.json";
import Image from "next/image";
import Link from "next/link";
import projects from "@/app/lib/projects.json";

type PageProps = {
    params: Promise<{
      title: string;
    }>;
  };


const Project = async ({ params }: PageProps) => {
    const { title } = await params;
    const project = projectDetails.find(project => project.title === title);
    
    return (
        <div className="mb-44">
            <div className="relative">
                {project?.image && (
                    <Image src={project?.image} width={400} height={400} alt="" className="w-full h-screen bg-cover"/>
                )}
                <div className="md:flex justify-between mx-auto items-baseline-last absolute md:left-10 left-2 bottom-10">
                    <h1 className="text-[#FFFFFF] md:text-7xl text-4xl font-medium md:w-1/2 w-2/3">{project?.title}</h1>
                    <h5 className="text-[#FFFFFF] md:text-2xl text-xl font-medium md:w-2/7 w-2/3 md:mt-0 mt-2">{project?.description}</h5>
                </div>
            </div>

            <div className="md:flex justify-center gap-5 my-36 mx-3">
                {project?.image2 && (
                    <Image src={project?.image2} width={600} height={100} alt="" className="rounded-md h-1/2 md:sticky top-0"/>
                )}
                <div className="text-[#8D493A] rounded-md p-10 bg-[#FFFFFF]">
                    <h5 className="text-2xl pb-12 font-normal">{project?.overview}</h5>
                    
                    <h4 className="text-2xl font-medium pb-5">{project?.image2title}</h4>
                    <p className="pb-5">{project?.image2description}</p>
                    {project?.image3 && (
                        <Image src={project?.image3} width={400} height={100} alt="" className="object-cover w-full rounded-md"/>
                    )}
                    
                    <h4 className="mt-20 text-2xl font-medium pb-5">{project?.image3title}</h4>
                    <p className="pb-5">{project?.image3description}</p>
                    {project?.image4 && (
                        <Image src={project?.image4} width={400} height={100} alt="" className="object-cover w-full rounded-md"/>
                    )}
                    
                    <h4 className="text-2xl font-medium mt-20 pb-5">{project?.image4title}</h4>
                    <p className="pb-5">{project?.image4description}</p>
                    {project?.image5 && (
                        <Image src={project?.image5} width={400} height={100} alt="" className="object-cover w-full rounded-md"/>
                    )}
                    
                    <h4 className="text-2xl mt-20 font-medium pb-5">{project?.image6title}</h4>
                    <p className="pb-5">{project?.image6description}</p>
                    {project?.image6 && (
                        <Image src={project?.image6} width={400} height={100} alt="" className="object-cover w-full rounded-md"/>
                    )}
                    
                    <h4 className="text-2xl font-medium mt-20 pb-5">{project?.image6title}</h4>
                    <p className="pb-5">{project?.image6description}</p>
                    {project?.image7 && (
                        <Image src={project?.image7} width={400} height={100} alt="" className="object-cover w-full rounded-md"/>
                    )}
                </div>
            </div>

            <div className="md:flex justify-between items-baseline-last mb-16 md:mx-12 mx-3">
                <div className="mb-3 mt-4">
                    <div className="flex items-center gap-1.5">
                        <div className="h-1.5 w-1.5 bg-[#8D493A] rounded-full"/>
                        <span className="text-[#8D493A]">Next Project</span>
                    </div>
                    <h1 className="text-[#8D493A] md:text-6xl text-4xl md:w-2/3 w-3/3">On to the Next Masterpiece</h1>
                </div>
                <Link href={`/projects`} className="text-[#FFFFFF] md:py-2 py-3 px-6 rounded-md bg-[#8D493A]">View All Projects</Link>
            </div>

            <div className="md:flex grid gap-6 mt-14 justify-center mx-12">
                {
                    projects.slice(4, 6).map((project, index) => (
                        <div key={index}>
                                <Link href={`/projects/${project.title}`}>
                                    <Image 
                                        width={600} 
                                        height={100} 
                                        src={project?.image} 
                                        className="w-full rounded-md h-2/3" 
                                        alt=""
                                    />
                                    <h4 className="text-[#8D493A] text-2xl font-medium py-1.5">{project.title}</h4>
                                    <p className="text-[#8D493A]">{project.description}</p>
                                </Link>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Project;