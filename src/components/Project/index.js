// using IZMIR imagehover css library for style and design of projects 
import React from 'react';
import '../../assets/styles/izmir.css';

const Project = ({ project }) => {

    return (
        <section className="project-container">

            <figure className="c4-izmir c4-border-fade c4-gradient-top" tabIndex="0">

                <img
                    className="proj-img"
                    src={require(`../../assets/images/photo-${project.key}.png`)}
                    alt={project.imgAlt}
                />

                <figcaption className="c4-layout-top-center c4-fade-up">
                    <div>
                        <h3>{project.title}</h3>

                        <div className="proj-text">
                            <p>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    GitHub
                                </a>
                                {" || "}
                                <a
                                    href={project.URL}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Live Application
                                </a>
                            </p>
                        </div>
                    </div>
                </figcaption>

            </figure>

            <section className="project-details">

                <h3>{project.subtitle}</h3>

                <p className="project-description">
                    {project.description}
                </p>

                {project.contributions && (
                    <div className="project-contributions">
                        <h4>My Contributions</h4>

                        <ul>
                            {project.contributions.map((contribution, index) => (
                                <li key={index}>
                                    {contribution}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {project.technologies && (
                    <div className="project-technologies">
                        <h4>Technologies</h4>

                        <p>
                            {project.technologies.map((technology, index) => (
                                <span className="technology-tag" key={index}>
                                    {technology}
                                </span>
                            ))}
                        </p>
                    </div>
                )}

            </section>

        </section>
    );
};

export default Project;