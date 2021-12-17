import React from "react";
import "./About1.scss";
import Grid from "@mui/material/Grid";
import aboutimg from "../Images/aboutimg.webp";

const About1 = () => {
  return (
    <div className="aboutpage--Body">
      <Grid xs={12} container>
        <Grid item xs={6}>
          <img src={aboutimg} alt="aboutimg" />
        </Grid>
        <Grid item xs={4}>
          <h3 className="aboutpage--Body--H3">
            I Create Products Not Just Art.
          </h3>
          <p className="aboutpage--Body--P1">
            Unlimited rewards. enjoy attractive discounts flexible Payme options
            global usage. Unlimited rewards. enjoy attracti exible ayment
            options global usage.
          </p>
          <h4 className="aboutpage--Body--H4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum.
          </h4>
          <p className="aboutpage--Body--P2">
            Unlimited rewards. enjoy attractive discounts flexible Payme options
            global usage. Unlimited rewards. enjoy attracti exible ayment
            options global usage.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default About1;
