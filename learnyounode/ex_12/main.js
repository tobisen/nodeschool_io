var http = require('http');
var port = process.argv[2];

var server = http.createServer(function callback (req, res) {
	if (req.method === 'POST') {
	        var data = '';

	        req.on('data', function (chunk) {
			data += chunk.toString().toUpperCase();
	        });
		req.on('end', function() {
	            	res.writeHead(200,"OK",{'content-type':'text/plain'});
			res.end(data);
		});
	}
});

server.listen(port);
