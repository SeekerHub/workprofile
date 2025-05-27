import React from "react";

const projects = [
    {
        name: "EventCity",
        link: "https://event-city.vercel.app/",
        description: "A web based application for managing events and ticket sales. It have seperated profiles for bothe users and admins. Admin can add new events, manage users, and view sales statistics. while users can view events, book tickets, and manage their bookings.",
    },
    {
        name: "URL shortner",
        link: "https://github.com/yourusername/task-manager",
        description: "A simple task management app built with React and Node.js.",
    },
    {
        name: "tvsLink",
        link: "https://github.com/SeekerHub/tvsLink",
        description: "A full-featured e-commerce platform with payment integration.",
    },
    {
        name: "shortanswersimilarity plugin",
        link: "https://github.com/SeekerHub/tvsLink",
        description: "A full-featured e-commerce platform with payment integration.",
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
