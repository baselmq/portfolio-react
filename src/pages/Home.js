import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";
import { Link } from "react-router-dom";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "../css/index.css";
import ListProject from "../data/ListProject";
import CardProject from "../components/CardProject";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Basel Qarqa</title>
      </Helmet>
      <Navbar />
      <About />
      <Skills />
      <section className="projects">
        <div className="title-projects">Projects</div>
        <div className="container-project">
          {ListProject.slice(0, 4).map((project, index) => (
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

        <div className="buttons button-project">
          <Link to="/projects">more projects</Link>
        </div>
      </section>
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
