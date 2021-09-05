import React from "react";
import { useState } from "react";
import {
  Grid,
  Tabs,
  Tab,
  CardActionArea,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import Data from "../../utiles/resumeData.js";

import "./Portfolio.css";

function Portfolio() {
  const [value, setValue] = useState("all");
  const [projectdialoge, setProjectdialoge] = useState(false);

  return (
    <Grid container className="section pb_45 pt_45">
      <Grid item className="section_title mb_30">
        <span></span>
        <h2 className="section_title_text">Portfolio</h2>
      </Grid>
      <Grid item xs={12}>
        <Tabs
          value={value}
          indicatorColor="white"
          className="custom_tabs"
          onChange={(even, newvalue) => setValue(newvalue)}
        >
          <Tab
            label="All"
            value="all"
            className={
              value == "all" ? "customtabs_item active" : "customtabs_item"
            }
          />
          {[...new Set(Data.projects.map((item) => item.tag))].map((tag) => (
            <Tab
              label={tag}
              value={tag}
              className={
                value == tag ? "customtabs_item active" : "customtabs_item"
              }
            />
          ))}
        </Tabs>
      </Grid>
      {/*projects*/}
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {Data.projects.map((project) => (
            <>
              {value == project.tag || value == "all" ? (
                <Grid item xs={12} sm={6} md={4}>
                  <Grow in timeout={1000}>
                    <Card
                      className="customcard"
                      onClick={() => setProjectdialoge(project)}
                    >
                      <CardActionArea>
                        <CardMedia
                          className="customcard_image"
                          image={project.image}
                          title={project.title}
                        />

                        <CardContent>
                          <Typography
                            variant={"body2"}
                            className="customcard_title"
                          >
                            {project.title}
                          </Typography>
                          <Typography
                            variant="caption"
                            className="customcard_caption"
                          >
                            {project.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>

      <Dialog
        open={projectdialoge}
        onClose={() => setProjectdialoge(false)}
        className="projectdialoge"
      >
        <DialogTitle onClose={() => setProjectdialoge(false)}>
          {projectdialoge.title}
          <img
            src={projectdialoge.image}
            alt=""
            className="projectdialoge_image"
          />
          <a href={projectdialoge.netlify} target="_blank">
            {projectdialoge.description}
          </a>
        </DialogTitle>

        <DialogContent>
          <Typography className="projectdialoge_description">
            {projectdialoge.Description}
          </Typography>
        </DialogContent>
        <DialogActions className="projectdialoge_actions">
          {projectdialoge?.links?.map((link) => (
            <a href={link.link} target="_blank" className="projectdialoge_icon">
              {link.icon}
            </a>
          ))}
        </DialogActions>
      </Dialog>
    </Grid>
  );
}

export default Portfolio;
