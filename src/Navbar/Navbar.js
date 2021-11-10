import React from "react";
import "./Navbar.scss";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
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
              <img
                className="navbar--img"
                src="data:image/webp;base64,UklGRqAEAABXRUJQVlA4TJMEAAAv0gAMEH9kkG2kopzH+5PtIQQCSSj7qywlEEhxKDPsuJEkRdqqriH/DTx6ngHUpLZtG8ZtcsoduFYAQBgQMSAAggEwAIAACMAEcABMAIaJBWHCIBCEYUIARp9hgjggDoABYmLCABDoYRCAAACAIBCCgVgQAEEwEASA+wsEABAE8UYiEQgEHI5GI/HBC4lCopBIJOr1SgQSjRscDUcj4Gg4HIVGoeFwOKjd2qTIbd5w0mYUtFnUoXXEmrDZFmOtzCAMszlsxv/sqaruEvR8jeg/BLdtJEnyVHdP9rJT1cfOEyD0Yu76o1lUjO7U6/W5649RKVqoM83ffIrK0HM2KqZwq65r4fZzVIDmGdVSeFpP0uLdF8i5btRTtZzxwuwcI7Xw10tkWY/qNn2LLOsPI38jxzp7zTYuXUSO9dC4/x5Z1m9G/o2Z9FJR8w0tIYT9TjOyTRpsUKwxzxE721Qj2xTLzr/KEBoQDRG3YQl97qptXL6AiEhRrxrGHxNmOpU8QXPYybtUkK4iao6CPKqNcSOD+xEJgagNS+j7xv2PSIeoRZrp1LyMeSVuxMwK0sCPRG9sWEL/YuR/E7QtIQwReTWuktGtHA1jEXM2DKHPX7GNK+eT6PS+pWAG1KYNdoZe0TbNTQghDLI+iTJbnMdEWZjTy46PItQGxZKxkRz6nnH/MxIQ+cqox7T0LcxCvMHClzLN/NuLhJ7EjBxjk9HC8myzkRz6JyP3DNRknKDOoisbPBaNW6woY+VUO0APZCE19IXLtnH1nIHeMrRszqC01SJOJD3usZXER652g8yjidTQ/xn3vyKdwH6xclZLW05pdYiuHgtFqZrwoV3sxAK0kRr6ByMPANuP+ch6geoi4cdMECWvgmAnMfTFS7Zx7ayRTqwYYw1YT/xj3P8OE2NBO9N6pa2GJAaDg41QqkU7C0Xf+WVizERq6O+MPMTG5iSKIB7llMDk9JANWtxCuXKav0VtRg3Qbgy9JlJDf2Mbc7NoPfOWmjRhhQHAfuIzpLRiUI3rFZ8r9YuOiZ3SphYL6aFf3F02cB34jD6yIhYdFR5wYSwhfady7VwBlLdjwQG+YNNieWoxhX5VWErlETbN0NQuOw0UURGJu409s6wg6I2F8PFzXbsx2UIDeH57IWXMA+1EdOR1M2jRwxxzanr5B/avIO6YHqJF9Sek2LWEfqdjZ3LhJvBV6a/dDvygEqaW8H/IILsfrhxwNSXDoIcJU+hApz7Yzj8ZvTmv8wxbmMHxzXbgApvUsU6PSHrlylFbQQDfOcZmOjjYMIV+4yQRHX8/obAAdHD3/VgZNXiHtSOnfayA1QndOE3ECvyC+OT6HOM2cFTMyH7kV4dJ6GjHFgCYfVQWnmO7sDOwFfnVu0NECYU/gfeZk5EDyLL2kq6v2zdxOydKF10OmVZP5EUzX5aFnUR0ugnZ1oZRomjhi9bDNPnhm8i4DlKSPt+BrOu1TxOORg+9hsxr+0R0dG9A/hUiR4N7UAV646R2NPXx26gGNU7LcWQ3KkPieWy87XVUh/jzWN8mVIr2Eg3vQ9Wo+5P3kH8BAA=="
              />
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
          <Route path="/contact" exact component={Contact}></Route>
          <Route path="/portfolio" exact component={Portfolio}></Route>
          <Route path="/blog" exact component={Blog}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/services" exact component={Services}></Route>
          <Route path="/" exact component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Sample;
