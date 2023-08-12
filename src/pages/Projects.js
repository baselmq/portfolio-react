import React from "react";
import "../css/index.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ListProject from "../data/ListProject";
import CardProject from "../components/CardProject";
import { Helmet } from "react-helmet";

const Projects = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Projects</title>
      </Helmet>
      <Navbar />
      <section className="projects" id="project">
        <div className="title-projects">Projects</div>
        <div className="container-project">
          {ListProject.map((project, index) => (
            <div className="card-project" key={index}>
              <figure>
                <img src={project.image} alt="imageProject" />
              </figure>
              <CardProject
                title={project.title}
                description={project.description}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
                type={project.type}
              />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projects;
