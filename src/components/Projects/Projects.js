import React from "react";
import "./Projects.css";
import ProjectsCard from "./ProjectsCard";
import Fade from "react-reveal/Fade";

function Projects() {
  return (
    <div className="cards" id="work">
      <Fade bottom>
        <h1 className="project--main-heading">Some Things I've Built</h1>
      </Fade>
      <div className="cards--container">
        <ul className="cards--items">
          <ProjectsCard
            src="image/netflix.jpg"
            heading="Netflix Clone"
            text="Netflix application developed with React (Hooks and Context), Styled Components, Firebase and Fuse.js. Implemented user authentication by using Firebase to store the user data in the databse. "
            path="https://determined-franklin-113754.netlify.app/"
            href="https://github.com/Gill-7/Netflix_React_Project"
            layout={true}
          />
          <ProjectsCard
            src="image/map.jpg"
            heading="Mapty"
            text="Map workout show detailed information about user running and cycling workout on the map and create new workouts. In this project, I used Geolocation API to obtained the users location, third party leaflet library to displaying a map, and localStorage API to store the data."
            path="https://blissful-spence-549e0a.netlify.app"
            href="https://github.com/Gill-7/Map-Workout"
            layout={false}
          />
          <ProjectsCard
            src="image/paris.jpg"
            heading="Europe Travel"
            text="A single page web applcation to get the location information about any specific location in Europe, and built with React and Styled Components."
            path="https://romantic-wilson-bc730f.netlify.app"
            href="https://github.com/Gill-7/Europe_Travel"
            layout={true}
          />
          <ProjectsCard
            src="image/todo.jpg"
            heading="Todo App"
            text="I build this project when I was learning React basics. After that, I refactored it to add some styling and used the React Hooks to update list functionality."
            path="https://upbeat-brattain-45e4f6.netlify.app/"
            href="https://github.com/Gill-7/Todo_List_Hooks"
            layout={false}
          />
          <ProjectsCard
            src="image/forkify.jpg"
            heading="Forkify App"
            text="Build using JavaScript, HTML5, CSS3 and Parcel. In this app, API is used to fetch the data and displayed it on the screen. User can also create their own recipe and the last functionality is button to bookmark or unbookmark the recipe."
            path="https://github.com/Gill-7/Forkify_App"
            href="https://github.com/Gill-7/Forkify_App"
            layout={true}
          />
        </ul>
      </div>
    </div>
  );
}

export default Projects;
