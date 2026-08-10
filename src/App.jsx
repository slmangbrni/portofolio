import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import News from './pages/News';
import Reading from './pages/Reading';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <Experience />
        <Skills />
        <News />
        <Reading />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
