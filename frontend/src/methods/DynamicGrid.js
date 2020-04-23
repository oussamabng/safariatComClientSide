const DynamicData = (data, col) => {
  let newArr = [];
  let finalArr = [];

  data.map((element, index) => {
    if (index % col === 0) {
      newArr = [];
      finalArr.push(newArr);
    }
    newArr.push(element);
    return true;
  });
  return finalArr;
};
export default DynamicData;
