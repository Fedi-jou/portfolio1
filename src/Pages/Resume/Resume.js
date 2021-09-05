import { Grid, Icon, TextField, Typography } from "@material-ui/core";
import React from "react";
import Data from "../../utiles/resumeData";
import CustomTimeline, {
  CustomTimeLineSeparator,
} from "../../components/Timeline/Timeline";
import "./Resume.css";
import WorkIcon from "@material-ui/icons/Work";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import SchoolIcon from "@material-ui/icons/School";
import Paper from "@material-ui/core/Paper";
import Button from "../../components/Button/Button";
function Resume() {
  return (
    <>
      <Grid container className="section pb_45 pt_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h2 className="section_title_text">About me</h2>
        </Grid>
        <Grid item xd={12}>
          <Typography variant="body2" className="aboutme_text">
            {Data.about}
          </Typography>
        </Grid>
      </Grid>
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">Resume</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container className="resumetimeline">
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Working experiences" icon={<WorkIcon />}>
                {Data.experiences.map((experience) => (
                  <TimelineItem>
                    <TimelineSeparator className="separator_padding">
                      <TimelineDot
                        variant={"outlined"}
                        className={"timeline_dot"}
                      />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {experience.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {experience.date}
                      </Typography>
                      {/*   <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {experience.description}
                      </Typography> */}
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Education" icon={<SchoolIcon />}>
                {Data.education.map((edu) => (
                  <TimelineItem>
                    <TimelineSeparator className="separator_padding">
                      <TimelineDot
                        variant="outlined"
                        className="timeline_dot"
                      />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {edu.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {edu.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {edu.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/*   <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">Services</h6>
        </Grid>
        {/* <Grid item xs={12} className="section">
          <Grid container spacing={3} justify="space-around">
            {Data.services.map((service) => (
              <Grid item xs={12} sm={6} md={3}>
                <div className="service">
                  <Icon className="service_icon">{service.icon} </Icon>
                  <Typography className="service_title" variant="h6">
                    {service.title}
                  </Typography>

                  <Typography className="service_description" variant="body2">
                    {service.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid> 
      </Grid> */}
      <Grid container className="section graybg pb_45 p_50">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">Skills</h6>
        </Grid>
        <Grid item xs={12} className="resumetimeline">
          <Grid container justify="space-between" spacing={3}>
            {Data.skills.map((skill) => (
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={0} className="skill">
                  <Typography variant="h6" className="skills_title">
                    {skill.title}
                  </Typography>
                  {skill.description.map((element) => (
                    <Typography variant="body2" className="skill_description">
                      <TimelineDot
                        variant={"outlined"}
                        className="timeline_dot"
                      />
                      {element}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* contact */}
    </>
  );
}

export default Resume;
