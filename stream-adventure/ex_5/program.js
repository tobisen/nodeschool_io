var split = require('split');
var through = require('through2');

var i = 0;
process.stdin
	.pipe(split())
	.pipe(through(function (line, _, next) {
		if (i % 2 == 0) {
			this.push(line.toString().toLowerCase()+'\n');
//			console.dir(line.toString().toLowerCase());
		} else {
			this.push(line.toString().toUpperCase()+'\n');
//			console.dir(line.toString().toUpperCase());
		}
		i++;
		next();
	})).pipe(process.stdout)
;

