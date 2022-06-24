function square(n) {
  if (n < 1) return n;
  // return square(n - 1) + 2 * n - 1;
  return square(n - 1) + 2 * n - 1;
}

//4*4

console.log(square(4));
