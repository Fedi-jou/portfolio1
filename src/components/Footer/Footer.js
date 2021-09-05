import { Typography } from "@material-ui/core";
import React from "react";
import "./Footer.css";
import Data from "../../utiles/resumeData";
function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography className="footer_name">{Data.name}</Typography>
      </div>
      <div className="footer_right">
        {/* <Typography className="footer_rights">
          Clone idea from @tavonline
        </Typography> */}
      </div>
    </div>
  );
}

export default Footer;
