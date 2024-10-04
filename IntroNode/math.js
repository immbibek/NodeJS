
// const add=(a,b)=>{
//     let sum =a+b;
//     return sum;
// }

// function sub(a,b){
//     return a-b;
// }
// // module.exports=add;  -----> it will override by the sub function so it run only sub function only ----> to overcome this problem we hat  use javascript object to return multiple things.

// // module.exports=sub

// module.exports={

//     addFun:add,
//     subFun:sub,
// }

// another way to export by using exports object in javascript

exports.add=(a,b)=>a+b;
exports.sub=(a,b)=>a-b;