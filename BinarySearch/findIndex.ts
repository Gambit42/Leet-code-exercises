//Find the index of a value in an array

const handleFindIndexOfLetter = (letters: string[], target: string): number => {
  const index = handleBinarySearch(letters, target);
  console.log(`index`, index);

  return index;
};

const handleBinarySearch = (array: string[], target: string) => {
  let low = 0; //first index
  let high = array.length - 1; //last index

  while (low <= high) {
    let middle = Math.floor(low + (high - low) / 2);
    let middleValue = array[middle];

    //go right
    if (middleValue < target) {
      low = middle + 1;
    }
    //go left
    if (middleValue > target) {
      high = middle - 1;
    }

    if (middleValue === target) return middle;
  }
  return -1;
};

console.log(handleFindIndexOfLetter(["c", "f", "j"], "f"));
console.log(handleFindIndexOfLetter(["c", "f", "j"], "c"));
console.log(handleFindIndexOfLetter(["c", "f", "j", "k", "l"], "k"));
console.log(handleFindIndexOfLetter(["x", "x", "y", "y", "z"], "z"));
