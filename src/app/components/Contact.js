import {
    FiMail,
    FiPhone,
    FiMapPin,
    FiGithub,
    FiLinkedin,
    FiSend,
} from "react-icons/fi";

export default function Contact() {
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

                    {/* Contact form */}
                    <form
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
                                    placeholder="Enter your name"
                                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-950/50"
                                />
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
                                    placeholder="Enter your email"
                                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-950/50"
                                />
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
                                    placeholder="What is this about?"
                                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-950/50"
                                />
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
                                    placeholder="Write your message..."
                                    className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-950/50"
                                />
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
                            >
                                Send Message
                                <FiSend />
                            </button>

                        </div>
                    </form>

                </div>
            </div>
        </section>
    );
}