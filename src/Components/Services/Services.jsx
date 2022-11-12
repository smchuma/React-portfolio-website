import React from "react";
import "./Services.scss";

const Services = () => {
  const items = [
    {
      id: 1,
      title: " HTML/CSS",
    },
    {
      id: 2,
      title: " JavaScript",
    },
    {
      id: 3,
      title: " React / Redux",
    },
    {
      id: 4,
      title: " HTML/CSS",
    },
  ];
  return (
    <div className="services" id="Services">
      <h1>My Services</h1>
      <div className="wrapper">
        <div className="first">
          <div className="first-content">
            <img src="assets/web.png" alt="web" />
            <h2>Development</h2>
            <ul>
              <li>
                <i class="fa-solid fa-check"></i>
                HTML/CSS
              </li>
              <li>
                <i class="fa-solid fa-check"></i>
                JavaScript
              </li>
              <li>
                <i class="fa-solid fa-check"></i>
                React / Redux
              </li>
              <li>
                <i class="fa-solid fa-check"></i>
                Node / Express
              </li>
              <li>
                <i class="fa-solid fa-check"></i>
                Material UI
              </li>
              <li>
                <i class="fa-solid fa-check"></i>
                MySQL
              </li>
              <li>
                <i class="fa-solid fa-check"></i>
                MongoDB
              </li>
              <li>
                <i class="fa-solid fa-check"></i>
                Sass
              </li>
            </ul>
          </div>
        </div>
        <div className="second">rr</div>
        <div className="third">ss</div>
      </div>
    </div>
  );
};

export default Services;
