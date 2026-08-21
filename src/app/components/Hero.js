import Link from "next/link";
import {
    FiGithub,
    FiLinkedin,
    FiMail,
    FiArrowDown,
} from "react-icons/fi";

export default function Hero() {
    return (
        <section
            id="home"
            className="flex min-h-screen items-center bg-white px-6 pt-16"
        >
            <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">

                {/* Text */}
                <div>
                    <p className="mb-4 text-lg font-medium text-blue-600">
                        Hello, I'm
                    </p>

                    <h1 className="text-5xl font-bold leading-tight text-gray-900 md:text-7xl">
                        Angesom
                        <br />
                        Hailu
                    </h1>

                    <h2 className="mt-5 text-2xl font-semibold text-gray-700 md:text-3xl">
                        Software Engineer
                    </h2>

                    <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                        I build modern, responsive, and user-friendly web applications
                        using modern technologies and clean software architecture.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link
                            href="#projects"
                            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
                        >
                            View My Projects
                        </Link>

                        <Link
                            href="#contact"
                            className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:border-blue-600 hover:text-blue-600"
                        >
                            Contact Me
                        </Link>
                    </div>

                    {/* Social links */}
                    <div className="mt-8 flex items-center gap-5">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl text-gray-600 transition hover:text-gray-900"
                        >
                            <FiGithub />
                        </a>

                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl text-gray-600 transition hover:text-blue-600"
                        >
                            <FiLinkedin />
                        </a>

                        <a
                            href="mailto:your-email@example.com"
                            className="text-2xl text-gray-600 transition hover:text-blue-600"
                        >
                            <FiMail />
                        </a>
                    </div>
                </div>

                {/* Profile placeholder */}
                <div className="flex justify-center">
                    <div className="flex h-72 w-72 items-center justify-center rounded-full bg-gray-100 text-gray-400 md:h-96 md:w-96">
                        <span className="text-lg">Your Photo</span>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <Link
                href="#about"
                className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce text-2xl text-gray-500 md:block"
            >
                <FiArrowDown />
            </Link>
        </section>
    );
}