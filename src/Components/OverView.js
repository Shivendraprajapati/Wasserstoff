import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Modal } from "react-bootstrap";
import Home from "./Home";

const OverView = () => {
  const generateData = (baseval, count, yrange) => {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  };
  const [show, setShow] = useState(true);
  const [data, setData] = useState({
    series: [
      {
        name: "Sales",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 6, {
          min: 20,
          max: 60,
        }),
      },
      {
        name: "User",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 3, {
          min: 10,
          max: 60,
        }),
      },
      {
        name: "Product",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 4, {
          min: 30,
          max: 60,
        }),
      },
      {
        name: "Team",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 4, {
          min: 10,
          max: 60,
        }),
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bubble",
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
      },
      title: {
        text: "Sales Figures",
      },
      xaxis: {
        tickAmount: 12,
        type: "category",
      },
      yaxis: {
        max: 70,
      },
      theme: {
        palette: "palette2",
      },
    },
  });
  return (
    <div className="overview">
      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Sales Figures
          </Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <ReactApexChart
            options={data.options}
            series={data.series}
            type="bubble"
            height={350}
          />
        </Modal.Body>
      </Modal>
      <Home />
    </div>
  );
};

export default OverView;
