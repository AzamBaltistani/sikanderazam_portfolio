import CopySectionLink from "../CopySectionLink";
import ProjectCardH from "./ProjectCardH";

const Projects = () => {
    const projects = [
        {
            title: "Digital Library",
            keyPoints: [
                "Full Stack library application",
                "Django REST API & React integration",
                "Authentication and Payment integration",
                "Role-based access: Author, User, Admin",
                "Authors can add and manage books",
                "Users can buy or borrow books",
            ],
            tech: ["React", "Django", "Tailwind CSS", "PostgreSQL"],
            github: "https://github.com/yourusername/digital-library",
            live: "https://your-live-link.com",
            images: [
                "src/assets/screenshots/project1/img1.avif",
                "src/assets/screenshots/project1/img2.avif"
            ],
        },
        {
            title: "AI Chatbot",
            keyPoints: [
                "Conversational AI using OpenAI API",
                "Next.js front-end with Tailwind styling",
                "Context-aware and multi-turn chat  ",
                "Support for text & quick commands",
                "Deployed on Vercel with serverless functions",
            ],
            tech: ["Next.js", "Tailwind CSS", "OpenAI API"],
            github: "https://github.com/yourusername/ai-chatbot",
            live: "",
            images: [
                "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ],
        },
        {
            title: "AI Chatbot",
            keyPoints: [
                "Conversational AI using OpenAI API",
                "Next.js front-end with Tailwind styling",
                "Context-aware and multi-turn chat  ",
                "Support for text & quick commands",
                "Deployed on Vercel with serverless functions",
            ],
            tech: ["Next.js", "Tailwind CSS", "OpenAI API"],
            github: "https://github.com/yourusername/ai-chatbot",
            live: "",
            images: [
                "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ],
        },
        {
            title: "AI Chatbot",
            keyPoints: [
                "Conversational AI using OpenAI API",
                "Next.js front-end with Tailwind styling",
                "Context-aware and multi-turn chat  ",
                "Support for text & quick commands",
                "Deployed on Vercel with serverless functions",
            ],
            tech: ["Next.js", "Tailwind CSS", "OpenAI API"],
            github: "https://github.com/yourusername/ai-chatbot",
            live: "",
            demo: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            images: [
                "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ],
        },
        {
            title: "AI Chatbot",
            keyPoints: [
                "Conversational AI using OpenAI API",
                "Next.js front-end with Tailwind styling",
                "Context-aware and multi-turn chat  ",
                "Support for text & quick commands",
                "Deployed on Vercel with serverless functions",
            ],
            tech: ["Next.js", "Tailwind CSS", "OpenAI API"],
            github: "https://github.com/yourusername/ai-chatbot",
            live: "",
            images: [
                "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ],
        },
    ];

    return (
        <section id="portfolio" className="w-full py-16 flex justify-center items-start">
            <div className="container px-4 md:px-8 lg:px-14 h-fit">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                    Portfolio
                    <span>
                        <CopySectionLink sectionId="portfolio" />
                    </span>
                </h2>
                <div className="flex flex-col gap-10 md:gap-24 h-full w-full">
                    {projects.map((project, i) => (
                        <>
                            <ProjectCardH key={i} project={project} index={i} />
                            {/* <hr className="border-0 h-[1px] bg-gradient-to-r from-transparent via-neutral-500 dark:via-white to-transparent" /> */}
                        </>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
