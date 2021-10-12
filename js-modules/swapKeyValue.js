const swapKeyValue = (objectToSwap) => {
  const swappedObj = {};
  Object.keys(objectToSwap).forEach((key) => {
    swappedObj[objectToSwap[key]] = key;
  });
  return swappedObj;
};
export default swapKeyValue;
