import './App.css';
import React from 'react';
import Nav from './components/Header/Nav';
import About from './components/Header/Nav/About';
import ContactForm from './components/Header/Nav/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav></Nav>
       <main>
         <About></About>
         
           <ContactForm></ContactForm>

           <Footer />
       </main>
    </div>
  );
}

export default App;
