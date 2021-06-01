export const isObjectEmpty = (object) => {
  return Object.values(object).every((x) => x === null || x === "");
};
