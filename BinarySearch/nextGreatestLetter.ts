// You are given an array of characters letters that is sorted in non-decreasing order, and a character target.
//There are at least two different characters in letters.

// Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

function nextGreatestLetter(letters: string[], target: string): string {
  //Step.0 Letters are already sorted but if it isn't, then we can sort it first
  const data = handleBinarySearchs(letters, target);
  return data;
}

const handleBinarySearchs = (array: string[], target: string) => {
  //First index
  let lowIndex = 0;
  let highIndex = array.length - 1;

  while (lowIndex <= highIndex) {
    let middleIndex = Math.floor(lowIndex + (highIndex - lowIndex) / 2);
    let middleValue = array[middleIndex];

    if (middleValue <= target) {
      lowIndex = middleIndex + 1; //we move to the right side  of the array
    } else if (middleValue > target) {
      highIndex = middleIndex - 1; //we move the left side of the array
    }
  }
  const nextGreatest = array[lowIndex];

  if (!nextGreatest) return array[0];

  return nextGreatest;
};

console.log(nextGreatestLetter(["c", "f", "j"], "a"));
console.log(nextGreatestLetter(["c", "f", "j"], "c"));
console.log(nextGreatestLetter(["x", "x", "y", "y"], "z"));
