import React from "react";

function Nav({ navSections, setCurrentSection, currentSection }) { return ( <nav> <ul> {navSections.map((section) => ( <li key={section}> <a href={`#${section.toLowerCase().replace(/\s/g, "")}`} onClick={() => { setCurrentSection(section); }} className={ currentSection === section ? "nav-active" : "nav-inactive" } > {section} </a> </li> ))} </ul> </nav> ); }

export default Nav;