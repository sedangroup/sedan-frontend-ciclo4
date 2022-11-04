import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ResponsiveContainer } from "recharts";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
function MultiaxisChar() {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const masVendido = [1, 4, 5, 1, 4, 4, 5, 1, 45];
  const menosVendido = [30, 24, 11, 55, 44, 51];
  const data = {
    labels,
    datasets: [
      {
        label: "Mas vendido",
        data: masVendido,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
      },
      {
        label: "Prod. menos venvido",
        data: menosVendido,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y1",
      },
    ],
  };
  return (
    <ResponsiveContainer>
      <Line data={data} />
    </ResponsiveContainer>
  );
}

export default MultiaxisChar;
