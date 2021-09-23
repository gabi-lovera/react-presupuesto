import React from "react";
import { Link } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";
import "../styles/nav.css";

const Nav = () => {
  return (
    <div className="nav-container">
      <Link to={"/"}>
        <h2 className="text-back font-mont">
          <ArrowBackIcon className="icon" /> VOLVER
        </h2>
      </Link>
      <span className="text-nav font-mont">
        Desarrollado por Gabriel Lovera
      </span>
      <a
        className="links"
        href="https://github.com/Gabsl09/react-presupuest"
        target="_blank"
        rel="noreferrer"
      >
        <img src={github} alt="GitHub" />
      </a>
      <a
        className="links"
        href="https://www.linkedin.com/in/gabriellovera/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="Linkedin" />
      </a>
    </div>
  );
};

export default Nav;
