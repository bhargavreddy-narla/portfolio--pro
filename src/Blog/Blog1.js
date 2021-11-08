import React from "react";
import "./Blog1.scss";
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
                className="Blogpage--Cards--Img"
                src="https://preview.colorlib.com/theme/personalportfolio/assets/img/blog/xsingle_blog_1.png.pagespeed.ic.Vb11bfvxZv.webp"
              />
            </CardMedia>
            <CardContent>
              <Typography>
                <h3 className="Blogpage--Cards--H3">
                  <a href="#">Google inks pact for new 35-storey office</a>
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
                <a href="#">
                  <PersonOutlineIcon /> Travel,Lifestyle
                </a>{" "}
                |
                <a href="#">
                  <QuestionAnswerIcon /> 03 Comments
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="Blogpage--Cards" sx={{ marginTop: 5 }}>
            <CardMedia>
              <img
                className="Blogpage--Cards--Img"
                sx={{ mt: 5 }}
                src="https://preview.colorlib.com/theme/personalportfolio/assets/img/blog/xsingle_blog_2.png.pagespeed.ic.poum1l12np.webp"
              />
            </CardMedia>
            <CardContent>
              <Typography>
                <h3 className="Blogpage--Cards--H3">
                  <a href="#">Google inks pact for new 35-storey office</a>
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

          <Card className="Blogpage--Cards" sx={{ marginTop: 5 }}>
            <CardMedia>
              <img
                className="Blogpage--Cards--Img"
                src="https://preview.colorlib.com/theme/personalportfolio/assets/img/blog/xsingle_blog_4.png.pagespeed.ic.cZ-GaUx1n2.webp"
              />
            </CardMedia>
            <CardContent>
              <Typography>
                <h3 className="Blogpage--Cards--H3">
                  <a href="#">Google inks pact for new 35-storey office</a>
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
                <a href="#">
                  <PersonOutlineIcon /> Travel,Lifestyle
                </a>{" "}
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

export default Blog1;
