var net = require('net');
var port = process.argv[2];
var date = new Date();

var newDate = date.getFullYear()+'-'+("0" + (date.getMonth() + 1)).slice(-2)+'-'+("0" + date.getDate()).slice(-2)+' '+date.getHours()+':'+date.getMinutes();

var server = net.createServer(function callback (socket) {
	socket.end(newDate+'\n');
})

server.listen(port);

