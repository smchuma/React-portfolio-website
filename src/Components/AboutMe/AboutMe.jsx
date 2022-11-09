import React from "react";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <div className="about" id="about">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="left">
          <div className="img">
            <img
              src="https://miro.medium.com/max/828/1*IRGHmiGsa16stedQvIaZfw.gif"
              alt="gif"
            />
          </div>
        </div>
        <div className="right">
          <p>Black</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
