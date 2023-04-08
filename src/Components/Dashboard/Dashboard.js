import React from "react";
import AreaCharts from "../AreaCharts/AreaCharts";
import BarCharts from "../BarCharts/BarCharts";
import LineCharts from "../LineCharts/LineCharts";
import PieCharts from "../PieCharts/PieCharts";
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div>
        <h2>MONTH WISE SELL</h2>
        <LineCharts></LineCharts>
      </div>
      <div>
        <h2>Investment VS Revenue</h2>
        <AreaCharts></AreaCharts>
      </div>
      <div>
        <h2>Investment VS Revenue</h2>
        <BarCharts></BarCharts>
      </div>
      <div>
        <h2>Investment VS Revenue</h2>
        <PieCharts></PieCharts>
      </div>
    </div>
  );
};

export default Dashboard;
