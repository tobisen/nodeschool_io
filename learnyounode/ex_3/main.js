var fs = require('fs');

var file = process.argv[2];

var readFile = fs.readFileSync(file);
readFile = readFile.toString();

var res = readFile.split("\n"); 

var count = res.length -1;

console.log(count);
