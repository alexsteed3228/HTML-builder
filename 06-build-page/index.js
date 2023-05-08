const fs = require('fs'),
      path = require('path'),
      rootPath = path.resolve(__dirname),
      stylesPath = path.resolve(rootPath, 'styles'),
      targetPath = path.resolve(rootPath, 'project-dist');


fs.mkdir(targetPath, err => {
    if(err){
        console.log('1\n', err)
    }
    
});
//compile and copy css file into project dist
let buff = [];
fs.readdir(stylesPath, function(err, files){
    files.forEach(e=>{
        fs.readFile(path.resolve(stylesPath, e), 'utf-8', function(err, data){
            if(err){
                console.log('2\n', err);
            }
            if (path.basename(e).split('.')[path.basename(e).split('.').length -1] == 'css'){
                buff.push(data);
            }
            fs.writeFile(path.resolve(targetPath, 'styles.css'), buff.join(''), function(err){
                if(err){
                    console.log('3\n', err);
                }
            });
        })
    })
})
//copy template.html into project-dist/index.html
fs.copyFile(path.resolve(rootPath, 'template.html'), path.resolve(targetPath, 'index.html'), function(err){
    if (err){
        console.log('4\n', err)
    }
})
let assetsPath = path.resolve(rootPath, 'project-dist', 'assets');
fs.mkdir(assetsPath, function(err){

});

//insert in .html the full blocks of code

//FULL AND DEEP COPY OF ASSETS

function deepCopy(from, to){




    fs.readdir(from, function(err, files){
        if (err){
            console.log('5\n', err);
        }
        files.forEach(e=>{
            fs.stat(path.resolve(from, e), function(err, stats){
                if(err){
                    console.log('5\n', err);
                }
                if (stats.isDirectory()){
                    fs.mkdir(path.resolve(to, path.basename(e)), function(err){

                    })
                    deepCopy(path.resolve(from, path.basename(e)), path.resolve(to, path.basename(e)))
                } else if(stats.isFile()){
                    fs.copyFile(path.resolve(from, e), path.resolve(to, e), function(err){
                        if (err){
                            console.log('6\n', err)
                        }
                    })
                }})
            })
        })
    }

deepCopy(path.resolve(rootPath, 'assets'), path.resolve(rootPath, 'project-dist', 'assets'))



/*
fs.createReadStream(path.resolve(rootPath, 'template.html')).on('data', (data) => {
    let template = data.toString();
  
    fs.readdir(path.resolve(rootPath, 'components')).then((files) => {
        files.forEach((file) => {
            const filePath = path.join(__dirname, file);
            const basename = path.basename(filePath);
            const fileName = path.basename(filePath).replace(path.extname(filePath), '');
    
            fs.createReadStream(path.join(__dirname, 'components', basename)).on('data', (data) => {
              const htmlPath = path.join(__dirname, 'project-dist', 'index.html');
              const writter = fs.createWriteStream(htmlPath);
              template = template.replace('{{' + fileName + '}}', data.toString());
              writter.write(template);
            });
          });
      });
  });
  */