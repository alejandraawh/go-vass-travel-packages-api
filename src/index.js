const express = require('express');
const mongoose=require('mongoose');
require("dotenv").config();

const app = express();
const port= process.env.PORT || 9000;

//routes
app.get('/',(req,res)=>{
    res.send('API');
})
//mongodb connection
mongoose.connect(process.env.MONGODB_URI).then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error(error));

app.listen(port,()=>console.log('server conected'));