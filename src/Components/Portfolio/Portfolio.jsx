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
          <div className="buttons">
            <a
              href="https://github.com/smchuma/Crypto-Tracker-App"
              target="blank"
            >
              <button className="btn">GITHUB</button>
            </a>
            <a href="https://cryptosam.netlify.app/" target="blank">
              <button className="btn">DEMO LINK</button>
            </a>
          </div>
        </div>
        <div className="item">
          <img src={neon} alt="" />
          <h3>NeonTube | Youtube Clone |</h3>
          <div className="buttons">
            <a
              href="https://github.com/smchuma/NeonTube-Youtube-Clone-Project"
              target="blank"
            >
              <button className="btn">GITHUB</button>
            </a>
            <a href="https://neon-tube.netlify.app/" target="blank">
              <button className="btn">DEMO LINK</button>
            </a>
          </div>
        </div>
        <div className="item">
          <img src={emp} alt="" />
          <h3>Employees Tasks Web App</h3>
          <div className="buttons">
            <a
              href="https://github.com/smchuma/EmployeesTasksWebApp-API"
              target="blank"
            >
              <button className="btn">GITHUB</button>
            </a>
            <a href="##" target="blank">
              <button className="btn">DEMO LINK</button>
            </a>
          </div>
        </div>
        <div className="item">
          <img src={zenku} alt="" />
          <h3>E-Commerce Shop</h3>
          <div className="buttons">
            <a
              href="https://github.com/smchuma/Clothing-E-commerce-Web-App"
              target="blank"
            >
              <button className="btn">GITHUB</button>
            </a>
            <a href="##" target="blank">
              <button className="btn">DEMO LINK</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
