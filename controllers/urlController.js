// const shortID = require("short-id");
const shortId = require("shortid")
const URL = require("../models/urlSchema")




const urlShortener =async(req,res)=>{
    
    console.log(req.body.url);
    const long = req.body.url;
    if(!long){
        res.status(400).send("url is required")
    }else{
        const short = shortId.generate();
        await URL.create({
        shortUrl:short,
        longUrl:long,
        // clicks:[]
            
    })
    return res.json({url:short})

    }
    
}

const getLongUrl = async(req,res)=>{
    const short = req.params.shortId;
    console.log(short);

    // const results = await URL.findOneAndUpdate({short},{
    //     $inc:{
    //         clicks:1
    //     }
    // })
    // console.log(results);

    // res.redirect(results.longUrl)




    try {
        const myDoc = await URL.findOne({shortUrl:short})
        console.log(myDoc);
        if(!myDoc){
            return res.status(400).json({error:"URL not found"})
        }
        myDoc.clicks += 1
        await myDoc.save();
        // res.json({})
        res.redirect(myDoc.longUrl)
        
    } catch (error) {
        console.log(error);
        
    }
       


}

const totalClicks = async(req,res)=>{
    const url = req.params.url;
    console.log(url);

    const myDoc = await URL.findOne({
        $or:[
            {shortUrl:url},
            {longUrl:url}
        ]
    })
    console.log(myDoc);
    if(!myDoc){
        return res.status(400).json({error:"no such url found"})
    }else{
        // res.status(200).send("Total clicks : ",myDoc.clicks)
        console.log(myDoc.clicks);
    }

}




module.exports = {
    urlShortener,
    getLongUrl,
    totalClicks
}