import React from "react";
import "./Logo1.scss";
import Grid from "@mui/material/Grid";
import lh1 from "../../Images/lh1.webp";
import lh2 from "../../Images/lh2.webp";
import lh3 from "../../Images/lh3.webp";

const Logo1 = () => {
  return (
    <div className="logo--Nav">
      <Grid xs={12} container>
        <Grid item xs={12} className="logo--Nav--BottomImg">
          <span>
            <img src={lh1} alt="logopage" style={{ marginLeft: "4rem" }} />
          </span>
          <span>
            <img src={lh2} alt="logopage" style={{ marginLeft: "2rem" }} />
          </span>
          <span>
            <img
              src={lh3}
              alt="logopage"
              style={{ width: "360px", height: "361px", marginLeft: "2rem" }}
            />
          </span>
        </Grid>
      </Grid>
    </div>
  );
};

export default Logo1;
