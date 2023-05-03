import React, { useState } from 'react';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Music from './components/Music/Music';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Bookshelf from './components/Bookshelf/Bookshelf';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import { useLocation } from 'react-router-dom';

// todo: adjust site to be mobile friendly;
// finish gallery page;
// ensure all components work as intended on mobile and all browsers


import './App.css';
import Metaphysics from './components/Metaphysics/Metaphysics';
import DalleGallery from './components/DalleGallery/DalleGallery';

function App() {


  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <Navigation />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/metaphysics" element={<Metaphysics />} />
          <Route path="/bookshelf" element={<Bookshelf />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<DalleGallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
