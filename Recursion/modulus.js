function modulus(num, div) {
  if (div === 0) {
    return 'divide by zero error!';
  }

  if (div > num) return num;
  return modulus(num - div, div);
}

// console.log(modulus(21, 5));
// console.log(modulus(23, 3));
console.log(modulus(23, 0));
