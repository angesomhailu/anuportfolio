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
            className="relative min-h-screen overflow-hidden bg-white px-6 pt-24 transition-colors duration-300 dark:bg-gray-950"
        >
            {/* Background decorations */}
            <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-100 opacity-60 blur-3xl dark:bg-blue-900/20" />

            <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-100 opacity-60 blur-3xl dark:bg-indigo-900/20" />

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
                        <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-6xl md:text-7xl dark:text-white">
                            Angesom
                            <span className="block text-blue-600 dark:text-blue-400">
                                Hailu
                            </span>
                        </h1>

                        {/* Profession */}
                        <h2 className="mt-5 text-2xl font-bold text-gray-700 sm:text-3xl dark:text-gray-200">
                            Software Engineer
                        </h2>

                        {/* Description */}
                        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
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
                                download="Angesom_Hailu_CV.pdf"
                                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3.5 font-semibold text-gray-700 transition duration-300 hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
                            >
                                Download CV
                                <FiDownload />
                            </a>

                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="order-1 flex justify-center md:order-2">

                        <div className="relative">

                            {/* Outer decorative circle */}
                            <div className="absolute -inset-5 rounded-full border border-blue-200 dark:border-blue-900/30" />

                            {/* Second decorative circle */}
                            <div className="absolute -inset-10 rounded-full border border-blue-100 dark:border-blue-950/20" />

                            {/* Image container */}
                            <div className="relative h-72 w-72 overflow-hidden rounded-full border-8 border-white bg-gray-100 shadow-2xl shadow-blue-900/10 sm:h-80 sm:w-80 md:h-96 md:w-96 dark:border-gray-900 dark:bg-gray-800 dark:shadow-blue-950/20">

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
                            <div className="absolute -bottom-4 -left-8 rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-xl sm:-left-12 dark:border-gray-800 dark:bg-gray-950 dark:shadow-2xl">
                                <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                                    Specialized in
                                </p>

                                <p className="mt-1 font-bold text-gray-900 dark:text-white">
                                    Full-Stack Development
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>


        </section>
    );
}