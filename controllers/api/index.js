const router = require('express').Router();
const userRoute = require('./userRoute');
const servicesRoute = require('./servicesRoute');

router.use('/users', userRoute);
// router.use('/services', servicesRoute);

module.exports = router;