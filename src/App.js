import React, { useState } from "react";
import "./App.scss";
import {
  Navbar,
  Banner,
  AboutMe,
  Portfolio,
  Services,
  Interests,
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
        <Services />
        <Interests />
        <Contact />
      </div>
    </div>
  );
};

export default App;
