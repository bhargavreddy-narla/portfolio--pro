import React from "react";
import "./Portfolio.scss";
import Portfolio1 from "../Portfolio/Portfolio1";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";

const Portfolio = () => {
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
        <div className="portfoliopage">
          <h2 className="portfoliopage--H2">My Portfolio</h2>
          <Breadcrumbs className="portfoliopage--Breadcrumbs">
            <Typography>
              {" "}
              <a href="#">Home</a>
            </Typography>
            <Typography>
              <a href="#">My Portfolio</a>
            </Typography>
          </Breadcrumbs>
        </div>
      </div>
      <Portfolio1 />
    </div>
  );
};

export default Portfolio;
