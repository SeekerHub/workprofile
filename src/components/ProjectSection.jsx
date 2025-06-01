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
        description: "A mobile application where users can verify their official documents. It can be of extensive use for companies who needs to verify their users. It is built using React Native and Expo, making it easy to develop and deploy on both Android and iOS platforms.",
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
    
    {
        name: "Weather App",
        link: "",
        description: "A simple weather application that provides current weather information for any location. It uses a weather API to fetch real-time data and display it in a user-friendly format. Users can view 5-day weather forecasts, current conditions, and more.",
    },
];

const ProjectSection = () => (
    <section className="">
        <h2 className="text-2xl font-semibold mb-4 font-roboto">Some of my works .....</h2>
        <ul className="list-disc pl-6 space-y-4">
            {projects.map((project, idx) => (
                <li key={idx}>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-mont text-blue-400 hover:text-blue-400 mr-2"
                    >
                        {project.name}
                    </a>
                    <span className="text-xl text-gray-450 opacity-70">{"- "} {project.description}</span>
                </li>
            ))}
        </ul>
        <div className="mt-4 font-mont text-blue-400 cursor-pointer pl-5">Click to Load more ......</div>
    </section>
);

export default ProjectSection;
