import React from "react";
import "./All1.scss";
import Grid from "@mui/material/Grid";
import allh1 from "../../Images/allh1.webp";
import allh2 from "../../Images/allh2.webp";
import allh3 from "../../Images/allh3.webp";

const All1 = () => {
  return (
    <div className="all--Nav">
      <Grid xs={12} container>
        <Grid item xs={12} className="all--Nav--BottomImg">
          <span>
            <img src={allh1} alt="allpage" style={{ marginLeft: "4rem" }} />
          </span>
          <span>
            <img src={allh2} alt="allpage" style={{ marginLeft: "2rem" }} />
          </span>
          <span>
            <img src={allh3} alt="allpage" style={{ marginLeft: "2rem" }} />
          </span>
        </Grid>
      </Grid>
    </div>
  );
};

export default All1;
