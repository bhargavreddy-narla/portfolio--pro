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
          <span>
            <img src={brandh1} alt="brand" style={{ marginLeft: "4rem" }} />
          </span>
          <span>
            <img src={brandh2} alt="brand" style={{ marginLeft: "2rem" }} />
          </span>
          <span>
            <img
              src={brandh3}
              alt="brand"
              style={{ width: "360px", height: "361px", marginLeft: "2rem" }}
            />
          </span>
        </Grid>
      </Grid>
    </div>
  );
};

export default Brand1;
