import React from "react";
import "./Footer.scss";
import portimg from "../Images/portimg.webp";
import Grid from "@mui/material/Grid";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Footer = () => {
  return (
    <div className="footer">
      <center>
        <img src={portimg} className="footer--Img" alt="portfoliologo" />
      </center>
      <h2 className="footer--H2">hireme@portfolio.com</h2>
      <p className="footer--P1">221B Baker Street, Post office Box 353</p>
      <p className="footer--P2">Park Road, USA - 215431</p>
      <Grid xs={12} container>
        <Grid item xs={10}>
          <p className="footer--P3">
            Copyright ©2021 All rights reserved | This template is made with
            <FavoriteBorderIcon className="footer--P3--Favicon" />
            by
            <span className="footer--Colorlib"> Colorlib</span>
          </p>
        </Grid>

        <Grid item xs={2}>
          <div className="footer--SocialLinks">
            <span className="footer--SocialLinks">Stay connected</span>
            <span className="footer--SocialLinks">
              <TwitterIcon />
            </span>
            <span className="footer--SocialLinks">
              <FacebookIcon />
            </span>
            <span className="footer--SocialLinks">
              <LanguageIcon />
            </span>
            <span className="footer--SocialLinks">
              <InstagramIcon />
            </span>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
