import React from "react";
import "./Services.scss";
import Services1 from "../Services/Services1";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";

const Services = () => {
  const useStyles = makeStyles(() => ({
    root: {
      minHeight: "40vh",
      backgroundImage: `url(${
        process.env.PUBLIC_URL + "/images/background4.jfif"
      })`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <div className="servicepage">
          <h2 className="servicepage--H2">My Services</h2>
          <Breadcrumbs className="servicepage--Breadcrumbs">
            <Typography>
              <span>Home</span>
            </Typography>
            <Typography>
              <span>My Services</span>
            </Typography>
          </Breadcrumbs>
        </div>
      </div>
      <Services1 />
    </div>
  );
};

export default Services;
