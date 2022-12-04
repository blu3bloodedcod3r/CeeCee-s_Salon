const router = require('express').Router();
const Services = require('../models/Services')
const Appt = require('../models/Appt')
const AppointmentPicker = require('appointment-picker')
const pickerCSS = require('appointment-picker');

router.get('/', async (req, res) => {
    try {
        const serviceData = await Services.findAll()
        const services = serviceData.map((data) => data.get({plain: true}))
        res.render('bookappointment', { services, loggedIn: req.session.loggedIn })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/appointment', async (req, res) => {
    return res.render('appointment')
})


module.exports = router