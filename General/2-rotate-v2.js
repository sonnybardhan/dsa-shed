function rotate(arr, n) {
  n = n % arr.length;

  if (n === 0) return arr;

  n = n * -1;

  const front = arr.slice(n);
  const back = arr.slice(0, n);
  return [...front, ...back];
}

// [1, 2, 3, 4, 5]		n=1		[ 5, 1, 2, 3, 4 ]
// [1, 2, 3, 4, 5]		n=2		[ 4, 5, 1, 2, 3 ]

// [1,2,3,4,5]		n=-1		[2,3,4, 5,1]
// [1,2,3,4,5]		n=-2		[3,4,5,1,2]

let arr;
// arr = [1, 2, 3, 4, 5];
arr = [1, 10, 20, 0, 59, 86, 32, 11, 9, 40];
n = 2;

console.log(rotate(arr, n));
