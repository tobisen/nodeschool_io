var fs = require('fs');
var file = process.argv[2];

var content;

fs.readFile(file, function read(err, data) {
    	if (err) {
        	throw err;
    	}
    	content = data.toString().split("\n").length-1;
	console.log(content);
});

