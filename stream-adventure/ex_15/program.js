var crypto = require('crypto');
var zlib = require('zlib');
var tar = require('tar');
var through = require('through');

var name = process.argv[2];
var phrase = process.argv[3];


var decipher = crypto.createDecipher(name, phrase);
var gunzip = zlib.createGunzip();
var parser = tar.Parse();

parser.on('entry', function(entry) {
    if (entry.type !== 'File') return;
    var hasher = crypto.createHash('md5', { encoding: 'hex' });
    entry.pipe(hasher).pipe(through(function(md5) {
        console.log(md5 + ' ' + entry.path);
    }));
});

process.stdin
    .pipe(decipher)
    .pipe(gunzip)
    .pipe(parser);

