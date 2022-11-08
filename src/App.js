import React from "react";
import "./App.scss";
import {
  Navbar,
  Banner,
  AboutMe,
  Portfolio,
  Works,
  Interests,
  Testimonials,
  Contact,
} from "./Components";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <Banner />
        <AboutMe />
        <Portfolio />
        <Works />
        <Interests />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
};

export default App;
