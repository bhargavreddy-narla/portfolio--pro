import React from "react";
import "./Uiux.scss";
import Uiux1 from "../UIUX/Uiux1";
import Grid from "@mui/material/Grid";
const Uiux = () => {
  return (
    <div className="uiux--Content--Links">
      <Grid xs={12} container>
        <Grid item xs={8} className="uiux--Content--Links--Main">
          <a href="#">
            <img
              src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices1.png.pagespeed.ic.CUSBfud6Mi.webp"
              width="750"
              height="751"
            />
          </a>
        </Grid>
        <Grid item xs={4} className="uiux--Content--Links--Sideimages">
          <a href="#" style={{ marginLeft: "-3rem" }}>
            <img
              src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices2.png.pagespeed.ic.ptrM11wVrw.webp"
              width="360"
              height="361"
            />
          </a>

          <a href="#" style={{ marginLeft: "-3rem" }}>
            <img src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices3.png.pagespeed.ic._OiupxHuSe.webp" />
          </a>
        </Grid>
      </Grid>
      <Uiux1 />
    </div>
  );
};

export default Uiux;
