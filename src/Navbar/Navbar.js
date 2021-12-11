import React from "react";
import "./Navbar.scss";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import plogo from "../Images/plogo.webp";
import Home from "../Home/Home";
import About from "../About/About";
import Services from "../Services/Services";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Blog from "../Blog/Blog";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const Sample = () => {
  return (
    <Router>
      <div class="navbar">
        <Grid xs={12} container>
          <Grid item xs={4}>
            <a href="#">
              {/* src={portlogo1} */}
              <img className="navbar--img" src={plogo} />
            </a>
          </Grid>
          <Grid item xs={8} className="navbar--Links">
            <ul>
              <li>
                <Link to="/" className="navbar--Links--Content">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="navbar--Links--Content">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="navbar--Links--Content">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="navbar--Links--Content">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="navbar--Links--Content">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="navbar--Links--Content">
                  Contact
                </Link>
              </li>
              <li>
                <Button>Get free consultant</Button>
              </li>
            </ul>
          </Grid>
        </Grid>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/contact" exact component={Contact}></Route>
          <Route path="/portfolio" exact component={Portfolio}></Route>
          <Route path="/blog" exact component={Blog}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/services" exact component={Services}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Sample;
