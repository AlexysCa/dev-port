import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Footer from './components/Footer';


function App() {

  const [currentSection, setCurrentSection] = useState("About");
  const navSections = [
    "About",
    "Skills",
    "Portfolio",
    "Contact",
    "Tools & Technologies"
  ];

  const sections = {
    About: <About />,
    Skills: <Skills />,
    Portfolio: <Portfolio />,
    Contact: <ContactForm />,
    "Tools & Technologies": <Resume />
  };

  const navDisplay = () => {
    return sections[currentSection] || <About />;
  };

  return (
   <main>
     <Header
     currentSection={currentSection}
     setCurrentSection={setCurrentSection}
     navSections={navSections}
     />
     {navDisplay()}
     <Footer />
   </main>
  );
}

export default App;
