let findBuySellStockPrices = function (arr) {
  if (arr.length < 2) return null;
  if (arr.length === 2) return arr;

  let lowestBuy = arr[0];
  let highestSell = arr[1];
  // let maxProfit = highestSell - lowestBuy;
  let maxProfit = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    currSell = arr[i];

    let currProfit = currSell - lowestBuy;

    if (currProfit > maxProfit) {
      maxProfit = currProfit;
      highestSell = currSell;
    }

    if (currSell < lowestBuy) {
      lowestBuy = currSell;
    }
  }
  return [highestSell - maxProfit, highestSell];
};

// let findBuySellStockPrices = function (arr) {
//   if (arr.length < 2) return null;
//   if (arr.length === 2) return arr;

//   let lowestBuy = arr[0];
//   let highestSell = arr[1];
//   let maxProfit = highestSell - lowestBuy;

//   for (let i = 1; i < arr.length; i++) {
//     let curr = arr[i];

//     //check if curr-lowestBuy > maxProfit
//     let currProfit = curr - lowestBuy;
//     if (currProfit > maxProfit) {
//       highestSell = curr;
//       maxProfit = currProfit;
//     }

//     //maintain lowestBuy seen so far
//     if (curr < lowestBuy) {
//       lowestBuy = curr;
//     }
//   }
//   return [highestSell - maxProfit, highestSell];
// };

let stocks = [7, 1, 5, 3, 6, 4];
// stocks = [12, 30, 40, 90, 110];
console.log(findBuySellStockPrices(stocks));
