"use client";

import Header from "@/components/Header";
import CurrentTempSection from "@/components/CurrentTempSection";
import HistoricalTempSection from "@/components/HistoricalTempSection";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

const Home = () => {
  const [tempInfo, setTempInfo] = useState();
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const getTempData = async () => {
    try {
      const query = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=43.7957&longitude=-79.2753&hourly=temperature_2m&start_date=2023-09-09&end_date=2023-09-14"
      );
      const { hourly } = await query.json();
      setTempInfo(hourly.temperature_2m[hourly.temperature_2m.length - 1]);
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
          tempInfo={tempInfo}
          isPaused={isPaused}
          setIsPaused={setIsPaused}
        />
        <HistoricalTempSection />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
