import React from "react";
import "./About.css";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <Fade bottom>
      <div className="about">
        <div className="about--left">
          <h2 className="about--heading me">About</h2>
          <h2 className="about--heading ">Me</h2>
        </div>
        <ul className="about--text">
          <li>
            I'm a developer who has recently started my journey as a front end
            developer. My interest in web development started back in 2020 when
            my roommate showed me the pac-man game. He built using javascript.
            Since my childhood, I was a big fan of games and always wanted to
            learn how to create games. So, I became a self-taught developer,
            realizing my knack for problem-solving in the modern world.
          </li>
          <li>
            My main experience is in front-end developement and have a passion
            for design, but I also try to visualize how all things put together
            and work marvelous. Currently, I am learning Node.js and Express to
            create a big picture, and with that building new projects. I love to
            code from scratch and create things for the world. I'm a learner
            with strong time management & communication skills.
          </li>
          <li>
            I am looking for a Front-End Developer position to continue to use
            and grow my skills.
          </li>
        </ul>
      </div>
    </Fade>
  );
}

export default About;
