import React from "react";
import BubblesGraph from "./BubblesGraph";
import DesignFaster from "./DesignFaster";

const Dashboard = () => {
  return (
    <div className="content-wrapper dashboard-wrapper">
      <div className="container-wrapper">
        <DesignFaster />
        <BubblesGraph />
      </div>
    </div>
  );
};

export default Dashboard;
