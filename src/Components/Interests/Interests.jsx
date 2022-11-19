import React from "react";
import "./Interests.scss";
import { interests } from "../Interests/data";

const Interests = () => {
  return (
    <div className="interests" id="interests">
      <h1>Interests</h1>
      <div className="wrapper">
        {interests.map((int) => (
          <div className="card" key={int.id}>
            <div className="imgBox">
              <img src={int.img} alt={int.title} />
            </div>
            <div className="content">
              <h2>{int.title}</h2>
              <p>{int.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interests;
