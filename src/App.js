import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import '../src/components/Project/izmir.css';

function App() {

  const [currentSection, setCurrentSection] = useState("About");
  const [navSections] = useState([
    "About",
    "Works",
    "Contact",
    "Resume",
  ]);

  const navDisplay = () => {
    if (currentSection === "About") {
      return <About />
    } else if (currentSection === "Works") {
      return <Portfolio />
    } else if (currentSection === "Contact") {
      return <ContactForm />
    } else if (currentSection === "Resume") {
      return <About />
      // need to add resume section
    } else {
      return <About />
    }
  }
  return (
   <main>
     <Header currentSection={currentSection} setCurrentSection={setCurrentSection} navSections={navSections} />
     {navDisplay()}
     <Footer />
   </main>
  );
}

export default App;
