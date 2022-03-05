import React, { useState, useEffect } from "react";

function ProjectsCard(props) {
  const [layout, setLayout] = useState(props.layout);

  useEffect(() => {
    if (window.innerWidth <= 950) {
      setLayout(true);
    }

    const handlerResize = () => {
      if (window.innerWidth <= 950) {
        setLayout(true);
      }
      if (window.innerWidth > 950) {
        setLayout(props.layout);
      }
    };
    window.addEventListener("resize", handlerResize);
  }, [layout, props.layout]);

  return (
    <li className="cards--item">
      {layout ? (
        <>
          <div className="cards--item-left">
            <h5 className="cards--item-heading">{props.heading}</h5>
            <p className="cards--item-text">{props.text}</p>
            <div className="cards--item-link">
              <a
                href={props.href}
                alt="github"
                target="_blank"
                rel="noopener noreferrer"
                className="cards--item-btn"
              >
                Code
              </a>
              <a
                href={props.path}
                target="_blank"
                rel="noopener noreferrer"
                alt="demo"
                className="cards--item-btn"
              >
                Live Demo
              </a>
            </div>
          </div>

          <div className="cards--item-right">
            <img
              className="cards--item-img"
              alt="Project pic"
              src={props.src}
            />
          </div>
        </>
      ) : (
        <>
          <div className="cards--item-right">
            <img
              className="cards--item-img"
              alt="Project pic"
              src={props.src}
            />
          </div>

          <div className="cards--item-left cards--item-left-right">
            <h5 className="cards--item-heading">{props.heading}</h5>
            <p className="cards--item-text">{props.text}</p>
            <div className="cards--item-link cards--item-link-right">
              <a
                href={props.href}
                alt="github"
                target="_blank"
                rel="noopener noreferrer"
                className="cards--item-btn"
              >
                Code
              </a>
              <a
                href={props.path}
                target="_blank"
                rel="noopener noreferrer"
                alt="demo"
                className="cards--item-btn"
              >
                Live Demo
              </a>
            </div>
          </div>
        </>
      )}
    </li>
  );
}

export default ProjectsCard;
