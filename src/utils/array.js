export const reorder = (array, startIndex, endIndex) => {
  const result = Array.from(array);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

export const remove = (array, index) => {
  const result = Array.from(array);
  result.splice(index, 1);
  return result;
};
