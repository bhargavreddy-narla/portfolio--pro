import React from "react";
import "./Homebody2.scss";
import Homebodycards1 from "../HomebodyCards/HomebodyCards1";
import Grid from "@mui/material/Grid";

const Homebody2 = () => {
  return (
    <div className="homebody2">
      <Grid xs={12} container>
        <Grid item xs={6}>
          <h2 className="homebody2--H2">What Services you will Get from me!</h2>
        </Grid>
      </Grid>
      <Homebodycards1 />
    </div>
  );
};

export default Homebody2;
