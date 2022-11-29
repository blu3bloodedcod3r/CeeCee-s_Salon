const router = require('express').Router();
const { User, Appt, Services} = require('../models');

router.get('/', async (req, res) => {

    try {
        const servicesData = await Services.findAll()
        const services = servicesData.map((data) => data.get({plain: true}))
        console.log(services)
        res.render('homepage', { services })

    } catch (err) {
        console.log("Error");
        res.status(500).json(err);
    }
    
    
});

router.get('/signup', async (req, res) => {
    res.render('signup')
});

router.get('/login', async (req, res) => {

  res.render('login');
});

// router.get('/services', async (req, res) => {
//     res.render('services')
// });

module.exports = router 