import MyPNG from '../../assets/images/Resume.png';

function Resume() {

    return (
        <section className="resume-container flex-row">
            <h2 className="section-title"> Resume </h2>
            <section className='resume-section'>
            <div>
            <a href={MyPNG} download="Alexys_Resume.jpg">
            Download my Resume Here
            </a>
            </div>
            <div className='skills-list'>
                <h3>Developer Proficiencies</h3>
                <p>
                    <ul>
                        <li>HTML/CSS</li>
                        <li>JavaScript</li>
                        <li>JSON</li>
                        <li>APIs</li>
                        <li>JQuery</li>
                        <li>Express</li>
                        <li>Node</li>
                        <li>MySQL</li>
                        <li>NoSQL</li>
                        <li>PWAs</li>
                    </ul>
                </p>
            </div>
            </section>
        </section>
    )

};

export default Resume;