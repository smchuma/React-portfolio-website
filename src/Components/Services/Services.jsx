import React from "react";
import "./Services.scss";
import {
  development,
  illustration,
  production,
} from "../../Components/Services/data";

const Services = () => {
  return (
    <div className="services" id="services">
      <h1>My Services</h1>
      <div className="wrapper">
        <div className="first">
          <div className="first-content">
            <img src="assets/web.png" alt="web" />
            <h2>Development</h2>
            <ul>
              {development.map((item) => (
                <li>
                  <i class="fa-solid fa-check"></i>
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="second">
          <div className="first-content">
            <img src="assets/illustration.png" alt="web" />
            <h2>Illustration</h2>
            <ul>
              {illustration.map((item) => (
                <li>
                  <i class="fa-solid fa-check"></i>
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="third">
          <div className="first-content">
            <img src="assets/movie.png" alt="web" />
            <h2>Production</h2>
            <ul>
              {production.map((item) => (
                <li>
                  <i class="fa-solid fa-check"></i>
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
