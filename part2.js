let totals = require("./part1").getTotals();//use part1.js

console.log("Total calories of top 3 Elves: " + totals.splice(0,3).reduce(function(a, b){

  return a+b;
}))