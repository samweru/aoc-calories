let data = require("./datasource").getSource(process.argv[2]);//read from text file

var list = data.toString().split("\n");//split by new line
var sum = 0;
var totals = [];

list.forEach(function(item, idx){

	item = parseInt(item.trim());
		if(!isNaN(item))
			sum += item;

	//skip empty lines and store section total
	if(isNaN(item)){

		totals.push(sum);
		sum = 0; //reset sum
	}
});

totals = totals.sort(function(a, b){return b - a});//Sort By descending order
console.log(totals);

