"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

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
        <nav
            className="
                fixed top-0 z-50 w-full
                border-b border-gray-200
                bg-white/90
                backdrop-blur-md
                transition-colors duration-300
                dark:border-gray-800
                dark:bg-gray-950/90
            "
        >
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

                {/* Logo */}
                <Link
                    href="#home"
                    className="flex items-center"
                >
                    <Image
                        src="/logo.png"
                        alt="Angesom Hailu Logo"
                        width={20}
                        height={25}
                        priority
                        className="h-auto w-[120px] object-contain sm:w-[140px]"
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-7 md:flex">

                    <div className="flex items-center gap-7">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="
                                    text-sm font-medium
                                    text-gray-600
                                    transition-colors duration-200
                                    hover:text-blue-600
                                    dark:text-gray-300
                                    dark:hover:text-blue-400
                                "
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Theme Toggle */}
                    <ThemeToggle />

                </div>

                {/* Mobile Controls */}
                <div className="flex items-center gap-3 md:hidden">

                    {/* Theme Toggle */}
                    <ThemeToggle />

                    {/* Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="
                            flex h-10 w-10 items-center justify-center
                            rounded-lg
                            text-xl
                            text-gray-700
                            transition
                            hover:bg-gray-100
                            hover:text-blue-600
                            dark:text-gray-200
                            dark:hover:bg-gray-800
                            dark:hover:text-blue-400
                        "
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>

                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div
                    className="
                        border-t border-gray-200
                        bg-white
                        px-6 py-5
                        shadow-lg
                        dark:border-gray-800
                        dark:bg-gray-950
                    "
                >
                    <div className="flex flex-col gap-1">

                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="
                                    rounded-lg
                                    px-4 py-3
                                    text-sm font-medium
                                    text-gray-700
                                    transition
                                    hover:bg-gray-100
                                    hover:text-blue-600
                                    dark:text-gray-300
                                    dark:hover:bg-gray-800
                                    dark:hover:text-blue-400
                                "
                            >
                                {link.name}
                            </Link>
                        ))}

                    </div>
                </div>
            )}
        </nav>
    );
}