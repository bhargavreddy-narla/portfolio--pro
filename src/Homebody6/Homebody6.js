import React from "react";
import "./Homebody6.scss";
import Grid from "@mui/material/Grid";
import vintage1 from "../Images/vintage1.webp";
import vintage2 from "../Images/vintage2.webp";
import vintage3 from "../Images/vintage3.webp";
import vintage4 from "../Images/vintage4.webp";

const Homebody6 = () => {
  return (
    <div className="homebody6--Images">
      <center>
        <Grid xs={12} container>
          <Grid item xs={3}>
            <span>
              <img src={vintage1} alt="vintage" />
            </span>
          </Grid>
          <Grid item xs={3}>
            <span>
              <img src={vintage2} alt="vintage" />
            </span>
          </Grid>
          <Grid item xs={3}>
            <span>
              <img src={vintage3} alt="vintage" />
            </span>
          </Grid>
          <Grid item xs={3}>
            <span>
              <img src={vintage4} alt="vintage" />
            </span>
          </Grid>
        </Grid>
      </center>
    </div>
  );
};

export default Homebody6;
