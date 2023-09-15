import { convertTimeDoubleDigits } from "@/utils/convertTimeDoubleDigits";

interface SavedSnapshotData {
  timeStamp: Date;
  temperature: number;
}

interface RecentTempsProps {
  savedSnapshotsArr: SavedSnapshotData[];
}

const RecentSnapshotTable = ({ savedSnapshotsArr }: RecentTempsProps) => {
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
      {savedSnapshotsArr?.length === 0 ? (
        <h2 className="text-center py-1 text-black">Nothing saved!</h2>
      ) : (
        savedSnapshotsArr?.map((snapshot: any, index) => {
          const newDate = new Date(Date.parse(snapshot.timeStamp));

          const year = convertTimeDoubleDigits(newDate.getFullYear());
          const month = convertTimeDoubleDigits(newDate.getMonth() + 1);
          const day = convertTimeDoubleDigits(newDate.getDate());

          const hours = convertTimeDoubleDigits(newDate.getHours());
          const minutes = convertTimeDoubleDigits(newDate.getMinutes());
          const seconds = convertTimeDoubleDigits(newDate.getSeconds());

          return (
            <div key={index} className="flex items-center py-1 text-black">
              <div className="flex flex-col items-center w-full">
                <h2 className="w-full">{`${month}/${day}/${year}`}</h2>
                <h2 className="w-full">{`${hours}:${minutes}:${seconds}`}</h2>
              </div>
              <h2 className="w-full"> {snapshot.temperature}</h2>
            </div>
          );
        })
      )}
    </div>
  );
};

export default RecentSnapshotTable;
