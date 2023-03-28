import React from "react";
import BubblesGraph from "./BubblesGraph";
import DesignFaster from "./DesignFaster";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <DesignFaster />
      <BubblesGraph />
    </div>
  );
};

export default Dashboard;
