const mongose = require("mongoose");


const userSchema = mongose.Schema({
   
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const User = mongose.model("user",userSchema);

module.exports = User;