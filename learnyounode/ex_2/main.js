var keys = process.argv;
var sum = 0;

for( var i = 2,length = keys.length; i < length; i++ ) {
	sum = sum + +keys[i];
}

console.log(sum);
