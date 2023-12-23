const mongoose = require("mongoose")



async function connectMongo(url){
    // console.log(url);
    return mongoose.connect(url);

}

module.exports = connectMongo;