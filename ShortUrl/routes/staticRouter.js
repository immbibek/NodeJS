const express=require("express");


const router=express.Router();
router.get('/',async (req,res)=>{
    const allurl=await URL.find({})
    return res.render('Home',{
        urls:allurl,
    })
})
router.get('/signup',(req,res)=>{
    return res.render('Signup');
})

router.get('/login',(req,res)=>{
    return res.render('login');
})
module.exports=router;