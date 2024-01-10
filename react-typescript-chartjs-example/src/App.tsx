import Chart from "chart.js/auto";
import { CategoryScale } from 'chart.js';
import { useState } from 'react';
import { Data } from './Data';
import { Bar, Line, Pie, Doughnut, PolarArea, Radar, Scatter, Bubble } from "react-chartjs-2";

Chart.register(CategoryScale);

export default function App() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.number),
    datasets: [
      {
        label: "Numbers Gained ",
        data: Data.map((data) => data.added),
        backgroundColor: [
          "red",
          "blue",
          "green",
          "yellow"
        ],
        borderColor: "",
        borderWidth: 1
      }
    ]
  });

  return (
    <div className="App">
      <Pie data={chartData}/>
      <Line data={chartData}/>
      <Bar data={chartData}/>
      <Doughnut data={chartData}/>
      <PolarArea data={chartData}/>
      <Radar data={chartData}/>
      <Scatter data={chartData}/>
      <Bubble data={chartData}/>
    </div>
  );
}
