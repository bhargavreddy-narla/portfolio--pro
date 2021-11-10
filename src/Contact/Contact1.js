import React from "react";
import "./Contact1.scss";
import Grid from "@mui/material/Grid";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
const Contact1 = () => {
  return (
    <div className="contactbody">
      <p className="contactbody--map">
        <center>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.11675417118!2d80.06892448836716!3d13.047487785642284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1636449191837!5m2!1sen!2sin"
            width="1200"
            height="400"
          ></iframe>
        </center>
      </p>
      <h2 className="contactbody--H2">Get in touch</h2>
      <Grid xs={12} container>
        <Grid item xs={8}>
          <textarea
            type="text"
            placeholder="Enter Message"
            className="contactbody--Form--Text"
          ></textarea>
          <div className="contactbody--Name--Email">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="contactbody--Name"
            />
            <input
              type="email"
              placeholder="Email"
              className="contactbody--Email"
            />
          </div>
          <input
            type="text"
            placeholder="Enter Subject"
            className="contactbody--Form--Subject"
          />
        </Grid>
        <Grid item xs={4}>
          <div className="contactbopdy--Sidecontent">
            <div>
              <HomeOutlinedIcon />
            </div>
            <div className="contactbody--Address">
              <h3 className="contactbody--Address--H3">
                Buttonwood, California.
              </h3>
              <p className="contactbody--Address--P1">Rosemead, CA 91770</p>
            </div>
            <div>
              <PhoneIphoneOutlinedIcon />
            </div>
            <div className="contactbody--Address">
              <h3 className="contactbody--Address--H3">+1 253 565 2365</h3>
              <p className="contactbody--Address--P1">Mon to Fri 9am to 6pm</p>
            </div>
            <div>
              <EmailOutlinedIcon />
            </div>
            <div className="contactbody--Address">
              <h3 className="contactbody--Address--H3">support@colorlib.com</h3>
              <p className="contactbody--Address--P1">
                Send us your query anytime!
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact1;
