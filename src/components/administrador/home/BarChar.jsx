import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { ResponsiveContainer } from "recharts";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChar() {
  const labels = ["January", "February", "March", "April"];
  const gastos = [800000, 900000, 490000, 950000];
  const ganancias = [1300000, 380000, 230000, 980000];

  const data = {
    labels,
    datasets: [
      {
        label: "Gastos",
        data: gastos,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Ganancias",
        data: ganancias,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <ResponsiveContainer>
      <Bar data={data} />
    </ResponsiveContainer>
  );
}

export default BarChar;
