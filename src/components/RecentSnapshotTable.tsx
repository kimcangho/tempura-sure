import { useEffect } from "react";

interface RecentTempsProps {
  savedTempsArr: any[];
}

const RecentSnapshotTable = ({ savedTempsArr }: RecentTempsProps) => {
  return (
    <div className="border border-gray-border rounded-lg shadow-md w-full max-w-[28rem] mx-auto flex flex-col text-center bg-gray-border mb-4 desktop:mb-0">
      {/* Table Header */}
      <div className="flex mx-auto w-full border-b-2 border-blue-light py-1">
        <h2 className="w-full text-blue-light font-semibold text-lg">
          Timestamp
        </h2>
        <h2 className="w-full text-blue-light font-semibold text-lg">
          Temperature
        </h2>
      </div>
      {/* Mapped Table Array */}
      {savedTempsArr?.length === 0 ? (
        <h2 className="text-center py-1 text-black">Nothing saved!</h2>
      ) : (
        savedTempsArr?.map((tempField, index) => {
          return (
            <div key={index} className="flex items-center py-1 text-black">
              <h2 className="w-full">{tempField.timeStamp.toString()}</h2>
              <h2 className="w-full"> {tempField.temperature}</h2>
            </div>
          );
        })
      )}
    </div>
  );
};

export default RecentSnapshotTable;
