var http = require('http'),
bl = require('bl');
var url = process.argv[2];

var myBL = new bl(function(err, myBL){
    console.log(myBL.length);
    console.log(myBL.toString());
});

http.get(url, function(res){
    res.pipe(myBL);
    res.on('end', function(){
        myBL.end();
    });
});

