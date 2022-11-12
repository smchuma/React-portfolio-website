import React, { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="app">
      {loading ? (
        <div className="loader">
          <HashLoader color={"#b9bdcf"} loading={loading} size={100} />
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default App;
