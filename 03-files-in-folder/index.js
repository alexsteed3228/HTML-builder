const fs = require('fs'),
      path = require('path'),
      secretFolder = path.resolve(__dirname, 'secret-folder');

const directory = fs.readdir(secretFolder, function(err, files){
    if(err){
        return console.log(err);
    }
    files.forEach(e => {
        fs.stat(path.resolve(secretFolder, e), function(err, stats){
            if(err){
                console.log(err);
            }
            if (stats.isFile()){
                //расширение файла
                console.log(path.basename(e).split('.').slice(0, e.split('.').length - 1).join(), ' - ', path.extname(e).split('.')[e.split('.').length - 1], ' - ', (+stats.size / 1024), 'KBs')
            }          
        });
    })
});
