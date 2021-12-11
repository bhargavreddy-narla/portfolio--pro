import React from "react";
import "./Uiux1.scss";
import Grid from "@mui/material/Grid";
import uh1 from "../../Images/uh1.webp";
import uh2 from "../../Images/uh2.webp";
import uh3 from "../../Images/uh3.webp";

const Uiux1 = () => {
  return (
    <div className="uiux--Nav">
      <Grid xs={12} container>
        <Grid item xs={12} className="uiux--Nav--BottomImg">
          <a href="#">
            <img src={uh1} />
          </a>
          <a href="#" style={{ marginLeft: "0.5rem" }}>
            <img src={uh2} />
          </a>
          <a href="#" style={{ marginLeft: "0.5rem" }}>
            <img src={uh3} style={{ width: "360px", height: "361px" }} />
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

export default Uiux1;
