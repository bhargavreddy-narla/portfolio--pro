import React from "react";
import "./Uiux.scss";
import Uiux1 from "../UIUX/Uiux1";
import Grid from "@mui/material/Grid";
import ub1 from "../../Images/ub1.webp";
import uv1 from "../../Images/uv1.webp";
import uv2 from "../../Images/uv2.webp";

const Uiux = () => {
  return (
    <div className="uiux--Content--Links">
      <Grid xs={12} container>
        <Grid item xs={8} className="uiux--Content--Links--Main">
          <a href="#">
            <img src={ub1} style={{ width: "750px", height: "751px" }} />
          </a>
        </Grid>
        <Grid item xs={4} className="uiux--Content--Links--Sideimages">
          <a href="#" style={{ marginLeft: "-3rem" }}>
            <img src={uv1} style={{ width: "360px", height: "361px" }} />
          </a>

          <a href="#" style={{ marginLeft: "-3rem" }}>
            <img src={uv2} />
          </a>
        </Grid>
      </Grid>
      <Uiux1 />
    </div>
  );
};

export default Uiux;
