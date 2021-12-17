import React from "react";
import "./Home.scss";
import { motion } from "framer-motion";
import mypic from "../Images/mypic.jpg";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core/styles";

const Home = () => {
  const useStyles = makeStyles(() => ({
    root: {
      minHeight: "100vh",
      // backgroundImage: `url(${
      //   process.env.PUBLIC_URL + "/images/background1.webp"
      // })`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="home">
        <Grid xs={12} container>
          <Grid item xs={6}>
            <motion.p
              animate={{ y: -5 }}
              transition={{ delay: 0.5 }}
              className="home--Para1"
            >
              get every single solutions.
            </motion.p>
            <motion.h1
              animate={{ y: -50 }}
              transition={{ delay: 0.5 }}
              className="home--H1"
            >
              {/* I'm designer haris f. watson */}
              Bhargav Reddy
            </motion.h1>
            <motion.p
              animate={{ y: -50 }}
              transition={{ delay: 0.5 }}
              className="home--Para2"
            >
              jhorem rfpsum golor sidt amet, consectetur adipiscing elit,
              eiusmod tempor incididunt utvjhg labore bet delore magna aliqua.
              Quis ipsum suspendisse ultrices gravida.
            </motion.p>
            <div className="home--Buttons">
              <Button variant="text" className="home--Button1">
                Learn more
              </Button>
              <Button variant="text" className="home--Button2">
                Hire me
              </Button>
            </div>
          </Grid>
          <Grid item xs={6} className="home--Img">
            <img
              src={mypic}
              alt="myimage"
              style={{ width: "70%", height: "90vh" }}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
