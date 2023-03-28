import React from "react";
import Barchart from "./Barchart";
import Sidebar from "./Sidebar";
import WorldMap from "./WorldMap";

const Home = () => {
  return (
    <div>
      <Sidebar />
      <WorldMap />
      <Barchart />
    </div>
  );
};

export default Home;
