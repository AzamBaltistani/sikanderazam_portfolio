import { Code, Database, Cpu, Wrench } from "lucide-react";

const skillsData = [
    {
        category: "Frontend",
        icon: <Code className="w-6 h-6 text-primary" />,
        skills: ["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript", "HTML5", "CSS3"]
    },
    {
        category: "Backend",
        icon: <Cpu className="w-6 h-6 text-primary" />,
        skills: ["Django", "REST APIs", "Node.js", "GraphQL"]
    },
    {
        category: "Databases",
        icon: <Database className="w-6 h-6 text-primary" />,
        skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"]
    },
    {
        category: "AI & ML",
        icon: <Cpu className="w-6 h-6 text-primary" />,
        skills: ["TensorFlow", "Scikit-learn", "OpenAI API", "LangChain"]
    },
    {
        category: "Tools",
        icon: <Wrench className="w-6 h-6 text-primary" />,
        skills: ["Git", "Docker", "VS Code", "Postman", "Figma"]
    }
];

const MySkills = () => {
    return (
        <section
            id="skills"
            className="w-full min-h-full container px-4 md:px-8 lg:px-14 py-12"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Skills & Expertise
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillsData.map((category, index) => (
                    <div
                        key={index}
                        className="border border-gray-300 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-lg dark:shadow-gray-300 transition"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            {category.icon}
                            <h3 className="text-xl font-semibold">{category.category}</h3>
                        </div>
                        <ul className="flex flex-wrap gap-2 cursor-default">
                            {category.skills.map((skill, i) => (
                                <li
                                    key={i}
                                    className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-all text-sm"
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MySkills;
