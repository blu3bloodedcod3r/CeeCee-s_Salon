const router = require('express').Router();

router.get('/', async (req, res) => {
    try{
        const selectService = await Services.getByPk({
            id: req.params.id,
            name: req.params.name,
            price: req.params.price,
            duration: req.params.duration
    });

    if (selectService) {
        //grab calendar annd book appt.
    }
    
    res.status(200).json(selectService);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})