function countVowels(str, n = 0, vowels = 'aeiou') {
  if (!str.length) return n;

  n += vowels.includes(str[0]) ? 1 : 0;

  return countVowels(str.slice(1), n);
}

console.log(countVowels('cat'));
