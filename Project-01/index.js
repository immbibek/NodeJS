const express=require('express')
const users=require('./MOCK_DATA.json');
const app=express();
const PORT=8000;
const fs=require('fs');
const mongoose=require("mongoose");

const userRouter=require("./Routes/user")

const {ConnectMongoDb}=require('./connection')

ConnectMongoDb("mongodb://localhost:27017/learningDB")

const {logReqRes}=require('./middleware/index')


// middle ware
app.use(express.urlencoded({extended:false}));
app.use(logReqRes("log.txt"));
// app.use((req,res,next)=>{
//     console.log("Hello from middleware1");
//     return res.json({msg: "Hello from middle ware 1"})


// })         


// Routes

app.listen(PORT,()=>console.log(`Server started at PORT:${PORT}`));