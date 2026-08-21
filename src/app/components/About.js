export default function About() {
    return (
        <section id="about" className="bg-gray-50 px-6 py-24">
            <div className="mx-auto max-w-6xl">

                {/* Section heading */}
                <div className="mb-12">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
                        About Me
                    </p>

                    <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
                        Who I Am
                    </h2>
                </div>

                <div className="grid gap-12 md:grid-cols-2">

                    {/* About text */}
                    <div>
                        <p className="text-lg leading-8 text-gray-600">
                            I am a Software Engineering graduate passionate about
                            building modern web applications and solving real-world
                            problems through technology.
                        </p>

                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            I enjoy working across the full development process,
                            from designing user interfaces to developing APIs,
                            databases, authentication systems, and complete
                            web applications.
                        </p>

                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            My goal is to continuously improve my technical skills
                            and create software that is useful, reliable, and
                            accessible.
                        </p>
                    </div>

                    {/* Quick information */}
                    <div className="grid gap-4 sm:grid-cols-2">

                        <div className="rounded-xl bg-white p-6 shadow-sm">
                            <h3 className="font-semibold text-gray-900">
                                Education
                            </h3>

                            <p className="mt-2 text-gray-600">
                                BSc Software Engineering
                            </p>
                        </div>

                        <div className="rounded-xl bg-white p-6 shadow-sm">
                            <h3 className="font-semibold text-gray-900">
                                Focus
                            </h3>

                            <p className="mt-2 text-gray-600">
                                Full-Stack Development
                            </p>
                        </div>

                        <div className="rounded-xl bg-white p-6 shadow-sm">
                            <h3 className="font-semibold text-gray-900">
                                Frontend
                            </h3>

                            <p className="mt-2 text-gray-600">
                                React & Next.js
                            </p>
                        </div>

                        <div className="rounded-xl bg-white p-6 shadow-sm">
                            <h3 className="font-semibold text-gray-900">
                                Backend
                            </h3>

                            <p className="mt-2 text-gray-600">
                                Node.js & Express
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
