const education = [
    {
        degree: "Bachelor of Science in Software Engineering",
        institution: "Mekelle University",
        location: "Ethiopia",
        period: "2019/20 – 2026",
        description:
            "Studied software engineering with a focus on software development, web technologies, databases, algorithms, software architecture, and computer systems.",
        achievements: [
            "Graduated with a CGPA of 3.8 / 4.0.",
            "Developed multiple full-stack web applications.",
            "Worked with modern frontend and backend technologies.",
            "Completed a final-year software engineering project.",
        ],
    },
    {
        degree: "Bachelor of Arts in Business Management",
        institution: "Ethio Lens College",
        location: "Ethiopia",
        period: "2019/20 – 2024",
        description:
            "Studied business management with a focus on management principles, organizational behavior, business strategy, finance, and entrepreneurship.",
        achievements: [
            "Graduated with a CGPA of 3.98 / 4.0.",
            "Developed knowledge of business management and organizational practices.",
        ],
    },
];

export default function Education() {
    return (
        <section
            id="education"
            className="bg-gray-50 px-6 py-24 transition-colors duration-300 dark:bg-gray-900"
        >
            <div className="mx-auto max-w-6xl">

                {/* Heading */}
                <div className="mb-14">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
                        Education
                    </p>

                    <h2 className="text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
                        My Academic Journey
                    </h2>

                    <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
                        My academic background combines software engineering
                        with business management.
                    </p>
                </div>

                {/* Education cards */}
                <div className="space-y-8">

                    {education.map((item) => (
                        <article
                            key={`${item.degree}-${item.institution}`}
                            className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg md:p-9 dark:border-gray-800 dark:bg-gray-950"
                        >

                            {/* Header */}
                            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">

                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                        {item.degree}
                                    </h3>

                                    <p className="mt-2 text-lg font-semibold text-blue-600 dark:text-blue-400">
                                        {item.institution}
                                    </p>

                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                        {item.location}
                                    </p>
                                </div>

                                <div className="w-fit rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                                    {item.period}
                                </div>

                            </div>

                            {/* Description */}
                            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                                {item.description}
                            </p>

                            {/* Achievements */}
                            <div className="mt-7">
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                                    Highlights
                                </h4>

                                <ul className="mt-4 space-y-3">
                                    {item.achievements.map((achievement) => (
                                        <li
                                            key={achievement}
                                            className="flex gap-3 text-gray-600 dark:text-gray-300"
                                        >
                                            <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600" />

                                            <span>
                                                {achievement}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </article>
                    ))}

                </div>
            </div>
        </section>
    );
}