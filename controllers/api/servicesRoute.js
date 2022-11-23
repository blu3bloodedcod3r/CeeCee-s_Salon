const router = require('express').Router();
const Services = require('../../models/Services')

router.get('/', async (req, res) => {
    // try{
    //     const selectService = await Services.getByPk({
    //         id: req.params.id,
    //         name: req.params.name,
    //         price: req.params.price,
    //         duration: req.params.duration
    // });
    // res.render('/services', {Services})   

    try {
        const servicesData = await Services.findAll()
        const service = servicesData.map((data) => data.get({plain: true}))
        console.log(data)
        res.render('services', { service })

    if (selectService) {
        res.render('/bookAppt', {Appt})
    }

    
    // res.status(200).json(selectService);

    } catch (err) {
        console.log("Error");
        res.status(500).json(err);
    }
});

module.exports = router