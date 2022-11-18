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
        <div className="box">
          <img src="assets/web.png" alt="web" />
          <h2>Development</h2>
          <ul></ul>
          <ul>
            {development.map((dev) => (
              <li key={dev.id}>
                <i className="fa-solid fa-check"></i>
                {dev.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="box">
          <img src="assets/illustration.png" alt="web" />
          <h2>Illustration</h2>
          <ul></ul>
          <ul>
            {illustration.map((ill) => (
              <li key={ill.id}>
                <i className="fa-solid fa-check"></i>
                {ill.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="box">
          <img src="assets/movie.png" alt="web" />
          <h2>Production</h2>
          <ul>
            {production.map((pro) => (
              <li key={pro.id}>
                <i className="fa-solid fa-check"></i>
                {pro.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
