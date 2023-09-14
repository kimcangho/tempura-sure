"use client";

import { useState } from "react";
import Button from "./Button";
import RecentTemps from "./RecentTemps";
import Image from "next/image";
import mapPinIcon from "/public/icons/mapPin.svg";
import clockIcon from "/public/icons/clock.svg";

const CurrentTempSection = (): JSX.Element => {
  const [isTempsVisible, setIsTempsVisible] = useState<boolean>(false);

  const handleSaveTemp = (): void => {
    console.log("Saving tempura...");
  };

  const handleShowTemps = (): void => {
    console.log("Showing last 5 tempuras...");
    setIsTempsVisible((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col">
      {/* Temp Display */}
      <div className="flex flex-col items-center mx-auto w-full max-w-[28rem] border border-gray-border rounded-lg shadow-md py-4">
        <h3>Current Temperature</h3>
        <h2 className="text-4xl my-8">°C</h2>
        <div className="flex items-center space-x-2 mb-2">
          <Image src={mapPinIcon} alt="Map Pin" className="h-6" />
          <h3>New York, US</h3>
        </div>
        <div className="flex space-x-2 h-full items-center">
          <Image src={clockIcon} alt="Clock" className="h-6" />
          <div className="flex flex-col">
            <h3>MM/DD/YYYY</h3>
            <h3 className="text-center">hh:mm:ss</h3>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex my-4 space-x-2 w-full max-w-[28rem] mx-auto">
        {/* Save */}
        <Button name="Save Temp" imagePath="" callbackFn={handleSaveTemp} />
        {/* Show */}
        <Button
          name={`${!isTempsVisible ? "Show" : "Hide"} Temps`}
          imagePath=""
          callbackFn={handleShowTemps}
        />
      </div>
      {isTempsVisible && <RecentTemps />}
    </div>
  );
};

export default CurrentTempSection;
