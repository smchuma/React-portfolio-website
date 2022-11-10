import React from "react";
import "./Portfolio.scss";
import crypto from "../../images/crypto.png";
import neon from "../../images/neon.png";
import emp from "../../images/emp.png";
import zenku from "../../images/zenku.png";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>UX/UI Designs</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src={crypto} alt="" />
          <h3>Cryptocurrency Tracker</h3>
        </div>
        <div className="item">
          <img src={neon} alt="" />
          <h3>NeonTube | Youtube Clone |</h3>
        </div>
        <div className="item">
          <img src={emp} alt="" />
          <h3>Cryptocurrency Tracker</h3>
        </div>
        <div className="item">
          <img src={zenku} alt="" />
          <h3>Cryptocurrency Tracker</h3>
        </div>
        <div className="item">
          <img src={crypto} alt="" />
          <h3>Cryptocurrency Tracker</h3>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
