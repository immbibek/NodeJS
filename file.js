const fs=require("fs") // it's a built in module

// ----------------to create file----------

// sync..  --> it retunring something
// fs.writeFileSync('./test.txt','data to store in a txt file.')

// Async --->  it not returning anything
// fs.writeFile('./test.txt','hello world Aynsc',(err)=>{});

// -------------------read file--------
// const result=fs.readFileSync("./contact.txt","utf-8");
// console.log(result)

// fs.readFile("./contact.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error",err);
//     }else{
//         console.log(result);
//     }
// })

// // in previous if i try to write another line of txt then it overide so to overcome this.

// fs.appendFileSync("./contact.txt",new Date().getDate().toLocaleString());


// //------- To delete file----
// fs.unlinkSync("./contact.txt")

// //___---to get stats --
// console.log(fs.statSync("./contact.txt"))

// // ---to make directory or folder ands files inside the folder

// fs.mkdirSync("myDoc")  



//-------Blocking.........
console.log("1");
const result=fs.readFileSync('./contact.txt','utf-8');
console.log(result);
console.log("2");
// Output:
//1
//.txt datas
//2

// Default Thread Pool Size =4threads
// Max? -8core CPU=8 threads



//-------Non-Blocking.........
console.log("1");
// const result=fs.readFile('./contact.txt','utf-8',(err,result)=>{console.log(result)});

// console.log("2");
//  Output:
// 1
//2
// then it gives .text file datas