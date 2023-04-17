import React from "react";

import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Activities from "./components/Activities";

const App = () => {
  return (
    <>
      <TopBar />
      <NavBar />
      <Hero />
      <Activities />
    </>
  );
};

export default App;
