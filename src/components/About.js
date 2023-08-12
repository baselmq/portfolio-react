import React from "react";
import MyPhoto from "../assets/image/my-photo.jpg";
import Hi from "../assets/icon/hi.svg";
import { Link } from "react-router-dom";
import { ResumeLink } from "../data/ListLinks";
import { HashLink } from "react-router-hash-link";
const About = () => {
  return (
    <section className="About-me" id="about">
      <div className="container-content">
        <div className="title">
          <span>Hi all, I'm Basel</span>
          <div className="image-container">
            <img src={Hi} alt="Hi" />
          </div>
        </div>
        <div className="description">
          A passionate Full Stack Software Developer 🚀 having an experience of
          building Web and Mobile applications with JavaScript / Reactjs /
          Nodejs / React Native and some other cool libraries and frameworks.
        </div>
        <div className="btn-about-desktop">
          <div className="buttons">
            <HashLink smooth to="/#contact">
              contact me
            </HashLink>
            <Link to={ResumeLink} target="_blank" rel="noopener noreferrer">
              see my resume
            </Link>
          </div>
        </div>
      </div>
      <div className="my-image">
        <img src={MyPhoto} alt="MyPhoto" />
      </div>
      <div className="btn-about-mobile">
        <div className="buttons">
          <HashLink smooth to="/#contact">
            contact me
          </HashLink>
          <Link to={ResumeLink} target="_blank" rel="noopener noreferrer">
            see my resume
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
