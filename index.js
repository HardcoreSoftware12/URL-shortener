const express = require("express")

const serverless = require("serverless-http");
const path = require("path")
const app = express();
const connectMongo =require("./config/mongose")
const dotenv  = require("dotenv").config();
const Router = require("./routes/index");
const exp = require("constants");
const PORT = process.env.PORT || 3000;

 

app.set("view engine","ejs");


app.set("views",path.join(__dirname,"/views"))

app.use(express.static(path.join(__dirname,"public")))

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use("/",Router)




connectMongo(process.env.URI).then(console.log("connected to mongoDB"))




app.listen(PORT,()=>{
    console.log("server connected on port",PORT);
})