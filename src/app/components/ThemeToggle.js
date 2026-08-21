"use client";

import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
            setDarkMode(false);
        }

        setMounted(true);
    }, []);

    const toggleTheme = () => {
        const newTheme = !darkMode;

        setDarkMode(newTheme);

        if (newTheme) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    if (!mounted) {
        return (
            <button
                className="h-10 w-10 rounded-lg"
                aria-label="Toggle theme"
            />
        );
    }

    return (
        <button
            onClick={toggleTheme}
            aria-label={
                darkMode
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            }
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 transition hover:border-blue-600 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-blue-400 dark:hover:text-blue-400"
        >
            {darkMode ? (
                <FiSun size={19} />
            ) : (
                <FiMoon size={19} />
            )}
        </button>
    );
}