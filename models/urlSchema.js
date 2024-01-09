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
    },
    createdAt:{
        type:Date,
        default:new Date()
        // default:1
    }
})

//creating expiry after 48 hours using TTL
urlSchema.index({createdAt:1},{expireAfterSeconds:30})

const URL = mongose.model("url",urlSchema);

module.exports = URL;