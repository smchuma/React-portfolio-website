import React from "react";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="banner" id="banner">
      <div className="left">
        <div className="socials">
          <div className="circle">
            <a href="https://www.linkedin.com/in/samora-mchuma/" target="blank">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <div className="circle">
            <a href="https://github.com/smchuma" target="blank">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
          <div className="circle">
            <a href="https://www.instagram.com/samora_mchuma/" target="blank">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="img-content">
          <div className="img-content-background"></div>
        </div>
      </div>
      <div className="right">
        <div className="titles">
          <h2>Hello, I'm</h2>
          <h1>Samora Mchuma</h1>
          <h3>Software Developer</h3>
        </div>
        <div className="buttons">
          <a href="cv.pdf" download="SAMORA MCHUMA CV.pdf">
            <button className="btn">Download CV</button>
          </a>
          <a href="#contact">
            <button className="btn">Contact Me</button>
          </a>
        </div>
      </div>
      <div class="custom-shape-divider-bottom-1668009551">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Banner;
