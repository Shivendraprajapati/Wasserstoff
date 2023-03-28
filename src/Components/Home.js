import React from "react";
import Barchart from "./Barchart";
import Sidebar from "./Sidebar";
import WorldMap from "./WorldMap";

const Home = () => {
  return (
    <div className="content-wrapper">
      <div className="container-wrapper">
        <Sidebar />
        <WorldMap />
      </div>
      <Barchart />
    </div>
  );
};

export default Home;
