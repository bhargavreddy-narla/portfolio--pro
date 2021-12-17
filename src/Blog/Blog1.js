import React from "react";
import "./Blog1.scss";
import blogimg1 from "../Images/blogimg1.webp";
import blogimg2 from "../Images/blogimg2.webp";
import blogimg3 from "../Images/blogimg3.webp";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Pagination from "@mui/material/Pagination";

const Blog1 = () => {
  return (
    <div className="Blogpage">
      <Grid xs={12} container>
        <Grid item xs={7}>
          <Card className="Blogpage--Cards">
            <CardMedia>
              <img
                src={blogimg1}
                alt="blogimg"
                className="Blogpage--Cards--Img"
              />
            </CardMedia>
            <CardContent>
              <Typography>
                <h3 className="Blogpage--Cards--H3">
                  <span>Google inks pact for new 35-storey office</span>
                </h3>
              </Typography>
              <Typography>
                <p className="Blogpage--Cards--P1">
                  That dominion stars lights dominion divide years for fourth
                  have don't stars is that he earth it first without heaven in
                  place seed it second morning saying.
                </p>
              </Typography>
              <div className="Blogpage--Cards--Icons">
                <span>
                  <PersonOutlineIcon /> Travel,Lifestyle
                </span>
                |
                <span>
                  <QuestionAnswerIcon /> 03 Comments
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="Blogpage--Cards" sx={{ marginTop: 5 }}>
            <CardMedia>
              <img
                src={blogimg2}
                alt="blogimg"
                className="Blogpage--Cards--Img"
              />
            </CardMedia>
            <CardContent>
              <Typography>
                <h3 className="Blogpage--Cards--H3">
                  <span>Google inks pact for new 35-storey office</span>
                </h3>
              </Typography>
              <Typography>
                <p className="Blogpage--Cards--P1">
                  That dominion stars lights dominion divide years for fourth
                  have don't stars is that he earth it first without heaven in
                  place seed it second morning saying.
                </p>
              </Typography>
              <div className="Blogpage--Cards--Icons">
                <span>
                  <PersonOutlineIcon /> Travel,Lifestyle
                </span>
                |
                <span>
                  <QuestionAnswerIcon /> 03 Comments
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="Blogpage--Cards" sx={{ marginTop: 5 }}>
            <CardMedia>
              <img
                src={blogimg3}
                alt="blogimg"
                className="Blogpage--Cards--Img"
              />
            </CardMedia>
            <CardContent>
              <Typography>
                <h3 className="Blogpage--Cards--H3">
                  <span>Google inks pact for new 35-storey office</span>
                </h3>
              </Typography>
              <Typography>
                <p className="Blogpage--Cards--P1">
                  That dominion stars lights dominion divide years for fourth
                  have don't stars is that he earth it first without heaven in
                  place seed it second morning saying.
                </p>
              </Typography>
              <div className="Blogpage--Cards--Icons">
                <span>
                  <PersonOutlineIcon /> Travel,Lifestyle
                </span>
                |
                <span>
                  <QuestionAnswerIcon /> 03 Comments
                </span>
              </div>
            </CardContent>
          </Card>
          <Pagination
            count={4}
            variant="outlined"
            shape="rounded"
            className="Blogpage--Cards--Pagination"
          />
        </Grid>
        <Grid item xs={4}>
          <div className="Blogpage--Sidecontent">
            <Card>
              <CardContent>
                <input
                  type="search"
                  placeholder="Search Keyword"
                  className="Blogpage--Sidecontent--Input"
                />
                <Button className="Blogpage--Sidecontent--Button">
                  Search
                </Button>
              </CardContent>
            </Card>
            <Card className="Blogpage--Sidecontent--Card2">
              <CardContent>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <h4 className="Blogpage--Sidecontent--Card2--H4">
                          Category
                        </h4>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <span className="Blogpage--Sidecontent--Card2">
                          Resturant Food(37)
                        </span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <span className="Blogpage--Sidecontent--Card2">
                          Travel news(10)
                        </span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <span className="Blogpage--Sidecontent--Card2">
                          Modern Technology(03)
                        </span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <span className="Blogpage--Sidecontent--Card2">
                          Product(11)
                        </span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <span className="Blogpage--Sidecontent--Card2">
                          Inspiration21
                        </span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <span className="Blogpage--Sidecontent--Card2">
                          Health Care(21)09
                        </span>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Blog1;
