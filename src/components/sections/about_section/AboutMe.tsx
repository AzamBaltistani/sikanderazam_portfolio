import type { ReactNode } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithubSquare, FaLinkedin, FaReact, FaPython, FaDatabase } from "react-icons/fa";
import { SiDjango, SiMongodb, SiFirebase, SiScikitlearn, SiHuggingface, SiPytorch, SiTensorflow } from "react-icons/si";
import { BiNetworkChart } from "react-icons/bi";
import SocialLink from "../SocialLink";

type TechStackProps = {
    techDomain: string;
    icon: ReactNode;
    name: string;
};

const TechStackItem = ({ icon, name }: TechStackProps) => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full p-0.5">
            <div className="h-[60%] w-full">
                {icon}
            </div>
            <p className="h-[40%] w-full text-nowrap truncate text-xs text-center">
                {name}
            </p>
        </div>
    )
}

const AboutMe = () => {
    const techStacks = [
        // Backend & API
        {
            name: "Django",
            techDomain: "Backend",
            icon: <SiDjango className="w-full h-full p-0 m-0" />
        },
        {
            name: "Python",
            techDomain: "Backend / AI",
            icon: <FaPython className="w-full h-full p-0 m-0" />
        },
        {
            name: "RESTful API",
            techDomain: "API",
            icon: <BiNetworkChart className="w-full h-full p-0 m-0" />
        },

        // Frontend
        {
            name: "React",
            techDomain: "Frontend",
            icon: <FaReact className="w-full h-full p-0 m-0" />
        },
        {
            name: "TailwindCSS",
            techDomain: "Frontend",
            icon: <RiTailwindCssFill className="w-full h-full p-0 m-0" />
        },

        // AI / Machine Learning
        {
            name: "TensorFlow",
            techDomain: "Artificial Intelligence / Machine Learning",
            icon: <SiTensorflow className="w-full h-full p-0 m-0" />
        },
        {
            name: "PyTorch",
            techDomain: "Artificial Intelligence / Machine Learning",
            icon: <SiPytorch className="w-full h-full p-0 m-0" />
        },
        {
            name: "Scikit-learn",
            techDomain: "Machine Learning",
            icon: <SiScikitlearn className="w-full h-full p-0 m-0" />
        },
        {
            name: "Hugging Face Transformers",
            techDomain: "Natural Language Processing",
            icon: <SiHuggingface className="w-full h-full p-0 m-0" />
        },

        // Database
        {
            name: "MongoDB",
            techDomain: "Database",
            icon: <SiMongodb className="w-full h-full p-0 m-0" />
        },
        {
            name: "SQL",
            techDomain: "Database",
            icon: <FaDatabase className="w-full h-full p-0 m-0" />
        },
        {
            name: "Firebase",
            techDomain: "Backend / Hosting / Database",
            icon: <SiFirebase className="w-full h-full p-0 m-0" />
        }


    ];

    return (
        <section
            id="about"
            className="w-full min-h-[90vh] container flex"
        >
            <div className="flex flex-col h-[90%] w-full items-center justify-center">
                <div className="flex w-full items-center justify-center p-1 md:p-2 not-md:flex-col-reverse">
                    <div className="flex w-full md:w-[50%] flex-col justify-center items-end md:items-end ">
                        <div className="flex flex-col w-full md:w-[65%] lg:w-[60%] xl:w-[50%] gap-1 px-2 not-md:items-center not-md:justify-center">
                            <div className="text-lg md:text-xl lg:text-2xl w-fit flex flex-col">
                                <p className="not-md:text-center not-md:mt-2 text-nowrap"> Hi, I am</p>
                                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                                    Sikander Azam
                                </h1>
                            </div>
                            <div>
                                <p className="font-light not-md:text-center">Full Stack Developer with strong AI and Machine Learning Background</p>
                            </div>
                            <div className="flex mt-3 md:mt-5 lg:mt-8 gap-1 md:gap-2">
                                <SocialLink link="https://github.com/AzamBaltistani" icon=<FaGithubSquare className="w-full h-full p-0 m-0" /> description={"Github"} />
                                <SocialLink link="https://www.linkedin.com/in/sikander-azam-899822265/" icon=<FaLinkedin className="w-full h-full p-0 m-0" /> description={"LinkedIn"} />
                            </div>
                        </div>
                    </div>

                    <div className="flex w-[50%] justify-start items-center not-md:justify-center">
                        <div className="flex md:w-[65%] lg:w-[60%] xl:w-[50%] justify-end px-2">
                            <div className="flex w-24 h-24 md:w-44 md:h-44 lg:w-60 lg:h-60 rounded-full border-2 border-black">
                                <img src="src/assets/profile/image_nobg.png" className="w-full h-full object-contain rounded-full" alt="Sikander Azam" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full items-center justify-center pt-4 md:pt-6 lg:pt-8">
                    <div className="flex w-full md:w-[85%] lg:w-[80%] xl:w-[70%] px-2 items-center not-md:flex-col gap-4 justify-center">
                        <h4 className="font-semibold pr-1 md:pr-2 w-fit text-nowrap md:border-r-2 md:border-r-black md:dark:border-r-white">Tech Stack</h4>

                        <ScrollArea className="w-full md:w-fit flex p-0 m-0 translate-0 overflow-hidden items-center justify-center">
                            <div className="flex py-3 items-center justify-center ">

                                {techStacks.map((stack, index) => (
                                    <div className="flex items-center w-16 md:w-16 h-12 md:h-12" key={index}>
                                        <TechStackItem name={stack.name} icon={stack.icon} techDomain={stack.techDomain} />
                                    </div>
                                ))}
                            </div>
                            <ScrollBar orientation="horizontal" className="" />
                        </ScrollArea>
                    </div>
                </div>
            </div>

        </section >
    );
};

export default AboutMe;