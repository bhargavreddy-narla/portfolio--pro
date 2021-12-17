import React from "react";
import "./Homebody7.scss";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core/styles";

const Homebody6 = () => {
  const useStyles = makeStyles(() => ({
    root: {
      minHeight: "40vh",
      backgroundImage: `url(${
        process.env.PUBLIC_URL + "/images/background3.webp"
      })`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className="homebody7">
        <Grid xs={12} container>
          <Grid item xs={6}>
            <h2 className="homebody7--H2">
              If Not Now, When? Let’s Work Together!
            </h2>
            <p className="homebody7--Para">
              Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut
              labore et dolore magna aliqua. Quis ipsum suspendisces gravida.
              Risus commodo viverra.
            </p>
            <img
              className="homebody7--Img"
              src="https://preview.colorlib.com/theme/personalportfolio/assets/img/gallery/xsin.png.pagespeed.ic.4L7r6tiIs5.webp"
              alt="myimage"
            />
          </Grid>
          <Grid item xs={6}>
            <center>
              <form className="form">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="homebody7--Form"
                ></input>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="homebody7--Form"
                ></input>
                <textarea
                  type="text"
                  placeholder="Your Message"
                  className="homebody7--Form--Text"
                ></textarea>
                <Button className="homebody7--Form--Button">
                  send message
                </Button>
              </form>
            </center>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Homebody6;
