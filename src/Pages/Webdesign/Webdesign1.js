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
          <span>
            <img src={wbh1} alt="wb" style={{ marginLeft: "4rem" }} />
          </span>
          <span>
            <img src={wbh2} alt="wb" style={{ marginLeft: "2rem" }} />
          </span>
          <span>
            <img
              src={wbh3}
              style={{ width: "360px", height: "361px", marginLeft: "2rem" }}
              alt="wb"
            />
          </span>
        </Grid>
      </Grid>
    </div>
  );
};

export default Webdesign1;
