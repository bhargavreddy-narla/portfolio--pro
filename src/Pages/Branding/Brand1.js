import React from "react";
import "./Brand1.scss";
import Grid from "@mui/material/Grid";
import brandh1 from "../../Images/brandh1.webp";
import brandh2 from "../../Images/brandh2.webp";
import brandh3 from "../../Images/brandh3.webp";

const Brand1 = () => {
  return (
    <div className="brand--Nav">
      <Grid xs={12} container>
        <Grid item xs={12} className="brand--Nav--BottomImg">
          <a href="#">
            <img src={brandh1} />
          </a>
          <a href="#" style={{ marginLeft: "0.5rem" }}>
            <img src={brandh2} />
          </a>
          <a href="#" style={{ marginLeft: "0.5rem" }}>
            <img src={brandh3} style={{ width: "360px", height: "361px" }} />
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

export default Brand1;
