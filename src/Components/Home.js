import React from "react";
import Barchart from "./Barchart";
import Sidebar from "./Sidebar";
import MapDesign from "./MapDesign";

const Home = () => {
  return (
    <div className="content-wrapper home-wrapper">
      <div className="container-wrapper">
        <Sidebar />
        <MapDesign />
      </div>
      <Barchart />
    </div>
  );
};

export default Home;
