import React from "react";
import Project from "../Project";
import projects from "../../assets/info/projects";

function Portfolio() {

    return (
        <section className="portfolio-container">
            <h2 className="section-title"> Projects</h2>
            <ul className="portfolio-list">
                {projects.map((project) => (
                    <li className="one-project" key={project.id}>
                        <Project project={project} />
                    </li>
                ))}
            </ul>
        </section>
    )
};

export default Portfolio;