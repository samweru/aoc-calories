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

   	console.log(totals.sort(function(a, b){return b - a})) //Sort By descending order
});

