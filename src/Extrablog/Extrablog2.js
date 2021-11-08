import React from "react";
import "./Extrablog1.scss";
import { motion } from "framer-motion";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

const Extrablog2 = ({ content }) => {
  return (
    <div className="extrablog">
      <Grid xs={12} container>
        <Grid item xs={12}>
          <Card className="extrablog--Cards">
            <CardMedia
              className="extrablog--Cards--Img"
              component="img"
              image={content.imageurl}
            />
            <CardContent>
              <Typography>
                <h3 className="extrablog--Cards--H3">
                  <a href="#">{content.title}</a>
                </h3>
              </Typography>
              <Typography>
                <p className="extrablog--Cards--P1">{content.description}</p>
              </Typography>
              <motion.div
                className="extrablog--Cards--Icons"
                animate={{ x: 100 }}
                transition={{ delay: 1, duration: 0.1 }}
              >
                <a href="#">
                  <PersonOutlineIcon /> Travel,Lifestyle
                </a>
                |
                <a href="#">
                  <QuestionAnswerIcon /> 03 Comments
                </a>
              </motion.div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <h1>Hello</h1>
        </Grid>
      </Grid>
    </div>
  );
};

export default Extrablog2;
