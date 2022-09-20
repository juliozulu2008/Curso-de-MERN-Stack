const router = require('express').Router();

const Portifolio = require('../models/Portifolio');

//CREATE
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


//READ
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
});

router.get('/:slug', async(req, res) => {
    try {
        const portfolio = await Portifolio.findOne({
            slug: req.params.slug
        })
        res.json({
            succes:true,
            data:portfolio
        })
    } catch (error) {
        res.json({
          succes:false,
          message: error  
        })
    }
})

//UPDATE

router.patch('/:slug', async(req, res) =>{
    try {
        const updatePortifolio = await Portifolio.updateOne({
            slug: req.params.slug,
        },
        {
        title: req.body.title,
        description: req.body.description
        })

        res.json({
            succes:true,
            updated: updatePortifolio.modifiedCount
        })
    } catch (error) {
        res.json({
            succes:false,
            message: error
        })
    }
} )

//DELETE

router.delete('/:slug', async(req, res) =>{
    try {
        const deletedPortifolio = await Portifolio.deleteOne({
        slug: req.params.slug,
        })
        res.json({
            succes:true,
            deleted: deletedPortifolio.deletedCount
        })
    } catch (error) {
        res.json({
            succes:false,
            message: error
        })
    }
})

module.exports = router