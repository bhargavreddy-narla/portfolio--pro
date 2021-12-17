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
          <span>
            <img
              src={ub1}
              alt="ui"
              style={{ width: "750px", height: "751px", marginLeft: "4rem" }}
            />
          </span>
        </Grid>
        <Grid item xs={4} className="uiux--Content--Links--Sideimages">
          <span style={{ marginLeft: "-3rem" }}>
            <img
              src={uv1}
              alt="ui"
              style={{ width: "360px", height: "361px" }}
            />
          </span>

          <span style={{ marginLeft: "-3rem" }}>
            <img src={uv2} alt="ui" />
          </span>
        </Grid>
      </Grid>
      <Uiux1 />
    </div>
  );
};

export default Uiux;
