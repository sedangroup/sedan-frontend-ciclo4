import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ResponsiveContainer } from "recharts";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

import { Bar } from "react-chartjs-2";

function BarChar() {
  const options = {
    responsive: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
  };

  let labels = ['enero','febrero','marzo'];
  let dataChar = [13000000,4000000,900000];

  const data = {
    labels: labels,
    datasets: [
      {
        data:dataChar,
        backgroundColor: "#756fff",
      },
    ],
  };


  return (
    <ResponsiveContainer width={'100%'}>
        <Bar options={options} data={data} />
    </ResponsiveContainer>
  );
}

export default BarChar;
