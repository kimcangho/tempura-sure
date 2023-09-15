"use client";

import { useEffect, useState } from "react";
import { convertTimeDoubleDigits } from "@/utils/convertTimeDoubleDigits";
import Header from "@/components/Header";
import CurrentTempSection from "@/components/CurrentTempSection";
import HistoricalTempChart from "@/components/HistoricalTempChart";
import Footer from "@/components/Footer";
import { LATITUDE, LONGITUDE, FIVE_DAYS_TO_MS } from "@/data/constants";

const App = () => {
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [currentTemp, setCurrentTemp] = useState<number | undefined>(undefined);
  const [currentTimeStamp, setCurrentTimeStamp] = useState<Date | null>(null);
  const [hourlyDataArr, setHourlyDataArr] = useState([]);

  const getTempData = async (): Promise<void> => {
    try {
      const timeStamp = new Date();
      setCurrentTimeStamp(timeStamp);

      const currentYear = timeStamp.getFullYear().toString();
      const currentMonth = convertTimeDoubleDigits(timeStamp.getMonth() + 1);
      const currentDate = timeStamp.getDate();
      const convertedDate = Date.parse(timeStamp.toString());
      const startDateAsNumber: number = convertedDate - FIVE_DAYS_TO_MS;
      const startDate = new Date(startDateAsNumber).getDate();

      const query = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&hourly=temperature_2m&start_date=${currentYear}-${currentMonth}-${startDate}&end_date=${currentYear}-${currentMonth}-${currentDate}`
      );
      const { hourly } = await query.json();
      setHourlyDataArr(hourly);
      setCurrentTemp(hourly.temperature_2m[hourly.temperature_2m.length - 1]);
    } catch (err: unknown) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!isPaused) getTempData();
    const intervalFn = setInterval(async () => {
      if (!isPaused) await getTempData();
    }, 3000);
    return () => clearInterval(intervalFn);
  }, [isPaused]);

  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <div className="flex flex-col desktop:flex-row w-full ƒpx-2 desktop:max-w-[80rem] mx-auto">
        <CurrentTempSection
          currentTemp={currentTemp}
          isPaused={isPaused}
          setIsPaused={setIsPaused}
          currentTimeStamp={currentTimeStamp}
        />
        <HistoricalTempChart hourlyDataArr={hourlyDataArr} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
