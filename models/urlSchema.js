const mongose = require("mongoose");


const urlSchema = mongose.Schema({
    shortUrl :{
        type:String,
       
        unique:true
    },
    longUrl:{
        type:String,
        
        unique:true
    },
    // clicks:[{count:{}}]
    clicks:{
        type:Number,
        default:0
    }
})

const URL = mongose.model("url",urlSchema);

module.exports = URL;