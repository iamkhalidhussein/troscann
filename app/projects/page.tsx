import Image from "next/image";
import projects from "@/app/lib/projects.json";
import Link from "next/link";

export const metadata = {
    title: "Projects - Troscan",
};

const Projects = () => {
    console.log('projects', projects);
    return (
        <div className="mt-44 mb-28">
            <h1 className="text-[#8D493A] md:text-8xl text-6xl md:w-1/2 mx-auto font-medium text-center">Where Vision Meets Design</h1>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-14 justify-center md:mx-12 mx-5">
                {
                    projects.slice(0, 3).map((project, index) => (
                        <div key={index}>
                            <Link href={`/projects/${project.title}`}>
                                <Image width={600} height={100} src={project?.image} className="w-full rounded-md h-96" alt=""/>
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

export default Projects;