import React, { Component } from "react";
import "./Sidebar.css";
import { HashLink as Link } from "react-router-hash-link";
// import { FiExternalLink } from "react-icons/fi";
// import logo from "../images/My-logo4.ico";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        {/* <img src={logo} /> */}
        <h1>
          <Link smooth to="/#start" className="h1_links">
            Vivek Thakore
          </Link>
        </h1>
        <p style={{ color: "black", fontWeight: "bold" }} className="gmail">
          {" "}
          vivek.thakore08@gmail.com{" "}
        </p>
        <ul className="sidebar-nav">
          <li className="sidebar-nav-items">
            <Link smooth to="/#about" className="links">
              About
            </Link>
          </li>
          <li className="sidebar-nav-items">
            <Link smooth to="/#interest" className="links">
              Interest
            </Link>
          </li>
          <li className="sidebar-nav-items">
            <Link smooth to="/#education" className="links">
              Education
            </Link>
          </li>
          {/* <li className="sidebar-nav-items"><a href="http://www.bloggingpeek.com" target="_blank" rel="opener noreferrer" className="links"> Blog<FiExternalLink/></a></li> */}
        </ul>

        <div className="flip-card-back">
          <ul className="sidebar-nav">
            <li className="sidebar-nav-icons">
              <a
                href="https://www.linkedin.com/in/vivekthakore"
                rel="opener noreferrer"
                target="_blank"
                class="fa fas fa-linkedin fa-lg"
              ></a>
            </li>
            <li className="sidebar-nav-icons">
              {" "}
              <a
                href="https://github.com/vivekthak88"
                rel="opener noreferrer"
                target="_blank"
                class="fa fas fa-github fa-lg"
              ></a>
            </li>
            <li className="sidebar-nav-icons">
              {" "}
              <a
                href="mailto:vivek.thakore08@gmail.com"
                rel="opener noreferrer"
                target="_blank"
                class="fa fas fa-envelope fa-lg"
              ></a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
