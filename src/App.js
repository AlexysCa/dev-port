import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {

  const [currentSection, setCurrentSection] = useState("About");
  const [navSections] = useState([
    "About",
    "Portfolio",
    "Contact",
    "Resume",
  ]);

  const navDisplay = () => {
    if (currentSection === "About") {
      return <About />
    } else if (currentSection === "Portfolio") {
      return <Portfolio />
    } else if (currentSection === "Contact") {
      return <ContactForm />
    } else if (currentSection === "Resume") {
      return <Resume />
    } else {
      return <About />
    }
  }
  return (
   <main>
     <link rel='stylesheet' href='css/izmir.css'></link>
     <Header currentSection={currentSection} setCurrentSection={setCurrentSection} navSections={navSections} />
     {navDisplay()}
     <Footer />
   </main>
  );
}

export default App;
