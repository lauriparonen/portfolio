import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function AppRouter() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Projects />
        </Route>
        <Route path="/music">
          <h1 className="page-title">music</h1>
        </Route>
        <Route path="/metaphysics">
          <h1 className="page-title">metaphysics</h1>
        </Route>
        <Route path="/github">
          <h1 className="page-title">github</h1>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
  
}

export default AppRouter;