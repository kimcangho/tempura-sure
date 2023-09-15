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
  isTempsVisible: boolean;
}

const HistoricalTempChart = ({
  hourlyDataArr,
  isTempsVisible,
}: HistoricalTempChartProps): JSX.Element => {
  return (
    <div
      className={`rounded-lg shadow-md w-full mx-auto max-w-[28rem] tablet:max-w-[49rem] max-h-[22.5rem] desktop:max-w-none bg-white ${
        !isTempsVisible ? "h-[22.5rem]" : "desktop:max-h-none h-full"
      } `}
    >
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
            title: { display: true },
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
          aspectRatio: 5,
          responsive: true,
        }}
        className="hfull"
      />
    </div>
  );
};

export default HistoricalTempChart;
