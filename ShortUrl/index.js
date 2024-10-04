const express=require("express");
const {connectTomongoDB}=require('./connect')
const path=require('path')
const cookieParser=require('cookie-parser')
const urlRoute=require("./routes/url");
const{restricToLoggedinUserOnly}=require('./middleware/auth')
const URL=require('./model/url')
const staticRoute=require('./routes/staticRouter')

const userRoute=require('./routes/user')

const app=express();
const PORT=8001;

connectTomongoDB('mongodb://localhost:27017/short-url').then(()=>console.log("MongoDb connected"))

app.set('view engine','ejs');
app.set('views',path.resolve("./view"))




//middleware
app.use(express.json())
// to parse form data i need middleware
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());


app.use("/url",restricToLoggedinUserOnly,urlRoute);
app.use("/user",userRoute);
app.use("/",staticRoute);

app.get('/url/:shortId',async (req,res)=>{
    const shortId=req.params.shortId;
   const entry= await URL.findOneAndUpdate({
        shortId
    },{$push:{
        VisitHistory:{
            timestamp:Date.now()
        }
    }})
   res.redirect(entry.redirectURL)
})

app.listen(PORT,()=>console.log("Server started at POST",PORT))