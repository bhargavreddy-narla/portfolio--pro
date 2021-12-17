import React from "react";
import "./Contact.scss";
import Contact1 from "../Contact/Contact1";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";

const Contact = () => {
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
        <div className="contactpage">
          <h2 className="contactpage--H2">Contact Us</h2>
          <Breadcrumbs className="contactpage--Breadcrumbs">
            <Typography>
              <span>Home</span>
            </Typography>
            <Typography>
              <span>Contact</span>
            </Typography>
          </Breadcrumbs>
        </div>
      </div>
      <Contact1 />
    </div>
  );
};

export default Contact;
