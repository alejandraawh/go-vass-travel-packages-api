const express = require("express");
const travelSchema = require("../models/travel");
const advertising = require("../models/advertising");

const router = express.Router();

// create travel package
router.post("/travel", (req,res)=>{
    const travel= travelSchema(req.body);
    travel
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});

//get all travel packages
router.get("/travel", (req,res)=>{
    travelSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});


//get a travel package
router.get("/travel/:id", (req,res)=>{
    const{ id }=req.params;
    travelSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});

//update a travel package
router.put("/travel/:id", (req,res)=>{
    const{ id }=req.params;
    const{ nameTravel, descriptionTravel, servicesTravel, noServicesTravel, requirementsTravel, durationTravel, priceTravel,country,city,urlImage}=req.body;
    travelSchema
    .updateOne({_id:id},{ $set: {nameTravel, descriptionTravel, servicesTravel, noServicesTravel, requirementsTravel, durationTravel, priceTravel,country,city,urlImage}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});

//delete a travel package
router.delete("/travel/:id", (req,res)=>{
    const{ id }=req.params;
    travelSchema
    .deleteOne({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
});

module.exports= router;
