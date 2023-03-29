import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Modal } from "react-bootstrap";
import Home from "./Home";

const OverView = () => {
  const [show, setShow] = useState(true);
  const [data, setData] = useState({
    series: [
      {
        name: "Sales",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
      {
        name: "User",
        data: [30, 10, 35, 40, 49, 70, 91, 125],
      },
      {
        name: "Product",
        data: [30, 40, 35, 50, 49, 70, 91, 10],
      },
      {
        name: "Team",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 30],
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
        type: "datetime",
        labels: {
          rotate: 0,
        },
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
