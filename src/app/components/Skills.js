const skills = [
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Laravel",
    "PHP",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Prisma",
    "Git",
    "GitHub",
];

export default function Skills() {
    return (
        <section id="skills" className="bg-white px-6 py-24">
            <div className="mx-auto max-w-6xl">

                {/* Heading */}
                <div className="mb-12">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
                        My Skills
                    </p>

                    <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
                        Technologies I Work With
                    </h2>

                    <p className="mt-4 max-w-2xl text-lg text-gray-600">
                        Here are some of the technologies and tools I use to
                        design and develop modern web applications.
                    </p>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-4">
                    {skills.map((skill) => (
                        <div
                            key={skill}
                            className="rounded-lg border border-gray-200 bg-gray-50 px-5 py-3 font-medium text-gray-700 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 hover:shadow-md"
                        >
                            {skill}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}