function selectionAsc(arr) {
  let minIdx;

  for (let i = 0; i < arr.length; i++) {
    minIdx = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (arr[minIdx] < arr[i]) {
      [arr[minIdx], arr[i]] = [arr[i], arr[minIdx]];
    }
  }
  return arr;
}

function selectionDesc(arr) {
  let maxVal;
  let maxIdx;

  for (let i = 0; i < arr.length; i++) {
    maxVal = arr[i];
    for (let j = i; j < arr.length; j++) {
      if (arr[j] > maxVal) {
        maxVal = arr[j];
        maxIdx = j;
      }
    }
    //swap
    if (maxVal > arr[i]) {
      [arr[maxIdx], arr[i]] = [arr[i], arr[maxIdx]];
    }
  }
  return arr;
}

let arr = [5, 40, 14, 65, -9];
console.log(selectionAsc(arr));
// console.log(selectionDesc(arr));
