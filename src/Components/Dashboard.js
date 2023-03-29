import React from "react";
import BubblesGraph from "./BubblesGraph";
import SidebardetailData from "./SidebardetailData";

const Dashboard = () => {
  return (
    <div className="content-wrapper dashboard-wrapper">
      <div className="container-wrapper">
        <SidebardetailData />
        <BubblesGraph />
      </div>
    </div>
  );
};

export default Dashboard;
