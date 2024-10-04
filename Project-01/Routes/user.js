const express=require("express");

const router=express.Router();
const {handleGetAllUsers}=require('../Controller/user')

router.get("/api/users",(req,resp)=>{
    return resp.json(users)
})
router.get('/users',(req,res)=>{
    // when the y go on path /user i hasve render html documnet somthing like this
    /*
       <ul>
         <li> name<li>
        </ul>

    */
   const html=`
   <ul>
       ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
   </ul>
   
   `;
   res.send(html)
})

router.get("/api/users/:id",(req,res)=>{
    const id=Number(req.params.id);
    const user=users.find((user)=>user.id===id);
    
    return res.json(user);
    
})

router.post('/api/users',async (req,res)=>{
   const body=req.body;
   if(
    !body ||
    !body.firstName ||
    !body.lastName ||
    !body.email ||
    !body.gender ||
    !body.jobTitle
   ){
    return res.status(400).json({msg:"All fields are required.."});
   }
   const result=await User.create({
     firstName:body.firstName,
     lastName:body.lastName,
     email:body.email,
     gender:body.gender,
     jobTitle:body.jobTitle,

   });
   console.log("result",result);
   return res.status(201).json({msg:"sucess"})
   
})

router.patch('/api/users/:id',(req,res)=>{
    // TODO:Edit the users with id
    return res.josn({status:"Pending"})
})

router.delete('/api/users/:id',(req,res)=>{
    // TODO:delete the users with id
    return res.josn({status:"Pending"})
})

module.exports=router;