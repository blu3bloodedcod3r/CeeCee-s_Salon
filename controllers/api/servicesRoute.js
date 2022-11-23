const router = require('express').Router();

router.get('/services', async (req, res) => {
    try{
        const selectService = await Services.getByPk({
            id: req.params.id,
            name: req.params.name,
            price: req.params.price,
            duration: req.params.duration
    });

        res.render('/services', {Services})    

    if (selectService) {
        res.render('/bookAppt', {Appt})
    }
    
    res.status(200).json(selectService);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router