function rotate(arr, n) {
  if (n === 0) return arr;

  n = n % arr.length;

  let shiftBy;

  if (n < 0) {
    shiftBy = n * -1;
  } else {
    shiftBy = arr.length - n;
  }

  let front = arr.slice(0, shiftBy);
  let rear = arr.slice(shiftBy);

  return [...rear, ...front];
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr = [-1, -100, 3, 99];
//[3,99,-1,-100]

console.log(rotate(arr, 2));
