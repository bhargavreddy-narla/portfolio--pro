import React from "react";
import "./All.scss";
import All1 from "../All/All1";
import Grid from "@mui/material/Grid";

const All = () => {
  return (
    <div className="all--Content--Links">
      <Grid xs={12} container>
        <Grid item xs={8} className="all--Content--Links--Main">
          <a href="#">
            <img src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices1.png.pagespeed.ic.CUSBfud6Mi.webp" />
          </a>
        </Grid>
        <Grid item xs={4} className="all--Content--Links--Sideimages">
          <a href="#">
            <img src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices2.png.pagespeed.ic.ptrM11wVrw.webp" />
          </a>

          <a href="#">
            <img src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices3.png.pagespeed.ic._OiupxHuSe.webp" />
          </a>
        </Grid>
      </Grid>
      <All1 />
    </div>
  );
};

export default All;
