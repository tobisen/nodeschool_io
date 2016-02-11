module.exports = directoryReader;

function directoryReader(directoryName, filterString, callbackFunction){

    	var fs = require('fs');

	fs.readdir(directoryName, function read(err, data) {
		if (err) {
			return callbackFunction(err);
		}
		var content;
		for (var i=0; i<data.length; i++) {
			content = data[i].split('.');
			if (content[1] == filterString) {
				console.log(data[i]);	
			}
		}
	});
};
