import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Research from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

// Tile rhythm, top to bottom: light hero → parchment metrics → dark experience
// → light work → parchment open source → dark research → light about → dark
// contact → parchment footer. The color change is the section divider, so no two
// adjacent tiles may share a background.
//
// An Architecture section of system diagrams sat between Experience and Work
// until 2026-08-06 and was withdrawn. The diagrams and their .drawio sources are
// kept privately offline, so restoring the section is a re-export and a revert of
// this commit, not a rebuild.
const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Experience />
        <Projects />
        <Research />
        <About />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;
