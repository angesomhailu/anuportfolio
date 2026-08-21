import Image from "next/image";
import Link from "next/link";
import {
    FiGithub,
    FiLinkedin,
    FiMail,
    FiArrowRight,
    FiDownload,
} from "react-icons/fi";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden bg-white px-6 pt-24"
        >
            {/* Background decorations */}
            <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-100 opacity-60 blur-3xl" />

            <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-100 opacity-60 blur-3xl" />

            <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl items-center">
                <div className="grid w-full items-center gap-16 md:grid-cols-2">

                    {/* LEFT SIDE */}
                    <div className="order-2 md:order-1">

                        {/* Small introduction */}
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-10 bg-blue-600" />

                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                                Welcome to my portfolio
                            </p>
                        </div>

                        {/* Name */}
                        <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
                            Angesom
                            <span className="block text-blue-600">
                                Hailu
                            </span>
                        </h1>

                        {/* Profession */}
                        <h2 className="mt-5 text-2xl font-bold text-gray-700 sm:text-3xl">
                            Software Engineer
                        </h2>

                        {/* Description */}
                        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                            I build modern, scalable, and user-friendly web
                            applications. I enjoy turning ideas into reliable
                            software using modern frontend and backend
                            technologies.
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-wrap gap-4">

                            <Link
                                href="#projects"
                                className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
                            >
                                View My Projects

                                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>

                            <a
                                href="/cv.pdf"
                                download
                                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3.5 font-semibold text-gray-700 transition duration-300 hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600"
                            >
                                Download CV
                                <FiDownload />
                            </a>

                        </div>

                        {/* Social links */}
                        <div className="mt-9 flex items-center gap-5">

                            <span className="text-sm font-medium text-gray-500">
                                Find me:
                            </span>

                            <a
                                href="https://github.com/angesomhailu"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="text-xl text-gray-500 transition duration-300 hover:-translate-y-1 hover:text-gray-900"
                            >
                                <FiGithub />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/angesom-hailu-61b86328b/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="text-xl text-gray-500 transition duration-300 hover:-translate-y-1 hover:text-blue-600"
                            >
                                <FiLinkedin />
                            </a>

                            <a
                                href="mailto:angesomhailu1414@gmail.com"
                                aria-label="Email"
                                className="text-xl text-gray-500 transition duration-300 hover:-translate-y-1 hover:text-blue-600"
                            >
                                <FiMail />
                            </a>

                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="order-1 flex justify-center md:order-2">

                        <div className="relative">

                            {/* Outer decorative circle */}
                            <div className="absolute -inset-5 rounded-full border border-blue-200" />

                            {/* Second decorative circle */}
                            <div className="absolute -inset-10 rounded-full border border-blue-100" />

                            {/* Image container */}
                            <div className="relative h-72 w-72 overflow-hidden rounded-full border-8 border-white bg-gray-100 shadow-2xl shadow-blue-900/10 sm:h-80 sm:w-80 md:h-96 md:w-96">

                                <Image
                                    src="/profile.jpg"
                                    alt="Angesom Hailu"
                                    fill
                                    priority
                                    sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, 384px"
                                    className="object-cover"
                                />

                            </div>

                            {/* Floating card */}
                            <div className="absolute -bottom-4 -left-8 rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-xl sm:-left-12">
                                <p className="text-xs font-medium text-gray-500">
                                    Specialized in
                                </p>

                                <p className="mt-1 font-bold text-gray-900">
                                    Full-Stack Development
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* Scroll indicator */}
            <Link
                href="#about"
                className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
            >
                <div className="flex flex-col items-center gap-2 text-gray-400">
                    <span className="text-xs font-medium uppercase tracking-widest">
                        Scroll
                    </span>

                    <div className="h-8 w-px bg-gray-300" />
                </div>
            </Link>
        </section>
    );
}