import { recentTempsArr } from "@/testData/temps";

const RecentTemps = (): JSX.Element => {
  return (
    <div className="border border-black w-full max-w-[28rem] mx-auto flex flex-col text-center">
      {/* Table Header */}
      <div className="flex mx-auto w-full border-b">
        <h2 className="w-full">Timestamp</h2>
        <h2 className="w-full">Temperature</h2>
      </div>
      {/* Mapped Table Array */}
      {recentTempsArr.map((tempField) => {
        return (
          <div className="flex">
            <h2 className="w-full">{tempField.timeStamp}</h2>
            <h2 className="w-full"> {tempField.temperature}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default RecentTemps;
