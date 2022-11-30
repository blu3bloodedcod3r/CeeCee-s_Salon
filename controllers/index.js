const router = require('express').Router();

const homeRoutes = require('./homeRoute')
const apiRoutes = require('./api');
const appointmentRoute = require('./appointmentRoute')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/appointment', appointmentRoute)

module.exports = router;