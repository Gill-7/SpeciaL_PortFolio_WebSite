import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about--left">
        <h2 className="about--heading me">About</h2>
        <h2 className="about--heading ">Me</h2>
      </div>
      <ul className="about--text">
        <li>
          I graduated from Diploma in Science, back in 2020. As the pandemic
          struk, I put the further study on hold and became a self-taught
          developer, realizing my knack for problem-solving in the modern world.
        </li>
        <li>
          My main experience is in front-end developement but I also have
          passion for design. I develop websites with HTML, CSS, JavaScript,
          Typescript, React, Redux, Sass, Material UI. Currently, I am learning
          back-end technologies, more specifically Node.js and Express to create
          a full stack websites. I love to code from scratch and enjoy bringing
          ideas to life. I have serious passion for UI effects, animations and
          creating dynamic user experiences. I'm a learner with strong time
          management and communication skills.
        </li>
      </ul>
    </div>
  );
}

export default About;
