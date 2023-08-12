import React, { useEffect, useState } from "react";
import "../css/index.css";
import logo from "../assets/logo/logo.svg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ResumeLink } from "../data/ListLinks";
const Navbar = () => {
  const [isHamburgerActive, setHamburgerActive] = useState(false);
  const [isDarkMode, setDarkMode] = useState(
    localStorage.getItem("dark-mode") === "dark"
  );

  const toggleHamburger = () => {
    setHamburgerActive((prevState) => !prevState);
  };

  const closeNavMenu = () => {
    setHamburgerActive(false);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setDarkMode(newDarkMode);
    setThemeInLocalStorage(newDarkMode);
  };

  const setThemeInLocalStorage = (darkMode) => {
    const mode = darkMode ? "dark" : "light";
    localStorage.setItem("dark-mode", mode);
  };

  useEffect(() => {
    if (localStorage.length === 0) {
      localStorage.setItem("dark-mode", "light");
    } else {
      const mode = localStorage.getItem("dark-mode");
      setDarkMode(mode === "dark");
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <div className={`App ${isDarkMode ? "dark-mode" : ""}`}>
      <header>
        <nav className="navbar">
          <HashLink smooth to="/#about" className="nav-branding">
            <img src={logo} alt="logo" />
          </HashLink>
          <ul className={`nav-menu ${isHamburgerActive ? "active" : ""}`}>
            <li className="nav-item">
              <HashLink
                smooth
                to="/#about"
                className="nav-link"
                onClick={closeNavMenu}
              >
                Home
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                to="/projects#project"
                className="nav-link"
                onClick={closeNavMenu}
              >
                Projects
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                to="/#skills"
                className="nav-link"
                onClick={closeNavMenu}
              >
                Skills
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                to="/education#education"
                className="nav-link"
                onClick={closeNavMenu}
              >
                Education
              </HashLink>
            </li>
            <li className="nav-item">
              {/* <Link to="/#contact" className="nav-link" onClick={closeNavMenu}>
                Contact
              </Link> */}
              <HashLink smooth to="/#contact" onClick={closeNavMenu}>
                Contact
              </HashLink>
            </li>
            <li className="nav-item btn-resume btn-resume-mobile">
              <Link
                to={ResumeLink}
                className="nav-link"
                target="_blank"
                rel="noreferrer"
                onClick={closeNavMenu}
              >
                See My Resume
              </Link>
            </li>
          </ul>
          <div className="btn-resume btn-resume-desktop">
            <Link
              to={ResumeLink}
              className="nav-link"
              target="_blank"
              rel="noreferrer"
            >
              See My Resume
            </Link>
          </div>
          <div className="btn-resume btn-resume-middle">
            <Link
              to={ResumeLink}
              className="nav-link"
              target="_blank"
              rel="noreferrer"
              onClick={closeNavMenu}
            >
              My Resume
            </Link>
          </div>
          <div className="btn-toggle-desktop" onClick={toggleDarkMode}>
            <div id="dark-mode"></div>
          </div>
          <div className="container-menu">
            <div className="btn-toggle-mobile" onClick={toggleDarkMode}>
              <div id="dark-mode-mobile"></div>
            </div>

            <div className="hamburger" onClick={toggleHamburger}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
