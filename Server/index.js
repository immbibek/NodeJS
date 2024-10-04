const http=require("http") // built in node js module by using this we ca create server

const fs=require("fs");
const url=require('url');

const express=require("express");
const app=express();
app.get('/',(req,res)=>{
    return res.send("Hello from Home page")
})
app.get('/about',(req,res)=>{
    return res.send("Hello from about page.")
})

const myHandler=(req,resp)=>{
    console.log("New Req received.");
    const log=`${Date.now()}: ${req.method} ${req.url} New Req Received\n`
    const myUrl=url.parse(req.url);
    console.log(myUrl);
    fs.appendFile("log.txt",log,(err,data)=>{
       switch(req.url){
        case '/':
            if(req.method==="GET") resp.end("HomePage")
        break
        case '/about':resp.end("This is about page.");
        break;
        case '/Signup':
            if(req.method==="GET") resp.end("This is sign up form")
            else if(req.method==="POST"){
              // Db Query
              resp.end("Sucess");
                 
            }
        default:
            resp.end("404 Not found")
       }
    })
 
}


const myServer=http.createServer(app);

// To run this server we need a port number 

myServer.listen(8000,()=>console.log("Server Started."))
