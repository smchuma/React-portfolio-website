import React, { useState } from "react";
import "./Interests.scss";
import { interests } from "../Interests/data";

const Interests = () => {
  const [slider, setSlider] = useState(0);

  const handleClick = (way) => {
    way === "left"
      ? setSlider(slider > 0 ? slider - 1 : 2)
      : setSlider(slider < interests.length - 1 ? slider + 1 : 0);
  };

  return (
    <div className="interests" id="interests">
      <h1>Interests</h1>
      <div
        className="slider"
        style={{
          transform: `translateX(-${slider * 100}vw)`,
        }}
      >
        {interests.map((item) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
              </div>
              <div className="right">
                <img src={item.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt="arrow left"
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt="arrow right"
        onClick={() => handleClick()}
      />
      <div class="custom-shape-divider-bottom-1668258696">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Interests;
