import React from "react";
import { BarChart, Bar } from "recharts";
const Barchart = () => {
  const data = [
    { value: 10 },
    { value: 22 },
    { value: 13 },
    { value: 14 },
    { value: 10 },
    { value: 17 },
    { value: 25 },
    { value: 8 },
  ];
  const data1 = [
    { value: 20 },
    { value: 30 },
    { value: 10 },
    { value: 14 },
    { value: 18 },
    { value: 17 },
    { value: 10 },
    { value: 18 },
  ];
  return (
    <div className="barchart">
      <div className="sales-figer">
        <h3
          style={{
            color: "#383874",
            fontWeight: "600",
            fontSize: "16px",
            margin: 0,
          }}
        >
          <span
            style={{
              fontSize: "12px",
              lineHeight: "1.7rem",
              fontWeight: "400",
            }}
          >
            Sales Figer
          </span>
          <br />
          <span>$10,430</span>
        </h3>
      </div>
      <div className="graph" style={{ display: "flex" }}>
        <BarChart width={150} height={45} data={data1}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <BarChart width={150} height={45} data={data}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <BarChart width={150} height={45} data={data}>
          <Bar dataKey="value" fill="#FF708B" />
        </BarChart>
        <BarChart width={150} height={45} data={data}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <BarChart width={150} height={45} data={data}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <BarChart width={150} height={45} data={data}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <div className="underline"></div>
      </div>
    </div>
  );
};

export default Barchart;
