const http =require('http');
const fs = require('fs');
const server =http.createServer((req,res)=>{
    console.log('server is running');
    res.setHeader('content-Type','text/html');
   let path = './';
   switch(req.url){
    case'/':
    path +='index.html';
    break;
    case'/about':
    path +='about.html';
    break;
    case'/about-me':
    res.statusCode = 301;
    res.setHeader('Location','/about');
    res.end();
    break;
    default:
        path +='404.html';
        break;
   }


    fs.readFile(path,(err,data)=>{
          if(err){
            console.log(err);
            res.end();
          }
          else{
            res.write(data);
            res.end();
          }

    })



});
server.listen(3000,()=>{
    console.log('server is running in port no 3000');
});

