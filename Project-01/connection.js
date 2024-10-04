const mongoose=require("mongoose");
//Connection


async function ConnectMongoDb(url) {
    return mongoose.connect(url)
    
}
module.exports={
    ConnectMongoDb,
}
