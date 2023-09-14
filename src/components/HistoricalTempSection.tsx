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
import { testTempArr, testTimeArr } from "@/testData/testTempTime";

const HistoricalTempSection = (): JSX.Element => {
  return (
    <div className="border border-black rounded-lg w-full mx-auto max-w-[28rem] tablet:max-w-[49rem] desktop:max-w-none bg-white">
      <Line
        data={{
          labels: testTimeArr,
          datasets: [
            {
              label: "test",
              data: testTempArr,
              backgroundColor: "green",
              fill: true,
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
