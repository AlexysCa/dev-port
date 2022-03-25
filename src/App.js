import './App.css';
import React from 'react';
import Nav from './components/Header/Nav';
import About from './components/Header/Nav/About';

function App() {
  return (
    <div>
      <Nav></Nav>
       <main>
         <About></About>
       </main>
    </div>
  );
}

export default App;
