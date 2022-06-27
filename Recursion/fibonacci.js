// function fib(n) {
//   if (n <= 1) return n;
//   return fib(n - 1) + fib(n - 2);
// }

// console.log(fib(7));

function fib() {
  cache = {};

  return function fib_inner(n) {
    if (n <= 1) return n;

    if (cache[n]) {
      return cache[n];
    }

    cache[n] = fib_inner(n - 1) + fib_inner(n - 2);

    return cache[n];
  };
}

const inner = fib();

console.log(inner(6));
