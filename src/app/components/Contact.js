"use client";

import { useState } from "react";
import {
    FiMail,
    FiPhone,
    FiMapPin,
    FiGithub,
    FiLinkedin,
    FiSend,
} from "react-icons/fi";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
        if (errors[id]) {
            setErrors((prev) => ({ ...prev, [id]: "" }));
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }
        if (!formData.subject.trim()) newErrors.subject = "Subject is required";
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters long";
        }
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);
        // Simulate server network latency
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    const handleReset = () => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
        setIsSuccess(false);
    };

    return (
        <section
            id="contact"
            className="bg-white px-6 py-24 transition-colors duration-300 dark:bg-gray-950"
        >
            <div className="mx-auto max-w-6xl">

                {/* Heading */}
                <div className="mb-14 text-center">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
                        Contact Me
                    </p>

                    <h2 className="text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
                        Let's Work Together
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
                        Have a project, opportunity, or idea you'd like to
                        discuss? Feel free to get in touch with me.
                    </p>
                </div>

                {/* Contact content */}
                <div className="grid gap-10 md:grid-cols-2">

                    {/* Contact information */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Get In Touch
                        </h3>

                        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                            I'm always interested in hearing about new
                            opportunities, interesting projects, and ways
                            I can contribute to meaningful software solutions.
                        </p>

                        <div className="mt-8 space-y-6">

                            {/* Email */}
                            <a
                                href="mailto:angesomhailu1414@gmail.com"
                                className="flex items-center gap-4 group"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-xl text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-950/50 dark:text-blue-400">
                                    <FiMail />
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Email
                                    </p>

                                    <p className="font-medium text-gray-900 dark:text-white">
                                        angesomhailu1414@gmail.com
                                    </p>
                                </div>
                            </a>

                            {/* Phone */}
                            <a
                                href="tel:+251963520384"
                                className="flex items-center gap-4 group"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-xl text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-950/50 dark:text-blue-400">
                                    <FiPhone />
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Phone
                                    </p>

                                    <p className="font-medium text-gray-900 dark:text-white">
                                        +251 96 352 0384
                                    </p>
                                </div>
                            </a>

                            {/* Location */}
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-xl text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                                    <FiMapPin />
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Location
                                    </p>

                                    <p className="font-medium text-gray-900 dark:text-white">
                                        Addis Ababa, Ethiopia
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Social links */}
                        <div className="mt-10">
                            <p className="mb-4 font-semibold text-gray-900 dark:text-white">
                                Find me online
                            </p>

                            <div className="flex gap-4">

                                <a
                                    href="https://github.com/angesomhailu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-lg text-gray-700 transition hover:bg-blue-600 hover:text-white dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-blue-600 dark:hover:text-white"
                                >
                                    <FiGithub />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/angesom-hailu-61b86328b/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-lg text-gray-700 transition hover:bg-blue-600 hover:text-white dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-blue-600 dark:hover:text-white"
                                >
                                    <FiLinkedin />
                                </a>

                            </div>
                        </div>
                    </div>

                    {/* Contact form or Success Card */}
                    <div className="relative">
                        {isSuccess ? (
                            <div className="flex flex-col items-center justify-center text-center p-8 bg-gray-50 border border-gray-200 dark:border-gray-800 dark:bg-gray-900 rounded-2xl shadow-sm min-h-[460px] transition-all duration-300">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-3xl text-emerald-600 dark:text-emerald-400 mb-6 animate-pulse">
                                    ✓
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    Message Sent!
                                </h3>
                                <p className="mt-4 max-w-sm text-sm text-gray-600 dark:text-gray-300 leading-6">
                                    Thank you. Your message has been sent successfully. I'll get back to you as soon as possible.
                                </p>
                                <button
                                    onClick={handleReset}
                                    className="mt-8 rounded-lg bg-blue-600 hover:bg-blue-500 px-6 py-2.5 font-semibold text-white transition duration-200 shadow-md hover:shadow-lg cursor-pointer"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="rounded-2xl border border-gray-200 bg-gray-50 p-7 shadow-sm md:p-8 dark:border-gray-800 dark:bg-gray-900"
                            >
                                <div className="grid gap-6">

                                    {/* Name */}
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                                        >
                                            Your Name
                                        </label>

                                        <input
                                            id="name"
                                            type="text"
                                            value={formData.name}
                                            onChange={handleChange}
                                            disabled={isSubmitting}
                                            placeholder="Enter your name"
                                            className={`w-full rounded-lg border bg-white px-4 py-3 outline-none transition focus:ring-2 dark:bg-gray-950 dark:text-white ${errors.name
                                                    ? "border-red-500 focus:border-red-500 focus:ring-red-100 dark:border-red-500/80 dark:focus:ring-red-950/20"
                                                    : "border-gray-300 focus:border-blue-600 focus:ring-blue-100 dark:border-gray-700 dark:focus:border-blue-400 dark:focus:ring-blue-950/50"
                                                }`}
                                        />
                                        {errors.name && (
                                            <p className="mt-1 text-xs text-red-500 font-medium">{errors.name}</p>
                                        )}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                                        >
                                            Your Email
                                        </label>

                                        <input
                                            id="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            disabled={isSubmitting}
                                            placeholder="Enter your email"
                                            className={`w-full rounded-lg border bg-white px-4 py-3 outline-none transition focus:ring-2 dark:bg-gray-950 dark:text-white ${errors.email
                                                    ? "border-red-500 focus:border-red-500 focus:ring-red-100 dark:border-red-500/80 dark:focus:ring-red-950/20"
                                                    : "border-gray-300 focus:border-blue-600 focus:ring-blue-100 dark:border-gray-700 dark:focus:border-blue-400 dark:focus:ring-blue-950/50"
                                                }`}
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-xs text-red-500 font-medium">{errors.email}</p>
                                        )}
                                    </div>

                                    {/* Subject */}
                                    <div>
                                        <label
                                            htmlFor="subject"
                                            className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                                        >
                                            Subject
                                        </label>

                                        <input
                                            id="subject"
                                            type="text"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            disabled={isSubmitting}
                                            placeholder="What is this about?"
                                            className={`w-full rounded-lg border bg-white px-4 py-3 outline-none transition focus:ring-2 dark:bg-gray-950 dark:text-white ${errors.subject
                                                    ? "border-red-500 focus:border-red-500 focus:ring-red-100 dark:border-red-500/80 dark:focus:ring-red-950/20"
                                                    : "border-gray-300 focus:border-blue-600 focus:ring-blue-100 dark:border-gray-700 dark:focus:border-blue-400 dark:focus:ring-blue-950/50"
                                                }`}
                                        />
                                        {errors.subject && (
                                            <p className="mt-1 text-xs text-red-500 font-medium">{errors.subject}</p>
                                        )}
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                                        >
                                            Message
                                        </label>

                                        <textarea
                                            id="message"
                                            rows="5"
                                            value={formData.message}
                                            onChange={handleChange}
                                            disabled={isSubmitting}
                                            placeholder="Write your message..."
                                            className={`w-full resize-none rounded-lg border bg-white px-4 py-3 outline-none transition focus:ring-2 dark:bg-gray-950 dark:text-white ${errors.message
                                                    ? "border-red-500 focus:border-red-500 focus:ring-red-100 dark:border-red-500/80 dark:focus:ring-red-950/20"
                                                    : "border-gray-300 focus:border-blue-600 focus:ring-blue-100 dark:border-gray-700 dark:focus:border-blue-400 dark:focus:ring-blue-950/50"
                                                }`}
                                        />
                                        {errors.message && (
                                            <p className="mt-1 text-xs text-red-500 font-medium">{errors.message}</p>
                                        )}
                                    </div>

                                    {/* Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium text-white transition ${isSubmitting
                                                ? "bg-blue-400 cursor-not-allowed"
                                                : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
                                            }`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <FiSend />
                                            </>
                                        )}
                                    </button>

                                </div>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}
