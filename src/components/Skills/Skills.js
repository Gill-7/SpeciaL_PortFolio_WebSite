import React from "react";
import { Link } from "react-scroll";
import "./Skills.css";

function Skills() {
  return (
    <div className="section" id="services">
      <h1 className="section-main-heading">What I do</h1>

      <div className="section--top">
        <div className="section--data">
          <img src="./image/svg/undraw1.svg" alt="something" />
          <h3 className="section--heading">Front End Development</h3>
          <p className="section--description">
            I write well-designed, testable and effcient code to produce
            accessible and responsive websites.
          </p>
          <p className="section--lang--title">Languages I speak:</p>
          <div className="section--lang--name">
            <p>React</p>
            <p>Redux</p>
            <p>TypeScript</p>
            <p>JavaScript</p>
            <p>HTML</p>
            <p>CSS</p>
          </div>
        </div>
        <div className="section--data">
          <img src="./image/svg/undraw2.svg" alt="something" />
          <h3 className="section--heading">Dev Tool Box</h3>
          <p className="section--description">
            I have rich experience with front-end development tools which helps
            me to create a attractive web design layout.
          </p>
          <p className="section--lang--title">Tools I have used:</p>
          <div className="section--lang--name">
            <p>Github</p>
            <p>Cypress</p>
            <p>SASS</p>
            <p>CodeKit</p>
            <p>NPM</p>
            <p>Chrome Developer Tools</p>
          </div>
        </div>
        <div className="section--data">
          <img src="./image/svg/undraw3.svg" alt="something" />
          <h3 className="section--heading">Back End Development</h3>
          <p className="section--description">
            Learning and creating server side languages (MERN stack) projects. I
            have exposure to node.js and python.
          </p>
          <p className="section--lang--title">Languages I'm learning: </p>
          <div className="section--lang--name">
            <p>Node.js</p>
            <p>Express</p>
            <p>Moongoose</p>
            <p>Python</p>
          </div>
        </div>
      </div>

      <div className="section--btn">
        <Link to="work" smooth={true} duration={1500}>
          <p className="section--link" style={{ cursor: "pointer" }}>
            <span>See my work</span>
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Skills;
