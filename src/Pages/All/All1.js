import React from "react";
import "./All1.scss";
import Grid from "@mui/material/Grid";

const All1 = () => {
  return (
    <div className="all--Nav">
      <Grid xs={12} container>
        <Grid item xs={12} className="all--Nav--BottomImg">
          <a href="#">
            <img src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices4.png.pagespeed.ic.hVym9sD8pi.webp" />
          </a>
          <a href="#" style={{ marginLeft: "1rem" }}>
            <img src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices5.png.pagespeed.ic.RIUpuP8Qre.webp" />
          </a>
          <a href="#" style={{ marginLeft: "1rem" }}>
            <img src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices6.png.pagespeed.ic.suCHqM6822.webp" />
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

export default All1;
