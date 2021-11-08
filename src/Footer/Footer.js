import React from "react";
import "./Footer.scss";
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
        <a href="#">
          <img
            className="footer--Img"
            src="https://preview.colorlib.com/theme/personalportfolio/assets/img/logo/xlogo2_footer.png.pagespeed.ic.Qo1tA9v0wW.webp"
          ></img>
        </a>
      </center>
      <h2 className="footer--H2">
        <a href="#">hireme@portfolio.com</a>
      </h2>
      <p className="footer--P1">221B Baker Street, Post office Box 353</p>
      <p className="footer--P2">Park Road, USA - 215431</p>
      <Grid xs={12} container>
        <Grid item xs={10}>
          <p className="footer--P3">
            Copyright ©2021 All rights reserved | This template is made with
            <FavoriteBorderIcon className="footer--P3--Favicon" />
            by
            <a href="#"> Colorlib</a>
          </p>
        </Grid>

        <Grid item xs={2}>
          <div className="footer--SocialLinks">
            <a href="#">Stay connected</a>
            <a href="#">
              <TwitterIcon />
            </a>
            <a href="#">
              <FacebookIcon />
            </a>
            <a href="#">
              <LanguageIcon />
            </a>
            <a href="#">
              <InstagramIcon />
            </a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
