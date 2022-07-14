function binarySearch(arr, el) {
  let left = 0;
  let right = arr.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (arr[mid] === el) {
      return mid;
    } else if (arr[mid] < el) {
      left = mid + 1;
    } else {
      //arr[mid] > el
      right = mid - 1;
    }
  }

  return -1;
}

function findRange(arr, t) {
  if (!arr.length) return [-1 - 1];
  if (binarySearch(arr, t) === -1) return [-1, -1];
}

function binaryRange(arr, el) {
  let left = 0;
  let right = arr.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (arr[mid] === el) {
      const range = [mid];
      let goLeft = mid - 1;
      let goRight = mid + 1;

      while (arr[goLeft] === el) {
        range.push(goLeft);
        goLeft--;
        //go backwards
      }
      while (arr[goRight] === el) {
        range.push(goRight);
        goRight++;
        //go forwards
      }
      const start = Math.min(...range);
      const end = Math.max(...range);
      return [start, end];
    } else if (arr[mid] < el) {
      left = mid + 1;
    } else {
      //arr[mid] > el
      right = mid - 1;
    }
  }

  return [-1, -1];
}

//let arr;
// let target;

//[1,3,3,5,5,5,8,9] t=5 -> [3,5]
//[1,2,3,4,5,6] t=4 -> [3,3]
//[1,2,3,4,5] t=9 -> [-1,-1]
//[] t=3 -> [-1,-1]

let arr = [1, 2, 3, 3, 3, 4, 5];
//---------0  1  2  3  4  5  6
let el = 3; //[2,4]

// console.log(binarySearch(arr, el));
// console.log(binaryRange(arr, el));
// console.log(binaryRange([1, 3, 3, 5, 5, 5, 8, 9], 5));
// console.log(binaryRange([1, 2, 3, 4, 5, 6], 5));
console.log(binaryRange([1, 2, 3, 4, 5, 6], 9));
// console.log(binaryRange([], 9));
