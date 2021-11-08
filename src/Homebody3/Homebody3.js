import React from "react";
import "./Homebody3.scss";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import All from "../Pages/All/All";
import Brand from "../Pages/Branding/Brand";
import Logo from "../Pages/Logo/Logo";
import Uiux from "../Pages/UIUX/Uiux";
import Webdesign from "../Pages/Webdesign/Webdesign";
import Grid from "@mui/material/Grid";

const Homebody3 = () => {
  return (
    <div className="homebody3">
      <Grid xs={12} container>
        <Grid item xs={6}>
          <h2 className="homebody3--H2">What Services you will Get from me!</h2>
        </Grid>
      </Grid>
      <div className="homebody3--Navbar--Links">
        <Router>
          <Link to="/all">
            <a href="#">All</a>
          </Link>
          <Link to="/brand">
            <a href="#">Branding</a>
          </Link>
          <Link to="/logo">
            <a href="#">Logo</a>
          </Link>
          <Link to="/ui/ux">
            <a href="#">UI/UX</a>
          </Link>
          <Link to="/webdesign">
            <a href="#">Web Design</a>
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

export default Homebody3;
