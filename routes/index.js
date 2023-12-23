const express = require("express")
const Router = express.Router();
const {urlShortener,getLongUrl,totalClicks,reset} = require("../controllers/urlController")

//Hom page
Router.get("/",(req,res)=>{
     res.render("index")
})
//create s short url
Router.post("/url/shortener",urlShortener)

//get deatials of the short url
Router.get("/url/:shortId",getLongUrl)

//get the total clicks on your site through this server
Router.get("/url/clicks/:url",totalClicks)


Router.get("/url/reset",reset)


module.exports = Router;