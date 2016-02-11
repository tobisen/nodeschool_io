var http = require('http');
var port = process.argv[2];
var url = require('url');
var date;

var server = http.createServer(function callback (req, res) {
        if (req.method === 'GET') {
		var pathname = url.parse(req.url).pathname;
		var query = url.parse(req.url).query.split('=');
		query = query[1];
		var time = {};
		var times = {};

		if (pathname === '/api/parsetime') { 
        		date = new Date(query);
        		time = {
            			'hour': date.getHours(),
            			'minute': date.getMinutes(),
            			'second': date.getSeconds()
        		};
			res.writeHead(200, { 'Content-Type': 'application/json' })  
        	        res.end(JSON.stringify(time));
		} else if (pathname === '/api/unixtime') {
        		date = new Date(query).getTime();
        		times = {
		            'unixtime': date
        		};
//			times['unixtime'] = (new Date(query).getTime() / 1000).toFixed(0)
			res.writeHead(200, { 'Content-Type': 'application/json' })  
	                res.end(JSON.stringify(times));
}
        } 
});

server.listen(port);
