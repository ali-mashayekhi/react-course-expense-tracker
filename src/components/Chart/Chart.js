import React from "react";
import ChartBars from "./ChartBars";
import Card from "../UI/Card";

import "./Chart.css";

function Chart(props) {
  const values = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxValue = Math.max(...values);

  return (
    <Card className="chart">
      {props.dataPoints.map((dataPoints) => (
        <ChartBars
          key={dataPoints.label}
          value={dataPoints.value}
          maxValue={maxValue}
          label={dataPoints.label}
        />
      ))}
    </Card>
  );
}

export default Chart;
