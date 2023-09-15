"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

interface HistoricalTempChartProps {
  hourlyDataArr: any;
}

const HistoricalTempChart = ({
  hourlyDataArr,
}: HistoricalTempChartProps): JSX.Element => {
  return (
    <div className="rounded-lg shadow-md w-full mx-auto max-w-[28rem] tablet:max-w-[49rem] desktop:max-w-none bg-white">
      <Line
        data={{
          labels: hourlyDataArr?.time,
          datasets: [
            {
              label: "Temperature",
              data: hourlyDataArr?.temperature_2m,
              backgroundColor: "green",
            },
          ],
        }}
        options={{
          plugins: {
            subtitle: {
              display: true,
              text: "Custom Chart Subtitle",
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "Time",
              },
            },
            y: {
              title: {
                display: true,
                text: "Temperature",
              },
            },
          },
          maintainAspectRatio: false,
          aspectRatio: 2,
          responsive: true,
        }}
        className="hfull"
      />
    </div>
  );
};

export default HistoricalTempChart;
