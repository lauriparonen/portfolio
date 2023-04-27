import React from 'react';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Music from './components/Music/Music';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/music" element={<Music />} />
          <Route path="/metaphysics" element={<Projects />} />
          <Route path="/github" element={<Projects />} />
          <Route path="/about" element={<Projects />} />
          <Route path="/contact" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
