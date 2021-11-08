import React from "react";
import "./Uiux1.scss";
import Grid from "@mui/material/Grid";

const Uiux1 = () => {
  return (
    <div className="uiux--Nav">
      <Grid xs={12} container>
        <Grid item xs={12} className="uiux--Nav--BottomImg">
          <a href="#">
            <img src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices4.png.pagespeed.ic.hVym9sD8pi.webp" />
          </a>
          <a href="#" style={{ marginLeft: "0.5rem" }}>
            <img src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices5.png.pagespeed.ic.RIUpuP8Qre.webp" />
          </a>
          <a href="#" style={{ marginLeft: "0.5rem" }}>
            <img
              src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices6.png.pagespeed.ic.suCHqM6822.webp"
              width="360"
              height="361"
            />
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

export default Uiux1;
