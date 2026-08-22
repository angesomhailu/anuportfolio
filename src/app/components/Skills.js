import {
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiLaravel,
    SiPhp,
    SiHtml5,
    SiCss,
    SiTailwindcss,
    SiMysql,
    SiPostgresql,
    SiMongodb,
    SiPrisma,
    SiGit,
    SiGithub
} from "react-icons/si";

const skills = [
    { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
    { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
    { name: "Express.js", icon: SiExpress, color: "text-gray-800 dark:text-gray-200" },
    { name: "Laravel", icon: SiLaravel, color: "text-[#FF2D20]" },
    { name: "PHP", icon: SiPhp, color: "text-[#777BB4]" },
    { name: "HTML", icon: SiHtml5, color: "text-[#E34F26]" },
    { name: "CSS", icon: SiCss, color: "text-[#1572B6]" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
    { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
    { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
    { name: "Prisma", icon: SiPrisma, color: "text-[#2D3748] dark:text-white" },
    { name: "Git", icon: SiGit, color: "text-[#F05032]" },
    { name: "GitHub", icon: SiGithub, color: "text-black dark:text-white" },
];

export default function Skills() {
    return (
        <section id="skills" className="bg-white px-6 py-24 transition-colors duration-300 dark:bg-gray-950">
            <div className="mx-auto max-w-6xl">

                {/* Heading */}
                <div className="mb-12">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
                        My Skills
                    </p>

                    <h2 className="text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
                        Technologies I Work With
                    </h2>

                    <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                        Here are some of the technologies and tools I use to
                        design and develop modern web applications.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {skills.map((skill) => {
                        const Icon = skill.icon;
                        return (
                            <div
                                key={skill.name}
                                className="group flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50 p-6 font-medium text-gray-700 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-white hover:text-blue-600 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:bg-gray-800 dark:hover:text-blue-400"
                            >
                                <Icon className={`mb-3 text-4xl transition-transform duration-300 group-hover:scale-110 ${skill.color}`} />
                                <span className="text-center text-sm font-semibold tracking-wide text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                    {skill.name}
                                </span>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
