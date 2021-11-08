import React from "react";
import "./Brand1.scss";
import Grid from "@mui/material/Grid";

const Brand1 = () => {
  return (
    <div className="brand--Nav">
      <Grid xs={12} container>
        <Grid item xs={12} className="brand--Nav--BottomImg">
          <a href="#">
            <img src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices4.png.pagespeed.ic.hVym9sD8pi.webp" />
          </a>
          <a href="#" style={{ marginLeft: "0.5rem" }}>
            <img src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices5.png.pagespeed.ic.RIUpuP8Qre.webp" />
          </a>
          <a href="#" style={{ marginLeft: "0.5rem" }}>
            <img
              src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices1.png.pagespeed.ic.CUSBfud6Mi.webp"
              width="360"
              height="361"
            />
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

export default Brand1;
