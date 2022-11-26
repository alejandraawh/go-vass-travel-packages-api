const express = require("express");
const advertising = require("../models/advertising");
const travelSchema = require("../models/travel");
const router = express.Router();

// create configuration for the advertising
router.post("/accept", (req,res)=>{
    const advertising= advertisingSchema(req.body);
    advertising
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});
//get a travel package
router.get("/acceptAdvertising/:id", (req,res)=>{
    const{ id }=req.params;
    travelSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});
//create a advertising
router.get("/packageAdvertising/:_id/:_idAdvertising", async function(req,res){
    const user= await travelSchema.findById(req.params);
    const adv= await advertising.findById(req.params._idAdvertising);
        let responseService=[];
        responseService.push(user);
        responseService.push(adv);
        res.json(responseService);
    
});


module.exports= router;
