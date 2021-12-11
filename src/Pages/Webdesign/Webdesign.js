import React from "react";
import "./Webdesign.scss";
import Webdesign1 from "../Webdesign/Webdesign1";
import Grid from "@mui/material/Grid";
import wbb1 from "../../Images/wbb1.webp";
import wbv1 from "../../Images/wbv1.webp";
import wbv2 from "../../Images/wbv2.webp";

const Webdesign = () => {
  return (
    <div className="webdesign--Content--Links">
      <Grid xs={12} container>
        <Grid item xs={8} className="webdesign--Content--Links--Main">
          <a href="#">
            <img src={wbb1} style={{ width: "750px", height: "751px" }} />
          </a>
        </Grid>
        <Grid item xs={4} className="webdesign--Content--Links--Sideimages">
          <a href="#" style={{ marginLeft: "-3rem" }}>
            <img src={wbv1} style={{ width: "360px", height: "361px" }} />
          </a>

          <a href="#" style={{ marginLeft: "-3rem" }}>
            <img src={wbv2} style={{ width: "360px", height: "361px" }} />
          </a>
        </Grid>
      </Grid>
      <Webdesign1 />
    </div>
  );
};

export default Webdesign;
