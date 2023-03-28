import React from "react";

const ActiveNewUser = (props) => {
  return (
    <div className="active">
      <div
        className="active-users"
        style={{
          background: `conic-gradient(${props.color} ${props.percentage}, lightgray 25%)`,
        }}
      >
        <div style={{ color: "#383874", fontWeight: "400" }}>
          {props.percentage}
        </div>
      </div>
      <p className="percentage-count">
        <span>{props.title}</span>
        <span style={{ color: "#383874", fontWeight: "300" }}>
          {props.user}
        </span>
      </p>
    </div>
  );
};

export default ActiveNewUser;
