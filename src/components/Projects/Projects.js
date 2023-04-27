import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Projects</Link>
        </li>
        <li>
          <Link to="/music">Music</Link>
        </li>
        <li>
          <Link to="/metaphysics">Metaphysics</Link>
        </li>
        <li>
          <Link to="/github">Github</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Projects;
