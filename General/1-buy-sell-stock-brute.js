let findBuySellStockPrices = function (stockNums) {
  let max = -Infinity;
  let answer = [];

  for (let i = 0; i < stockNums.length - 1; i++) {
    for (let j = i + 1; j < stockNums.length; j++) {
      let currDifference = stockNums[j] - stockNums[i];
      // console.log('curr difference: ', currDifference);
      if (currDifference > max) {
        max = currDifference;
        answer = [stockNums[i], stockNums[j]];
        // console.log('curr difference: ', currDifference);
      }
    }
  }
  return answer;
};

let stocks = [7, 1, 5, 3, 6, 4];
stocks = [12, 30, 40, 90, 110];
console.log(findBuySellStockPrices(stocks));
