import React from "react";
import GithubIcon from "../../assets/svgs/carbon_logo-github.svg";
import Linkedin from "../../assets/svgs/carbon_logo-linkedin.svg";
export const Footer = () => {
  return (
    <footer className="foot-container">
      <div className="foot-logo">NFT</div>
      <div social-container>
        <a href="https://github.com/Jesuuelx">
          <img src={GithubIcon} alt="Github Icon" />
        </a>
        <a href="https://www.linkedin.com/in/jes%C3%BAs-alejandro-salas-teran-78a091220/">
          <img src={Linkedin} alt="Twitter Logo" />
        </a>
      </div>
    </footer>
  );
};
