import React from "react";
import "./Blog.scss";
import Blog1 from "../Blog/Blog1";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";

const Blog = () => {
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
        <div className="blogpage">
          <h2 className="blogpage--H2">Blog Area</h2>
          <Breadcrumbs className="blogpage--Breadcrumbs">
            <Typography>
              <a href="#">Home</a>
            </Typography>
            <Typography>
              <a href="#">Blog</a>
            </Typography>
          </Breadcrumbs>
        </div>
      </div>
      <Blog1 />
    </div>
  );
};

export default Blog;
