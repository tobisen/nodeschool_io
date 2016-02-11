var mymodule = require('./module.js')  

mymodule(process.argv[2],process.argv[3], function(err){
    console.log("oh no! " + err);
});
