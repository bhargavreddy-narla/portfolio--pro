import React from "react";
import "./About.scss";
import About1 from "../About/About1";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";

const About = () => {
  const useStyles = makeStyles(() => ({
    root: {
      minHeight: "45vh",
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
        <div className="aboutpage">
          <h2 className="aboutpage--H2">About me</h2>
          <Breadcrumbs className="aboutpage--Breadcrumbs">
            <Typography>
              {" "}
              <span>Home</span>
            </Typography>
            <Typography>
              <span>About Me</span>
            </Typography>
          </Breadcrumbs>
        </div>
      </div>
      <About1 />
    </div>
  );
};

export default About;
