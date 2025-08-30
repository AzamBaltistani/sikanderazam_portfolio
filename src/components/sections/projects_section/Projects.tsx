import CopySectionLink from "../CopySectionLink";
import ProjectCardH from "./ProjectCardH";
import projectsData from "../../../data/projects.json"

const Projects = () => {
    const projects = projectsData;

    return (
        <section id="portfolio" className="w-full py-16 flex justify-center items-start">
            <div className="container  h-fit">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                    Portfolio
                    <span>
                        <CopySectionLink sectionId="portfolio" />
                    </span>
                </h2>
                <div className="flex flex-col gap-2 md:gap-4 lg:gap-8 h-full w-full px-4 md:px-8 lg:px-10">
                    {projects.map((project, i) => (
                        <ProjectCardH key={i} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
