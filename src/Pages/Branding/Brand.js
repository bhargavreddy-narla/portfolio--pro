import React from "react";
import "./Brand.scss";
import Brand1 from "../Branding/Brand1";
import Grid from "@mui/material/Grid";
const Brand = () => {
  return (
    <div className="all--Content--Links">
      <Grid xs={12} container>
        <Grid item xs={8} className="brand--Content--Links--Main">
          <a href="#">
            <img
              src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices6.png.pagespeed.ic.suCHqM6822.webp"
              width="750"
              height="751"
            />
          </a>
        </Grid>
        <Grid item xs={4} className="brand--Content--Links--Sideimages">
          <a href="#" style={{ marginLeft: "-3rem" }}>
            <img src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices2.png.pagespeed.ic.ptrM11wVrw.webp" />
          </a>

          <a href="#" style={{ marginLeft: "-3rem" }}>
            <img src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices3.png.pagespeed.ic._OiupxHuSe.webp" />
          </a>
        </Grid>
      </Grid>
      <Brand1 />
    </div>
  );
};

export default Brand;
