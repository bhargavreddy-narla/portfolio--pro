import React from "react";
import "./Logo1.scss";
import Grid from "@mui/material/Grid";
import lh1 from "../../Images/lh1.webp";
import lh2 from "../../Images/lh2.webp";
import lh3 from "../../Images/lh3.webp";

const Logo1 = () => {
  return (
    <div className="logo--Nav">
      <Grid xs={12} container>
        <Grid item xs={12} className="logo--Nav--BottomImg">
          <a href="#">
            <img src={lh1} />
          </a>
          <a href="#" style={{ marginLeft: "0.5rem" }}>
            <img src={lh2} />
          </a>
          <a href="#" style={{ marginLeft: "0.5rem" }}>
            <img src={lh3} style={{ width: "360px", height: "361px" }} />
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

export default Logo1;
