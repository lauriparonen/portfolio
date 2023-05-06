import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Bookshelf from './components/Bookshelf/Bookshelf';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import { useLocation } from 'react-router-dom';

import './App.css';
import Metaphysics from './components/Metaphysics/Metaphysics';
import DalleGallery from './components/DalleGallery/DalleGallery';

function UserLocation() {

  /**
   * This function changes the page title depending on the current page.
   * It is called in the App component.
   * 
   * It uses the useLocation hook from react-router-dom to get the current location.
   * It then uses the useEffect hook to change the page title depending on the current location.
   * 
   * @returns null
   */

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "lauri paronen";
      return;
    }
    document.title = location.pathname.substring(1)  + " | lauri paronen";
  }, [location.pathname]);

  return null;

}

function App() {

  /**
   * This function renders the app.
   * It uses the BrowserRouter component from react-router-dom to create the router.
   * It uses the Routes and Route components from react-router-dom to create the routes.
   * 
   * @returns the app
   */

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <UserLocation />
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
