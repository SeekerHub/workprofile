import React from "react";

const projects = [
    {
        name: "EventCity",
        link: "https://event-city.vercel.app/",
        description: "A web based application for managing events and ticket sales. It have seperated profiles for both users and admins. Admin can add new events, manage users, and view sales statistics. while users can view events, book tickets, and manage their bookings.",
    },
    {
        name: "tvsLink",
        link: "https://github.com/SeekerHub/tvsLink",
        description: "A mobile application where users can verify their official documents. It can be of extensive user for company who needs to verify their users.",
    },
    {
        name: "shortanswersimilarity plugin",
        link: "https://moodle.org/plugins/qtype_shortanssimilarity",
        description: "A moodle plugin for measuring short answer similarity question type that allows a students written response answer to be automatically marked, using a multi-sentence similarity calculator.",
    },
    {
        name: "URL shortner",
        link: "",
        description: "An application that allows users to shorten long URLs into more manageable links. It provides a simple interface for users to input their long URLs and receive a shortened version in return.",
    },
];

const ProjectSection = () => (
    <section className="">
        <h2 className="text-2xl font-semibold mb-4 font-montserrat">Some of my works .....</h2>
        <ul className="list-disc pl-6 space-y-4">
            {projects.map((project, idx) => (
                <li key={idx}>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mont text-blue-400 hover:text-blue-400 mr-2"
                    >
                        {project.name}
                    </a>
                    <span className="text-gray-300">{"- "} {project.description}</span>
                </li>
            ))}
        </ul>
    </section>
);

export default ProjectSection;
