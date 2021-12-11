import React from "react";
import "./All1.scss";
import Grid from "@mui/material/Grid";
import allh1 from "../../Images/allh1.webp";
import allh2 from "../../Images/allh2.webp";
import allh3 from "../../Images/allh3.webp";

const All1 = () => {
  return (
    <div className="all--Nav">
      <Grid xs={12} container>
        <Grid item xs={12} className="all--Nav--BottomImg">
          <a href="#">
            <img src={allh1} />
          </a>
          <a href="#" style={{ marginLeft: "1rem" }}>
            <img src={allh2} />
          </a>
          <a href="#" style={{ marginLeft: "1rem" }}>
            <img src={allh3} />
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

export default All1;
