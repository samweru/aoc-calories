const fs = require('fs');

module.exports = {

	getSource:function(source){

		let fd;
		let data;

		try {

			if(!fs.existsSync(source))
				throw new Error("File does not exist!")

		  	fd = fs.openSync(source, 'r');
		  	data = fs.readFileSync(fd, 'utf8');
		} 
		catch (err) {

		  	console.log(err.message);
		  	process.exit(1);
		} 
		finally {

		  if (fd !== undefined)
		    fs.closeSync(fd);
		}

		return data;
	}
}