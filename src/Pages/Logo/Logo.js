import React from "react";
import "./Logo.scss";
import Logo1 from "../Logo/Logo1";
import Grid from "@mui/material/Grid";
import lb1 from "../../Images/lb1.webp";
import lv1 from "../../Images/lv1.webp";
import lv2 from "../../Images/lv2.webp";

const Logo = () => {
  return (
    <div className="logo--Content--Links">
      <Grid xs={12} container>
        <Grid item xs={8} className="logo--Content--Links--Main">
          <a href="#">
            <img src={lb1} style={{ width: "750px", height: "751px" }} />
          </a>
        </Grid>
        <Grid item xs={4} className="logo--Content--Links--Sideimages">
          <a href="#" style={{ marginLeft: "-3rem" }}>
            <img src={lv1} style={{ width: "360px", height: "361px" }} />
          </a>

          <a href="#" style={{ marginLeft: "-3rem" }}>
            <img src={lv2} />
          </a>
        </Grid>
      </Grid>
      <Logo1 />
    </div>
  );
};

export default Logo;
