import React from "react";
import { Grid, Typography, TextField } from "@material-ui/core";
import Data from "../../utiles/resumeData.js";
import Buttonn from "../../components/Button/Button.js";
import "./contact.css";

function Contact() {
  return (
    <Grid container className="section pt_45 pb_45">
      <Grid item xs={12} lg={7}>
        <Grid container>
          <Grid item className="section_title  mb_30">
            <span></span>
            <h6 className="section_title_text">Contact Form</h6>
          </Grid>
          <Grid item xs={12} className="mar">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth name="name" label="Name"></TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth name="email" label="E-mail"></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="messages"
                  label="Message"
                  multiline
                  rows={4}
                ></TextField>
              </Grid>
              <Grid item xs={12} className="resp">
                <Buttonn text="Submit" style={{ padding: "500px" }}>
                  Submit
                </Buttonn>
                <br />
                <br />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* contact info */}
      <Grid item xs={12} lg={5}>
        <Grid container className="mar2">
          <Grid item className="section_title mb_30">
            <span></span>
            <h6 className="section_title_text">Contact Informations</h6>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12}>
                <Typography className="contactinfo_item">
                  <span>Adress : </span> {Data.adress}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className="contactinfo_item">
                  <span>E-mail : </span> {Data.email}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className="contactinfo_item">
                  <span>Phone : </span> {Data.phone}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container className="contactinfo_socialscontainer">
              {Object.keys(Data.social).map((key) => (
                <Grid item className="contactinfo_socials">
                  <a href={Data.social[key].link} target="blank">
                    {Data.social[key].icon}
                  </a>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Contact;
