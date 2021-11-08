import React from "react";
import "./Webdesign.scss";
import Webdesign1 from "../Webdesign/Webdesign1";
import Grid from "@mui/material/Grid";
const Webdesign = () => {
  return (
    <div className="webdesign--Content--Links">
      <Grid xs={12} container>
        <Grid item xs={8} className="webdesign--Content--Links--Main">
          <a href="#">
            <img
              src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices3.png.pagespeed.ic._OiupxHuSe.webp"
              width="750"
              height="751"
            />
          </a>
        </Grid>
        <Grid item xs={4} className="webdesign--Content--Links--Sideimages">
          <a href="#" style={{ marginLeft: "-3rem" }}>
            <img
              src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices2.png.pagespeed.ic.ptrM11wVrw.webp"
              width="360"
              height="361"
            />
          </a>

          <a href="#" style={{ marginLeft: "-3rem" }}>
            <img
              src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices1.png.pagespeed.ic.CUSBfud6Mi.webp"
              width="360"
              height="361"
            />
          </a>
        </Grid>
      </Grid>
      <Webdesign1 />
    </div>
  );
};

export default Webdesign;
