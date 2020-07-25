import React, { useEffect } from "react";
import { Chart as Charts } from "chart.js";

function Chart() {
  useEffect(() => {
    const ctx = document.getElementById("myChart");
    new Charts(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "Red",
              "Blue",
              "Yellow",
              "Green",
              "Purple",
              "Orange",
            ],
            borderColor: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            borderWidth: 1,
          },
        ],
      },
    });
  });
  return (
    <div className="App">
      <canvas id="myChart" width="400" height="400" />
    </div>
  );
}

export default Chart;
