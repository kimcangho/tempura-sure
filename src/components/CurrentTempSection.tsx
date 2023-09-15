"use client";

import { useState, useEffect } from "react";
import Button from "./Button";
import RecentSnapshotTable from "./RecentSnapshotTable";
import Image from "next/image";
import mapPinIcon from "/public/icons/mapPin.svg";
import clockIcon from "/public/icons/clock.svg";
import { convertTimeDoubleDigits } from "@/utils/convertTimeDoubleDigits";

interface SavedTempData {
  timeStamp: Date;
  temperature: number;
}

interface CurrentTempSectionProps {
  currentTemp: number | undefined;
  isPaused: boolean;
  setIsPaused: Function;
  currentTimeStamp: Date | null;
}

const CurrentTempSection = ({
  currentTemp,
  isPaused,
  setIsPaused,
  currentTimeStamp,
}: CurrentTempSectionProps): JSX.Element => {
  const [isTempsVisible, setIsTempsVisible] = useState<boolean>(false);
  const [savedSnapshotsArr, setSavedSnapshotsArr] = useState<
    SavedTempData | []
  >([]);

  useEffect(() => {
    const savedSnapshots: any = JSON.parse(localStorage.getItem("snapshots")!);
    if (!savedSnapshots) setSavedSnapshotsArr([]);
    else setSavedSnapshotsArr(savedSnapshots);
  }, []);

  const handleSaveTemp = (): void => {
    //@ts-ignore
    setSavedSnapshotsArr((prevSavedTempsArr: any) => {
      if (prevSavedTempsArr.length >= 5) {
        prevSavedTempsArr = prevSavedTempsArr.slice(0, 4);
      }

      const newSavedTempsArr = [
        {
          timeStamp: currentTimeStamp,
          temperature: currentTemp,
        },
        ...prevSavedTempsArr,
      ];

      localStorage.setItem("snapshots", JSON.stringify(newSavedTempsArr));
      return newSavedTempsArr;
    });
  };

  const handleShowTemps = (): void => {
    setIsTempsVisible((prevState) => !prevState);
  };

  const handlePlayPause = (): void => {
    setIsPaused((prev: boolean) => !prev);
  };

  return (
    <div className=" flex flex-col tablet:flex-row desktop:flex-col tablet:justify-center desktop:justify-start w-full desktop:w-[28rem] mx-auto tablet:space-x-4 desktop:space-x-0 desktop:mr-4">
      <div className="text-black">
        {/* Temp Display and Play/Pause */}
        <div className="max-w-[28rem] tablet:max-w-[20rem] w-full tablet:w-[28rem] mx-auto">
          <div className="flex flex-col items-center mx-auto w-full max-w-[28rem] border border-gray-border bg-gray-border rounded-lg shadow-md py-4">
            <h3 className="text-2xl">Current Temperature</h3>
            <h2 className="text-4xl my-8">{currentTemp}°C</h2>
            <div className="flex items-center space-x-2 mb-2">
              <Image src={mapPinIcon} alt="Map Pin" className="h-6" />
              <h3>New York, US</h3>
            </div>
            <div className="flex space-x-2 h-full items-center">
              <Image src={clockIcon} alt="Clock" className="h-6" />
              <div className="flex flex-col">
                <h3 className="text-center">{`${
                  currentTimeStamp
                    ? `${convertTimeDoubleDigits(
                        currentTimeStamp?.getMonth() + 1
                      )}/${convertTimeDoubleDigits(
                        currentTimeStamp?.getDay()
                      )}/${convertTimeDoubleDigits(
                        currentTimeStamp?.getFullYear()
                      )}`
                    : "--/--/----"
                } `}</h3>
                <h3 className="text-center">
                  {`${
                    currentTimeStamp
                      ? `${convertTimeDoubleDigits(
                          currentTimeStamp?.getHours()
                        )}:${convertTimeDoubleDigits(
                          currentTimeStamp?.getMinutes()
                        )}:${convertTimeDoubleDigits(
                          currentTimeStamp?.getSeconds()
                        )}`
                      : "--:--:--"
                  } `}
                </h3>
              </div>
            </div>
          </div>

          <div className="flex mt-4 w-full max-w-[28rem] mx-auto">
            <Button
              name={!isPaused ? "Pause" : "Play"}
              imagePath=""
              callbackFn={handlePlayPause}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex my-4 space-x-4 w-full max-w-[28rem] tablet:max-w-[20rem] mx-auto">
          {/* Save */}
          <Button name="Save Snap" imagePath="" callbackFn={handleSaveTemp} />
          {/* Show */}
          <Button
            name={`${!isTempsVisible ? "Show" : "Hide"} Snaps`}
            imagePath=""
            callbackFn={handleShowTemps}
          />
        </div>
      </div>
      {isTempsVisible && (
        //@ts-ignore
        <RecentSnapshotTable savedSnapshotsArr={savedSnapshotsArr} />
      )}
    </div>
  );
};

export default CurrentTempSection;
