import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Treatments from './components/Treatments';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Musculoskeletal from './components/TreatmentDetails/Musculoskeletal';
import Respiratory from './components/TreatmentDetails/Respiratory';

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
              <Blog />
              <Contact />
            </main>
          } />
          <Route path="/treatments/musculoskeletal" element={<Musculoskeletal />} />
          <Route path="/treatments/respiratory" element={<Respiratory />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}