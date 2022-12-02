const router = require('express').Router();

const homeRoutes = require('./homeRoute')
const apiRoutes = require('./api');

const appointmentRoute = require('./bookRoute')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/book', appointmentRoute)

module.exports = router;