import React from "react";
import "./Webdesign1.scss";
import Grid from "@mui/material/Grid";
import wbh1 from "../../Images/wbh1.webp";
import wbh2 from "../../Images/wbh2.webp";
import wbh3 from "../../Images/wbh3.webp";

const Webdesign1 = () => {
  return (
    <div className="webdesign--Nav">
      <Grid xs={12} container>
        <Grid item xs={12} className="webdesign--Nav--BottomImg">
          <a href="#">
            <img src={wbh1} />
          </a>
          <a href="#" style={{ marginLeft: "0.5rem" }}>
            <img src={wbh2} />
          </a>
          <a href="#" style={{ marginLeft: "0.5rem" }}>
            <img src={wbh3} style={{ width: "360px", height: "361px" }} />
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

export default Webdesign1;
