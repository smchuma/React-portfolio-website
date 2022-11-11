import React from "react";
import "./Interests.scss";

const Interests = () => {
  const data = [
    {
      id: 1,
      icon: "./assets/coding.png",
      title: "Software Development",
      img: "https://blog.planview.com/wp-content/uploads/2020/01/Top-6-Software-Development-Methodologies.jpg",
    },
  ];
  return (
    <div className="interests" id="interests">
      <h1>Interests</h1>
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="./assets/coding.png" alt="" />
                </div>
                <h2>Software Development</h2>
              </div>
            </div>
            <div className="right"></div>
          </div>
        </div>
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="arrow left" />
      <img src="assets/arrow.png" className="arrow right" alt="arrow right" />
    </div>
  );
};

export default Interests;
