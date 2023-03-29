import React from "react";

const SidebarData = (props) => {
  return (
    <div className="div2">
      <div className="totalearnicon" style={{ backgroundColor: `${props.bg}` }}>
        <span className="totalicon">{props.icon}</span>
      </div>
      <div className="total-earn">
        <p className="heading">{props.title}</p>
        <p className="count">{props.count}</p>
      </div>
    </div>
  );
};

export default SidebarData;
