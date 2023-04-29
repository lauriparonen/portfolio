import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navigation.css';

function Navigation() {
  return (
    <div className="navigation">
      <Link to="/" className="nav-link">
        home
      </Link>
      <Link to="/about" className="nav-link">
        about
      </Link>
      <Link to="/music" className="nav-link">
        music
      </Link>
      <Link to="/metaphysics" className="nav-link">
        metaphysics
      </Link>
      <Link to="/bookshelf" className="nav-link">
        bookshelf
      </Link>
      <Link to="/contact" className="nav-link">
        contact
      </Link>
    </div>
  );
}

export default Navigation;
