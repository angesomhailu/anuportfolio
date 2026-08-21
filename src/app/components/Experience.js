const experiences = [
    {
        company: "Cross Light Africa",
        position: "Software Engineering Intern",
        location: "Ethiopia",
        period: "March 2025 – May 2025",
        description:
            "Worked on modern web application development, gaining practical experience in frontend development, backend integration, databases, state management, and payment integration.",
        responsibilities: [
            "Developed responsive user interfaces using React and Next.js.",
            "Built reusable UI components using Tailwind CSS and Shadcn UI.",
            "Implemented state management using Redux Toolkit.",
            "Designed and worked with MongoDB collections for application data.",
            "Developed CRUD functionality and integrated frontend applications with APIs.",
            "Worked on authentication and user profile functionality.",
            "Integrated Stripe payment functionality into a web application.",
            "Deployed web applications and development projects using Vercel.",
        ],
        technologies: [
            "React",
            "Next.js",
            "JavaScript",
            "Tailwind CSS",
            "Shadcn UI",
            "Redux Toolkit",
            "MongoDB",
            "Stripe",
            "Vercel",
        ],
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="bg-white px-6 py-24"
        >
            <div className="mx-auto max-w-6xl">

                {/* Heading */}
                <div className="mb-14">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
                        My Experience
                    </p>

                    <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
                        Where I've Worked
                    </h2>

                    <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
                        My professional experience and the technologies I have
                        worked with throughout my development journey.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">

                    {/* Vertical line */}
                    <div className="absolute left-3 top-0 hidden h-full w-px bg-gray-200 md:block" />

                    {experiences.map((experience) => (
                        <div
                            key={`${experience.company}-${experience.period}`}
                            className="relative md:pl-12"
                        >

                            {/* Timeline dot */}
                            <div className="absolute left-0 top-2 hidden h-7 w-7 items-center justify-center rounded-full border-4 border-white bg-blue-600 shadow md:flex" />

                            {/* Experience Card */}
                            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-7 shadow-sm transition duration-300 hover:shadow-lg md:p-9">

                                {/* Header */}
                                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">

                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">
                                            {experience.position}
                                        </h3>

                                        <p className="mt-2 text-lg font-semibold text-blue-600">
                                            {experience.company}
                                        </p>

                                        <p className="mt-1 text-sm text-gray-500">
                                            {experience.location}
                                        </p>
                                    </div>

                                    <div className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                                        {experience.period}
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    {experience.description}
                                </p>

                                {/* Responsibilities */}
                                <div className="mt-8">
                                    <h4 className="text-lg font-bold text-gray-900">
                                        Responsibilities
                                    </h4>

                                    <ul className="mt-4 space-y-3">
                                        {experience.responsibilities.map(
                                            (responsibility) => (
                                                <li
                                                    key={responsibility}
                                                    className="flex gap-3 text-gray-600"
                                                >
                                                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600" />

                                                    <span>
                                                        {responsibility}
                                                    </span>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>

                                {/* Technologies */}
                                <div className="mt-8">
                                    <h4 className="text-lg font-bold text-gray-900">
                                        Technologies
                                    </h4>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {experience.technologies.map(
                                            (technology) => (
                                                <span
                                                    key={technology}
                                                    className="rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm"
                                                >
                                                    {technology}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}