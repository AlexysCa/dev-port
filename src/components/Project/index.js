// using IZMIR imagehover css library for style and design of projects 
require('../Project/izmir.css');


function Project(project) {

    return (
        <section className='project-container'>
           <figure className='c4-izmir c4-border-fade c4-gradient-top '>
               <img className='proj-img'
               src={require(`../../assets/images/${project.key}.png`).default}
               alt={project.imgAlt}
               href={project.URL}
               >
               </img>
            <figcaption className='c4-layout-top-center'>
                <div className='c4-fade-down'>
                    <h3>{project.title}</h3>
                </div>
            </figcaption>
           </figure>
        </section>
    )
};

export default Project;