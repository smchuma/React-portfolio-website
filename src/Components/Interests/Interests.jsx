import React from "react";
import "./Interests.scss";
import { interests } from "../Interests/data";

const Interests = () => {
  return (
    <div className="interests" id="interests">
      <h1>Interests</h1>
      <div className="interests-content">
        {interests.map((interest) => (
          <div className="content" key={interest.id}>
            <div className="left">
              <img src={interest.img} alt={interest.title} />
            </div>
            <div className="right">
              <h2>{interest.title}</h2>
              <p>{interest.desc}</p>
            </div>
          </div>
        ))}
      </div>
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
