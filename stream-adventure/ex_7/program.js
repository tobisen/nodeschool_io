var http = require('http');
var fs = require('fs');
var through = require('through2');

var port = process.argv[2];

var server = http.createServer (function (req, res) {
        if (req.method === 'POST') {
		var stream = through(function write(buf, _, next) {
			this.push(buf.toString().toUpperCase());
   			next();
		})
		req.pipe(stream).pipe(res);
        }
	else res.end('send me a POST\n');
});
server.listen(port);
