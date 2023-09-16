interface hourlyObjectData {
  temperature_2m: number[];
  time: Date[];
}

export const trimHourlyArray = (
  object: hourlyObjectData,
  currentTime: Date
) => {
  const { temperature_2m, time } = object;

  const foundIndex = time.findIndex((hour: Date) => {
    return hour === currentTime;
  });

  const newTempArr = temperature_2m.slice(foundIndex - 120, foundIndex + 1);
  const newTimeArr = time.slice(foundIndex - 120, foundIndex + 1);
  const newObj = { temperature_2m: newTempArr, time: newTimeArr };

  return newObj;
};
