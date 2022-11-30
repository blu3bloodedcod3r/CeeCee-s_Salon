const router = require('express').Router();
const userRoute = require('./userRoute');
// const bookAppt = require('./bookAppt');

router.use('/users', userRoute);
// router.use('/appointment', bookAppt);

module.exports = router;