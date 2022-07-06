function smallestCommonNumber(arr1, arr2, arr3) {
  let idx = 0;
  let largest;

  while (idx < arr1.length && idx < arr2.length && idx < arr3.length) {
    largest = Math.max(arr1[idx], arr2[idx], arr3[idx]);

    if (
      arr1.includes(largest) &&
      arr2.includes(largest) &&
      arr3.includes(largest)
    ) {
      return largest;
    }
    idx++;
  }

  return -1;
}

const v1 = [6, 7, 10, 25, 30, 63, 64];
const v2 = [0, 4, 5, 7, 8, 50];
const v3 = [1, 6, 10, 14];

console.log(smallestCommonNumber(v1, v2, v3));
