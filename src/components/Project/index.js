// using IZMIR imagehover css library for style and design of projects 
require('../../assets/styles/izmir.css');

const Project = ({ project }) => {

    return (
        <section className='project-container'>
           <figure class='c4-izmir c4-border-fade c4-gradient-top tabindex="0"'>
               <img className='proj-img'
               src={require(`../../assets/images/photo-${project.key}.png`)}
               alt={project.imgAlt}
               >
               </img>
            <figcaption className='c4-layout-top-center c4-fade-up'>
                <div>
                    <h3> {project.title} </h3>
                    <div className='proj-text'>
                        <p><a href={project.github}> GitHub </a> || <a href={project.URL}> Live App </a></p>
                    </div>
                </div>
            </figcaption>
           </figure>
        </section>
    )
};

export default Project;