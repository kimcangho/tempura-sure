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

interface HistoricalTempSectionProps {
  hourlyDataArr: any;
}

const HistoricalTempSection = ({
  hourlyDataArr,
}: HistoricalTempSectionProps): JSX.Element => {
  return (
    <div className="rounded-lg shadow-md w-full mx-auto max-w-[28rem] tablet:max-w-[49rem] desktop:max-w-none bg-white">
      <Line
        data={{
          labels: hourlyDataArr?.time,
          datasets: [
            {
              label: "test",
              data: hourlyDataArr?.temperature_2m,
              backgroundColor: "green",
            },
          ],
        }}
        options={{
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
          responsive: true,
          maintainAspectRatio: true,
        }}
        className="hfull"
      />
    </div>
  );
};

export default HistoricalTempSection;
