import React, { useState } from "react";
import "./Portfolio.scss";
import crypto from "../../images/crypto.png";
import neon from "../../images/neon.png";
import emp from "../../images/emp.png";
import zenku from "../../images/zenku.png";
import { PortfolioList } from "../../Components";

const Portfolio = () => {
  const [selected, setSelected] = useState("web");
  const list = [
    {
      id: "web",
      title: "Web App",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
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
              href="https://github.com/smchuma/EmployeesTasksWebApp"
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
