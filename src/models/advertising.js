const mongoose = require("mongoose");
const advertisingSchema= new mongoose.Schema({

    advertisingAccept:{
        type:Boolean,
        required:true
    },
    percentAdvertising:{
        type:Number,
    },
    urlImageAdvertising:{
        type:String
    },
    idPackage:{
        type:String,
        required:true
    }


});

module.exports = mongoose.model('Advertising', advertisingSchema);