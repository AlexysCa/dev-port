// using IZMIR imagehover css library for style and design of projects 
// import React from "react";
require('../../assets/styles/izmir.css');

const Project = ({ project }) => {

    return (
        <section className='project-container'>
           <figure className='c4-izmir c4-border-fade c4-gradient-top tabindex="0"'>
               <img className='proj-img'
               src={require(`../../assets/images/photo-${project.key}.png`)}
               alt={project.imgAlt}
               >
               </img>
            <figcaption className='c4-layout-top-center'>
                <div className='c4-fade-up'>
                    <h3>{project.title}</h3>
                </div>
            </figcaption>
           </figure>
        </section>
    )
};

export default Project;