import React from "react";
import "../css/index.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
const Education = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Education</title>
      </Helmet>
      <Navbar />
      <section className="education" id="education">
        <div className="title-education">Education</div>

        <div className="university">
          <div className="name-university">Al Al-Bayt University</div>
          <div className="description-university">
            <div className="path-university">
              Bachelor's degree in Computer Information Systems
            </div>
            <div className="date">Sept 2017 - Jul 2021</div>
          </div>
          <hr className="hr-education" />
        </div>

        <div className="training">
          <div className="title-training">Training & Courses</div>

          <div className="academy">
            <div className="path-academy">QA Manual and Automation</div>
            <div className="description-academy">
              <div className="name-academy">Princess Sumaya University</div>
              <div className="date">Dec 2022 - Jan 2023</div>
            </div>
          </div>
          <hr className="hr-education" />

          <div className="academy">
            <div className="path-academy">Flutter App Development</div>
            <div className="description-academy">
              <div className="name-academy">Orange Digital Center</div>
              <div className="date">Jul 2022 - Sept 2022</div>
            </div>
          </div>
          <hr className="hr-education" />

          <div className="academy">
            <div className="path-academy">Flutter App Development</div>
            <div className="description-academy">
              <div className="name-academy">The hope International</div>
              <div className="date">Sept 2021 - Nov 2021</div>
            </div>
          </div>
          <hr className="hr-education" />

          <div className="academy">
            <div className="path-academy">Project Management Professional</div>
            <div className="description-academy">
              <div className="name-academy">The hope International</div>
              <div className="date">Jul 2021 - Aug 2021</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Education;
