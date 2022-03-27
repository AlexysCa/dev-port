import React from "react";
import Headshot from '../../assets/images/Alexys_Icon.JPG';

function About() {
    return (
        <section className=" flex-row about-container">
            <h2 className="section-title">Meet Alexys</h2>
        <section className="flex-row about-info">
            <section className="about-img">
                <img src={Headshot} alt="Alexys Carrasquillo" />
            </section>
        <section className="about-bio">
            <p>
            This is Alexys Carrasquillo <span>(she/her/hers)</span>. She is currently located in Charlotte, NC and works as a Creative Director for Sunshine Media Network.
            Alexys graduated from UNC Charlotte's Coding Bootcamp as a Full-Stack Developer in April 2022. Before she began her journey in the coding world, she received her Associates degree in
            Broadcasting and Production Technology from Central Piedmont. Her first passion was videography. She loved the creativity behind filming and editing a video. 
            She also loved the challenge in the techinal ascept of it; the cameras, studio lights, and audio equipment. 
            Figuring out all the new tools pushed her towards her current job title. Where she has creative control on graphic design curation. 
            She always had the desire to learn about Coding. In 2021, she decided to go back to school and add a new skill to my creative toolbelt. 
            </p>
        </section>
        </section>
        </section>
    )

}

export default About;