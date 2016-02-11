var fs = require('fs');
var list = process.argv[2];
var ext = process.argv[3];
var content = 0;

fs.readdir(list, function read(err, data) {
	if (err) {
		throw err;
	}
	for (i=0; i<data.length; i++) {
		content = data[i].split('.');
		if (content[1] == ext) {
			console.log(data[i]);
		}
	}
});

