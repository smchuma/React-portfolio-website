import React, { useState } from "react";
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
  Menu,
} from "./Components";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
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
