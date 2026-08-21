import Link from "next/link";
import {
    FiGithub,
    FiLinkedin,
    FiMail,
    FiArrowUp,
} from "react-icons/fi";

export default function Footer() {
    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Education", href: "#education" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <footer className="border-t border-gray-200 bg-gray-900 text-white">

            <div className="mx-auto max-w-6xl px-6 py-16">

                <div className="grid gap-10 md:grid-cols-3">

                    {/* About */}
                    <div>
                        <Link
                            href="#home"
                            className="text-2xl font-bold"
                        >
                            Angesom<span className="text-blue-500">.</span>
                        </Link>

                        <p className="mt-4 max-w-sm leading-7 text-gray-400">
                            Software Engineer passionate about building
                            modern web applications and solving real-world
                            problems through technology.
                        </p>

                        <div className="mt-6 flex gap-4">

                            <a
                                href="https://github.com/angesomhailu"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-lg text-gray-400 transition hover:bg-blue-600 hover:text-white"
                            >
                                <FiGithub />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/angesom-hailu-61b86328b/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-lg text-gray-400 transition hover:bg-blue-600 hover:text-white"
                            >
                                <FiLinkedin />
                            </a>

                            <a
                                href="mailto:angesomhailu1414@gmail.com"
                                aria-label="Email"
                                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-lg text-gray-400 transition hover:bg-blue-600 hover:text-white"
                            >
                                <FiMail />
                            </a>

                        </div>
                    </div>

                    {/* Navigation */}


                    {/* CTA */}
                    <div>
                        <h3 className="text-lg font-semibold">
                            Let's Connect
                        </h3>

                        <p className="mt-4 leading-7 text-gray-400">
                            I'm open to new opportunities, collaborations,
                            and interesting software projects.
                        </p>

                        <Link
                            href="#contact"
                            className="mt-6 inline-flex rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
                        >
                            Get In Touch
                        </Link>
                    </div>

                </div>

                {/* Bottom */}
                <div>


                    <nav className="mt-5 flex flex-wrap gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="rounded-md px-2 py-1 text-sm font-medium text-gray-400 transition-all duration-300 hover:bg-gray-800 hover:text-blue-400"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-gray-800 pt-8 md:flex-row">

                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Angesom Hailu. All rights reserved.
                    </p>

                    <p className="text-sm text-gray-500">
                        Built with Next.js & Tailwind CSS
                    </p>

                    <Link
                        href="#home"
                        aria-label="Back to top"
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition hover:bg-blue-600 hover:text-white"
                    >
                        <FiArrowUp />
                    </Link>

                </div>

            </div>
        </footer>
    );
}