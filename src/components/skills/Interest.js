import React, { Component } from "react";
import classes from "./Interest.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import fizzyfizzy from "../images/fizzyfizzy.jpg";
import food4all from "../images/food4all.jpg"

class Interest extends Component {
  render() {
    return (
      <div className={classes.box} id="interest">
        <ScrollAnimation
          offset="0"
          animateIn="fadeInLeft"
          duration="2.4"
          animateOnce="true"
          initiallyVisible={true}
        >
          <span className={classes.head}>WHAT I DO?</span>
          <h2 className={classes.heading}>HERE ARE SOME OF MY EXPERTISE</h2>
          <div className={classes.Interest}>
            {/* <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
              <div className={classes.web}>
                <h3>APP Develpoment</h3>
                <p>I also have knowledge of flutter development and have experience in building android and IOS applications. I also have live app published on Google Play Store. </p>
              </div>
            </ScrollAnimation> */}
            <ScrollAnimation
              offset="0"
              animateIn="fadeInLeft"
              duration="2.4"
              animateOnce="true"
              initiallyVisible={true}
            >
              <div className={classes.app}>
                <h3>Web Develpoment</h3>
                <p>
                  I am a full stack web developer and build websites using HTML,
                  CSS, Javascript, ReactJs.
                  <br /> I have also good grasp on Node and PostgreSQL.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              offset="0"
              animateIn="fadeInLeft"
              duration="2.4"
              animateOnce="true"
              initiallyVisible={true}
            >
              <div className={classes.other}>
                <h3>Other's Interest</h3>
                <p>
                  Artificial Intelligence, Google Suite, Github are my other
                  fields of interest.{" "}
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>

        <ScrollAnimation
          offset="0"
          animateIn="fadeInLeft"
          duration="2.4"
          animateOnce="true"
          initiallyVisible={true}
        >
          <span className={classes.head}>BootCamp Projects</span>
          <h2 className={classes.heading}>HERE ARE SOME OF MY PROJECTS</h2>
          <div className={classes.Interest}>
            <ScrollAnimation
              offset="0"
              animateIn="fadeInLeft"
              duration="2.4"
              animateOnce="true"
              initiallyVisible={true}
            >
              <div className={classes.app}>
                <h3>FizzyFizzyBathbombs</h3>
                <img className={classes.image} src={fizzyfizzy} alt="myImage" />
                <a href="https://fizzyfizzybathbombs.herokuapp.com/" >
                  FizzyFizzybathbombs Live Demo 
                </a>
                {/* <a href="https://github.com/vivekthak88/Full-Stack-Project">
                  Github
                </a> */}
                <p>
                  <br />
                  Technologies: HTML/CSS, Bootstrap, JavaScript, Node.js,
                  PostgreSQL, Sequelize/Sequelize CLI, Express/ES6 Template
                  Engine/Validator, bcrypt.
                </p>
                <a href="https://github.com/vivekthak88/Full-Stack-Project">
                  Github
                </a>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              offset="0"
              animateIn="fadeInLeft"
              duration="2.4"
              animateOnce="true"
              initiallyVisible={true}
            >
              <div className={classes.other}>
              <h3>Food 4 All</h3>
                <img className={classes.image} src={food4all} alt="myImage" />
                <a href="https://food4all-front.herokuapp.com/" >
                  Food4All Live Demo
                </a>
                {/* <a href="https://github.com/vivekthak88/Full-Stack-Project">
                  Github
                </a> */}
                <p>
                  <br />
                  Technologies: Node, React/Redux, AuthO, Express, Sequelize, PostgreSQL.
                </p>
                <a href="https://github.com/Eldridge0831/Food4All-Front">
                  Github 
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Interest;
