import React from "react";
import "./Homebody1.scss";
import Grid from "@mui/material/Grid";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

const Homebody1 = () => {
  return (
    <div className="homebody1">
      <Grid xs={12} container>
        <Grid item xs={5}>
          <h2 className="homebody1--H2">
            Designing With Passion While Exploring The World.
          </h2>
          <p className="homebody1--Para1">
            Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore
            et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus
            commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus
          </p>
          <p className="homebody1--Para1">
            Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore
            et dolore magna aliqua.
          </p>
        </Grid>
        <Grid item xs={4}>
          <h2 className="homebody1--Heading2">
            Any Type Of Query & Discussion.
          </h2>
          <p className="homebody1--Para2">Late talk with me</p>
          <a href="#" className="homebody1--Link">
            hire@colorlib.com
          </a>
        </Grid>
        <Grid item xs={3} className="homebody1--Icons">
          <ArrowRightAltIcon />
          <HorizontalRuleIcon />
          <HorizontalRuleIcon />
        </Grid>
      </Grid>
    </div>
  );
};

export default Homebody1;
