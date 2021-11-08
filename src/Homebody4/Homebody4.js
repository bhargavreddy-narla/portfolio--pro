import React from "react";
import "./Homebody4.scss";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core/styles";

const Homebody4 = () => {
  const useStyles = makeStyles(() => ({
    root: {
      minHeight: "50vh",
      backgroundImage: `url(${
        process.env.PUBLIC_URL + "/images/background2.webp"
      })`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className="homebody4">
        <Grid xs={12} container>
          <Grid item xs={6}>
            <h2 className="homebody--H2">
              Dont worry for contact i`m available
            </h2>
          </Grid>
          <Grid item xs={6}>
            <center>
              <Button className="homebody4--ContactButton">
                Contact Me Now
              </Button>
            </center>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Homebody4;
