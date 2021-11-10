import React from "react";
import "./Services1.scss";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Services2 = ({ content }) => {
  return (
    <div className="cardcontent">
      <Grid xs={12}>
        <Grid item xs={4}>
          <Card sx={{ width: 350 }} className="cards">
            <CardMedia
              className="cardcontent--Img"
              component="img"
              image={content.imageurl}
            />
            <CardContent>
              <Typography className="cardcontent--H3">
                <h3>{content.title}</h3>
              </Typography>
              <Typography className="cardcontent--Para">
                <p>{content.description}</p>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Services2;
