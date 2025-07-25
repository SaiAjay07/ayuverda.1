import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Treatments from './components/Treatments';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Musculoskeletal from './components/TreatmentDetails/Musculoskeletal';
import Respiratory from './components/TreatmentDetails/Respiratory';
import Prakriti from './pages/Prakriti';

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <About />
              <Treatments />
              <Testimonials />
              <Blog />
              <Contact />
            </main>
          } />
          <Route path="/treatments/musculoskeletal" element={<Musculoskeletal />} />
          <Route path="/treatments/respiratory" element={<Respiratory />} />
          <Route path="/know-your-prakriti" element={<Prakriti />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App