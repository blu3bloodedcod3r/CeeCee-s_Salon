const router = require('express').Router();
const Services = require('../models/Services')
const Appt = require('../models/Appt')
const AppointmentPicker = require('appointment-picker')
const pickerCSS = require('appointment-picker');

router.get('/', async (req, res) => {
    try {
        const serviceData = await Services.findAll()
        const services = serviceData.map((data) => data.get({plain: true}))
        console.log('services', services)
        res.render('bookappointment', { services, loggedIn: req.session.loggedIn })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/appointment', async (req, res) => {
    return res.render('appointment')
})

router.get('/confirmation', async (req, res) => {
    try {
        // console.log(req.session.userId)
        // const apptData = await Services.findAll({
        //     order: ['timestamps'], 
        //     where: {
        //         user_id: req.session.userId
        //     }, 
        // })
        // const appt = apptData.get({ plain: true })
        // console.log(appt)
        // res.render('confirmation', { appt, loggedIn: req.session.login })
        res.render('confirmation', { loggedIn: req.session.login })
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router