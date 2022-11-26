const mongoose = require("mongoose");
const travelSchema= new mongoose.Schema({
    nameTravel:{
        type:String,
        required:true
    },
    descriptionTravel:{
        type:String,
        required:true
    },
    servicesTravel:{
        type:String,
        required:true
    },
    noServicesTravel:{
        type:String,
        required:true
    },
    requirementsTravel:{
        type:String,
        required:true
    },
    durationTravel:{
        type:Number,
        required:true
    },
    priceTravel:{
        type:Number,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    urlImage:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Travel', travelSchema);