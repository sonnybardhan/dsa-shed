function firstOccurence(arr, n, currIdx = 0) {
  if (currIdx === arr.length) return -1;
  if (currIdx < 0) return -1;
  if (arr[currIdx] === n) return currIdx;

  return firstOccurence(arr, n, currIdx + 1);
}

const arr = [9, 8, 1, 8, 1, 7];
const testVariable = 1;
const currentIndex = 0;
console.log(firstOccurence(arr, testVariable, currentIndex));
