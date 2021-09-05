import { Typography } from "@material-ui/core";
import React from "react";
import Img from "../../assets/images/img-1.jpg";
import "./Profile.css";
import CustomTimeline, { CustomTimeLineSeparator } from "../Timeline/Timeline";
import Data from "../../utiles/resumeData";
import PersonIcon from "@material-ui/icons/Person";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import Buttonn from "../Button/Button";
import GetAppIcon from "@material-ui/icons/GetApp";
import CV from "../../assets/images/CV.pdf";
const CustomTimelineItem = ({ title, text, link }) => {
  return (
    <TimelineItem>
      <CustomTimeLineSeparator />
      <TimelineContent className="timeline_content">
        {link ? (
          <Typography className="timelineItem_text">
            <span> {title}</span> <a href={link}> {text}</a>
          </Typography>
        ) : (
          <Typography className="timelineItem_text">
            <span> {title}</span> {text}
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};

function Profile() {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{Data.name}</Typography>
        <Typography className="title">{Data.title}</Typography>
      </div>
      <figure>
        <img className="profile_image" src={Img} alt="Profile" />
      </figure>
      <div className="profile_information">
        <CustomTimeline icon={<PersonIcon />}>
          <CustomTimelineItem title="Name :" text={Data.name} />
          <CustomTimelineItem title="Title :" text={Data.title} />
          <CustomTimelineItem title="E-Mail :" text={Data.email} />
          {/*   {Object.keys(Data.social).map((key) => (
            <CustomTimelineItem
              title={key + " :"}
              text={Data.social[key].text}
              link={Data.social[key].link}
            />
          ))} */}
        </CustomTimeline>
        <div className="button_container">
          <a href={CV} download="CV Fedi Joubali" target="_blank">
            <Buttonn text="Download CV" icon={<GetAppIcon />} />
          </a>

          {/*      <Buttonn
            text="Download CV"
            icon={<GetAppIcon />}
          ></Buttonn>  */}
        </div>
      </div>
    </div>
  );
}

export default Profile;
