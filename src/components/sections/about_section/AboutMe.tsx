import type { ReactNode } from "react";

import { RiTailwindCssFill, RiOpenaiFill } from "react-icons/ri";
import { FaGithubSquare, FaLinkedin, FaReact, FaPython, FaDatabase } from "react-icons/fa";
import { SiDjango, SiMongodb, SiScikitlearn, SiTensorflow } from "react-icons/si";
import { LuBrainCircuit } from "react-icons/lu";
import { BiNetworkChart } from "react-icons/bi";
import SocialLink from "../SocialLink";

type TechStackProps = {
    techDomain: string;
    icon: ReactNode;
    name: string;
};

const TechStackItem = ({ icon, name }: TechStackProps) => {
    return (
        <div className="flex flex-col items-center justify-center h-16 basis-1/4 md:basis-1/6 lg:basis-1/8 flex-none border rounded">
            <div className="flex w-full h-10 justify-center items-center">{icon}</div>
            <div className="h-6 text-center text-nowrap text-xs md:text-sm truncate">
                {name}
            </div>
        </div>
    )
}

const AboutMe = () => {
    const techStacks = [
        // Backend & API
        {
            name: "Django",
            techDomain: "Backend",
            icon: <SiDjango className="h-full w-full p-0.5 md:p-1" />
        },
        {
            name: "Python",
            techDomain: "Backend / AI",
            icon: <FaPython className="h-full w-full p-0.5 md:p-1" />
        },
        {
            name: "RESTful API",
            techDomain: "API",
            icon: <BiNetworkChart className="h-full w-full p-0.5 md:p-1" />
        },

        // Frontend
        {
            name: "React",
            techDomain: "Frontend",
            icon: <FaReact className="h-full w-full p-0.5 md:p-1" />
        },
        {
            name: "TailwindCSS",
            techDomain: "Frontend",
            icon: <RiTailwindCssFill className="h-full w-full p-0.5 md:p-1" />
        },

        // AI / Machine Learning
        {
            name: "AI",
            techDomain: "Artificial Intelligence / Machine Learning",
            icon: <LuBrainCircuit className="h-full w-full p-0.5 md:p-1" />

        },
        {
            name: "Chatbots/LLM",
            techDomain: "Artificial Intelligence / Natural Language Processing",
            icon: <RiOpenaiFill className="h-full w-full p-0.5 md:p-1" />
        },
        {
            name: "TensorFlow",
            techDomain: "Artificial Intelligence / Machine Learning",
            icon: <SiTensorflow className="h-full w-full p-0.5 md:p-1" />
        },
        {
            name: "Scikit-learn",
            techDomain: "Machine Learning",
            icon: <SiScikitlearn className="h-full w-full p-0.5 md:p-1" />
        },
        // Database
        {
            name: "MongoDB",
            techDomain: "Database",
            icon: <SiMongodb className="h-full w-full p-0.5 md:p-1" />
        },
        {
            name: "SQL",
            techDomain: "Database",
            icon: <FaDatabase className="h-full w-full p-0.5 md:p-1" />
        }
    ];

    return (
        <section
            id="about"
            className="w-full min-h-[90vh] container flex"
        >
            <div className="flex flex-col h-[100%] w-full items-center justify-center">
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
                                <p className="font-light not-md:text-center">Full Stack Developer with AI and Machine Learning Capabilities</p>
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
                                <img src="/sikanderazam_portfolio/profile/image_nobg.png" className="w-full h-full object-contain rounded-full" alt="Sikander Azam" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full items-center justify-center pt-4 md:pt-6 lg:pt-8">
                    <div className="flex flex-col w-full md:w-[85%] lg:w-[80%] xl:w-[70%] px-2 items-center gap-4 justify-center">
                        <h4 className="font-semibold w-fit text-nowrap md:text-lg lg:text-xl">Technologies</h4>
                        <div className="flex flex-wrap justify-center gap-2 w-full h-full">
                            {techStacks.map((stack, index) => (
                                <TechStackItem icon={stack.icon} name={stack.name} techDomain={stack.techDomain} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </section >
    );
};

export default AboutMe;