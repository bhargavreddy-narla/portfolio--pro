import React from "react";
import "./Brand.scss";
import Brand1 from "../Branding/Brand1";
import Grid from "@mui/material/Grid";
import brandb1 from "../../Images/brandb1.webp";
import brandv1 from "../../Images/brandv1.webp";
import brandv2 from "../../Images/brandv2.webp";

const Brand = () => {
  return (
    <div className="all--Content--Links">
      <Grid xs={12} container>
        <Grid item xs={8} className="brand--Content--Links--Main">
          <a href="#">
            <img src={brandb1} style={{ width: "750px", height: "751px" }} />
          </a>
        </Grid>
        <Grid item xs={4} className="brand--Content--Links--Sideimages">
          <a href="#" style={{ marginLeft: "-3rem" }}>
            <img src={brandv1} />
          </a>

          <a href="#" style={{ marginLeft: "-3rem" }}>
            <img src={brandv2} />
          </a>
        </Grid>
      </Grid>
      <Brand1 />
    </div>
  );
};

export default Brand;
