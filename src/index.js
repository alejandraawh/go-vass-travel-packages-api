const express = require("express");
const mongoose=require("mongoose");
var cors=require("cors");
require("dotenv").config();
const travelRoutes = require("./routes/travel");
const advertisingRoutes = require("./routes/advertising");
const app = express();
const port= process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use(cors());
app.use('/govass/packages',travelRoutes)
app.use('/govass/advertising',advertisingRoutes)
//routes
app.get('/',(req,res)=>{
    res.send('API');
})
//mongodb connection
mongoose.connect(process.env.MONGODB_URI).then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error(error));

app.listen(port,()=>console.log('server conected'));