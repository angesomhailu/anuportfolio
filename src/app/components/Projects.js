"use client";

import { useState, useEffect } from "react";
import {
    FiGithub,
    FiExternalLink,
} from "react-icons/fi";

const projects = [
    {
        id: "angewebsite",
        title: "Angewebsite",
        shortDescription: "A high-performance modern search engine replica inspired by Bing, featuring instant search suggestions and news feeds.",
        description: "Angewebsite is a modern search platform designed to resemble Bing's rich features. It incorporates real-time news data retrieval, instant keyboard-driven search query suggestions, search logs, responsive styling, and dynamic background wallpapers. It is geared towards delivering a fast and unified search portal experience.",
        features: [
            "Bing-inspired premium user interface and layout design.",
            "Instant search suggestion dropdown list.",
            "Integrated news widgets and category tabs.",
            "Dynamic daily hero image backgrounds."
        ],
        challenges: "Fetching and styling search feeds without API latency while maintaining layout parity with Bing. Resolved by utilizing server-side data fetching and smart client caching.",
        technologies: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "Framer Motion",
            "Search API"
        ],
        github: "https://github.com/angesomhailu/angewebsite",
    },
    {
        id: "goojera-web",
        title: "Goojera Web",
        shortDescription: "A feature-rich web media listing catalog for organized titles search, categories, and references.",
        description: "Goojera Web provides a cleanly organized, responsive web portal mapping online cinematic and series content. Users can navigate titles through robust pagination, quick genre categories filter, and customized ratings overlays.",
        features: [
            "Clean catalog grids detailing content ratings.",
            "Sleek filter controls by release date, category, and alphabetical order.",
            "Responsive dashboard showing bookmarking state."
        ],
        challenges: "Displaying large numbers of records. Addressed on the frontend with modern cards containing lazy-loaded elements to preserve responsiveness.",
        technologies: [
            "React",
            "Tailwind CSS",
            "Node.js",
            "Express",
            "MongoDB",
        ],
        github: "https://github.com/angesomhailu/goojera-web",
        demo: "#",
    },
    {
        id: "erimovie",
        title: "EriMovie",
        shortDescription: "A fast movie search and curation portal with API integrations and customizable watchlists.",
        description: "EriMovie connects directly with external movie APIs to pull titles data, showing casts, trailers, and reviews. Highlights include customizable local search watchlists, quick genre tabs, and interactive video playback links.",
        features: [
            "Dynamic TMDB API data integration.",
            "Saves user watchlists to Context API.",
            "Modern movie detail views."
        ],
        challenges: "Handling rate-limited external key calls. Handled by bundling lookup requests and creating static fallbacks.",
        technologies: [
            "React",
            "Tailwind CSS",
            "TMDB API",
            "Context API",
        ],
        github: "https://github.com/angesomhailu/erimovie",
        demo: "#",
    },
    {
        id: "anuportfolio",
        title: "AnuPortfolio",
        shortDescription: "A highly responsive, premium developer portfolio website with interactive skills grid and dark mode.",
        description: "AnuPortfolio (this website) is built using Next.js and Tailwind. It showcases a premium design aesthetic, dark/light theme switching, and an interactive skills list equipped with brand icons.",
        features: [
            "Vibrant, dark/light mode toggle with theme memory.",
            "Interactive technology logo cards utilizing simple icons.",
            "Expandable projects detail modals providing in-depth work explanations."
        ],
        challenges: "Ensuring zero hydration mismatches during theme initialization next.js side. Fixed by wrapping the theme provider or delaying rendering until mounted.",
        technologies: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "React Icons",
        ],
        github: "https://github.com/angesomhailu/anuportfolio",
        demo: "/",
    },
    {
        id: "student-registration",
        title: "Student Registration System",
        shortDescription: "A Laravel administrative application for managing student groups, batches, and course payments.",
        description: "Student Registration System is a PHP Laravel backend CRM. Allows administrators to track active courses, map class timetables, register students, and audit bill pay statuses with automated receipts.",
        features: [
            "Full CRUD operations over student cohorts.",
            "Enrollment management and class scheduling.",
            "Payment registration and payment notification logs."
        ],
        challenges: "Managing relational DB tables (Students -> Payments -> Batches). Solved by building comprehensive Eloquent model linkages and index constraints.",
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
        id: "car-rental",
        title: "Car Rental System",
        shortDescription: "A car rental dashboard for browsing active fleet vehicles and booking rides online.",
        description: "Car Rental System tracks vehicle states, rental costs, reservation dates conflict, and logs customer feedback. The system manages car maintenance schedules and makes fleet checkout seamless.",
        features: [
            "Interactive booking forms with double-booking safety checks.",
            "Search portal filter by passenger count, car type, and price range.",
            "Admin statistics summarizing popular fleet vehicles."
        ],
        challenges: "Preventing concurrent scheduling overlapping for standard vehicles. Implemented transaction-safe database booking locks.",
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

// Interactive high-fidelity CSS-based micro-UI previews for each project card
function ProjectPreview({ title }) {
    switch (title) {
        case "Angewebsite":
            return (
                <div className="relative flex h-full w-full flex-col justify-between bg-zinc-900 p-4 text-white overflow-hidden select-none">
                    {/* Header */}
                    <div className="flex items-center justify-between text-[9px] text-zinc-400">
                        <span className="font-bold text-blue-400 flex items-center gap-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                            Bing Search
                        </span>
                        <div className="flex gap-2">
                            <span>Images</span>
                            <span>News</span>
                        </div>
                    </div>
                    {/* Search Bar */}
                    <div className="my-auto flex flex-col items-center">
                        <div className="text-base font-extrabold tracking-tight text-white mb-2 flex items-center gap-1 select-none">
                            <span className="text-blue-500">A</span>
                            <span className="text-green-500">n</span>
                            <span className="text-yellow-500">g</span>
                            <span className="text-red-500">e</span>
                        </div>
                        <div className="flex w-full max-w-[190px] items-center rounded-full bg-zinc-850 px-3 py-1 border border-zinc-700">
                            <span className="text-[10px] text-zinc-500 flex-1 truncate">Search the web...</span>
                            <span className="text-blue-400 text-xs">🔍</span>
                        </div>
                    </div>
                    {/* Bottom widgets */}
                    <div className="grid grid-cols-3 gap-1 text-[8px] text-zinc-300">
                        <div className="rounded bg-zinc-800 p-1 text-center truncate">US News</div>
                        <div className="rounded bg-zinc-800 p-1 text-center truncate">Tech Trends</div>
                        <div className="rounded bg-zinc-800 p-1 text-center truncate">Weather 🌤️</div>
                    </div>
                </div>
            );
        case "Goojera Web":
            return (
                <div className="relative flex h-full w-full flex-col justify-between bg-slate-950 p-4 text-white overflow-hidden select-none">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-900 pb-1">
                        <span className="text-[9px] font-bold text-emerald-400">Goojera</span>
                        <div className="h-1.5 w-12 rounded bg-slate-800"></div>
                    </div>
                    {/* Movies list */}
                    <div className="my-auto grid grid-cols-3 gap-2">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex flex-col gap-1">
                                <div className="relative aspect-[2/3] w-full rounded bg-slate-800 overflow-hidden flex items-center justify-center border border-slate-800">
                                    <span className="text-xs text-slate-500">🎬</span>
                                    <span className="absolute bottom-0 right-0 bg-yellow-500 px-0.5 text-[6px] font-bold text-black rounded-tl">8.{i}</span>
                                </div>
                                <div className="h-1 w-full rounded bg-slate-800"></div>
                            </div>
                        ))}
                    </div>
                    {/* Footer status */}
                    <div className="h-1.5 w-1/2 rounded bg-emerald-500/20"></div>
                </div>
            );
        case "EriMovie":
            return (
                <div className="relative flex h-full w-full flex-col justify-between bg-violet-950 p-4 text-white overflow-hidden select-none">
                    {/* Featured slider */}
                    <div className="relative h-20 w-full overflow-hidden rounded bg-violet-900 p-2 flex flex-col justify-end">
                        <div className="absolute inset-0 bg-gradient-to-t from-violet-950 to-transparent"></div>
                        <div className="relative z-10">
                            <div className="h-2 w-16 rounded bg-yellow-400 mb-1"></div>
                            <div className="h-1.5 w-10 rounded bg-violet-400"></div>
                        </div>
                        <div className="absolute top-2 right-2 h-4 w-4 bg-yellow-400 rounded-full flex items-center justify-center text-[7px] text-violet-950 font-bold">▶</div>
                    </div>
                    {/* Categories */}
                    <div className="flex gap-2 mt-1">
                        <div className="h-4 flex-1 rounded bg-violet-850 flex items-center justify-center text-[7px] font-semibold text-violet-300">Action</div>
                        <div className="h-4 flex-1 rounded bg-violet-850 flex items-center justify-center text-[7px] font-semibold text-violet-300">Drama</div>
                        <div className="h-4 flex-1 rounded bg-violet-900/40 flex items-center justify-center text-[7px] font-semibold text-violet-400">Watchlist</div>
                    </div>
                </div>
            );
        case "AnuPortfolio":
            return (
                <div className="relative flex h-full w-full flex-col justify-between bg-zinc-950 p-4 text-white overflow-hidden select-none">
                    {/* Navbar */}
                    <div className="flex items-center justify-between border-b border-zinc-900 pb-1">
                        <span className="text-[10px] font-bold tracking-tight text-blue-400">AH.dev</span>
                        <div className="flex items-center gap-1.5">
                            <div className="h-2.5 w-2.5 rounded-full bg-zinc-800 flex items-center justify-center text-[6px]">🌙</div>
                            <div className="h-1.5 w-8 rounded bg-zinc-900"></div>
                        </div>
                    </div>
                    {/* Hero summary */}
                    <div className="my-auto flex flex-col items-center text-center">
                        <div className="h-7 w-7 rounded-full border border-blue-500 bg-blue-900/50 flex items-center justify-center overflow-hidden mb-1 font-bold text-[10px] text-blue-300">AH</div>
                        <span className="text-[9px] font-bold text-white">Angesom Hailu</span>
                        <span className="text-[6px] text-blue-300">Web Developer</span>
                    </div>
                    {/* Floating skills */}
                    <div className="flex justify-center gap-1">
                        <span className="rounded bg-sky-500/20 px-1 py-0.5 text-[6px] text-sky-400">React</span>
                        <span className="rounded bg-emerald-500/20 px-1 py-0.5 text-[6px] text-emerald-400">Tailwind</span>
                        <span className="rounded bg-yellow-500/25 px-1 py-0.5 text-[6px] text-yellow-400">Next.js</span>
                    </div>
                </div>
            );
        case "Student Registration System":
            return (
                <div className="relative flex h-full w-full flex-col justify-between bg-slate-900 p-4 text-gray-200 overflow-hidden select-none">
                    {/* Title */}
                    <div className="flex items-center justify-between text-[8px] font-semibold text-indigo-400 border-b border-slate-800 pb-1">
                        <span>Database Dashboard</span>
                        <span className="bg-indigo-500/20 px-1 rounded text-indigo-300">v1.2</span>
                    </div>
                    {/* Mock Table */}
                    <div className="my-auto flex flex-col gap-1.5">
                        <div className="grid grid-cols-3 gap-1 text-[6px] text-gray-500 font-bold uppercase">
                            <span>Student</span>
                            <span>Class</span>
                            <span className="text-right">Status</span>
                        </div>
                        <div className="grid grid-cols-3 gap-1 text-[7px] border-t border-slate-800 pt-1">
                            <span className="font-semibold text-gray-300 truncate">Alex K.</span>
                            <span className="text-gray-400">Laravel</span>
                            <span className="text-right"><span className="bg-emerald-500/20 text-emerald-400 px-1 rounded-sm text-[6px]">Enrolled</span></span>
                        </div>
                        <div className="grid grid-cols-3 gap-1 text-[7px] border-t border-slate-800 pt-1">
                            <span className="font-semibold text-gray-300 truncate">Mena Y.</span>
                            <span className="text-gray-400">Node</span>
                            <span className="text-right"><span className="bg-amber-500/20 text-amber-400 px-1 rounded-sm text-[6px]">Pending</span></span>
                        </div>
                    </div>
                    {/* Database metric */}
                    <div className="h-1 w-1/3 rounded bg-indigo-500"></div>
                </div>
            );
        case "Car Rental System":
            return (
                <div className="relative flex h-full w-full flex-col justify-between bg-neutral-900 p-4 text-gray-100 overflow-hidden select-none">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider">DriveEase</span>
                        <span className="text-[7px] text-neutral-400">Fleet Active</span>
                    </div>
                    {/* Car card */}
                    <div className="my-auto rounded bg-neutral-800 p-2 flex items-center justify-between border border-neutral-700">
                        <div className="flex flex-col gap-0.5">
                            <span className="text-[8px] font-bold text-white">Tesla Model Y</span>
                            <span className="text-[6px] text-neutral-400">$89/day</span>
                        </div>
                        <span className="text-xs">🚗</span>
                    </div>
                    {/* Quick checkout */}
                    <div className="flex justify-between items-center text-[7px]">
                        <span className="text-green-400">★ 4.9 (12 reviews)</span>
                        <div className="rounded bg-red-500 px-1.5 py-0.5 text-white font-bold">Rent Now</div>
                    </div>
                </div>
            );
        default:
            return <div className="text-gray-400 dark:text-gray-500">Project Preview</div>;
    }
}

