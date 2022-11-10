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
          <p>
            I have a bachelor’s degree in information systems technology from
            United States International University-Africa and have more than 2
            years of experience as a front-end developer. I have advanced
            knowledge of React and Node.js, as well as the ability to work
            independently and solve problems creatively.
          </p>
          <p>
            I've worked on several projects, including a clothing e-commerce
            website where users can buy clothes; a cryptocurrency tracker where
            users can keep track of their cryptocurrencies; and a YouTube clone
            where users can watch YouTube videos. These projects have helped me
            improve my programming skills immensely.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
