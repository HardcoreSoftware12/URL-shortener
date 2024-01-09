const express = require("express")
const Router = express.Router();
const {urlShortener,getLongUrl,totalClicks,reset,createUser,login} = require("../controllers/urlController")

//Hom page
Router.get("/",(req,res)=>{
     // res.render("index")
     res.render("login")
})
Router.get("/login",(req,res)=>{
     // res.render("index")
     res.render("login")
})


Router.post("/loginuser",login)

Router.get("/register",(req,res)=>{
     res.render("register")
})

Router.post("/create-user",createUser)
//create s short url
Router.post("/url/shortener",urlShortener)

//get deatials of the short url
Router.get("/url/:shortId",getLongUrl)

//get the total clicks on your site through this server
Router.get("/url/clicks/:url",totalClicks)


Router.get("/url/reset",reset)


module.exports = Router;