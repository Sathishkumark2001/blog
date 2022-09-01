var fs = require('fs');

if(!fs.existsSync('./assests')){
fs.mkdir('./assests',(err)=>{
if(err){
    console.log(err);
}
console.log('folder created');
});

}else{
    fs.rmdir('./assests',(err) =>{
        if(err){
            console.log(err)
        }
        console.log('folder deleted');
    })
}
if(fs.existsSync('./untitlyyy.txt')){
    fs.unlink('./untitlyyy.txt',(err)=>{
        if(err){
            console.log(err)
        }
        console.log('file deleted');
    })
}