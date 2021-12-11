import React from "react";
import "./All.scss";
import All1 from "../All/All1";
import Grid from "@mui/material/Grid";
import allb1 from "../../Images/allb1.webp";
import averone from "../../Images/averone.webp";
import allver2 from "../../Images/allver2.webp";

const All = () => {
  return (
    <div className="all--Content--Links">
      <Grid xs={12} container>
        <Grid item xs={8} className="all--Content--Links--Main">
          <a href="#">
            <img src={allb1} />
          </a>
        </Grid>
        <Grid item xs={4} className="all--Content--Links--Sideimages">
          <a href="#">
            <img src={averone} />
          </a>

          <a href="#">
            <img src={allver2} />
          </a>
        </Grid>
      </Grid>
      <All1 />
    </div>
  );
};

export default All;
