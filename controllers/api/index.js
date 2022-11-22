const router = require('express').Router();
const userRoutes = require('./userRoute');
const serviceRoutes = require('./servicesRoute');

router.use('/users', userRoutes);
router.use('/services', serviceRoutes);

module.exports = router;