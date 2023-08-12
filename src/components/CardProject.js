import React from "react";
import { Link } from "react-router-dom";
import github from "../assets/icon/github.svg";
import link from "../assets/icon/link.svg";
import figma from "../assets/icon/figma.svg";
const CardProject = ({ title, description, githubLink, liveLink, type }) => {
  return (
    <div className="description-project">
      <h6>{title}</h6>
      <div className="text-project">
        <p>{description}</p>
      </div>
      <div className="links">
        <div className="live-preview">
          <img src={link} alt="live preview" />
          <Link to={liveLink}> Live Preview</Link>
        </div>
        <div className="github">
          {type === "Project" ? (
            <img src={github} alt="github" />
          ) : (
            <img src={figma} alt="figma" />
          )}

          <Link to={githubLink}>
            {type === "Project" ? "View Code" : "View Design"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