export default function Projects() {
    const [activeProject, setActiveProject] = useState(null);

    // Disable body scroll when modal is active
    useEffect(() => {
        if (activeProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [activeProject]);

    return (
        <section
            id="projects"
            className="bg-gray-50 px-6 py-24 transition-colors duration-300 dark:bg-gray-900"
        >
            <div className="mx-auto max-w-6xl">

                {/* Heading */}
                <div className="mb-12">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
                        My Work
                    </p>

                    <h2 className="text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
                        Featured Projects
                    </h2>

                    <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                        Some of the projects I have developed using modern web technologies. Click on any project to see detailed information.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {projects.map((project) => (
                        <article
                            key={project.id}
                            onClick={() => setActiveProject(project)}
                            className="group cursor-pointer overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl dark:border-gray-800 dark:bg-gray-950"
                        >

                            {/* Project high-fidelity micro-UI preview */}
                            <div className="h-52 w-full border-b border-gray-150 dark:border-gray-900 overflow-hidden bg-gray-100 dark:bg-gray-800 transition duration-300 group-hover:opacity-95">
                                <ProjectPreview title={project.title} />
                            </div>

                            {/* Brief Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                                    {project.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-350 line-clamp-3">
                                    {project.shortDescription}
                                </p>

                                {/* Technologies */}
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.technologies.slice(0, 3).map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-md bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-600 dark:bg-blue-950/40 dark:text-blue-400"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="text-xs text-gray-400 self-center font-medium">
                                            +{project.technologies.length - 3} more
                                        </span>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}

                </div>
            </div>

            {/* Click-to-Explain Details Modal */}
            {activeProject && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in"
                    onClick={() => setActiveProject(null)}
                >
                    <div
                        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto transform rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-2xl transition-all duration-300 dark:border-gray-800 dark:bg-gray-950"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button icon */}
                        <button
                            onClick={() => setActiveProject(null)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-white transition duration-200 cursor-pointer"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Title and Short Intro */}
                        <div className="mb-6">
                            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Featured Project</span>
                            <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mt-1">
                                {activeProject.title}
                            </h3>
                            <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">
                                {activeProject.shortDescription}
                            </p>
                        </div>

                        {/* Visual Micro Preview container inside modal */}
                        <div className="h-40 w-full rounded-xl overflow-hidden mb-6 border border-gray-200 dark:border-gray-800 shadow-inner">
                            <ProjectPreview title={activeProject.title} />
                        </div>

                        {/* Detailed Explanation */}
                        <div className="space-y-5 text-gray-700 dark:text-gray-300">
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white text-base">Project Overview</h4>
                                <p className="mt-1 text-sm leading-6">
                                    {activeProject.description}
                                </p>
                            </div>

                            {activeProject.features && (
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white text-base">Key Highlights & Features</h4>
                                    <ul className="mt-1.5 list-disc list-inside text-sm space-y-1 pl-1">
                                        {activeProject.features.map((feature, idx) => (
                                            <li key={idx} className="leading-6">{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {activeProject.challenges && (
                                <div className="rounded-xl bg-blue-50/50 p-4 border border-blue-100/50 dark:bg-blue-950/20 dark:border-blue-900/30">
                                    <h4 className="font-bold text-blue-700 dark:text-blue-400 text-sm">Challenge & Implementation Decision</h4>
                                    <p className="mt-1.5 text-xs leading-5 text-blue-800 dark:text-blue-300/90 font-medium">
                                        {activeProject.challenges}
                                    </p>
                                </div>
                            )}

                            {/* Tech Badges */}
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-2">Technologies Used</h4>
                                <div className="flex flex-wrap gap-2">
                                    {activeProject.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full bg-gray-150 dark:bg-gray-850 px-3.5 py-1 text-xs font-semibold text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-800"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Footer Links buttons */}
                        <div className="mt-8 pt-6 border-t border-gray-150 dark:border-gray-900 flex items-center justify-end gap-4">
                            {activeProject.github && activeProject.github !== "#" && (
                                <a
                                    href={activeProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 font-bold px-4 py-2 border border-gray-200 rounded-lg text-sm transition hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-300"
                                >
                                    <FiGithub className="text-base" />
                                    GitHub Code
                                </a>
                            )}
                            {activeProject.demo && activeProject.demo !== "#" && (
                                <a
                                    href={activeProject.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 font-bold px-5 py-2 rounded-lg text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-md hover:shadow-lg transition duration-200"
                                >
                                    <FiExternalLink className="text-base" />
                                    Launch Project
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
