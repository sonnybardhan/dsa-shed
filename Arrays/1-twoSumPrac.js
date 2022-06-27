function twoSum(arr, n) {
  if (arr.length <= 1) return null;

  const numsHash = {};

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];

    if (numsHash[val] > -1) {
      return [numsHash[val], i];
    } else {
      const numToFind = n - arr[i];
      numsHash[numToFind] = i;
    }
  }

  return null;
}
