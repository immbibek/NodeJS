const shortid=require("shortid");

const URL=require('../model/url')

async function handleGenerateNewShortURL(req,res) {
    const body=req.body;
    if(!body.url) return res.status(400).json({error:'url is required'});


    const shortID=shortid();
    await URL.create({
        shortId:shortID,
        redirectURL:body.url,
        VisitHistory:[]
    });
    return res.render('home',{
        id: shortID
    });
   
    
}

async function handleGetAnalytics(req,res){
    const shortId=req.params.shortId;
    const result=await URL.findOne({shortId});

    return res.json({totalClicks:result.VisitHistory.length,
                    analytics:result.VisitHistory,
    });



}

module.exports={
    handleGenerateNewShortURL, 
    handleGetAnalytics
}