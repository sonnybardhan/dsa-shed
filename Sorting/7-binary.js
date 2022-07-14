function binarySearch(arr, element) {
  let start = 0;
  let end = arr.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] === element) {
      return mid;
    } else if (arr[mid] < element) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

// function binarySearch(arr, element) {
//   let start = 0;
//   let end = arr.length - 1;
//   let mid;

//   while (start <= end) {
//     mid = Math.floor((start + end) / 2);

//     if (element === arr[mid]) {
//       return mid;
//     } else if (element > arr[mid]) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }

//   return -1;
// }

// function binarySearch(arr, element) {
//   let start = 0;
//   let end = arr.length - 1;
//   let mid;

//   // while (mid >= start && mid <= end) {
//   while (start <= end) {
//     mid = Math.floor((start + end) / 2);
//     // console.log(start, mid, end);
//     if (element < arr[mid]) {
//       end = mid - 1;
//     } else if (element > arr[mid]) {
//       start = mid + 1;
//     } else {
//       // console.log('came here');
//       return mid;
//     }
//   }

//   return -1;
// }

let arr;
arr = [1, 2, 3, 4, 6, 7, 8, 9];
//-----0  1  2  3  4  5  6  7  8  9  10
// let element = 0;
// let element = 10;
// let element = 5;
// let element = 9;
let element = 1;
console.log(binarySearch(arr, element));
