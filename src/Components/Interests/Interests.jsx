import React from "react";
import "./Interests.scss";
import { interests } from "../Interests/data";

const Interests = () => {
  return (
    <div className="interests" id="interests">
      <h1>Interests</h1>
      <div className="container">
        {interests.map((card) => (
          <div className="card" key={card.id}>
            <div className="card-image">
              <img src={card.img} alt={card.title} />
            </div>
            <h2>{card.title}</h2>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
      <div className="custom-shape-divider-bottom">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Interests;
