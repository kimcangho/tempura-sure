"use client";

import Header from "@/components/Header";
import CurrentTempSection from "@/components/CurrentTempSection";
import HistoricalTempSection from "@/components/HistoricalTempSection";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { convertTimeDoubleDigits } from "@/utils/convertTimeDoubleDigits";

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

      const query = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=43.7957&longitude=-79.2753&hourly=temperature_2m&start_date=${currentYear}-${currentMonth}-09&end_date=${currentYear}-${currentMonth}-14`
      );
      const { hourly } = await query.json();
      console.log(hourly);
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
      <div className="flex flex-col desktop:flex-row px-2 desktop:max-w-[80rem] mx-auto">
        <CurrentTempSection
          currentTemp={currentTemp}
          isPaused={isPaused}
          setIsPaused={setIsPaused}
          currentTimeStamp={currentTimeStamp}
        />
        <HistoricalTempSection hourlyDataArr={hourlyDataArr} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
