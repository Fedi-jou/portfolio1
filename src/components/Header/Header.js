import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, withRouter } from "react-router-dom";
import { HomeRounded, Telegram } from "@material-ui/icons";
import Data from "../../utiles/resumeData";
import Button from "../Button/Button";
import Contact from "../../Pages/contact/Contact";
import "./Header.css";

function Header(props) {
  const pathName = props?.location?.pathname;
  return (
    <Navbar expand="lg" sticky="top" className="header">
      <Nav.Link as={NavLink} to="/" className="header_navlink">
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="header_left">
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName == "/" ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              pathName == "/portfolio" ? "header_link_active" : "header_link"
            }
          >
            Portfolio
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/contact"
            className={
              pathName == "/contact" ? "header_link_active" : "header_link"
            }
          >
            Contact me
          </Nav.Link>
        </Nav>
        <div className="header_right">
          {Object.keys(Data.social).map((key) => (
            <a href={Data.social[key].link} target="blank">
              {Data.social[key].icon}{" "}
            </a>
          ))}
          {/* <Button text="Hire Me" icon={<Telegram />} /> */}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default withRouter(Header);
