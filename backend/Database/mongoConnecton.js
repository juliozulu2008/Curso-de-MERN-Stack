const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL_CONNECT, {
    useNewURLParser:true,
    useUnifiedTopology: true
}, ()=>{
    console.log("CONNECT TO MONGODB");
    
});