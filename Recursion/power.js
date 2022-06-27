function power(n, times) {
  if (times < 1) return 1;

  return n * power(n, times - 1);
}

console.log(power(2, 3));
