import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navigation.css';
import { useLocation } from 'react-router-dom';

function NavigationHome(props) {
  /**
   * This function renders the navigation bar for the home page,
   * excluding thus the home link.
   */
  return (
    <div className="navigation-home">
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
      <Link to="/gallery" className="nav-link">
        gallery
      </Link>
      <Link to="/contact" className="nav-link">
        contact
      </Link>
    </div>
  );
}

function NavigationNoHome(props) {
  /**
   * This function renders the navigation bar for all pages
   * except the home page, including thus the home link.
   */
  const location = useLocation();
  return (
    <div className="navigation">
      {location.pathname !== "/" ? (
        <Link to="/" className="nav-link">
          home
        </Link>
      ) : null}
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
      <Link to="/gallery" className="nav-link">
        gallery
      </Link>
      <Link to="/contact" className="nav-link">
        contact
      </Link>
    </div>
  );
}
function Navigation(props) {
  const location = useLocation();

  // Render the header in the middle of the view for the home page
  if (location.pathname === "/") {
    return (
      <div className="navigation-container">
        <h1 className="header"></h1>
        <NavigationHome />
      </div>
    );
  }

  // Render the header and navigation bar beneath it for all other pages
  return (
    <div className="navigation-container">
      <h1 className="header"></h1>
      <NavigationNoHome />
    </div>
  );
}

export default Navigation;
