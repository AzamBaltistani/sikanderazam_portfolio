import ScreenshotsBox from "./ScreenshotsBox";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface Project {
    images: string[];
    title: string;
    keyPoints: string[];
    tech: string[];
    github?: string;
    live?: string;
    demo?: string;
}

interface ProjectCardProps {
    project: Project;
    index: number;
}

const ProjectCardH = ({ project, index }: ProjectCardProps) => {
    const isOdd = index % 2 == 1;
    return (
        <div className="flex flex-col w-full max-h-[70vh] h-[70vh] md:max-h-[60vh] md:h-[60vh] p-3 rounded-2xl">
            {/* Top Content */}
            <div className={`flex flex-col-reverse h-[100%] gap-3 ${isOdd ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                {/* Image Carousel */}
                <div className="flex h-1/3 md:h-full w-full md:w-[50%] overflow-hidden ">
                    <ScreenshotsBox images={project.images} isOdd={isOdd} />
                </div>

                {/* Project Details */}
                <div className="flex flex-col h-2/3 md:h-full w-full md:w-[50%] md:px-3 justify-between">
                    <div className="flex w-full h-[70%] md:h-[75%] flex-col justify-center">
                        {/* Title */}
                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 pb-2 text-center md:text-start">
                            {project.title}
                        </h2>

                        {/* Key Points */}
                        <ul className="flex flex-col space-y-1 overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-400 dark:scrollbar-thumb-neutral-600 scrollbar-track-transparent scroll-m-0.5 pr-2">
                            {project.keyPoints.map((point, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm w-full"
                                >
                                    <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                                    <span className="not-md:text-justify w-full">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="h-[20%] md:h-[15%] flex flex-col items-center justify-center">
                        <div className="flex gap-2 h-fit items-center justify-start px-2 overflow-x-auto scrollbar-thin scrollbar-thumb-neutral-400 dark:scrollbar-thumb-neutral-600 scrollbar-track-transparent w-full py-1 overflow-y-hidden space-y-1 scroll-m-0.5">
                            {project.tech.map((t, i) => (
                                <code
                                    key={i}
                                    className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-xs md:text-sm font-light text-nowrap"
                                >
                                    {t}
                                </code>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center justify-center h-[10%] p-2 gap-2 md:gap-4 ">
                        <div className="flex items-center gap-3 text-nowrap">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition hover:text-shadow-2xs dark:text-shadow-white not-md:text-xs"
                                >
                                    <FaGithub className="h-4 w-4" />
                                    Code
                                </a>
                            )}
                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition hover:text-shadow-2xs dark:text-shadow-white not-md:text-xs"
                                >
                                    <ExternalLink className="h-4 w-4" />
                                    Live Page
                                </a>
                            )}
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition hover:text-shadow-2xs dark:text-shadow-white not-md:text-xs"
                                >
                                    <ExternalLink className="h-4 w-4" />
                                    Demo
                                </a>
                            )}
                        </div>

                        {/* Show Details Button */}
                        {/* <button className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition hover:text-shadow-2xs dark:text-shadow-white text-nowrap not-md:text-xs">
                            <ListCollapse className="h-4 w-4" />
                            Show Details
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCardH;
