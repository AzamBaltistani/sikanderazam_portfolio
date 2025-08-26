import CopySectionLink from "../CopySectionLink";
import educationData from "../../../data/education_data.json"

const Education = () => {
    return (
        <section id="education" className="w-full min-h-[60vh] container flex flex-col items-center justify-center py-10 px-2">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-8">
                Education
                <span>
                    <CopySectionLink sectionId="education" />
                </span>
            </h2>

            <div className="w-full max-w-3xl flex flex-col gap-6">
                {educationData.map((edu, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-300 dark:border-gray-600 pb-4"
                    >
                        <div className="flex flex-col">
                            <h3 className="text-lg font-semibold text-black dark:text-white">
                                {edu.title}
                            </h3>
                            <span className="text-sm text-gray-600 dark:text-gray-300">
                                {edu.institute}
                            </span>
                        </div>
                        <span className="mt-2 md:mt-0 text-sm text-gray-500 dark:text-gray-400">
                            {edu.period}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
