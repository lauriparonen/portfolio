import React, { useState } from 'react';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Music from './components/Music/Music';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Bookshelf from './components/Bookshelf/Bookshelf';


import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/music" element={<Music />} />
          <Route path="/metaphysics" element={<Projects />} />
          <Route path="/bookshelf" element={<Bookshelf />} />
          <Route path="/about" element={<Projects />} />
          <Route path="/contact" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
