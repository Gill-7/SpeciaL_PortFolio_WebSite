import React from "react";
import "./Footer.css";
import { GrTwitter, GrLinkedinOption } from "react-icons/gr";
import { AiOutlineGithub } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer">
      <a className="contacts" href="mailto:gillpreetsinghgill@gmail.com">
        gillpreetsinghgill@gmail.com
      </a>
      <div className="social_link">
        <a
          className="social"
          href="https://twitter.com/home"
          target="_blank"
          rel="noreferrer"
        >
          <GrTwitter />
        </a>
        <a
          className="social"
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noreferrer"
        >
          <GrLinkedinOption />
        </a>
        <a
          className="social"
          href="https://github.com/Gill-7"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineGithub />
        </a>
      </div>
    </div>
  );
}

export default Footer;
