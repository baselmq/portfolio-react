import React, { useEffect, useState } from "react";
import logo from "../assets/logo/logo.svg";
const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer>
      <hr className="hr-footer" />
      <div className="container-footer">
        <img src={logo} alt="logo" />
        <div className="copyright">
          @{currentYear} Basel. All right reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
