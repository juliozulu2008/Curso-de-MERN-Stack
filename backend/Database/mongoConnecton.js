const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://julio-portifolio:julio.2016@cluster0.nozwjqs.mongodb.net/?retryWrites=true&w=majority", {
    useNewURLParser:true,
    useUnifiedTopology: true
}, ()=>{
    console.log("CONNECT TO MONGODB");
});