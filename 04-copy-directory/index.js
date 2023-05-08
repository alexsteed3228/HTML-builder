const fs = require('fs'),
      path = require('path'),
      rootPath = path.resolve(__dirname),
      targetPath = path.resolve(__dirname, 'files');
/*fs.rmdir(path.resolve(rootPath, 'files-copy'), function(err){
});*/

fs.mkdir(path.resolve(rootPath, 'files-copy'), function(err){
});

fs.readdir(path.resolve(__dirname, 'files'), function(err, files){
    if (err){
        throw err;
    }
    files.forEach(e =>{
        fs.copyFile(path.resolve(targetPath, path.basename(e)), path.resolve(rootPath, 'files-copy', path.basename(e)), function (err){
            if (err){
                console.log('ne copiruetsa')
            }
        })
    })
})

