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
          <span>
            <img
              src={lb1}
              alt="logopage"
              style={{ width: "750px", height: "751px", marginLeft: "4rem" }}
            />
          </span>
        </Grid>
        <Grid item xs={4} className="logo--Content--Links--Sideimages">
          <span style={{ marginLeft: "-3rem" }}>
            <img
              src={lv1}
              alt="logopage"
              style={{ width: "360px", height: "361px" }}
            />
          </span>

          <span style={{ marginLeft: "-3rem" }}>
            <img src={lv2} alt="logopage" />
          </span>
        </Grid>
      </Grid>
      <Logo1 />
    </div>
  );
};

export default Logo;
