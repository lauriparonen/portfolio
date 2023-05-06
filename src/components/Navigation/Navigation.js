import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import { useLocation } from 'react-router-dom';

function NavigationHome(props) {

  const location = useLocation();
  return (
    <div className="navigation">
      <div className='nav-links'>
        <div className='nav-links-row1'>
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
          </div>
          <div className='nav-links-row2'>
          <Link to="/bookshelf" className="nav-link2">
            bookshelf
          </Link>
          <Link to="/gallery" className="nav-link2">
            gallery
          </Link>
          <Link to="/contact" className="nav-link2">
            contact
          </Link>
        </div>
        </div>
    </div>
  );
}
function Navigation() {

  return (
    <div className="navigation-container">
      <h1 className="header"></h1>
      <NavigationHome />
    </div>
  );
}

export default Navigation;
