const process = require('process'),
      path = require('path'),
      fs = require('fs');
fs.writeFile(path.resolve(__dirname, 'textFile.txt'), writingText(), function(err){
    if(err){
        return console.log(err);
    }
});

/*process.on('beforeExit', ()=>{
    console.log('vsego dobrogo!')
})*/
/*process.on('exit', (code)=>{
    console.log('Vsego Dobrogo');
})*/
//Добавление текста в файл
function apTxt(t){
    fs.appendFile(path.resolve(__dirname, 'textFile.txt'), t, function(err){
        if(err){
            return console.log(err);
        }
    })
}
// Прерывание на ctrl+c
process.on('SIGINT', (signal) => {
    console.log('Horoshego dnya!')
    process.exit();
});


function writingText() {
    let text = '';
    process.stdin.on('data', (data) => {
        text = data.toString();
        if (text.trim() == 'exit') {
            process.exit(console.log('Vsego Horoshego!'));

        } else {
            apTxt(text);
        }
    });
}

