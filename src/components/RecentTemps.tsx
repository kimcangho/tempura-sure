import { recentTempsArr } from "@/testData/temps";

const RecentTemps = (): JSX.Element => {
  return (
    <div className="border border-gray-border rounded-lg shadow-md w-full max-w-[28rem] mx-auto flex flex-col text-center bg-gray-border mb-4 desktop:mb-0">
      {/* Table Header */}
      <div className="flex mx-auto w-full border-b-2 border-blue-light py-1">
        <h2 className="w-full text-blue-light font-semibold text-lg">Timestamp</h2>
        <h2 className="w-full text-blue-light font-semibold text-lg">Temperature</h2>
      </div>
      {/* Mapped Table Array */}
      {recentTempsArr.map((tempField) => {
        return (
          <div className="flex py-1 text-black">
            <h2 className="w-full">{tempField.timeStamp}</h2>
            <h2 className="w-full"> {tempField.temperature}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default RecentTemps;
