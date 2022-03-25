import React from "react";
import Headshot from '../../assets/images/Alexys_Icon.JPG';

function About() {
    return (
        <section className="about-container">
            <h2>Hi, this is me!</h2>
        <section>
            <section className="about-img">
                <img src={Headshot} alt="Alexys Carrasquillo" />
            </section>
        <section className="about-bio">
            <p>
            My name is Alexys Carrasquillo (she/her/hers). I currently live in Charlotte, NC and work as a contracted Creative Director for Sunshine Media Network.
            I recently graduated from UNC Charlotte's Coding Bootcamp as a Full-Stack Developer. Before I began my journey in the coding world, I went to Central Piedmont to receive my Associates in
            Broadcasting and Production Technology. My first passion was videography. I loved the creative behind filming something and editing it to create the visual from your mind. I also loved the techinal ascept of it. The cameras, studio lights, and audio equipment. 
            The challenge to figure out all the new tools pushed me towards my current job as a Creative Director. Where I take creative lead on graphic design, and even create graphics myself. 
            Along with video animation and my original skill, videography. I always had the desire to learn all I could about Coding. In 2021 I finally decided to go back
            to school and add a new skill to my creative toolbelt. 
            </p>
        </section>
        </section>
        </section>
    )

}

export default About;