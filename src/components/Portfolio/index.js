import Project from "../Project";

const projects = [
    {
     id: 1,
     title: "JavaScript - Password Generator",
     key: 'javascript-password',
     github: "https://github.com/AlexysCa/i-know-your-password",
     URL: "https://alexysca.github.io/i-know-your-password/",
     image: "../../assets/images/js_password.png",
     imgAlt: "Javascript password generator app"
    },
    {
     id: 2,
     title: "WebAPIs - Code Quiz",
     key: 'code-quiz',
     github: "https://github.com/AlexysCa/think-you-know-javascript",
     URL: "https://alexysca.github.io/think-you-know-javascript/",
     image: "../../assets/images/code_quiz.png",
     imgAlt: "Javascript code quiz URL" 
    },
    {
     id: 3,
     title: "ORM - Ecommerce Back End",
     key: 'orm',
     URL: "https://github.com/AlexysCa/commerence-the-back-end",
     image: "../../assets/images/orm.png",
     imgAlt: "Back end testing in Insomnia"   
    },
    {
     id: 4,
     title: "NoSQL - Social Network API",
     key: 'nosql',
     URL: "https://github.com/AlexysCa/The-Social-Network-NoSQLv",
     image: "../../assets/images/NoSQL.png",
     imgAlt: "NoSQL testing in Insomnia"   
    },
    {
     id: 5,
     title: "Express.js - Note Taker",
     key: 'express',
     github: "https://github.com/AlexysCa/express-note-taker",
     URL: "https://peaceful-lake-35441.herokuapp.com/",
     image: "../../assets/images/express_note.png",
     imgAlt: "Note taker website"   
    },
    {
     id: 6,
     title: "HTML, CSS, GIT - Code Refactor",
     key: 'html',
     github: "https://github.com/AlexysCa/horiseon-challenge",
     URL: "https://alexysca.github.io/horiseon-challenge/",
     image: "../../assets/images/horiseon.png",
     imgAlt: "Home page of Horiseon marketing website" 
    }
]

function Portfolio() {

    return (
        <section className="portfolio-container">
            <h2>Works</h2>
            <ul className="portfolio-list">
                {projects.map((project) => (
                    <li key={project.id}>
                        <Project project={project} />
                    </li>
                ))}
            </ul>
        </section>
    )
};

export default Portfolio;