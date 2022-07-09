function insertion(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      let j = i;
      let curr = arr[j];

      while (curr < arr[j - 1] && j > -1) {
        arr[j] = arr[j - 1];
        j--;
      }
      arr[j] = curr;
    }
  }
  return arr;
}

let arr = [5, 40, 14, 65, -9];
// arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// arr = [20, 99, 44];

console.log(insertion(arr));
