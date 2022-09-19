const router = require('express').Router();



require('../Database/mongoConnecton'); // conecxao com o banco

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