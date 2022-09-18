const router = require('express').Router();

router.get('/', (req, res) =>{
    //app data base
    const data = [{
        id: 1,
        name: "My fist Portifolio",
        createdAt: '2022/09/18'
    },
    {
        id: 2,
        name: "My Secont Projetc",
        createdAt: '2022/08/18'
    },
    {
        id: 3,
        name: "My other Projet",
        createdAt: '2022/05/01'
    }
];
    res.json({
        'succes':true,
        data: data
    });
});

module.exports = router