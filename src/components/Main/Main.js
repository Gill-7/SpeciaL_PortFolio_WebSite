import React from "react";
import "./Main.css";
import Navbar from "../Navbar/Navbar";

function Main() {
  return (
    <div className="main">
      <img src="./image/alonetree3.jpg" alt="mountain" className="main-img" />
      <div className="main-header">
        <div className="main-header-top">
          <div className="main-header-name ">
            <p className="main-header-para">Hi, I am</p>

            <h1 className="main-header-myname">Gillpreet Singh</h1>
            <div className="main-header-profession">Front-end Dev</div>
          </div>
          <img
            src="./image/picture2.jpg"
            alt="dune-arakis"
            className="main-heading-img"
          />
        </div>
      </div>

      <div className="navbar-main">
        <Navbar />
      </div>

      <div className="bird-container bird-container--one">
        <div className="bird bird--one"></div>
      </div>

      <div className="bird-container bird-container--two">
        <div className="bird bird--two"></div>
      </div>

      <div className="bird-container bird-container--three">
        <div className="bird bird--three"></div>
      </div>

      <div className="bird-container bird-container--four">
        <div className="bird bird--four"></div>
      </div>
    </div>
  );
}

export default Main;
