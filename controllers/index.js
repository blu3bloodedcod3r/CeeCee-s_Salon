const router = require('express').Router();

const homeRoutes = require('./homeRoute')
const apiRoutes = require('./api');
// const appointmentRoute = require('./appointmentRoute')
const adminRoute = require('./adminRoute');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
// router.use('/appointment', appointmentRoute)
router.use('/admin', adminRoute);

module.exports = router;