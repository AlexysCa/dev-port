import React from "react";

function Nav(props) {

    const { 
        navSections,
        setCurrentSection,
        currentSection
    } = props;

return (
    <nav>
        <ul>
            {navSections.map((section) => (
                <li key={section}>
                    <a href={["#",section.toLowerCase().replace(/\s/g, '')].join('')}
                        onClick={() => {
                            setCurrentSection(section);  
                        }}
                        className={ currentSection === section ? "nav-active" : "nav-inactive" } >
                            {section}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
};

export default Nav;