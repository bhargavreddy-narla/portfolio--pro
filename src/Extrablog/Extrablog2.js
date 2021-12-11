import React from "react";
import "./Extrablog1.scss";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Pagination from "@mui/material/Pagination";

const Extrablog2 = ({ content }) => {
  return (
    <div className="extrablog">
      <Grid xs={12} container>
        <Grid item xs={8}>
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
              <div className="extrablog--Cards--Icons">
                <a href="#">
                  <PersonOutlineIcon /> Travel,Lifestyle
                </a>
                |
                <a href="#">
                  <QuestionAnswerIcon /> 03 Comments
                </a>
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
                        <a href="#">Resturant Food(37)</a>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <a href="#">Travel news(10)</a>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <a href="#">Modern Technology(03)</a>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <a href="#">Product(11)</a>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <a href="#">Inspiration21</a>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <a href="#">Health Care(21)09</a>
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

export default Extrablog2;
