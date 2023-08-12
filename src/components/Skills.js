import React from "react";
import mongodb from "../assets/icon/mongodb.svg";
import flutter from "../assets/icon/flutter.svg";
import dart from "../assets/icon/dart.svg";
const Skills = () => {
  return (
    <>
      <div id="skills"></div>
      <section className="skills">
        <div className="container-skills-left">
          <lottie-player
            src="https://lottie.host/9312c288-5c4a-470a-8c68-4f983d9eca56/UDe8SuwObU.json"
            background="transparent"
            speed="1"
            className="lottie-svg"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="container-skills-right">
          <div className="title-skills">What I do</div>
          <div className="sub-title-skills">
            FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
          </div>
          <ul className="list-icons-skills">
            <li className="icons-technical">
              <i className="fa-brands fa-html5"></i>
              <p>html</p>
            </li>
            <li className="icons-technical">
              <i className="fa-brands fa-css3-alt"></i>
              <p>css</p>
            </li>
            <li className="icons-technical">
              <i className="fa-brands fa-square-js"></i>
              <p>javascript</p>
            </li>
            <li className="icons-technical">
              <i className="fa-brands fa-react"></i>
              <p>reactjs</p>
            </li>
            <li className="icons-technical">
              <i className="fa-brands fa-node-js"></i>
              <p>nodejs</p>
            </li>
            <li className="icons-technical">
              <i className="fa-brands fa-npm"></i>
              <p>npm</p>
            </li>
            <li className="image-technical">
              <img src={mongodb} alt="mongodb" />
              <p>mongodb</p>
            </li>
            <li className="image-technical">
              <img src={flutter} alt="flutter" />
              <p>flutter</p>
            </li>
            <li className="image-technical">
              <img src={dart} alt="dart" />
              <p>dart</p>
            </li>
          </ul>
          <div className="skills-text">
            <p>
              Develop highly interactive front end/user interfaces for web and
              mobile applications
            </p>
            <p>Apply the basic concepts of manual testing</p>
            <p>Good Skills at writing Bug Report and Test Cases</p>
            <p>Fundamentals of software testing</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
