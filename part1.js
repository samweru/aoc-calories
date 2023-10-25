let data = require("./datasource").getSource(process.argv[2]);//read from text file

var list = data.toString().split("\n");//split by new line
var sum = 0;
var totals = [];

list.forEach(function(item, idx){

	try{
	
		//simple validations
		item = item.trim().trim("\n");
		if(!Number.isInteger(parseInt(item)) && item.length !== 0)
			throw new Error("Malformed Input: "+item);

		//sum section items
		item = parseInt(item);
		if(!isNaN(item))
		  sum += item;

		//skip empty lines and store section total
		if(isNaN(item)){

			totals.push(sum);
			sum = 0; //reset sum
		}
	}
	catch(err){

		console.log(err.message);
		process.exit(1);
	}
});

totals = totals.sort(function(a, b){return b - a});//Sort By descending order
console.log(totals);

