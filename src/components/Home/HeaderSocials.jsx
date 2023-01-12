import React from "react";
import github from "../../assets/images/github.png";
import twitter from "../../assets/images/twitter.png";
import linkedin from "../../assets/images/linkedin.png";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://twitter.com/omarrisha1r"
        className="home__socials-link"
        target="_blank"
      >
        <img src={twitter} className="logos-icons" />
      </a>

      <a
        href="https://github.com/omarrisha"
        className="home__socials-link"
        target="_blank"
      >
        <img src={github} className="logos-icons" />
      </a>

      <a
        href="https://www.linkedin.com/in/omarrisha/"
        className="home__socials-link"
        target="_blank"
      >
        <img src={linkedin} className="logos-icons" />
      </a>
    </div>
  );
};

export default HeaderSocials;
