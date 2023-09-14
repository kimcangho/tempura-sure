export const convertTimeDoubleDigits = (integer: number): string => {
  let convertedInteger = integer.toString();
  if (integer >= 0 && integer <= 9) {
    convertedInteger = `0${convertedInteger}`;
  }
  return convertedInteger;
};
