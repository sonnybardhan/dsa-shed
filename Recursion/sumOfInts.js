function sumOfInts(n) {
  if (n === 1) return 1;
  return n + sumOfInts(n - 1);
}

console.log(sumOfInts(4));
