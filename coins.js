//Write a program that will convert a dollar amount to the number of coins that make up the amount. 
//Use the common American coins of quarters, dimes, nickels, and pennies.

/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

/*function coinCounter () {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

  coinPurse.quarters = 0;

  return coinPurse;
}

var coins = coinCounter()
console.log();
*/

function coinCounter(num2) {
  var num = num2*100; //this eliminates the use of decimals to create whole numbers.
  var coinPurse = {};
  if (num >= 25) {
    coinPurse.quarters = Math.floor(num/25);
    num = (num - (coinPurse.quarters*25));
  }

  if (num >= 10 || num <= 24) {
    coinPurse.dimes = Math.floor(num/10);
    num = (num - (coinPurse.dimes*10));
      
  }

  if (num >= 5 || num <= 9) {
    coinPurse.nickels = Math.floor(num/5);
    num = (num - (coinPurse.nickels*5));
  }

  if (num >= 1 || num <= 4) {
    coinPurse.pennies = Math.floor(num/1);
    num = (num - (coinPurse.nickels*1));
  }

  return coinPurse || (num);

}
  
  var coins = coinCounter(1.66);


  console.log(coins);


  
