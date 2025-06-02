import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Treatments from './components/Treatments';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Treatments />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;