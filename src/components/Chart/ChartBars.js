import React from "react";

import "./ChartBars.css";

function ChartBars(props) {
  const barFilledHeight =
    props.maxValue > 0
      ? Math.round((props.value / props.maxValue) * 100) + "%"
      : "0%";

  // let barFilledHeight = "0%";

  // if (props.maxValue > 0) {
  //   barFilledHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  // }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFilledHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}

export default ChartBars;
