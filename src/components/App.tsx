"use client";

import { useEffect, useState } from "react";
import { convertTimeDoubleDigits } from "@/utils/convertTimeDoubleDigits";
import Header from "@/components/Header";
import CurrentTempTime from "@/components/CurrentTempTime";
import HistoricalTempChart from "@/components/HistoricalTempChart";
import Footer from "@/components/Footer";
import {
  LATITUDE,
  LONGITUDE,
  FIVE_DAYS_IN_MS,
  FETCH_INTERVAL_IN_MS,
} from "@/data/constants";

const App = () => {
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [currentTemp, setCurrentTemp] = useState<number | undefined>(undefined);
  const [currentTimeStamp, setCurrentTimeStamp] = useState<Date | null>(null);
  const [isTempsVisible, setIsTempsVisible] = useState<boolean>(false);
  const [hourlyDataArr, setHourlyDataArr] = useState([]);

  const getTempData = async (): Promise<void> => {
    try {
      const timeStamp = new Date();
      setCurrentTimeStamp(timeStamp);

      const currentYear = timeStamp.getFullYear().toString();
      const currentMonth = convertTimeDoubleDigits(timeStamp.getMonth() + 1);
      const currentDate = timeStamp.getDate();
      const convertedDate = Date.parse(timeStamp.toString());
      const startDateAsNumber: number = convertedDate - FIVE_DAYS_IN_MS;
      const startDate = new Date(startDateAsNumber).getDate();

      const query = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&current_weather=true&hourly=temperature_2m&start_date=${currentYear}-${currentMonth}-${startDate}&end_date=${currentYear}-${currentMonth}-${currentDate}&timezone=America%2FNew_York`
      );
      const data = await query.json();
      setHourlyDataArr(data.hourly);
      setCurrentTemp(data.current_weather.temperature);
    } catch (err: unknown) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!isPaused) getTempData();
    const intervalFn = setInterval(async () => {
      if (!isPaused) await getTempData();
    }, FETCH_INTERVAL_IN_MS);
    return () => clearInterval(intervalFn);
  }, [isPaused]);

  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <div className="flex flex-col desktop:flex-row w-full px-2 desktop:max-w-[80rem] mx-auto">
        <CurrentTempTime
          isPaused={isPaused}
          setIsPaused={setIsPaused}
          currentTemp={currentTemp}
          currentTimeStamp={currentTimeStamp}
          isTempsVisible={isTempsVisible}
          setIsTempsVisible={setIsTempsVisible}
        />
        <HistoricalTempChart
          hourlyDataArr={hourlyDataArr}
          isTempsVisible={isTempsVisible}
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
