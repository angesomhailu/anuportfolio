import {
    FiGithub,
    FiExternalLink,
} from "react-icons/fi";

const projects = [
    {
        title: "Movie Streaming Platform",
        description:
            "A full-stack movie streaming platform with authentication, movie management, favorites, and an admin dashboard.",
        technologies: [
            "Next.js",
            "React",
            "Node.js",
            "Express",
            "Prisma",
            "PostgreSQL",
        ],
        github: "#",
        demo: "#",
    },
    {
        title: "Student Registration System",
        description:
            "A web-based student registration system for managing students, courses, enrollment, batches, and payments.",
        technologies: [
            "Laravel",
            "PHP",
            "MySQL",
            "Bootstrap",
        ],
        github: "#",
        demo: "#",
    },
    {
        title: "Car Rental System",
        description:
            "A car rental management application that allows users to browse vehicles and manage rental operations.",
        technologies: [
            "Laravel",
            "PHP",
            "MySQL",
            "Bootstrap",
        ],
        github: "#",
        demo: "#",
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="bg-gray-50 px-6 py-24"
        >
            <div className="mx-auto max-w-6xl">

                {/* Heading */}
                <div className="mb-12">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
                        My Work
                    </p>

                    <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
                        Featured Projects
                    </h2>

                    <p className="mt-4 max-w-2xl text-lg text-gray-600">
                        Some of the projects I have developed using modern
                        web technologies.
                    </p>
                </div>

                {/* Projects */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >

                            {/* Project image placeholder */}
                            <div className="flex h-52 items-center justify-center bg-gray-100">
                                <span className="text-gray-400">
                                    Project Preview
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6">

                                <h3 className="text-xl font-bold text-gray-900">
                                    {project.title}
                                </h3>

                                <p className="mt-3 leading-7 text-gray-600">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-md bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="mt-6 flex items-center gap-5">

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 font-medium text-gray-700 transition hover:text-blue-600"
                                    >
                                        <FiGithub />
                                        GitHub
                                    </a>

                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 font-medium text-gray-700 transition hover:text-blue-600"
                                    >
                                        <FiExternalLink />
                                        Live Demo
                                    </a>

                                </div>
                            </div>
                        </article>
                    ))}

                </div>
            </div>
        </section>
    );
}