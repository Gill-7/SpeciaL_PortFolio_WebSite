import React, { useState } from "react";
import { GrTwitter, GrLinkedinOption } from "react-icons/gr";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-scroll";
import { FaTimes, FaBars } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const closeSideBar = () => {
    setClicked(!clicked);
  };

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setClicked(!clicked);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo" href="/">
        <span className="nav-logo-text">Gill Preet</span>
      </div>
      <div className="menu-icon" onClick={closeSideBar}>
        {clicked ? (
          <i className="fa-times">
            <FaTimes />
          </i>
        ) : (
          <i className="fa-bars">
            <FaBars />
          </i>
        )}
      </div>
      <div className={clicked ? "nav-heading active" : "nav-heading"}>
        <ul>
          <li>
            <Link to="/" smooth={true} duration={1000}>
              <p
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={goToTop}
              >
                Home
              </p>
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={1000}>
              <p
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={closeSideBar}
              >
                Services
              </p>
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={1000}>
              <p
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={closeSideBar}
              >
                About me
              </p>
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} duration={1000}>
              <p
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={closeSideBar}
              >
                My work
              </p>
            </Link>
          </li>
        </ul>
        <div>
          <a
            className="socials active "
            href="https://twitter.com/home"
            target="_blank"
            rel="noreferrer"
          >
            <GrTwitter />
          </a>
          <a
            className="socials active"
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noreferrer"
          >
            <GrLinkedinOption />
          </a>
          <a
            className="socials active"
            href="https://github.com/Gill-7"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineGithub />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
