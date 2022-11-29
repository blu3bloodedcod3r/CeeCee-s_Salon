const router = require('express').Router();
const userRoute = require('./userRoute');
const bookAppt = require('./bookAppt');

router.use('/users', userRoute);
router.use('/bookAppt', bookAppt);

module.exports = router;