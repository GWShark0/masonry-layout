const columnSplit = (array, n = 3) => {
  return array.reduce((result, value, index) => {
    result[index % n].push(value);
    return result;
  }, Array.from(Array(n), () => []));
}

export default columnSplit;
