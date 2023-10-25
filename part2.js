let fs = require("fs")

//read from text file
fs.readFile('list.txt', function(err, data) {

   	if(err) throw err;

   	//initialize variables
   	var totals = [];
   	var item = null;
   	var sum = 0;
    var array = data.toString().split("\n"); //split by new line

   	for(i in array){

   		//sum each section
   		item = parseInt(array[i].trim());
   		if(!isNaN(item))
    		sum += item;

    	//skip empty lines and store section total
    	if(isNaN(item)){

    		totals.push(sum);
    		sum = 0; //reset sum
    	}
   	}

   	totals = totals.sort(function(a, b){return b - a});//Sort By descending order
   	console.log("Elf carrying most calories: " + totals[0]); 
   	console.log("Total calories of top 3 Elves: " + totals.splice(0,3).reduce(function(a, b){

   		return a+b;
   	}))
});

