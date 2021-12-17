import React from "react";
import "./Portfolio1.scss";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import All from "../Pages/All/All";
import Brand from "../Pages/Branding/Brand";
import Logo from "../Pages/Logo/Logo";
import Uiux from "../Pages/UIUX/Uiux";
import Webdesign from "../Pages/Webdesign/Webdesign";
import Grid from "@mui/material/Grid";

const Portfolio1 = () => {
  return (
    <div className="portfolio1">
      <Grid xs={12} container>
        <Grid item xs={6}>
          <h2 className="portfolio1--H2">
            What Services you will Get from me!
          </h2>
        </Grid>
      </Grid>
      <div className="portfolio1--Navbar--Links">
        <Router>
          <Link to="/all">
            <span>All</span>
          </Link>
          <Link to="/brand">
            <span>Branding</span>
          </Link>
          <Link to="/logo">
            <span>Logo</span>
          </Link>
          <Link to="/ui/ux">
            <span>UI/UX</span>
          </Link>
          <Link to="/webdesign">
            <span>Web Design</span>
          </Link>
          <Switch>
            <Route path="/all" exact component={All}></Route>
          </Switch>
          <Switch>
            <Route path="/brand" exact component={Brand}></Route>
          </Switch>
          <Switch>
            <Route path="/logo" exact component={Logo}></Route>
          </Switch>
          <Switch>
            <Route path="/ui/ux" exact component={Uiux}></Route>
          </Switch>
          <Switch>
            <Route path="/webdesign" exact component={Webdesign}></Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default Portfolio1;
