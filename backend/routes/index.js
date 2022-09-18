const router = require('express').Router();

const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_URL_CONNECT, ()=>{
    console.log("CONNECT TO MONGODB");
});
// quando utiliza o Roueter renomeia o app.get para router
const portifolio = require('./portifolio');

router.get('/', (req, res)=>{
    res.json({
        success:false,
        message:"Please, do not call /api, it is for our server!"
    })
} )

router.use('/portifolio', portifolio);

//como vai ser utilizado tem que exportar o modulo

module.exports = router