import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2"; 

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart"
    }
  }
};

 
export function StackedChart({labels}) {
    const data = {
        labels,
        datasets: [
            {
            fill: true,
            label: "Total Win",
            data: [30, 150, 50, 100, 160, 45, 80],
            borderColor: "hsl(255deg 51% 45% / 1)",
            backgroundColor: "hsl(255deg 40% 64% / 0.5)",
            lineTension: 0.2
            },
            {
            fill: true,
            label: "Total Loss",
            data: [150, 50, 100, 160, 45, 80, 20],
            borderColor: "hsl(197deg 100% 50%)",
            backgroundColor: "hsl(197 100% 67% / 0.5)",
            lineTension: 0.2
            }
        ]
        };
  return <Line options={options} data={data} />;
}
