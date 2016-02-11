 var combine = require('stream-combiner');
 var split = require('split');
 var through = require('through');
 var zlib = require('zlib');
 module.exports = function() {
         var result;
         return combine(
                 split(),
                 through(function(data){
                         if(data.length===0) return;
                         data = JSON.parse(data.toString());
                         switch(data.type) {
                                 case "genre" :
                                         if (result)
                                                 this.queue(JSON.stringify(result)+'\n');
                                         result = {"name":data.name, "books":[]};
                                         break;
                                 case "book" :
                                         result.books.push(data.name);
                                         break;
                                 default :
                                         console.log("Unknown type");
                         }
                 }, function () {this.queue(JSON.stringify(result)+'\n');this.queue(null)}),
                 zlib.createGzip()
         )
 }
