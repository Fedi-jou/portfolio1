import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import "./Timeline.css";
import { Typography } from "@material-ui/core";

function CustomTimeline({ title, icon, children }) {
  return (
    <Timeline className={"timeline"}>
      <TimelineItem className={"timeline_firstitem"}>
        <TimelineSeparator>
          <TimelineDot className={"timeline_dot_header"}>{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="6" className={"timeline_header"}>
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      {children}
      {/* <TimelineItem>
        <CustomTimeLineSeparator />
        <TimelineContent>Code</TimelineContent>
      </TimelineItem> */}
    </Timeline>
  );
}
export const CustomTimeLineSeparator = () => {
  return (
    <TimelineSeparator className={"separator_padding"}>
      <TimelineDot variant={"outlined"} className={"timeline_dot"} />
      <TimelineConnector />
    </TimelineSeparator>
  );
};
export default CustomTimeline;
