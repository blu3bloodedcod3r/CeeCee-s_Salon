const router = require('express').Router();
const Services = require('../../models');


router.get('/', async (req, res) => {
    try{
        const selectServices = await Services.findAll({
            raw: true,
            nest: true
        });

        res.render('services', {selectServices})    

    if (selectServices) {
        res.render('/bookAppt', {Appt})
    }
    
    res.status(200).json(selectServices);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router