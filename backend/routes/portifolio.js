const router = require('express').Router();

const Portifolio = require('../models/Portifolio');

router.get('/', async (req, res) =>{
    try {
        const portfolio = await Portifolio.find()
    
        res.json({
            succes:true,
            data:portfolio
        })

    } catch (error){
        res.json({
            succes:false,
            message: error
        })
    }

    res.json({
        'succes':true
    });
});

router.post('/', async(req, res) =>{
    const portifolio = new Portifolio({
        title: req.body.title,
        description: req.body.description // nao passado a data pois sera default
    });
    try {
        const savedPortifolio = await portifolio.save()

        res.json({
            succes:true,
            data: savedPortifolio
        })
    } catch (err) {
        res.json({
            succes:false,
            message: err
        })
        
    }
}); // gravando conteudo no banco de dados

module.exports = router