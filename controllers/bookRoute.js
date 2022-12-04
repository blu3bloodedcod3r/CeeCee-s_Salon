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

// When passing from browser to back end will result in 
router.post('/', async (req, res) => {
    try {
        const apptData = await Appt.create({
        date: req.body.email,
        time: req.body.time,
        description: req.body.service
    })
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router