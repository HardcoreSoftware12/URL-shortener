const express = require("express")
const path = require("path")
const app = express();
const connectMongo =require("./config/mongose")
const dotenv  = require("dotenv").config();
const Router = require("./routes/index")


// app.use(express.static(path.join(__dirname, 'views'))); 

app.set("view engine","ejs");
console.log(__dirname);
console.log(path.join(__dirname+"/views"));
app.set("views",path.join(__dirname,"/views"))

app.use(express.json());
app.use("/",Router)




connectMongo(process.env.URI).then(console.log("connected to mongoDB"))




app.listen(3000,()=>{
    console.log(("server connected on port 3000"));
})