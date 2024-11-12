// You have a long flowerbed in which some of the plots are planted, and some are not. However,
// flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty,
// and an integer n, return true if n new flowers can
//be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

const canPlaceFlowers = (
  currentFlowerbed: number[],
  numberOfFlowersToPlace: number
) => {
  let flowersPlanted = 0;
  const newFlowerbed = [] as number[];

  currentFlowerbed.forEach((flower, index) => {
    const isFlowerbedPlanted = flower === 1;
    const isPreviousFlowerBedEmpty = newFlowerbed[index - 1] === 0;
    const isNextFlowerBedEmpty = currentFlowerbed[index + 1] === 0;
    const isLastFlowerBedEmpty =
      currentFlowerbed[currentFlowerbed.length - 1] === 0;

    if (isFlowerbedPlanted) {
      //If already planted just return planted
      return newFlowerbed.push(1);
    }

    if (isLastFlowerBedEmpty && isPreviousFlowerBedEmpty) {
      //If last flowerbed is empty and previous one is empty as well meaning we can plant on the last flowerbed
      flowersPlanted += 1;
      return newFlowerbed.push(1);
    }

    if (index === 0 && isNextFlowerBedEmpty) {
      //If first index has no planted or first item no planted and so is the next item, plant one flower
      flowersPlanted += 1;
      return newFlowerbed.push(1);
    }

    if (isPreviousFlowerBedEmpty && isNextFlowerBedEmpty) {
      flowersPlanted += 1;
      return newFlowerbed.push(1);
    }

    //If cannot plant just stay 0
    return newFlowerbed.push(0);
  });

  if (flowersPlanted < numberOfFlowersToPlace) {
    return false;
  }

  return true;
};

console.log(canPlaceFlowers([0, 0, 1, 0, 0], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
