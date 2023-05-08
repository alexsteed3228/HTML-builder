const path = require('path'),
      fs = require('fs'),
      stream = fs.createReadStream(path.resolve(__dirname, 'text.txt'));
stream.on('data', data => console.log(data.toString()));


//console.log(fs.createReadStream(path.resolve(__dirname, 'text.txt')));
//console.log(fs.createReadStream(path.resolve('text.txt')));