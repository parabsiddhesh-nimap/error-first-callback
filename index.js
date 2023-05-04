const fs = require("fs");

const file = "file.txt";


// };

fs.readFile(file,'utf8', function(err, data){
	if (err) {
		console.log(`Error Occured : ${err}`)
		return err;
	}
	console.log(`Data is : ${data}`);
});


