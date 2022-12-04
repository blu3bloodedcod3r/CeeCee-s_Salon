const router = require('express').Router();
const userRoute = require('./userRoute');
const apptRoute = require('./apptRoute');

router.use('/users', userRoute);
router.use('/appointment', apptRoute);

module.exports = router;