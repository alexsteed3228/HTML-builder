const fs = require('fs'),
      path = require('path'),
      rootPath = path.resolve(__dirname, 'styles'),
      targetPath = path.resolve(__dirname, 'project-dist');
let buff = [];
fs.readdir(rootPath, function(err, files){
    files.forEach(e=>{
        fs.readFile(path.resolve(rootPath, e), 'utf-8', function(err, data){
            if(err){
                throw err;
            }
            if (path.basename(e).split('.')[path.basename(e).split('.').length -1] == 'css'){
                buff.push(data);
            }      
            fs.writeFile(path.resolve(targetPath, 'bundle.css'), buff.join(''), function(err){
                if(err){
                    throw err;
                }
            }); 
        })
    })
})
